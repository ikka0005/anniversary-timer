// SET YOUR START DATE HERE (Year, Month - 1, Day)
const startDate = new Date(2023, 6, 14); // Feb 14, 2023

function startAnimation() {
    document.getElementById('heart-btn').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
    
    typeWriter("headline", "For the love of my life:", 50);
    setTimeout(() => {
        typeWriter("footer-msg", "Every second with you is a gift. I Love You Baba! ", 50);
    }, 3000);

    updateTimer();
    setInterval(updateTimer, 300);
}

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById('clock').innerHTML = 
        `${days} days ${hours}h ${mins}m ${secs}s`;
}

function typeWriter(id, text, speed) {
    let i = 0;
    const element = document.getElementById(id);
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }}
    type();
}

document.addEventListener('mousemove', function(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // You can change this to any emoji
    heart.className = 'cursor-heart';
    
    // Position the heart at the mouse coordinates
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    
    // Randomize the size slightly for a better effect
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;

    document.body.appendChild(heart);

    // Remove the heart from the document after the animation ends (2 seconds)
    setTimeout(() => {
        heart.remove();
    }, 2000);
});