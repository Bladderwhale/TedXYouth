demo.state4 = function () { };
demo.state4.prototype = {
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
        console.log("What is this question num: " + this.txtNum);

    }
};
