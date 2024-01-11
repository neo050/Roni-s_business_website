function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.setProperty('--random', Math.random()); // Set a random value for each bubble

    bubble.addEventListener('click', function() {
        window.location.href = 'https://example.com'; // Replace with your desired URL
    });

    document.querySelector('.bubble-container').appendChild(bubble);
}

// Example of creating 10 bubbles
for (let i = 0; i < 10; i++) {
    createBubble();
}
