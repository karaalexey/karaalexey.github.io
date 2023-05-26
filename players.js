const audioPlayer = document.getElementById('player');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');


let audioNL = document.querySelectorAll('audio');
let audio = Array.apply(null, audioNL);

audio.forEach(t => {
    let index = audio.indexOf(t);

    t.addEventListener('play', () => {
        audio.forEach(subT => {
            subT !== audio[index] ?
                (subT.pause(), subT.currentTime = 0) :
                subT.play()
        })
    });
});


function togglePlayback() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
}
