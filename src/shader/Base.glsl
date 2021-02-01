attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform vec2 projectionVector;

varying vec2 vTextureCoord;
varying vec4 vColor;

const vec2 center=vec2(-1.,1.);

void main(void){
    gl_Position=vec4((aVertexPosition/projectionVector)+center,0.,1.);
    vTextureCoord=aTextureCoord;
    vColor=aColor;
}

////////////////////////////////片元着色器/////////////

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