class Dot{
    constructor(color, posX, posY){
        this.color=color;
        this.posX=posX;
        this.posY=posY;
    }

 createDot(){
    $("#myContainer").append(`<div class="dot" style="background-color:${this.color}; left:${this.posX}px; top:${this.posY}px"></div`)
 }

}

let dotColor;

$("#colorButton").click(function(){
 dotColor = $("#colorInput").val();
 console.log(dotColor);
})


$("#myContainer").click(function(){
 let mouseX = event.pageX-15;
 let mouseY = event.pageY-15;
 console.log(mouseY);
 let dot=new Dot(dotColor, mouseX, mouseY);
 dot.createDot();


})


