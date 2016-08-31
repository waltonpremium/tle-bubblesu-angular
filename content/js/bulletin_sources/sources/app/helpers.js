/**
 * Created by JohnMak on 15/12/15.
 */


module.exports.check_intersaction_coord = function check_intersaction_coord(x, y, el, callback, otherwise) {

    var offset = el.offset();
    if (x>offset.left && y>offset.top && x<(offset.left + el.width()) && y< (offset.top + el.height())) {
        if (typeof callback === 'function')
            callback(x, y);
        return true;
    }
    else {
        if (typeof otherwise === 'function')
            otherwise(x, y);
        return false;
    }

};



module.exports.check_intersaction = function check_intersaction(ui, el, callback, otherwise, no_strict) {

    var x = ui.offset.left - el.offset().left;
    var y = ui.offset.top - el.offset().top;


    if (x>0 && y>0 && (no_strict || x+ui.helper.width()<el.width()) && (no_strict || y+ui.helper.height()<el.height())) {
        if (typeof callback === 'function')
            callback(x, y);
        return true;
    }
    else {
        if (typeof otherwise === 'function')
            otherwise(x, y);
        return false;
    }

};

module.exports.genid = function(len){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}