// Days select 
const selectDays = document.getElementById('days');
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
for(let i = 0; i < days.length; i++){
    var optionElement = document.createElement('option');
    optionElement.value = days[i];
    optionElement.textContent = days[i];

    selectDays.appendChild(optionElement);
}

// Months select 
const selectMonths = document.getElementById('months');
const months = [{ value: 1, text: "Jan" }, { value: 2, text: "Feb" },
    { value: 3, text: "Mar" }, { value: 4, text: "Apr" },
    { value: 5, text: "May" }, { value: 6, text: "Jun" },
    { value: 7, text: "Jul" }, { value: 8, text: "Aug" },
    { value: 9, text: "Sep" }, { value: 10, text: "Oct" },
    { value: 11, text: "Nov" }, { value: 12, text: "Dec" }
];
for(let i = 0; i < months.length; i++){
    var optionElement = document.createElement('option');
    optionElement.value = months[i].value;
    optionElement.textContent = months[i].text;

    selectMonths.appendChild(optionElement);
}

// Years select 
const selectYears = document.getElementById('years');
const currentYear =  new Date().getFullYear();
function getYears(start,end){
    const years =[];
    for(let i=start; i<= end; i++){
        years.push(i);
    }
    return years;
}
var years = getYears(1970,currentYear);
for(let i = 0; i < years.length; i++){
    var optionElement = document.createElement('option');
    optionElement.value = years[i];
    optionElement.textContent = years[i];

    selectYears.appendChild(optionElement);
}

function calcAge(){
    const birthDay = document.getElementById('days').value;
    const birthMonth = document.getElementById('months').value;
    const birthYear = document.getElementById('years').value;
    
    if(birthMonth == 2 && birthDay > 29){
            alert("Feb has maximum 29 days, please enter a valid day");
            return;
    }
     // Leap year check for February
     if (birthMonth === 2 && birthDay === 29) {
        const isLeapYear = (birthYear % 4 === 0 && birthYear % 100 !== 0) || (birthYear % 400 === 0);
        if (!isLeapYear) {
            alert("February 29 is only valid in a leap year. Please enter a valid day.");
            return;
        }
    }
    var birthDate = new Date();
    birthDate.setFullYear(birthYear);
    birthDate.setMonth(birthMonth-1);
    birthDate.setDate(birthDay);
    var today = new Date();

    var resYears = today.getFullYear() - birthDate.getFullYear();
    var resMonths = today.getMonth() - birthDate.getMonth();
    var resDays = today.getDate() - birthDate.getDate();

    // it's your birth day
    if(today.getDate() == birthDate.getDate() && today.getMonth() == birthDate.getMonth()){
        alert("Happy Birthday!!");
    }
    // You haven't reached your birth day yet
    if(resDays < 0){
        resMonths--;
        resDays += new Date(today.getFullYear(), today.getMonth(),0).getDate(); //days in the previous month
    }
    // You haven't reached your birth month yet
    if(resMonths < 0){
        resYears--;
        resMonths += 12;
    }

    document.getElementById('answer').innerText = resYears+" years,"+Math.abs(resMonths)+" months and "+Math.abs(resDays)+" days."
}