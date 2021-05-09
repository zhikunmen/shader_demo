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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MvpMat = (function (_super) {
    __extends(MvpMat, _super);
    function MvpMat() {
        return _super.call(this) || this;
    }
    MvpMat.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sky, stage, stageW, stageH, push, initParticlesData, customFilter, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        sky = new eui.Image("bg_jpg");
                        this.addChild(sky);
                        stage = egret.MainContext.instance.stage;
                        stageW = stage.stageWidth;
                        stageH = stage.stageHeight;
                        sky.width = stageW;
                        sky.height = stageH;
                        push = function (arr, x) { arr[arr.length] = x; };
                        initParticlesData = function (n) {
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
                        _b = (_a = egret.CustomFilter).bind;
                        return [4 /*yield*/, getShader(ShaderConstant.V_MVPMAT)];
                    case 1:
                        _c = [void 0, _d.sent()];
                        return [4 /*yield*/, getShader(ShaderConstant.FRAFMENT)];
                    case 2:
                        customFilter = new (_b.apply(_a, _c.concat([_d.sent(), initParticlesData(10)])))();
                        this.filters = [customFilter];
                        egret.startTick(function (timeStamp) {
                            customFilter.uniforms.time += 0.01;
                            return false;
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MvpMat;
}(BaseEuiView));
__reflect(MvpMat.prototype, "MvpMat");
