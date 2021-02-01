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
        var fragmentSrc = [
            "precision lowp float;",
            "varying vec2 vTextureCoord;",
            "uniform float width;",
            "uniform float height;",
            "uniform float movex;",
            "uniform float movey;",
            "void main(){",
            "vec4 fg;",
            "vec2 uv = vTextureCoord.xy;",
            "if(mod(floor((uv.x + movex) / width) + floor((uv.y + movey) / height),2.0) == 0.0){",
            "fg = vec4(1,1,1,1);",
            "}",
            'else{',
            'fg = vec4(0,0,0,1);',
            '}',
            'gl_FragColor = fg;',
            "}"
        ].join("\n");
        var customFilter = new egret.CustomFilter(this.vertexSrc, fragmentSrc, {});
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
                movexTurn && (movex -= 0.1);
                if (movex <= -10) {
                    movexTurn = false;
                    movey += -0.1;
                }
                if (movey <= -10 || movexTurn) {
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
