const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/




/* PLAN
add items to the registry by using a realine.question in a function
once the user is added
in the same function call another function to set change the settings.alcahol to true or false based on if the age in the registry is above or below or equal to 19 after console.log'ing if the user is allowed in or not
the toggle will be dont by using the equal to oposite: var = !var
use readline.questions to get user input in the command function which's only job will be to get input and call other functions
If time permits do challenge number one by using key and .push
if time permits complete challenge 2, dont get stuck on this one
*/


let registry = [

];
let settings = {
  alcahol: false
  //alcohol setting goes here
};

//rename this to RegisterUser
function RegisterUser() {
  //user readline to prompt for the name of the user to be added
  readline.question("how old are you ", _user => {
    registry.push(_user);
    console.log(registry);
    setSettings();
    startApp();

  })
}

/*
use the number in the registry array this is tell the user if they are allowed or not
and update the alcahol setting
call back to the startApp
*/
function setSettings() {

  for (let key in registry) {
    if (registry[key] < 19) {
      console.log("you can not drink here leave nowwwww")
      settings.alcahol === false;
    }
  } for (let key in registry) {
    if (registry[key] >= 19) {
      console.log("you can drink here")
      settings.alcahol === true;
    }
    NotifyAll();
  }
}





//toggle the .alcahol in settings
function ToggleAlcohol() {
  settings.alcahol = !settings.alcahol;
  console.log("your setting is ", settings.alcahol);
  startApp();
}

//rename this to NotifyAll
function NotifyAll() {
  for (let key in settings) {
    if (settings[key] === true) {
      console.log("you are allowed to drink")
      //go through the array to notify everyone
    } else if (settings[key] === false) {
      console.log("you can NOT drink here, leave please")
    }
  }

  startApp();
}


function changeAge() {
  readline.question("what new age do you wnt ", _newAge => {
    for (let key in registry) {
      (registry[key] = "")
    }
    registry.push(_newAge);
    console.log(registry);
    setSettings();
    startApp();
  })
};


/*
get user input, and call other functions
make close the program easy
*/
function startApp() {
  readline.question("What is your command? ", _command => {
    if (_command === "toggle") {
      ToggleAlcohol();
    } else if (_command === "register") {
      RegisterUser();
    } else if (_command === "notify") {
      NotifyAll();
    } else if (_command === "age change") {
      changeAge();
    } else if (_command === "quit", "q", "cancel", "c") {
      readline.close();
    }
  })
}

startApp();
