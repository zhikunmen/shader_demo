class GameVc extends BaseEuiView {

    constructor() {
        super();
        this.skinName = "GameVcSkin"
    }

    private viewGroup: eui.Group;
    private ripple: eui.Button;
    private simple:eui.Button;
    private point:eui.Button;

    public mvpMat: eui.Button;
    public sin: eui.Button;
    public shake: eui.Button;
    public Rotation:eui.Button;
    public mvp: eui.Button;
    public water: eui.Button;
    public loading: eui.Button;
    public boom: eui.Button;

    protected initUI() {
        this.width = egret.MainContext.instance.stage.stageWidth;
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this);
    }

    private btnClick(evt: egret.TouchEvent) {
        switch (evt.target) {
            case this.sin:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new SinShader);
                break;
            case this.ripple:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Ripple);
                break;
            case this.simple:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Simple);
                break;
            case this.point:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Point);
                break;
            case this.mvpMat:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new MvpMat);
                break;
            case this.shake:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Shake);
                break;
            case this.Rotation:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Rotation);
                break;
            case this.mvp:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new MvpMat);
                break;
            case this.water:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Water);
                break;
            case this.loading:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Loading);
                break;
            case this.boom:
                this.viewGroup.removeChildren();
                this.viewGroup.addChild(new Boom);
                break;
        }
    }
}