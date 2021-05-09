attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
uniform vec2 projectionVector;

varying vec2 vTextureCoord;
varying vec4 vColor;

const vec2 center=vec2(-1.,1.);

void main(void){
    // x , y , z , w   透视投影
    gl_Position=vec4((aVertexPosition/projectionVector)+center,0.,1.);
    vTextureCoord=aTextureCoord;
    vColor=aColor;
}