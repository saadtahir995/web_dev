window.addEventListener('DOMContentLoaded', () => {
    const clockdisplay = document.querySelector('.clock_container');
    const zone12_change=document.querySelector('#btn');
    const zone24_change=document.querySelector('#btn2');
    var hours = 0; var sec = 0; var min = 0;
    var d = new Date();
    hours = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    zone12_change.addEventListener('click',()=>{
        hours=hours%12;
    });
    zone24_change.addEventListener('click',()=>{
        hours=d.getHours();
    });
    setInterval(() => {
        clockdisplay.innerHTML = hours + ":" + min + ":" + sec;
        sec++;

        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hours++;
            min = 0;
        }
    }, 1000);
});