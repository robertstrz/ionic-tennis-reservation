/*!CK:402558328!*//*1433729745,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qg9tS"]); }

__d("BlueBarMinWidthWithJewel",["BanzaiODS","DOMQuery","DOMDimensions","Event","Locale","Style","Vector","CSS","csx","cx","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();f.init=function(r){var s=h.scry(document,"div._uaw")[0],t=h.scry(s,"._fmc")[0],u=h.scry(document,"a._23nx")[0],v=h.scry(document,"a._23ny")[0],w=false,x;if(r&&u&&v){j.listen(u,'click',function(){n.removeClass(document.body,"_23nw");n.hide(u);g.bumpEntityKey('tinyview.bookmark','show.click');});j.listen(v,'click',function(){n.addClass(document.body,"_23nw");n.show(u);g.bumpEntityKey('tinyview.bookmark','hide.click');});}var y=q.bind(null,function(){var z=i.getElementDimensions(s).width,aa=i.getViewportDimensions().width,ba=i.measureElementBox(s,'width',true);w=n.hasClass(document.documentElement,'tinyViewport');var ca;if(k.isRTL()){ca=-m.getElementPosition(s).x;}else ca=2*m.getElementPosition(s).x+z-aa;var da=z-ca-ba;if(ca>0&&da>0){x=da+'px';}else x='';},function(){l.set(t,'width',x);if(r){n.conditionClass(document.body,"_23nw",w);if(u&&v){if(w)g.bumpEntityKey('tinyview.bookmark','icon.show');n.conditionShow(u,w);n.conditionShow(v,w);}}},'BlueBarMinWidthWithJewel');j.listen(window,'resize',y);y();};},null);
__d("legacy:group-edit",["GroupEdit"],function(a,b,c,d){b.__markCompiled&&b.__markCompiled();a.GroupEdit=b('GroupEdit');},3);