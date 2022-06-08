#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float rectShape(vec2 position,vec2 scale){
  scale=vec2(.5)-scale*.5;
  vec2 shaper=vec2(step(scale.x,position.x),step(scale.y,position.y));
  shaper*=vec2(step(scale.x,1.-position.x),step(scale.y,1.-position.y));
  return shaper.x*shaper.y;
}

mat2 rotate(float angle){
  return mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
}

void main(){
  vec2 coord=gl_FragCoord.xy/u_resolution;
  vec3 color=vec3(0.);
  coord-=vec2(.5);
  coord=rotate(sin(u_time))*coord;
  coord+=vec2(.5);
  
  color+=vec3(rectShape(coord,vec2(.3,.3)));
  gl_FragColor=vec4(color,1.);
}
