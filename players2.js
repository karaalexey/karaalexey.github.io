const audioPlayer2 = document.getElementById('player2');
const playPauseButton2 = document.getElementById('playPauseButton2');
const playPauseIcon2 = document.getElementById('playPauseIcon2');



function togglePlayback2() {
    if (audioPlayer2.paused) {
        audioPlayer2.play();
        playPauseIcon2.classList.remove('fa-play');
        playPauseIcon2.classList.add('fa-pause');
    } else {
        audioPlayer2.pause();
        playPauseIcon2.classList.remove('fa-pause');
        playPauseIcon2.classList.add('fa-play');
    }
}
