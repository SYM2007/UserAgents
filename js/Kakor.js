let cookies = navigator.cookieEnabled;
document.getElementById("demo").innerHTML = "Cookies enabled:" + cookies;

let Language = navigator.language;
document.getElementById("browse").innerHTML =  "Language enabled:" + Language;


let UserAgent = navigator.userAgent;
document.getElementById("webb").innerHTML =  "UserAgent enabled:" + UserAgent;