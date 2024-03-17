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

document.addEventListener("DOMContentLoaded", function() {
    var createPostBtn = document.getElementById("create-post-btn");
    var modal = document.getElementById("myModal3");
    var closeBtn = document.getElementsByClassName("close3")[0];

    createPostBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});




















