class Ripple extends BaseEuiView {
    constructor() {
        super();
    }


    protected initUI() {
        let sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        const stage = egret.MainContext.instance.stage;
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    }

    private async click(evt: egret.TouchEvent) {
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX), await getShader(ShaderConstant.F_RIPPLE), {
            center: { x: evt.stageX / this.width, y: evt.stageY / this.height },
            time: 0.01,
            offset: 0.01,
            ratio: this.height/ this.width
        })
        this.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this)
    }
}
