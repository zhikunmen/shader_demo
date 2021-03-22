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
            cell.pos(300,300 + i * 100);
            this.cells.push(cell);
            this.addChild(cell);
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    }

    private click(evt: egret.TouchEvent) {
        let fragmentSrc = `
precision lowp float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform float iTime;
void main(void){
    vec2 uv=vTextureCoord.xy;
    float sway=10.;
    float y=uv.y;
    vec4 fg=texture2D(uSampler,uv);
    // if(fg.a==0.)discard;
    sway+=y*sway;
    uv.x+=(cos(iTime/2.+uv.y/20.)/sway)+sin(iTime+uv.y/50.)/sway;
    vec4 texColor=texture2D(uSampler,uv);
    gl_FragColor=texColor;
}
`
        let customFilter = new egret.CustomFilter(this.vertexSrc, fragmentSrc, {
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