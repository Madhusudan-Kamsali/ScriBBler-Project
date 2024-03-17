// Comment button functionality
const commentBtn = document.querySelector('.comment-btn');
const commentInput = document.querySelector('.comment-input');
const commentsSection = document.querySelector('.comments');

commentBtn.addEventListener('click', function() {
    const commentContent = commentInput.value;
    if (commentContent !== '') {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentContent;
        commentsSection.prepend(commentElement);
        commentInput.value = '';
        // Add gray border around comments section when a comment is posted
        commentsSection.classList.add('gray-border');
    }
});

// Edit button functionality
const editBtn = document.querySelector('.edit-btn');
editBtn.addEventListener('click', function() {
    // Implement edit functionality
});

// Like button functionality
const likeBtn = document.querySelector('.like-btn');
const likeText = document.querySelector('.like-text');
let likeCount = 0;

likeBtn.addEventListener('click', function() {
    likeCount++;
    if (likeCount === 1) {
        likeText.textContent = "1 person likes this!";
    } else {
        likeText.textContent = likeCount + " people like this!";
    }
    likeBtn.textContent = "Liked!";
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