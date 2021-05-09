class Boom extends BaseEuiView {
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
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_BOOM),{
            iTime:0,
            ratio: 1334/750
        });
        content.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.iTime += 0.01;
            return false;
        }, this)
    }
}