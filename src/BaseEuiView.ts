class BaseEuiView extends eui.Component{

    constructor(){
        super();
        this.initUI();
    }


    protected vertexSrc =
            "attribute vec2 aVertexPosition;\n" +
            "attribute vec2 aTextureCoord;\n" +
            "attribute vec4 aColor;\n" +

            "uniform vec2 projectionVector;\n" +

            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +

            "const vec2 center = vec2(-1.0, 1.0);\n" +

            "void main(void) {\n" +
            "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
            "   vTextureCoord = aTextureCoord;\n" +
            "   vColor = aColor;\n" +
            "}";

    protected initUI(){
    }

}