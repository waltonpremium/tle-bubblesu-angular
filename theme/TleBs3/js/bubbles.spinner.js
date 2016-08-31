/*
 *  jQuery Boilerplate - v3.3.4
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
;
(function ($, window, document, undefined) {

    var pluginName = "spinner",
            defaults = {
                sections: 0,
                wheelImage: null,
                wheelClass: "wheel",
                wheelContainerClass: "wheel-container",
                wheelWidth: null,
                wheelHeight: null,
                contentClass: "spinner-content",
                contents: "div",
                contentTitle: "h2",
                titleClass: "spinner-title",
                controlRightImage: "//cdn.bubblesu.com/images/spinners/arrow-right.png",
                controlRightClass: "spinner-control-right hidden-xs",
                controlRightOverlayClass: "spinner-control-right-overlay hidden-xs",
                //controlRightOverlayItemClass: "spinner-control-right-overlay-item hidden-xs",
                controlLeftImage: "//cdn.bubblesu.com/images/spinners/arrow-left.png",
                controlLeftClass: "spinner-control-left hidden-xs",
                controlLeftOverlayClass: "spinner-control-left-overlay hidden-xs",
                //controlLeftOverlayItemClass: "spinner-control-left-overlay-item hidden-xs",
                animationLength: "300",
                noAnimationClass: "no-animation",
                hashBind: true
            };

    var $spinner,
            $spinnerWheel,
            $spinnerWheelContainer,
            $spinnerTitle,
            $spinnerContent,
            $spinnerContents,
            $spinnerRightControl,
            $spinnerRightControlOverlay,
            //$spinnerRightControlItemOverlay,
            $spinnerLeftControl,
            $spinnerLeftControlOverlay;
            //$spinnerLeftControlItemOverlay;

    var degrees;
    var animation;
    var in_reset;

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }


    // initialize spinner
    Plugin.prototype.init = function () {
        if (this.settings.sections === 0 || this.settings.wheelImage === null || this.settings.wheelHeight === null || this.settings.wheelWidth === null) {
            console.log("Spinner not initalized");
            return;
        }
        this.$spinner = $(this.element).eq(0);
        this.$spinnerTitle = this.$spinner.children("." + this.settings.titleClass).eq(0);
        this.$spinnerContent = this.$spinner.siblings("." + this.settings.contentClass).eq(0);

        if (this.$spinnerContent.length < 1) {
            this.$spinnerContent = this.$spinner.parents("#content").find("." + this.settings.contentClass).eq(0);
        }
        this.$spinnerContents = this.$spinnerContent.children(this.settings.contents);
        this.$spinnerRightControl = this.$spinner.children("." + this.settings.controlRightClass).eq(0);
        this.$spinnerRightControlOverlay = this.$spinner.children("." + this.settings.controlRightOverlayClass).eq(0);
        //this.$spinnerRightControlItemOverlay = this.$spinner.children("." + this.settings.controlRightOverlayItemClass).eq(0);
        this.$spinnerLeftControl = this.$spinner.children("." + this.settings.controlLeftClass).eq(0);
        this.$spinnerLeftControlOverlay = this.$spinner.children("." + this.settings.controlLeftOverlayClass).eq(0);
        //this.$spinnerLeftControlItemOverlay = this.$spinner.children("." + this.settings.controlLeftOverlayItemClass).eq(0);

        this.$spinnerWheelContainer = $("<div></div>").addClass(this.settings.wheelContainerClass).appendTo(this.$spinner);

        /*this.$spinnerWheel = $("<div></div>").addClass(this.settings.wheelClass).css({
            "background-image": "url(" + this.settings.wheelImage + ")"
        }).appendTo(this.$spinnerWheelContainer);*/
        this.$spinnerWheel = $("<img src=" + this.settings.wheelImage + ">").addClass(this.settings.wheelClass).appendTo(this.$spinnerWheelContainer);

        if (this.$spinnerTitle.length < 1) {
            this.$spinnerTitle = $("<div></div>");
            this.$spinnerTitle.addClass(this.settings.titleClass).appendTo(this.$spinner);
        }
        if (this.$spinnerRightControl.length < 1) {
            this.$spinnerRightControl = $('<div><img src="' + this.settings.controlRightImage + '" alt="Go Right"></div>');
            this.$spinnerRightControl.addClass(this.settings.controlRightClass).appendTo(this.$spinner);
            this.$spinnerRightControl.attr('role', 'button');
        }
        if (this.$spinnerRightControlOverlay.length < 1) {
            this.$spinnerRightControlOverlay = $('<div><img src="' + this.settings.controlRightImage + '" alt="Go Right"></div>');
            this.$spinnerRightControlOverlay.addClass(this.settings.controlRightOverlayClass).appendTo(this.$spinner);
            this.$spinnerRightControlOverlay.attr('role', 'button');
        }
        /*if (this.$spinnerRightControlItemOverlay.length < 1) {
            this.$spinnerRightControlItemOverlay = $('<div></div>');
            this.$spinnerRightControlItemOverlay.addClass(this.settings.controlRightOverlayItemClass).appendTo(this.$spinner);
        }*/
        if (this.$spinnerLeftControl.length < 1) {
            this.$spinnerLeftControl = $('<div><img src="' + this.settings.controlLeftImage + '" alt="Go Left"></div>');
            this.$spinnerLeftControl.addClass(this.settings.controlLeftClass).appendTo(this.$spinner);
            this.$spinnerLeftControl.attr('role', 'button');
        }
        if (this.$spinnerLeftControlOverlay.length < 1) {
            this.$spinnerLeftControlOverlay = $('<div><img src="' + this.settings.controlLeftImage + '" alt="Go Left"></div>');
            this.$spinnerLeftControlOverlay.addClass(this.settings.controlLeftOverlayClass).appendTo(this.$spinner);
            this.$spinnerLeftControlOverlay.attr('role', 'button');
        }
        /*if (this.$spinnerLeftControlItemOverlay.length < 1) {
            this.$spinnerLeftControlItemOverlay = $('<div></div>');
            this.$spinnerLeftControlItemOverlay.addClass(this.settings.controlLeftOverlayItemClass).appendTo(this.$spinner);
        }*/
        this.rotations = 0;
        this.degrees = 360 / this.settings.sections;
        this.in_reset = false;
        this.content(0);
        this.start();
    };

    // start spinner
    Plugin.prototype.start = function () {
        this.controls();
        var hashName = window.location.hash.replace("#/", "#");
        if ( hashName.substring(0,5) !== "#user"){


            var spinIndex = $(hashName, this.spinnerContent).index();
            if (spinIndex < 0){
                this.rotations = 0;
                this.spinTo(0);
            } else {
                this.spinTo(spinIndex);
            }
        }
    };

    // bind controls
    Plugin.prototype.controls = function () {
        var _this = this;
        this.$spinner.disableSelection();
        this.$spinnerRightControlOverlay.on("click", function () {
            _this.spinTo(_this.rotations + 1);
        });
        /*this.$spinnerRightControlItemOverlay.on("click", function () {
            _this.spinTo(_this.rotations + 1);
        });*/
        this.$spinnerLeftControlOverlay.on("click", function () {
            _this.spinTo(_this.rotations - 1);
        });
        /*this.$spinnerLeftControlItemOverlay.on("click", function () {
            _this.spinTo(_this.rotations - 1);
        });*/
        $(this.$spinnerWheel).touchrotate({subject:this.$spinnerWheel},function(angle){
            var rot = Math.round(angle%360/(360/_this.settings.sections));
            if (rot < 0) rot += _this.settings.sections;

            _this.spinTo(rot);
        });
    };

    // spin to specified section
    Plugin.prototype.spinTo = function (section) {
        var _this = this;
        if (_this.in_reset)
            return;
        var next_rotation = section;
        var css = {};
        if (section >= _this.settings.sections) {
            next_rotation = 0;
        } else if (section < 0) {
            next_rotation = _this.settings.sections - 1;
        }

        // if going back to the beginning from the last, set degrees to 360 then reset to 0
        if (next_rotation === 0 && _this.rotations === _this.settings.sections - 1) {
            css = _this.getCss(_this.settings.sections);
            _this.$spinnerWheel.css(css);
            //_this.in_reset = true;
            setTimeout(function () {
                css = _this.getCss(0);
                _this.$spinnerWheel.addClass(_this.settings.noAnimationClass).css(css);
                setTimeout(function () {
                    _this.$spinnerWheel.removeClass(_this.settings.noAnimationClass);
                    //_this.in_reset = false;
                }, 0);
            }, _this.settings.animationLength);
        }
        // if last from beginning, set degrees to 360 then continue
        else if (_this.rotations === 0 && next_rotation === _this.settings.sections - 1) {
            // if current rotation of wheel is 0 degrees, set to 360
            if ( _this.$spinnerWheel.attr('style').match(/0deg/) !== null ) {
                css = _this.getCss(_this.settings.sections);
                _this.$spinnerWheel.addClass(_this.settings.noAnimationClass).css(css);
                //_this.in_reset = true;
            }
            setTimeout(function () {
                _this.$spinnerWheel.removeClass(_this.settings.noAnimationClass);
                css = _this.getCss(next_rotation);
                _this.$spinnerWheel.css(css);
                //_this.in_reset = false;
            }, 0);
        }
        else {
            setTimeout(function() {
                css = _this.getCss(next_rotation);
                _this.$spinnerWheel.css(css);
            }, 0);
        }

        _this.rotations = next_rotation;
        _this.content(next_rotation);

        // change hash in url
        if (_this.settings.hashBind) {
            window.location.hash = '/' + _this.$spinnerContents.eq(next_rotation).attr("id");
        }
    };

    // get rotation CSS object
    Plugin.prototype.getCss = function (rotation) {
        var css = {};
        var degrees = this.degrees * rotation;
        var radians = degrees * (Math.PI * 2 / 360);
        css["-ms-filter"] = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand'," + "M11=" + Math.cos(radians) + ",M12=" + Math.sin(radians) * -1 + ",M21=" + Math.sin(radians) + ",M22=" + Math.cos(radians) + ")";
        css["filter"] = css["-ms-filter"];
        css["transform"] = "rotate(" + degrees + "deg)";
        css["-ms-transform"] = css["-moz-transform"] = css["-webkit-transform"] = css["transform"];
        return css;
    };

    // show corresponding content
    Plugin.prototype.content = function (index) {
        var _this = this;
        if (_this.$spinnerContents.eq(index).length === 1) {
            _this.$spinnerTitle.fadeOut(_this.settings.animationLength, function () {
                var title = _this.$spinnerContents.eq(index).find(_this.settings.contentTitle).eq(0).html();
                $(this).html(title);
                $(this).fadeIn(_this.settings.animationLength);
            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
        // chain jQuery functions
        return this;
    };
})(jQuery, window, document);
