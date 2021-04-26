attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
uniform vec2 projectionVector;

varying vec2 vTextureCoord;
varying vec4 vColor;

const vec2 center=vec2(-1.,1.);

const  int num = 2;

float rand(vec2 co){
    return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453);
}

void main(void){
    // x , y , z , w
    gl_Position=vec4((aVertexPosition/projectionVector)+center,0.,1.);
    for(int i =0;i < num; i++){
        for(int j=0; j < num; j++){
            vec2 uv = gl_Position.xy;
            if(uv.x < (float(i) / float(num)) && uv.y < float(j) / float(num)){
                gl_Position.x = rand(uv);
                // gl_Position.y = rand(uv);
            }
        }
    }
    vTextureCoord=aTextureCoord;
    vColor=aColor;
}