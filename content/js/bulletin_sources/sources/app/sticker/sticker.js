/**
 * Created by JohnMak on 27/11/15.
 */
var Ractive = require('ractive');


var sticker = Ractive.extend({
    template:   require('./sticker.ract'),
    onrender: function(){
        if (!this.get('data.z'))
            this.set('data.z', 0);

        if (!this.get('data.angle'))
            this.set('data.angle', 10-Math.round(20*Math.random()));

    },

    stickerShare: function(heart_id) {
        this.parent.onStickerShare(heart_id);
    },
    stickerHeart: function(heart_id) {
        this.parent.onStickerHeart(heart_id);
    },
    stickerPlay: function(heart_id) {
        this.parent.onStickerPlay(heart_id);
    }
});

module.exports = sticker;