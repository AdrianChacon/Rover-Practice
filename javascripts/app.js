// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: [0],
  y: [0],
  travelLog:[0,0]
};
var exit = false;
var board = [
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],];
// ======================

function getRandomNum(){
  return Math.floor(Math.random() * 9);
}

function createObstacles(numberOfObstacles) {
board[0][0] = "rv";
  for (var i=0; i<numberOfObstacles; i++){
    var row = getRandomNum();
    var column = getRandomNum();
    if (row && column === 0) {
      i--;
    } else {
    console.log("Obstacle created in " + column + "," + row);
    board[row][column]="ob";
    }
  }
}

function resetObstacles(){
  for (var i=0; i<board[0].length; i++){
    for (var j=0; j<board[i].length; j++){
      board[i][j]=null;
    }
  }
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log(rover.direction);
}

function showBoard(){
  console.log(board);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N":
      if (rover.y === 0){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[rover.x][(rover.y)-1]==="ob"){
        console.log("In the next move FORWARD there is an obstacle, you shall not pass! ;)");
      }
      else {
        board[rover.x][rover.y] = null;
        rover.y --;
        board[rover.x][rover.y] = "rv";
    }
      break;
    case "E":
      if(rover.x === 9){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[(rover.x)+1][rover.y]==="ob"){
        console.log("In the next move FORWARD there is an obstacle, you shall not pass! ;)");
      }
      else {
        board[rover.x][rover.y] = null;
        rover.x ++;
        board[rover.x][rover.y] = "rv";
      }
      break;
    case "S":
      if (rover.y === 9){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[rover.x][(rover.y)+1]==="ob"){
        console.log("In the next move FORWARD there is an obstacle, you shall not pass! ;)");
      }
      else {
        board[rover.x][rover.y] = null;
        rover.y ++;
        board[rover.x][rover.y] = "rv";
      }
      break;
    case "w":
      if (rover.x === 0){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[(rover.x)-1][rover.y]==="ob"){
        console.log("In the next move FORWARD there is an obstacle, you shall not pass! ;)");
      }
      else {
        board[rover.x][rover.y] = null;
        rover.x --;
        board[rover.x][rover.y] = "rv";
      }
      break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.x + "," + rover.y);
}

function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
    case "N":
      if (rover.y === 9){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[rover.x][(rover.y)+1]==="ob"){
        console.log("In the next move BACKWARD there is an obstacle, you shall not pass! ;)");
      } else {
        board[rover.x][rover.y] = null;
        rover.y ++;
        board[rover.x][rover.y] = "rv";
    }
      break;
    case "E":
      if(rover.x === 0){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[(rover.x)-1][rover.y]==="ob"){
        console.log("In the next move BACKWARD there is an obstacle, you shall not pass! ;)");
      } else {
        board[rover.x][rover.y] = null;
        rover.x --;
        board[rover.x][rover.y] = "rv";
      }
      break;
    case "S":
      if (rover.y === 0){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[rover.x][(rover.y)-1]==="ob"){
        console.log("In the next move BACKWARD there is an obstacle, you shall not pass! ;)");
      } else {
        board[rover.x][rover.y] = null;
        rover.y --;
        board[rover.x][rover.y] = "rv";
      }
      break;
    case "w":
      if (rover.x === 9){
        console.log("You are going outside the grid! You can not do that!");
      } else if ( board[(rover.x)+1][rover.y]==="ob"){
        console.log("In the next move BACKWARD there is an obstacle, you shall not pass! ;)");
      } else {
        board[rover.x][rover.y] = null;
        rover.x ++;
        board[rover.x][rover.y] = "rv";
      }
      break;
  }
  rover.travelLog.push([rover.x,rover.y]);
  console.log(rover.x + "," + rover.y);
}


function listOfCommands(loc, rover){
  for (i = 0; i < loc.length; i++){
    switch (loc[i]) {
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      console.log(loc[i] + " is not a command. The commands are (r)ight (l)eft (f)orward and (b)ackward");
    }
  }
  console.log("The rover is on: " + rover.x + "," + rover.y);
}

function tracking(rover){
    console.log("The Log of the Rover is:");
    console.log(rover.travelLog);
}

function menu(){
    clear();
    console.log("Welcome to the Mars Rover simulator v1.0");
    console.log("- Choose how many obstacles you want in the planet (max 99 ^_^U)");
    console.log("    createObstacles(numberOfObstacles)");
    console.log("- Reset the number of obstacles.");
    console.log("    resetObstacles()");
    console.log("- Show the board, the rover position and where are the obstacles.");
    console.log("    showBoard()");
    console.log("- Insert the route for the rover in one line");
    console.log("    Remember, the commands are: (r)ight (l)eft (f)orward and (b)ackward");
    console.log("    Remember 2, if they will crash into an obstacle or going out of the board,");
    console.log("                will show a message in the log.");
    console.log("    listOfCommands(\"rrffllf\",rover)");
    console.log("- See the Track Log of the Rover");
    console.log("     tracking(rover)");

}
