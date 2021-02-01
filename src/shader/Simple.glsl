attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

uniform vec2 projectionVector;

varying vec2 vTextureCoord;
varying vec4 vColor;

const vec2 center=vec2(-1.,1.);

void main(void){
    gl_Position=vec4((aVertexPosition/projectionVector)center,0.,1.);
    vTextureCoord=aTextureCoord;
    vColor=aColor;
}

////////////////////////////////片元着色器/////////////

precision lowp float;,
varying vec2 vTextureCoord;,
uniform float width;,
uniform float height;,
uniform float movex;,
uniform float movey;,
void main(){,
    vec4 fg;,
    vec2 uv=vTextureCoord.xy;,
    if(mod(floor((uv.x+movex)/width)+floor((uv.y+movey)/height),2.)==0.){,
        fg=vec4(1,1,1,1);,
    },
    else{,
        fg=vec4(0,0,0,1);,
    },
    gl_FragColor=fg;,
}