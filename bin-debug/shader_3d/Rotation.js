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
var Rotation = (function (_super) {
    __extends(Rotation, _super);
    function Rotation() {
        return _super.call(this) || this;
    }
    Rotation.prototype.initUI = function () {
        var content = new eui.Image('bg_jpg');
        var stage = egret.MainContext.instance.stage;
        content.width = 150;
        content.height = 300;
        this.addChild(content);
        this.initShader(content);
    };
    Rotation.prototype.initShader = function (content) {
        var vertexSrc = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform vec2 projectionVector;\nconst vec3 center=vec3(-1.,1.,0.);\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n    gl_Position=uPMatrix*uMVMatrix*vec4((aVertexPosition/vec3(projectionVector.x,projectionVector.y,1.))+center,1.);\n    vTextureCoord=aTextureCoord;\n}\n";
        var fragmentSrc = "\nprecision highp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    gl_FragColor=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));\n}\n";
        content.filters = [new egret.CustomFilter(vertexSrc, fragmentSrc, {
                uSampler: 0,
                uPMatrix: [2.4, 0, 0, 0, 0, 2.4, 0, 0, 0, 0, -1, -1, 0, 0, -0.2, 0],
                uMVMatrix: [0.27, 0.82, 0.49, 0, -0.44, -0.35, 0.82, 0, 0.85, -0.44, 0.27, 0, 0, 0, -5, 1]
            })];
    };
    return Rotation;
}(BaseEuiView));
__reflect(Rotation.prototype, "Rotation");
