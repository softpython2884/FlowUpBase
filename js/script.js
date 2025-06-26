const container = document.querySelector('.container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    heart.style.setProperty('--random-x', Math.random() * 200 - 100 + 'px');

    container.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 200);