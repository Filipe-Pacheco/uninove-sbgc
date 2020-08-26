// Referenciando os links do Youtube
var sala1 = "i6RJQdWo4_8";
var sala2 = "i6RJQdWo4_8";
var sala3 = "i6RJQdWo4_8";
var sala4 = "i6RJQdWo4_8";

// Obtendo a sala e aplicando os valores
salaAtual = document.getElementById('num-sala').textContent;
console.log("Você está na: " + salaAtual);
var videoDaSala = "";

switch (salaAtual){
  case "sala1":
    var videoDaSala = sala1;
    console.log('O vídeo da sala é: ' + videoDaSala);
    break;
  case "sala2":
    var videoDaSala = sala2;
    console.log('O vídeo da sala é: ' + videoDaSala);
    break;
  case "sala3":
    var videoDaSala = sala3;
    console.log('O vídeo da sala é: ' + videoDaSala);
    break;
  case "sala4":
    var videoDaSala = sala4;
    console.log('O vídeo da sala é: ' + videoDaSala);
    break;
};


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
     videoId: videoDaSala,
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

// mute button
//var volBtn = document.getElementById("volume-btn");

//function toggleMute(){
//  slider.value = 0;
//}
