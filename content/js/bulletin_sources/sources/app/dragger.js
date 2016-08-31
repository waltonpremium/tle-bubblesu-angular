/**
 * Created by JohnMak on 15/12/15.
 */

var helpers = require('./helpers.js');

var Dragger = function(app) {


    var mouse = {x:0, y:0};
    var state = 'uninitialized';

    //var obj_x, obj_y;
    var board_start_drag = app.cur_board;
    var self = this;


    function checkDragWatcher(set_elm) {
        var self = this;
        var elm = set_elm;
        this.paging_interval = false;
        var paging_timer = 0;

        var check = function() {
            if (helpers.check_intersaction_coord(mouse.x, mouse.y, elm)) {

                var cur_time = (new Date()).getTime();

                if (paging_timer == 0)
                    paging_timer = cur_time;
                else if (cur_time - paging_timer > 1000) {
                    if (elm.hasClass('blt_huge_pagination_left'))
                        app.prev_board(false);
                    if (elm.hasClass('blt_huge_pagination_right'))
                        app.next_board(false);
                    paging_timer = cur_time;
                }

                elm.addClass('hover');
            }
            else {
                //self.stop_checking();
                elm.removeClass('hover');
            }
        };

        this.start_checking = function() {
            if (!self.paging_interval) {
                self.paging_interval = setInterval(check, 50);
            }
        };
        this.stop_checking = function() {
            if (self.paging_interval) {
                clearInterval(self.paging_interval);
                self.paging_interval = false;
                paging_timer = 0;
            }
        };
    }

    var checkDragWatcher = {
        next: new checkDragWatcher($(app.find('.blt_huge_pagination_right'))),
        prev: new checkDragWatcher($(app.find('.blt_huge_pagination_left')))
    };



    function dragStartHandle(e, ui){
        self.state = 'dragging';
        checkDragWatcher.next.start_checking();
        checkDragWatcher.prev.start_checking();

        $(app.find("#blt_board")).addClass("blt_dragging_element_"+ui.helper.attr('sticker_type')+'_'+ui.helper.attr('sticker_opt'));

        ui.helper.addClass('blt_ui-draggable-dragging');
        ui.helper.css('z-index', app.maximum_z_index++);
        ui.helper[0]._ractive.root.component.instance.set({'z': app.maximum_z_index});

        //obj_x = parseInt(ui.helper.css('left'));
        //obj_y = parseInt(ui.helper.css('top'));
    }


    function removeBoardSticker(elm) {
        var uid = elm._ractive.root.component.instance.get('data.uid');
        app.removeSticker(uid);
    };

    function dragStopHandle(e, ui){
        ui.helper.removeClass('blt_ui-draggable-dragging');
        checkDragWatcher.next.stop_checking();
        checkDragWatcher.prev.stop_checking();

        //if (Math.abs(obj_x - parseInt(ui.helper.css('left'))) < 10 || Math.abs(obj_y - parseInt(ui.helper.css('top'))) < 10 ) {
        //    ui.helper.toggleClass('hover');
        //
        //    ui.helper.css('top', obj_y+'px');
        //    ui.helper.css('left', obj_x+'px');
        //
        //    return;
        //}


        var angle = 10-Math.round(20*Math.random());
        ui.helper.find('[class^="angle"]').removeClass().addClass('angle'+angle);


        setTimeout(function(){

            function moveDraggingUIElement() {
                var board = $(app.find(".blt_board_working_area"));
                var x = ui.offset.left - board.offset().left;
                var y = ui.offset.top - board.offset().top;

                x = Math.max(0,Math.min(board.width()-ui.helper.width(), x))/board.width()*100;
                y = Math.max(0,Math.min(board.height()-ui.helper.height(), y))/board.height()*100;
                ui.helper.css('top', y+"%").css('left', x+"%");

                var updateData = {
                    x:x,
                    y:y,
                    z: app.maximum_z_index,
                    angle: angle
                };

                var uid = ui.helper[0]._ractive.root.component.instance.get('data.uid');
                app.updateSticker(uid, updateData, app.get('data.cur_board'));
            }


            var app_type = ui.helper.attr('sticker_type') == 'app' ? ui.helper.attr('sticker_opt') : false;

            if (app_type && helpers.check_intersaction_coord(e.pageX, e.pageY, $(app.find('.blt_trash_'+app_type)) )) {
                $(app.find("#blt_board")).removeClass("blt_dragging_element_"+ui.helper.attr('sticker_type')+'_'+ui.helper.attr('sticker_opt'));
                self.state = 'ready';
                var res = app.onStickerRemove(ui.helper[0]._ractive.root.component.instance.get('data'));
                if (typeof res === 'undefined' || res != false) {
                    removeBoardSticker(ui.helper[0]);
                    return;
                }
            }
            else {
                if (helpers.check_intersaction_coord(e.pageX, e.pageY, $(app.find(".blt_trashes")))) {
                    if (!app_type) {
                        removeBoardSticker(ui.helper[0]);
                        self.state = 'ready';
                        return;
                    }
                    else {
                        //Haptic feedback
                        $(app.find("#blt_board")).addClass('blt_trashes_animation');
                        setTimeout(function(){
                            $(app.find("#blt_board")).removeClass('blt_trashes_animation');
                            $(app.find("#blt_board")).removeClass("blt_dragging_element_"+ui.helper.attr('sticker_type')+'_'+ui.helper.attr('sticker_opt'));
                        }, 500);
                    }
                }
                else {
                    $(app.find("#blt_board")).removeClass("blt_dragging_element_"+ui.helper.attr('sticker_type')+'_'+ui.helper.attr('sticker_opt'));
                }
            }
            moveDraggingUIElement();

            self.state = 'ready';
        }, 1)
    }

    function dragDragHandle(e){
        mouse = {
            x: e.pageX,
            y: e.pageY
        };
    }


    this.init = function(){
        if (self.state == 'dragging')
            return;
        $( app.findAll(".blt_board_working_area .blt_workflow_sticker_to_drag") ).draggable({
            start: dragStartHandle,
            drag: dragDragHandle,
            stop: dragStopHandle
        });
        $( app.findAll(".blt_board_working_area .blt_workflow_app_sticker_to_drag") ).draggable({
            start: dragStartHandle,
            drag: dragDragHandle,
            handle: '.blt_clipped_item_magnet, .blt_clipped_item_img',
            stop: dragStopHandle
        });
        if (self.state != 'dragging') {
            self.state = 'ready';
        }
    };


    function dragAddStartHandle(e, ui) {
        self.state = 'dragging';
        checkDragWatcher.next.start_checking();
        checkDragWatcher.prev.start_checking();

        if (ui.helper.hasClass('blt_trophy')) {
            ui.helper.addClass('blt_ui-draggable-handle');
        }
        else {

            var parent_box = ui.helper.parent();
            if (ui.helper.is('.blt_sticker_week_sticker, .blt_sticker_avatar_sticker'))
                parent_box = $(app.find('div'));

            var wheel_offset = parent_box.offset();

            var margin_top = wheel_offset.top - parent_box.scrollTop();
            var margin_left = wheel_offset.left;

            ui.helper.addClass('blt_ui-draggable-handle');
            ui.helper.css('margin-top', margin_top)
                .css('margin-left', margin_left);

            $('body').append(ui.helper);
        }

        var alphabet_scrollbox = $(app.find(".blt_alphabet_box_content_scrollbox"));
        var scroll_top = alphabet_scrollbox.scrollTop();
        alphabet_scrollbox.on('scroll', function () {
            $(this).scrollTop(scroll_top);
        });

        setTimeout(function(){      ui.helper.addClass('blt_ui-draggable-dragging');        }, 10);
    }
    function dragAddStopHandle(e, ui) {
        checkDragWatcher.next.stop_checking();
        checkDragWatcher.prev.stop_checking();


        var board = $(app.find(".blt_board_working_area"));

        helpers.check_intersaction(ui, board, function(x,y){
            app.createSticker({
                type:ui.helper.attr('sticker_type'),
                opt:ui.helper.attr('sticker_opt'),
                x: x/board.width()*100,
                y: y/board.height()*100,
                label: ui.helper.attr('sticker_label')
            });
        });

        $(app.find(".blt_alphabet_box_content_scrollbox")).off('scroll');
        self.state = 'ready';
    }

    this.init_adding = function() {

        $( app.findAll("#blt_wheel .blt_sticker, " +
        ".blt_alphabet_box .blt_letter, " +
        "#blt_sticker_week .blt_sticker_week_sticker, " +
        ".blt_header_logo .blt_sticker_avatar_sticker, " +
        ".blt_medals_container .blt_trophy.active" )).draggable({
            helper: "clone",
            start: dragAddStartHandle,
            drag: dragDragHandle,
            stop: dragAddStopHandle
        });
    }
};

module.exports = Dragger;