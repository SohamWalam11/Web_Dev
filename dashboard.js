// Toggle between Grid and List view
function toggleLayout() {
    let fileContainer = document.getElementById('fileContainer');
    let toggleButton = document.querySelector('.layout-toggle i');

    if (fileContainer.classList.contains('grid-view')) {
        fileContainer.classList.remove('grid-view');
        fileContainer.classList.add('list-view');
        toggleButton.classList.remove('fa-th-large');
        toggleButton.classList.add('fa-list');
    } else {
        fileContainer.classList.remove('list-view');
        fileContainer.classList.add('grid-view');
        toggleButton.classList.remove('fa-list');
        toggleButton.classList.add('fa-th-large');
    }
}

// Placeholder functions
function showHome() { document.getElementById('content').innerHTML = "<h2>Home</h2>"; }
function showBooks() { document.getElementById('content').innerHTML = "<h2>Books</h2>"; }
function showIssuedBooks() { document.getElementById('content').innerHTML = "<h2>Issued Books</h2>"; }
function showDueBooks() { document.getElementById('content').innerHTML = "<h2>Due Books</h2>"; }
function showBranches() { document.getElementById('content').innerHTML = "<h2>Branches</h2>"; }
function showSelectedAuthor() { document.getElementById('content').innerHTML = "<h2>Authors</h2>"; }
function showeLibrary() { document.getElementById('content').innerHTML = "<h2>e-Library</h2>"; }
function showLoginPage() { alert("Login functionality to be added!"); }
// Toggle between Grid and List view
function toggleLayout() {
    let fileContainer = document.getElementById('fileContainer');
    let toggleButton = document.querySelector('.layout-toggle i');

    if (fileContainer.classList.contains('grid-view')) {
        fileContainer.classList.remove('grid-view');
        fileContainer.classList.add('list-view');
        toggleButton.classList.remove('fa-th-large');
        toggleButton.classList.add('fa-list');
    } else {
        fileContainer.classList.remove('list-view');
        fileContainer.classList.add('grid-view');
        toggleButton.classList.remove('fa-list');
        toggleButton.classList.add('fa-th-large');
    }
}

// Placeholder functions
function showHome() { document.getElementById('content').innerHTML = "<h2>Home</h2>"; }
function showBooks() { document.getElementById('content').innerHTML = "<h2>Books</h2>"; }
function showIssuedBooks() { document.getElementById('content').innerHTML = "<h2>Issued Books</h2>"; }
function showDueBooks() { document.getElementById('content').innerHTML = "<h2>Due Books</h2>"; }
function showBranches() { document.getElementById('content').innerHTML = "<h2>Branches</h2>"; }
function showSelectedAuthor() { document.getElementById('content').innerHTML = "<h2>Authors</h2>"; }
function showeLibrary() { document.getElementById('content').innerHTML = "<h2>e-Library</h2>"; }

// Show Login Modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close Login Modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Authenticate User (Simple Validation)
function authenticateUser() {
    const sapID = document.getElementById('sapID').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    // Example Credentials (Replace with DB connection later)
    const validSAPID = "123456789";
    const validPassword = "password123";

    if (sapID === validSAPID && password === validPassword) {
        alert("Login successful!");
        closeLoginModal();

        // Hide login button and show user icon
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('userIcon').style.display = 'block';
    } else {
        loginError.textContent = "Invalid SAP ID or Password!";
    }
}

// Close Modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};