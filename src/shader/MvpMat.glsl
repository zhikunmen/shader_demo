attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

const vec2 center=vec2(-1.,1.);
uniform mat4 viewMat;
uniform mat4 projectionMat;
uniform float iTime;

varying vec2 vTexCoord;
const vec3 camera=vec3(0,0,1);

// 伪随机数生成器
float rand(vec2 co){
    return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453);
}

void main(){
    // 求出粒子相对于相机位置的单位方向向量，并附带上伪随机数的扰动
    vec3 dir=normalize(center.xyz*rand(center.xy)-camera);
    // 沿扰动后的方向，随时间递增偏移量
    vec3 translatedPos=aVertexPosition.xy+dir*iTime;
    
    // 给纹理坐标插值
    vTexCoord=aTextureCoord;
    // 求出矩阵变换后最终的顶点位置
    gl_Position=vec4(translatedPos,1);
}

////////////////////////////////片元着色器/////////////

precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
void main(){
    gl_FragColor=texture2D(uSampler,vTextureCoord);
}