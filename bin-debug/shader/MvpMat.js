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
        var push = function (arr, x) { arr[arr.length] = x; };
        // 生成将图像等分为 n x n 矩形的数据
        var initParticlesData = function (n) {
            var _a = [[], [], [], []], positions = _a[0], centers = _a[1], texCoords = _a[2], indices = _a[3];
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    var _b = [i / n, (i + 1) / n], x0 = _b[0], x1 = _b[1]; // 每个粒子的 x 轴左右坐标
                    var _c = [j / n, (j + 1) / n], y0 = _c[0], y1 = _c[1]; // 每个粒子的 y 轴上下坐标
                    var _d = [x0 + x1 / 2, y0 + y1 / 2], xC = _d[0], yC = _d[1]; // 每个粒子的中心二维坐标
                    var h = 0.5; // 将中心点从 (0.5, 0.5) 平移到原点的偏移量
                    // positions in (x, y), z = 0
                    push(positions, x0 - h);
                    push(positions, y0 - h);
                    push(positions, x1 - h);
                    push(positions, y0 - h);
                    push(positions, x1 - h);
                    push(positions, y1 - h);
                    push(positions, x0 - h);
                    push(positions, y1 - h);
                    // texCoords in (x, y)
                    push(texCoords, x0);
                    push(texCoords, y0);
                    push(texCoords, x1);
                    push(texCoords, y0);
                    push(texCoords, x1);
                    push(texCoords, y1);
                    push(texCoords, x0);
                    push(texCoords, y1);
                    // center in (x, y), z = 0
                    push(centers, xC - h);
                    push(centers, yC - h);
                    push(centers, xC - h);
                    push(centers, yC - h);
                    push(centers, xC - h);
                    push(centers, yC - h);
                    push(centers, xC - h);
                    push(centers, yC - h);
                    // indices
                    var k = (i * n + j) * 4;
                    push(indices, k);
                    push(indices, k + 1);
                    push(indices, k + 2);
                    push(indices, k);
                    push(indices, k + 2);
                    push(indices, k + 3);
                }
            }
            // 着色器内的变量名是单数形式，将复数形式的数组名与其对应起来
            return {
                pos: positions,
                center: centers,
                texCoord: texCoords,
                index: indices
            };
        };
        console.log(initParticlesData(5));
        var customFilter = new egret.CustomFilter(getShader(ShaderConstant.V_MVPMAT), getShader(ShaderConstant.FRAFMENT), initParticlesData(10));
        this.filters = [customFilter];
        egret.startTick(function (timeStamp) {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this);
    };
    return MvpMat;
}(BaseEuiView));
__reflect(MvpMat.prototype, "MvpMat");
