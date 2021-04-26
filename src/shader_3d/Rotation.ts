class Rotation extends BaseEuiView {
    constructor() {
        super();
    }


    protected initUI(){
        const content = new eui.Image('bg_jpg');
        const stage = egret.MainContext.instance.stage;
        content.width = 150;
        content.height = 300;
        this.addChild(content);
        this.initShader(content);
        
    }

    private initShader(content: egret.DisplayObject){

        const vertexSrc = 
`
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform vec2 projectionVector;
const vec3 center=vec3(-1.,1.,0.);

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 vTextureCoord;

void main(void){
    gl_Position=uPMatrix*uMVMatrix*vec4((aVertexPosition/vec3(projectionVector.x,projectionVector.y,1.))+center,1.);
    vTextureCoord=aTextureCoord;
}
`

        const fragmentSrc = 
`
precision highp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
    gl_FragColor=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));
}
`

        content.filters = [new egret.CustomFilter(vertexSrc,fragmentSrc,{
            uSampler: 0,
            uPMatrix: [2.4,0,0,0,0,2.4,0,0,0,0,-1,-1,0,0,-0.2,0],
            uMVMatrix: [0.27,0.82,0.49,0,-0.44,-0.35,0.82,0,0.85,-0.44,0.27,0,0,0,-5,1]
        })];
    }
}