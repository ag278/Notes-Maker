let logof = document.getElementById('logof');
logof.addEventListener('click', (e) => {
    window.localStorage.removeItem('tokened');
    window.location.replace("../login.html");
})