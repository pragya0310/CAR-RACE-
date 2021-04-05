var db;
var gamestate=0;
var playercount=0;
var player,form,game;
var cs1,cs2,cs3,cs4,cars,c1,c2,c3,c4;
var allPlayers;
function preload(){
 
    c1=loadImage("car1.png")
    c2=loadImage("car2.png")
    c3=loadImage("car3.png")
    c4=loadImage("car4.png")

    bg=loadImage("track.png")
   
}



function setup(){
createCanvas(displayWidth,displayHeight)
db=firebase.database();

game=new Game()
game.getGs()
game.start()
cars=[]
}
function draw(){
background(255)
if(playercount==4){gamestate=1;game.writeGs(1)}
if(gamestate==1){game.play();drawSprites()}



}
