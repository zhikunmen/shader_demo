precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float iTime;

// 随时间变化的最大值和最小
float MIN_SIZE=2.;
float MAX_SIZE=500.;

// 计算到圆的相对位置 <0.在之外 >1.0之内
float ComputeCircle(vec2 pos,vec2 center,float radius,float feather)
{
    // 到圆心位置
    float dist=length(center-pos);
    
    float start=radius-feather;
    float end=radius+feather;
    return smoothstep(start,end,dist);
}

void main(){
    // 计算圆的参数，圆的大小随时间推移
    float cycle=clamp(cos(iTime/2.)*.6+.7,0.,1.);
    float diameter=mix(MAX_SIZE,MIN_SIZE,cycle);
    float radius=diameter/2.;
    vec2 center=vec2(0.5,0.5);
    vec2 xy = vTextureCoord.xy;
    // 计算到圆的相对位置
    // 当圆很小时，使用特征值减少锯齿
    // 调整位置，使一个圆位于显示中心
    vec2 screenPos=xy-vec2(radius);
    vec2 pos=mod(screenPos,vec2(diameter))-vec2(radius);
    float d=ComputeCircle(pos,center,radius,.5);
    
    vec2 shift=vec2(.5)-fract(diameter/2.);
    vec2 uv=floor(diameter*xy+shift)/diameter;
    
    //使用到像素化块中心的偏移对纹理进行采样。
    //注意：使用较大的负偏差可以有效地禁用mipmapping，否则会导致
    //采样UV在像素化块边界处突然变化的瑕疵。
    uv+=vec2(.5)/diameter;
    uv=clamp(uv,0.,.99);
    vec3 texColor=texture2D(uSampler,uv).rgb;
    
    //根据圆形计算颜色，在该颜色和背景色之间混合。
    //注意：将“混合因子”（mix factor）设置为0.0可直接查看像素化效果，而不使用圆。
    vec3 bg=vec3(0.,0.,0.);
    vec3 col=mix(texColor,bg,d);
    gl_FragColor=vec4(col,1.);
}