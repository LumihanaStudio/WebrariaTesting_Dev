window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);
  
    var playerx;
    var playery;
    var player = new Player("JohnSoo", "Resource/Character/3.png");
    
    
    function startGame(){
        player.xPos = 0;
        player.yPos = 2400;

        //몇가지 오류수정
        setInterval(function(){
            Context.context.clearRect(player.xPos, player.yPos, 8, 16);

            console.log(lastLayer[Math.floor(player.xPos / 8)].toString());

            if(player.yPos <= lastLayer[Math.floor(player.xPos / 8)] - 10)
                player.yPos+=1;
            
            Context.context.rect(player.xPos,player.yPos,10,16);
            Context.context.fillStyle = "skyblue";
            Context.context.fill();
            
            Context.context.drawImage(player.sprite, player.xPos, player.yPos, 8, 16);
            
            console.log("Player Drawn Loc X : " + player.xPos + " Loc Y : " + player.yPos);
        }, 10);
    }

function onKeyDown(e){
   keyCode = e.keyCode;
   eventType = e.type;
    
   if(e.keyCode == 37){
     playerx = player.xPos;
     player.xPos -= 9;
   }
   else if(e.keyCode == 38){
     playery = player.yPos;
     player.yPos -= 20;
   }
   else if(e.keyCode == 39){
     playerx = player.xPos;
     player.xPos += 9;
   }
   else if(e.keyCode == 40){
     playerx = player.yPos;
     player.yPos += 10;
   }
 }
 
 function onKeyUp(e){
   keyCode = e.keyCode;
   eventType = e.type;
 }