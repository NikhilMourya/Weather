var button=document.querySelector('.button');
var inputvalue=document.querySelector('.inputvalue');
var namei=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=458230505d8b9a333d68d3b4c5b10772')
    .then(Response=>Response.json())
    .then(data=>{
        var namevalue=data['name'];
        var tempvalue=data['main']['temp'];
        var descvalue=data['weather'][0]['description'];
        
        namei.innerHTML=namevalue;
        desc.innerHTML=descvalue;
        temp.innerHTML=Math.floor(tempvalue-273.15)+" Celcius";

        var h="haze";
        var oc="overcast clouds";
        var m="mist";
        var bc="broken clouds"
        if(descvalue===h){
           // document.querySelector('.status').innerHTML="hello";
           document.querySelector('.status').innerHTML='<i class="fas fa-sun-haze fa-2x"></i>';
        }
        if(descvalue===oc){
            document.querySelector('.status').innerHTML='<i class="fad fa-clouds fa-2x"></i>';
        }
        if(descvalue===m){
            document.querySelector('.status').innerHTML='<i class="fas fa-fog fa-2x"></i>';
        }
        if(descvalue===bc){
            document.querySelector('.status').innerHTML='<i class="far fa-smoke fa-2x"></i>';
        }
        //document.querySelector('.status').innerHTML=
    })
.catch(Err => alert("Wrong city name"));
})
// //document.getElementById("status").innerHTML="hello";
// var hz="haze";
//         

        



