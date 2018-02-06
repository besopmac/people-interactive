!function(e){function t(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}e.fn.ajaxSubmit=function(r){if(!this.length)return t("ajaxSubmit: skipping submit process - no element selected"),this;var a,n,i,o=this;"function"==typeof r&&(r={success:r}),a=this.attr("method"),(i=(i="string"==typeof(n=this.attr("action"))?e.trim(n):"")||window.location.href||"")&&(i=(i.match(/^([^#]+)/)||[])[1]),r=e.extend(!0,{url:i,success:e.ajaxSettings.success,type:a||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},r);var s={};if(this.trigger("form-pre-serialize",[this,r,s]),s.veto)return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(r.beforeSerialize&&!1===r.beforeSerialize(this,r))return t("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var u=r.traditional;void 0===u&&(u=e.ajaxSettings.traditional);var l,c=this.formToArray(r.semantic);if(r.data&&(r.extraData=r.data,l=e.param(r.data,u)),r.beforeSubmit&&!1===r.beforeSubmit(c,this,r))return t("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[c,this,r,s]),s.veto)return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=e.param(c,u);l&&(f=f?f+"&"+l:l),"GET"==r.type.toUpperCase()?(r.url+=(r.url.indexOf("?")>=0?"&":"?")+f,r.data=null):r.data=f;var m=[];if(r.resetForm&&m.push(function(){o.resetForm()}),r.clearForm&&m.push(function(){o.clearForm(r.includeHidden)}),!r.dataType&&r.target){var d=r.success||function(){};m.push(function(t){var a=r.replaceTarget?"replaceWith":"html";e(r.target)[a](t).each(d,arguments)})}else r.success&&m.push(r.success);r.success=function(e,t,a){for(var n=r.context||r,i=0,s=m.length;i<s;i++)m[i].apply(n,[e,t,a||o,o])};var p=e("input:file",this).length>0,v="multipart/form-data",h=o.attr("enctype")==v||o.attr("encoding")==v;if(!1!==r.iframe&&(p||r.iframe||h))r.closeKeepAlive?e.get(r.closeKeepAlive,function(){b(c)}):b(c);else{if(e.browser.msie&&"get"==a&&void 0===r.type){var g=o[0].getAttribute("method");"string"==typeof g&&(r.type=g)}e.ajax(r)}return this.trigger("form-submit-notify",[this,r]),this;function b(n){var i,s,u,l,c,f,m,d,p,v,h,g=o[0],b=!!e.fn.prop;if(n)if(b)for(i=0;i<n.length;i++)e(g[n[i].name]).prop("disabled",!1);else for(i=0;i<n.length;i++)e(g[n[i].name]).removeAttr("disabled");if(e(":input[name=submit],:input[id=submit]",g).length)alert('Error: Form elements must not have name or id of "submit".');else if((s=e.extend(!0,{},e.ajaxSettings,r)).context=s.context||s,l="jqFormIO"+(new Date).getTime(),s.iframeTarget?null==(p=(c=e(s.iframeTarget)).attr("name"))?c.attr("name",l):l=p:(c=e('<iframe name="'+l+'" src="'+s.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),f=c[0],m={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(r){var a="timeout"===r?"timeout":"aborted";t("aborting upload... "+a),this.aborted=1,c.attr("src",s.iframeSrc),m.error=a,s.error&&s.error.call(s.context,m,a,r),u&&e.event.trigger("ajaxError",[m,s,a]),s.complete&&s.complete.call(s.context,m,a)}},(u=s.global)&&!e.active++&&e.event.trigger("ajaxStart"),u&&e.event.trigger("ajaxSend",[m,s]),s.beforeSend&&!1===s.beforeSend.call(s.context,m,s))s.global&&e.active--;else if(!m.aborted){(d=g.clk)&&(p=d.name)&&!d.disabled&&(s.extraData=s.extraData||{},s.extraData[p]=d.value,"image"==d.type&&(s.extraData[p+".x"]=g.clk_x,s.extraData[p+".y"]=g.clk_y));var x=1,y=2;s.forceSync?E():setTimeout(E,10);var T,j,k,w=50,S=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},A=e.parseJSON||function(e){return window.eval("("+e+")")},L=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=A(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o}}function D(e){return e.contentWindow?e.contentWindow.document:e.contentDocument?e.contentDocument:e.document}function E(){var r=o.attr("target"),n=o.attr("action");g.setAttribute("target",l),a||g.setAttribute("method","POST"),n!=s.url&&g.setAttribute("action",s.url),s.skipEncodingOverride||a&&!/post/i.test(a)||o.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),s.timeout&&(h=setTimeout(function(){v=!0,M(x)},s.timeout));var i=[];try{if(s.extraData)for(var u in s.extraData)i.push(e('<input type="hidden" name="'+u+'" />').attr("value",s.extraData[u]).appendTo(g)[0]);s.iframeTarget||(c.appendTo("body"),f.attachEvent?f.attachEvent("onload",M):f.addEventListener("load",M,!1)),setTimeout(function e(){try{var r=D(f).readyState;t("state = "+r),"uninitialized"==r.toLowerCase()&&setTimeout(e,50)}catch(e){t("Server abort: ",e," (",e.name,")"),M(y),h&&clearTimeout(h),h=void 0}},15),g.submit()}finally{g.setAttribute("action",n),r?g.setAttribute("target",r):o.removeAttr("target"),e(i).remove()}}function M(r){if(!m.aborted&&!k){try{j=D(f)}catch(e){t("cannot access response document: ",e),r=y}if(r===x&&m)m.abort("timeout");else if(r==y&&m)m.abort("server abort");else if(j&&j.location.href!=s.iframeSrc||v){f.detachEvent?f.detachEvent("onload",M):f.removeEventListener("load",M,!1);var a,n="success";try{if(v)throw"timeout";var i="xml"==s.dataType||j.XMLDocument||e.isXMLDoc(j);if(t("isXml="+i),!i&&window.opera&&(null==j.body||""==j.body.innerHTML)&&--w)return t("requeing onLoad callback, DOM not available"),void setTimeout(M,250);var o=j.body?j.body:j.documentElement;m.responseText=o?o.innerHTML:null,m.responseXML=j.XMLDocument?j.XMLDocument:j,i&&(s.dataType="xml"),m.getResponseHeader=function(e){return{"content-type":s.dataType}[e]},o&&(m.status=Number(o.getAttribute("status"))||m.status,m.statusText=o.getAttribute("statusText")||m.statusText);var l=(s.dataType||"").toLowerCase(),d=/(json|script|text)/.test(l);if(d||s.textarea){var p=j.getElementsByTagName("textarea")[0];if(p)m.responseText=p.value,m.status=Number(p.getAttribute("status"))||m.status,m.statusText=p.getAttribute("statusText")||m.statusText;else if(d){var g=j.getElementsByTagName("pre")[0],b=j.getElementsByTagName("body")[0];g?m.responseText=g.textContent?g.textContent:g.innerText:b&&(m.responseText=b.textContent?b.textContent:b.innerText)}}else"xml"!=l||m.responseXML||null==m.responseText||(m.responseXML=S(m.responseText));try{T=L(m,l,s)}catch(r){n="parsererror",m.error=a=r||n}}catch(r){t("error caught: ",r),n="error",m.error=a=r||n}m.aborted&&(t("upload aborted"),n=null),m.status&&(n=m.status>=200&&m.status<300||304===m.status?"success":"error"),"success"===n?(s.success&&s.success.call(s.context,T,"success",m),u&&e.event.trigger("ajaxSuccess",[m,s])):n&&(void 0==a&&(a=m.statusText),s.error&&s.error.call(s.context,m,n,a),u&&e.event.trigger("ajaxError",[m,s,a])),u&&e.event.trigger("ajaxComplete",[m,s]),u&&!--e.active&&e.event.trigger("ajaxStop"),s.complete&&s.complete.call(s.context,m,n),k=!0,s.timeout&&clearTimeout(h),setTimeout(function(){s.iframeTarget||c.remove(),m.responseXML=null},100)}}}}},e.fn.ajaxForm=function(r){if(0===this.length){var a={s:this.selector,c:this.context};return!e.isReady&&a.s?(t("DOM not ready, queuing ajaxForm"),e(function(){e(a.s,a.c).ajaxForm(r)}),this):(t("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return this.ajaxFormUnbind().bind("submit.form-plugin",function(t){t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}).bind("click.form-plugin",function(t){var r=t.target,a=e(r);if(!a.is(":submit,input:image")){var n=a.closest(":submit");if(0==n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!=t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)})},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t){var r=[];if(0===this.length)return r;var a,n,i,o,s,u,l,c=this[0],f=t?c.getElementsByTagName("*"):c.elements;if(!f)return r;for(a=0,u=f.length;a<u;a++)if(i=(s=f[a]).name)if(t&&c.clk&&"image"==s.type)s.disabled||c.clk!=s||(r.push({name:i,value:e(s).val()}),r.push({name:i+".x",value:c.clk_x},{name:i+".y",value:c.clk_y}));else if((o=e.fieldValue(s,!0))&&o.constructor==Array)for(n=0,l=o.length;n<l;n++)r.push({name:i,value:o[n]});else null!==o&&void 0!==o&&r.push({name:i,value:o});if(!t&&c.clk){var m=e(c.clk),d=m[0];(i=d.name)&&!d.disabled&&"image"==d.type&&(r.push({name:i,value:m.val()}),r.push({name:i+".x",value:c.clk_x},{name:i+".y",value:c.clk_y}))}return r},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(o<0)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;f<c;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(e){var t=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,a=this.tagName.toLowerCase();t.test(r)||"textarea"==a||e&&/hidden/.test(r)?this.value="":"checkbox"==r||"radio"==r?this.checked=!1:"select"==a&&(this.selectedIndex=-1)})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}(jQuery);