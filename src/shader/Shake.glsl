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

precision lowp float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform float iTime;
void main(void){
    vec2 uv=vTextureCoord.xy;
    float sway=10.;
    float y=uv.y;
    vec4 fg=texture2D(uSampler,uv);
    // if(fg.a==0.)discard;
    sway+=y*sway;
    uv.x+=(cos(iTime/2.+uv.y/20.)/sway)+sin(iTime+uv.y/50.)/sway;
    vec4 texColor=texture2D(uSampler,uv);
    gl_FragColor=texColor;
}

// vec4 color=vColor;,
// vec4 fg=texture2D(uSampler,vTextureCoord);,
// if(fg.a==0.)discard;,
// vec2 uv=vTextureCoord.xy;,

// float initialPhase=frequency*iTime;,
// float y=amplitude*sin((angularVelocity*uv.x)+initialPhase)+offset;,
// color=uv.y>y?fg:fg*.3;,
// gl_FragColor=color;,