/*!CK:2652836539!*//*1428295048,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RTX5S"]); }

__d("AttachmentCTA",["Style"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=10,i={init:function(j){var k=j.parentNode,l=Math.max(k.scrollHeight-j.scrollHeight-h*2,0);g.set(j,'margin-top',l+'px');}};e.exports=i;},null);
__d("CanvasRHCHeightController.react",["React","DOMQuery"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i=g,j=i.PropTypes,k=g.createClass({displayName:"CanvasRHCHeightController",propTypes:{rhc:j.object},render:function(){var l=h.find(document,'#contentArea'),m=0;if(this.props.rhc.scrollHeight<l.scrollHeight)m=l.scrollHeight-this.props.rhc.scrollHeight;var n={height:m+'px'};return (g.createElement("div",{style:n}));}});e.exports=k;},null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';function h(i){var j=i.getBoundingClientRect(),k=0,l=0,m=g(i.ownerDocument),n=m.getBoundingClientRect();if(n.left>0){k=-n.left;}else{var o=m.scrollWidth+n.left,p=n.width;if(p>o)k=p-o;}if(n.top>0)l=-n.top;return {bottom:j.bottom+l,height:j.height,left:j.left+k,right:j.right+k,top:j.top+l,width:j.width};}e.exports=h;},null);
__d("FansJewel",["AsyncRequest"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){"use strict";i.subscribe('marked-seen',function(){new g('/ajax/pages/fans_seen.php').setMethod('POST').send();});}e.exports=h;},null);
__d("StickyArea",["CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","cx","getNormalizedClientRect","getOverlayZIndex","removeFromArray","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s=[],t=null,u=null,v=null,w=r.acrossTransitions(x,1000);function x(){s.sort(function(da,ea){var fa=da.getNode(),ga=ea.getNode();if(fa.compareDocumentPosition){return 3-(fa.compareDocumentPosition(ga)&6);}else return fa.sourceIndex-ga.sourceIndex;});}function y(da,ea,fa){var ga=da.getPlaceholder(),ha=da.getNode(),ia=l.get(ha,'float'),ja=da.getData();if(ja.placeholderWidth!==ea||ja.placeholderHeight!==fa||ja.placeholderFloat!==ia){l.apply(ga,{'float':ia,height:fa+'px',width:ea+'px'});ja.placeholderHeight=fa;ja.placeholderWidth=ea;}if(ha.nextSibling!==ga)h.insertAfter(ha,ga);}function z(da,ea){var fa=da.getData();if(fa.fixed!==ea){l.apply(da.getNode(),fa.styles);g.conditionShow(da.getPlaceholder(),ea);fa.fixed=ea;}}function aa(da,ea){if(!da){return 0;}else if(ea.right<=da.rect.left||ea.left>=da.rect.right){return aa(da.prev,ea);}else return da.bottom;}function ba(){var da=0,ea=s.length,fa=100;function ga(ha,ia){var ja=fa;while(da<ea){var ka=s[da],la=ka.getNode();if(ia&&!i.contains(ia,la))break;fa=Math.max(ja,ka.getZIndex());var ma=ka.getData(),na=la.parentNode,oa=ma.styles;for(var pa in oa)oa[pa]='';z(ka,false);var qa=la.offsetHeight,ra=la.offsetWidth,sa=o(la),ta=aa(ha,sa)+ka.getOffset();if(sa.top<=ta){oa.width=ra+'px';var ua=parseInt(l.get(na,'padding-bottom'),10),va=o(na);if(va.bottom-ua>ta+qa){var wa=parseInt(l.get(la,'margin-left'),10);oa.position='fixed';oa.bottom='auto';oa.top=ta+'px';oa.left=sa.left-wa+'px';}else{if(!ma.parent||na!==ma.parent){if(l.get(na,'position')==='static')l.set(na,'position','relative');ma.parent=na;}oa.position='absolute';oa.top='auto';oa.bottom=ua+'px';var xa=parseInt(l.get(na,'border-left-width'),10);oa.left=(sa.left-va.left-xa)+'px';}y(ka,ra,qa);z(ka,true);}da++;ga({bottom:ta+qa,prev:ha,rect:sa},na);l.set(la,'z-index',fa++);}}ga(null,null);}function ca(da,ea,fa){"use strict";this._node=da;this._data={fixed:false,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}};this._offset=fa;g.addClass(da,"_k");if(!ea)k.onLeave(this.destroy.bind(this));if(!s.length){t=j.listen(window,'scroll',function(){w();ba();});u=j.listen(window,'resize',function(){w();ba();});v=m.subscribe('change',function(){w();ba();});}s.push(this);ca.reflow();}ca.prototype.destroy=function(){"use strict";q(s,this);if(!s.length){t.remove();t=null;u.remove();u=null;}if(this._placeholder)h.remove(this._placeholder);var da=0;for(var ea in this._data.styles){this._data.styles[ea]='';da++;}if(da)l.apply(this._node,this._data.styles);};ca.prototype.getData=function(){"use strict";return this._data;};ca.prototype.getNode=function(){"use strict";return this._node;};ca.prototype.getOffset=function(){"use strict";return this._offset||0;};ca.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=h.create('div');return this._placeholder;};ca.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=p(this._node);return this._zIndex;};ca.prototype.setOffset=function(da){"use strict";this._offset=da;};ca.reflow=r.acrossTransitions(function(){x();ba();},100);e.exports=ca;},null);