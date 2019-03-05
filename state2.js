demo.state2 = function () { };
demo.state2.prototype = {
    tryAgainAttempts: 0,
    preload: function () {
        loadAssets();
    },
    create: function () {
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        background();
        scalingCanvasWindow(800, 600, this);
        var video = GameInstance.add.video('intro');
        video.addToWorld(GameInstance.world.centerX, GameInstance.world.centerY, 0.5, 0.5, 800/1024, 600/768);
        video.play(true);
        this.title = GameInstance.add.text(270,100,'TedXYouth',{ font: '60px Arial', fill: '#ffffff' });
        this.mobileButton = GameInstance.add.button(100,300,'button3');
        this.htmlButton = GameInstance.add.button(400,300,'button3');
        this.mobileButton.alpha = 0.8;
        this.htmlButton.alpha = 0.8;
        this.mobileButton.events.onInputOver.add(function(){
            roundedrectangle = GameInstance.add.graphics(0,0); //Add the graphics into the game.
            roundedrectangle.beginFill(0xffffff,1); //To begin filling up the rounded rectangle.
            roundedrectangle.lineStyle(2,0x000000, 1); //To line style the rounded rectangle.
            roundedrectangle.drawRoundedRect(50, 90, 500, 500); //Setting the positions.
            roundedrectangle.endFill();
            roundedrectangle.alpha = 0.5;
            roundedrectangle.visible = true;
        },this);
        this.mobileButton.events.onInputOut.add(function(){
            roundedrectangle.alpha = 0.5;
            roundedrectangle.visible = false;
    }, this); 

   

       
    },
    update: function () {

    }
};
