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
const postTitle = document.querySelector('.post-title');
const postContent = document.querySelector('.post-content');
const saveBtn = document.createElement('button');
saveBtn.classList.add('edit-btn'); // Apply same class as edit button
saveBtn.innerHTML = 'Save <i class="fas fa-save"></i>';
// Apply styles to position the save button
saveBtn.style.position = 'relative';
saveBtn.style.top = '-1px';
saveBtn.style.left = '1px';
editBtn.addEventListener('click', function() {
    // Toggle between edit and save modes
    if (editBtn.textContent.trim() === 'Edit') {
        // Enter edit mode
        editBtn.textContent = ''; // Clear text content
        editBtn.appendChild(saveBtn); // Replace text content with save button
        postTitle.contentEditable = true; // Make post title editable
        postContent.contentEditable = true; // Make post content editable
        // Set explicit border properties for post title and content
        postTitle.style.border = '1px solid red'; // Add red border
        // Removed the line that changes the height of the post title border
        // postTitle.style.height = 'auto'; // Reset height for post title
        postTitle.style.padding = '5px'; // Add padding for better appearance
        postContent.style.border = '1px solid red'; // Add red border
        postTitle.style.outline = 'none'; // Remove default input outline
        postContent.style.outline = 'none'; // Remove default textarea outline
        postTitle.focus(); // Set focus on post title
    } else {
        // Save changes
        editBtn.innerHTML = 'Edit <i class="fas fa-edit"></i>'; // Reset edit button content
        postTitle.contentEditable = false; // Make post title non-editable
        postContent.contentEditable = false; // Make post content non-editable
        postTitle.style.border = 'none'; // Remove border
        postTitle.style.padding = '0'; // Reset padding
        postContent.style.border = 'none'; // Remove border
    }
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