class Player{
    constructor(){
        this.pn=0;
        this.name="";
        this.ps=0;
    }
    pc(a){
        db.ref("/").update({"playercount":a})
    }
    updatename(a){
        console.log(this.pn)
        console.log("players/player"+this.pn)
        db.ref("players/player"+this.pn).update({"name":a})}
    ps(a){db.ref("players/player"+this.pn).update({"score":a})}
}

