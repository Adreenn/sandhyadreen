var hypnoticBall, database;
var position;
var gamestate, playercount


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game ()
  game.getState()
  game.start()
}

function draw () {
  background ("white")
  console.log(gamestate)
}