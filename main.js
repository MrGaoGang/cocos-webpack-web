// Cocos2d always check this file and it not support ES6 syntax. So we move cc.game.onStart in ./src/main.js

cc.game.onStart = function () {
    cc.start();
};

cc.game.run();