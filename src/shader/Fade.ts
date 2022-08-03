class Fade extends BaseEuiView {
    constructor() {
        super();
    }

    private text: eui.Label;
    private add: boolean = true;
    protected initUI(){
        const content = new eui.Image('resource/assets/loding_candy.png');
        const stage = egret.MainContext.instance.stage;
        this.width = stage.stageWidth;
        this.height = stage.stageHeight
        content.horizontalCenter = content.verticalCenter = 0;
        this.addChild(content);
        this.initShader(content);
        this.text = new eui.Label();
        this.text.horizontalCenter = 0;
        this.text.bottom = 100;
        this.addChild(this.text);
        this.text.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            this.add = !this.add;
        },this)
    }

    private async initShader(content: egret.DisplayObject){
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_FADE),{
            fade_pct:0.0,
        });
        content.filters = [customFilter];
        egret.startTick((timeStamp) => {
            this.text.text = customFilter.uniforms.fade_pct.toFixed(2);
            customFilter.uniforms.fade_pct += this.add ?  0.01: -0.01;
            return false;
        }, this)
    }
}