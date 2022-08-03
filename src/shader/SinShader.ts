class SinShader extends BaseEuiView {
    constructor() {
        super();
    }


    protected async initUI() {
        let sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        const stage = egret.MainContext.instance.stage;
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX), await getShader(ShaderConstant.F_SIN), {
            amplitude: 0.1,//振幅
            angularVelocity: 10.0,//角速度
            frequency: 10.0,//频率
            offset: 0.4,//偏距
            iTime: 0.0//时间
        })
        let ts = 0;
        egret.startTick((timeStamp) => {
            customFilter.uniforms.iTime += (timeStamp - ts) / 1000;
            ts = timeStamp;
            customFilter.uniforms.offset -= 0.005;
            if (customFilter.uniforms.offset <= 0) {
                customFilter.uniforms.offset = 1;
            }
            return false;
        }, this)
        const img = new eui.Image('resource/assets/loding_candy.png')
        this.addChild(img);
        img.filters = [customFilter];
        img.x = 150;
        img.y = 400;


        const img1 = new eui.Image('resource/assets/loding_candy.png')
        this.addChild(img1);
        img1.x = 150;
        img1.y = 600;
    }
}