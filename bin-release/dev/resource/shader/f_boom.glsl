precision lowp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float ratio;
uniform float iTime;

void main()
{
    float offset=(iTime-floor(iTime))/iTime;
    float currentTime=(iTime)*(offset);
    
    vec3 waveParams=vec3(10.,.8,.1);
    
    vec2 waveCenter=vec2(.5,.5);
    waveCenter.y*=ratio;
    
    vec2 texCoord=vTextureCoord;
    vec2 puv = vTextureCoord.xy;
    puv.y *= ratio;
    // texCoord.y*=ratio;
    float dist=distance(puv,waveCenter);
    vec4 color=texture2D(uSampler,texCoord);
    if((dist<=((currentTime)+(waveParams.z)))&&
    (dist>=((currentTime)-(waveParams.z))&&dist<0.3))
    {
        float diff=(dist-currentTime);
        float scaleDiff=(1.-pow(abs(diff*waveParams.x),waveParams.y));
        float diffTime=(diff*scaleDiff);
        
        vec2 diffTexCoord=normalize(texCoord-waveCenter);
        
        //随时间减少影响
        texCoord+=((diffTexCoord*diffTime)/(currentTime*dist*40.));
        
        //随着时间和距离减弱
        color+=(color*scaleDiff)/(currentTime*dist*40.);
    }
    gl_FragColor=color;
}