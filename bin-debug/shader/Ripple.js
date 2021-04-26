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
var Ripple = (function (_super) {
    __extends(Ripple, _super);
    function Ripple() {
        return _super.call(this) || this;
    }
    Ripple.prototype.initUI = function () {
        var sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    Ripple.prototype.click = function (evt) {
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_RIPPLE), {
            center: { x: evt.stageX / this.width, y: evt.stageY / this.height },
            time: 0.01,
            offset: 0.01,
            ratio: this.height / this.width
        });
        this.filters = [customFilter];
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this);
    };
    return Ripple;
}(BaseEuiView));
__reflect(Ripple.prototype, "Ripple");
