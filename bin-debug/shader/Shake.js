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
var Shake = (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super.call(this) || this;
    }
    Shake.prototype.initUI = function () {
        var sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.cells = [];
        for (var i = 1; i <= 5; i++) {
            var cell = new egret.Bitmap(RES.getRes("N" + i + "_png"));
            cell.x = 300;
            cell.y = 300 + i * 100;
            this.cells.push(cell);
            this.addChild(cell);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    Shake.prototype.click = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var customFilter, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = egret.CustomFilter).bind;
                        return [4 /*yield*/, getShader(ShaderConstant.VERTEX)];
                    case 1:
                        _c = [void 0, _d.sent()];
                        return [4 /*yield*/, getShader(ShaderConstant.F_SHAKE)];
                    case 2:
                        customFilter = new (_b.apply(_a, _c.concat([_d.sent(), {
                                iTime: 0.,
                            }])))();
                        this.cells.forEach(function (cell) {
                            cell.filters = [customFilter];
                        });
                        egret.startTick(function (timeStamp) {
                            customFilter.uniforms.iTime += 0.5;
                            return false;
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Shake;
}(BaseEuiView));
__reflect(Shake.prototype, "Shake");
