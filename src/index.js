/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

import {
    addLabelBMFont,
    BaseLayer
} from "@/utils/exports"
const IndexLayer = BaseLayer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        let size = cc.winSize;

        //this.addBackground(setting_res.background, 50);

        addLabelBMFont(this, APP_NAME, res.maocaoti, null, null,
            cc.p(size.width / 2, size.height / 2), 5, 0.7);
        this.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
            $runScene(new HomeScene());
        })));

        return true;
    }
});

export const LoadingScene = BaseScene.extend({
    onEnter: function () {
        this._super();

        let layer = new IndexLayer();
        this.addChild(layer);
    }
});