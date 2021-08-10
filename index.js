var button = document.querySelector('.button');
var inputvalue = document.querySelector('.inputvalue');
var namei = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=458230505d8b9a333d68d3b4c5b10772')
        .then(Response => Response.json())
        .then(data => {
            var namevalue = data['name'];
            var tempvalue = data['main']['temp'];
            var descvalue = data['weather'][0]['description'];

            namei.innerHTML = namevalue;
            desc.innerHTML = descvalue;
            temp.innerHTML = Math.floor(tempvalue - 273.15) + " Celcius";

            let h = "haze";
            let oc = "overcast clouds";
            let m = "mist";
            let bc = "broken clouds";
            let cs = "clear sky";
            let lr="light rain";
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
            }
            //document.querySelector('.status').innerHTML=
        })
        .catch(Err => alert("Wrong city name"));
})
timer();
function timer() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
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
    document.getElementById('date_time').innerHTML = t_str;
    setTimeout(timer, 1000);

    if (hours > 16 && hours<19) {
        document.querySelector('body').style.backgroundImage = "url('images/evening.jpg')";
    }
    else if (hours >19) {
        document.querySelector('body').style.backgroundImage = "url('images/night1.jpg')";
    }
}
$.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Setting text of element P with id gfg
        $("#gfg").html(data.ip);
    })
