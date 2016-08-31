function populateAvatarBadges() {
    var characters = ['bubbles', 'flexi', 'tito', 'lenny', 'lucy', 'misschievous', 'ping', 'toucan'];
    characters.forEach(function (c) {
        console.log(c);
        $.ajax({
            type: "GET",
            url: '/character_messages/user_messages/character/' + c + '.json',
            success: function (data, status) {
                console.log(data);
            }

        })
    });
}


$(document).ready(function () {
    populateAvatarBadges();
});
