class Shake extends BaseEuiView {
    constructor() {
        super();
    }

    private cells: Array<egret.Bitmap>;

    protected initUI() {
        let sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        const stage = egret.MainContext.instance.stage;
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.cells = [];
        for(let i = 1; i <= 5;i ++){
            const cell = new egret.Bitmap(RES.getRes(`N${i}_png`))
            cell.x = 300;
            cell.y = 300 + i * 100;
            this.cells.push(cell);
            this.addChild(cell);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    }

    private async click(evt: egret.TouchEvent) {
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX), await getShader(ShaderConstant.F_SHAKE), {
            iTime: 0.,
        })
        this.cells.forEach((cell)=>{
            cell.filters = [customFilter];
        })
        egret.startTick((timeStamp) => {
            customFilter.uniforms.iTime += 0.5;
            return false;
        }, this)
    }
}