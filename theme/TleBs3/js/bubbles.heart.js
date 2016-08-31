/* favorites / heart system */

function heartMe(userid, shortName) {
    if (confirm("Would you like to heart this?")) {
        var myHeart = {user_id: userid, short_name: shortName};
        $.post('/hearts.json', JSON.stringify(myHeart), function (data) {
            if (data['ERROR']) {
                /* do something here because heart didn't add more than likely because one already exists */
                console.log(data);
            }
        }, 'json');
    }
}