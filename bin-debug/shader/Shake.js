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
var Shake = (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super.call(this) || this;
    }
    Shake.prototype.initUI = function () {
        var sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.cells = [];
        for (var i = 1; i <= 5; i++) {
            var cell = new egret.Bitmap(RES.getRes("N" + i + "_png"));
            cell.pos(300, 300 + i * 100);
            this.cells.push(cell);
            this.addChild(cell);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    Shake.prototype.click = function (evt) {
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_SHAKE), {
            iTime: 0.,
        });
        this.cells.forEach(function (cell) {
            cell.filters = [customFilter];
        });
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.iTime += 0.5;
            return false;
        }, this);
    };
    return Shake;
}(BaseEuiView));
__reflect(Shake.prototype, "Shake");
