document.getElementById("sign-up").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});

document.getElementById("sign-in").addEventListener("click", function() {
    document.getElementById("myModal2").style.display = "block";
});

// Close button for sign-up modal
document.querySelector("#myModal .close").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// Close button for sign-in modal
document.querySelector("#myModal2 .close2").addEventListener("click", function() {
    document.getElementById("myModal2").style.display = "none";
});

// Event listener for "Sign Up" link in the sign-in modal
document.querySelector("#myModal2 a").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("myModal2").style.display = "none";
    document.getElementById("myModal").style.display = "block"; 
});




// Get all the trash icons
const trashIcons = document.querySelectorAll('.delete-icon');

// Function to handle deletion of a post card
function handlePostDeletion(postCard) {
    // Show the delete modal
    document.getElementById("delete-post-modal").style.display = "block";

    // Event listener for "Yes" button in the delete modal
    document.getElementById("delete-yes").addEventListener('click', () => {
        // Apply transition and transform styles to animate removal
        postCard.style.transition = 'transform 0.3s ease-in-out';
        postCard.style.transform = 'scale(0)';

        // After the animation completes, remove the post card from the DOM
        postCard.addEventListener('transitionend', () => {
            postCard.remove();

            // Get all remaining post cards
            const remainingPostCards = document.querySelectorAll('.post-card');

            // Update the index of each remaining post card
            remainingPostCards.forEach((card, index) => {
                const leftContent = card.querySelector('.left-content');
                const nameElements = leftContent.querySelectorAll('p');
                const firstName = nameElements[0].textContent.trim();
                const lastName = nameElements[1].textContent.trim();
                nameElements[0].textContent = firstName;
                nameElements[1].textContent = lastName;
            });
        });

        // Close the delete modal after deleting the post
        document.getElementById("delete-post-modal").style.display = "none";
    });

    // Event listener for "No" button in the delete modal
    document.getElementById("delete-no").addEventListener('click', () => {
        // Close the delete modal without deleting the post
        document.getElementById("delete-post-modal").style.display = "none";
    });
}

// Add event listener to each trash icon
trashIcons.forEach(trashIcon => {
    trashIcon.addEventListener('click', () => {
        // Get the parent post card element
        const postCard = trashIcon.closest('.post-card');

        // Handle deletion of the post card
        handlePostDeletion(postCard);
    });
});