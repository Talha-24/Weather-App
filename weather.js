let button = document.querySelector("button");
let input = document.querySelector("input");
let cityname = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let clouds = document.querySelector("#clouds");
button.addEventListener("click",function(){
    let city=input.value;
    (async () => {
       let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d8f041eb8b4365763fe6c8d5c2a39c4`;
       let raw = await fetch(URL);
       let readableData= await raw.json();
       console.log(readableData);
      cityname.innerHTML=`${readableData.name}`;
      temperature.innerHTML=`Temperature : ${readableData.main.temp}K`;
      clouds.innerHTML=`Situation : ${readableData.weather[0].description}`;
    })();
})