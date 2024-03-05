// Prompt the user to enter the city name
var cityName = prompt("Enter the name of the city:");

// Check if the city name is "Karachi"
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
} else {
    // If the city name is not "Karachi", just greet the user with the city name
    alert("Welcome to " + cityName);
}