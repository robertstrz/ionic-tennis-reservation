/*!CK:3630187588!*//*1433762085,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["MtNDg"]); }

__d("DataViewPolyfill",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();'use strict';function g(h,i,j){if(i===(void 0)){this.$DataViewPolyfill0=new Uint8Array(h);}else if(j===(void 0)){this.$DataViewPolyfill0=new Uint8Array(h,i);}else this.$DataViewPolyfill0=new Uint8Array(h,i,j);this.byteLength=this.$DataViewPolyfill0.byteLength;}g.prototype.getUint8=function(h){if(h>=this.$DataViewPolyfill0.length)throw new Error('Trying to read beyond bounds of DataViewPolyfill');return this.$DataViewPolyfill0[h];};g.prototype.getUint16=function(h,i){var j=this.getUint8(h),k=this.getUint8(h+1);return i?(k*256)+j:(j*256)+k;};g.prototype.getUint32=function(h,i){var j=this.getUint8(h),k=this.getUint8(h+1),l=this.getUint8(h+2),m=this.getUint8(h+3);return i?(((m*256+l)*256+k)*256)+j:(((j*256+k)*256+l)*256)+m;};g.isSupported=function(){return !!a.Uint8Array;};e.exports=g;},null);
__d("getImageSize",["DataViewPolyfill"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=a.DataView||g;function i(m){return {width:m.getUint16(6,true),height:m.getUint16(8,true)};}function j(m){return {width:m.getUint32(16,false),height:m.getUint32(20,false)};}function k(m){var n=m.byteLength,o=2;while(o<n){var p=m.getUint16(o,false);o+=2;if(p==65472||p==65474){return {width:m.getUint16(o+5,false),height:m.getUint16(o+3,false)};}else o+=m.getUint16(o,false);}return null;}function l(m){var n=new h(m);if(n.getUint8(0)==255&&n.getUint8(1)==216)return k(n);if(n.getUint8(0)==71&&n.getUint8(1)==73&&n.getUint8(2)==70)return i(n);if(n.getUint8(0)==137&&n.getUint8(1)==80&&n.getUint8(2)==78&&n.getUint8(3)==71)return j(n);return null;}e.exports=l;l.gif=i;l.png=j;l.jpeg=k;},null);
__d("ChatAutoSendPhotoUploader",["ArbiterMixin","AsyncUploadRequest","DOM","Event","FileForm","FileFormResetOnSubmit","FileInput","FormSubmitOnChange","JpegResizer","MercuryAttachmentType","PhotosMimeType","PhotosUploadID","SubscriptionsHandler","arrayContains","csx","getImageSize","getObjectValues","invariant","isEmpty","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){b.__markCompiled&&b.__markCompiled();'use strict';function aa(){return 'upload_'+r.getNewID();}var ba=z(g);for(var ca in ba)if(ba.hasOwnProperty(ca))ea[ca]=ba[ca];var da=ba===null?null:ba.prototype;ea.prototype=Object.create(da);ea.prototype.constructor=ea;ea.__superConstructor__=ba;function ea(fa,ga,ha){this.$ChatAutoSendPhotoUploader0=ha;this.$ChatAutoSendPhotoUploader1=ga;this.$ChatAutoSendPhotoUploader2=new s();this.$ChatAutoSendPhotoUploader3={};this.$ChatAutoSendPhotoUploader4={};this.$ChatAutoSendPhotoUploader5=false;this.$ChatAutoSendPhotoUploader6=fa.getAttribute('action');this.$ChatAutoSendPhotoUploader7=new k(fa,[n,l]);this.$ChatAutoSendPhotoUploader7.setAllowCrossOrigin(true);this.$ChatAutoSendPhotoUploader7.setUploadInParallel(true);var ia=i.find(fa,"._4q60"),ja=i.find(ia,"._4q61");this.$ChatAutoSendPhotoUploader8=new m(ia,ja,ga);this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.$ChatAutoSendPhotoUploader7.subscribe('submit',this.$ChatAutoSendPhotoUploader9.bind(this)),this.$ChatAutoSendPhotoUploader7.subscribe('success',this.$ChatAutoSendPhotoUploadera.bind(this)),this.$ChatAutoSendPhotoUploader7.subscribe('failure',this.$ChatAutoSendPhotoUploaderb.bind(this)),this.$ChatAutoSendPhotoUploader7.subscribe('progress',this.$ChatAutoSendPhotoUploaderc.bind(this)),j.listen(ja,'click',function(){if(this.$ChatAutoSendPhotoUploaderd===(void 0))this.$ChatAutoSendPhotoUploadere();if(this.$ChatAutoSendPhotoUploaderd)if(o.prepareResource)o.prepareResource();this.inform('open');}.bind(this)));}ea.prototype.$ChatAutoSendPhotoUploadere=function(){this.$ChatAutoSendPhotoUploaderd=o.isSupported();if(this.$ChatAutoSendPhotoUploaderd)this.$ChatAutoSendPhotoUploader7.setPreprocessHandler(this.$ChatAutoSendPhotoUploaderf.bind(this));};ea.prototype.isUploading=function(){return !y(this.$ChatAutoSendPhotoUploader3);};ea.prototype.destroy=function(){this.$ChatAutoSendPhotoUploader2.release();this.$ChatAutoSendPhotoUploader7.destroy();this.$ChatAutoSendPhotoUploader3={};this.$ChatAutoSendPhotoUploader4={};};ea.prototype.$ChatAutoSendPhotoUploaderg=function(fa,ga){var ha=this.$ChatAutoSendPhotoUploaderh(fa);if(ga){ha.preview_width=ga.width;ha.preview_height=ga.height;}return ha;};ea.prototype.$ChatAutoSendPhotoUploaderh=function(fa){var ga={upload_id:fa,on_progress:function(ha){this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('progress',ha));}.bind(this),on_resizing_progress:function(ha){this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('resize_progress',ha));}.bind(this),on_success:function(ha){this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('success',ha));}.bind(this),upload_canceled:this.$ChatAutoSendPhotoUploaderi.bind(this),attach_type:p.PHOTO,preview_uploading:true};return ga;};ea.prototype.$ChatAutoSendPhotoUploaderf=function(fa,ga){var ha=fa.getFile();if(!q(ha.type).isJpeg())return ga(fa);o.getSingleton().resizeBlob(ha,function(ia,ja,ka){if(ja)fa.setFile(ja);ga(fa);},this.$ChatAutoSendPhotoUploaderj.bind(this,fa));};ea.prototype.$ChatAutoSendPhotoUploader9=function(){var fa=aa();this.$ChatAutoSendPhotoUploaderk(fa,this.$ChatAutoSendPhotoUploader1.files);};ea.prototype.$ChatAutoSendPhotoUploaderk=function(fa,ga){var ha={};if(typeof FileReader!=='undefined'&&FileReader.prototype.readAsArrayBuffer&&ga&&ga.length===1){this.$ChatAutoSendPhotoUploader3[fa]=fa;ha[fa]=ga[0];var ia=new FileReader();ia.onload=function(){this.inform('submit',{upload_id:fa,preview_attachments:[this.$ChatAutoSendPhotoUploaderg(fa,v(ia.result))]});}.bind(this);ia.onerror=function(){this.inform('submit',{upload_id:fa,preview_attachments:[this.$ChatAutoSendPhotoUploaderh(fa)]});}.bind(this);ia.readAsArrayBuffer(ga[0]);}else{var ja=[];if(!ga){this.$ChatAutoSendPhotoUploader3[fa]=fa;this.$ChatAutoSendPhotoUploader0.value=fa;ja.push(this.$ChatAutoSendPhotoUploaderh(fa));}else for(var ka=0;ka<ga.length;++ka){var la=aa();ha[la]=ga[ka];this.$ChatAutoSendPhotoUploader3[la]=fa;ja.push(this.$ChatAutoSendPhotoUploaderh(la));}this.inform('submit',{upload_id:fa,preview_attachments:ja});}if(Object.keys(ha).length>0)this.$ChatAutoSendPhotoUploader7.setFiles(ha);};ea.prototype.$ChatAutoSendPhotoUploadera=function(event,fa){var ga=this.$ChatAutoSendPhotoUploaderl(fa);if(this.$ChatAutoSendPhotoUploader3[ga]){var ha=this.$ChatAutoSendPhotoUploader3[ga];delete this.$ChatAutoSendPhotoUploader3[ga];var ia=fa.response.getPayload();if(!this.$ChatAutoSendPhotoUploader4[ha])this.$ChatAutoSendPhotoUploader4[ha]=[];this.$ChatAutoSendPhotoUploader4[ha].push({id:ga,audio_id:ia.metadata[0].audio_id,image_id:ia.metadata[0].image_id,file_id:ia.metadata[0].file_id,gif_id:ia.metadata[0].gif_id});this.inform('success',{upload_id:ga});if(!this.$ChatAutoSendPhotoUploaderm(ha))this.$ChatAutoSendPhotoUploadern(ha);this.$ChatAutoSendPhotoUploader8.clear();this.$ChatAutoSendPhotoUploader1=this.$ChatAutoSendPhotoUploader8.getInput();}};ea.prototype.$ChatAutoSendPhotoUploadern=function(fa){x(!this.$ChatAutoSendPhotoUploaderm(fa));this.$ChatAutoSendPhotoUploader4[fa].sort(function(ga,ha){return ga.id<ha.id?-1:1;});this.inform('all-uploads-completed',{upload_id:fa,audio_ids:this.$ChatAutoSendPhotoUploader4[fa].map(function(ga){return ga.audio_id;}),image_ids:this.$ChatAutoSendPhotoUploader4[fa].map(function(ga){return ga.image_id;}),file_ids:this.$ChatAutoSendPhotoUploader4[fa].map(function(ga){return ga.file_id;}),gif_ids:this.$ChatAutoSendPhotoUploader4[fa].map(function(ga){return ga.gif_id;})});delete this.$ChatAutoSendPhotoUploader4[fa];};ea.prototype.$ChatAutoSendPhotoUploaderc=function(event,fa){this.inform('progress',{upload_id:fa.upload.getName(),event:fa.event});};ea.prototype.$ChatAutoSendPhotoUploaderj=function(fa,event){this.inform('resize_progress',{upload_id:fa.getName(),event:event});};ea.prototype.$ChatAutoSendPhotoUploaderm=function(fa){return t(w(this.$ChatAutoSendPhotoUploader3),fa);};ea.prototype.$ChatAutoSendPhotoUploaderb=function(event,fa){var ga=this.$ChatAutoSendPhotoUploaderl(fa);this.$ChatAutoSendPhotoUploadero(ga,'last-upload-failed');this.$ChatAutoSendPhotoUploader8.clear();this.$ChatAutoSendPhotoUploader1=this.$ChatAutoSendPhotoUploader8.getInput();return false;};ea.prototype.$ChatAutoSendPhotoUploaderi=function(fa){this.$ChatAutoSendPhotoUploadero(fa,'last-upload-canceled');};ea.prototype.$ChatAutoSendPhotoUploadero=function(fa,ga){if(!this.$ChatAutoSendPhotoUploader3[fa])return;var ha=this.$ChatAutoSendPhotoUploader3[fa];delete this.$ChatAutoSendPhotoUploader3[fa];if(!this.$ChatAutoSendPhotoUploaderm(ha))if(this.$ChatAutoSendPhotoUploader4[ha]){this.$ChatAutoSendPhotoUploadern(ha);}else this.inform(ga,{upload_id:ha});};ea.prototype.$ChatAutoSendPhotoUploaderl=function(fa){if(fa.upload){return fa.upload.getName();}else return fa.response.getPayload().uploadID;};ea.prototype.uploadFile=function(fa){var ga=aa(),ha={};ha[ga]=fa;var ia=new h(this.$ChatAutoSendPhotoUploader6).setAllowCrossOrigin(true).setAllowCrossPageTransition(this.$ChatAutoSendPhotoUploader5).setRelativeTo(this.$ChatAutoSendPhotoUploader7.getRoot()).setFiles(ha);this.$ChatAutoSendPhotoUploader2.addSubscriptions(ia.subscribe('success',function(event,ja){this.$ChatAutoSendPhotoUploadera(event,{upload:ja,response:ja.getResponse()});}.bind(this)),ia.subscribe('failure',this.$ChatAutoSendPhotoUploaderb.bind(this)));ia.send();this.$ChatAutoSendPhotoUploaderk(ga,[fa]);};ea.prototype.setAllowCrossPage=function(fa){this.$ChatAutoSendPhotoUploader5=fa;this.$ChatAutoSendPhotoUploader7.setAllowCrossPageTransition(fa);};e.exports=ea;},null);