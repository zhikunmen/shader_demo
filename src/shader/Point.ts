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

    private initShader(content: egret.DisplayObject){

        let fragmentSrc = 
`
precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float ratio;
vec2 center=vec2(.5,.5*ratio);
void main(){
    vec2 uv=vTextureCoord;
    uv.y*=ratio;
    if(distance(uv,center)<.1)
    gl_FragColor=vec4(1.,0.,0.,1.);
}
`

        content.filters = [new egret.CustomFilter(this.vertexSrc,fragmentSrc,{
            ratio: 1334/750
        })];
    }
}