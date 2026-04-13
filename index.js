// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Your code here!

async function fetchWeatherAlerts(stateAbbr) {
    const url = fetch(`https://api.weather.gov/alerts/active?area=${STATE_ABBR}`);


try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new error (`HTTP error status: ${response.status} `);
    }

    const data = await response.json();

    console.log (`Active alerts for $ {stateAbbr}:`, data);

    return data;
} catch (error) {
    console.log ("Error fetching weather alerts:",error.message);
}

fetchWeatherAlerts(`KS`);


function displayAlerts(data) {
    const container = document.getElementById('alert-display');

    container.innerHTML = '';

    if (!data || !data.features || data.features.length === 0) {
        container.innerHTML = '<p>No active alerts for this area.</p>';
        return;
    }

    const summary = docyment.createElement('h3');
    summary.textContent = `${data.title}: ${data.features.length}`;
    container.appendChild(summary);

    const list = document.createElement('ul');

    data.features.forEach(alert => {
        const listItem = document.createElement('li');
        listItem.textContent = alert.properties.headline;
        list.appendChild(listItem);
    });

    container.appendChild(list);
}

function handleSearch() {
    const inputField = document.getElementById('state-input');
    const displayContainer = document.getElementById('alert-display');
    const stateAbbr = inputField.value.trim();

    displayContainer.innerHTML = 'loading alerts...';

    fetchWeatherAlerts(stateAbbr).then(data => {
        inputField.value = '';

        if (data){
            displayAlerts(data);
        }
    });
  }
}

async function fetchWeatherAlerts(stateAbbr) {
    const errorDiv = document.getElementById('error-message');
    const displayDiv = document.getElementById('alerd-display');
    
    errorDiv.textContet = ''; 
    error.Div.style.display = 'none';
    displayDiv.innerHTML = 'loading...';

    try{
        if (!stateAbbr) {
            throw new error ("Please enter a state abbreviation.");
        }

        const response = await fetch(url);

        if(!response.ok){
            throw new error("HTTP error! Status: ${response.status}");
        }

        const data = await response.json();

        displayAlerts(data);
        return data;
    } catch (errorObject){
        console.log(errorObject.message);
        errorDiv.textContent = `Error: ${errorObject.message}`;
        errorDiv.style.display = 'block';
        displayDiv.innerHTML = '';
    }
}


