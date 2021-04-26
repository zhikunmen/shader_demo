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
var SinShader = (function (_super) {
    __extends(SinShader, _super);
    function SinShader() {
        return _super.call(this) || this;
    }
    SinShader.prototype.initUI = function () {
        var sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.VERTEX), getShader(ShaderConstant.F_SIN), {
            amplitude: 0.1,
            angularVelocity: 10.0,
            frequency: 10.0,
            offset: 0.4,
            iTime: 0.0 //时间
        });
        var ts = 0;
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.iTime += (timeStamp - ts) / 1000;
            ts = timeStamp;
            customFilter.uniforms.offset -= 0.005;
            if (customFilter.uniforms.offset <= 0) {
                customFilter.uniforms.offset = 1;
            }
            return false;
        }, this);
        var img = new eui.Image('resource/assets/loding_candy.png');
        this.addChild(img);
        img.filters = [customFilter];
        img.pos(150, 400);
        var img1 = new eui.Image('resource/assets/loding_candy.png');
        this.addChild(img1);
        img1.pos(150, 600);
    };
    return SinShader;
}(BaseEuiView));
__reflect(SinShader.prototype, "SinShader");
