 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)  after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '100%',
     playerVars: { 'autoplay': 1, 'controls': 0 },
     videoId: '7hNKdi_MWa0',
   });
 }
 var isPlaying = false;
 function togglePlayer() {
   if (isPlaying) {
     player.pauseVideo();
     isPlaying = false;
     document.getElementById("control-play").src = "icons/play.svg";
     document.getElementById('overlay').style.opacity = 1;
   } else {
     player.playVideo();
     isPlaying = true;
     document.getElementById("control-play").src = "icons/pause.svg"
     document.getElementById('overlay').style.opacity = 0;
   }
 }

 //fullscreen mode
var isFullScreen = false;
var elem = document.getElementById("janela");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
};

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  };

function toggleFullScreen() {
    if (isFullScreen) {
        closeFullscreen();
        isFullScreen = false;
    } else {
        openFullscreen();
        isFullScreen = true;
    }
}

// Controle de Volume

var slider = document.getElementById("myRange");

slider.oninput = function() {
  //console.log(slider.value);
  player.setVolume(slider.value);
}

const btn0 = document.querySelector('#btn-0');
const btn50 = document.querySelector('#btn-50');
const btn100 = document.querySelector('#btn-100');

btn0.addEventListener('click', () => {
  player.setVolume(0);
});

btn50.addEventListener('click', () => {
  player.setVolume(50);
});

btn100.addEventListener('click', () => {
    player.setVolume(100);
  });