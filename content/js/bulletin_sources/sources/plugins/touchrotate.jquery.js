/**
 * Created by JohnMak on 17/12/15.
 */
(function ( $ ) {

    function find_angle(A,B,C) {
        return (Math.atan2(A.y - B.y, A.x - B.x) - Math.atan2(C.y - B.y, C.x - B.x))*180/Math.PI;
    }

    $.fn.touchrotate =  function(params, callback) {

    //// PREPARING PARAMETERS
        var frame = this;

        default_params = {
            handle: $(this),
            subject: $(this).children('div'),
            center_x:50,
            center_y:50
        };

        params = $.extend(true, default_params, params);

        params.handle = $(params.handle);

        var cur_angle = 0;
        var delta_prev_angle = 0;
        var delta_angle = 0;

        var drag_start_coord = {x:0,y:0};
        var obj_center_coord = {
            x:this.offset().left + this.width()*params.center_x/100,
            y:this.offset().top + this.height()*params.center_y/100
        };
        //$('body').append($('.touch_point'));
        //
        //$('#touch_point_center').css('top', obj_center_coord.y).css('left', obj_center_coord.x);

        var jq_body = $('body');


    //// MANIPULATING FUNCTIONS
        function rotate(newAngle) {
            if (newAngle < 0) {
                newAngle += 360;
            }
            params.subject.css('transform','rotate(' + newAngle + 'deg)');
        }

    //// EVENTS HANDLES

        function dragStart(e){
            cur_angle = getAngle();

            params.subject.addClass('no-animation');
            params.handle.addClass('grab-cursor');
            bindMove();
            bindStop();
            stopInertia();
            drag_start_coord.x = e.pageX;
            drag_start_coord.y = e.pageY;
            if (typeof e.touches !== 'undefined'){
                drag_start_coord.x = e.touches[0].pageX;
                drag_start_coord.y = e.touches[0].pageY;
            }
            obj_center_coord = {
                x:frame.offset().left + frame.width()*params.center_x/100,
                y:frame.offset().top + frame.height()*params.center_y/100
            };
            delta_prev_angle = 0;
            delta_angle = 0;
            //$('#touch_point_center').css('top', obj_center_coord.y).css('left', obj_center_coord.x);
            //
            //$('#touch_point_start').css('top', drag_start_coord.y).css('left', drag_start_coord.x);
        }

        function dragMove(e){
            var touch_point = {
                x: e.pageX,
                y: e.pageY
            };
            if (typeof e.touches !== 'undefined'){
                touch_point.x = e.touches[0].pageX;
                touch_point.y = e.touches[0].pageY;
            }
            //$('#touch_point_touch').css('top', touch_point.y).css('left', touch_point.x);
            delta_prev_angle = delta_angle;
            delta_angle = find_angle(touch_point, obj_center_coord, drag_start_coord);

            rotate(cur_angle + delta_angle);


            e.stopPropagation();
            e.preventDefault();
        }

        function dragStop(e){
            cur_angle = cur_angle + delta_angle;
            if (callback) {
                callback(cur_angle);
            } else {
                startInertia(delta_angle-delta_prev_angle);
            }
            unbindMove();
            unbindStop();
            params.subject.removeClass('no-animation');
            params.handle.removeClass('grab-cursor');
        }

        var inertia_interval = false;
        var inertia_power = 0;

        function startInertia(power) {
            inertia_power = power;

            inertia_interval = setInterval(processInertia, 20)
        }
        function processInertia() {
            cur_angle += inertia_power;
            rotate(cur_angle);

            inertia_power /= 1.07;
            if (Math.abs(inertia_power) < .1)
                stopInertia();
        }

        function stopInertia() {
            clearInterval(inertia_interval);
        }


    //// BINDING FUNCTIONS

        function bindStart(){
            params.handle.on('mousedown', dragStart);
            params.handle[0].addEventListener('touchstart', dragStart);
        }

        function unbindStart(){
            params.handle.off('mousedown', dragStart);
            params.handle[0].removeEventListener('touchstart', dragStart);
        }


        function bindMove(){
            jq_body.on('mousemove', dragMove);
            jq_body[0].addEventListener('touchmove', dragMove);
        }

        function unbindMove(){
            jq_body.off('mousemove', dragMove);
            jq_body[0].removeEventListener('touchmove', dragMove);
        }


        function bindStop(){
            jq_body.on('mouseup', dragStop);
            jq_body.on('mouseleave', dragStop);
            jq_body.on('touchend', dragStop);
            jq_body.on('touchcancel', dragStop);
        }

        function unbindStop(){
            jq_body.off('mouseup', dragStop);
            jq_body.off('mouseleave', dragStop);
            jq_body.off('touchend', dragStop);
            jq_body.off('touchcancel', dragStop);
        }

        function getAngle(){
            tr = params.subject.css('transform');
            if (tr = tr.match('matrix\\((.*)\\)')) {
                tr = tr[1].split(',');
                if(typeof tr[0] != 'undefined' && typeof tr[1] != 'undefined') {
                    return parseFloat((Math.atan2(tr[1], tr[0]) * 180 / Math.PI).toFixed(1));
                }
            }
            return 0;
        }

    //// INIT
        bindStart();
    };


}( jQuery ));