

import {
    res
  } from '@/resource';
  
  const HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor() {
      // 1. super init first
      this._super();
  
      // 2. add a menu item with "X" image, which is clicked to quit the program
      //    you may modify it.
      // ask the window size
      const size = cc.winSize;
  
      // 3. add your codes below...
      // add a label shows "Hello World"
      // create and initialize a label
      const helloLabel = new cc.LabelTTF('Hello World', 'Arial', 38);
      // position the label on the center of the screen
      helloLabel.x = size.width / 2;
      helloLabel.y = size.height / 2 + 200;
      // add the label as a child to this layer
      this.addChild(helloLabel, 5);
  
      // add "HelloWorld" splash screen"
      this.sprite = new cc.Sprite(res.main_duanzao);
      this.sprite.attr({
        x: size.width / 2,
        y: size.height / 2,
      });
      this.addChild(this.sprite, 0);
  
      return true;
    },
  });
  
  const BaseLayout = ccui.Layout.extend({
    ctor: function () {
      this._super();
    }
  });
  
  const HomeScene = cc.Scene.extend({
    onEnter() {
      this._super();
      const layer = new HelloWorldLayer();
      this.addChild(layer);
    },
  });
  
  export default HomeScene;