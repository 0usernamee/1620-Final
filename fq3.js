const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/*
for add user color use a readline question for user input then use a .push to push the input and console.log it to notify the user then call the startApp. for dispay colors use a key for the color status then console.log teh color and its status, and then cal startApp.
 for toggle color check for user input simillar to startApp and user the 
*/
let userColors = [
  
];
let theme = {
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true
  //the 5 color and their boolean value goes here
};

//rename this to AddUserColor
function addUserColor(){
  readline.question("what color do you want to add ", _userColor=>{
    userColors.push(_userColor);
    console.log(userColors);
    startApp();
  })
  //add a color to userColors
}

//rename this to DisplayUserColors
function displayUserColors(){
  console.log("these are the current colors")
  for(let key in userColors) 
  { 
    console.log(`${userColors} ${userColors[key]}`)
  }
  startApp();
  //add a color to userColors
}

//rename this to ToggleThemeColor
function toggleThemeColor(){
  readline.question("what color would you like to toggle ",_color=>{
if(_color === "red"){
  theme.red = !theme.red;
  console.log("red is now ", theme.red);
} else if(_color === "green"){
  theme.green = !theme.green;
  console.log("green is now ", theme.green);
} else if(_color === "blue"){
  theme.blue = !theme.blue;
  console.log("blue is now ", theme.blue);
} else if(_color === "yellow"){
  theme.yellow = !theme.yellow;
  console.log("yellow is now ", theme.yellow);
} else if(_color === "orange"){
  theme.orange = !theme.orange;
  console.log("orange is now ", theme.orange);
} else if(_color === "back"){}
  startApp();
})
}

function startApp(){
  readline.question("What is your command? ", _command=>{
   if(_command === "toggle"){
      toggleThemeColor();
    } else if(_command === "add"){
      addUserColor();
    } else if(_command === "display"){
      displayUserColors();
    } else if(_command === "quit", "q", "cancel", "c"){
      readline.close();
    }
  })
}

startApp();