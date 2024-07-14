window.onload = function() {
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');

    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
        playButton.style.display = 'block';
    });

    alert('Surprise! Happy Birthday!');
};

function playAudio() {
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}
