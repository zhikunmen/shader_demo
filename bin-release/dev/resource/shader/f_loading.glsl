precision lowp float;

varying vec2 vTextureCoord;
uniform float ratio;
vec2 center=vec2(.5,.5*ratio);
void main(){
    vec2 uv=vTextureCoord;
    uv.y*=ratio;
    if(distance(uv,center)>=.09 && distance(uv,center)<=.11){
        gl_FragColor=vec4(atan(uv.y, uv.x),sin(uv.y / uv.x),uv.y,1.);
    }
}