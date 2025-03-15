function showHome() {
    document.getElementById('content').innerHTML = `
        <h2>Welcome to the Library Management System</h2>
        <p>Select an option from the navbar to get started.</p>
    `;
}

function showBooks() {
    document.getElementById('content').innerHTML = `
        <h2>Books</h2>
        <p>Here you can manage all the books in the library.</p>
    `;
}

function showIssuedBooks() {
    document.getElementById('content').innerHTML = `
        <h2>Issued Books</h2>
        <p>Here you can view all the books that have been issued.</p>
    `;
}

function showDueBooks() {
    document.getElementById('content').innerHTML = `
        <h2>Due Books</h2>
        <p>Here you can view all the books that are due for return.</p>
    `;
}

function showSelectedAuthor() {
    document.getElementById('content').innerHTML=`
    <h2>Authors</h2>
        <div class="card-container">
            <div class="card">
                <h3>O'Reilly</h3>
            </div>
            <div class="card">
                <h3>G.V. Kumbhojkar</h3>
            </div>
            <div class="card">
                <h3>Reema Thareja</h3>
            </div>
            <div class="card">
                <h3>Korth-Sudarshan</h3>
            </div>
            <div class="card">  
                <h3>Cascirao-Duckkett</h3>
            </div>
            <div class="card">
                <h3>Naresh Chauhan</h3>
            </div>
            <div class="card">
                <h3>Ellis Horowitz</h3>
        </div>
    `;
}

function showBranches() {
    document.getElementById('content').innerHTML = `
        <h2>Our Branches</h2>
        <div class="card-container">
            <div class="card">
                <h3>COMPUTER ENGG </h3>
            </div>
            <div class="card">
                <h3>IT</h3>
        
            </div>
            <div class="card">
                <h3>CSE-DS</h3>
            </div>
            <div class="card">
                <h3>AI-DS</h3>
            </div>
            <div class="card">  
                <h3>AI-ML</h3>
            </div>
            <div class="card">
                <h3>EXTC</h3>
            </div>
            <div class="card">
                <h3>MECH</h3>
        </div>
    `;
}

function showLoginPage(){
    document.getElementById('content').innerHTML = `
    <div class="center-wrapper">
     <div class="login-container">
            <h2>Library System</h2>
            <button id="loginButton">Login</button>
            <div id="formContainer"></div></div></div>`
    // JavaScript to toggle the login form
    document.getElementById('loginButton').addEventListener('click', function() {
        var formContainer = document.getElementById('formContainer');
        
        if (formContainer.innerHTML === '') {
            var formHTML = `
                <form action="/login" method="POST"> <!-- Change the action to your login endpoint -->
                    <div class="form-group"><br>
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your SAP ID" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
            `;
            // Insert the form HTML into the container
            formContainer.innerHTML = formHTML;
            this.textContent = 'Cancel'; // Change button text to 'Cancel'
        } else {
            // Clear the form if it already exists
            formContainer.innerHTML = '';
            this.textContent = 'Login'; // Change button text back to 'Login'
        }
    });
}

function showeLibrary(){
    
}

function onclickLogin(){
    document.getElementById('content').innerHTML=`
    `
}