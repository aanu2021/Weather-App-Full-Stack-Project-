const submitBtn = document.getElementById("submit");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_inner = document.getElementById("temp_inner");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById("day");
const today_data = document.getElementById("today_data");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
       city_name.textContent = "Plz  enter  the  city  name";
       dataHide.classList.add('data_hide'); 
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=42e0cc1e75b0868a583c7aafb294f01a`;
            const response = await fetch(url); 
            const data = await response.json();
            const arrData = [data];
            // console.log(process.env.API_KEY);
            // console.log(arrData[0].sys.country);
            if(arrData[0].sys.country){
                city_name.textContent = `${cityVal} , ${arrData[0].sys.country}`;   
            }
            else{
                city_name.textContent = `${cityVal}`; 
            }
            temp_inner.textContent = arrData[0].main.temp;
            // temp_status.textContent = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else if(tempMood === "Thunderstorm"){
                temp_status.innerHTML = "<i class='fas fa-thunderstorm' style='color:yellow;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide'); 
        }catch{
            city_name.textContent = "Plz  enter  the  correct city  name  properly";
            dataHide.classList.add('data_hide'); 
        }
    }
}

const Months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const date = new Date();

var currDay = Days[date.getDay()];
var currMonth = Months[date.getMonth()];
var currYear = date.getFullYear();
var currHour = date.getHours();
var currMinute = date.getMinutes();
var currNumDate = date.getDate();
// console.log(currNumDate);

day.innerHTML = `${currDay}`;
today_data.innerHTML = `${currNumDate}  ${currMonth}`;

submitBtn.addEventListener('click',getInfo);

