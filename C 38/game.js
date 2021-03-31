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
        playercount=await db.ref("playercount").once("value")
        console.log(playercount)
        if(playercount.exists()){
            playercount=playercount.val()
            console.log(playercount,"game")

            form=new Form()
            form.display()
        }
  
  
    }
}
}



