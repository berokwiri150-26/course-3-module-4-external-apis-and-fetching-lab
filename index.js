// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Your code here!


    // get the elements by IDs 

    // create an event listener to trigger the button 


function displayerror(message){
    const displayDiv = document.getElementById("alerts-message");
    const errorDiv = document.getElementById("error-message");

    displayDiv.innerHTML = "";

    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}

if(typeof document !== "undefined"){
    const searchBtn = document.getElementById("search-btn");
    const stateInput = document.getElementById("state-input");

    searchBtn.addEventListener("click", () => {
        const stateAbbr = stateInput.value.trim();
        fetchWeatherAlerts(stateAbbr);
    });
}

if(typeof module !=="undefined"){
    module.exports = { fetchWeatherAlerts, displayAlerts, displayError};
}

