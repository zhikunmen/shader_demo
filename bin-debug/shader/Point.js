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
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super.call(this) || this;
    }
    Point.prototype.initUI = function () {
        var content = new eui.Image('bg_jpg');
        var stage = egret.MainContext.instance.stage;
        content.width = stage.stageWidth;
        content.height = stage.stageHeight;
        this.addChild(content);
        this.initShader(content);
        DataView;
    };
    Point.prototype.initShader = function (content) {
        content.filters = [new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_POINT), {
                ratio: 1334 / 750
            })];
    };
    return Point;
}(BaseEuiView));
__reflect(Point.prototype, "Point");
