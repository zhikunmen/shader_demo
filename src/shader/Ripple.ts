class Ripple extends BaseEuiView {
    constructor() {
        super();
    }


    protected initUI() {
        let sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        const stage = egret.MainContext.instance.stage;
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    }

    private click(evt: egret.TouchEvent) {
        let fragmentSrc = [
            "precision lowp float;",
            "varying vec2 vTextureCoord;",
            "varying vec4 vColor;",
            "uniform sampler2D uSampler;",

            "uniform vec2 center;",
            "uniform float offset;", 
            "uniform float time;",
            "uniform float ratio;",
            "void main(){",
                "vec2 uv = vTextureCoord.xy;",
                "vec2 texCoord = uv;",
                "vec2 nuv = vec2(uv.x, uv.y * ratio);",
                "vec2 ncenter = vec2(center.x,center.y * ratio);",
                "float dist = distance(nuv, ncenter);",
                "if ( (dist <= (time + offset)) && (dist >= (time - offset)) && time <= 0.1){",
                    "float diff = (dist - time);",
                    "vec2 vc = vec2(ncenter.x,ncenter.y);",
                    "texCoord = uv + diff;",
                "}",
                "gl_FragColor = texture2D(uSampler, texCoord);",
            "}"
        ].join("\n");
        let customFilter = new egret.CustomFilter(this.vertexSrc, fragmentSrc, {
            center: { x: evt.stageX / this.width, y: evt.stageY / this.height },
            time: 0.01,
            offset: 0.01,
            ratio: this.height/ this.width
        })
        this.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this)
    }
}