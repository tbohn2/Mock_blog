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







document.querySelector('#homebtn').addEventListener('click', loadHome);
document.querySelector('#dashbtn').addEventListener('click', loadDashboard);
document.querySelector('#logbtn').addEventListener('click', loadLogin);
document.querySelector('.post').addEventListener('click', loadPost);