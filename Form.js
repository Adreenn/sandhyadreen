class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(130, 0);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(130, 160);
      button.position(250, 200);
  
      button.mousePressed(()=>{
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playercount+=1;
        player.updateName(name)
        player.updateCount(playercount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
      });
  
    }
  }