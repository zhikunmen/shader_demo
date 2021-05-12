precision lowp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

vec2 size = vec2(750.0,1334.0);

// 模糊半径
// for 循环的次数必须为常量
const float RADIUS=10.;

uniform float ratio;

// 获取模糊颜色
vec4 getBlurColor(vec2 pos){
    vec4 color=vec4(0);// 初始颜色
    float sum=0.;// 总权重
    // 卷积过程
    for(float r=-RADIUS;r<=RADIUS;r++){// 水平方向
        for(float c=-RADIUS;c<=RADIUS;c++){// 垂直方向
            vec2 target=pos+vec2(r * ratio/size.x,c * ratio/size.y);// 目标像素位置
            float weight=(RADIUS-abs(r))*(RADIUS-abs(c));// 计算权重
            color+=texture2D(uSampler,target)*weight;// 累加颜色
            sum+=weight;// 累加权重
        }
    }
    color/=sum;// 求出平均值
    return color;
}

void main(){
    vec4 color=getBlurColor(vTextureCoord);// 获取模糊后的颜色
    color.a=vColor.a;// 还原透明度
    gl_FragColor=color;
}