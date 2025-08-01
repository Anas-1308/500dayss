const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // 3 to 5 seconds
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
};

setInterval(createHeart, 300);
