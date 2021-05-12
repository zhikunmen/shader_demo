class Fold extends BaseEuiView {
    constructor() {
        super();
    }

    private text: eui.Label;
    private add: boolean = true;
    protected initUI(){
        const content = new eui.Image('bg_jpg');
        const stage = egret.MainContext.instance.stage;
        this.setWH(stage.stageWidth,stage.stageHeight);
        content.setWH(this.width,this.height);
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
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_FOLD),{
            iTime:0.0,
        });
        content.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.iTime += this.add ?  0.01: -0.01;
            return false;
        }, this)
    }
}