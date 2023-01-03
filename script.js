const url = 'http://api.openweathermap.org/geo/1.0/direct?q='
const url2 = 'https://api.openweathermap.org/data/2.5/weather?'
const icon = 'http://openweathermap.org/img/wn/'

const api_key = '64ab4faa9da6f11262c8fd19e5f5757b'

const searchbar = document.getElementById('searchbar')

const Setquery = (e) => {

    if(e.keyCode == '13'){
        getResult(searchbar.value)
  }
}

const getResult = (cityName) => {
    const query = `${url}${cityName}&limit=3&appid=${api_key}`
    fetch(query)
    .then(data =>{
        return data.json()
    } )
    .then(displayData)
}

const displayData = (result) => {
    let query2 =  `${url2}lat=${result[0].lat}&lon=${result[0].lon}&appid=${api_key}&units=metric&lang=en`
    console.log(`${result[0].lat} ${result[0].lon}`)
    fetch(query2)
    .then(weather =>{
        return weather.json()
    })
    .then(displayWeather)

}

const displayWeather = (result2) => {

    const li1 = document.querySelector('.li1')
    const li2 = document.querySelector('.li2')
    const li3 = document.querySelector('.li3')
    document.querySelector('.image').src=`${icon}${result2.weather[0].icon}@2x.png`

  
    li1.innerText = `${result2.main.temp}°`
    li2.innerText = `${result2.name}`
    li3.innerText = `${result2.weather[0].description}`



    console.log(result2)

}

searchbar.addEventListener('keypress', Setquery) 