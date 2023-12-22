(function(t,e,a){'use strict';e.extlink=e.extlink||{};e.extlink.attach=function(i,a){if(typeof a.data==='undefined'||!a.data.hasOwnProperty('extlink')){return};var p='append';if(a.data.extlink.extIconPlacement&&a.data.extlink.extIconPlacement!='0'){p=a.data.extlink.extIconPlacement};var g=/^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/,h=window.location.host.replace(g,'$2$3$6'),c=window.location.host.replace(h,''),o;if(a.data.extlink.extSubdomains){o='([^/]*\\.)?'}
else if(c==='www.'||c===''){o='(www\\.)?'}
else{o=c.replace('.','\\.')};var r=!1;if(a.data.extlink.whitelistedDomains){r=[];for(var d=0;d<a.data.extlink.whitelistedDomains.length;d++){r.push(new RegExp('^https?:\\/\\/'+a.data.extlink.whitelistedDomains[d].replace(/(\r\n|\n|\r)/gm,'')+'.*$','i'))}};var u=new RegExp('^https?://([^@]*@)?'+o+h,'i'),f=!1;if(a.data.extlink.extInclude){f=new RegExp(a.data.extlink.extInclude.replace(/\\/,'\\'),'i')};var x=!1;if(a.data.extlink.extExclude){x=new RegExp(a.data.extlink.extExclude.replace(/\\/,'\\'),'i')};var l=!1;if(a.data.extlink.extCssExclude){l=a.data.extlink.extCssExclude};var s=!1;if(a.data.extlink.extCssExplicit){s=a.data.extlink.extCssExplicit};var n=[],k=[];t('a:not([data-extlink]), area:not([data-extlink])',i).each(function(e){try{var a='';if(typeof this.href=='string'){a=this.href.toLowerCase()}
else if(typeof this.href=='object'){a=this.href.baseVal};if(a.indexOf('http')===0&&((!u.test(a)&&!(x&&x.test(a)))||(f&&f.test(a)))&&!(l&&t(this).is(l))&&!(l&&t(this).parents(l).length>0)&&!(s&&t(this).parents(s).length<1)){var o=!1;if(r){for(var i=0;i<r.length;i++){if(r[i].test(a)){o=!0;break}}};if(!o){n.push(this)}}
else if(this.tagName!=='AREA'&&a.indexOf('mailto:')===0&&!(l&&t(this).parents(l).length>0)&&!(s&&t(this).parents(s).length<1)){k.push(this)}}catch(d){return!1}});if(a.data.extlink.extClass!=='0'&&a.data.extlink.extClass!==''){e.extlink.applyClassAndSpan(n,a.data.extlink.extClass,p)};if(a.data.extlink.mailtoClass!=='0'&&a.data.extlink.mailtoClass!==''){e.extlink.applyClassAndSpan(k,a.data.extlink.mailtoClass,p)};if(a.data.extlink.extTarget){t(n).filter(function(){return!(a.data.extlink.extTargetNoOverride&&t(this).is('a[target]'))}).attr({target:'_blank'});t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'noopener'};if(t.indexOf('noopener')>-1){if(t.indexOf('noopener')===-1){return t+' noopener'}
else{return t}}
else{return t+' noopener'}})};if(a.data.extlink.extNofollow){t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'nofollow'};var i='nofollow';if(a.data.extlink.extFollowNoOverride){i='follow'};if(t.indexOf(i)===-1){return t+' nofollow'};return t})};if(a.data.extlink.extNoreferrer){t(n).attr('rel',function(e,t){if(t===null||typeof t==='undefined'){return'noreferrer'};if(t.indexOf('noreferrer')===-1){return t+' noreferrer'};return t})};e.extlink=e.extlink||{};e.extlink.popupClickHandler=e.extlink.popupClickHandler||function(){if(a.data.extlink.extAlert){return confirm(a.data.extlink.extAlertText)}};t(n).off('click.extlink');t(n).on('click.extlink',function(t){return e.extlink.popupClickHandler(t,this)})};e.extlink.applyClassAndSpan=function(i,e,l){var n;if(a.data.extlink.extImgClass){n=t(i)}
else{var x=t(i).find('img, svg').parents('a');n=t(i).not(x)};if(e!=='0'){n.addClass(e)};n.attr('data-extlink','');var r,o=n.length;for(r=0;r<o;r++){var s=t(n[r]);if(a.data.extlink.extUseFontAwesome){if(e===a.data.extlink.mailtoClass){s[l]('<span class="fa-'+e+' extlink"><span class="'+a.data.extlink.extFaMailtoClasses+'" aria-label="'+a.data.extlink.mailtoLabel+'"></span></span>')}
else{s[l]('<span class="fa-'+e+' extlink"><span class="'+a.data.extlink.extFaLinkClasses+'" aria-label="'+a.data.extlink.extLabel+'"></span></span>')}}
else{if(e===a.data.extlink.mailtoClass){s[l]('<svg focusable="false" class="'+e+'" role="img" aria-label="'+a.data.extlink.mailtoLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 70 20"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+a.data.extlink.mailtoLabel+'</title><path d="M56 14H8c-1.1 0-2 0.9-2 2v32c0 1.1 0.9 2 2 2h48c1.1 0 2-0.9 2-2V16C58 14.9 57.1 14 56 14zM50.5 18L32 33.4 13.5 18H50.5zM10 46V20.3l20.7 17.3C31.1 37.8 31.5 38 32 38s0.9-0.2 1.3-0.5L54 20.3V46H10z"/></svg>')}
else{s[l]('<svg focusable="false" class="'+e+'" role="img" aria-label="'+a.data.extlink.extLabel+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><metadata><sfw xmlns="http://ns.adobe.com/SaveForWeb/1.0/"><sliceSourceBounds y="-8160" x="-8165" width="16389" height="16384" bottomLeftOrigin="true"/><optimizationSettings><targetSettings targetSettingsID="0" fileFormat="PNG24Format"><PNG24Format transparency="true" filtered="false" interlaced="false" noMatteColor="false" matteColor="#FFFFFF"/></targetSettings></optimizationSettings></sfw></metadata><title>'+a.data.extlink.extLabel+'</title><path d="M48 26c-1.1 0-2 0.9-2 2v26H10V18h26c1.1 0 2-0.9 2-2s-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v40c0 1.1 0.9 2 2 2h40c1.1 0 2-0.9 2-2V28C50 26.9 49.1 26 48 26z"/><path d="M56 6H44c-1.1 0-2 0.9-2 2s0.9 2 2 2h7.2L30.6 30.6c-0.8 0.8-0.8 2 0 2.8C31 33.8 31.5 34 32 34s1-0.2 1.4-0.6L54 12.8V20c0 1.1 0.9 2 2 2s2-0.9 2-2V8C58 6.9 57.1 6 56 6z"/></svg>')}}}};e.behaviors.extlink=e.behaviors.extlink||{};e.behaviors.extlink.attach=function(t,a){if(typeof extlinkAttach==='function'){extlinkAttach(t)}
else{e.extlink.attach(t,a)}}})(jQuery,Drupal,drupalSettings);;
(function(s,e){e.theme.progressBar=function(s){return'<div id="'.concat(s,'" class="progress" aria-live="polite">')+'<div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'};e.ProgressBar=function(r,i,t,a){this.id=r;this.method=t||'GET';this.updateCallback=i;this.errorCallback=a;this.element=s(e.theme('progressBar',r))};s.extend(e.ProgressBar.prototype,{setProgress:function(e,r,i){if(e>=0&&e<=100){s(this.element).find('div.progress__bar').css('width',''.concat(e,'%'));s(this.element).find('div.progress__percentage').html(''.concat(e,'%'))};s('div.progress__description',this.element).html(r);s('div.progress__label',this.element).html(i);if(this.updateCallback){this.updateCallback(e,r,this)}},startMonitoring:function(s,e){this.delay=e;this.uri=s;this.sendPing()},stopMonitoring:function(){clearTimeout(this.timer);this.uri=null},sendPing:function(){if(this.timer){clearTimeout(this.timer)};if(this.uri){var r=this,i=this.uri;if(i.indexOf('?')===-1){i+='?'}
else{i+='&'};i+='_format=json';s.ajax({type:this.method,url:i,data:'',dataType:'json',success:function(s){if(s.status===0){r.displayError(s.data);return};r.setProgress(s.percentage,s.message,s.label);r.timer=setTimeout(function(){r.sendPing()},r.delay)},error:function(s){var i=new e.AjaxError(s,r.uri);r.displayError('<pre>'.concat(i.message,'</pre>'))}})}},displayError:function(e){var r=s('<div class="messages messages--error"></div>').html(e);s(this.element).before(r).hide();if(this.errorCallback){this.errorCallback(this)}}})})(jQuery,Drupal);;
(function(e,n){var o='is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256',c=e.fn.once,a=e.fn.removeOnce;e.fn.once=function(e){Drupal.deprecationError({message:'jQuery.once() '.concat(o)});return c.apply(this,[e])};e.fn.removeOnce=function(e){Drupal.deprecationError({message:'jQuery.removeOnce() '.concat(o)});return a.apply(this,[e])};var r=n;function t(n,o,a){c.apply(e(o,a),[n]);return r(n,o,a)};function i(n,o,c){a.apply(e(o,c),[n]);return r.remove(n,o,c)};window.once=Object.assign(t,r,{remove:i})})(jQuery,once);;
var loadjs =function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();
;
(function(i){i.behaviors.responsiveImageAJAX={attach:function(){if(window.picturefill){window.picturefill()}}}})(Drupal);;
;function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()};function _nonIterableSpread(){throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')};function _unsupportedIterableToArray(e,t){if(!e)return;if(typeof e==='string')return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==='Object'&&e.constructor)r=e.constructor.name;if(r==='Map'||r==='Set')return Array.from(e);if(r==='Arguments'||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)};function _iterableToArray(e){if(typeof Symbol!=='undefined'&&e[Symbol.iterator]!=null||e['@@iterator']!=null)return Array.from(e)};function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)};function _arrayLikeToArray(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]};return a}(function(e,r,t,a,n,o){var i=o.isFocusable,c=o.tabbable;t.behaviors.AJAX={attach:function(r,a){function n(r){var n=a.ajax[r];if(typeof n.selector==='undefined'){n.selector='#'.concat(r)};once('drupal-ajax',e(n.selector)).forEach(function(e){n.element=e;n.base=r;t.ajax(n)})};Object.keys(a.ajax||{}).forEach(function(e){return n(e)});t.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach(function(r){var a={};a.url=e(r.form).attr('action');a.setClick=!0;a.event='click';a.progress={type:'throbber'};a.base=r.id;a.element=r;t.ajax(a)})},detach:function(e,r,a){if(a==='unload'){t.ajax.expired().forEach(function(e){t.ajax.instances[e.instanceIndex]=null})}}};t.AjaxError=function(e,r,a){var o,s,n;if(e.status){o='\n'.concat(t.t('An AJAX HTTP error occurred.'),'\n').concat(t.t('HTTP Result Code: !status',{'!status':e.status}))}
else{o='\n'.concat(t.t('An AJAX HTTP request terminated abnormally.'))};o+='\n'.concat(t.t('Debugging information follows.'));var l='\n'.concat(t.t('Path: !uri',{'!uri':r}));s='';try{s='\n'.concat(t.t('StatusText: !statusText',{'!statusText':e.statusText.trim()}))}catch(i){};n='';try{n='\n'.concat(t.t('ResponseText: !responseText',{'!responseText':e.responseText.trim()}))}catch(i){};n=n.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');n=n.replace(/[\n]+\s+/g,'\n');var c=e.status===0?'\n'.concat(t.t('ReadyState: !readyState',{'!readyState':e.readyState})):'';a=a?'\n'.concat(t.t('CustomMessage: !customMessage',{'!customMessage':a})):'';this.message=o+l+s+a+n+c;this.name='AjaxError'};t.AjaxError.prototype=new Error();t.AjaxError.prototype.constructor=t.AjaxError;t.ajax=function(e){if(arguments.length!==1){throw new Error('Drupal.ajax() function must be called with one configuration object only')};var n=e.base||!1,a=e.element||!1;delete e.base;delete e.element;if(!e.progress&&!a){e.progress=!1};var r=new t.Ajax(n,a,e);r.instanceIndex=t.ajax.instances.length;t.ajax.instances.push(r);return r};t.ajax.instances=[];t.ajax.expired=function(){return t.ajax.instances.filter(function(e){return e&&e.element!==!1&&!document.body.contains(e.element)})};t.ajax.bindAjaxLinks=function(r){once('ajax','.use-ajax',r).forEach(function(r){var a=e(r),n={progress:{type:'throbber'},dialogType:a.data('dialog-type'),dialog:a.data('dialog-options'),dialogRenderer:a.data('dialog-renderer'),base:a.attr('id'),element:r};var o=a.attr('href');if(o){n.url=o;n.event='click'};t.ajax(n)})};t.Ajax=function(r,n,o){var u={event:n?'mousedown':null,keypress:!0,selector:r?'#'.concat(r):null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:t.t('Please wait...')},submit:{js:!0}};e.extend(this,u,o);this.commands=new t.AjaxCommands();this.instanceIndex=!1;if(this.wrapper){this.wrapper='#'.concat(this.wrapper)};this.element=n;this.element_settings=o;this.elementSettings=o;if(this.element&&this.element.form){this.$form=e(this.element.form)};if(!this.url){var c=e(this.element);if(c.is('a')){this.url=c.attr('href')}
else if(this.element&&n.form){this.url=this.$form.attr('action')}};var l=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(a.ajaxTrustedUrl[l]){a.ajaxTrustedUrl[this.url]=!0};var s=this;s.options={url:s.url,data:s.submit,isInProgress:function(){return s.ajaxing},beforeSerialize:function(e,t){return s.beforeSerialize(e,t)},beforeSubmit:function(e,t,r){s.ajaxing=!0;return s.beforeSubmit(e,t,r)},beforeSend:function(e,t){s.ajaxing=!0;return s.beforeSend(e,t)},success:function(r,n,o){var i=this;if(typeof r==='string'){r=e.parseJSON(r)};if(r!==null&&!a.ajaxTrustedUrl[s.url]){if(o.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){var c=t.t('The response failed verification so will not be processed.');return s.error(o,s.url,c)}};return Promise.resolve(s.success(r,n)).then(function(){s.ajaxing=!1;e(document).trigger('ajaxSuccess',[o,i]);e(document).trigger('ajaxComplete',[o,i]);if(--e.active===0){e(document).trigger('ajaxStop')}})},error:function(e,t,r){s.ajaxing=!1},complete:function(e,t){if(t==='error'||t==='parsererror'){return s.error(e,s.url)}},dataType:'json',jsonp:!1,type:'POST'};if(o.dialog){s.options.data.dialogOptions=o.dialog};if(s.options.url.indexOf('?')===-1){s.options.url+='?'}
else{s.options.url+='&'};var i='drupal_'.concat(o.dialogType||'ajax');if(o.dialogRenderer){i+='.'.concat(o.dialogRenderer)};s.options.url+=''.concat(t.ajax.WRAPPER_FORMAT,'=').concat(i);e(s.element).on(o.event,function(e){if(!a.ajaxTrustedUrl[s.url]&&!t.url.isLocal(s.url)){throw new Error(t.t('The callback URL is not local and not trusted: !url',{'!url':s.url}))};return s.eventResponse(this,e)});if(o.keypress){e(s.element).on('keypress',function(e){return s.keypressResponse(this,e)})};if(o.prevent){e(s.element).on(o.prevent,!1)}};t.ajax.WRAPPER_FORMAT='_wrapper_format';t.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';t.Ajax.prototype.execute=function(){if(this.ajaxing){return};try{this.beforeSerialize(this.element,this.options);return e.ajax(this.options)}catch(t){this.ajaxing=!1;r.alert('An error occurred while attempting to process '.concat(this.options.url,': ').concat(t.message));return e.Deferred().reject()}};t.Ajax.prototype.keypressResponse=function(t,r){var a=this;if(r.which===13||r.which===32&&t.type!=='text'&&t.type!=='textarea'&&t.type!=='tel'&&t.type!=='number'){r.preventDefault();r.stopPropagation();e(t).trigger(a.elementSettings.event)}};t.Ajax.prototype.eventResponse=function(t,a){a.preventDefault();a.stopPropagation();var n=this;if(n.ajaxing){return};try{if(n.$form){if(n.setClick){t.form.clk=t};n.$form.ajaxSubmit(n.options)}
else{n.beforeSerialize(n.element,n.options);e.ajax(n.options)}}catch(o){n.ajaxing=!1;r.alert('An error occurred while attempting to process '.concat(n.options.url,': ').concat(o.message))}};t.Ajax.prototype.beforeSerialize=function(e,r){if(this.$form&&document.body.contains(this.$form.get(0))){var o=this.settings||a;t.detachBehaviors(this.$form.get(0),o,'serialize')};r.data[t.Ajax.AJAX_REQUEST_PARAMETER]=1;var n=a.ajaxPageState;r.data['ajax_page_state[theme]']=n.theme;r.data['ajax_page_state[theme_token]']=n.theme_token;r.data['ajax_page_state[libraries]']=n.libraries};t.Ajax.prototype.beforeSubmit=function(e,t,r){};t.Ajax.prototype.beforeSend=function(t,r){if(this.$form){r.extraData=r.extraData||{};r.extraData.ajax_iframe_upload='1';var n=e.fieldValue(this.element);if(n!==null){r.extraData[this.element.name]=n}};e(this.element).prop('disabled',!0);if(!this.progress||!this.progress.type){return};var a='setProgressIndicator'.concat(this.progress.type.slice(0,1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());if(a in this&&typeof this[a]==='function'){this[a].call(this)}};t.theme.ajaxProgressThrobber=function(e){var r=typeof e==='string'?t.theme('ajaxProgressMessage',e):'',a='<div class="throbber">&nbsp;</div>';return'<div class="ajax-progress ajax-progress-throbber">'.concat(a).concat(r,'</div>')};t.theme.ajaxProgressIndicatorFullscreen=function(){return'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>'};t.theme.ajaxProgressMessage=function(e){return'<div class="message">'.concat(e,'</div>')};t.theme.ajaxProgressBar=function(t){return e('<div class="ajax-progress ajax-progress-bar"></div>').append(t)};t.Ajax.prototype.setProgressIndicatorBar=function(){var r=new t.ProgressBar('ajax-progress-'.concat(this.element.id),e.noop,this.progress.method,e.noop);if(this.progress.message){r.setProgress(-1,this.progress.message)};if(this.progress.url){r.startMonitoring(this.progress.url,this.progress.interval||1500)};this.progress.element=e(t.theme('ajaxProgressBar',r.element));this.progress.object=r;e(this.element).after(this.progress.element)};t.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=e(t.theme('ajaxProgressThrobber',this.progress.message));e(this.element).after(this.progress.element)};t.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=e(t.theme('ajaxProgressIndicatorFullscreen'));e('body').append(this.progress.element)};t.Ajax.prototype.commandExecutionQueue=function(e,t){var a=this,r=this.commands;return Object.keys(e||{}).reduce(function(n,o){return n.then(function(){var n=e[o].command;if(n&&r[n]){return r[n](a,e[o],t)}})},Promise.resolve())};t.Ajax.prototype.success=function(r,n){var o=this;if(this.progress.element){e(this.progress.element).remove()};if(this.progress.object){this.progress.object.stopMonitoring()};e(this.element).prop('disabled',!1);var s=e(this.element).parents('[data-drupal-selector]').addBack().toArray(),i=Object.keys(r||{}).some(function(e){var t=r[e],a=t.command,n=t.method;return a==='focusFirst'||a==='invoke'&&n==='focus'});return this.commandExecutionQueue(r,n).then(function(){if(!i&&o.element&&!e(o.element).data('disable-refocus')){var r=!1;for(var n=s.length-1;!r&&n>=0;n--){r=document.querySelector('[data-drupal-selector="'.concat(s[n].getAttribute('data-drupal-selector'),'"]'))};if(r){e(r).trigger('focus')}};if(o.$form&&document.body.contains(o.$form.get(0))){var c=o.settings||a;t.attachBehaviors(o.$form.get(0),c)};o.settings=null}).catch(function(e){return console.error(t.t('An error occurred during the execution of the Ajax response: !error',{'!error':e}))})};t.Ajax.prototype.getEffect=function(e){var r=e.effect||this.effect,a=e.speed||this.speed,t={};if(r==='none'){t.showEffect='show';t.hideEffect='hide';t.showSpeed=''}
else if(r==='fade'){t.showEffect='fadeIn';t.hideEffect='fadeOut';t.showSpeed=a}
else{t.showEffect=''.concat(r,'Toggle');t.hideEffect=''.concat(r,'Toggle');t.showSpeed=a};return t};t.Ajax.prototype.error=function(r,n,o){if(this.progress.element){e(this.progress.element).remove()};if(this.progress.object){this.progress.object.stopMonitoring()};e(this.wrapper).show();e(this.element).prop('disabled',!1);if(this.$form&&document.body.contains(this.$form.get(0))){var s=this.settings||a;t.attachBehaviors(this.$form.get(0),s)};throw new t.AjaxError(r,n,o)};t.theme.ajaxWrapperNewContent=function(e,r,a){return(a.effect||r.effect)!=='none'&&e.filter(function(t){return!(e[t].nodeName==='#comment'||e[t].nodeName==='#text'&&/^(\s|\n|\r)*$/.test(e[t].textContent))}).length>1?t.theme('ajaxWrapperMultipleRootElements',e):e};t.theme.ajaxWrapperMultipleRootElements=function(t){return e('<div></div>').append(t)};t.AjaxCommands=function(){};t.AjaxCommands.prototype={insert:function(r,n){var c=n.selector?e(n.selector):e(r.wrapper),l=n.method||r.method,s=r.getEffect(n),u=n.settings||r.settings||a,o=e(e.parseHTML(n.data,document,!0));o=t.theme('ajaxWrapperNewContent',o,r,n);switch(l){case'html':case'replaceWith':case'replaceAll':case'empty':case'remove':t.detachBehaviors(c.get(0),u);break;default:break};c[l](o);if(s.showEffect!=='show'){o.hide()};var i=o.find('.ajax-new-content');if(i.length){i.hide();o.show();i[s.showEffect](s.showSpeed)}
else if(s.showEffect!=='show'){o[s.showEffect](s.showSpeed)};if(o.parents('html').length){o.each(function(e,r){if(r.nodeType===Node.ELEMENT_NODE){t.attachBehaviors(r,u)}})}},remove:function(r,n,o){var s=n.settings||r.settings||a;e(n.selector).each(function(){t.detachBehaviors(this,s)}).remove()},changed:function(r,a,n){var o=e(a.selector);if(!o.hasClass('ajax-changed')){o.addClass('ajax-changed');if(a.asterisk){o.find(a.asterisk).append(' <abbr class="ajax-changed" title="'.concat(t.t('Changed'),'">*</abbr> '))}}},alert:function(e,t,a){r.alert(t.text)},announce:function(e,r){if(r.priority){t.announce(r.text,r.priority)}
else{t.announce(r.text)}},redirect:function(e,t,a){r.location=t.url},css:function(t,r,a){e(r.selector).css(r.argument)},settings:function(r,n,o){var s=a.ajax;if(s){t.ajax.expired().forEach(function(e){if(e.selector){var t=e.selector.replace('#','');if(t in s){delete s[t]}}})};if(n.merge){e.extend(!0,a,n.settings)}
else{r.settings=n.settings}},data:function(t,r,a){e(r.selector).data(r.name,r.value)},focusFirst:function(e,t,r){var n=!1,a=document.querySelector(t.selector);if(a){var o=c(a);if(o.length){o[0].focus();n=!0}
else if(i(a)){a.focus();n=!0}};if(e.hasOwnProperty('element')&&!n){e.element.focus()}},invoke:function(t,r,a){var n=e(r.selector);n[r.method].apply(n,_toConsumableArray(r.args))},restripe:function(t,r,a){e(r.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')},update_build_id:function(e,t,r){document.querySelectorAll('input[name="form_build_id"][value="'.concat(t.old,'"]')).forEach(function(e){e.value=t.new})},add_css:function(t,r,a){e('head').prepend(r.data)},message:function(e,r){var a=new t.Message(document.querySelector(r.messageWrapperQuerySelector));if(r.clearPrevious){a.clear()};a.add(r.message,r.messageOptions)},add_js:function(e,r,o){var s=document.querySelector(r.selector||'body'),i=e.settings||a,c=r.data.map(function(t){var r=t.src+e.instanceIndex;n(t.src,r,{async:!1,before:function(e,r){Object.keys(t).forEach(function(e){r.setAttribute(e,t[e])});s.appendChild(r);return!1}});return r});return new Promise(function(e,r){n.ready(c,{success:function(){t.attachBehaviors(s,i);e()},error:function(e){var a=t.t('The following files could not be loaded: @dependencies',{'@dependencies':e.join(', ')});r(a)}})})}};var s=function(e,t){return e.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&t.isInProgress&&t.isInProgress()};e.extend(!0,e.event.special,{ajaxSuccess:{trigger:function(e,t,r){if(s(t,r)){return!1}}},ajaxComplete:{trigger:function(t,r,a){if(s(r,a)){e.active++;return!1}}}})})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable);;
(function(a){a.theme.ajaxProgressBar=function(a){return a.addClass('ajax-progress ajax-progress-bar')}})(Drupal);;
(function(e,a,r){var t=r.isTabbable;e.extend(e.expr[':'],{tabbable:function(e){a.deprecationError({message:'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 11.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'});if(e.tagName==='SUMMARY'||e.tagName==='DETAILS'){var r=e.getAttribute('tabIndex');if(r===null||r<0){return!1}};return t(e)}})})(jQuery,Drupal,window.tabbable);;
(function(t){var o=null,l=Math.max,e=Math.abs,f=/left|center|right/,s=/top|center|bottom/,r=/[+-]\d+(\.[\d]+)?%?/,h=/^\w+/,a=/%$/,p=t.fn.position;function c(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]};function n(e,i){return parseInt(t.css(e,i),10)||0};function g(e){var i=e[0];if(i.nodeType===9){return{width:e.width(),height:e.height(),offset:{top:0,left:0}}};if(t.isWindow(i)){return{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}};if(i.preventDefault){return{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}};return{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}};var i={fit:{left:function(t,e){var f=e.within,o=f.isWindow?f.scrollLeft:f.offset.left,s=f.width,r=t.left-e.collisionPosition.marginLeft,i=o-r,n=r+e.collisionWidth-s-o,h;if(e.collisionWidth>s){if(i>0&&n<=0){h=t.left+i+e.collisionWidth-s-o;t.left+=i-h}
else if(n>0&&i<=0){t.left=o}
else if(i>n){t.left=o+s-e.collisionWidth}
else{t.left=o}}
else if(i>0){t.left+=i}
else if(n>0){t.left-=n}
else{t.left=l(t.left-r,t.left)}},top:function(t,e){var s=e.within,o=s.isWindow?s.scrollTop:s.offset.top,f=e.within.height,r=t.top-e.collisionPosition.marginTop,i=o-r,n=r+e.collisionHeight-f-o,h;if(e.collisionHeight>f){if(i>0&&n<=0){h=t.top+i+e.collisionHeight-f-o;t.top+=i-h}
else if(n>0&&i<=0){t.top=o}
else if(i>n){t.top=o+f-e.collisionHeight}
else{t.top=o}}
else if(i>0){t.top+=i}
else if(n>0){t.top-=n}
else{t.top=l(t.top-r,t.top)}}},flip:{left:function(t,i){var o=i.within,d=o.offset.left+o.scrollLeft,a=o.width,s=o.isWindow?o.scrollLeft:o.offset.left,c=t.left-i.collisionPosition.marginLeft,p=c-s,g=c+i.collisionWidth-a-s,l=i.my[0]==="left"?-i.elemWidth:i.my[0]==="right"?i.elemWidth:0,n=i.at[0]==="left"?i.targetWidth:i.at[0]==="right"?-i.targetWidth:0,f=-2*i.offset[0],r,h;if(p<0){r=t.left+l+n+f+i.collisionWidth-a-d;if(r<0||r<e(p)){t.left+=l+n+f}}
else if(g>0){h=t.left-i.collisionPosition.marginLeft+l+n+f-s;if(h>0||e(h)<g){t.left+=l+n+f}}},top:function d(t,i){var o=i.within,u=o.offset.top+o.scrollTop,a=o.height,s=o.isWindow?o.scrollTop:o.offset.top,c=t.top-i.collisionPosition.marginTop,p=c-s,g=c+i.collisionHeight-a-s,d=i.my[1]==="top",l=d?-i.elemHeight:i.my[1]==="bottom"?i.elemHeight:0,n=i.at[1]==="top"?i.targetHeight:i.at[1]==="bottom"?-i.targetHeight:0,f=-2*i.offset[1],r,h;if(p<0){h=t.top+l+n+f+i.collisionHeight-a-u;if(h<0||h<e(p)){t.top+=l+n+f}}
else if(g>0){r=t.top-i.collisionPosition.marginTop+l+n+f-s;if(r>0||e(r)<g){t.top+=l+n+f}}}},flipfit:{left:function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++){e[t]=arguments[t]};i.flip.left.apply(this,e);i.fit.left.apply(this,e)},top:function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++){e[t]=arguments[t]};i.flip.top.apply(this,e);i.fit.top.apply(this,e)}}};t.position={scrollbarWidth:function(){if(o!==undefined){return o};var e=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=e.children()[0];t("body").append(e);var l=n.offsetWidth;e.css("overflow","scroll");var i=n.offsetWidth;if(l===i){i=e[0].clientWidth};e.remove();o=l-i;return o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),l=i==="scroll"||i==="auto"&&e.width<e.element[0].scrollWidth,n=o==="scroll"||o==="auto"&&e.height<e.element[0].scrollHeight;return{width:n?t.position.scrollbarWidth():0,height:l?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),l=!!i[0]&&i[0].nodeType===9,n=!o&&!l;return{element:i,isWindow:o,isDocument:l,offset:n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}};t.fn.position=function(o){if(!o||!o.of){return p.apply(this,arguments)};o=t.extend({},o);var T=t.position.getWithinInfo(o.within),b=t.position.getScrollInfo(T),w=(o.collision||"flip").split(" "),H={};var W=typeof o.of==="string"?t(document).find(o.of):t(o.of),y=g(W),a=y.width,d=y.height,m=y.offset;if(W[0].preventDefault){o.at="left top"};var u=t.extend({},m);t.each(["my","at"],function(){var t=(o[this]||"").split(" ");if(t.length===1){t=f.test(t[0])?t.concat(["center"]):s.test(t[0])?["center"].concat(t):["center","center"]};t[0]=f.test(t[0])?t[0]:"center";t[1]=s.test(t[1])?t[1]:"center";var e=r.exec(t[0]),i=r.exec(t[1]);H[this]=[e?e[0]:0,i?i[0]:0];o[this]=[h.exec(t[0])[0],h.exec(t[1])[0]]});if(w.length===1){w[1]=w[0]};if(o.at[0]==="right"){u.left+=a}
else if(o.at[0]==="center"){u.left+=a/2};if(o.at[1]==="bottom"){u.top+=d}
else if(o.at[1]==="center"){u.top+=d/2};var v=c(H.at,a,d);u.left+=v[0];u.top+=v[1];return this.each(function(){var g,s=t(this),r=s.outerWidth(),h=s.outerHeight(),y=n(this,"marginLeft"),x=n(this,"marginTop"),P=r+y+n(this,"marginRight")+b.width,D=h+x+n(this,"marginBottom")+b.height,f=t.extend({},u);var p=c(H.my,s.outerWidth(),s.outerHeight());if(o.my[0]==="right"){f.left-=r}
else if(o.my[0]==="center"){f.left-=r/2};if(o.my[1]==="bottom"){f.top-=h}
else if(o.my[1]==="center"){f.top-=h/2};f.left+=p[0];f.top+=p[1];var L={marginLeft:y,marginTop:x};t.each(["left","top"],function(t,e){if(i[w[t]]){i[w[t]][e](f,{targetWidth:a,targetHeight:d,elemWidth:r,elemHeight:h,collisionPosition:L,collisionWidth:P,collisionHeight:D,offset:[v[0]+p[0],v[1]+p[1]],my:o.my,at:o.at,within:T,elem:s})}});if(o.using){g=function(t){var n=m.left-f.left,p=n+a-r,c=m.top-f.top,g=c+d-h,i={target:{element:W,left:m.left,top:m.top,width:a,height:d},element:{element:s,left:f.left,top:f.top,width:r,height:h},horizontal:p<0?"left":n>0?"right":"center",vertical:g<0?"top":c>0?"bottom":"middle"};if(a<r&&e(n+p)<a){i.horizontal="center"};if(d<h&&e(c+g)<d){i.vertical="middle"};if(l(e(n),e(p))>l(e(c),e(g))){i.important="horizontal"}
else{i.important="vertical"};o.using.call(this,t,i)}};s.offset(t.extend(f,{using:g}))})};if(!t.hasOwnProperty("ui")){t.ui={}};t.ui.position=i})(jQuery);;
;$=jQuery;(function(e,t){var a=window.location.pathname.split('/')[1];if(a==='admin'||a==='node'||a==='media'||a==='entity-browser'){e('img','#focal-point-derivatives,#entity-browser-image-browser-form,.details-wrapper.media-image,.ui-dialog-content.image-widget.focal-point-indicator,.field--widget-image-image .image-preview').each(function(){var t=e(this).attr('src'),a='?';if(t&&t.indexOf('?')>=0){a='&'};e(this).attr('src',t+a+Math.random())});e(document).ajaxComplete(function(t,a,i){var n=['.media-image-edit-form','.details-wrapper.media-image','.ui-dialog-content.image-widget.focal-point-indicator','.field--name-field-visuel-principal','.field--widget-image-image .image-preview','.view-mode-thumbnail','.entity-browser-multiple-image-browser-form'];function r(t){if(e('.ui-dialog').length){e('.ui-dialog').focus()};if(e(t).length){setTimeout(function(){e('img',t).each(function(){var t=e(this).attr('src'),a='?';if(t&&t.indexOf('?')>=0){a='&'};e(this).attr('src',t+a+Math.random())})},2000)}};n.forEach(r);e('.modal-content').each(function(){e(this).addClass('formulaire')})});var i=jQuery('ul.tabs li.is-active','#block-seven-primary-local-tasks').text();if(~i.indexOf('Modifier')){jQuery('a','#block-seven-primary-local-tasks').each(function(){var a=jQuery(this).text();if(a==t.t('View')){jQuery(this).click(function(a){a.preventDefault();var i=e('<div><p>'+t.t('Voulez-vous enregistrer avant de quitter ?')+'</p></div>').appendTo('body');t.dialog(i,{title:t.t('Quitter cette page?'),buttons:[{text:t.t('Oui'),click:function(){e([document.documentElement,document.body]).animate({scrollTop:e('#edit-submit').offset().top},2000);e(this).dialog('close')}},{text:t.t('Non'),click:function(){window.top.location.href=a.target.href}}]}).showModal()})}})}};jQuery('.paragraph img','.container').each(function(){var e=jQuery(this).attr('title');if(typeof e!==typeof undefined&&e!==!1){jQuery(this).attr('title',e.replace('|','©'))}});jQuery('.field--name-field-texte a, .field--name-field-image a','.paragraph').each(function(){this.href=this.href.replace(/([^"]*)\/files\/([^"]*)public\/([^"]*)/,'$1/files/$3')});jQuery('.paragraph--type--gallery','.container').each(function(){var e='gallery-'+Math.floor((Math.random()*10000)+1);jQuery(this).find('.field--name-field-image a').each(function(){jQuery(this).data('colorbox-gallery',e)})})})(jQuery,Drupal);jQuery(window).on('load',function(){var e={formattedDate:function(e){var t=('0'+(e.getMonth()+1)).slice(-2),a=('0'+e.getDate()).slice(-2),i=e.getFullYear();return a+'-'+t+'-'+i},nextDay:function(e){var t=new Date();t.setDate(t.getDate()+(e+(7-t.getDay()))%7);return t},setToday:function(t,a,i){var r=new Date(),n=e.formattedDate(new Date(r.getFullYear(),r.getMonth(),r.getDate())),d='?agenda_period=TOD';if(typeof t==='undefined'){d+='&date_debut='+n}
else{if(jQuery(t).length){jQuery(t).val(n)}};if(typeof a==='undefined'){d+='&date_fin='+n}
else{if(jQuery(a).length){jQuery(a).val(n)}};if(typeof a==='undefined'){return d.replace('undefined','')}
else{if(jQuery(i).length){jQuery('#agenda_period').val('TOD');jQuery(i).click()}};return!1},setThisWeek:function(t,a,i){var n=new Date(),f=n.getFullYear(),l=n.getMonth(),o=n.getDate(),u=e.formattedDate(new Date(f,l,o));n.setDate(o+7);var d=e.formattedDate(new Date(n.getFullYear(),n.getMonth(),n.getDate())),r='?agenda_period=WEE';if(typeof t==='undefined'){r+='&date_debut='+u}
else{if(jQuery(t).length){jQuery(t).val(u)}};if(typeof a==='undefined'){r+='&date_fin='+d}
else{if(jQuery(a).length){jQuery(a).val(d)}};if(typeof i==='undefined'){return r.replace('undefined','')}
else{if(jQuery(i).length){jQuery('#agenda_period').val('WEE');jQuery(i).click()}};return!1},setThisWeekEnd:function(t,a,n){var i=new Date();i.setDate(i.getDate()+(5+7-i.getDay())%7);var u=new Date(i.getFullYear(),i.getMonth(),i.getDate()),f=new Date(i.getFullYear(),i.getMonth(),i.getDate()+2),r='?agenda_period=TWE',d=e.formattedDate(u),o=e.formattedDate(f);if(typeof t==='undefined'){r+='&date_debut='+d}
else{if(jQuery(t).length){jQuery(t).val(d)}};if(typeof a==='undefined'){r+='&date_fin='+o}
else{if(jQuery(a).length){jQuery(a).val(o)}};if(typeof n==='undefined'){return r.replace('undefined','')}
else{if(jQuery(n).length){jQuery('#agenda_period').val('TWE');jQuery(n).click()}};return!1},setThisMonth:function(t,a,i){var r=new Date(),d=r.getFullYear(),o=r.getMonth(),u=e.formattedDate(new Date(d,o,1)),f=e.formattedDate(new Date(d,o+1,0)),n='?period=WE';if(typeof t==='undefined'){n+='?date_debut='+u}
else{if(jQuery(t).length){jQuery(t).val(u)}};if(typeof a==='undefined'){n+='&date_fin='+f}
else{if(jQuery(a).length){jQuery(a).val(f)}};if(typeof i==='undefined'){return n.replace('undefined','')}
else{if(jQuery(i).length){jQuery('#agenda_period').val('TWE');jQuery(i).click()}};return!1}};var d=jQuery('#agenda-today');d.attr('href',d.attr('href')+e.setToday());var r=jQuery('#agenda-week');r.attr('href',r.attr('href')+e.setThisWeek());var n=jQuery('#agenda-week-end');n.attr('href',n.attr('href')+e.setThisWeekEnd());var t='#edit-date-debut',a='#edit-date-fin',i='#edit-submit-liste-agenda';$('#agenda_today').click(function(){e.setToday(t,a,i)});$('#agenda_this_week').click(function(){e.setThisWeek(t,a,i)});$('#agenda_this_weekend').click(function(){e.setThisWeekEnd(t,a,i)});jQuery('.modal-content').each(function(){jQuery(this).addClass('formulaire')});jQuery(document).ajaxComplete(function(e,t,a){if(a.url.indexOf('/editor/dialog/link/full_html')>=0){jQuery('[id^=editor-link-dialog]','#editor-link-dialog-form').find('[id^=edit-attributes-href]').focusout(function(){jQuery(this).click().focus()}).blur(function(){jQuery(this).click().focus()})}});jQuery('div[class*=slick-cloned] a').each(function(){jQuery(this).removeClass()})});;
(function(i,r){"use strict";var a={init:function(){if(i("div.shariff").length&&i(".shariff-print").length===0){i("div.shariff").after("<div class='shariff-print'><a href='javascript:window.print()' title='Imprimer' role='button' aria-label='Imprimer'><span class='fa fa-print'></span></a></div>")}}}})(jQuery,Drupal);;
(function(e){var i=window.location.pathname.split('/')[1];if(i==='admin'||i==='node'||i==='media'||i==='entity-browser'){'use strict';e('.views-row').each(function(){var i=e(this),t=i.find('.views-field-entity-browser-select input');if(drupalSettings.entity_browser_widget.auto_select){i.once('register-row-click').click(function(e){e.preventDefault();i.parents('form').find('.entities-list').trigger('add-entities',[[t.val()]])})}
else{i[t.prop('checked')?'addClass':'removeClass']('checked');i.once('register-row-click').click(function(){t.prop('checked',!t.prop('checked'));i[t.prop('checked')?'addClass':'removeClass']('checked')})}})}}(jQuery,Drupal));jQuery(window).on('load',function(){$(window).on({'dialog:aftercreate':function(e,t,i,c){if(i[0]['classList'][0]!==undefined&&i[0]['classList'][0]==='paragraphs-add-dialog'){$('body').css({overflow:'inherit'})}}})});;
/*! js-cookie v2.2.0 | MIT */

!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(r+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(n+"")).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var f in i)i[f]&&(s+="; "+f,!0!==i[f]&&(s+="="+i[f]));return document.cookie=n+"="+r+s}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var m=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,m):o(C,m)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===m){c=C;break}n||(c[m]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});;