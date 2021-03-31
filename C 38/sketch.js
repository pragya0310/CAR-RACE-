var db;
var gamestate=0;
var playercount=0;
var player,form,game;





function setup(){
createCanvas(displayWidth,displayHeight)
db=firebase.database();

game=new Game()
game.getGs()
game.start()

}
function draw(){
background("black")
if(playercount==4){gamestate=1}

game.writeGs(1)
}