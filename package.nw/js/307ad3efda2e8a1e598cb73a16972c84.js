'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('fs'),c=require('glob'),d=require('path'),e=require('classnames'),f=require('./72653d4b93cdd7443296229431a7aa9a.js'),g=require('./15ba1827c7f6564a45df6bd44da3a977.js'),h=require('./da7c31daaf542cf1796023d8e344b98a.js'),i=require('./f171257bbcaef547a3cf27266ccb0db2.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),l=require('./common/locales/index.js'),m=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),n='touristappid',o=require('./d28a711224425b00101635efe1034c99.js'),p=require('./3c55dff3626a3ee184d599f076158345.js'),q=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),r=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),s=require('./42191d95974f14b18961c9f2c730464e.js'),{DEV_INVALID_APPID:t,DEV_APP_NOT_BAND:u}=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),{default_weapp_header:v}=require('./5498e660c05c574f739a28bd5d202cfa.js'),w={network:{RequestDomain:[],WsRequestDomain:[],UploadDomain:[],DownloadDomain:[]},setting:_extends({},r.setting)};module.exports=class extends a.Component{constructor(a){super(a),this.state={projectpath:'',appid:'',appname:'',saveBtnDisable:!0,showQuickStart:!1,checked:!0,showLoading:!1,isTourist:!1,errorLoc:'',errorMsg:'.',compileType:{name:'\u5C0F\u7A0B\u5E8F\u6A21\u5F0F',value:q.weapp},showCompileTypeSelect:!1},this.compileTypeConstants=[{name:'\u5C0F\u7A0B\u5E8F\u6A21\u5F0F',value:q.weapp},{name:'\u4F1A\u8BDD\u52A8\u6001\u9875',value:q.conversation},{name:'\u641C\u7D22\u52A8\u6001\u9875',value:q.search}]}componentDidMount(){this.resize()}componentWillUnmount(){this.props.detach&&this.props.close()}resize(){try{let a=this.props.win?this.props.win:global.Win;this.props.detach||(a.show(),a.setResizable(!0),a.resizeTo(k.SIZE.CREATE_PROJECT.WIDTH,k.SIZE.CREATE_PROJECT.HEIGHT),a.setResizable(!1))}catch(a){}}editAppid(a){let b=a.target,c=b.value;const d={appid:c.trim()};'appid'===this.state.errorLoc&&(d.errorLoc=''),this.setState(d)}editAppname(a){let b=a.target,c=b.value;const d={appname:c};'projectname'===this.state.errorLoc&&(d.errorLoc=''),this.setState(d)}tourist(){let a=!this.state.isTourist,b={isTourist:a};a&&'appid'===this.state.errorLoc&&(b.errorLoc=''),this.setState(b)}chooseDir(){let a=this.props.win?this.props.win.window.document.body:global.contentDocumentBody,c=document.createElement('input');c.setAttribute('type','file'),c.setAttribute('nwdirectory',!0),c.style.display='none',a.appendChild(c),c.addEventListener('change',()=>{let d;try{d=b.readdirSync(c.value)}catch(a){return void this.setState({errorLoc:'projectpath',errorMsg:a.toString()})}let e=0===d.length,f={projectpath:c.value,showQuickStart:e};const g=s.getConfigFileInfo({projectpath:c.value});g.error||(f=_extends({},f,{appname:`${decodeURIComponent(g.config.projectname||'')}`}),g.config.appid===n?f.isTourist=!0:(f.isTourist=!1,f.appid=`${g.config.appid||''}`)),'projectpath'===this.state.errorLoc&&(f.errorLoc=''),this.setState(f),a.removeChild(c)}),c.addEventListener('cancel',()=>{a.removeChild(c)}),c.click()}changeCheckbox(){this.setState({checked:!this.state.checked})}onTypeSelectClick(a){let b=this.compileTypeConstants[a],c={showCompileTypeSelect:!1};b&&(c.compileType=b),this.setState(c)}onCompileTypeClick(a){a.stopPropagation();let b=a.currentTarget.getBoundingClientRect();this.setState({compileTypeLeft:b.left,compileTypeTop:b.top+24,showCompileTypeSelect:!this.state.showCompileTypeSelect})}onContainerClick(){this.setState({showCompileTypeSelect:!1})}async addProject(){let a=this.state.projectpath,c=this.state.isTourist,d=c?n:this.state.appid,e=encodeURIComponent(this.state.appname.trim()),k=o.getVendorConfig(),m=k.currentLibVersion;if(!d)return void this.setState({errorLoc:'appid',errorMsg:l.config.CREATE_PROJECT_TIP_NO_APPID});if(!e)return void this.setState({errorLoc:'projectname',errorMsg:l.config.CREATE_PROJECT_TIP_NO_NAME});if(!a)return void this.setState({errorLoc:'projectpath',errorMsg:l.config.CREATE_PROJECT_TIP_NO_DIR});let p=`${d}_${e}`,q=j.strToHash(p),r=this.props.project.list[p];if(r)return void this.setState({appname:'',saveBtnDisable:!0,errorLoc:'projectname',errorMsg:l.config.CREATE_PROJECT_TIP_HASH_EXIST.format([d,decodeURIComponent(e)])});let s=this.state.showQuickStart&&this.state.checked;try{let c=b.readdirSync(a);if('darwin'===process.platform&&(c=c.filter((a)=>{return 0!==a.indexOf('.')})),0!==c.length&&0>c.indexOf('app.json')&&0>c.indexOf('project.config.json')&&0>c.indexOf('app-config.json'))return void this.setState({errorLoc:'projectpath',errorMsg:l.config.CREATE_PROJECT_TIP_MUST_USE_EMPTY_FOLDER})}catch(a){return void this.setState({errorLoc:'projectpath',errorMsg:a.toString()})}this.setState({showLoading:!0});let x={projectpath:'',appid:'',appname:'',error:'',saveBtnDisable:!0,showLoading:!1,isTourist:!1};if(c){let b={projectid:p,hash:q,appid:d,projectname:e,projectpath:a,appShowImageUrl:v,isAdmin:!1,isTourist:!0,urlCheck:!1,compileType:this.state.compileType.value,libVersion:m,attr:_extends({},w)};this.props.createProjectSuccess(b,s),this.setState(x),this.props.detach?(this.props.win.hide(),this.props.setConfirmInfo({show:!0,title:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_TITLE,content:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT.format(e),callback:async(a)=>{if(a)try{this.props.setConfirmInfo({show:!1}),this.props.closeProject(),setTimeout(()=>{this.props.openProject(b.projectid),this.props.win.close()},50)}catch(a){this.props.win.close()}else this.props.win.close()}})):this.props.openProject(b.projectid),h(`project_createsuc`,d),g({url:`${i.touristCreateURL}?appid=${d}`,needToken:1}).then(()=>{}).catch((a)=>{f.error(`create tourist project error ${a}`)})}else try{const{resp:b,body:c}=await g({url:`${i.createWeappURL}?appid=${d}`,needToken:1,needCheckErrCode:1});this.setState({showLoading:!1}),f.info(`createstep.js create  ${c}`);let j=c,k=j.baseresponse,n=k?parseInt(k.errcode):0;if(n===u)return this.setState({errorLoc:'appid',errorMsg:'\u5F53\u524D\u5F00\u53D1\u8005\u672A\u7ED1\u5B9A\u6B64 AppID \uFF0C\u8BF7\u5230\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0\u64CD\u4F5C\u540E\u91CD\u8BD5'}),nw.Shell.openExternal('https://mp.weixin.qq.com/'),void f.error(`createstep.js create project error ${n}`);if(n===t)return this.setState({errorLoc:'appid',errorMsg:'\u4E0D\u5B58\u5728\u6B64 AppID \u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165\u6216\u4F7F\u7528\u65E0 AppID \u6A21\u5F0F'}),void f.error(`createstep.js create project error ${n}`);if(0===n){let b=j.app_head_img?`${j.app_head_img}/0`:v,c=e;return j.app_nickname&&(c=encodeURIComponent(j.app_nickname)),r={isAdmin:j.is_admin,isTourist:!1,urlCheck:!0,projectid:p,hash:q,appid:d,projectname:e,projectpath:a,appShowImageUrl:b,libVersion:m,attr:_extends({},w,{platform:!!j.is_platform,platformNickname:j.platform_nickname||'',appNickName:c})},r.appShowName=e,c!==e&&(r.appShowName=c),r.platform&&r.platformNickname&&(r.appShowName=r.platformNickname),this.props.createProjectSuccess(r,s),this.setState(x),this.props.detach?(this.props.win.hide(),this.props.setConfirmInfo({show:!0,title:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_TITLE,content:l.config.CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT.format(e),callback:async(a)=>{if(a)try{this.props.setConfirmInfo({show:!1}),this.props.closeProject(),setTimeout(()=>{this.props.openProject(r.projectid),this.props.win.close()},50)}catch(a){this.props.win.close()}else this.props.win.close()}})):this.props.openProject(r.projectid),void h(`project_createsuc`,d)}this.setState({errorMsg:c||'\u7CFB\u7EDF\u9519\u8BEF',errorLoc:'appid'})}catch(a){f.error(`create project error: ${a.toString()}`),this.setState({showLoading:!1,errorMsg:a.toString(),errorLoc:'appid'})}}render(){global.ll=this;let b=this.state.showQuickStart?{}:{display:'none'},c=this.props.cancel,d=this.state.isTourist,e=d?'\u65E0 AppID \u90E8\u5206\u529F\u80FD\u53D7\u9650':this.state.appid,f=d?'':'\u586B\u5199\u5C0F\u7A0B\u5E8FAppID ',g=d?'\u8FD4\u56DE\u586B\u5199\u5C0F\u7A0B\u5E8FAppID':'\u65E0 AppID ';const h='ui-form-item ui-form-item-inline',i=h+' ui-form-item-error',j={WebkitAppRegion:'no-drag'},k=this.compileTypeConstants.map((a)=>{return a.name});return a.createElement('div',{className:'dashboard',style:{WebkitAppRegion:'drag'},onClick:this.onContainerClick.bind(this)},a.createElement('div',{className:'dashboard-commands'},a.createElement('div',{className:'dashboard-navigator',style:this.props.detach?{display:'none'}:{}},a.createElement('a',{onClick:c,style:j},a.createElement('i',{className:'ui-icon-back'}),a.createElement('span',null,'\xA0\u5C0F\u7A0B\u5E8F\u9879\u76EE\u7BA1\u7406'))),a.createElement('div',{className:'dashboard-brand'},a.createElement('div',{className:'dashboard-logo'},a.createElement('i',{className:'ui-icon-mini-app'})),a.createElement('h3',{className:'dashboard-caption'},'\u5C0F\u7A0B\u5E8F\u9879\u76EE'),a.createElement('p',{className:'dashboard-subtitle'},'\u7F16\u8F91\u3001\u8C03\u8BD5\u5C0F\u7A0B\u5E8F')),a.createElement('div',{className:'dashboard-content'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'appid'===this.state.errorLoc?i:h},a.createElement('label',{className:'ui-form-label'},'AppID'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{style:j,className:'ui-input',value:e,onChange:this.editAppid.bind(this),type:'text',disabled:d,placeholder:''})),a.createElement('p',{className:'ui-form-tips',onClick:this.tourist.bind(this),style:j},d?'\u70B9\u6B64\u8FD4\u56DE\u586B\u5199 AppID':'\u8BF7\u586B\u5199\u5C0F\u7A0B\u5E8FAppID\uFF0C\u82E5\u65E0',d?null:a.createElement('a',null,'\u53EF\u70B9\u6B64\u4F53\u9A8C')))),a.createElement('div',{className:'projectname'===this.state.errorLoc?i:h},a.createElement('label',{className:'ui-form-label'},'\u9879\u76EE\u540D\u79F0'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',placeholder:'',className:'ui-input',style:j,value:this.state.appname,onChange:this.editAppname.bind(this)})))),a.createElement('div',{className:'projectpath'===this.state.errorLoc?i:h},a.createElement('label',{className:'ui-form-label'},'\u9879\u76EE\u76EE\u5F55'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-flex',onClick:this.chooseDir.bind(this),style:j},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',readOnly:!0,placeholder:this.state.projectpath,className:'ui-input'})),a.createElement('div',{className:'ui-selector ui-selector-default'},a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:'ui-icon-arrow-down-o'})))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.showQuickStart?{}:{display:'none'}},a.createElement('label',{htmlFor:'',className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls',onClick:this.changeCheckbox.bind(this),style:j},a.createElement('label',{htmlFor:'',className:'ui-checkbox'},a.createElement('input',{type:'checkbox'}),a.createElement('i',{className:this.state.checked?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},'\u521B\u5EFA QuickStart \u9879\u76EE')))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.errorLoc?{}:{display:'none'}},a.createElement('label',{className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',{className:'dashboard-error-tips'},this.state.errorMsg))))),a.createElement('div',{className:'dashboard-command-ft'},a.createElement('div',{className:'dashboard-command-action'},a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.addProject.bind(this),style:j},'\u786E\u5B9A')))))}}}(require('lazyload'),require);