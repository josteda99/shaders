#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
  vec2 coord=gl_FragCoord.xy/u_resolution;
  vec3 color=vec3(0.);
  
  vec2 translate=vec2(-.5);
  coord+=translate;
  color.r+=abs(.1+length(coord)-.6*abs(sin(u_time*.9/12.)));
  color.g+=abs(.1+length(coord)-.6*abs(sin(u_time*.6/4.)));
  color.b+=abs(.1+length(coord)-.6*abs(sin(u_time*.3/9.)));
  
  gl_FragColor=vec4(.1/color,1.);
}

