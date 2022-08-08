for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        this.style.color = "white";
        var text = this.textContent.toLowerCase();
        playSound(text);
    })
}

document.addEventListener('keydown', function(event) {
    document.querySelector(`.${event.key}`).style.color = "white";
    playSound(event.key);
})

var playSound = (key) => {
    switch (key) {
        case 'w':
            var wAudio = new Audio('./sounds/tom-1.mp3');
            wAudio.play();
            break;

        case 'a':
            var aAudio = new Audio('./sounds/tom-2.mp3');
            aAudio.play();
            break;

        case 's':
            var sAudio = new Audio('./sounds/tom-3.mp3');
            sAudio.play();
            break;

        case 'd':
            var dAudio = new Audio('./sounds/tom-4.mp3');
            dAudio.play();
            break;

        case 'j':
            var jAudio = new Audio('./sounds/snare.mp3');
            jAudio.play();
            break;

        case 'k':
            var kAudio = new Audio('./sounds/crash.mp3');
            kAudio.play();
            break;

        case 'l':
            var lAudio = new Audio('./sounds/kick-bass.mp3');
            lAudio.play();
            break;

        default:
            break;
    }
}