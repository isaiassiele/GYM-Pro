const hourE1=document.getElementById("hour")
const minuteE1=document.getElementById("minutes")
const shiftE1=document.getElementById("shifts")

function dynamicTime() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let sft="AM"

    if(h>12) {
        h=h-12
        sft="PM"
    }

    hourE1.innerText=h;
    minuteE1.innerText=m;
    shiftE1.innerText=sft;

    setTimeout(()=> {
    dynamicTime()
    }, 1000)

}

dynamicTime();