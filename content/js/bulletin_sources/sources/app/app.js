/**
 * Created by JohnMak on 27/11/15.
 */
var Ractive = require('ractive');

var id_wrapper = '#bulletin_placeholder ';

var helpers = require('./helpers.js');

require('../plugins/scroll_lock/jquery-scrollLock.min.js');
require('../plugins/touch_support.js');
require('../plugins/touchrotate.jquery.js');

Ractive.DEBUG = false;

var BulletinWrapper = function(params) {
    var default_params = {
        onRender: function() {},
        onBoardLoad: function() {},
        onBoardSave: function() {},
        onHeart: function(heart_id) {},
        onShare: function(heart_id) {},
        onPlay: function(heart_id) {},
        onRemove: function(heart_id) {},
        serverWaitTimeOut: 0,
        content: {
            scale_factor: 10,
            is_alphabet_shown: true,
            achieves: [],
            week_sticker: {},
            avatar_sticker: {},
            data: {},
            no_animation: false,
            heart_list: []
        },
        init_board_data: {
            border_color: 'yellow',
            cur_board: 0,
            boards: [
                {
                    stickers: []
                }
            ]
        }
    };
    if (typeof params.apiKey === 'undefined')
        console.error('Please add apiKey to import params of bulletin app constructor');

    params = $.extend(true, default_params, params);
    params.content.data = $.extend(true, params.content.data, params.init_board_data);

    var Bulletin = Ractive.extend({
        ver:        '0.21',
        need_clear_data_from_previous: true,


        modifyArrays: false,
        el:         id_wrapper,
        apiKey:     params.apiKey,
        template:   require('./app.ract'),
        components: {
            Sticker: require('./sticker/sticker.js')
        },
        api_provider: new (require('./api_provider.js'))(params.apiKey, params.serverWaitTimeOut),
        maximum_z_index: 0,
        send_timeout: null,
        onStickerShare: function(sticker) {
            return this.run_handler('onShare', sticker);
        },
        onStickerHeart: function(sticker) {
            return this.run_handler('onHeart', sticker);
        },
        onStickerPlay: function(sticker) {
            return this.run_handler('onPlay', sticker);
        },
        onStickerRemove: function(sticker) {
            //var heart_list = this.get('heart_list');
            //for (var i in heart_list) {
            //    if (heart_list[i].heart_id == sticker.heart_id){
            //        heart_list.splice(i, 1);
            //        break;
            //    }
            //}
            //this.set('heart_list', heart_list);
            return this.run_handler('onRemove', sticker);
        },

        run_handler: function(func_name, params_list) {
            if (typeof params[func_name] === 'function')
                return params[func_name].call(this, params_list);
            else
                return true;
        },

        //--------------------------  INTERFACE FOR MANIPULATING WITH STICKERS  --------------------------//

        getStickerPathObj: function(uid, heart_id){
            var boards = this.get('data.boards');
            for (var i in boards) if (boards.hasOwnProperty(i)) {
                var board = boards[i];
                for (var j in board.stickers) if (board.stickers.hasOwnProperty(j)) {
                    var sticker = board.stickers[j];

                    if ((uid && typeof sticker.uid !== 'undefined' && sticker.uid == uid) ||
                        (heart_id && typeof sticker.heart_id !== 'undefined' && sticker.heart_id == heart_id)) {
                        return {
                            path: 'data.boards.'+i+'.stickers.'+j,
                            board: i,
                            sticker: j
                        }
                    }
                }
            }
            return false;
        },

        //--------------------------  CREATE STICKER  --------------------------//
        createSticker: function(data, board_i) {
            if (typeof board_i === 'undefined')
                board_i = this.get('data.cur_board');

            var new_sticker = $.extend({
                uid: helpers.genid(4),
                z: this.maximum_z_index++
            }, data);

            if (typeof new_sticker.x === 'undefined' || new_sticker.x == -1){
                new_sticker.x = Math.abs(Math.random()*90);}
            if (typeof new_sticker.y === 'undefined' || new_sticker.y == -1)
                new_sticker.y = Math.abs(Math.random()*90);



            if (data.type == "week") {
              new_sticker = $.extend(new_sticker, this.get('week_sticker'));
            }
            if (data.type == "avatar") {
              new_sticker = $.extend(new_sticker, this.get('avatar_sticker'));
            }
            if (data.type == "app" && typeof new_sticker.heart_id === 'undefined') {
                new_sticker.heart_id = helpers.genid(5)
            }

            var stickers = this.get('data.boards.'+board_i+'.stickers');
            stickers = stickers ? stickers : [];

            stickers.push(new_sticker);

            this.set('data.boards.'+board_i+'.stickers', stickers);
        },

        //--------------------------  UPDATE IF EXIST OR DO CALLBACK STICKER  --------------------------//
        updateSticker: function(uid, data, new_board, not_found_callback) {

            var sticker_path_obj = this.getStickerPathObj(uid);
            if (sticker_path_obj.path != false) {
                var boards = this.get('data.boards');
                var sticker = $.extend(true, {}, this.get(sticker_path_obj.path), data);
                if (typeof new_board !== 'undefined' && new_board != sticker_path_obj.board && new_board>=0 && new_board < boards.length) {
                    boards[sticker_path_obj.board].stickers.splice(sticker_path_obj.sticker, 1)[0];
                    boards[new_board].stickers.push(sticker);
                    this.set('data.boards', boards);
                }
                else {
                    this.set(sticker_path_obj.path, sticker);
                }
            }
            else {
                if (typeof not_found_callback === 'function')
                    not_found_callback();
                else
                    console.warn('Not found updating element by uid: '+uid);
            }
        },

        //--------------------------  DELETE BY UID STICKER  --------------------------//
        removeSticker: function(uid, not_found_callback) {
            var self = this;
            var sticker_path_obj = this.getStickerPathObj(uid);
            if (sticker_path_obj.path != false) {
                this.set('no_animation', true);
                var boards = this.get('data.boards');
                boards[sticker_path_obj.board].stickers.splice(sticker_path_obj.sticker, 1);
                this.set('data.boards', boards);
                setTimeout(function() { self.set('no_animation', false); }, 200);
            }
            else {
                if (typeof not_found_callback === 'function')
                    not_found_callback();
                else
                    console.warn('Not found deleting element by uid: '+uid);
            }
        },



        //--------------------------  UPDATE HEART STICKERS LIST ON BOARD  --------------------------//
        update_heart_stickers: function(new_val, old_val){
            //console.log(new_val, old_val);
            var heart_list = this.get('heart_list');
            //console.log(heart_list);

            var boards = this.get('data.boards');
            var stickers_to_delete = [];
            for (var i in boards) if (boards.hasOwnProperty(i)){

                for (var j in boards[i].stickers) if (boards[i].stickers.hasOwnProperty(j)){
                    if (boards[i].stickers[j].type == 'app')
                        stickers_to_delete.push($.extend(true, {}, boards[i].stickers[j]));
                }
            }

            for (var heart_i in heart_list) {
                var heart_sticker = heart_list[heart_i];
                if (!this.getStickerPathObj(false, heart_sticker.heart_id))
                    this.createSticker(heart_sticker);
                else {
                    for (var i in stickers_to_delete) if (stickers_to_delete.hasOwnProperty(i)) {
                        if (stickers_to_delete[i].heart_id == heart_sticker.heart_id) {
                            stickers_to_delete.splice(i, 1);
                            break;
                        }
                    }
                }
            }

            for (var i in stickers_to_delete) if (stickers_to_delete.hasOwnProperty(i)) {
                this.removeSticker(stickers_to_delete[i].uid);
            }


        },


        //--------------------------  INIT PANEL'S ITEMS DRAGGING  --------------------------//
        init_panels_dragging: function() {
            this.dragger.init_adding();
        },

        //--------------------------  INIT BOARD DRAGGING  --------------------------//
        init_board_dragging: function() {
            var self = this;
            setTimeout(function(){
                self.dragger.init();
            }, 50)
        },

        //--------------------------  LOAD BOARD FROM SERVER  --------------------------//
        load_board: function(callback){
            var self = this;
            self.set('state', 'loading_board');
            this.api_provider.load_board(function(data){
                self.set('state', 'playing');

                data = $.extend(true, {}, params.board_data, data);
                if (typeof data !== undefined && data) {
                    self.set('data', data);
                }

                self.init_count_z_index();

                if (callback)
                    callback();


                self.run_handler('onLoad');
            });
        },


        //--------------------------  SET TO SAVE BOARD FROM SERVER  --------------------------//
        save_board: function(){
            var self = this;
            function save_board(){
                var data = self.get('data');
                if (typeof data !== undefined && data){
                    self.api_provider.save_board(data);
                }
            }

            clearTimeout(this.send_timeout);

            this.send_timeout = setTimeout(function(){

                if (!self.is_not_first_time_sending) {
                    self.is_not_first_time_sending = true;
                    return;
                }

                save_board();}, 1000);

        },


        //--------------------------  COUNT OVERALL MAXIMUM Z-INDEX OF STICKERS  --------------------------//
        init_count_z_index: function(){
            var boards = this.get('data.boards');
            var self = this;

            for (var i in boards) {
                var board = boards[i];
                if (board && typeof board !== 'undefined' && typeof board.stickers !== 'undefined') {
                    for (var j in board.stickers) {
                        var sticker = board.stickers[j];
                        if (typeof sticker.z !== 'undefined') {
                            self.maximum_z_index = Math.max(sticker.z, self.maximum_z_index);

                        }
                    }
                }
            }
        },


        //--------------------------  INIT ALPHABET SCROLL  --------------------------//
        init_alphabet_scroll: function() {
            var self = this;


            $('body').scrollLock('on', id_wrapper+'.scroll_lock');

            var alph_scroll_to_pos = 0;
            var alph_scroll_timer;


            var scrollCover = $(self.findAll('.blt_alphabet_box_content_scrollbox_cover'));
            var scrollObj = scrollCover.find('> div');

            function dynamic_scroll() {
                if (!alph_scroll_timer) {
                    alph_scroll_timer = setInterval(function () {
                        var curScroll = scrollObj.offset().top + scrollObj.scrollTop() - scrollCover.offset().top - scrollCover.scrollTop();
                        var delta = alph_scroll_to_pos - curScroll;

                        if (Math.abs(delta) > 10) {
                            delta = delta*4 / 5;
                        }

                        scrollObj.animate({scrollTop: curScroll + delta}, 100, 'linear');

                        if (Math.abs(delta) < 2) {
                            clearInterval(alph_scroll_timer);
                            alph_scroll_timer = false;
                        }


                    }, 100);

                }
            }

            function scroll_slphabet(steps) {

                var item_h = 37;
                var scroll = item_h*steps;


                var maximum_scroll = $(self.find('.blt_alphabet_box_content_scrollbox_correct_frame')).height()-$(self.find('.blt_alphabet_box_content_scrollbox')).height();
                alph_scroll_to_pos = Math.round((alph_scroll_to_pos+scroll)/item_h)*item_h;
                alph_scroll_to_pos = Math.max(0, Math.min(alph_scroll_to_pos,maximum_scroll));


                dynamic_scroll()
            }

            $('.blt_alphabet_box_content .blt_arrow_up').click(function(){
                scroll_slphabet(-3)
            });
            $('.blt_alphabet_box_content .blt_arrow_down').click(function(){
                scroll_slphabet(3)
            });

        },


        //--------------------------  INIT UI  --------------------------//
        init_ui: function(){

            this.init_alphabet_scroll();

            $(this.find('#blt_wheel_wrapper')).touchrotate({handle:"#blt_wheel_rotate_area"});

            $('body').on('mousedown', function(){
                $('.blt_workflow_app_sticker_to_drag.hover').removeClass('hover');
            });
            $('body').on('click', '.blt_workflow_app_sticker_to_drag', function() {
                $(this).toggleClass('hover');

            });
        },

        onrender: function(){
            var self = this;


            this.dragger = new (require('./dragger.js'))(this);


            this.init_panels_dragging();
            this.init_ui();



            this.load_board(function() {


                var newer = false;
                var prev_ver = self.get('data.version', self.ver);
                if (prev_ver) {
                    var cur_ver_arr = self.ver.split('.');
                    var prev_ver_arr = prev_ver.split('.');

                    for (var i in cur_ver_arr) {
                        if (i == prev_ver_arr.length || parseInt(cur_ver_arr[i]) > parseInt(prev_ver_arr[i])) {
                            newer = true;
                            break;
                        }
                    }
                }
                else { newer = true; }

                if (newer && self.need_clear_data_from_previous) {
                    self.reset_board_data();
                }

                self.set('data.version', self.ver);

                self.observe('data.*', self.save_board);

                self.update_heart_stickers();

            });


            this.observe('data.boards.*', this.init_board_dragging);
            this.observe('data.cur_board', this.init_board_dragging);

            this.observe('heart_list', this.update_heart_stickers);


            this.run_handler('onRender');

            this.on('toggle-achievement', function(){
              var SPEED = 500;
              var w_height = $(window).height();
              var container_elm = $(this.find('.blt_achieve_content'));
              var content_elm = $(this.find('.blt_achieve_content > .blt_content'));
              var to_height = content_elm.outerHeight();

              $('body').animate({scrollTop: (container_elm.offset().top+to_height-w_height)}, SPEED);
              return;
              if (container_elm.height() == 0) {
                container_elm.animate({height: to_height}, 0, function(){
                  $('body').animate({scrollTop: (container_elm.offset().top+to_height-w_height)}, SPEED);
                  $(self.find("#blt_achieve_slide")).addClass('active')
                });

              }
              else {
                container_elm.animate({height: 0}, SPEED);
                $(self.find("#blt_achieve_slide")).removeClass('active');
                $('body').animate({scrollTop: (container_elm.offset().top+0-w_height)}, SPEED, function(){
                });
              }

            });


            function checkScrollStacking(e){
              var bottom_line = $(window).scrollTop() + $(window).height();
              var ach_elm = $("#blt_achieve_slide");
              if ( ach_elm.length > 0 ) {
                  if (ach_elm.offset().top+parseFloat(ach_elm.css('paddingTop')) > bottom_line)
                    ach_elm.find(".blt_header").addClass("sticked");
                  else
                    ach_elm.find(".blt_header").removeClass("sticked");
              }
            }

            $(window).on('scroll', checkScrollStacking);
            checkScrollStacking();

            $(window).on('resize', function() {self.rescale()});
            self.rescale();

        },
        rescale: function(){
            this.set('scale_factor', Math.min($(window).width()/70, 15));
        },

        reset_board_data: function(){
            this.set('data', params.init_board_data);
        },

        //--------------------------  HANDLE NEXT PAGE PAGING  --------------------------//
        next_board: function(create_new){
            var cur_board = this.get('data.cur_board');
            var boards = this.get('data.boards');

            if (boards.length == cur_board+1 && ( (boards[cur_board].stickers.length == 0 && (typeof create_new === 'undefined' || create_new)) || (typeof create_new !== 'undefined' && !create_new ) ) )
                return;
            cur_board += 1;
            if (boards.length <= cur_board) {
                boards.push({stickers:[]});
                this.set('data.boards',boards);
            }

            this.set('data.cur_board', cur_board);
        },


        //--------------------------  HANDLE PREV PAGE PAGING  --------------------------//
        prev_board: function(create_new){
            var cur_board = this.get('data.cur_board');
            var boards = this.get('data.boards');

            if (cur_board == 0 && ( (boards[cur_board].stickers.length == 0 && (typeof create_new === 'undefined' || create_new)) || (typeof create_new !== 'undefined' && !create_new ) ) )
                return;
            cur_board -= 1;
            if (cur_board < 0) {
                boards.splice(0,0,{stickers:[]});
                this.set('data.boards',boards);
                cur_board = 0;
            }

            this.set('data.cur_board', cur_board);
        },

        data: function(){

            return params.content;
        }




    });

    return Bulletin();
};

window.BulletinApp = BulletinWrapper;
