precision lowp float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform float iTime;
void main(){
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