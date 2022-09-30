const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minsE1 = document.getElementById('mins')
const secondsE1 = document.getElementById('seconds')



const newYears ='1 Jan 2023';
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = math.floor(totalSeconds/3600)%24;
    const mins = math.floor(totalSeconds/60)%60;
    const seconds =math.floor(totalSeconds)%60;
    console.log(newYearsDate - currentDate)


daysE1.innerHTML =days;
hoursE1.innerHTML =hours;
minsE1.innerHTML = mins;
secondsE1.innerHTML =seconds;
}

function formatTime(time){
    return time<10? '0${time}' :time;}
