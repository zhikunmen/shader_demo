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
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple() {
        return _super.call(this) || this;
    }
    Simple.prototype.initUI = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0, 1);
        bg.graphics.drawRect(0, 0, 750, 1334);
        bg.graphics.endFill();
        this.addChild(bg);
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_SIMPLE), {});
        bg.filters = [customFilter];
        var stageH = egret.MainContext.instance.stage.stageHeight;
        var stageW = egret.MainContext.instance.stage.stageWidth;
        var inc = 0.5;
        var movex = 0;
        var movexTurn = true;
        var movey = 0;
        var size = 10;
        egret.startTick(function (timeStamp) {
            size += inc;
            if (size > 100) {
                inc = 0;
                movexTurn && (movex -= 0.01);
                if (movex <= -2) {
                    movexTurn = false;
                    movey += -0.01;
                }
                if (movey <= -2 || movexTurn) {
                }
            }
            customFilter.uniforms.width = size / stageW;
            customFilter.uniforms.height = size / stageH;
            customFilter.uniforms.movex = movex;
            customFilter.uniforms.movey = movey;
            return false;
        }, this);
    };
    return Simple;
}(BaseEuiView));
__reflect(Simple.prototype, "Simple");
