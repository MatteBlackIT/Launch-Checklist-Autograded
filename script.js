// Write your JavaScript code here!

window.addEventListener("load", function () { //fix: I had a button even happening first
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });

  // add event listener for button then need to grab four inputs and pass those inputs into formSubmission within the event listener
  const button = document.getElementById("formSubmit");

  button.addEventListener("click", function (event) {
    let pilot = document.querySelector("input[name=pilotName");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoLevel]");
    let list = document.getElementById("faultyItems");

    formSubmission(
      document,
      list,
      pilot.value,
      copilot.value,
      fuelLevel.value,
      cargoLevel.value
    );
    event.preventDefault();
  });
});
