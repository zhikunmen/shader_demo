class Simple extends BaseEuiView {
    constructor() {
        super();
    }

    protected async initUI() {
        let bg = new egret.Shape();
        bg.graphics.beginFill(0,1);
        bg.graphics.drawRect(0,0,750,1334);
        bg.graphics.endFill();
        this.addChild(bg);
        const customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX), await getShader(ShaderConstant.F_SIMPLE), {});
        bg.filters = [customFilter];
        const stageH = egret.MainContext.instance.stage.stageHeight;
        const stageW = egret.MainContext.instance.stage.stageWidth;
        let inc = 0.5;
        let movex = 0;
        let movexTurn = true;
        let movey = 0;
        let size = 10;
        egret.startTick((timeStamp) => {
            size += inc;
            if(size > 100){
                inc = 0;
                movexTurn && (movex -= 0.01);
                if(movex <= -2){
                    movexTurn = false;
                    movey += -0.01;
                }
                if(movey <= -2 || movexTurn){

                }
            }
            customFilter.uniforms.width = size / stageW;
            customFilter.uniforms.height = size / stageH;
            customFilter.uniforms.movex = movex;
            customFilter.uniforms.movey = movey;
            return false;
        }, this)
    }
}