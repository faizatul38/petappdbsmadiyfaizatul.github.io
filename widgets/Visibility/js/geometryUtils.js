// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/geometry/Point esri/geometry/Polyline esri/geometry/webMercatorUtils dojo/Deferred dojo/_base/array dojo/_base/lang esri/SpatialReference".split(" "),function(x,y,v,z,A,B,C){var n={getProjectedGeometry:function(a,b,d){var e,c;e=new z;v.canProject(a,b)?(c=v.project(a,b),e.resolve(c)):d.project([a],b,function(a){c=a[0];e.resolve(c)});return e.promise},getDestinationPoint:function(a,b,d){var e=a.x*Math.PI/180,c=b*Math.PI/180;b=Math.sin(c);var c=Math.cos(c),h=.9966471893352243*Math.tan(a.y*
Math.PI/180);a=1/Math.sqrt(1+h*h);var m=h*a,k=Math.atan2(h,c),h=a*b,p=1-h*h,f=2.7233160610984375E11*p/4.040829998465916E13,w=1+f/16384*(4096+f*(-768+f*(320-175*f))),t=f/1024*(256+f*(-128+f*(74-47*f))),g,q,l,r=d/(6356752.314245*w),u,n=0;do f=Math.cos(2*k+r),g=Math.sin(r),q=Math.cos(r),l=t*g*(f+t/4*(q*(-1+2*f*f)-t/6*f*(-3+4*g*g)*(-3+4*f*f))),u=r,r=d/(6356752.314245*w)+l;while(1E-12<Math.abs(r-u)&&200>++n);if(200<=n)return console.log("Formula failed to converge"),null;d=m*g-a*q*c;d=Math.atan2(m*q+a*
g*c,.9966471893352243*Math.sqrt(h*h+d*d));p=2.0955066654848088E-4*p*(4+.003352810664775694*(4-3*p));e=(e+(Math.atan2(g*b,a*q-m*g*c)-.003352810664775694*(1-p)*h*(r+p*g*(f+p*q*(-1+2*f*f))))+3*Math.PI)%(2*Math.PI)-Math.PI;d=180*d/Math.PI;e=180*e/Math.PI;return new x(e,d,new C(4326))},getInverseCalculations:function(a,b){var d=b.x*Math.PI/180-a.x*Math.PI/180,e=.9966471893352243*Math.tan(a.y*Math.PI/180);a=1/Math.sqrt(1+e*e);var e=e*a,c=.9966471893352243*Math.tan(b.y*Math.PI/180);b=1/Math.sqrt(1+c*c);
var c=c*b,h,m,k,p,f,n,t,g,q,l=d,r,u=0;do{h=Math.sin(l);m=Math.cos(l);k=b*h*b*h+(a*c-e*b*m)*(a*c-e*b*m);k=Math.sqrt(k);if(0==k)return{distance:0,initialBearing:0,finalBearing:0};p=e*c+a*b*m;f=Math.atan2(k,p);n=a*b*h/k;t=1-n*n;g=p-2*e*c/t;isNaN(g)&&(g=0);q=2.0955066654848088E-4*t*(4+.003352810664775694*(4-3*t));r=l;l=d+.003352810664775694*(1-q)*n*(f+q*k*(g+q*p*(-1+2*g*g)))}while(1E-12<Math.abs(l-r)&&200>++u);if(200<=u)return null;l=2.7233160610984375E11*t/4.040829998465916E13;u=l/1024*(256+l*(-128+
l*(74-47*l)));d=Math.atan2(b*h,a*c-e*b*m);a=Math.atan2(a*h,-e*b+a*c*m);d=(d+2*Math.PI)%(2*Math.PI);a=(a+2*Math.PI)%(2*Math.PI);e=Number((6356752.314245*(1+l/16384*(4096+l*(-768+l*(320-175*l))))*(f-u*k*(g+u/4*(p*(-1+2*g*g)-u/6*g*(-3+4*k*k)*(-3+4*g*g))))).toFixed(3));d=180*d/Math.PI;a=180*a/Math.PI;return{distance:e,initialBearing:d,finalBearing:a}},getLineBetweenPoints:function(a){var b,d=[];A.forEach(a,B.hitch(this,function(a){d.push([n.removeNegativeExponents(a.x),n.removeNegativeExponents(a.y)])}));
0<d.length&&(b=new y({paths:[d],spatialReference:{wkid:4326}}));return b},getAngleBetweenPoints:function(a,b){a=n.getInverseCalculations(a,b);return null===a?0:a.initialBearing},getDistanceBetweenPoints:function(a,b){a=n.getInverseCalculations(a,b);return null===a?0:a.distance},getPointsForArc:function(a,b,d,e){var c,h=[],m,k;c=b-a;b=parseInt(c,10);0>=b&&(b=1);m=Math.abs(c)/Math.abs(b);if(0<m)for(c=0;c<Math.abs(b)+1;c++)k=a+m*c,(k=n.getDestinationPoint(d,k,Math.abs(e)))&&h.push(k);return h},removeNegativeExponents:function(a){return 1<
a.toString().toLowerCase().split("e-").length?0:a}};return n});