precision lowp float;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 center;
uniform float offset;
uniform float time;
uniform float ratio;
void main(){
    vec2 uv=vTextureCoord.xy;
    vec2 texCoord=uv;
    vec2 nuv=vec2(uv.x,uv.y*ratio);
    vec2 ncenter=vec2(center.x,center.y*ratio);
    float dist=distance(nuv,ncenter);
    if((dist<=(time+offset))&&(dist>=(time-offset))&&time<=.1){
        float diff=(dist-time);
        texCoord=uv+diff;
    }
    gl_FragColor=texture2D(uSampler,texCoord);
}