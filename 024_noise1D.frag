#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float noise1D(float value){
  return cos(value+cos(value*90.)*100.)*.5+.5;
}

void main(){
  vec2 coord=gl_FragCoord.xy;
  vec3 color=vec3(0.);
  
  color.r+=noise1D(u_time);
  
  gl_FragColor=vec4(color,1.);
}