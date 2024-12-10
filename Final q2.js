const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/



/* PLAN
set all badges to 0 as a default value
to show badge status use a let key to capture there status, then console.log the key as acatagory and badge[key] as the value in the catagory
to add ponits ask for a use input with readline.question capture the inpuit and compare it agaisnt the key in badge to check if the catagory matches, then if it does add one to its value badge[key] then console.log a conformation of where it the badge was added and show the current count of the catagory. if the key did not match tell the user it didnt work then startApp
startApp - get user input and call other functions
Do challenge Num one if time permits use if else statments after giving the number of badges a variable to call for the if else statments
if time permits do challenge two with key and .length
*/
let badge = {
  new: 0,
  easy: 0,
  medium: 0,
  hardest: 0,
  apocolypse: 0
};

//rename this to ShowStatus
function showStatus() {
  for (let key in badge) {
    console.log("The badge level", key, "contains", badge[key], "badges");
  }
  startApp();
  //loop through the badge and log all the mode and all their corresponding points
}

//rename this to AddPoints
function addPoints() {
  readline.question("Which category do you want to add a badge to (new, easy, medium, hardest, apocolypes)? ", category => {
    for (let key in badge) {
      if (key === category) {
        badge[key] += 1;
        console.log(`badge added to ${key}. Current count of ${key}: ${badge[key]}`);
        startApp();
        return;
      }
    }
    console.log("That catagory of badges does not exsist");
    startApp();
  });
  //Add the point to the correct mode by capturing the readline
}

function MakeBadge() {
  let total = 0;

  for (let key in badge) {
    let count = badge[key];
    total = total + count;
  }
  console.log("you have a total of")
  console.log(total)
  console.log("badges so you will get this badge")

  if (total < 10) {
    console.log("you received Horrible Newbie")
  } else if ((total > 10) && (total < 20)) {
    console.log("you received Adventurer")
  } else if ((total > 20) && (total < 30)) {
    console.log("you received Slayer")
  } else if ((total > 30) && (total < 40)) {
    console.log("you received Divined")
  } else if (total > 40) {
    console.log("you received Eternal")
  }

  startApp();

} 



// get user input call other functions
function startApp() {
  readline.question("What is your command? ", _command => {
    if (_command === "status") {
      showStatus();
    } else if (_command === "add") {
      addPoints();
    } else if (_command === "register") {
      RegisterUser();
    } else if (_command === "create") {
      MakeBadge();
    } else if (_command === "quit", "q", "cancel", "c") {
      readline.close();
    }
  })
}

startApp();