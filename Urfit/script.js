// Find the sign up link and add click event listener
document.querySelector('.link a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    showSignupPopup();
});

function showSignupPopup() {
    document.getElementById('signupOverlay').style.display = 'block';
    document.getElementById('signupPopup').style.display = 'block';
}

function closeSignupPopup() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('signupPopup').style.display = 'none';
}

function handleSignup(event) {
    event.preventDefault();
    // Add your signup logic here
    alert('Sign up functionality will be implemented here!');
    closeSignupPopup();
}

function socialSignup(platform) {
    // Add your social signup logic here
    alert(`${platform} sign up will be implemented here!`);
}

// Close popup when clicking overlay
document.getElementById('signupOverlay').addEventListener('click', closeSignupPopup); 