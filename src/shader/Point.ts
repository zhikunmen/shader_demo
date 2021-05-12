class Point extends BaseEuiView {
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
        content.filters = [new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_POINT),{
            ratio: content.height/content.width
        })];
    }
}