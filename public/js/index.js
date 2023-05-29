function logoutUser() {
    console.log('You are logged out');
}

function loadHome() {
    document.location.replace('/')
}

function loadDashboard() {
    document.location.replace('/dashboard')
}

function loadLogin() {
    document.location.replace('/login')
}

function loadPost() {
}


if (document.querySelector('#navlogoutbtn')) {
    document.querySelector('#navlogoutbtn').addEventListener('click', logoutUser);
}

if (document.querySelector('#navloginbtn')) {
    document.querySelector('#navloginbtn').addEventListener('click', loadLogin);
}

document.querySelector('#homebtn').addEventListener('click', loadHome);
document.querySelector('#dashbtn').addEventListener('click', loadDashboard);
document.querySelector('.post').addEventListener('click', loadPost);