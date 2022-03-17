// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");

        if(validateInput(pilotNameInput.value) === "Empty" || validateInput(copilotNameInput.value) === "Empty" || validateInput(fuelLevelInput.value) === "Empty" || validateInput(cargoMassInput.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
        } else if(validateInput(pilotNameInput.value) === "Is a Number") {
            alert("Please enter a valid Pilot name");
            event.preventDefault();
        } else if(validateInput(copilotNameInput.value) === "Is a Number") {
            alert("Please enter a valid Co-Pilot name");
            event.preventDefault();
        } else if(validateInput(fuelLevelInput.value) === "Not a Number" || validateInput(cargoMassInput.value) === "Not a Number") {
            alert("Please enter a valid input for Fuel Level and Cargo Mass");
            event.preventDefault();
        } else {
            formSubmission(window.document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        }
        event.preventDefault();

    });
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let targetPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, targetPlanet.name, targetPlanet.diameter, targetPlanet.star, targetPlanet.distance, targetPlanet.moons, targetPlanet.image);
   });
   
});