attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform vec2 projectionVector;

varying vec2 vTextureCoord;
varying vec4 vColor;

const vec2 center=vec2(-1.,1.);

void main(void){
    gl_Position=vec4((aVertexPosition/projectionVector)center,0.,1.);
    vTextureCoord=aTextureCoord;
    vColor=aColor;
}

////////////////////////////////片元着色器/////////////

precision lowp float;,
varying vec2 vTextureCoord;,
varying vec4 vColor;,
uniform sampler2D uSampler;,

uniform vec2 center;,
uniform float offset;,
uniform float time;,
uniform float ratio;,
void main(){,
    vec2 uv=vTextureCoord.xy;,
    vec2 texCoord=uv;,
    vec2 nuv=vec2(uv.x,uv.y*ratio);,
    vec2 ncenter=vec2(center.x,center.y*ratio);,
    float dist=distance(nuv,ncenter);,
    if((dist<=(time+offset))&&(dist>=(time-offset))&&time<=.1){,
        float diff=(dist-time);,
        vec2 vc=vec2(ncenter.x,ncenter.y);,
        texCoord=uv+diff;,
    },
    gl_FragColor=texture2D(uSampler,texCoord);,
}