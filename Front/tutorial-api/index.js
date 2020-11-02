function getWeather(city) {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=" + city, {
            "method":
                "GET",
            "headers":
                {
                    "x-rapidapi-host":
                        "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key":
                        "3b18ea616amsh443db4140bf0409p163514jsnc8087eca5369"
                }
        }
    ).then(weather => weather.json()).then(response => {
        console.log(response)
        var div = document.createElement("div")
        var nome = document.createElement("h1")
        var temp = document.createElement("h1")

        nome.innerHTML = response.name
        temp.innerHTML = response.main.temp + "° C"
        div.appendChild(nome)
        div.appendChild(temp)

        document.body.appendChild(div)

    })

}


