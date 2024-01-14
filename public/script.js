function createMovingBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    bubble.style.setProperty('--random', Math.random()); // Random animation duration

    document.querySelector('.bubble-container').appendChild(bubble);
}

// Create multiple moving bubbles
for (let i = 0; i < 20; i++) { // Adjust the number of bubbles as needed
    createMovingBubble();
}
