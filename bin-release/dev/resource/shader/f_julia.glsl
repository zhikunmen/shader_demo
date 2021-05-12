precision lowp float;

varying vec4 vColor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

vec4 outColor2 = vec4(1.,1.,1.,1.);
vec4 outColor1 = vec4(1.,0.,0.,1.);
vec2 offset = vec2(0.,0.);
uniform float zoom ;
float c_real = 0.45;
float c_image = -0.1428;

void main(){
    vec4 o=vec4(1,1,1,1);
    
    float real=(vTextureCoord.x-0.1)/zoom+offset.x;
    float image=(vTextureCoord.y-0.2)/zoom+offset.y;
    float r2=0.;
    float conut=0.;
    for(float i=0.;i<9999.;i++){
        float tmp_real=real;
        // 计算新的复数-实数部分
        // f(n+1) = f(n)*f(n) + c
        // (a+bi)*(a+bi) + c = a*a - b*b + (2*a*b)i + c_real + (c_image)i
        real=(tmp_real*tmp_real)-(image*image)+c_real;
        // 虚数部分
        image=2.*tmp_real*image+c_image;
        // 复数大小的平方
        r2=real*real+image*image;
        conut=i;
        if(r2>=4.){
            break;
        }
    }
    if(r2<4.){
        o=vColor;
    }else{
        o=vec4(mix(outColor1.rgb,outColor2.rgb,fract(conut*.07)),1);
    }
    
    gl_FragColor=o;
}