precision lowp float;
varying vec2 vTextureCoord;
uniform float width;
uniform float height;
uniform float movex;
uniform float movey;
void main(){
    vec4 fg;
    vec2 uv=vTextureCoord.xy;
    if(mod(floor((uv.x+movex)/width)+floor((uv.y+movey)/height),2.)==0.){
        fg=vec4(1,1,1,1);
    }
    else{
        fg=vec4(0,0,0,1);
    }
    gl_FragColor=fg;
}