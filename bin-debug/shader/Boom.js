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
var Boom = (function (_super) {
    __extends(Boom, _super);
    function Boom() {
        return _super.call(this) || this;
    }
    Boom.prototype.initUI = function () {
        var content = new eui.Image('bg_jpg');
        var stage = egret.MainContext.instance.stage;
        content.width = stage.stageWidth;
        content.height = stage.stageHeight;
        this.addChild(content);
        this.initShader(content);
    };
    Boom.prototype.initShader = function (content) {
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_BOOM), {
            iTime: 0,
            ratio: 1334 / 750
        });
        content.filters = [customFilter];
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.iTime += 0.01;
            return false;
        }, this);
    };
    return Boom;
}(BaseEuiView));
__reflect(Boom.prototype, "Boom");
