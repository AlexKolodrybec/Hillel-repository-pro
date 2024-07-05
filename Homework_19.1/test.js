const apiKey = '00271b39bf8b1b50faa8064f6a4f6d1d';
const city = 'Kyiv';

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    document.getElementById('city').innerText = data.name;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temp').innerText = `${data.main.temp} °C`;
}

fetchWeather();