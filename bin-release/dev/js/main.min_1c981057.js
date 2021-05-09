function getShader(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r,a,o,s;return __generator(this,function(u){switch(u.label){case 0:return t=e.replace(".","_"),[3,2];case 1:return n=u.sent(),[3,3];case 2:n=RES.getRes(t),u.label=3;case 3:for(i=n,r=i,a=new DataView(r),o="",s=0;s<a.byteLength;s++)o+=String.fromCharCode(a.getUint8(s));return[2,o]}})})}var __reflect=this&&this.__reflect||function(e,t,i){e.__class__=t,i?i.push(t):i=[t],e.__types__=e.__types__?i.concat(e.__types__):i},__extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i},__awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(r,a){function o(e){try{u(n.next(e))}catch(t){a(t)}}function s(e){try{u(n["throw"](e))}catch(t){a(t)}}function u(e){e.done?r(e.value):new i(function(t){t(e.value)}).then(o,s)}u((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return n([e,t])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,a&&(o=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,a=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(o=u.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(n){i=[6,n],a=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,a,o,s,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},BaseEuiView=function(e){function t(){var t=e.call(this)||this;return t.initUI(),t}return __extends(t,e),t.prototype.initUI=function(){},t}(eui.Component);__reflect(BaseEuiView.prototype,"BaseEuiView");var MvpMat=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){return __awaiter(this,void 0,void 0,function(){var e,t,i,n,r,a,o,s,u,c;return __generator(this,function(h){switch(h.label){case 0:return e=new eui.Image("bg_jpg"),this.addChild(e),t=egret.MainContext.instance.stage,i=t.stageWidth,n=t.stageHeight,e.width=i,e.height=n,r=function(e,t){e[e.length]=t},a=function(e){for(var t=[[],[],[],[]],i=t[0],n=t[1],a=t[2],o=t[3],s=0;e>s;s++)for(var u=0;e>u;u++){var c=[s/e,(s+1)/e],h=c[0],l=c[1],d=[u/e,(u+1)/e],p=d[0],g=d[1],f=[h+l/2,p+g/2],_=f[0],v=f[1],w=.5;r(i,h-w),r(i,p-w),r(i,l-w),r(i,p-w),r(i,l-w),r(i,g-w),r(i,h-w),r(i,g-w),r(a,h),r(a,p),r(a,l),r(a,p),r(a,l),r(a,g),r(a,h),r(a,g),r(n,_-w),r(n,v-w),r(n,_-w),r(n,v-w),r(n,_-w),r(n,v-w),r(n,_-w),r(n,v-w);var m=4*(s*e+u);r(o,m),r(o,m+1),r(o,m+2),r(o,m),r(o,m+2),r(o,m+3)}return{pos:i,center:n,texCoord:a,index:o}},console.log(a(5)),u=(s=egret.CustomFilter).bind,[4,getShader(ShaderConstant.V_MVPMAT)];case 1:return c=[void 0,h.sent()],[4,getShader(ShaderConstant.FRAFMENT)];case 2:return o=new(u.apply(s,c.concat([h.sent(),a(10)]))),this.filters=[o],egret.startTick(function(e){return o.uniforms.time+=.01,!1},this),[2]}})})},t}(BaseEuiView);__reflect(MvpMat.prototype,"MvpMat");var GameVc=function(e){function t(){var t=e.call(this)||this;return t.skinName="GameVcSkin",t}return __extends(t,e),t.prototype.initUI=function(){this.width=egret.MainContext.instance.stage.stageWidth,this.height=egret.MainContext.instance.stage.stageHeight,this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnClick,this)},t.prototype.btnClick=function(e){switch(e.target){case this.sin:this.viewGroup.removeChildren(),this.viewGroup.addChild(new SinShader);break;case this.ripple:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Ripple);break;case this.simple:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Simple);break;case this.point:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Point);break;case this.mvpMat:this.viewGroup.removeChildren(),this.viewGroup.addChild(new MvpMat);break;case this.shake:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Shake);break;case this.Rotation:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Rotation);break;case this.mvp:this.viewGroup.removeChildren(),this.viewGroup.addChild(new MvpMat);break;case this.water:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Water);break;case this.loading:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Loading);break;case this.boom:this.viewGroup.removeChildren(),this.viewGroup.addChild(new Boom)}},t}(BaseEuiView);__reflect(GameVc.prototype,"GameVc");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),RES.createGroup("startGrp",["preload","shader"]),[4,RES.loadGroup("startGrp",0,e)];case 3:return i.sent(),this.stage.removeChild(e),[3,5];case 4:return t=i.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,i){var n=new eui.Theme("resource/default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,t,e)})},t.prototype.createGameScene=function(){this.addChild(new GameVc)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,i,n){function r(e){t.call(n,e)}function a(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(n))}var o=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,i){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(n,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var u=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(n,generateJSON.paths[e])},this):RES.getResByUrl(u,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){t.call(n,generateJSON.paths[e])},o)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Boom=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg"),t=egret.MainContext.instance.stage;e.width=t.stageWidth,e.height=t.stageHeight,this.addChild(e),this.initShader(e)},t.prototype.initShader=function(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r;return __generator(this,function(a){switch(a.label){case 0:return n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,a.sent()],[4,getShader(ShaderConstant.F_BOOM)];case 2:return t=new(n.apply(i,r.concat([a.sent(),{iTime:0,ratio:1334/750}]))),e.filters=[t],egret.startTick(function(e){return t.uniforms.iTime+=.01,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Boom.prototype,"Boom");var ShaderConstant;!function(e){e.VERTEX="vertex.glsl",e.FRAFMENT="fragment.glsl",e.F_POINT="f_point.glsl",e.F_RIPPLE="f_ripple.glsl",e.F_SHAKE="f_shake.glsl",e.F_SIMPLE="f_simple.glsl",e.F_SIN="f_sin.glsl",e.F_WATER="f_water.glsl",e.F_LOADING="f_loading.glsl",e.F_MVP="f_mvp.glsl",e.F_BOOM="f_boom.glsl",e.V_MVPMAT="v_mvpMat.glsl"}(ShaderConstant||(ShaderConstant={}));var Loading=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg"),t=egret.MainContext.instance.stage;e.width=t.stageWidth,e.height=t.stageHeight,this.addChild(e),this.initShader(e)},t.prototype.initShader=function(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r;return __generator(this,function(a){switch(a.label){case 0:return n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,a.sent()],[4,getShader(ShaderConstant.F_MVP)];case 2:return t=new(n.apply(i,r.concat([a.sent(),{iTime:0,ratio:1334/750}]))),e.filters=[t],egret.startTick(function(e){return t.uniforms.iTime+=.01,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Loading.prototype,"Loading");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,i){function n(n){t.call(i,n,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?n(r):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Point=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg"),t=egret.MainContext.instance.stage;e.width=t.stageWidth,e.height=t.stageHeight,this.addChild(e),this.initShader(e)},t.prototype.initShader=function(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r;return __generator(this,function(a){switch(a.label){case 0:return t=e,n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,a.sent()],[4,getShader(ShaderConstant.F_POINT)];case 2:return t.filters=[new(n.apply(i,r.concat([a.sent(),{ratio:1334/750}])))],[2]}})})},t}(BaseEuiView);__reflect(Point.prototype,"Point");var Ripple=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg");this.addChild(e);var t=egret.MainContext.instance.stage,i=t.stageWidth,n=t.stageHeight;e.width=i,e.height=n,this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this)},t.prototype.click=function(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r;return __generator(this,function(a){switch(a.label){case 0:return n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,a.sent()],[4,getShader(ShaderConstant.F_RIPPLE)];case 2:return t=new(n.apply(i,r.concat([a.sent(),{center:{x:e.stageX/this.width,y:e.stageY/this.height},time:.01,offset:.01,ratio:this.height/this.width}]))),this.filters=[t],egret.startTick(function(e){return t.uniforms.time+=.01,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Ripple.prototype,"Ripple");var Shake=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg");this.addChild(e);var t=egret.MainContext.instance.stage,i=t.stageWidth,n=t.stageHeight;e.width=i,e.height=n,this.cells=[];for(var r=1;5>=r;r++){var a=new egret.Bitmap(RES.getRes("N"+r+"_png"));a.pos(300,300+100*r),this.cells.push(a),this.addChild(a)}this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click,this)},t.prototype.click=function(e){return __awaiter(this,void 0,void 0,function(){var e,t,i,n;return __generator(this,function(r){switch(r.label){case 0:return i=(t=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return n=[void 0,r.sent()],[4,getShader(ShaderConstant.F_SHAKE)];case 2:return e=new(i.apply(t,n.concat([r.sent(),{iTime:0}]))),this.cells.forEach(function(t){t.filters=[e]}),egret.startTick(function(t){return e.uniforms.iTime+=.5,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Shake.prototype,"Shake");var Simple=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){return __awaiter(this,void 0,void 0,function(){var e,t,i,n,r,a,o,s,u,c,h,l;return __generator(this,function(d){switch(d.label){case 0:return e=new egret.Shape,e.graphics.beginFill(0,1),e.graphics.drawRect(0,0,750,1334),e.graphics.endFill(),this.addChild(e),n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,d.sent()],[4,getShader(ShaderConstant.F_SIMPLE)];case 2:return t=new(n.apply(i,r.concat([d.sent(),{}]))),e.filters=[t],a=egret.MainContext.instance.stage.stageHeight,o=egret.MainContext.instance.stage.stageWidth,s=.5,u=0,c=!0,h=0,l=10,egret.startTick(function(e){return l+=s,l>100&&(s=0,c&&(u-=.01),-2>=u&&(c=!1,h+=-.01)),t.uniforms.width=l/o,t.uniforms.height=l/a,t.uniforms.movex=u,t.uniforms.movey=h,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Simple.prototype,"Simple");var SinShader=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){return __awaiter(this,void 0,void 0,function(){var e,t,i,n,r,a,o,s,u,c,h;return __generator(this,function(l){switch(l.label){case 0:return e=new eui.Image("bg_jpg"),this.addChild(e),t=egret.MainContext.instance.stage,i=t.stageWidth,n=t.stageHeight,e.width=i,e.height=n,o=(a=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return s=[void 0,l.sent()],[4,getShader(ShaderConstant.F_SIN)];case 2:return r=new(o.apply(a,s.concat([l.sent(),{amplitude:.1,angularVelocity:10,frequency:10,offset:.4,iTime:0}]))),u=0,egret.startTick(function(e){return r.uniforms.iTime+=(e-u)/1e3,u=e,r.uniforms.offset-=.005,r.uniforms.offset<=0&&(r.uniforms.offset=1),!1},this),c=new eui.Image("resource/assets/loding_candy.png"),this.addChild(c),c.filters=[r],c.pos(150,400),h=new eui.Image("resource/assets/loding_candy.png"),this.addChild(h),h.pos(150,600),[2]}})})},t}(BaseEuiView);__reflect(SinShader.prototype,"SinShader");var Water=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg"),t=egret.MainContext.instance.stage;e.width=t.stageWidth,e.height=t.stageHeight,this.addChild(e),this.initShader(e)},t.prototype.initShader=function(e){return __awaiter(this,void 0,void 0,function(){var t,i,n,r;return __generator(this,function(a){switch(a.label){case 0:return n=(i=egret.CustomFilter).bind,[4,getShader(ShaderConstant.VERTEX)];case 1:return r=[void 0,a.sent()],[4,getShader(ShaderConstant.F_WATER)];case 2:return t=new(n.apply(i,r.concat([a.sent(),{iTime:0}]))),e.filters=[t],egret.startTick(function(e){return t.uniforms.iTime+=.01,!1},this),[2]}})})},t}(BaseEuiView);__reflect(Water.prototype,"Water");var Rotation=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.initUI=function(){var e=new eui.Image("bg_jpg");egret.MainContext.instance.stage;e.width=150,e.height=300,this.addChild(e),this.initShader(e)},t.prototype.initShader=function(e){var t="\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform vec2 projectionVector;\nconst vec3 center=vec3(-1.,1.,0.);\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n    gl_Position=uPMatrix*uMVMatrix*vec4((aVertexPosition/vec3(projectionVector.x,projectionVector.y,1.))+center,1.);\n    vTextureCoord=aTextureCoord;\n}\n",i="\nprecision highp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    gl_FragColor=texture2D(uSampler,vec2(vTextureCoord.s,vTextureCoord.t));\n}\n";e.filters=[new egret.CustomFilter(t,i,{uSampler:0,uPMatrix:[2.4,0,0,0,0,2.4,0,0,0,0,-1,-1,0,0,-.2,0],uMVMatrix:[.27,.82,.49,0,-.44,-.35,.82,0,.85,-.44,.27,0,0,0,-5,1]})]},t}(BaseEuiView);__reflect(Rotation.prototype,"Rotation");