class BaseEuiView extends eui.Component{

    constructor(){
        super();
    }

    protected childrenCreated(){
        super.childrenCreated();
        this.initUI();
    }

    protected initUI(){
    }

}