demo.state3 = function () { };
demo.state3.prototype = {
    tryAgainAttempts: 0,
    preload: function () {
        loadAssets();
    },
    create: function () {
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        background();

      


    },
    update: function () {

    }
};