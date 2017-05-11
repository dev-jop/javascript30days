var music = {
    init: function(e) {
        var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        var bgMusic = document.getElementById('bg-music');
        if (!audio) return;
        if (e.keyCode == 69) {
            document.querySelector('#key-e').classList.add('playing');
        }
        audio.currentTime = 0;
        this.playBgMusic(bgMusic);
        audio.play();
        key.classList.add('playing');
        var keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', this.removeTransistion));
    },
    removeTransistion: function(e) {
        if (e.propertyName != 'transform') return;
        this.classList.remove('playing');
    },
    playBgMusic: function(bgMusic) {
        bgMusic.play();
    }
};

window.addEventListener('keydown', function(e) {
    music.init(e);
});