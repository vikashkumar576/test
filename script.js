function game(){
    var hitInt = 0;
    var clutter ;
    var score =  0;
    //showing all bubbles dynamically 

    function showbubble(){
        for(var i=0; i<168;i++){
            var rand = Math.floor(Math.random()*10);
            clutter = "<div class='bubble'>"+rand+"</div>";
            document.querySelector("#pbtm").innerHTML += clutter;
        }
    }
    showbubble();
    //showing random no . in hit column

    function hitrand(){
        hitInt = Math.floor(Math.random()*10);
        document.querySelector("#hit").textContent = hitInt;
    }
    hitrand();
    // timing counter

    function timer(){
        var p = 6;
        var counter =  setInterval(function(){
           if(p>0){
            p--;
            document.querySelector("#times").textContent = p;
           }
           else{
            clearInterval(counter);
            document.querySelector("#pbtm").innerHTML = "<div class='over-box'><h1 class='over'>Game over </h1><button><i class='fa fa-refresh'> Restart !!!</i></button></div>"
           }
        },1000);
    }
    timer();
    // code for updating score
    function updateScore(){
        score += 10;
        document.querySelector("#score").textContent = score;
    }
    // the real game play 

    document.querySelector("#pbtm").addEventListener("click",function(event){
        var clickedno = Number(event.target.textContent);
        if(hitInt === clickedno){
            updateScore();
            hitrand();
            document.querySelector("#pbtm").innerHTML = "";
            showbubble(); 
        }
        else{
            alert("Please press the bubble which matches hit ! \nTime is running");
            document.querySelector("#pbtm").innerHTML = "";
            showbubble(); 
            hitrand();
        }
    });
}
game();