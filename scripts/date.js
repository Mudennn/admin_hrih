function getCurrentDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const today = new Date();
    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    
    return `It is ${day}, ${date} ${month} ${year}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('current-date').innerText = getCurrentDate();
});

