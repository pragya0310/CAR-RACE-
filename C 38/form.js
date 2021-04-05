class Form{

constructor(){this.nf=createInput("ENTER NAME HERE ");this.btn=createButton("ENTER");this.msg=createElement("h3")}

display(){
    var t=createElement("h2")
    t.html("CAR RACE")
    t.position(displayWidth/2,20)

   this.nf.position(displayWidth/2,displayHeight/2-20)
    this.btn.position(displayWidth/2,displayHeight/2)
    this.btn.mousePressed(()=>{
        this.nf.hide()
        this.btn.hide()
        var n =this.nf.value();

        playercount+=1
        console.log(playercount)
        player.pn=playercount
        player.updatename(n)
        player.pc(playercount)
        this.msg.html("WELCOME "+n)
        this.msg.position(displayWidth/2-20,displayHeight/2)
        this.msg.style("color","white")
    })
}
hide(){
    this.nf.hide()
    this.btn.hide()
    this.msg.hide()
}
}
