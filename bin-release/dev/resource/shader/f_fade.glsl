precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float fade_pct;
void main(){
    vec4 color=vec4(1,1,1,1);
    color*=texture2D(uSampler,vTextureCoord);
    // 当颜色小于溶解的程度，则直接抛弃
    if(color.g<fade_pct)discard;
    gl_FragColor=color;
}