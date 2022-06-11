
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
  vec2 coord=(gl_FragCoord.xy/u_resolution);
  float color=0.;
  color+=sin(coord.x*6.+sin(u_time+coord.y*90.+cos(coord.x*30.+u_time*2.)))*.5;
  
  gl_FragColor=vec4(vec3(color+coord.x+sin(u_time*2.),color,color+coord.x),1.);
}
