var button = document.querySelector('.button');
var inputvalue = document.querySelector('.inputvalue');
var namei = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humidity');
var country = document.querySelector(".country-name");
var sunrise = document.querySelector(".sunrise");
var sunset = document.querySelector(".sunset");
var windspeed = document.querySelector('.wind-speed');
var windpressure = document.querySelector('.wind-pressure');
var weathericon = document.querySelector('.weather-icon');
let h = "haze";
let oc = "overcast clouds";
let m = "mist";
let bc = "broken clouds";
let cs = "clear sky";
let lr="light rain";
let ts="thunderstorm";
let mr="moderate rain";
const mediaquery = window.matchMedia('(max-width:500px)');
if (mediaquery.matches) {
    document.querySelector('body').style.backgroundImage = "url('images/forest.jpg')";
}
button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=458230505d8b9a333d68d3b4c5b10772')
        .then(Response => Response.json())
        .then(data => {
            var namevalue = data['name'];
            var tempvalue = data['main']['temp'];
            var humivalue = data['main']['humidity'];
            var pressurevalue = data['main']['pressure'];
            var descvalue = data['weather'][0]['description'];
            var countryvalue = data['sys']['country'];
            var sunrisevalue = data['sys']['sunrise'];
            var sunsetvalue = data['sys']['sunset'];
            var windspeedvalue = data['wind']['speed'];

            if(descvalue==h){
                weathericon.innerHTML='<i class="fas fa-sun-haze"></i>';
            }
            if(descvalue==oc){
                weathericon.innerHTML='<i class="fad fa-clouds fa-2x"></i>';
            }
            if(descvalue==m){
                weathericon.innerHTML='<i class="fas fa-fog fa-2x"></i>';
            }
            if(descvalue==bc){
                weathericon.innerHTML='<i class="far fa-smoke fa-2x"></i>';
            }
            if(descvalue==cs){
                weathericon.innerHTML='<i class="fad fa-sun fa-2x"></i>';
            }
            if(descvalue==lr){
                weathericon.innerHTML='<i class="fas fa-cloud-rain fa-2x"></i>';
            }
            if(descvalue==ts){
                weathericon.innerHTML='<i class="fad fa-thunderstorm fa-2x"></i>';
            }
            if(descvalue==mr){
                weathericon.innerHTML='<i class="fad fa-cloud-rain fa-2x"></i>';
            }

            windspeed.innerHTML=windspeedvalue+"Km/hr";
            windpressure.innerHTML = pressurevalue;
            sunrise.innerHTML = formatDate(sunrisevalue);
            sunset.innerHTML = formatDate(sunsetvalue);
            country.innerHTML = ", " + countryvalue;
            namei.innerHTML = namevalue;
            desc.innerHTML = descvalue;
            temp.innerHTML = Math.floor(tempvalue - 273.15) + " &#8451;";
            humi.innerHTML = humivalue;
        })
        .catch(Err => alert("Wrong city name"));
})


function formatDate(a){
    var date = new Date(a * 1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var seconds = "0" + date.getSeconds();
// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
return formattedTime;
}


timer();
function timer() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    var date = currentTime.getDate()
    var month = currentTime.getMonth()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    var t_str = hours + ":" + minutes + ":" + sec + " ";
    if (hours > 11) {
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    var months = new Array();
    months[0] = "January"
    months[1] = "February"
    months[2] = "March"
    months[3] = "April"
    months[4] = "May"
    months[5] = "June"
    months[6] = "July"
    months[7] = "August"
    months[8] = "September"
    months[9] = "October"
    months[10] = "November"
    months[11] = "December"
    document.getElementById('date_time').innerHTML = t_str + " " + date + " " + months[month];
    setTimeout(timer, 1000);

    // if (hours > 16 && hours<19) {
    //     document.querySelector('body').style.backgroundImage = "url('images/evening.jpg')";
    // }
    // else if (hours >19) {
    //     document.querySelector('body').style.backgroundImage = "url('images/night1.jpg')";
    // }
}
$.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Setting text of element P with id gfg
        $("#gfg").html(data.ip);
    })











/*if(mediaquery.matches){
                if (descvalue === h) {
                    // document.querySelector('.status').innerHTML="hello";
                    document.querySelector('.status').innerHTML = '<i class="fas fa-sun-haze fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/haze_mobile.jpg')";
                }
                if (descvalue === oc) {
                    document.querySelector('.status').innerHTML = '<i class="fad fa-clouds fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/overcast_mobile.jpg')";
                }
                if (descvalue === m) {
                    document.querySelector('.status').innerHTML = '<i class="fas fa-fog fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/mist_mobile.jpg')";
                }
                if (descvalue === bc) {
                    document.querySelector('.status').innerHTML = '<i class="far fa-smoke fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/broken_clouds_mobile.jpg')";
                }
                if (descvalue === cs) {
                    document.querySelector('.status').innerHTML='<i class="fad fa-sun fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/clearsky_mobile.jpg')";
                }
                if(descvalue===lr){
                    document.querySelector('.status').innerHTML = '<i class="fas fa-cloud-rain fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/lightrain_mobile.jpg')";
                }
                if(descvalue===ts){
                    document.querySelector('.status').innerHTML = '<i class="fad fa-thunderstorm fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/thunder_mobile.jpg')";
                }
            }
            else{
                if (descvalue === h) {
                    // document.querySelector('.status').innerHTML="hello";
                    document.querySelector('.status').innerHTML = '<i class="fas fa-sun-haze fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/haze.jpg')";
                }
                if (descvalue === oc) {
                    document.querySelector('.status').innerHTML = '<i class="fad fa-clouds fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/overcast.jpg')";
                }
                if (descvalue === m) {
                    document.querySelector('.status').innerHTML = '<i class="fas fa-fog fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/mist.jpg')";
                }
                if (descvalue === bc) {
                    document.querySelector('.status').innerHTML = '<i class="far fa-smoke fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/broken_clouds.jpg')";
                }
                if (descvalue === cs) {
                    document.querySelector('.status').innerHTML='<i class="fad fa-sun fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/clearsky.jpg')";
                }
                if(descvalue===lr){
                    document.querySelector('.status').innerHTML = '<i class="fas fa-cloud-rain fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/lightrain.jpg')";
                }
                if(descvalue===ts){
                    document.querySelector('.status').innerHTML = '<i class="fad fa-thunderstorm fa-2x"></i>';
                    document.querySelector('body').style.backgroundImage = "url('images/thunder.jpg')";
                }
            }*/


