// Function to create static bubbles
function createStaticBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('static-bubble');
    bubble.addEventListener('click', function() {
        // Add logic to redirect to different pages
        window.location.href = 'https://example.com'; // Replace with your desired URL
    });

    document.body.appendChild(bubble); // Append to body or a specific container
}

// Create 5 static bubbles
for (let i = 0; i < 5; i++) {
    createStaticBubble();
}

// Function to create moving bubbles
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
