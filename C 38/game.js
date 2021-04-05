class Game{



    constructor(){}

getGs(){
    db.ref("gamestate").on("value",function(a){gamestate=a.val()})
}
writeGs(a){

    db.ref("/").update({"gamestate":a})
}
async start(){
    if(gamestate==0){
        player=new Player()
        playercount=await db.ref("playerCount").once("value")
        console.log(playercount)
        if(playercount.exists()){
            playercount=playercount.val()
            console.log(playercount,"game")

            form=new Form()
            form.display()
        }
  
  
    }
      cs1=createSprite(100,200)
      cs1.addImage(c1)

      cs2=createSprite(300,200)
      cs2.addImage(c2)

      cs3=createSprite(600,200)
      cs3.addImage(c3)

      cs4=createSprite(800,200)
      cs4.addImage(c4)

      cars=[cs1,cs2,cs3,cs4]
}

play(){
   // player.getPlayerInfo()
   db.ref("players").on("value",(d)=>{allPlayers=d.val()})
    form.hide()
if(allPlayers!=undefined){
   // image(bg,0,-displayHeight,displayWidth,displayHeight*2)
    var index=0,x=100,y

    for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance

        cars[index-1].x=x
        cars[index-1].y=y
        
        if(plr=="player"+player.pn){
            fill("red")
            ellipse(x,y,50,50)
            console.log(cars[index-1].y,cars[index-1].x)

        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
    }}
}
if(keyIsDown("up")&&player.pn!=0){
    player.distance+=50
    db.ref("players/player"+player.pn).update({"distance":player.distance})
}

}

}



