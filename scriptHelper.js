// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  const div = document.getElementById("missionTarget");
  div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}"> 
    `;
 }


    function validateInput(testInput) {
        if (testInput === "") {
            return "Empty";
        } else if (!isNaN(testInput) === true) {
            return "Is a Number";
        } else {
            return "Not a Number";
        }
     }
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  let launchStatus = document.getElementById('launchStatus');
  let faultyItems = document.getElementById('faultyItems');

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
     } else if (validateInput(cargoLevel) === "Not a Number" || validateInput(fuelLevel) === "Not a Number"  || validateInput(pilot) === "Is a Number") {
        alert("Error please enter the correct information");
     }

  if (fuelLevel >= 10000 && cargoLevel < 10000) {
        
    faultyItems.style.visibility = "visible";  
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.style.color = "green";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    

} if (fuelLevel < 10000) {

    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"

} if (cargoLevel > 10000) {

    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"

} if (cargoLevel > 10000 && fuelLevel < 10000) {

    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"

 } if (fuelLevel < 10000 && cargoLevel > 10000) {
    
    faultyItems.style.visibility = "visible";  
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    
    


} else {
    faultyItems.style.visibility = "visible";
}
}


 
async function myFetch() {
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json();  
  });
  return planetsReturned;
}
 
function pickPlanet(planets) {

    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;