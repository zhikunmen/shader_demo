precision lowp float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform float amplitude;
uniform float angularVelocity;
uniform float frequency;
uniform float offset;
uniform float iTime;
void main(){
    vec4 color=vColor;
    vec4 fg=texture2D(uSampler,vTextureCoord);
    if(fg.a==0.)discard;
    vec2 uv=vTextureCoord.xy;
    float initialPhase=frequency*iTime;
    float y=amplitude*sin((angularVelocity*uv.x)+initialPhase)+offset;
    color=uv.y>y?fg:fg*.3;
    gl_FragColor=color;
}