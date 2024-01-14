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
 