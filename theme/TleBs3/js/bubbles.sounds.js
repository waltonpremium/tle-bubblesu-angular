soundManager.setup({
    debugMode: false,
    url: '/bower_components/SoundManager2/swf'
});

var bubblesUSound;
var videoIcon;
var gamesIcon;
var colorAndCreateIcon;
var musicIcon;
var readingCornerIcon;
var phonicsIcon;
var recipesIcon;
var myBuddiesIcon;
var myBulletinBoardIcon;
var happyAppsIcon;
var coloringPagesThumb;
var cutOutCraftsThumb;
var mazesThumb;
var puzzlesThumb;

var previousSound;

soundManager.onready(function () {
    bubblesUSound = soundManager.createSound({
        id: 'bubblesU',
        url: '//cdn.bubblesu.com/sounds/BubblesU.mp3',
        type: 'audio/mp3'
    });

    videoIcon = soundManager.createSound({
        id: 'videoIcon',
        url: '//cdn.bubblesu.com/sounds/Videos.mp3',
        type: 'audio/mp3'
    });

    gamesIcon = soundManager.createSound({
        id: 'gamesIcon',
        url: '//cdn.bubblesu.com/sounds/Games.mp3',
        type: 'audio/mp3'
    });
    colorAndCreateIcon = soundManager.createSound({
        id: 'colorAndCreateIcon',
        url: '//cdn.bubblesu.com/sounds/ColorAndCreate.mp3',
        type: 'audio/mp3'
    });
    musicIcon = soundManager.createSound({
        id: 'musicIcon',
        url: '//cdn.bubblesu.com/sounds/Music.mp3',
        type: 'audio/mp3'
    });

    readingCornerIcon = soundManager.createSound({
        id: 'readingCornerIcon',
        url: '//cdn.bubblesu.com/sounds/Reading+Corner.mp3',
        type: 'audio/mp3'
    });

    recipesIcon = soundManager.createSound({
        id: 'recipesIcon',
        url: '//cdn.bubblesu.com/sounds/Recipes.mp3',
        type: 'audio/mp3'
    });

    phonicsIcon = soundManager.createSound({
        id: 'phonicsIcon',
        url: '//cdn.bubblesu.com/sounds/Phonics.mp3',
        type: 'audio/mp3'
    });

    happyAppsIcon = soundManager.createSound({
        id: 'happyAppsIcon',
        url: '//cdn.bubblesu.com/sounds/HappyApps.mp3',
        type: 'audio/mp3'
    });

    myBuddiesIcon = soundManager.createSound({
        id: 'myBuddiesIcon',
        url: '//cdn.bubblesu.com/sounds/MyBuddies.mp3',
        type: 'audio/mp3'
    });

    myBulletinBoardIcon = soundManager.createSound({
        id: 'myBulletinBoardIcon',
        url: '//cdn.bubblesu.com/sounds/MyBulletinBoard.mp3',
        type: 'audio/mp3'
    });


    coloringPagesThumb = soundManager.createSound({
        id: 'coloringPagesThumb',
        url: '//cdn.bubblesu.com/sounds/ColoringPages.mp3',
        type: 'audio/mp3'
    });

    cutOutCraftsThumb = soundManager.createSound({
        id: 'cutOutCraftsThumb',
        url: '//cdn.bubblesu.com/sounds/CutOutCrafts.mp3',
        type: 'audio/mp3'
    });

    mazesThumb = soundManager.createSound({
        id: 'mazesThumb',
        url: '//cdn.bubblesu.com/sounds/Mazes.mp3',
        type: 'audio/mp3'
    });

    puzzlesThumb = soundManager.createSound({
        id: 'puzzlesThumb',
        url: '//cdn.bubblesu.com/sounds/Puzzles.mp3',
        type: 'audio/mp3'
    });
});

function playSoundClip(id) {
    if ( soundManager.muted === false ) {
        if ( previousSound !== undefined ) {
            soundManager.stop(previousSound);
        }
        soundManager.play(id);
        previousSound = id;
    }
}

function muteSounds() {
    soundManager.mute();
}

function unmuteSounds() {
    soundManager.unmute();
}

function toggleMute() {
    soundManager.toggleMute();
}

/*function toggleMuteSetting() {
    var t = localStorage.getItem('bubblesu.mute');
    if (t == "true") {
        soundManager.unmute();
        localStorage.setItem('bubblesu.mute',false);
    } else {
        soundManager.mute();
        localStorage.setItem('bubblesu.mute',true);
    }
    return true;
}*/

function sayMyName(characterName) {
    if (soundManager.muted === false ) {
        characterName = characterName.replace(/\s+/g, '');
        var sayName = soundManager.createSound({
            id: 'say' + characterName,
            url: '//cdn.bubblesu.com/sounds/' + characterName + '.mp3',
            type: 'audio/mp3'

        });
        sayName.play();
    }
}
