precision lowp float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;

// 振幅（控制波浪顶端和低端的高度）
uniform float amplitude;
// 角速度（控制波浪的周期）
uniform float angularVelocity;
// 频率 （控制波浪移动的速度）
uniform float frequency;
// 偏距
uniform float offset;
// 时间
uniform float iTime;
void main(){
    vec4 color=vColor;
    vec4 fg=texture2D(uSampler,vTextureCoord);
    if(fg.a==0.)discard;
    vec2 uv=vTextureCoord.xy;
    // 相位计算
    float initialPhase=frequency*iTime;
    // 代入正弦曲线公式计算Y值 y=A*sin(Vx±I)+Offset
    float y=amplitude*sin((angularVelocity*uv.x)+initialPhase)+offset;
    color=uv.y>y?fg:fg*.3;
    gl_FragColor=color;
}