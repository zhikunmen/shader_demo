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
        DataView
    }

    private initShader(content: egret.DisplayObject){
        content.filters = [new egret.CustomFilter(getShader(ShaderConstant.VERTEX),getShader(ShaderConstant.F_POINT),{
            ratio: 1334/750
        })];
    }
}