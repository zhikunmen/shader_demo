precision lowp float;

varying vec2 vTextureCoord;
uniform float ratio;
vec2 center=vec2(.5,.5*ratio);
void main(){
    vec2 uv=vTextureCoord;
    uv.y*=ratio;
    if(distance(uv,center)<.1)
    gl_FragColor=vec4(1.,0.,0.,1.);
}