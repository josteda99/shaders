#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

mat2 scale(vec2 scale){
  return mat2(scale.x,0.,0.,scale.y);
}

float cicleShape(vec2 position,float radius){
  return step(radius,length(position-vec2(.5)));
}

void main(){
  vec2 coord=gl_FragCoord.xy/u_resolution;
  vec3 color=vec3(0.);
  coord-=vec2(.5);
  coord=scale(vec2(sin(u_time)+2.))*coord;
  coord+=vec2(.5);
  
  color+=vec3(cicleShape(coord,.1));
  gl_FragColor=vec4(color,1.);
}
