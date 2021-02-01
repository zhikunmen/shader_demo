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
var MvpMat = (function (_super) {
    __extends(MvpMat, _super);
    function MvpMat() {
        return _super.call(this) || this;
    }
    MvpMat.prototype.initUI = function () {
        var sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.vertexSrc =
            "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nconst vec2 center=vec2(-1.,1.);\nuniform mat4 viewMat;\nuniform mat4 projectionMat;\nuniform float iTime;\n\nvarying vec2 vTexCoord;\nconst vec3 camera=vec3(0,0,1);\n\n// \u4F2A\u968F\u673A\u6570\u751F\u6210\u5668\nfloat rand(vec2 co){\n    return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453);\n}\n\nvoid main(){\n    // \u6C42\u51FA\u7C92\u5B50\u76F8\u5BF9\u4E8E\u76F8\u673A\u4F4D\u7F6E\u7684\u5355\u4F4D\u65B9\u5411\u5411\u91CF\uFF0C\u5E76\u9644\u5E26\u4E0A\u4F2A\u968F\u673A\u6570\u7684\u6270\u52A8\n    vec3 dir=normalize(center.xy*rand(center.xy)-camera);\n    // \u6CBF\u6270\u52A8\u540E\u7684\u65B9\u5411\uFF0C\u968F\u65F6\u95F4\u9012\u589E\u504F\u79FB\u91CF\n    vec2 translatedPos=aVertexPosition.xy+dir*iTime;\n    \n    // \u7ED9\u7EB9\u7406\u5750\u6807\u63D2\u503C\n    vTexCoord=aTextureCoord;\n    // \u6C42\u51FA\u77E9\u9635\u53D8\u6362\u540E\u6700\u7EC8\u7684\u9876\u70B9\u4F4D\u7F6E\n    gl_Position=vec4(translatedPos,1,1);\n}\n        ";
        var fragmentSrc = "\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nvoid main(){\n    gl_FragColor=texture2D(uSampler,vTextureCoord);\n}\n";
        var customFilter = new egret.CustomFilter(this.vertexSrc, fragmentSrc, {
            iTime: 0,
        });
        this.filters = [customFilter];
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this);
    };
    return MvpMat;
}(BaseEuiView));
__reflect(MvpMat.prototype, "MvpMat");
