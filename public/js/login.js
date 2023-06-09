const loginUser = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const createNewUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#newUsername').value.trim();
    const password = document.querySelector('#newPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#loginbtn').addEventListener('click', loginUser);
document.querySelector('#signupbtn').addEventListener('click', createNewUser);
