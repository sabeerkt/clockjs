const hourEl = document.getElementById("Hour")
const MinuteEl = document.getElementById("Minutes")
const SecondEl = document.getElementById("Second")
 amEl = document.getElementById("am")


function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"
    if (h > 12) {
        h = h - 12
        let newLocal = am = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    MinuteEl.innerText = m;
    SecondEl.innerText = s;
    amEl, (innerText = am);
    setTimeout(() => {
        updateclock()
    }, 1000);

}
updateclock(); 
