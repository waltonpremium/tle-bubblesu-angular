/* varname[0] is the video accessor */
var vid;
var progressClicked = false;
function videoPlay(vidId) {
    var tempVid = document.getElementById(vidId);
    console.info(typeof vid);
    if ( typeof vid === 'undefined' || vid.src !== tempVid.src ) {
        vid = tempVid;
        var parentDiv = vid.parentElement;
        var bigPlay = parentDiv.getElementsByClassName('video-big-play')[0];
        var bigPause = parentDiv.getElementsByClassName('video-big-pause')[0];
        var progressContainer = parentDiv.getElementsByClassName('progress')[0];
        var progressBar = parentDiv.getElementsByClassName('progress-bar')[0];
        var posx = 0;
        var progressStarClick = function(e) {
            posx = progressContainer.getBoundingClientRect().left;
            progressClicked = true;
            progressBar.classList.add('no-animation');
            $('body').addClass('grab-cursor');
            vid.pause();
            e.stopPropagation();
            e.preventDefault();
        };

        bigPause.addEventListener('mouseover', function() {
            if ( vid.paused === false ) {
                bigPause.style.display = 'block';
            }

        });
        vid.onemptied = function() {
            progressContainer.style.display = 'none';
            bigPlay.style.display = 'block';
        };
        vid.addEventListener('mouseover', function() {
            //show pause button
            if ( vid.paused === false ) {
                bigPause.style.display = 'block';
            }
        });
        vid.addEventListener('mouseout', function() {
            //hide pause button
            bigPause.style.display = 'none';
        });

        vid.onplay = function(){
            bigPlay.style.display = 'none';
            progressContainer.style.display = 'block';
        };
        vid.onpause = function(){
            bigPlay.style.display = 'block';
            bigPause.style.display = 'none';
        };

        vid.ontimeupdate = function() {
            var duration = vid.duration;
            progressBar.style.width =  ( ( vid.currentTime / duration ) * 100) + '%';
            progressBar.setAttribute('aria-valuenow', ( vid.currentTime / duration ) * 100);
        };

        vid.onclick = function() {
            togglePlay();
        };
        bigPlay.onclick = function() {
            togglePlay();
        };

        progressContainer.onclick = function(e){
            if (vid.readyState > 0) {
                var seek = (e.pageX - $(this).offset().left) / $(this).width();
                vid.currentTime = vid.duration * seek;
                vid.play();
            }
        };

        progressContainer.getElementsByClassName('seek-star')[0].addEventListener('touchstart', function(e){
            progressStarClick(e);
        });
        progressContainer.getElementsByClassName('seek-star')[0].addEventListener('mousedown', function(e){
            progressStarClick(e);
        });



        $('body').bind('touchmove mousemove', function(e){
            if (!progressClicked) return;
            e.preventDefault();
            var progressContainer = vid.parentElement.getElementsByClassName('progress')[0];
            var progressBar = vid.parentElement.getElementsByClassName('progress-bar')[0];
            var duration = vid.duration;
            var width = progressContainer.clientWidth;
            var touch = (typeof e.originalEvent.touches !== 'undefined')?e.originalEvent.touches[0]:e;
            var dx = touch.pageX - posx;
            if (dx > 0 && dx < width) {
                progressBar.style.width = dx + 'px';
            }
        });

        $('body').on('mouseup mouseleave touchend touchcancel', function(e){
            if (!progressClicked) return;
            var progressContainer = vid.parentElement.getElementsByClassName('progress')[0];
            var progressBar = vid.parentElement.getElementsByClassName('progress-bar')[0];
            $(this).removeClass('grab-cursor');
            progressBar.classList.remove('no-animation');
            vid.currentTime = vid.duration * progressBar.clientWidth / progressContainer.clientWidth;
            vid.play();
            progressClicked = false;
        });
    }

    if (vid.src === tempVid.src ) {
        togglePlay();
    }
}

function togglePlay() {
    if (vid.paused === true) {
        vid.play();
        // if on android phone, go to full screen
        var vua = detect.parse(navigator.userAgent);
        if ( vua.device.type === 'Mobile' && vua.os.family === 'Android'){
            videoFullScreen();
        }
    } else {
        vid.pause();
    }
}

function videoMute() {
    var muteButton = vid.parentElement.getElementsByClassName('video-volume')[0];
    if ( typeof vid !== 'undefined' ) {
        if (vid.muted === true) {
            vid.muted = false;
            muteButton.src = '//cdn.bubblesu.com/images/buttons/volume-button.png';
            var muteMessage = 'Mute Video';
            muteButton.alt = muteMessage;
            muteButton.title = muteMessage;
        } else {
            vid.muted = true;
            muteButton.src = '//cdn.bubblesu.com/images/buttons/audio-icon-mute.png';
            var unmuteMessage = 'Unmute Video';
            muteButton.alt = unmuteMessage;
            muteButton.title = unmuteMessage;
        }
    }
}
function videoFullScreen() {
    if ( typeof vid !== 'undefined' ) {
        if (vid.requestFullscreen) {
            vid.requestFullscreen();
        } else if (vid.mozRequestFullScreen) {
            vid.mozRequestFullScreen(); // Firefox
        } else if (vid.webkitRequestFullscreen) {
            vid.webkitRequestFullscreen(); // Chrome and Safari
        } else if (vid.msRequestFullscreen) { // Internet Explorer
            vid.msRequestFullscreen();
        } else if ( vid.webkitEnterFullscreen ) { //iPad
            vid.webkitEnterFullscreen();
        }
        bigPlay = document.getElementsByClassName('video-big-play')[0];
        bigPlay.setAttribute('z-index', '2147483647');
    }
}
