class Julia extends BaseEuiView {
    constructor() {
        super();
    }


    protected initUI(){
        const content = new eui.Image('bg_jpg');
        const stage = egret.MainContext.instance.stage;
        content.width = stage.stageWidth;
        content.height = stage.stageHeight;
        this.addChild(content);
        this.initShader(content);
        
    }

    private async initShader(content: egret.DisplayObject){
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_JULIA),{
            zoom:0.1,
        });
        content.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.zoom += 0.1;
            return false;
        }, this)
    }
}