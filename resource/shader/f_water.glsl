precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float iTime;


const float speed=.2;
const float frequency=8.;

vec2 shift(vec2 p){
    float d=iTime*speed;
    vec2 f=frequency*(p+d);
    vec2 q=cos(vec2(
    cos(f.x-f.y)*cos(f.y),
    sin(f.x+f.y)*sin(f.y)));
    return q;
}
        
void main(){
    vec2 r=vTextureCoord.xy;
    vec2 p=shift(r);
    vec2 q=shift(r+1.);
    vec2 s=r+0.01*(p-q);
    vec4 texColor=texture2D(uSampler,s);
    gl_FragColor=texColor;
}