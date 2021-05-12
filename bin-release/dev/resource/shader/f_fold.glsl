precision lowp float;

#define PI 3.14159265358
#define TWO_PI 6.28318530718

varying vec2 vTextureCoord;
uniform float iTime;

float saw(float rads){
    rads+=PI*.5;
    float percent=mod(rads,PI)/PI;
    float dir=sign(sin(rads));
    return dir*(2.*percent-1.);
}


void main()
{
    vec2 uv=vTextureCoord;
    float freq=25.+15.*sin(iTime);
    float amp=.1+.1*sin(iTime);
    float increaseOsc=smoothstep(.1,1.,uv.x*.65);// more oscillations to the right
    float yOsc=saw(PI/2.+increaseOsc*freq);
    float yOscOffset=saw(PI+increaseOsc*freq);
    float yAdd=amp*(increaseOsc+increaseOsc*yOsc);
    uv+=vec2(0.,yAdd*(.5+.5*cos(uv.x)));
    float stripeFreq=70.;
    float col=smoothstep(uv.x*.3,.4+uv.x*.3,.5+.5*sin(uv.y*stripeFreq));// faded stripes
    if(yOscOffset>0.)col-=uv.x*1.*amp;// add fake lighting
    gl_FragColor = vec4(vec3(col),1.);
}