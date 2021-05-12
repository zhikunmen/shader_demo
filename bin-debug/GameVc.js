var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameVc = (function (_super) {
    __extends(GameVc, _super);
    function GameVc() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameVcSkin";
        return _this;
    }
    GameVc.prototype.initUI = function () {
        this.width = egret.MainContext.instance.stage.stageWidth;
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this);
    };
    GameVc.prototype.btnClick = function (evt) {
        switch (evt.target) {
            case this.sin:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new SinShader);
                break;
            case this.ripple:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Ripple);
                break;
            case this.simple:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Simple);
                break;
            case this.point:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Point);
                break;
            case this.mvpMat:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new MvpMat);
                break;
            case this.shake:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Shake);
                break;
            case this.Rotation:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Rotation);
                break;
            case this.mvp:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new MvpMat);
                break;
            case this.water:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Water);
                break;
            case this.grain:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Loading);
                break;
            case this.boom:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Boom);
                break;
            case this.julia:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Julia);
                break;
            case this.fade:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Fade);
                break;
            case this.fold:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Fold);
                break;
            case this.blur:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Blur);
                break;
        }
    };
    return GameVc;
}(BaseEuiView));
__reflect(GameVc.prototype, "GameVc");
