// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Your code here!

document.addEventListener("DOMContentLoaded", async () => {

    // get the elements by IDs 

    // create an event listener to trigger the button 

const searchButton = document.getElementById('search-btn');
const stateInput = document.getElementById('state-input');
const displayDiv = document.getElementById('alerts-display');
const errorDiv = document.getElementById('error-message');

searchButton.addEventListener('click', async () => {
    const state = stateInpute.value.trim();
    stateInput.value = '';

    if (state) {
        await fetchWeatherAlerts(state);
    } else {
        errorDiv.textcontent = "Enter State Code.";
        
    }
});

async function fetchWeatherAlerts(stateAbbr) {
    const url = fetch(`https://api.weather.gov/alerts/active?area=${STATE_ABBR}()`);
}

try{
    const response = await fetch(url);
    if (!response.ok) throw new Error (`Error: ${response.error}`);
    
    const data = await response.json();
    console.log(data);
    displayAlerts(data);
} catch (error) {
    console.log("Error", error.message);
    errorDiv.textContent = error.message;
    displayDiv.innerHTML = '';
}
});




