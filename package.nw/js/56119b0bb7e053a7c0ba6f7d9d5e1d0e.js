'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a={}){let d=a.projectpath;const e=k.getCurrent();d||(d=e.projectpath);const j=c.join(g.Weappdest,`${+new Date}-minicode`);await i.asarPack(d,j);const m=b.lstatSync(j).size/1e3;if(e.attr.gameApp){if(m>q)throw new Error(`代码片段代码包大小上限为 ${q} KB，当前代码包大小为 ${m} KB`);}else if(m>p)throw new Error(`代码片段代码包大小上限为 ${p} KB，当前代码包大小为 ${m} KB`);try{const{body:c}=await f({url:`${h.shareMiniCodeURL}`,method:'post',needToken:1,formData:_extends({},a.formData,{codePack:{value:b.readFileSync(j),options:{filename:`${+new Date}.asar`,contentType:'application/octet-stream'}}})});return c}catch(a){throw a}finally{b.unlink(j,(a)=>{a&&l.error(`fail to rm temp mini code pack: ${a}`)})}}const b=require('fs'),c=require('path'),d=require('zlib'),e=require('rmdir'),f=require('./15ba1827c7f6564a45df6bd44da3a977.js'),g=require('./92320c1386e6db6a6f2556736a9bc280.js'),h=require('./f171257bbcaef547a3cf27266ccb0db2.js'),i=require('./da189bc919cfd050066ec695411cbcf5.js'),j=require('./common/locales/index.js'),k=require('./3bfffbe88b3d923921f851c0697974fe.js'),l=require('./72653d4b93cdd7443296229431a7aa9a.js'),m=g.Weappdest,n=require('./da7c31daaf542cf1796023d8e344b98a.js'),o=require('./a932aac82ac84fc9c6c92194bd88204e.js'),p=100,q=200;module.exports=async function(b){return o.enqueueBuildTask(a.bind(null,b),o.buildType.share)}}(require('lazyload'),require);