let isim = prompt("Lütfen Adınızı Girermisiniz ");
var myName = document.getElementById('myName');
myName.innerHTML = isim;

setInterval(showTime,100);
function showTime() {

    var date    =  new Date();
    var hours=date.getHours();
    var min = date.getMinutes();
    var sec=date.getSeconds();
    var day=date.getDay();
    
    if (day == 1) 
    {
        day = "Pazartesi";
    } 
    else if (day == 2) 
    {
        day = "Salı";
    } 
    else if (day == 3) 
    {
        day = "Çarşamba";
    } 
    else if (day == 4)
    {
        day = "Perşembe";
    } 
    else if (day == 5) 
    {
        day = "Cuma";
    } 
    else if (day == 6)
    {
    day = "Cumartesi";
    }
    else if (day == 7) 
    {
    day = "Pazar";
    }

    hours= hours < 10 ? "0"+hours : hours;
    min= min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;
    var   zaman= hours + ":"+ min + ":"+  sec+" "+ day;

    document.getElementsByClassName('clock')[0].innerHTML =zaman;
    document.getElementsByClassName('clock')[0].textContent =zaman;


}