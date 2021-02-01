class Simple extends BaseEuiView {
    constructor() {
        super();
    }

    protected initUI() {
        let bg = new egret.Shape();
        bg.graphics.beginFill(0,1);
        bg.graphics.drawRect(0,0,750,1334);
        bg.graphics.endFill();
        this.addChild(bg);
        let fragmentSrc = [
            "precision lowp float;",
            "varying vec2 vTextureCoord;",
            "uniform float width;",
            "uniform float height;",
            "uniform float movex;",
            "uniform float movey;",
            "void main(){",
                "vec4 fg;",
                "vec2 uv = vTextureCoord.xy;",
                "if(mod(floor((uv.x + movex) / width) + floor((uv.y + movey) / height),2.0) == 0.0){",
                    "fg = vec4(1,1,1,1);",
                "}",
                'else{',
                    'fg = vec4(0,0,0,1);',
                '}',
                'gl_FragColor = fg;',
            "}"
        ].join("\n");
        const customFilter = new egret.CustomFilter(this.vertexSrc, fragmentSrc, {})
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
                movexTurn && (movex -= 0.1);
                if(movex <= -10){
                    movexTurn = false;
                    movey += -0.1;
                }
                if(movey <= -10 || movexTurn){

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