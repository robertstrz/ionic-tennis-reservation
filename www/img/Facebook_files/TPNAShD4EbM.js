/*!CK:3895636440!*//*1431325770,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vjwVr"]); }

__d("ControlledReferer",["Event","URI","UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={useFacebookReferer:function(k,l,m){var n=false;function o(){if(n)return;var q=k.contentWindow.location.pathname;if(q!=='/intern/common/referer_frame.php'&&q!=='/common/referer_frame.php')return;n=true;k.contentWindow.document.body.style.margin=0;l();}var p;if(document.domain!=='facebook.com'){p='/intern/common/referer_frame.php';}else if(i.opera()){p='/common/referer_frame.php';}else if(new h(window.location.href).isSecure()){p='https://s-static.ak.facebook.com/common/referer_frame.php';}else p='http://static.ak.facebook.com/common/referer_frame.php';if(m)p+='?fb_source='+m;g.listen(k,'load',o);k.src=p;},useFacebookRefererHtml:function(k,l,m){j.useFacebookReferer(k,function(){k.contentWindow.document.body.innerHTML=l;},m);}};e.exports=j;},null);
__d("TrackingPixel",["Arbiter","ControlledReferer"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={_iframe:(void 0),loadWithNoReferrer:function(j){if(!i._iframe){var k=document.createElement('iframe');k.frameborder=0;k.width=k.height=1;k.style.position='absolute';k.style.top='-10px';h.useFacebookReferer(k,function(){g.inform('TrackingPixel/iframeIsLoaded',null,g.BEHAVIOR_PERSISTENT);},null);document.body.appendChild(k);i._iframe=k;}g.subscribe('TrackingPixel/iframeIsLoaded',function(){var l=i._iframe.contentWindow.document,m=l.createElement('img');m.src=j;});}};e.exports=i;},null);
__d("ExternalTrackingTag",["AsyncSignal","TrackingPixel","Event"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={listenForElementClick:function(k,l,m,n,o){i.listen(k,'click',function(){j.sendRequest(l,m,n,o);});},sendRequest:function(k,l,m,n){if(!k)return;new g('/ads/external_tracking_tag/',{href:k,tracking_tag_id:l,adgroup_id:m,ad_id:n}).send();h.loadWithNoReferrer(k);}};e.exports=j;},null);
__d("FeedAdsClickLogger",["Arbiter","AsyncRequest","Banzai","BanzaiODS","collectDataAttributes","DOM","ge","LitestandMessages","LitestandStream","Parent","TrackingNodes","ExternalTrackingTag","URI","isFacebookURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){b.__markCompiled&&b.__markCompiled();var u='ssinfeed',v={},w=false,x=[];function y(){"use strict";}y.prototype.init=function(z){"use strict";g.subscribe("ClickRefAction/new",this.onNewUserAction.bind(this));if(z.append_tracking_data_to_links){this.appendTrackingDataToLinks();g.subscribe(n.STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));g.subscribe('FeedAdsClickLogger/refreshTrackingData',this.appendTrackingDataToLinks.bind(this),g.SUBSCRIBE_NEW);}};y.prototype.getStories=function(){"use strict";var z=o.getStreamRoot();if(z){return l.scry(z,o.getStoriesSelector());}else{var aa=m('home_stream');if(aa)return l.scry(aa,'.uiStreamStory');}return [];};y.prototype.appendTrackingDataToLinks=function(){"use strict";var z=this.getStories();for(var aa=0;aa<z.length;aa++){var ba=z[aa];if(ba in x)continue;var ca=ba.getAttribute('data-ft');if(!ca||(ca.indexOf('ei')===-1)&&(ca.indexOf('mei')===-1))continue;var da=l.scry(ba,'a');for(var ea=0;ea<da.length;ea++){var fa=da[ea];if(fa.getAttribute('ajaxify')!=null)continue;if(fa.getAttribute('rel')!=null)continue;var ga=fa.getAttribute('href');if(!ga||ga.charAt(0)==='#')continue;var ha=new s(fa);if(t(ha)===false)continue;if(ha.isLinkshimURI()===true)continue;var ia=k(fa,['ft']).ft,ja=ha.getQueryData();ja.ft=ia;ja.__md__=0;ha.setQueryData(ja);fa.setAttribute('href',ha.toString());fa.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');");}x.push(ba);}};y.prototype.getHref=function(z){"use strict";return (z.getAttribute&&((z.getAttribute('ajaxify')||z.getAttribute('data-endpoint')))||z.action||z.href);};y.prototype.sendLogRequest=function(z,aa){"use strict";var ba=z.ei||z.ai;if(!ba&&z.mei)ba=z.mf_story_key;if(z!==null&&typeof(ba)==="string"){var ca=false;if(z.tn){var da=q.parseTrackingNodeString(z.tn);for(var ea=0;ea<da.length;ea++){var fa=da[ea][0];switch(fa){case q.types.LIKE_LINK:case q.types.UNLIKE_LINK:case q.types.COMMENT:case q.types.COMMENT_LINK:case q.types.ADD_COMMENT_BOX:case q.types.MULTI_ATTACHMENT_VIDEO:return;case q.types.XBUTTON:case q.types.HIDE_LINK:case q.types.REPORT_SPAM_LINK:case q.types.HIDE_ALL_LINK:case q.types.DROPDOWN_BUTTON:case q.types.UNHIDE_LINK:return;case q.types.RELATED_SHARE_ARTICLE:case q.types.RELATED_SHARE_VIDEO:return;case q.types.ATTACHMENT:case q.types.USER_MESSAGE:ca=true;break;}}}var ga=Date.now(),ha=500;z.duplicate_click=!!v[ba]&&(ga-v[ba]<ha);v[ba]=ga;if(i.isEnabled('ssinfeed')){i.post(u,z,{delay:0,retry:i.isEnabled('ssinfeed_retry')});}else{var ia=new h('/ajax/ssinfeed/end/').setData(z).setAllowCrossPageTransition(true).setMethod('POST');ia.send();}var ja=z.href;if(new s(ja).isLinkshimURI()&&new s(ja).getQueryData())ja=new s(ja).getQueryData().u;if(ca&&!z.duplicate_click&&aa!==null&&aa.url&&ja&&t(new s(ja))===false){r.sendRequest(aa.url,aa.tag_id,aa.adgroup_id);j.bumpEntityKey('external_tracking_tags','request_sent');}}};y.prototype.onNewUserAction=function(z,aa){"use strict";if(!aa.node)return;var ba=this.getHref(aa.node),ca=p.byTag(aa.node,'input')||p.byTag(aa.node,'button');if(!ba&&ca&&ca.type=="submit"&&ca.getAttribute&&ca.getAttribute('data-ft'))ba="#";var da,ea;if(ba&&aa.event&&(aa.event.type==='click'||aa.event.type==='contextmenu')){da=k(aa.node,['ft']);da.ft.href=ba;da.ft.mouse_type=aa.event.type;ea=k(aa.node,['external-tracking-tags']);this.sendLogRequest(da.ft,ea['external-tracking-tags']);}};e.exports.init=function(z){if(w===false){(new y()).init(z);w=true;}};},null);