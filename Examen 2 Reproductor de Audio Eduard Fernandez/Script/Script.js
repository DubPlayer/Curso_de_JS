var currentIndex = 0;
// Consola
function logs(){
    console.log(jssongs);
}

var songs = ['http://127.0.0.1:5500/bucket/DareICare.mp3', 'http://127.0.0.1:5500/bucket/IWonder.mp3', 'http://127.0.0.1:5500/bucket/whiplash.mp3'];
var imagenesarr = ['http://127.0.0.1:5500/bucket/Tyranny.png', 'http://127.0.0.1:5500/bucket/Kanye.jpeg', 'http://127.0.0.1:5500/bucket/Whiplash.png'];
var titles = ["Dare I Care","I Wonder","Whiplash"];
var singers = ["The Voidz + Julian Casablancas","Kanye West","Metallica"];
var dates = ["10/23/2014", "1/1/2007", "8/25/1983"]

// obtener el audio, del player principal
var audio = document.getElementById('mainplayer');
// indicar cual es boton a modificar
var togglebutton = document.getElementById('toggle');
// obtener imagen
var image = document.getElementById('songplaying');
//obtener titulo
var h1Element = document.getElementById('title');
//obtener cantante
var cantante = document.getElementById('singer');
//obtener fecha
var fechas = document.getElementById('Daterelease');

// boton de play pausa dinamico
toggle.addEventListener("click", function() {
    if (audio.paused) {
       audio.play();
       toggle.textContent = "";
    } else {
       audio.pause();
       toggle.textContent = "";
    }
   });



//VERIFICACION DE FINAL DE CANCION ASI SE HACE
/*mainplayer.addEventListener("ended", function() {
   
    alert("The audio song has ended.");
   });*/

//TERMINA LA CANCION Y PASA A LA SIGUIENTE 

mainplayer.addEventListener('ended', function(){
 currentIndex++;
 if (currentIndex >= songs.length) {
    currentIndex = 0;
 }
 
 h1Element.textContent = titles[currentIndex];
 cantante.textContent = singers[currentIndex];
 fechas.textContent = dates[currentIndex];
 audio.src = songs[currentIndex];
 image.src = imagenesarr[currentIndex];

 audio.play();
});
//añadir cancion de una vez

audio.src = songs[currentIndex];
image.src = imagenesarr[currentIndex];

audio.play();

//REPETIR CANCION ACTUAL

repetir.addEventListener("click", function() {

    audio.src = songs[currentIndex];
    audio.play();
    
    
   });

// SIGUIENTE CANCION, CANCION ANTERIOR

next.addEventListener("click", function(){

    currentIndex++;
    if (currentIndex >= songs.length) {
        currentIndex = 0;
     }
    h1Element.textContent = titles[currentIndex];
    cantante.textContent = singers[currentIndex];
    fechas.textContent = dates[currentIndex];
    audio.src = songs[currentIndex];
    image.src = imagenesarr[currentIndex];
    audio.play();
})
previous.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 2;
     }
    h1Element.textContent = titles[currentIndex];
    cantante.textContent = singers[currentIndex];
    fechas.textContent = dates[currentIndex];
    audio.src = songs[currentIndex];
    image.src = imagenesarr[currentIndex];
    audio.play();
})

var progress = document.getElementById("progress");
var song = document.getElementById("mainplayer");
var controlicon = document.getElementById("toggle");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}

function publish() {
 var name = document.getElementById("name").value;
 var comment = document.getElementById("comment").value;

    document.getElementById("result").innerHTML = "Name: " + name + ", Comment: " + comment;
   
}
var audioPlayer = document.getElementById("mainplayer");
   
function setVolume(audioPlayer) {
    var volume = 0.3;
    audioPlayer.volume = volume;
}
var audioPlayer = document.getElementById("mainplayer");
setVolume(audioPlayer);
   
var volumeSlider = document.getElementById("volumeSlider");

volumeSlider.oninput = function() {
    audioPlayer.volume = this.value / 100;
   }