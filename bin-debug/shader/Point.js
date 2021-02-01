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
    };
    Point.prototype.initShader = function (content) {
        var fragmentSrc = "\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float ratio;\nvec2 center=vec2(.5,.5*ratio);\nvoid main(){\n    vec2 uv=vTextureCoord;\n    uv.y*=ratio;\n    if(distance(uv,center)<.1)\n    gl_FragColor=vec4(1.,0.,0.,1.);\n}\n";
        content.filters = [new egret.CustomFilter(this.vertexSrc, fragmentSrc, {
                ratio: 1334 / 750
            })];
    };
    return Point;
}(BaseEuiView));
__reflect(Point.prototype, "Point");
