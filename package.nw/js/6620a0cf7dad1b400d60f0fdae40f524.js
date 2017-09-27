'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('react-dom'),{Provider:c}=require('react-redux'),d=directRequire('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./db2217eb4cff896bdcbc50abe005058f.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./da7c31daaf542cf1796023d8e344b98a.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js');class i extends a.Component{constructor(a){super(a),this.state={mount:!0}}render(){return this.state.mount?a.createElement('div',{className:this.props.className},this.props.children):a.createElement('div',null)}}module.exports=class extends a.Component{constructor(a){super(a),this.queue=[]}componentDidMount(){nw.Window.open(this.props.templateHTML||'html/popup.html',this.getWindowOptions(),(f)=>{if(this.unmounted)return void f.close(!0);this.registryId=this.props.registryId,this.child=f,f.on('close',()=>{this.props.onWindowClose&&this.props.onWindowClose(),this.child&&(this.child.window.onWindowClose&&this.child.window.onWindowClose(),this.closeWindow())});const j=global.Win.window,k=f.window;if(k.parent=j,!global.appConfig.isDev){function a(a,b){try{let c=b.filename,d=b.error.stack;h.error(`filename: ${c}, msg: ${d}`),g(a,'',`filename: ${c}, msg: ${d}`)}catch(a){}}k.addEventListener('error',(b)=>{a('tool_error_web',b)})}const l=document.createElement('body'),m=document.createElement('div');if(m.style.cssText='width: 100%; height: 100%;',this.props.className&&(m.className=this.props.className),l.appendChild(m),k.document.body=l,l.addEventListener('dragover',function(a){a.preventDefault(),a.stopPropagation()},!1),l.addEventListener('drop',function(a){a.preventDefault(),a.stopPropagation()},!1),this.props.children)b.render(a.createElement(c,{store:d},a.createElement(i,{ref:(a)=>this.dummy=a},this.props.children)),m,()=>{this.registryId&&e.register({id:this.registryId,window:f})});else{const g=this.props.renderClass,h=this.props.renderProps||{};b.render(a.createElement(c,{store:d},a.createElement(i,{ref:(a)=>this.dummy=a},a.createElement(g,_extends({},h,{win:f})))),m,()=>{this.registryId&&e.register({id:this.registryId,window:f})})}})}componentWillUnmount(){this.unmounted=!0,this.closeWindow()}closeWindow(){this.registryId&&e.unregister(this.registryId);const a=()=>{try{this.child.close(!0),this.child=null}catch(a){}};if(this.dummy)try{this.dummy.setState({mount:!1},()=>{a()})}catch(b){a()}else this.child&&a()}appendChild(a){if(a&&this.queue.push(a),!this.child)return;const b=this.child.window;this.queue.forEach((a)=>{console.log(2),b.document.body.appendChild(a)}),this.queue=[]}getWindowOptions(){return function(a){const b={};for(let c of a)this.props.hasOwnProperty(c)&&(b[c]=this.props[c]);return b.title||(b.title=nw.App.manifest.window.title,global.appConfig.isBeta&&(b.title=`${b.title} Beta`),this.props.projectName&&(b.title=`${decodeURIComponent(this.props.projectName)} - ${b.title}`)),b.width||(b.width=f.SIZE.DEFAULT.WIDTH),b.height||(b.height=f.SIZE.DEFAULT.HEIGHT),b.hasOwnProperty('focus')||(b.focus=!0),b}.bind(this)(['id','title','icon','position','focus','always_on_top','width','height','min_width','min_height','max_width','max_height','resizable','kiosk','fullscreen','show_in_taskbar','frame','transparent'])}render(){return a.createElement('div',{style:{display:'none'}})}}}(require('lazyload'),require);