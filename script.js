window.onload=function(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=ce3af59613044602be670727241110&q=tokyo`).then(res=>res.json()).then(data=>{
        console.log(data)
        console.log(data.current.temp_c)
        document.querySelector(".city").innerHTML="Weather in "+data.location.name + ", " + data.location.region + ", " + data.location.country + " <img src='assets/location.svg' style='height:20px; margin-bottom:-2px;' >"
        document.querySelector(".data").innerHTML=data.current.temp_c+"°C"
        document.querySelector(".caption").querySelector("img").src=data.current.condition.icon;
        document.querySelector(".caption").querySelector(".cap").innerHTML=data.current.condition.text;
        document.querySelector(".wind").querySelector(".value").innerHTML=data.current.wind_kph+" kph"
        document.querySelector(".hum").querySelector(".value").innerHTML=data.current.humidity+"%"
    })
        navigator.geolocation.getCurrentPosition((position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(longitude,"and",latitude)
    fetch(`https://api.weatherapi.com/v1/current.json?key=ce3af59613044602be670727241110&q=${latitude},${longitude}`).then(res=>res.json()).then(data=>{
        console.log(data)
        document.querySelector(".city").innerHTML="Weather in "+data.location.name + ", " + data.location.region + ", " + data.location.country + " <img src='assets/location.svg' style='height:20px; margin-bottom:-2px;' >"
        document.querySelector(".data").innerHTML=data.current.temp_c+"°C"
        document.querySelector(".caption").querySelector("img").src=data.current.condition.icon;
        document.querySelector(".caption").querySelector(".cap").innerHTML=data.current.condition.text;
        document.querySelector(".wind").querySelector(".value").innerHTML=data.current.wind_kph+" kph"
        document.querySelector(".hum").querySelector(".value").innerHTML=data.current.humidity+"%"
        document.getElementById("citysearch").value=""
    })
     .catch((err)=>{
        document.querySelector(".city").innerHTML="Invalid City"
        console.log("city not found");
        document.getElementById("citysearch").value=""
    })
    }),(err)=>{
        console.log("err")
    }
document.getElementById("searchicon").addEventListener("click",()=>{
    var city=document.getElementById("citysearch").value;
        fetch(`https://api.weatherapi.com/v1/current.json?key=ce3af59613044602be670727241110&q=${city}`).then(res=>res.json()).then(data=>{
            console.log(data)
            console.log(data.current.temp_c)
            document.querySelector(".city").innerHTML="Weather in "+data.location.name + ", " + data.location.region + ", " + data.location.country + " <img src='assets/location.svg' style='height:20px; margin-bottom:-2px;' >"
            document.querySelector(".data").innerHTML=data.current.temp_c+"°C"
            document.querySelector(".caption").querySelector("img").src=data.current.condition.icon;
            document.querySelector(".caption").querySelector(".cap").innerHTML=data.current.condition.text;
            document.querySelector(".wind").querySelector(".value").innerHTML=data.current.wind_kph+" kph"
            document.querySelector(".hum").querySelector(".value").innerHTML=data.current.humidity+"%"
            document.getElementById("citysearch").value=""
        })
         .catch((err)=>{
             
            console.log("city not found");
            document.querySelector(".city").innerHTML="Invalid City"+"<img src='assets/location.svg' style='height:20px; margin-bottom:-2px;' >"
            document.querySelector(".data").innerHTML="°C"
            document.querySelector(".caption").querySelector("img").src=data.current.condition.icon;
            document.querySelector(".caption").querySelector(".cap").innerHTML="";
            document.querySelector(".wind").querySelector(".value").innerHTML=" kph"
            document.querySelector(".hum").querySelector(".value").innerHTML="%"
            document.getElementById("citysearch").value=""
            
        })
})
}

