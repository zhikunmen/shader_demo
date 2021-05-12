class Blur extends BaseEuiView {
    constructor() {
        super();
        this.skinName = 'BlurSkin'
    }

    private add: boolean = true;
    public img:eui.Image;
    public slider:eui.HSlider;

    protected async initUI(){
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.VERTEX),await getShader(ShaderConstant.F_BLUR),{
            ratio:0.0,
        });
        this.img.filters = [customFilter];
        eui.Binding.bindHandler(this.slider,["value"],(value)=>{
            customFilter.uniforms.ratio = value * 1;
        },this)
    }
}