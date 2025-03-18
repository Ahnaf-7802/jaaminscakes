// JavaScript for adding interactivity

// Display a unique welcome pop-up when the page loads
window.onload = function() {
    // Create the overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    // Create the pop-up box
    const modal = document.createElement('div');
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '8px';
    modal.style.textAlign = 'center';
    modal.style.maxWidth = '80%';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.animation = 'fadeIn 1s ease-out';

    // Create the welcome message
    const message = document.createElement('h2');
    message.innerText = "Welcome to Jasmin's Cake Gallery!";
    message.style.marginBottom = '20px';
    message.style.color = '#ff8da1';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#ff8da1';
    closeButton.style.border = 'none';
    closeButton.style.color = '#fff';
    closeButton.style.fontSize = '1.2em';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';
    closeButton.style.transition = 'background-color 0.3s';

    // Close button hover effect
    closeButton.onmouseover = function() {
        closeButton.style.backgroundColor = '#ff6079';
    };
    closeButton.onmouseout = function() {
        closeButton.style.backgroundColor = '#ff8da1';
    };

    // Add the message and button to the modal
    modal.appendChild(message);
    modal.appendChild(closeButton);

    // Append the modal to the overlay
    overlay.appendChild(modal);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Add event listener to the close button to hide the pop-up
    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
};

// Simple form validation for the custom order form
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    if (!name) {
        alert("Please enter your name.");
        e.preventDefault();  // Prevent the form from being submitted
    }
});