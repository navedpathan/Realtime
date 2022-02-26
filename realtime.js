// setInterval(() => {
//     const time = new Date();
//     let ti = time.toLocaleTimeString();
//     // console.log(time.toLocaleTimeString());  
//     document.getElementById("time").innerHTML = ti; 
// }, 1000);

const dt = new Date();
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let d = day[dt.getDay()];
let dat = ((dt.getDate() < 10? "0":"") +dt.getDate());
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];
let m = mon[dt.getMonth()];

document.getElementById("date").innerHTML = d + ', ' + dat +  ' ' + m + ' ' + dt.getFullYear();
// document.getElementById("month").innerHTML = dt.getMonth() +1;


setInterval(() => {

const t = new Date();
// let hr = t.getHours() % 12 || 12;
let h = (t.getHours() < 12) ? t.getHours() : t.getHours() - 12;
let hr = ((h < 10? "0":"") + h); 
let min = ((t.getMinutes() < 10 ? "0" : "") + t.getMinutes());
let sec = ((t.getSeconds() < 10 ? "0" : "") + t.getSeconds());
let amorpm = (t.getHours() < 12) ?"am" : "pm";

document.getElementById("time").innerHTML = hr + ' : ' + min + ' : ' + sec + ' ' + amorpm;

}, 1000);




