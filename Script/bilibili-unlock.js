/*ð¤ æ¬èæ¬è½¬æ¢èªï¼https://greasyfork.org/scripts/25718-è§£é¤bç«åºåéå¶/code/è§£é¤Bç«åºåéå¶.user.jsã
ð è½¬æ¢å¨ by Peng-YMãTGé¢é: https://t.me/cool_scripts

ð [åè½]
éè¿æ¿æ¢è·åè§é¢å°åæ¥å£çæ¹å¼, å®ç°è§£é¤Bç«åºåéå¶; åªå¯¹HTML5æ­æ¾å¨çæ;

ð  [éç½®]
è¯·æ ¹æ®ä¸æ¹æè¿°è®¾ç½®MITMåååéåãâï¸ç±äºèæ¬æ¯èªå¨çæï¼å¯è½éè¦æå¨è°æ´è®¾ç½®ã


[MITM]
hostname=www\.bilibili\.com/video/av.*, www\.bilibili\.com/video/BV.*, www\.bilibili\.com/bangumi/play/ep.*, www\.bilibili\.com/bangumi/play/ss.*, m\.bilibili\.com/bangumi/play/ep.*, m\.bilibili\.com/bangumi/play/ss.*, bangumi\.bilibili\.com/anime/.*, bangumi\.bilibili\.com/movie/.*, www\.bilibili\.com/bangumi/media/md.*, www\.bilibili\.com/blackboard/html5player\.html.*, www\.bilibili\.com/watchroom/.*, space\.bilibili\.com/.*, www\.mcbbs\.net/template/mcbbs/image/special_photo_bg\.png.*, 

ð Quantumult X
[rewrite_local]
www\.bilibili\.com/video/av.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/video/BV.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/bangumi/play/ep.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/bangumi/play/ss.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
m\.bilibili\.com/bangumi/play/ep.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
m\.bilibili\.com/bangumi/play/ss.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
bangumi\.bilibili\.com/anime/.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
bangumi\.bilibili\.com/movie/.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/bangumi/media/md.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/blackboard/html5player\.html.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.bilibili\.com/watchroom/.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
space\.bilibili\.com/.* url script-response-body è§£é¤Bç«åºåéå¶.user.js
www\.mcbbs\.net/template/mcbbs/image/special_photo_bg\.png.* url script-response-body è§£é¤Bç«åºåéå¶.user.js


ð Loon
[Script]
http-response www\.bilibili\.com/video/av.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/video/BV.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/bangumi/play/ep.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/bangumi/play/ss.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response m\.bilibili\.com/bangumi/play/ep.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response m\.bilibili\.com/bangumi/play/ss.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response bangumi\.bilibili\.com/anime/.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response bangumi\.bilibili\.com/movie/.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/bangumi/media/md.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/blackboard/html5player\.html.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.bilibili\.com/watchroom/.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response space\.bilibili\.com/.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js
http-response www\.mcbbs\.net/template/mcbbs/image/special_photo_bg\.png.* script-path=è§£é¤Bç«åºåéå¶.user.js, requires-body=true, tag=è§£é¤Bç«åºåéå¶.user.js


ð Surge
[Script]
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/video/av.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/video/BV.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/bangumi/play/ep.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/bangumi/play/ss.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=m\.bilibili\.com/bangumi/play/ep.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=m\.bilibili\.com/bangumi/play/ss.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=bangumi\.bilibili\.com/anime/.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=bangumi\.bilibili\.com/movie/.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/bangumi/media/md.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/blackboard/html5player\.html.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.bilibili\.com/watchroom/.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=space\.bilibili\.com/.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
è§£é¤Bç«åºåéå¶=type=http-response, pattern=www\.mcbbs\.net/template/mcbbs/image/special_photo_bg\.png.*, script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Script/bilibili-unlock.js, requires-body=true, max-size=1310720
**************************/

`
try {
    let body = $response.body;
    if (/<\/html>|<\/body>/.test(body)) {
        body = body.replace('</body>', `<script src=https://static.hdslb.com/js/md5.js></script>
<script src=https://static.hdslb.com/js/md5.js></script>

<script>
 const result=function(){
function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @name         è§£é¤Bç«åºåéå¶
// @namespace    http://tampermonkey.net/
// @version      8.2.15
// @description  éè¿æ¿æ¢è·åè§é¢å°åæ¥å£çæ¹å¼, å®ç°è§£é¤Bç«åºåéå¶; åªå¯¹HTML5æ­æ¾å¨çæ;
// @author       ipcjs
// @supportURL   https://github.com/ipcjs/bilibili-helper/blob/user.js/packages/unblock-area-limit/README.md
// @compatible   chrome
// @compatible   firefox
// @license      MIT
// @require      https://static.hdslb.com/js/md5.js
// @include      *://www.bilibili.com/video/av*
// @include      *://www.bilibili.com/video/BV*
// @include      *://www.bilibili.com/bangumi/play/ep*
// @include      *://www.bilibili.com/bangumi/play/ss*
// @include      *://m.bilibili.com/bangumi/play/ep*
// @include      *://m.bilibili.com/bangumi/play/ss*
// @include      *://bangumi.bilibili.com/anime/*
// @include      *://bangumi.bilibili.com/movie/*
// @include      *://www.bilibili.com/bangumi/media/md*
// @include      *://www.bilibili.com/blackboard/html5player.html*
// @include      *://www.bilibili.com/watchroom/*
// @include      *://space.bilibili.com/*
// @include      https://www.mcbbs.net/template/mcbbs/image/special_photo_bg.png*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const log = console.log.bind(console, 'injector:')

if (location.href.match(/^https:\/\/www\.mcbbs\.net\/template\/mcbbs\/image\/special_photo_bg\.png/) != null) {
    if (location.href.match('access_key') != null && window.opener != null) {
        window.stop();
        document.children[0].innerHTML = '<title>BALH - ææ</title><meta charset="UTF-8" name="viewport" content="width=device-width">æ­£å¨è·³è½¬â¦â¦';
        window.opener.postMessage('balh-login-credentials: ' + location.href, '*');
    }
    return
}

function injector() {
    if (document.getElementById('balh-injector-source')) {
        log(`èæ¬å·²ç»æ³¨å¥è¿, ä¸éè¦æ§è¡`)
        return
    }
    // @require      https://static.hdslb.com/js/md5.js
    GM_info.scriptMetaStr.replace(new RegExp('// @require\\s+https?:(//.*)'), (match, /*p1:*/url) => {
        log('@require:', url)
        let $script = document.createElement('script')
        $script.className = 'balh-injector-require'
        $script.setAttribute('type', 'text/javascript')
        $script.setAttribute('src', url)
        document.head.appendChild($script)
        return match
    })
    let $script = document.createElement('script')
    $script.id = 'balh-injector-source'
    $script.appendChild(document.createTextNode(`
        ;(function(GM_info){
            ${scriptSource.toString()}
            ${scriptSource.name}('${GM_info.scriptHandler}.${injector.name}')
        })(${JSON.stringify(GM_info)})
    `))
    document.head.appendChild($script)
    log('æ³¨å¥å®æ')
}

if (!Object.getOwnPropertyDescriptor(window, 'XMLHttpRequest').writable) {
    log('XHRå¯¹è±¡ä¸å¯ä¿®æ¹, éè¦æèæ¬æ³¨å¥å°é¡µé¢ä¸­', GM_info.script.name, location.href, document.readyState)
    injector()
    return
}

/** èæ¬çä¸»ä½é¨å, å¨GM4ä¸­, éè¦æè¿ä¸ªå½æ°è½¬æ¢æå­ç¬¦ä¸², æ³¨å¥å°é¡µé¢ä¸­, æä¸è¦å¼ç¨å¤é¨çåé */
function scriptSource(invokeBy) {
    // @template-content
    var Strings;
    (function (Strings) {
        function multiply(str, multiplier) {
            let result = '';
            for (let i = 0; i < multiplier; i++) {
                result += str;
            }
            return result;
        }
        Strings.multiply = multiply;
        function toSnakeCase(str) {
            return str.replace(/[A-Z]/g, (a) => `_${a.toLowerCase()}`).replace(/^_/, "");
        }
        Strings.toSnakeCase = toSnakeCase;
        function getSearchParam(url, key) {
            return (url.match(new RegExp('[?|&]' + key + '=(\\w+)')) || ['', ''])[1];
        }
        Strings.getSearchParam = getSearchParam;
        function replaceTemplate(template, values) {
            return template.replace(/___(\w+)___/g, (match, name) => {
                return values[name];
            });
        }
        Strings.replaceTemplate = replaceTemplate;
        function escapeSpecialChars(str) {
            return str.replace(/\n/g, '\\\n')
                .replace(/"/g, '\\\"')
                .replace(/\r/g, '\\\r')
                .replace(/\t/g, '\\\t')
                .replace(/\b/g, '\\\b')
                .replace(/\f/g, '\\\f');
        }
        Strings.escapeSpecialChars = escapeSpecialChars;
    })(Strings || (Strings = {}));

    var Objects;
    (function (Objects) {
        function convertKeyToSnakeCase(obj) {
            // log(typeof obj, Array.isArray(obj), obj)
            if (Array.isArray(obj)) {
                for (const item of obj) {
                    convertKeyToSnakeCase(item);
                }
            }
            else if (typeof obj === 'object') {
                const o = obj;
                for (const key of Object.keys(o)) {
                    const value = o[key];
                    convertKeyToSnakeCase(value);
                    o[Strings.toSnakeCase(key)] = value;
                }
            }
            return obj; // è¯¥æ¹æ³ä¼ä¿®æ¹ä¼ å¥çobjçåå®¹, è¿åobjåªæ¯ä¸ºäºè°ç¨æ¹ä¾¿...
        }
        Objects.convertKeyToSnakeCase = convertKeyToSnakeCase;
        function stringify(item) {
            if (typeof item === 'object') {
                try {
                    return JSON.stringify(item);
                }
                catch (e) {
                    console.debug(e);
                    return `${item}`;
                }
            }
            else {
                return item;
            }
        }
        Objects.stringify = stringify;
        function stringifyArray(arr) {
            return arr.map(stringify).join(' ');
        }
        Objects.stringifyArray = stringifyArray;
    })(Objects || (Objects = {}));

    const r_text = {
        ok: { en: 'OK', zh_cn: 'ç¡®å®', },
        close: { en: 'Close', zh_cn: 'å³é­' },
        welcome_to_acfun: '<p><b>ç¼ºBä¹ äºè§£ä¸ï¼</b></p>',
        version_remind: ``,
    };
    function _t(key) {
        const text = r_text[key];
        const lang = 'zh_cn';
        return typeof text === 'string' ? text : text[lang];
    }
    const TRUE = 'Y';
    const FALSE = '';
    const r = {
        html: {},
        css: {
            settings: '#balh-settings {font-size: 12px;color: #6d757a;}  #balh-settings h1 {color: #161a1e}  #balh-settings a {color: #00a1d6;}  #balh-settings a:hover {color: #f25d8e}  #balh-settings input {margin-left: 3px;margin-right: 3px;}  @keyframes balh-settings-bg { from {background: rgba(0, 0, 0, 0)} to {background: rgba(0, 0, 0, .7)} }  #balh-settings label {width: 100%;display: inline-block;cursor: pointer}  #balh-settings label:after {content: "";width: 0;height: 1px;background: #4285f4;transition: width .3s;display: block}  #balh-settings label:hover:after {width: 100%}  form {margin: 0}  #balh-settings input[type="radio"] {-webkit-appearance: radio;-moz-appearance: radio;appearance: radio;}  #balh-settings input[type="checkbox"] {-webkit-appearance: checkbox;-moz-appearance: checkbox;appearance: checkbox;} ',
        },
        attr: {},
        url: {
            issue: 'https://github.com/ipcjs/bilibili-helper/issues',
            issue_new: 'https://github.com/ipcjs/bilibili-helper/issues/new',
            readme: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/packages/unblock-area-limit/README.md#%E8%A7%A3%E9%99%A4b%E7%AB%99%E5%8C%BA%E5%9F%9F%E9%99%90%E5%88%B6',
        },
        script: {
            is_dev: GM_info.script.name.includes('.dev'),
        },
        const: {
            mode: {
                /** é»è®¤æ¨¡å¼, èªå¨å¤æ­ä½¿ç¨ä½ç§æ¨¡å¼, æ¨è; */
                DEFAULT: 'default',
                /** æ¿æ¢æ¨¡å¼, æ¿æ¢æåºåéå¶çè§é¢çæ¥å£çè¿åå¼; */
                REPLACE: 'replace',
                /** éå®åæ¨¡å¼, ç´æ¥éå®åææçªå§è§é¢çæ¥å£å°ä»£çæå¡å¨; ææçªå§è§é¢é½éè¿ä»£çæå¡å¨è·åè§é¢å°å, å¦æä»£çæå¡å¨ä¸ç¨³å®, å¯è½å è½½ä¸åºè§é¢; */
                REDIRECT: 'redirect',
            },
            server: {
                S0: 'https://biliplus.ipcjs.top',
                S1: 'https://www.biliplus.com',
                CUSTOM: '__custom__',
                defaultServer: function () {
                    return this.S1;
                },
            },
            TRUE: TRUE,
            FALSE: FALSE,
        },
        regex: {
            /** api.bilibili.comçå¨ç«ä»£ç */
            bilibili_api_proxy: /^https?:\/\/(?<user_pass>[\p{L}\d:_-]+@)?(?<user_server>[\p{L}\d_-]+(\.[\p{L}\d_-]+)+(:\d+)?)$/u,
        },
        baipiao: [
            { key: 'zomble_land_saga', match: () => { var _a, _b; return ((_b = (_a = window.__INITIAL_STATE__) === null || _a === void 0 ? void 0 : _a.epInfo) === null || _b === void 0 ? void 0 : _b.ep_id) === 251255; }, link: 'http://www.acfun.cn/bangumi/ab5022161_31405_278830', message: r_text.welcome_to_acfun },
            { key: 'zomble_land_saga', match: () => { var _a, _b; return ((_b = (_a = window.__INITIAL_STATE__) === null || _a === void 0 ? void 0 : _a.mediaInfo) === null || _b === void 0 ? void 0 : _b.media_id) === 140772; }, link: 'http://www.acfun.cn/bangumi/aa5022161', message: r_text.welcome_to_acfun },
        ]
    };

    const tag = GM_info.script.name + '.msg';
    // è®¡ç®"æ¥¼å±", è¥å½åwindowå°±æ¯é¡¶å±çwindow, åfloorä¸º0, ä»¥æ­¤ç±»æ¨
    function computeFloor(w = window, floor = 0) {
        if (w === window.top) {
            return floor;
        }
        else {
            return computeFloor(w.parent, floor + 1);
        }
    }
    let floor = computeFloor();
    let msgList = [];
    if (floor === 0) { // åªæé¡¶å±çWindowæéè¦æ¶éæ¥å¿
        window.addEventListener('message', (event) => {
            if (event.data instanceof Array && event.data[0] === tag) {
                let [/*tag*/ , fromFloor, msg] = event.data;
                msgList.push(Strings.multiply('    ', fromFloor) + msg);
            }
        });
    }
    const logHub = {
        msg: function (msg) {
            window.top.postMessage([tag, floor, msg], '*');
        },
        getAllMsg: function () {
            return msgList.join('\n');
        }
    };
    function logImpl(type) {
        if (r.script.is_dev) {
            // ç´æ¥æå°, ä¼æ¾ç¤ºè¡æ°
            return window.console[type].bind(window.console, type + ':');
        }
        else {
            // å°logæ¶éå°util_log_hubä¸­, æ¾ç¤ºçè¡æ°æ¯éè¯¯ç...
            return function (...args) {
                args.unshift(type + ':');
                window.console[type].apply(window.console, args);
                logHub.msg(Objects.stringifyArray(args));
            };
        }
    }
    const util_log = logImpl('log');
    const util_info = logImpl('info');
    const util_debug = logImpl('debug');
    const util_warn = logImpl('warn');
    const util_error = logImpl('error');

    /** @see https://github.com/yujincheng08/BiliRoaming/blob/f689b138da7ac45d2591d375f19698c969844324/app/src/main/res/values/strings.xml#L112-L131 */
    const uposMap = {
        ks3: 'upos-sz-mirrorks3.bilivideo.com',
        ks3b: 'upos-sz-mirrorks3b.bilivideo.com',
        ks3c: 'upos-sz-mirrorks3c.bilivideo.com',
        ks32: 'upos-sz-mirrorks32.bilivideo.com',
        kodo: 'upos-sz-mirrorkodo.bilivideo.com',
        kodob: 'upos-sz-mirrorkodob.bilivideo.com',
        cos: 'upos-sz-mirrorcos.bilivideo.com',
        cosb: 'upos-sz-mirrorcosb.bilivideo.com',
        bos: 'upos-sz-mirrorbos.bilivideo.com',
        wcs: 'upos-sz-mirrorwcs.bilivideo.com',
        wcsb: 'upos-sz-mirrorwcsb.bilivideo.com',
        /** ä¸éCROS, éå¶UA */
        hw: 'upos-sz-mirrorhw.bilivideo.com',
        hwb: 'upos-sz-mirrorhwb.bilivideo.com',
        upbda2: 'upos-sz-upcdnbda2.bilivideo.com',
        upws: 'upos-sz-upcdnws.bilivideo.com',
        uptx: 'upos-sz-upcdntx.bilivideo.com',
        uphw: 'upos-sz-upcdnhw.bilivideo.com',
        js: 'upos-tf-all-js.bilivideo.com',
        hk: 'cn-hk-eq-bcache-01.bilivideo.com',
        akamai: 'upos-hz-mirrorakam.akamaized.net',
    };
    var Converters;
    (function (Converters) {
        // https://greasyfork.org/zh-CN/scripts/398535-bv2av/code
        const table = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF';
        const tr = {};
        for (var i = 0; i < 58; ++i) {
            tr[table[i]] = i;
        }
        const s = [11, 10, 3, 8, 4, 6];
        const xor = 177451812;
        const add = 8728348608;
        function bv2aid(bv) {
            let r = 0;
            for (let i = 0; i < 6; ++i) {
                r += tr[bv[s[i]]] * (58 ** i);
            }
            return String((r - add) ^ xor);
        }
        Converters.bv2aid = bv2aid;
        function aid2bv(x) {
            x = (x ^ xor) + add;
            const r = Array.from('BV1  4 1 7  ');
            for (let i = 0; i < 6; i++) {
                r[s[i]] = table[Math.trunc(x / (58 ** i)) % 58];
            }
            return r.join('');
        }
        Converters.aid2bv = aid2bv;
        function xml2obj(xml) {
            try {
                var obj = {}, text;
                var children = xml.children;
                if (children.length > 0) {
                    for (var i = 0; i < children.length; i++) {
                        var item = children.item(i);
                        var nodeName = item.nodeName;
                        if (typeof (obj[nodeName]) == "undefined") { // è¥æ¯æ°çå±æ§, åå¾objä¸­æ·»å 
                            obj[nodeName] = xml2obj(item);
                        }
                        else {
                            if (typeof (obj[nodeName].push) == "undefined") { // è¥èçå±æ§æ²¡æpushæ¹æ³, åæå±æ§æ¹æArray
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }
                            obj[nodeName].push(xml2obj(item));
                        }
                    }
                }
                else {
                    text = xml.textContent; // todo: å¼ºè½¬ä¸ºéç©ºæ¯å¦æé®é¢?
                    if (/^\d+(\.\d+)?$/.test(text)) {
                        obj = Number(text);
                    }
                    else if (text === 'true' || text === 'false') {
                        obj = Boolean(text);
                    }
                    else {
                        obj = text;
                    }
                }
                return obj;
            }
            catch (e) {
                util_error(e);
            }
        }
        Converters.xml2obj = xml2obj;
        function generateSign(params, key) {
            let s_keys = [];
            for (let i in params) {
                s_keys.push(i);
            }
            s_keys.sort();
            let data = "";
            for (let i = 0; i < s_keys.length; i++) {
                // encodeURIComponent è¿åçè½¬ä¹æ°å­å¿é¡»ä¸ºå¤§å( å¦ %2F )
                data += (data ? "&" : "") + s_keys[i] + "=" + encodeURIComponent(params[s_keys[i]]);
            }
            return {
                sign: hex_md5(data + key),
                params: data,
            };
        }
        Converters.generateSign = generateSign;
        /**
         * ç´æ¥æ¿æ¢hostå¤§å¤æ°æ¶åä¼¼ä¹ä¸è¡, å³ä½¿å¯ä»¥è§é¢çåè¾¨çä¹å¾ä½, åå æªç¥
         * @param replaceAkamai è¯¦è§:`BalhConfig.upos_replace_akamai`
         */
        function replaceUpos(data, host = uposMap.uptx, replaceAkamai) {
            var str = JSON.stringify(data);
            if (!str.includes("akamaized.net") || replaceAkamai) {
                str = str.replace(/:\\?\/\\?\/[^\/]+\\?\//g, `://${host}/`);
            }
            return JSON.parse(str);
        }
        Converters.replaceUpos = replaceUpos;
    })(Converters || (Converters = {}));

    /**
    * åå»ºåç´ çå¿«æ·æ¹æ³:
    * 1. type, props, children
    * 2. type, props, innerHTML
    * 3. 'text', text
    * @param type string, æ ç­¾å; ç¹æ®ç, è¥ä¸ºtext, åè¡¨ç¤ºåå»ºæå­, å¯¹åºçtä¸ºæå­çåå®¹
    * @param props object, å±æ§; ç¹æ®çå±æ§åæ: className, ç±»å; style, æ ·å¼, å¼ä¸º(æ ·å¼å, å¼)å½¢å¼çobject; event, å¼ä¸º(äºä»¶å, çå¬å½æ°)å½¢å¼çobject;
    * @param children array, å­åç´ ; ä¹å¯ä»¥ç´æ¥æ¯htmlææ¬;
    */
    function createElement(type, props, children) {
        let elem = null;
        if (type === "text") {
            return document.createTextNode(props);
        }
        else {
            elem = document.createElement(type);
        }
        for (let n in props) {
            if (n === "style") {
                for (let x in props.style) {
                    elem.style[x] = props.style[x];
                }
            }
            else if (n === "className") {
                elem.className = props[n];
            }
            else if (n === "event") {
                for (let x in props.event) {
                    elem.addEventListener(x, props.event[x]);
                }
            }
            else {
                // ç¨undefinedè¡¨ç¤ºä¸è®¾ç½®è¿ä¸ªå±æ§
                props[n] !== undefined && elem.setAttribute(n, props[n]);
            }
        }
        if (children) {
            if (typeof children === 'string') {
                elem.innerHTML = children;
            }
            else {
                for (let i = 0; i < children.length; i++) {
                    if (children[i] != null)
                        elem.appendChild(children[i]);
                }
            }
        }
        return elem;
    }

    // ç»§æ¿ç³»ç»ç[Error]å¨ES5ä¸å¯è½ä¸çæ, ä½¿ç¨è¿ä¸ªç±»æ¿ä»£
    // è¯¦è§: https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    class Exception {
        constructor(message) {
            this.message = message;
        }
        toString() {
            return `Exception: ${this.message}`;
        }
    }

    // å¨æäºæåµä¸, é¡µé¢ä¸­ä¼ä¿®æ¹window.Promise... ææä»¬è¦å¤ä»½ä¸ä¸åå§çPromise
    const Promise$1 = window.Promise;
    /**
    * æ¨¡ä»¿RxJavaä¸­çcomposeæä½ç¬¦
    * @param transformer è½¬æ¢å½æ°, ä¼ å¥Promise, è¿åPromise; è¥ä¸ºç©º, åå¥ä¹ä¸å
    */
    Promise$1.prototype.compose = function (transformer) {
        return transformer ? transformer(this) : this;
    };
    var Async;
    (function (Async) {
        function timeout(timeout) {
            return new Promise$1((resolve, reject) => {
                setTimeout(resolve, timeout);
            });
        }
        Async.timeout = timeout;
        class RetryUntilTimeoutException extends Exception {
        }
        // ç´å°æ»¡è¶³condition()ä¸ºæ­¢, ææ§è¡promiseCreator(), åå»ºPromise
        // https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop
        function retryUntil(condition, promiseCreator, retryCount = Number.MAX_VALUE, interval = 1) {
            const loop = (time) => {
                if (!condition()) {
                    if (time < retryCount) {
                        return timeout(interval).then(loop.bind(null, time + 1));
                    }
                    else {
                        return Promise$1.reject(new RetryUntilTimeoutException(`retryUntil timeout, condition: ${condition.toString()}`));
                    }
                }
                else {
                    return promiseCreator();
                }
            };
            return loop(0);
        }
        Async.retryUntil = retryUntil;
        /**
        * @param promiseCreator  åå»ºPromiseçå½æ°
        * @param resultTransformer ç¨äºåæ¢resultçå½æ°, è¿åæ°çresultæPromise
        * @param errorTransformer  ç¨äºåæ¢errorçå½æ°, è¿åæ°çerroræPromise, è¿åçPromiseå¯ä»¥åç¶ææ¢å¤...
        */
        function wrapper(promiseCreator, resultTransformer, errorTransformer) {
            return function (...args) {
                return new Promise$1((resolve, reject) => {
                    // log(promiseCreator, ...args)
                    promiseCreator(...args)
                        .then(r => resultTransformer ? resultTransformer(r) : r)
                        .then(r => resolve(r))
                        .catch(e => {
                        e = errorTransformer ? errorTransformer(e) : e;
                        if (!(e instanceof Promise$1)) {
                            // è¥è¿åå¼ä¸æ¯Promise, åè¡¨ç¤ºæ¯ä¸ä¸ªerror
                            e = Promise$1.reject(e);
                        }
                        e.then(r => resolve(r)).catch(e => reject(e));
                    });
                });
            };
        }
        Async.wrapper = wrapper;
        function requestByXhr(url) {
            return new Promise$1((resolve, reject) => {
                const req = new XMLHttpRequest();
                req.onreadystatechange = (event) => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            try {
                                resolve(JSON.parse(req.responseText));
                            }
                            catch (e) {
                                reject(req);
                            }
                        }
                        else {
                            reject(req);
                        }
                    }
                };
                req.withCredentials = true;
                let authorization = '';
                // çè®ºä¸æ¥è¯´ç½é¡µä¸­çè¯·æ±ä¸åºè¯¥å¸¦username&password, è¿éç´æ¥å°å®ä»¬æ¿æ¢æauthorization header...
                const originUrl = new URL(url, document.location.href);
                if (originUrl.username && originUrl.password) {
                    authorization = "Basic " + btoa(`${originUrl.username}:${originUrl.password}`);
                    // æ¸é¤username&password
                    originUrl.username = '';
                    originUrl.password = '';
                    url = originUrl.href;
                }
                req.open('GET', url);
                if (authorization) {
                    req.setRequestHeader("Authorization", authorization);
                }
                req.send();
            });
        }
        function requestByJQuery(url) {
            const creator = () => new Promise$1((resolve, reject) => {
                let options = { url: url };
                const originUrl = new URL(url, document.location.href);
                // åä¸
                if (originUrl.username && originUrl.password) {
                    options.headers = { 'Authorization': 'Basic ' + btoa(`${originUrl.username}:${originUrl.password}`) };
                    originUrl.username = '';
                    originUrl.password = '';
                    options.url = originUrl.href;
                }
                options.async === undefined && (options.async = true);
                options.xhrFields === undefined && (options.xhrFields = { withCredentials: true });
                options.success = function (data) {
                    resolve(data);
                };
                options.error = function (err) {
                    reject(err);
                };
                util_debug(`ajax: ${options.url}`);
                window.$.ajax(options);
            });
            // éè¯ 30 * 100 = 3s
            return retryUntil(() => {
                util_debug(`retryUntil.ajaxBy$: ${window.$}`);
                return window.$;
            }, creator, 30, 100);
        }
        function ajax(url) {
            // todo: ç´æ¥ç¨fetchå®ç°æ´ç®å?
            return requestByJQuery(url)
                .catch(e => {
                if (e instanceof RetryUntilTimeoutException) {
                    return requestByXhr(url);
                }
                else {
                    return Promise$1.reject(e);
                }
            });
        }
        Async.ajax = ajax;
        function jsonp(url) {
            return new Promise$1((resolve, reject) => {
                document.head.appendChild(createElement('script', {
                    src: url,
                    event: {
                        load: function () {
                            resolve();
                        },
                        error: function () {
                            reject();
                        }
                    }
                }));
            });
        }
        Async.jsonp = jsonp;
    })(Async || (Async = {}));

    function getCookies() {
        var map = document.cookie.split('; ').reduce(function (obj, item) {
            var entry = item.split('=');
            obj[entry[0]] = entry[1];
            return obj;
        }, {});
        return map;
    }
    function getCookie(key) {
        return getCookies()[key];
    }
    /**
     * @param key     key
     * @param value   ä¸ºundefinedæ¶, è¡¨ç¤ºå é¤cookie
     * @param options ä¸ºundefinedæ¶, è¡¨ç¤ºè¿ææ¶é´ä¸º3å¹´
     *          ä¸º''æ¶, è¡¨ç¤ºSession cookie
     *          ä¸ºæ°å­æ¶, è¡¨ç¤ºæå®è¿ææ¶é´
     *          ä¸º{}æ¶, è¡¨ç¤ºæå®ææçå±æ§
     * */
    function setCookie(key, value, options) {
        if (typeof options !== 'object') {
            options = {
                domain: '.bilibili.com',
                path: '/',
                'max-age': value === undefined ? 0 : (options === undefined ? 94608000 : options)
            };
        }
        var c = Object.keys(options).reduce(function (str, key) {
            return str + '; ' + key + '=' + options[key];
        }, key + '=' + value);
        document.cookie = c;
        return c;
    }
    const target = {
        set: setCookie,
        get: getCookie,
        all: getCookies,
    };
    /**
     * æ¨¡ä»¿localStorage
     */
    const cookieStorage = new Proxy(target, {
        get: function (target, prop) {
            if (prop in target)
                return target[prop];
            if (typeof prop !== 'string')
                throw new TypeError(`unsupported prop=${String(prop)}`);
            return getCookie(prop);
        },
        set: function (target, prop, value) {
            if (typeof prop !== 'string')
                return false;
            setCookie(prop, value);
            return true;
        }
    });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    var Func;
    (function (Func) {
        function noop() { }
        Func.noop = noop;
        function runCatching(func, onError) {
            let ret = function () {
                try {
                    return func.apply(this, arguments);
                }
                catch (e) {
                    if (onError)
                        return onError(e); // onErrorå¯ä»¥å¤çæ¥éæ¶çè¿åå¼
                    // å¦åæå°log, å¹¶è¿åundefined
                    util_error('Exception while run %o: %o\n%o', func, e, e.stack);
                    return undefined;
                }
            };
            // å½æ°çnameå±æ§æ¯ä¸å¯å+å¯éç½®ç, æéè¦å¦ä¸ä»£ç å®ç°ç±»ä¼¼è¿æ ·çææ: ret.name = func.name
            // å¨Edgeä¸å¿åå½æ°çnameçæè¿°ç¬¦ä¼ä¸ºundefined, éè¦åç¹æ®å¤ç, fuck
            let funcNameDescriptor = Object.getOwnPropertyDescriptor(func, 'name') || {
                value: '',
                writable: false,
                configurable: true,
            };
            Object.defineProperty(ret, 'name', funcNameDescriptor);
            return ret;
        }
        Func.runCatching = runCatching;
        Func.safeGet = (code) => {
            return eval(`
            (()=>{
                try{
                    return ${code}
                }catch(e){
                    console.warn(e.toString())
                    return null
                }
            })()
            `);
        };
    })(Func || (Func = {}));
    /**
     * TSä¸æ¯æå¯éé¾èµå¼, è¯¦è§: https://github.com/tc39/proposal-optional-chaining#not-supported
     * å¯ä»¥ä½¿ç¨è¯¥æ¹æ³ç®åä¹¦å
     * */
    function ifNotNull(value, block) {
        if (value != null) {
            block(value);
        }
    }

    const util_page = {
        player: () => location.href.includes('www.bilibili.com/blackboard/html5player'),
        // å¨avé¡µé¢ä¸­çiframeæ ç­¾å½¢å¼çplayer
        player_in_av: Func.runCatching(() => util_page.player() && window.top.location.href.includes('www.bilibili.com/video/av'), (e) => util_debug(e)),
        av: () => location.href.includes('www.bilibili.com/video/av') || location.href.includes('www.bilibili.com/video/BV'),
        av_new: function () { return this.av() && (window.__playinfo__ || window.__playinfo__origin); },
        bangumi: () => location.href.match(new RegExp('^https?://bangumi\\.bilibili\\.com/anime/\\d+/?$')),
        bangumi_md: () => location.href.includes('www.bilibili.com/bangumi/media/md'),
        // movieé¡µé¢ä½¿ç¨window.aid, ä¿å­å½åé¡µé¢avå·
        movie: () => location.href.includes('bangumi.bilibili.com/movie/'),
        // animeé¡µé¢ä½¿ç¨window.season_id, ä¿å­å½åé¡µé¢seasonå·
        anime: () => location.href.match(new RegExp('^https?://bangumi\\.bilibili\\.com/anime/\\d+/play.*')),
        anime_ep: () => location.href.includes('www.bilibili.com/bangumi/play/ep'),
        anime_ss: () => location.href.includes('www.bilibili.com/bangumi/play/ss'),
        anime_ep_m: () => location.href.includes('m.bilibili.com/bangumi/play/ep'),
        anime_ss_m: () => location.href.includes('m.bilibili.com/bangumi/play/ss'),
        new_bangumi: () => location.href.includes('www.bilibili.com/bangumi'),
        watchroom: () => location.href.includes("www.bilibili.com/watchroom"),
        get ssId() {
            var _a, _b;
            return (_b = (_a = window.__INITIAL_STATE__) === null || _a === void 0 ? void 0 : _a.mediaInfo) === null || _b === void 0 ? void 0 : _b.ssId;
        },
    };

    const cookies = cookieStorage.all(); // ç¼å­çcookies
    const balh_config = new Proxy({ /*ä¿å­configçå¯¹è±¡*/}, {
        get: function (target, prop) {
            if (typeof prop !== 'string')
                throw new TypeError(`unsupported prop: ${String(prop)}`);
            if (prop === 'server') {
                const server_inner = balh_config.server_inner;
                // ä¿è¯balh_config.serverä¸å®æåbiliplus
                const server = server_inner === r.const.server.CUSTOM ? r.const.server.defaultServer() : server_inner;
                return server;
            }
            else if (prop === 'server_bilibili_api_proxy') {
                return r.regex.bilibili_api_proxy.test(balh_config.server_custom) ? balh_config.server_custom : undefined;
            }
            if (prop in target) {
                return target[prop];
            }
            else { // è¥targetä¸­ä¸å­å¨æå®çå±æ§, åä»ç¼å­çcookiesä¸­è¯»å, å¹¶ä¿å­å°targetä¸­
                let value = cookies['balh_' + prop];
                switch (prop) {
                    case 'server_inner':
                        value = value || r.const.server.CUSTOM;
                        break;
                    case 'server_custom':
                        value = value || '';
                        break;
                    case 'server_custom_tw':
                        value = value || '';
                        break;
                    case 'server_custom_hk':
                        value = value || '';
                        break;
                    case 'server_custom_cn':
                        value = value || '';
                        break;
                    case 'server_custom_th':
                        value = value || '';
                        break;
                    case 'mode':
                        value = value || (balh_config.blocked_vip ? r.const.mode.REDIRECT : r.const.mode.DEFAULT);
                        break;
                    case 'flv_prefer_ws':
                        value = r.const.FALSE; // å³é­è¯¥éé¡¹
                        break;
                    case 'is_closed':
                        if (value == null) {
                            value = FALSE; // é»è®¤ä¸ºfalse
                        }
                        break;
                }
                target[prop] = value;
                return value;
            }
        },
        set: function (target, prop, value) {
            if (typeof prop !== 'string') {
                return false;
            }
            target[prop] = value; // æ´æ°å¼
            cookieStorage['balh_' + prop] = value; // æ´æ°cookieä¸­çå¼
            return true;
        }
    });
    // è¿ç§»å°èªå®ä¹ä»£çæå¡å¨, åªä¼æ§è¡ä¸æ¬¡
    if (util_page.new_bangumi() && !localStorage.balh_migrate_to_2) {
        localStorage.balh_migrate_to_2 = r.const.TRUE;
        balh_config.server_inner = r.const.server.CUSTOM;
        balh_config.is_closed = FALSE;
        util_debug('è¿ç§»éç½®å®æ');
    }
    function isClosed() {
        return balh_config.is_closed || !balh_config.server_custom;
    }

    /**
     * æå»º mobi api è§£æé¾æ¥
     * host ä¸¾ä¾: 'https://example.com'
     *
     * åèï¼https://github.com/kghost/bilibili-area-limit/issues/16
     */
    function getMobiPlayUrl(originUrl, host, area) {
        // åææ³°åº url
        if (area == 'th') {
            return `${host}/intl/gateway/v2/ogv/playurl?${generateMobiPlayUrlParams(originUrl, area)}`;
        }
        // åæå®æ´ mobi api url
        return `${host}/pgc/player/api/playurl?${generateMobiPlayUrlParams(originUrl, area)}`;
    }
    function generateMobiPlayUrlParams(originUrl, area) {
        // æååæ°ä¸ºæ°ç»
        let a = originUrl.split('?')[1].split('&');
        // åæ°æ°ç»è½¬æ¢ä¸ºå¯¹è±¡
        let theRequest = {};
        for (let i = 0; i < a.length; i++) {
            let key = a[i].split("=")[0];
            let value = a[i].split("=")[1];
            // ç»å¯¹è±¡èµå¼
            theRequest[key] = value;
        }
        // è¿½å  mobi api éè¦çåæ°
        theRequest.access_key = localStorage.access_key;
        if (area === 'th') {
            theRequest.area = 'th';
            theRequest.appkey = '7d089525d3611b1c';
            theRequest.build = '1001310';
            theRequest.mobi_app = 'bstar_a';
            theRequest.platform = 'android';
        }
        else {
            theRequest.area = area;
            theRequest.appkey = '07da50c9a0bf829f';
            theRequest.build = '5380700';
            theRequest.device = 'android';
            theRequest.mobi_app = 'android_b';
            theRequest.platform = 'android_b';
            theRequest.buvid = 'XY418E94B89774E201E22C5B709861B7712DD';
            // theRequest.fnval = '0'; // å¼ºå¶ FLV
            theRequest.track_path = '0';
        }
        theRequest.force_host = '2'; // å¼ºå¶é³è§é¢è¿å https
        theRequest.ts = `${~~(Date.now() / 1000)}`;
        // æéåæ°æ°ç»
        let param_wanted = ['area', 'access_key', 'appkey', 'build', 'buvid', 'cid', 'device', 'ep_id', 'fnval', 'fnver', 'force_host', 'fourk', 'mobi_app', 'platform', 'qn', 's_locale', 'season_id', 'track_path', 'ts'];
        // çæ mobi api åæ°å­ç¬¦ä¸²
        let mobi_api_params = '';
        for (let i = 0; i < param_wanted.length; i++) {
            if (theRequest.hasOwnProperty(param_wanted[i])) {
                mobi_api_params += param_wanted[i] + `=` + theRequest[param_wanted[i]] + `&`;
            }
        }
        // åå¤ææ
        let plaintext = '';
        if (area === 'th') {
            plaintext = mobi_api_params.slice(0, -1) + `acd495b248ec528c2eed1e862d393126`;
        }
        else {
            plaintext = mobi_api_params.slice(0, -1) + `25bdede4e1581c836cab73a48790ca6e`;
        }
        // çæ sign
        let ciphertext = hex_md5(plaintext);
        return `${mobi_api_params}sign=${ciphertext}`;
    }
    function fixMobiPlayUrlJson(originJson) {
        return __awaiter(this, void 0, void 0, function* () {
            const codecsMap = {
                30112: 'avc1.640028',
                30102: 'hev1.1.6.L120.90',
                30080: 'avc1.640028',
                30077: 'hev1.1.6.L120.90',
                30064: 'avc1.64001F',
                30066: 'hev1.1.6.L120.90',
                30032: 'avc1.64001E',
                30033: 'hev1.1.6.L120.90',
                30011: 'hev1.1.6.L120.90',
                30016: 'avc1.64001E',
                30280: 'mp4a.40.2',
                30232: 'mp4a.40.2',
                30216: 'mp4a.40.2',
                'nb2-1-30016': 'avc1.64001E',
                'nb2-1-30032': 'avc1.64001F',
                'nb2-1-30064': 'avc1.640028',
                'nb2-1-30080': 'avc1.640032',
                'nb2-1-30216': 'mp4a.40.2',
                'nb2-1-30232': 'mp4a.40.2',
                'nb2-1-30280': 'mp4a.40.2' // APPæº é«ç é³é¢
            };
            const resolutionMap = {
                30112: [1920, 1080],
                30102: [1920, 1080],
                30080: [1920, 1080],
                30077: [1920, 1080],
                30064: [1280, 720],
                30066: [1280, 720],
                30032: [852, 480],
                30033: [852, 480],
                30011: [640, 360],
                30016: [640, 360],
            };
            const frameRateMap = {
                30112: '16000/672',
                30102: '16000/672',
                30080: '16000/672',
                30077: '16000/656',
                30064: '16000/672',
                30066: '16000/656',
                30032: '16000/672',
                30033: '16000/656',
                30011: '16000/656',
                30016: '16000/672'
            };
            let segmentBaseMap = {};
            function getId(url, default_value, get_filename = false) {
                if (get_filename) {
                    // ä½ä¸ºSegmentBaseMapçKeyï¼å¨åä¸ä¸ªé¡µé¢ä¸åæ¢éæ°ä¸è³äºåºé
                    let path = url.split('?')[0];
                    let pathArr = path.split('/');
                    return pathArr[pathArr.length - 1].replace('.m4s', ''); // è¿åæä»¶å
                }
                let i = /(nb2-1-)?\d{5}\.m4s/.exec(url);
                if (i !== null) {
                    return i[0].replace('.m4s', '');
                }
                else {
                    return default_value;
                }
            }
            function getSegmentBase(url, id, range = '5000') {
                return new Promise((resolve, reject) => {
                    // ä» window ä¸­è¯»åå·²æçå¼
                    if (window.__segment_base_map__) {
                        if (window.__segment_base_map__.hasOwnProperty(id)) {
                            // console.log('SegmentBase read from cache ', window.__segment_base_map__[id], 'id=', id)
                            return resolve(window.__segment_base_map__[id]);
                        }
                    }
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', url, true);
                    // TV å¨ç» range éå¸¸å¨ 4000~5000ï¼å§åºçå¨ç»å¤§æ¦ 14000+
                    xhr.setRequestHeader('Range', `bytes=0-${range}`); // ä¸è½½å 5000 å­èæ°æ®ç¨äºæ¥æ¾ sidx ä½ç½®
                    xhr.responseType = 'arraybuffer';
                    let data;
                    xhr.onload = function (oEvent) {
                        data = new Uint8Array(xhr.response);
                        let hex_data = Array.prototype.map.call(data, x => ('00' + x.toString(16)).slice(-2)).join(''); // è½¬æ¢æ hex
                        let indexRangeStart = hex_data.indexOf('73696478') / 2 - 4; // 73696478 æ¯ 'sidx' ç hex ï¼åé¢è¿æ 4 ä¸ªå­èææ¯ sidx çå¼å§
                        let indexRagneEnd = hex_data.indexOf('6d6f6f66') / 2 - 5; // 6d6f6f66 æ¯ 'moof' ç hexï¼åé¢è¿æ 4 ä¸ªå­èææ¯ moof çå¼å§ï¼-1ä¸ºsidxç»æä½ç½®
                        let result = ['0-' + String(indexRangeStart - 1), String(indexRangeStart) + '-' + String(indexRagneEnd)];
                        // å¨å­å¨ windowï¼åæ¢æ¸æ°åº¦ä¸ç¨éæ°è§£æ
                        if (window.__segment_base_map__) {
                            window.__segment_base_map__[id] = result;
                        }
                        else {
                            window.__segment_base_map__ = {};
                            window.__segment_base_map__[id] = result;
                        }
                        // console.log('get SegmentBase ', result, 'id=', id);
                        resolve(result);
                    };
                    xhr.send(null); // åéè¯·æ±
                });
            }
            let result = JSON.parse(JSON.stringify(originJson));
            result.dash.duration = Math.round(result.timelength / 1000);
            result.dash.minBufferTime = 1.5;
            result.dash.min_buffer_time = 1.5;
            // å¼æ­¥æå»º segmentBaseMap
            let taskList = [];
            // SegmentBase æå¤§ range å duration çæ¯å¼å¤§æ¦å¨ 2.5~3.2ï¼ä¿é©è¿éå 3.5
            // let range = Math.round(result.dash.duration * 3.5).toString()
            // ä¹±ç range å¯¼è´æ³¡é¢çªæ­ä¸åº
            result.dash.video.forEach((video) => {
                if (video.backupUrl.length > 0 && video.backupUrl[0].indexOf('akamaized.net') > -1) {
                    // ææ¶åè¿å bcache å°å, ç´æ¥è®¿é® bcache CDN ä¼æ¥ 403ï¼å¦æå¤ç¨å°åæ akamï¼æ¿æ¢ä¸º akam
                    video.baseUrl = video.backupUrl[0];
                }
                taskList.push(getSegmentBase(video.baseUrl, getId(video.baseUrl, '30080', true)));
            });
            result.dash.audio.forEach((audio) => {
                if (audio.backupUrl.length > 0 && audio.backupUrl[0].indexOf('akamaized.net') > -1) {
                    audio.baseUrl = audio.backupUrl[0];
                }
                taskList.push(getSegmentBase(audio.baseUrl, getId(audio.baseUrl, '30080', true)));
            });
            yield Promise.all(taskList);
            if (window.__segment_base_map__)
                segmentBaseMap = window.__segment_base_map__;
            // å¡«åè§é¢æµæ°æ®
            result.dash.video.forEach((video) => {
                let video_id = getId(video.baseUrl, '30280');
                if (!codecsMap.hasOwnProperty(video_id)) {
                    // https://github.com/ipcjs/bilibili-helper/issues/775
                    // æ³°åºçè§é¢URLä¸åå« id äº
                    video_id = (30000 + video.id).toString();
                }
                video.codecs = codecsMap[video_id];
                let segmentBaseId = getId(video.baseUrl, '30280', true);
                video.segment_base = {
                    initialization: segmentBaseMap[segmentBaseId][0],
                    index_range: segmentBaseMap[segmentBaseId][1]
                };
                video.SegmentBase = {
                    Initialization: segmentBaseMap[segmentBaseId][0],
                    indexRange: segmentBaseMap[segmentBaseId][1]
                };
                video_id = video_id.replace('nb2-1-', '');
                video.width = resolutionMap[video_id][0];
                video.height = resolutionMap[video_id][1];
                video.mimeType = 'video/mp4';
                video.mime_type = 'video/mp4';
                video.frameRate = frameRateMap[video_id];
                video.frame_rate = frameRateMap[video_id];
                video.sar = "1:1";
                video.startWithSAP = 1;
                video.start_with_sap = 1;
            });
            // å¡«åé³é¢æµæ°æ®
            result.dash.audio.forEach((audio) => {
                let audio_id = getId(audio.baseUrl, '30280');
                if (!codecsMap.hasOwnProperty(audio_id)) {
                    // https://github.com/ipcjs/bilibili-helper/issues/775
                    // æ³°åºçé³é¢URLä¸åå« id äº
                    audio_id = audio.id.toString();
                }
                let segmentBaseId = getId(audio.baseUrl, '30280', true);
                audio.segment_base = {
                    initialization: segmentBaseMap[segmentBaseId][0],
                    index_range: segmentBaseMap[segmentBaseId][1]
                };
                audio.SegmentBase = {
                    Initialization: segmentBaseMap[segmentBaseId][0],
                    indexRange: segmentBaseMap[segmentBaseId][1]
                };
                audio.codecs = codecsMap[audio_id];
                audio.mimeType = 'audio/mp4';
                audio.mime_type = 'audio/mp4';
                audio.frameRate = '';
                audio.frame_rate = '';
                audio.height = 0;
                audio.width = 0;
            });
            return result;
        });
    }
    function fixThailandPlayUrlJson(originJson) {
        return __awaiter(this, void 0, void 0, function* () {
            let origin = JSON.parse(JSON.stringify(originJson));
            let result = {
                'format': 'flv720',
                'type': 'DASH',
                'result': 'suee',
                'video_codecid': 7,
                'no_rexcode': 0,
                'code': origin.code,
                'message': +origin.message,
                'timelength': origin.data.video_info.timelength,
                'quality': origin.data.video_info.quality,
                'accept_format': 'hdflv2,flv,flv720,flv480,mp4',
            };
            let dash = {
                'duration': 0,
                'minBufferTime': 0.0,
                'min_buffer_time': 0.0,
                'audio': []
            };
            // å¡«åé³é¢æµæ°æ®
            origin.data.video_info.dash_audio.forEach((audio) => {
                audio.backupUrl = [];
                audio.backup_url = [];
                audio.base_url = audio.base_url.replace('http://', 'https://');
                audio.baseUrl = audio.base_url;
                dash.audio.push(audio);
            });
            // å¡«åè§é¢æµæ°æ®
            let accept_quality = [];
            let accept_description = [];
            let support_formats = [];
            let dash_video = [];
            origin.data.video_info.stream_list.forEach((stream) => {
                support_formats.push(stream.stream_info);
                accept_quality.push(stream.stream_info.quality);
                accept_description.push(stream.stream_info.new_description);
                // åªå å¥æè§é¢é¾æ¥çæ°æ®
                if (stream.dash_video && stream.dash_video.base_url) {
                    stream.dash_video.backupUrl = [];
                    stream.dash_video.backup_url = [];
                    stream.dash_video.base_url = stream.dash_video.base_url.replace('http://', 'https://');
                    stream.dash_video.baseUrl = stream.dash_video.base_url;
                    stream.dash_video.id = stream.stream_info.quality;
                    dash_video.push(stream.dash_video);
                }
            });
            dash['video'] = dash_video;
            result['accept_quality'] = accept_quality;
            result['accept_description'] = accept_description;
            result['support_formats'] = support_formats;
            result['dash'] = dash;
            // ä¸é¢åæ°åèªå®è¾¾(ep359333)ï¼æ»ä¹ä¸è¡èå¡è¿å»ï¼
            result['fnval'] = 80;
            result['fnver'] = 0;
            result['status'] = 2;
            result['vip_status'] = 1;
            result['vip_type'] = 2;
            result['seek_param'] = 'start';
            result['seek_type'] = 'offset';
            result['bp'] = 0;
            result['from'] = 'local';
            result['has_paid'] = false;
            result['is_preview'] = 0;
            return fixMobiPlayUrlJson(result);
        });
    }
    var BiliPlusApi;
    (function (BiliPlusApi) {
        BiliPlusApi.view = function (aid, update = true) {
            return Async.ajax(`${balh_config.server}/api/view?id=${aid}&update=${update}${access_key_param_if_exist()}`);
        };
        BiliPlusApi.season = function (season_id) {
            return Async.ajax(`${balh_config.server}/api/bangumi?season=${season_id}${access_key_param_if_exist()}`);
        };
        // https://www.biliplus.com/BPplayurl.php?otype=json&cid=30188339&module=bangumi&qn=16&src=vupload&vid=vupload_30188339
        // qn = 16, è½ç
        BiliPlusApi.playurl = function (cid, qn = 16, bangumi = true) {
            return Async.ajax(`${balh_config.server}/BPplayurl.php?otype=json&cid=${cid}${bangumi ? '&module=bangumi' : ''}&qn=${qn}&src=vupload&vid=vupload_${cid}${access_key_param_if_exist()}`);
        };
        // https://www.biliplus.com/api/h5play.php?tid=33&cid=31166258&type=vupload&vid=vupload_31166258&bangumi=1
        BiliPlusApi.playurl_for_mp4 = (cid, bangumi = true) => Async.ajax(`${balh_config.server}/api/h5play.php?tid=33&cid=${cid}&type=vupload&vid=vupload_${cid}&bangumi=${bangumi ? 1 : 0}${access_key_param_if_exist()}`)
            .then(text => (text.match(/srcUrl=\{"mp4":"(https?.*)"\};/) || ['', ''])[1]); // æåmp4çurl
    })(BiliPlusApi || (BiliPlusApi = {}));

    const access_key_param_if_exist = function (isKghost = false) {
        // access_keyæ¯ç±Bç«éªè¯ç, Bç«å¸å·åBPå¸å·ä¸åæ¶, access_keyæ æ
        // kghostçæå¡å¨ä½¿ç¨çBç«å¸å·, access_keyææ
        return (localStorage.access_key && (!balh_config.blocked_vip || isKghost)) ? `&access_key=${localStorage.access_key}` : '';
    };
    const platform_android_param_if_app_only = function () {
        return window.__balh_app_only__ ? '&platform=android&fnval=0' : '';
    };
    class BiliBiliApi {
        constructor(server = '//api.bilibili.com') {
            this.server = server;
        }
        getSeasonInfoByEpId(ep_id) {
            return Async.ajax(`${this.server}/pgc/view/web/season?ep_id=${ep_id}`);
        }
        getSeasonInfo(season_id) {
            return Async.ajax(`${this.server}/pgc/view/web/season?season_id=${season_id}`);
        }
        getSeasonInfoByEpSsIdOnBangumi(ep_id, season_id) {
            return Async.ajax('//bangumi.bilibili.com/view/web_api/season?' + (ep_id != '' ? `ep_id=${ep_id}` : `season_id=${season_id}`));
        }
        getSeasonInfoByEpSsIdOnThailand(ep_id, season_id) {
            const params = '?' + (ep_id != '' ? `ep_id=${ep_id}` : `season_id=${season_id}`) + `&mobi_app=bstar_a&s_locale=zh_SG`;
            const newParams = generateMobiPlayUrlParams(params, 'th');
            return Async.ajax(`${this.server}/intl/gateway/v2/ogv/view/app/season?` + newParams);
        }
    }

    var ui;
    (function (ui) {
        ui.alert = function (message, resolve, reject) {
            setTimeout(() => {
                if (resolve) {
                    if (window.confirm(message)) {
                        resolve();
                    }
                    else {
                        if (reject) {
                            reject();
                        }
                    }
                }
                else {
                    window.alert(message);
                }
            }, 500);
        };
        function prompt(message, defaultValue) {
            return __awaiter(this, void 0, void 0, function* () {
                yield Async.timeout(500);
                return window.prompt(message, defaultValue);
            });
        }
        ui.prompt = prompt;
        ui.copy = function (text, textarea) {
            textarea.value = text;
            textarea.select();
            try {
                return document.execCommand('copy');
            }
            catch (e) {
                util_error('å¤å¶ææ¬åºé', e);
            }
            return false;
        };
        /**
         * - param.content: åå®¹åç´ æ°ç»/HTML
         * - param.showConfirm: æ¯å¦æ¾ç¤ºç¡®å®æé®
         * - param.confirmBtn: ç¡®å®æé®çæå­
         * - param.onConfirm: ç¡®å®åè°
         * - param.onClose: å³é­åè°
         */
        ui.pop = function (param) {
            var _a;
            if (typeof param.content === 'string') {
                let template = createElement('template');
                template.innerHTML = param.content.trim();
                param.content = Array.from(template.content.childNodes);
            }
            else if (!(param.content instanceof Array)) {
                util_log(`param.content(${param.content}) ä¸æ¯æ°ç»`);
                return;
            }
            if (document.getElementById('AHP_Notice_style') == null) {
                let noticeWidth = Math.min(500, innerWidth - 40);
                document.head.appendChild(createElement('style', { id: 'AHP_Notice_style' }, [createElement('text', `#AHP_Notice{ line-height:normal;position:fixed;left:0;right:0;top:0;height:0;z-index:20000;transition:.5s;cursor:default;pointer-events:none } .AHP_down_banner{ margin:2px;padding:2px;color:#FFFFFF;font-size:13px;font-weight:bold;background-color:green } .AHP_down_btn{ margin:2px;padding:4px;color:#1E90FF;font-size:14px;font-weight:bold;border:#1E90FF 2px solid;display:inline-block;border-radius:5px } body.ABP-FullScreen{ overflow:hidden } @keyframes pop-iframe-in{0%{opacity:0;transform:scale(.7);}100%{opacity:1;transform:scale(1)}} @keyframes pop-iframe-out{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(.7)}} #AHP_Notice>div{ position:absolute;bottom:0;left:0;right:0;font-size:15px } #AHP_Notice>div>div{ border:1px #AAA solid;width:${noticeWidth}px;margin:0 auto;padding:20px 10px 5px;background:#EFEFF4;color:#000;border-radius:5px;box-shadow:0 0 5px -2px;pointer-events:auto;white-space:pre-wrap } #AHP_Notice>div>div *{ margin:5px 0; } #AHP_Notice input[type=text]{ border: none;border-bottom: 1px solid #AAA;width: 60%;background: transparent } #AHP_Notice input[type=text]:active{ border-bottom-color:#4285f4 } #AHP_Notice input[type=button] { border-radius: 2px; border: #adadad 1px solid; padding: 3px; margin: 0 5px; min-width:50px } #AHP_Notice input[type=button]:hover { background: #FFF; } #AHP_Notice input[type=button]:active { background: #CCC; } .noflash-alert{display:none}`)]));
            }
            (_a = document.querySelector('#AHP_Notice')) === null || _a === void 0 ? void 0 : _a.remove();
            let div = createElement('div', { id: 'AHP_Notice' });
            let children = [];
            if (param.showConfirm || param.confirmBtn || param.onConfirm) {
                children.push(createElement('input', { value: param.confirmBtn || _t('ok'), type: 'button', className: 'confirm', event: { click: param.onConfirm } }));
            }
            children.push(createElement('input', {
                value: _t('close'), type: 'button', className: 'close', event: {
                    click: function () {
                        param.onClose && param.onClose();
                        div.style.height = '0';
                        setTimeout(function () { div.remove(); }, 500);
                    }
                }
            }));
            div.appendChild(createElement('div', {}, [createElement('div', {}, param.content.concat([createElement('hr'), createElement('div', { style: { textAlign: 'right' } }, children)]))]));
            document.body.appendChild(div);
            div.style.height = div.firstChild.offsetHeight + 'px';
        };
        ui.playerMsg = function (message) {
            const msg = Objects.stringify(message);
            util_info('player msg:', msg);
            const $panel = document.querySelector('.bilibili-player-video-panel-text');
            if ($panel) {
                let stage = $panel.children.length + 1000; // å 1000åBç«èªå·±åéæ¶æ¯çstageåºå«å¼æ¥
                $panel.appendChild(createElement('div', { className: 'bilibili-player-video-panel-row', stage: stage }, [createElement('text', `[${GM_info.script.name}] ${msg}`)]));
            }
        };
        ui.popFrame = function (iframeSrc) {
            if (!document.getElementById('balh-style-login')) {
                var style = document.createElement('style');
                style.id = 'balh-style-login';
                document.head.appendChild(style).innerHTML = '@keyframes pop-iframe-in{0%{opacity:0;transform:scale(.7);}100%{opacity:1;transform:scale(1)}}@keyframes pop-iframe-out{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(.7)}}.GMBiliPlusCloseBox{position:absolute;top:5%;right:8%;font-size:40px;color:#FFF}';
            }
            var div = document.createElement('div');
            div.id = 'GMBiliPlusLoginContainer';
            div.innerHTML = '<div style="position:fixed;top:0;left:0;z-index:10000;width:100%;height:100%;background:rgba(0,0,0,.5);animation-fill-mode:forwards;animation-name:pop-iframe-in;animation-duration:.5s;cursor:pointer"><iframe src="' + iframeSrc + '" style="background:#e4e7ee;position:absolute;top:10%;left:10%;width:80%;height:80%"></iframe><div class="GMBiliPlusCloseBox">Ã</div></div>';
            div.firstChild.addEventListener('click', function (e) {
                if (e.target === this || e.target.className === 'GMBiliPlusCloseBox') {
                    if (!confirm('ç¡®è®¤å³é­ï¼')) {
                        return false;
                    }
                    div.firstChild.style.animationName = 'pop-iframe-out';
                    setTimeout(function () {
                        div.remove();
                    }, 5e2);
                }
            });
            document.body.appendChild(div);
        };
    })(ui || (ui = {}));

    const RUN_AT = {
        // readyState = loading
        LOADING: -1,
        // readyState = interactive
        DOM_LOADED: 0,
        // readyState = interactive
        DOM_LOADED_AFTER: 1,
        // readyState = complete
        COMPLETE: 2,
    };
    const PRIORITY = {
        FIRST: 1e6,
        HIGH: 1e5,
        BEFORE: 1e3,
        DEFAULT: 0,
        AFTER: -1e3,
        LOW: -1e5,
        LAST: -1e6,
    };
    const callbacks = {
        [RUN_AT.LOADING]: [],
        [RUN_AT.DOM_LOADED]: [],
        [RUN_AT.DOM_LOADED_AFTER]: [],
        [RUN_AT.COMPLETE]: [],
    };
    function showWarn() {
        util_warn(`${GM_info.script.name} ${window.document.readyState} å è½½æ¶æºä¸å¤ªå¯¹, ä¸è½ä¿è¯æ­£å¸¸å·¥ä½\n\n1. å°è¯å·æ°é¡µé¢, éè½½èæ¬\n2. è¥ä¾ç¶åºç°è¯¥æç¤º, è¯·å°è¯'ç¡¬æ§éæ°å è½½'(å¿«æ·é®ä¸è¬ä¸ºctrl+f5)\n3. è¥è¿æ¯åºç°è¯¥æç¤º, è¯·å°è¯å³é­åéæ°æå¼è¯¥é¡µé¢\n4. è¥åå¤åºç°è¯¥æç¤º, é£ä¹æ²¡å¶ä»åæ³äº_(:3ãâ )_\n`);
    }
    let atRun; // ç¨æ¥è¡¨ç¤ºå½åè¿è¡å°ä»ä¹ç¶æ
    switch (window.document.readyState) {
        case 'loading':
            atRun = RUN_AT.LOADING;
            break;
        case 'interactive':
            showWarn();
            atRun = RUN_AT.DOM_LOADED_AFTER;
            break;
        case 'complete':
            showWarn();
            atRun = RUN_AT.COMPLETE;
            break;
    }
    util_debug(`atRun: ${atRun}, ${window.document.readyState}`);
    const util_page_valid = () => true; // æ¯å¦è¦è¿è¡
    const dclCreator = function (runAt) {
        let dcl = function () {
            util_debug(`atRun: ${runAt}, ${window.document.readyState}`);
            atRun = runAt; // æ´æ°è¿è¡ç¶æ
            const valid = util_page_valid();
            // ä¼åçº§ä»å¤§å°å°, indexä»å°å°å¤§, æåº
            callbacks[runAt].sort((a, b) => b.priority - a.priority || a.index - b.index)
                .filter(item => valid )
                .forEach(item => item.func(valid));
        };
        return dcl;
    };
    window.document.addEventListener('DOMContentLoaded', dclCreator(RUN_AT.DOM_LOADED));
    window.addEventListener('DOMContentLoaded', dclCreator(RUN_AT.DOM_LOADED_AFTER));
    window.addEventListener('load', dclCreator(RUN_AT.COMPLETE));
    const util_init = function (func, priority = PRIORITY.DEFAULT, runAt = RUN_AT.DOM_LOADED, always = false) {
        func = Func.runCatching(func);
        if (atRun < runAt) { // è¥è¿æ²¡è¿è¡å°runAtæå®çç¶æ, åæ¾å°éåéå»
            callbacks[runAt].push({
                priority,
                index: callbacks[runAt].length,
                func,
                always
            });
        }
        else { // å¦åç´æ¥è¿è¡, TODO: è¿ç§æåµä¸ä¼åçº§å¾ä¸å°ä¿è¯...
            let valid = util_page_valid();
            {
                func(valid);
            }
        }
    };
    util_init.RUN_AT = RUN_AT;
    util_init.PRIORITY = PRIORITY;

    // @ts-check-off
    /**
     * éç¥æ¨¡å å½çªèª YAWF ç¨æ·èæ¬ ç¡¬å¹¿ï¼https://tiansh.github.io/yawf/ 
     * 
     * ç±äºç®ååºæ¬ä¸æ²¡ç¨ä¸, ææå¾æ æ³¨ç±»å(-_-#)
     * */

    var available = {};
    var shown = [];
    var use = {
        'hasPermission': function () { return null; },
        'requestPermission': function (callback) { return null; },
        'hideNotification': function (notify) { return null; },
        'showNotification': function (id, title, body, icon, delay, onclick) { return null; }
    };

    // webkitNotifications
    // Tab Notifier æ©å±å®ç°æ­¤æ¥å£ï¼ä½æ¾ç¤ºçæ¡é¢æç¤ºæå¤åªè½æ¾ç¤ºåä¸¤è¡
    if (typeof webkitNotifications !== 'undefined') available.webkit = {
        'hasPermission': function () {
            return [true, null, false][webkitNotifications.checkPermission()];
        },
        'requestPermission': function (callback) {
            return webkitNotifications.requestPermission(callback);
        },
        'hideNotification': function (notify) {
            notify.cancel();
            afterHideNotification(notify);
        },
        'showNotification': function (id, title, body, icon, delay, onclick) {
            var notify = webkitNotifications.createNotification(icon, title, body);
            if (delay && delay > 0) notify.addEventListener('display', function () {
                setTimeout(function () { hideNotification(notify); }, delay);
            });
            if (onclick) notify.addEventListener('click', function () {
                onclick.apply(this, arguments);
                hideNotification(notify);
            });
            notify.show();
            return notify;
        },
    };

    // Notification
    // Firefox 22+
    // æ¾ç¤º4ç§ä¼èªå¨å³é­ https://bugzil.la/875114
    if (typeof Notification !== 'undefined') available.standard = {
        'hasPermission': function () {
            return {
                'granted': true,
                'denied': false,
                'default': null,
            }[Notification.permission];
        },
        'requestPermission': function (callback) {
            return Notification.requestPermission(callback);
        },
        'hideNotification': function (notify) {
            notify.close();
            afterHideNotification(notify);
        },
        'showNotification': function (id, title, body, icon, delay, onclick) {
            var notify = new Notification(title, { 'body': body, 'icon': icon, 'requireInteraction': !delay });
            if (delay && delay > 0) notify.addEventListener('show', function () {
                setTimeout(function () {
                    hideNotification(notify);
                }, delay);
            });
            if (onclick) notify.addEventListener('click', function () {
                onclick.apply(this, arguments);
                hideNotification(notify);
            });
            return notify;
        },
    };
    // éæ©ç¨åªä¸ªæ¥å£
    var choseNotification = function (prefer) {
        return (use = prefer && available[prefer] || available.standard);
    };
    choseNotification();
    // éèå·²ç»æ¾ç¤ºçæ¶æ¯
    var hideNotification = function (notify) {
        use.hideNotification.apply(this, arguments);
        return notify;
    };
    var afterHideNotification = function (notify) {
        shown = shown.filter(function (x) { return x !== notify; });
    };

    document.addEventListener('unload', function () {
        shown.forEach(hideNotification);
        shown = [];
    });

    // @ts-check-off
    /**
     * {@link BiliMessageBox}
     * MessageBox -> from base.core.js
     * MessageBox.show(referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback)
     * MessageBox.close()
     */
    let popMessage = null;
    let alertPopMessage = {
        show: function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
            ui.alert(message, buttonTypeConfirmCallback);
        },
        close: Func.noop
    };
    util_init(() => {
        if (!popMessage && window.MessageBox) {
            popMessage = new window.MessageBox();
            let orignShow = popMessage.show;
            popMessage.show = function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
                // è¿ä¸ªçªï¼æä¸å®æºçå¼¹ä¸åºæ¥ãããä¸ç¥éä¸ºä»ä¹
                orignShow.call(this, referenceElement, message.replace('\n', '<br>'), closeTime, boxType, buttonTypeConfirmCallback);
            };
            popMessage.close = function () {
                // è¥æ²¡è°ç¨è¿show, å°±è°ç¨close, msgboxä¼ä¸ºnull, å¯¼è´æ¥é
                this.msgbox != null && window.MessageBox.prototype.close.apply(this, []);
            };
        }
    }, util_init.PRIORITY.FIRST, util_init.RUN_AT.DOM_LOADED_AFTER);
    const util_ui_msg = {
        _impl: function () {
            return popMessage || alertPopMessage;
        },
        show: function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
            let pop = this._impl();
            return pop.show.apply(pop, arguments);
        },
        close: function () {
            let pop = this._impl();
            return pop.close.apply(pop, arguments);
        },
        setMsgBoxFixed: function (fixed) {
            if (popMessage) {
                popMessage.msgbox[0].style.position = fixed ? 'fixed' : '';
            }
            else {
                util_log('MockMessageBox', 'setMsgBoxFixed', fixed);
            }
        },
        showOnNetError: function (e) {
            if (e.readyState === 0) {
                this.show(window.$('.balh_settings'), 'ååï¼æå¡å¨è¿ä¸ä¸äºï¼è¿å¥è®¾ç½®çªå£ï¼æ¢ä¸ªæå¡å¨è¯è¯ï¼', 0, 'button', window.bangumi_area_limit_hack.showSettings);
            }
        },
        showOnNetErrorInPromise: function () {
            return (p) => p
                .catch((e) => {
                this.showOnNetError(e);
                return Promise.reject(e);
            });
        }
    };

    var RegExps;
    (function (RegExps) {
        const _raw = (str) => str.replace(/(\.|\?)/g, '\\$1');
        RegExps.url = (url) => new RegExp(`^(https?:)?//${_raw(url)}`);
        RegExps.urlPath = (path) => new RegExp(`^(https?:)?//[\\w\\-\\.]+${_raw(path)}`);
    })(RegExps || (RegExps = {}));

    function switch_to_old_player() {
        if (util_page.av() && !localStorage.balh_disable_switch_to_old_player) {
            util_init(() => {
                const $switchToOldBtn = document.querySelector('#entryOld > .old-btn > a');
                if ($switchToOldBtn) {
                    ui.pop({
                        content: `${GM_info.script.name} å¯¹æ°çæ­æ¾å¨çæ¯æè¿å¨æµè¯é¶æ®µ, ä¸ç¨³å®, æ¨èåæ¢åæ§ç`,
                        confirmBtn: 'åæ¢åæ§ç',
                        onConfirm: () => $switchToOldBtn.click(),
                        onClose: () => localStorage.balh_disable_switch_to_old_player = r.const.TRUE,
                    });
                }
            });
        }
        if (util_page.new_bangumi()) {
            if (cookieStorage.stardustpgcv === '0606') {
                util_init(() => {
                    let $panel = document.querySelector('.error-container > .server-error');
                    if ($panel) {
                        $panel.insertBefore(createElement('text', 'ä¸´æ¶åæ¢å°æ§ççªå§é¡µé¢ä¸­...'), $panel.firstChild);
                        cookieStorage.stardustpgcv = '0';
                        localStorage.balh_temp_switch_to_old_page = r.const.TRUE;
                        location.reload();
                    }
                });
            }
            if (localStorage.balh_temp_switch_to_old_page) {
                cookieStorage.stardustpgcv = '0606';
                delete localStorage.balh_temp_switch_to_old_page;
            }
        }
    }

    function version_remind() {
        if (!util_page.new_bangumi())
            return;
        util_init(() => {
            if ((localStorage.balh_version || '0') < GM_info.script.version) {
                localStorage.balh_version = GM_info.script.version;
                let version_remind = _t('version_remind');
                if (version_remind) {
                    ui.pop({ content: `<h3>${GM_info.script.name} v${GM_info.script.version} æ´æ°æ¥å¿</h3>${version_remind}` });
                }
            }
        });
    }

    function isHtml5Player() {
        return localStorage.defaulth5 === '1';
    }
    function check_html5() {
        function checkHtml5() {
            var playerContent = document.querySelector('.player-content');
            if (!localStorage.balh_h5_not_first && !isHtml5Player() && window.GrayManager && playerContent) {
                new MutationObserver(function (mutations, observer) {
                    var _a;
                    observer.disconnect();
                    localStorage.balh_h5_not_first = r.const.TRUE;
                    if (window.confirm(GM_info.script.name + 'åªå¨HTML5æ­æ¾å¨ä¸ææï¼æ¯å¦åæ¢å°HTML5ï¼')) {
                        (_a = window.GrayManager) === null || _a === void 0 ? void 0 : _a.clickMenu('change_h5'); // change_flash, change_h5
                    }
                }).observe(playerContent, {
                    childList: true,
                    attributes: false,
                });
            }
        }
        util_init(() => {
            // é¤äºæ­æ¾å¨åçªå§åè¡¨é¡µé¢, å¶ä»é¡µé¢é½éè¦æ£æµhtml5
            if (!(util_page.bangumi() || util_page.bangumi_md() || util_page.player())) {
                checkHtml5();
            }
        });
    }

    function jump_to_baipiao() {
        util_init(() => {
            for (let bp of r.baipiao) {
                const cookie_key = `balh_baipao_${bp.key}`;
                if (bp.match() && !cookieStorage[cookie_key]) {
                    ui.pop({
                        content: [
                            createElement('text', 'åç°ç½å«å°å: '), createElement('a', { href: bp.link }, bp.link),
                            createElement('div', {}, bp.message),
                        ],
                        confirmBtn: 'ä¸é®è·³è½¬',
                        onConfirm: () => { location.href = bp.link; },
                        onClose: () => { cookieStorage.set(cookie_key, r.const.TRUE, ''); }
                    });
                    break;
                }
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER);
    }

    function biliplus_check_area_limit() {
        if (!util_page.bangumi_md()) {
            return;
        }
        // æå¡å¨éè¦éè¿è¿ä¸ªæ¥å£å¤æ­æ¯å¦æåºåéå¶
        // è¯¦è§: https://github.com/ipcjs/bilibili-helper/issues/385
        util_init(() => {
            var _a, _b, _c;
            const season_id = (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.__INITIAL_STATE__) === null || _a === void 0 ? void 0 : _a.mediaInfo) === null || _b === void 0 ? void 0 : _b.param) === null || _c === void 0 ? void 0 : _c.season_id;
            if (season_id) {
                BiliPlusApi.season(season_id)
                    .then(r => util_debug(`season${season_id}`, r))
                    .catch(e => util_debug(`season${season_id}`, e));
            }
        });
    }

    function fill_season_page() {
        function tryFillSeasonList() {
            var _a;
            const error_container = document.querySelector('div.error-container');
            if (!error_container) {
                return;
            }
            let season_id = (_a = window.location.pathname.match(/^\/anime\/(\d+)\/?$/)) === null || _a === void 0 ? void 0 : _a[1];
            if (!season_id) {
                return;
            }
            //å°è¯è§£å³æªå¼æ¨¡å¼æ¸²æ
            /*
            ä¼é æåéä¸¢å¤±ï¼ç­å¾å®æ¹éådoctype
            try{
            window.stop();
                var xhr = new XMLHttpRequest();
            xhr.open('GET',location.href,false);
            xhr.send();
            document.head.appendChild(_('script',{},[_('text',
                'document.write(unescape("'+escape(xhr.response.replace(/<!DOCTYPE.+?>/,'<!DOCTYPE HTML>'))+'"));window.stop()'
            )]));
            }catch(e){util_error(e);}
            */
            const msg = createElement('a', { href: '//bangumi.bilibili.com/anime/' + season_id + '/play', style: { fontSize: '20px' } }, [createElement('text', `ã${GM_info.script.name}ãå°è¯è·åè§é¢åè¡¨ä¸­...`)]);
            const content = createElement('div');
            error_container.insertBefore(content, error_container.firstChild);
            content.appendChild(msg);
            util_debug('season>:', season_id);
            BiliPlusApi.season(season_id)
                .then(function (data) {
                var _a;
                util_debug('season>then:', data);
                if (data.code) {
                    return Promise.reject(data);
                }
                function generateEpisodeList(episodes) {
                    const children = [];
                    episodes.reverse().forEach(function (i) {
                        children.push(createElement('li', { className: 'v1-bangumi-list-part-child', 'data-episode-id': i.episode_id }, [createElement('a', { className: 'v1-complete-text', href: '//bangumi.bilibili.com/anime/' + season_id + '/play#' + i.episode_id, title: i.index + ' ' + i.index_title, target: '_blank', style: { height: '60px' } }, [
                                createElement('div', { className: 'img-wrp' }, [createElement('img', { src: i.cover, style: { opacity: 1 }, loaded: 'loaded', alt: i.index + ' ' + i.index_title })]),
                                createElement('div', { className: 'text-wrp' }, [
                                    createElement('div', { className: 'text-wrp-num' }, [createElement('div', { className: 'text-wrp-num-content' }, [createElement('text', `ç¬¬${i.index}è¯`)])]),
                                    createElement('div', { className: 'text-wrp-title trunc' }, [createElement('text', i.index_title)])
                                ])
                            ])]));
                    });
                    return children;
                }
                function generateSeasonList(seasons) {
                    function onSeasonClick(event) {
                        var _a;
                        window.location.href = '//bangumi.bilibili.com/anime/' + ((_a = event.target) === null || _a === void 0 ? void 0 : _a.attributes['data-season-id'].value);
                    }
                    return seasons.map(function (season) {
                        return createElement('li', { className: season.season_id == season_id ? 'cur' : '', 'data-season-id': season.season_id, event: { click: onSeasonClick } }, [createElement('text', season.title)]);
                    });
                }
                if (data.result) {
                    if (((_a = msg.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) != error_container) {
                        util_error('`msg.parentNode?.parentNode != error_container`, æçæ¥è¯´ä¸å¯è½...');
                    }
                    document.title = data.result.title;
                    document.head.appendChild(createElement('link', { href: 'https://s3.hdslb.com/bfs/static/anime/css/tag-index.css?v=110', rel: 'stylesheet' }));
                    document.head.appendChild(createElement('link', { href: 'https://s1.hdslb.com/bfs/static/anime/css/bangumi-index.css?v=110', rel: 'stylesheet' }));
                    document.body.insertBefore(createElement('div', { className: 'main-container-wrapper' }, [createElement('div', { className: 'main-container' }, [
                            createElement('div', { className: 'page-info-wrp' }, [createElement('div', { className: 'bangumi-info-wrapper' }, [
                                    createElement('div', { className: 'bangumi-info-blurbg-wrapper' }, [createElement('div', { className: 'bangumi-info-blurbg blur', style: { backgroundImage: 'url(' + data.result.cover + ')' } })]),
                                    createElement('div', { className: 'main-inner' }, [createElement('div', { className: 'info-content' }, [
                                            createElement('div', { className: 'bangumi-preview' }, [createElement('img', { alt: data.result.title, src: data.result.cover })]),
                                            createElement('div', { className: 'bangumi-info-r' }, [
                                                createElement('div', { className: 'b-head' }, [createElement('h1', { className: 'info-title', 'data-seasonid': season_id, title: data.result.title }, [createElement('text', data.result.title)])]),
                                                createElement('div', { className: 'info-count' }, [
                                                    createElement('span', { className: 'info-count-item info-count-item-play' }, [createElement('span', { className: 'info-label' }, [createElement('text', 'æ»æ­æ¾')]), createElement('em', {}, [createElement('text', data.result.play_count)])]),
                                                    createElement('span', { className: 'info-count-item info-count-item-fans' }, [createElement('span', { className: 'info-label' }, [createElement('text', 'è¿½çªäººæ°')]), createElement('em', {}, [createElement('text', data.result.favorites)])]),
                                                    createElement('span', { className: 'info-count-item info-count-item-review' }, [createElement('span', { className: 'info-label' }, [createElement('text', 'å¼¹å¹æ»æ°')]), createElement('em', {}, [createElement('text', data.result.danmaku_count)])])
                                                ]),
                                                //_('div',{className:'info-row info-update'},[]),
                                                //_('div',{className:'info-row info-cv'},[]),
                                                createElement('div', { className: 'info-row info-desc-wrp' }, [
                                                    createElement('div', { className: 'info-row-label' }, [createElement('text', 'ç®ä»ï¼')]),
                                                    createElement('div', { className: 'info-desc' }, [createElement('text', data.result.evaluate)])
                                                ]),
                                            ])
                                        ])])
                                ])]),
                            createElement('div', { className: 'main-inner' }, [createElement('div', { className: 'v1-bangumi-list-wrapper clearfix' }, [
                                    createElement('div', { className: 'v1-bangumi-list-season-wrapper' }, [
                                        createElement('div', { className: 'v1-bangumi-list-season-content slider-list-content' }, [
                                            createElement('div', {}, [
                                                createElement('ul', { className: 'v1-bangumi-list-season clearfix slider-list', 'data-current-season-id': season_id, style: { opacity: 1 } }, generateSeasonList(data.result.seasons))
                                            ])
                                        ])
                                    ]),
                                    createElement('div', { className: 'v1-bangumi-list-part-wrapper slider-part-wrapper' }, [createElement('div', { className: 'v1-bangumi-list-part clearfix', 'data-current-season-id': season_id, style: { display: 'block' } }, [
                                            createElement('div', { className: 'complete-list', style: { display: 'block' } }, [createElement('div', { className: 'video-slider-list-wrapper' }, [createElement('div', { className: 'slider-part-wrapper' }, [createElement('ul', { className: 'slider-part clearfix hide', style: { display: 'block' } }, generateEpisodeList(data.result.episodes))])])])
                                        ])])
                                ])])
                        ])]), error_container);
                    error_container.remove();
                }
            })
                .catch(function (error) {
                util_debug('season>catch', error);
                msg.innerText = 'error:' + JSON.stringify(error) + '\nç¹å»è·³è½¬å°æ­æ¾çé¢ (ä¸ä¸å®è½å¤æ­£å¸¸æ­æ¾...)';
            });
        }
        util_init(() => {
            if (util_page.bangumi()) {
                tryFillSeasonList();
            }
        });
    }

    function redirect_to_bangumi_or_insert_player() {
        // éå®åå°Bangumié¡µé¢ï¼ æèå¨å½åé¡µé¢ç´æ¥æå¥æ­æ¾é¡µé¢
        function tryRedirectToBangumiOrInsertPlayer() {
            let $errorPanel;
            if (!($errorPanel = document.querySelector('.error-container > .error-panel'))) {
                return;
            }
            let msg = document.createElement('a');
            $errorPanel.insertBefore(msg, $errorPanel.firstChild);
            msg.innerText = 'è·åçªå§é¡µUrlä¸­...';
            let aid = (location.pathname.match('/\/video\/av(\d+)') || ['', ''])[1], page = (location.pathname.match(/\/index_(\d+).html/) || ['', '1'])[1], cid, season_id, episode_id;
            let avData;
            if (!aid) {
                let bv = (location.pathname.match(/\/video\/(BV\w+)/) || ['', ''])[1];
                if (bv) {
                    aid = Converters.bv2aid(bv);
                }
            }
            BiliPlusApi.view(aid)
                .then(function (data) {
                avData = data;
                if (data.code) {
                    return Promise.reject(JSON.stringify(data));
                }
                // è®¡ç®å½åé¡µé¢çcid
                for (let i = 0; i < data.list.length; i++) {
                    if (data.list[i].page == page) {
                        cid = data.list[i].cid;
                        break;
                    }
                }
                if (!data.bangumi) {
                    generatePlayer(data, aid, page, cid);
                    // return Promise.reject('è¯¥AVå·ä¸å±äºä»»ä½çªå§é¡µ');//No bangumi in api response
                }
                else {
                    // å½åavå±äºçªå§é¡µé¢, ç»§ç»­å¤ç
                    season_id = data.bangumi.season_id;
                    return BiliPlusApi.season(season_id);
                }
            })
                .then(function (result) {
                if (result === undefined)
                    return; // ä¸ä¸ä¸ªthenä¸è¿ååå®¹æ¶, ä¸éè¦å¤ç
                if (result.code === 10) { // avå±äºçªå§é¡µé¢, éè¿æ¥å£å´æªè½æ¾å°çªå§ä¿¡æ¯
                    let ep_id_newest = avData && avData.bangumi && avData.bangumi.newest_ep_id;
                    if (ep_id_newest) {
                        episode_id = ep_id_newest; // æ­¤æ¶, è¥avDataä¸­æææ°çep_id, åç´æ¥ä½¿ç¨å®
                    }
                    else {
                        util_debug(`av${aid}å±äºçªå§${season_id}, ä½å´ä¸è½æ¾å°çªå§é¡µçä¿¡æ¯, è¯å¾ç´æ¥åå»ºæ­æ¾å¨`);
                        generatePlayer(avData, aid, page, cid);
                        return;
                    }
                }
                else if (result.code) {
                    return Promise.reject(JSON.stringify(result));
                }
                else {
                    let ep_id_by_cid, ep_id_by_aid_page, ep_id_by_aid, episodes = result.result.episodes, ep;
                    // ä¸ºä½è¦ç¨ä¸ç§ä¸åæ¹å¼å¹é, è¯¦è§: https://greasyfork.org/zh-CN/forum/discussion/22379/x#Comment_34127
                    for (let i = 0; i < episodes.length; i++) {
                        ep = episodes[i];
                        if (ep.danmaku == cid) {
                            ep_id_by_cid = ep.episode_id;
                        }
                        if (ep.av_id == aid && ep.page == page) {
                            ep_id_by_aid_page = ep.episode_id;
                        }
                        if (ep.av_id == aid) {
                            ep_id_by_aid = ep.episode_id;
                        }
                    }
                    episode_id = ep_id_by_cid || ep_id_by_aid_page || ep_id_by_aid;
                }
                if (episode_id) {
                    let bangumi_url = `//www.bilibili.com/bangumi/play/ss${season_id}#${episode_id}`;
                    util_debug('Redirect', 'aid:', aid, 'page:', page, 'cid:', cid, '==>', bangumi_url, 'season_id:', season_id, 'ep_id:', episode_id);
                    msg.innerText = 'å³å°è·³è½¬å°ï¼' + bangumi_url;
                    location.href = bangumi_url;
                }
                else {
                    return Promise.reject('æ¥è¯¢episode_idå¤±è´¥');
                }
            })
                .catch(function (e) {
                util_debug('error:', arguments);
                msg.innerText = 'error:' + e;
            });
        }
        function generatePlayer(data, aid, page, cid) {
            var _a;
            let generateSrc = function (aid, cid) {
                return `//www.bilibili.com/blackboard/html5player.html?cid=${cid}&aid=${aid}&player_type=1`;
            };
            let generatePageList = function (pages) {
                let $curPage = null;
                function onPageBtnClick(e) {
                    e.target.className = 'curPage';
                    $curPage && ($curPage.className = '');
                    let index = e.target.attributes['data-index'].value;
                    iframe.src = generateSrc(aid, pages[index].cid);
                }
                return pages.map(function (item, index) {
                    let isCurPage = item.page == page;
                    let $item = createElement('a', { 'data-index': index, className: isCurPage ? 'curPage' : '', event: { click: onPageBtnClick } }, [createElement('text', item.page + ': ' + item.part)]);
                    if (isCurPage)
                        $curPage = $item;
                    return $item;
                });
            };
            // å½åavä¸å±äºçªå§é¡µé¢, ç´æ¥å¨å½åé¡µé¢æå¥ä¸ä¸ªæ­æ¾å¨çiframe
            let $pageBody = document.querySelector('.b-page-body');
            if (!$pageBody) { // è¥ä¸å­å¨, ååå»º
                $pageBody = createElement('div', { className: '.b-page-body' });
                document.querySelector('body').insertBefore($pageBody, document.querySelector('#app'));
                // æ·»å ç¸å³æ ·å¼
                document.head.appendChild(createElement('link', { type: 'text/css', rel: 'stylesheet', href: '//static.hdslb.com/css/core-v5/page-core.css' }));
            }
            let iframe = createElement('iframe', { className: 'player bilibiliHtml5Player', style: { position: 'relative' }, src: generateSrc(aid, cid) });
            // æ·»å æ­æ¾å¨
            $pageBody.appendChild(createElement('div', { className: 'player-wrapper' }, [
                createElement('div', { className: 'main-inner' }, [
                    createElement('div', { className: 'v-plist' }, [
                        createElement('div', { id: 'plist', className: 'plist-content open' }, generatePageList(data.list))
                    ])
                ]),
                createElement('div', { id: 'bofqi', className: 'scontent' }, [iframe])
            ]));
            // æ·»å è¯è®ºåº
            $pageBody.appendChild(createElement('div', { className: 'main-inner' }, [
                createElement('div', { className: 'common report-scroll-module report-wrap-module', id: 'common_report' }, [
                    createElement('div', { className: 'b-head' }, [
                        createElement('span', { className: 'b-head-t results' }),
                        createElement('span', { className: 'b-head-t' }, [createElement('text', 'è¯è®º')]),
                        createElement('a', { className: 'del-log', href: `//www.bilibili.com/replydeletelog?aid=${aid}&title=${data.title}`, target: '_blank' }, [createElement('text', 'æ¥çå é¤æ¥å¿')])
                    ]),
                    createElement('div', { className: 'comm', id: 'bbComment' }, [
                        createElement('div', { id: 'load_comment', className: 'comm_open_btn', onclick: "var fb = new bbFeedback('.comm', 'arc');fb.show(" + aid + ", 1);", style: { cursor: 'pointer' } })
                    ])
                ])
            ]));
            // æ·»å åå«bbFeedbackçjs
            document.head.appendChild(createElement('script', { type: 'text/javascript', src: '//static.hdslb.com/js/core-v5/base.core.js' }));
            document.title = data.title;
            (_a = (document.querySelector('.error-body') || document.querySelector('.error-container'))) === null || _a === void 0 ? void 0 : _a.remove(); // ç§»é¤éè¯¯ä¿¡æ¯é¢æ¿
        }
        util_init(() => {
            if (util_page.av()) {
                tryRedirectToBangumiOrInsertPlayer();
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.COMPLETE);
    }

    var pageTemplate = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"referrer\" content=\"no-referrer-when-downgrade\">\n    <link rel=\"dns-prefetch\" href=\"//s1.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//s2.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//s3.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//i0.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//i1.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//i2.hdslb.com\">\n    <link rel=\"dns-prefetch\" href=\"//static.hdslb.com\">\n    <title>ãAç«ç¬æ­ã___htmlTitle___ AcFunå¼¹å¹è§é¢ç½ - è®¤çä½ å°±è¾å¦ (?Ï?)ã- ( ã- ã)ã¤ã­</title>\n    <meta name=\"description\" content=\"æ±æ·æ¶ä»£æ«æï¼æ¬ä½ç20å¹´åï¼, è¢«ç§°ä¸ºâå¤©äººï¼ãã¾ãã¨ï¼âçè°ä¹å¼æäººæ¥è¢­ãäºæ¯å°çäººä¸å¤©äººä¹é´çæäºç¬å³çåï¼ä¸ºæ°ä¼å¤çæ­¦å£«åæå¤·æ´¾å¿å£«é½åä¸ä¸å¤©äººçææï¼å¹åºè§è¯å°å¤©äººå¼ºå¤§çå®ååï¼æç»åå¤©äººä½\">\n    <meta name=\"keywords\" content=\"éé­ï¼åéæ¸¯æ¾³å°å°åï¼\">\n    <meta name=\"author\" content=\"åå©åå©çªå§\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta property=\"og:title\" content=\"éé­ï¼åéæ¸¯æ¾³å°å°åï¼\">\n    <meta property=\"og:type\" content=\"video.anime\">\n    <meta property=\"og:url\" content=\"https://www.bilibili.com/bangumi/play/ss33577/\">\n    <meta property=\"og:image\" content=\"https://i0.hdslb.com/bfs/archive/65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg\">\n    <meta name=\"spm_prefix\" content=\"666.25\">\n    <link rel=\"shortcut icon\" href=\"//static.hdslb.com/images/favicon.ico\">\n    <script>\n        !function () {\n            for (var n = window.navigator.userAgent, i = [\"Android\", \"iPhone\", \"SymbianOS\", \"Windows Phone\", \"iPod\"], o = !0, e = 0, r = i.length; e < r; e++)\n                if (0 < n.indexOf(i[e])) {\n                    o = !1;\n                    break\n                }\n            if (0 == o) {\n                var w = window.location.href.replace(\"www\", \"m\");\n                window.location.href = w\n            }\n        }()\n    </script>\n    <link rel=\"stylesheet\" href=\"//s1.hdslb.com/bfs/static/pgcv/css/video.1.d78d6e85da752e622f857a963ae79be916fe4c01.css\">\n    <link rel=\"stylesheet\" href=\"//s1.hdslb.com/bfs/static/pgcv/css/video.0.d78d6e85da752e622f857a963ae79be916fe4c01.css\">\n    <script type=\"text/javascript\" src=\"//s1.hdslb.com/bfs/static/player/main/video.70db8af8.js?v=20210111\"></script>\n    <!-- <script type=\"text/javascript\" src=\"//s2.hdslb.com/bfs/cm/st/bundle.js\"></script> -->\n    <script type=\"application/ld+json\">\n\n                    {\n                        \"@context\": \"https://schema.org\",\n                        \"@type\": \"ItemList\",\n                        \"itemListElement\": [\n                            {\n                                \"@type\": \"VideoObject\",\n                                \"position\": 1,\n                                \"name\": \"éé­ï¼åéæ¸¯æ¾³å°å°åï¼\",\n                                \"url\": \"https://www.bilibili.com/bangumi/play/ss33577/\",\n                                \"description\": \"æ±æ·æ¶ä»£æ«æï¼æ¬ä½ç20å¹´åï¼, è¢«ç§°ä¸ºâå¤©äººï¼ãã¾ãã¨ï¼âçè°ä¹å¼æäººæ¥è¢­ãäºæ¯å°çäººä¸å¤©äººä¹é´çæäºç¬å³çåï¼ä¸ºæ°ä¼å¤çæ­¦å£«åæå¤·æ´¾å¿å£«é½åä¸ä¸å¤©äººçææï¼å¹åºè§è¯å°å¤©äººå¼ºå¤§çå®ååï¼æç»åå¤©äººä½\",\n                                \"thumbnailUrl\": [\"https://i0.hdslb.com/bfs/archive/65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg\"],\n                                \"uploadDate\": \"2006-04-06T11:26:00.000Z\",\n                                \"interactionStatistic\": {\n                                    \"@type\": \"InteractionCounter\",\n                                    \"interactionType\": { \"@type\": \"http://schema.org/WatchAction\" },\n                                    \"userInteractionCount\": \"786346\"\n                                }\n                            }\n                        ]\n                    }\n                \n        </script>\n    <!-- éèç¹è¯åè¯åï¼å»æäºè¯è®ºä¸é¢çå¤§çç©ºç½ -->\n    <style type=\"text/css\">\n        .player-mask {\n            display: none;\n        }\n        .media-rating {\n            display: none;\n        }\n        .btn-rating {\n            display: none;\n        }\n        .review-module {\n            display: none;\n        }\n        .media-right {\n            height: auto !important;\n        }\n        .btn-follow {\n            display: none;\n        }\n        .bilibili-player-ending-panel {\n            display: none !important;\n        }\n        .bilibili-player-video-top-follow {\n            display: none !important;\n        }\n    </style>\n</head>\n\n<body class=\"\" style=\"opacity:0\">\n    <script type=\"text/javascript\">\n        function getIEVersion() {\n            var rv = 99;\n            if (navigator.appName == \"Microsoft Internet Explorer\") {\n                var ua = navigator.userAgent;\n                var re = new RegExp(\"MSIE ([0-9]{1,}[.0-9]{0,})\");\n                if (re.exec(ua) != null) {\n                    rv = parseFloat(RegExp.$1)\n                }\n            }\n            return rv\n        }\n        if (getIEVersion() <= 9) {\n            document.body.innerHTML = \"<div class='ie-fix'><div class='title'>ä¸ºäºä¿éä½ çè´¦å·å®å¨åæä½³é¢è§ä½éªï¼æ­æ¾é¡µå·²ä¸æ¯æIE9åä»¥ä¸IEçæ¬æµè§å¨è®¿é®ï¼å»ºè®®ä½ ä½¿ç¨Chromeç­é«çº§æµè§å¨æåçº§å°IEææ°çæ¬æµè§å¨ã</div></div>\"\n        }\n        window.bid = 13\n        window.spmReportData = {}\n        window.reportConfig = {\n            sample: 1,\n            scrollTracker: true,\n            msgObjects: 'spmReportData',\n            errorTracker: true,\n            hasAbtest: true,\n            abtestPlatform: 4\n        }\n    </script>\n    <script type=\"text/javascript\" src=\"//s1.hdslb.com/bfs/seed/log/report/log-reporter.js\" crossorigin></script>\n    <div id=\"biliMainHeader\" style=\"height:56px\"></div>\n    <!-- appæ ç­¾Vueéè¦è¯»å, å¤ä¸ä¸ªç©ºæ ¼é½ä¸è¡, ä¸è¦æ ¼å¼åå® -->\n    <div id=\"app\" data-server-rendered=\"true\" class=\"main-container clearfix\"><div class=\"plp-l\"><div id=\"player_module\" class=\"player-module\"><div id=\"bilibili-player\" class=\"stardust-player report-wrap-module player-container\"></div> <div class=\"player-tool-bar\"></div> <div id=\"player_mask_module\" class=\"player-mask report-wrap-module\" style=\"display:none;\"><!----> <!----> <!----> <!----> <!----> <!----> <!----> <div class=\"bar-wrapper\"><div class=\"left-bar\"></div><div class=\"right-bar\"></div></div></div></div> <div class=\"media-wrapper\"><h1 title=\"éé­ï¼åéæ¸¯æ¾³å°å°åï¼ï¼01-02 \">éé­ï¼åéæ¸¯æ¾³å°å°åï¼ï¼01-02 </h1> <div id=\"toolbar_module\" class=\"tool-bar clearfix report-wrap-module report-scroll-module\"><div class=\"like-info\"><i class=\"iconfont icon-like\"></i><span>ç¹èµ</span> <div id=\"sanlin\"></div> <!----> <!----> <!----></div> <div class=\"coin-info\"><i class=\"iconfont icon-coins\"></i><span>--</span></div> <div class=\"share-info\"><i class=\"iconfont icon-share\"></i><span>åäº«</span> <!----></div> <div class=\"mobile-info\"><i class=\"iconfont icon-mobile-full\"></i><span>ç¨ææºè§ç</span> <!----></div> <!----></div> <div id=\"media_module\" class=\"media-info clearfix report-wrap-module\"><a href=\"//www.bilibili.com/bangumi/media/md___mediaInfoId___/\" target=\"_blank\" class=\"media-cover\"><!----></a> <div class=\"media-right\"><a href=\"//www.bilibili.com/bangumi/media/md28229002/\" target=\"_blank\" title=\"éé­ï¼åéæ¸¯æ¾³å°å°åï¼\" class=\"media-title\">éé­ï¼åéæ¸¯æ¾³å°å°åï¼</a> <div class=\"media-count\">--&nbsp;&nbsp;Â·&nbsp;&nbsp;--&nbsp;&nbsp;Â·&nbsp;&nbsp;--</div> <div class=\"pub-wrapper clearfix\"><a href=\"//www.bilibili.com/anime/\" target=\"_blank\" class=\"home-link\">çªå§</a> <span class=\"pub-info\">è¿è½½ä¸­</span> <!----> <!----></div> <a href=\"//www.bilibili.com/bangumi/media/md28229002/\" target=\"_blank\" class=\"media-desc webkit-ellipsis\"><span class=\"absolute\">æ±æ·æ¶ä»£æ«æï¼æ¬ä½ç20å¹´åï¼, è¢«ç§°ä¸ºâå¤©äººï¼ãã¾ãã¨ï¼âçè°ä¹å¼æäººæ¥è¢­ãäºæ¯å°çäººä¸å¤©äººä¹é´çæäºç¬å³çåï¼ä¸ºæ°ä¼å¤çæ­¦å£«åæå¤·æ´¾å¿å£«é½åä¸ä¸å¤©äººçææï¼å¹åºè§è¯å°å¤©äººå¼ºå¤§çå®ååï¼æç»åå¤©äººä½å¤´ï¼æ¾å¼æ­¦å£«ä¸ç®¡ï¼æèªä¸å¤©äººç­¾è®¢ä¸å¹³ç­æ¡çº¦ï¼åè®¸ä»ä»¬å¥å½ãå¶åæ´é¢å¸äºâåºåä»¤âï¼å¤ºèµ°äºæ­¦å£«çåï¼ä½¿ä»ä»¬æ ååæãèªæ­¤ï¼å¤©äººæ¨ªè¡é¸éï¼å¹åºä¸ºå¤©äººæå½±åï¼çè³è¢«æ§å¶ï¼æä¸ºäºâåå¡æ¿æâãå¨è¿æ ·çæ¶ä»£ï¼æä¸ä¸ªæ­¦å£«ä¸åä¼´æå¿«å°è¿èå¼æ³å¤©å¼ççæ´»ã</span><span>æ±æ·æ¶ä»£æ«æï¼æ¬ä½ç20å¹´åï¼, è¢«ç§°ä¸ºâå¤©äººï¼ãã¾ãã¨ï¼âçè°ä¹å¼æäººæ¥è¢­ãäºæ¯å°çäººä¸å¤©äººä¹é´çæäºç¬å³çåï¼ä¸ºæ°ä¼å¤çæ­¦å£«åæå¤·æ´¾å¿å£«é½åä¸ä¸å¤©äººçææï¼å¹åºè§è¯å°å¤©äººå¼ºå¤§çå®ååï¼æç»åå¤©äººä½å¤´ï¼æ¾å¼æ­¦å£«ä¸ç®¡ï¼æèªä¸å¤©äººç­¾è®¢ä¸å¹³ç­æ¡çº¦ï¼åè®¸ä»ä»¬å¥å½ãå¶åæ´é¢å¸äºâåºåä»¤âï¼å¤ºèµ°äºæ­¦å£«çåï¼ä½¿ä»ä»¬æ ååæãèªæ­¤ï¼å¤©äººæ¨ªè¡é¸éï¼å¹åºä¸ºå¤©äººæå½±åï¼çè³è¢«æ§å¶ï¼æä¸ºäºâåå¡æ¿æâãå¨è¿æ ·çæ¶ä»£ï¼æä¸ä¸ªæ­¦å£«ä¸åä¼´æå¿«å°è¿èå¼æ³å¤©å¼ççæ´»ã</span><i style=\"display:none;\">å±å¼</i></a> <div class=\"media-rating\"><h4 class=\"score\">9.7</h4> <p>1368äººè¯å</p></div> <div class=\"media-tool-bar clearfix\"><div report-id=\"click_review_publish\" class=\"btn-rating\"><ul class=\"star-wrapper clearfix\"><li><i class=\"iconfont icon-star-empty\"></i> <!----></li><li><i class=\"iconfont icon-star-empty\"></i> <!----></li><li><i class=\"iconfont icon-star-empty\"></i> <!----></li><li><i class=\"iconfont icon-star-empty\"></i> <!----></li><li><i class=\"iconfont icon-star-empty\"></i> <!----></li></ul><span>ç¹è¯</span></div> <div report-id=\"click_follow\" class=\"btn-follow\"><i class=\"iconfont icon-follow\"></i><span>è¿½çª</span> <div class=\"bangumi-options clearfix\"><ul class=\"opt-list\"><li>æ è®°ä¸º æ³ç</li> <li>æ è®°ä¸º å¨ç</li> <li>æ è®°ä¸º å·²ç</li> <li>åæ¶è¿½çª</li></ul></div></div></div></div></div></div> <div id=\"review_module\" class=\"review-module report-wrap-module report-scroll-module\"><div class=\"module-title clearfix\"><h4>ç¹è¯</h4> <a href=\"//www.bilibili.com/bangumi/media/md28229002/\" target=\"_blank\" class=\"more-link\">æ¥çå¨é¨</a></div> <div class=\"review-list\"><div class=\"review-item\"><div class=\"review-empty pre-mask\"></div> <!----></div><div class=\"review-item\"><div class=\"review-empty pre-mask\"></div> <!----></div><div class=\"review-item\"><div class=\"review-empty pre-mask\"></div> <!----></div> <!----></div></div> <!----> <div id=\"comment_module\" class=\"comment-wrapper common report-wrap-module report-scroll-module\" style=\"display:;\"><div class=\"b-head\"><span class=\"results\"></span><span>è¯è®º</span></div> <div class=\"comm\"></div></div></div> <div class=\"plp-r\"><div id=\"paybar_module\" class=\"pay-bar report-wrap-module pre-mask\" style=\"display:none;\"><!----> <!----> <!----> <!----> <!----> <!----></div> <div id=\"danmukuBox\" class=\"danmaku-box\" style=\"display:;\"><div class=\"danmaku-wrap\"></div></div> <div id=\"eplist_module\" class=\"ep-list-wrapper report-wrap-module\"><div class=\"list-title clearfix\"><h4 title=\"éé\">éé</h4> <span class=\"mode-change\" style=\"position:relative\"><i report-id=\"click_ep_switch\" class=\"iconfont icon-ep-list-simple\"></i> <!----></span> <!----> <span class=\"ep-list-progress\">1/220</span></div> <div class=\"list-wrapper simple\" style=\"display:none;\"><ul class=\"clearfix\" style=\"height:50px;\"></ul></div></div>  <div class=\"omit-hint\" style=\"display:none;\">é¨åéæ°åå°åºéå¶ä¸äºå±ç¤º</div> <!----> <div id=\"recom_module\" class=\"recom-wrapper report-wrap-module report-scroll-module\"><div class=\"recom-title\">ç¸å³æ¨è</div> <div class=\"recom-list\"><div class=\"recom-item clearfix\"><div class=\"cover-wrapper pre-mask\"></div> <!----> <div class=\"info-wrapper\"><div class=\"video-title pre-mask\"></div> <div class=\"video-subtitle pre-mask\"></div> <div class=\"video-count pre-mask\"></div></div> <!----></div><div class=\"recom-item clearfix\"><div class=\"cover-wrapper pre-mask\"></div> <!----> <div class=\"info-wrapper\"><div class=\"video-title pre-mask\"></div> <div class=\"video-subtitle pre-mask\"></div> <div class=\"video-count pre-mask\"></div></div> <!----></div><div class=\"recom-item clearfix\"><div class=\"cover-wrapper pre-mask\"></div> <!----> <div class=\"info-wrapper\"><div class=\"video-title pre-mask\"></div> <div class=\"video-subtitle pre-mask\"></div> <div class=\"video-count pre-mask\"></div></div> <!----></div><div class=\"recom-item clearfix\"><div class=\"cover-wrapper pre-mask\"></div> <!----> <div class=\"info-wrapper\"><div class=\"video-title pre-mask\"></div> <div class=\"video-subtitle pre-mask\"></div> <div class=\"video-count pre-mask\"></div></div> <!----></div><div class=\"recom-item clearfix\"><div class=\"cover-wrapper pre-mask\"></div> <!----> <div class=\"info-wrapper\"><div class=\"video-title pre-mask\"></div> <div class=\"video-subtitle pre-mask\"></div> <div class=\"video-count pre-mask\"></div></div> <!----></div></div> <!----></div></div> <div class=\"nav-tools\" style=\"display:none;\"><div title=\"è¿åé¡¶é¨\" class=\"tool-item backup iconfont icon-up\"></div> <!----> <a title=\"å¸®å©åé¦\" href=\"//www.bilibili.com/blackboard/help.html#å¸¸è§é®é¢èªææ¹æ³?id=c9954d53034d43d796465e24eb792593\" target=\"_blank\"><div class=\"tool-item help iconfont icon-customer-serv\"></div></a></div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----></div>\n    <script>\n        window.__PGC_USERSTATE__ = {\n            \"area_limit\": 1,\n            \"ban_area_show\": 1,\n            \"follow\": 0,\n            \"follow_status\": 2,\n            \"login\": 1,\n            \"pay\": 0,\n            \"pay_pack_paid\": 0,\n            \"sponsor\": 0,\n            \"vip_info\": {\n                \"due_date\": 1672675200000,\n                \"status\": 1,\n                \"type\": 2\n            }\n        }\n    </script>\n    <script>\n        window.__BILI_CONFIG__ = {\n            \"show_bv\": true\n        }\n    </script>\n    <script>\n        window.__INITIAL_STATE__ = {\n            \"loginInfo\": {},\n            \"isLogin\": false,\n            \"couponSelected\": null,\n            \"payGlobal\": null,\n            \"loaded\": true,\n            \"ver\": {},\n            \"ssr\": {},\n            \"h1Title\": \"éé­ï¼åéæ¸¯æ¾³å°å°åï¼ï¼01-02 \",\n            \"mediaInfo\": {\n                \"stat\": {\n                    \"coins\": 3444,\n                    \"danmakus\": 8325,\n                    \"favorites\": 75951,\n                    \"likes\": 0,\n                    \"reply\": 2614,\n                    \"share\": 515,\n                    \"views\": 786346\n                },\n                \"id\": ___mediaInfoId___,\n                \"ssId\": ___ssId___,\n                \"title\": \"___mediaInfoTitle___\",\n                \"jpTitle\": \"\",\n                \"series\": \"éé­ï¼åéçï¼\",\n                \"alias\": \"\",\n                \"evaluate\": \"___evaluate___\",\n                \"ssType\": 1,\n                \"ssTypeFormat\": {\n                    \"name\": \"çªå§\",\n                    \"homeLink\": \"\\u002F\\u002Fwww.bilibili.com\\u002Fanime\\u002F\"\n                },\n                \"status\": 2,\n                \"multiMode\": true,\n                \"forceWide\": false,\n                \"specialCover\": \"\",\n                \"squareCover\": \"\\u002F\\u002Fi0.hdslb.com\\u002Fbfs\\u002Fbangumi\\u002Fimage\\u002Ff22bfaf955d4938d426029582fdd2303e6844a09.png\",\n                \"cover\": \"___cover___\",\n                \"playerRecord\": \"\",\n                \"rights\": {\n                    \"allowBp\": false,\n                    \"allowBpRank\": false,\n                    \"allowReview\": true,\n                    \"isPreview\": false,\n                    \"appOnly\": ___appOnly___,\n                    \"limitNotFound\": false,\n                    \"isCoverShow\": false,\n                    \"canWatch\": true\n                },\n                \"pub\": {\n                    \"time\": \"2006-04-06 19:26:00\",\n                    \"timeShow\": \"2006å¹´04æ06æ¥19:26\",\n                    \"isStart\": true,\n                    \"isFinish\": false,\n                    \"unknow\": false\n                },\n                \"upInfo\": {\n                    \"mid\": -1,\n                    \"avatar\": \"\",\n                    \"name\": \"\",\n                    \"isAnnualVip\": false,\n                    \"pendantId\": -1,\n                    \"pendantName\": \"\",\n                    \"pendantImage\": \"\"\n                },\n                \"rating\": {\n                    \"score\": 9.7,\n                    \"count\": 1368\n                },\n                \"newestEp\": {\n                    \"id\": 331925,\n                    \"desc\": \"è¿è½½ä¸­\",\n                    \"isNew\": false\n                },\n                \"payMent\": {\n                    \"tip\": \"\",\n                    \"promotion\": \"\",\n                    \"vipProm\": \"\",\n                    \"vipFirstProm\": \"\",\n                    \"discount\": 1,\n                    \"vipDiscount\": 1,\n                    \"sixType\": {\n                        \"allowTicket\": false,\n                        \"allowTimeLimit\": false,\n                        \"allowDiscount\": false,\n                        \"allowVipDiscount\": false\n                    }\n                },\n                \"payPack\": {\n                    \"title\": \"\",\n                    \"appNoPayText\": \"\",\n                    \"appPayText\": \"\",\n                    \"url\": \"\"\n                },\n                \"activity\": {\n                    \"id\": 0,\n                    \"title\": \"\",\n                    \"pendantOpsImg\": \"\",\n                    \"pendantOpsLink\": \"\"\n                },\n                \"count\": {\n                    \"coins\": 0,\n                    \"danmus\": 0,\n                    \"follows\": 0,\n                    \"views\": 0,\n                    \"likes\": 0\n                },\n                \"pgcType\": \"anime\",\n                \"epSpMode\": true,\n                \"newEpSpMode\": false,\n                \"mainSecTitle\": \"éé\",\n                \"premiereInfo\": {},\n                \"sectionBottomDesc\": \"\"\n            },\n            \"epList\": ___episodes___,\n            \"epInfo\": {\n                \"loaded\": true,\n                \"id\": ___id___,\n                \"badge\": \"\",\n                \"badgeType\": 0,\n                \"badgeColor\": \"#999999\",\n                \"epStatus\": 2,\n                \"aid\": ___aid___,\n                \"bvid\": \"___bvid___\",\n                \"cid\": ___cid___,\n                \"from\": \"bangumi\",\n                \"cover\": \"\\u002F\\u002Fi0.hdslb.com\\u002Fbfs\\u002Farchive\\u002F65dc2aa1781fbb507dbb7faef1d0a6169162ffed.jpg\",\n                \"title\": \"___title___\",\n                \"titleFormat\": \"___titleFormat___\",\n                \"vid\": \"\",\n                \"longTitle\": \"\",\n                \"hasNext\": true,\n                \"i\": 0,\n                \"sectionType\": 0,\n                \"releaseDate\": \"\",\n                \"skip\": {},\n                \"hasSkip\": false,\n                \"rights\": {\n                    \"allow_demand\": 0,\n                    \"allow_dm\": 0,\n                    \"allow_download\": 0,\n                    \"area_limit\": 1\n                },\n                \"stat\": {}\n            },\n            \"sections\": [],\n            \"orderSections\": [],\n            \"ssList\": [{\n                \"id\": 33577,\n                \"title\": \"TV\",\n                \"type\": 1,\n                \"pgcType\": \"anime\",\n                \"cover\": \"\\u002F\\u002Fi0.hdslb.com\\u002Fbfs\\u002Fbangumi\\u002Fimage\\u002Fed473b3c6ccc653074e66a3f586bb960c25a9707.png\",\n                \"epCover\": \"\\u002F\\u002Fi0.hdslb.com\\u002Fbfs\\u002Farchive\\u002F5dae515b205b46feb2f69c0f2f79f95c1ca234d8.png\",\n                \"desc\": \"æ´æ°è³ç¬¬221è¯\",\n                \"badge\": \"\",\n                \"badgeType\": 0,\n                \"badgeColor\": \"#FB7299\",\n                \"views\": 786346,\n                \"follows\": 75946\n            }],\n            \"userState\": {\n                \"loaded\": false,\n                \"vipInfo\": {},\n                \"history\": {}\n            },\n            \"ssPayMent\": {},\n            \"epPayMent\": null,\n            \"player\": {\n                \"loaded\": false,\n                \"miniOn\": false,\n                \"limitType\": 0\n            },\n            \"sponsor\": {\n                \"allReady\": false,\n                \"allState\": 0,\n                \"allRank\": [],\n                \"allMine\": null,\n                \"allCount\": 0,\n                \"weekReady\": false,\n                \"weekState\": 0,\n                \"weekRank\": [],\n                \"weekMine\": null,\n                \"weekCount\": 0\n            },\n            \"ssRecom\": {\n                \"status\": \"loading\",\n                \"data\": []\n            },\n            \"showBv\": false,\n            \"interact\": {\n                \"shown\": false,\n                \"btnText\": \"\",\n                \"callback\": null\n            },\n            \"nextEp\": null,\n            \"playerEpList\": {\n                \"code\": 0,\n                \"message\": \"\",\n                \"result\": {\n                    \"main_section\": {\n                        \"episodes\": []\n                    }\n                }\n            },\n            \"isOriginal\": false,\n            \"premiereCountDown\": \"\",\n            \"premiereStatus\": {},\n            \"premiereEp\": {},\n            \"likeMap\": {},\n            \"uperMap\": {},\n            \"hasPlayableEp\": false,\n            \"insertScripts\": [\"\\u002F\\u002Fs1.hdslb.com\\u002Fbfs\\u002Fstatic\\u002Fpgcv\\u002F1.video.d78d6e85da752e622f857a963ae79be916fe4c01.js\", \"\\u002F\\u002Fs1.hdslb.com\\u002Fbfs\\u002Fstatic\\u002Fpgcv\\u002Fvideo.d78d6e85da752e622f857a963ae79be916fe4c01.js\"]\n        };\n        (function () {\n            var s;\n            (s = document.currentScript || document.scripts[document.scripts.length - 1]).parentNode.removeChild(s);\n        }());\n    </script>\n    <script type=\"text/javascript\">\n        if (window.__INITIAL_STATE__) {\n            var jsUrls = window.__INITIAL_STATE__.insertScripts || [];\n            function insertLink() {\n                for (var e = [\"//static.hdslb.com/phoenix/dist/css/comment.min.css?v=\" + Date.now(), \"//pay.bilibili.com/paysdk/bilipay.css\"], i = 0; i < e.length; i++) {\n                    var t = document.createElement(\"link\");\n                    t.rel = \"stylesheet\",\n                        t.type = \"text/css\",\n                        t.href = e[i],\n                        document.body.appendChild(t)\n                }\n            }\n            function insertScript() {\n                if (!(window.scriptIsInject || jsUrls[0] && -1 < window.document.body.innerHTML.indexOf(jsUrls[0]))) {\n                    window.scriptIsInject = !0,\n                        window.jQuery || jsUrls.unshift(\"//static.hdslb.com/js/jquery.min.js\"),\n                        window.Promise || jsUrls.unshift(\"//static.hdslb.com/js/promise.auto.min.js\"),\n                        jsUrls.push(\"//s1.hdslb.com/bfs/static/ogv/fe/iris.min.js?v=20210112.1\");\n                    for (var e = 0; e < jsUrls.length; e++)\n                        loadScript(jsUrls[e])\n                }\n            }\n            function loadScript(e, i) {\n                var t = document.createElement(\"script\");\n                t.type = \"text/javascript\",\n                    -1 == (t.src = e).indexOf(\"jquery\") && -1 == e.indexOf(\"promise\") && (t.crossOrigin = \"true\"),\n                    document.body.appendChild(t),\n                    t.onload = function () {\n                        i && i()\n                    }\n            }\n            var ep = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.epInfo\n                , md = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.mediaInfo;\n            function getCookie(e) {\n                var i = new RegExp(\"(^| )\" + e + \"=([^;]*)(;|$)\")\n                    , t = document.cookie.match(i);\n                return t ? unescape(t[2]) : null\n            }\n            function setSize() {\n                var e = md.specialCover ? 1070 : 1280\n                    , i = 350\n                    , t = window.innerHeight || document.documentElement.clientHeight\n                    , o = window.innerWidth || window.document.documentElement.clientWidth\n                    , n = Math.round(md.specialCover ? 16 * (t - 264) / 9 - i : 16 * (.743 * t - 108.7) / 9)\n                    , d = o - 152 - i\n                    , s = d < n ? d : n;\n                s < 638 && (s = 638),\n                    e < s && (s = e);\n                var a = s + i\n                    , r = o < a + 152\n                    , l = document.querySelector(\".main-container\");\n                if (l.style.width = (r ? a + 76 : a) + \"px\",\n                    l.style.paddingLeft = (r ? 76 : 0) + \"px\",\n                    l.style.marginLeft = r ? \"0\" : \"\",\n                    l.style.marginRight = r ? \"0\" : \"\",\n                    md.specialCover) {\n                    var p = Math.round(9 * a / 16 + 46);\n                    (y = document.querySelector(\"#player_module\")).style.height = p + \"px\",\n                        y.style.width = a + \"px\",\n                        y.style.paddingLeft = \"\",\n                        y.style.left = r ? \"76px\" : \"\",\n                        y.style.transform = r ? \"none\" : \"\",\n                        y.style.webkitTransform = r ? \"none\" : \"\";\n                    var _ = document.querySelector(\".special-cover\")\n                        , w = document.querySelector(\".plp-l\")\n                        , c = document.querySelector(\".plp-r\")\n                        , m = document.querySelector(\"#danmukuBox\");\n                    _.style.height = p + 218 + \"px\",\n                        w.style.paddingTop = p + 24 + \"px\",\n                        c.style.marginTop = p + 40 + \"px\",\n                        window.isWide ? (m.style.top = \"0px\",\n                            m.style.position = \"relative\") : (m.style.top = -(p + 40) + \"px\",\n                                m.style.position = \"absolute\")\n                } else {\n                    var u = parseInt(9 * (s + (window.isWide ? i : 0)) / 16) + 46 + (window.hasBlackSide && !window.isWide ? 96 : 0);\n                    if ((m = document.querySelector(\"#danmukuBox\")).style.top = \"\",\n                        window.isWide) {\n                        (y = document.querySelector(\"#player_module\")).style.height = u - 0 + \"px\",\n                            y.style.width = \"\",\n                            y.style.paddingLeft = r ? \"76px\" : \"\",\n                            y.style.left = \"\",\n                            y.style.transform = \"\",\n                            y.style.webkitTransform = \"\";\n                        w = document.querySelector(\".plp-l\"),\n                            c = document.querySelector(\".plp-r\");\n                        w.style.paddingTop = u - 0 + \"px\",\n                            c.style.marginTop = u + 16 + \"px\"\n                    } else {\n                        var y;\n                        (y = document.querySelector(\"#player_module\")).style.height = u - 0 + \"px\",\n                            y.style.width = \"\",\n                            y.style.paddingLeft = \"\",\n                            y.style.left = \"\",\n                            y.style.transform = \"\",\n                            y.style.webkitTransform = \"\";\n                        w = document.querySelector(\".plp-l\"),\n                            c = document.querySelector(\".plp-r\");\n                        w.removeAttribute(\"style\"),\n                            c.removeAttribute(\"style\")\n                    }\n                }\n            }\n            if (window.isWide = md.forceWide || !!md.specialCover || !md.multiMode,\n                window.hasBlackSide = Boolean(parseInt(getCookie(\"blackside_state\"))),\n                window.PlayerAgent = {\n                    player_widewin: function () {\n                        window.isWide = !0,\n                            setSize()\n                    },\n                    player_fullwin: function () {\n                        window.isWide = !1,\n                            setSize()\n                    },\n                    toggleBlackSide: function (e) {\n                        window.hasBlackSide = e,\n                            setSize()\n                    }\n                },\n                setSize(),\n                window.document.body.style.opacity = \"\",\n                window.addEventListener(\"resize\", setSize),\n                !(ep && ep.loaded && -1 < ep.id) || md.rights.appOnly || md.premiereInfo && md.premiereInfo.epid === ep.id)\n                insertScript();\n            else {\n                var r = function (s) {\n                    window.pgcPlayerLoaded = !0;\n                    var e = window.__PGC_USERSTATE__.vip_info || {}\n                        , a = window.__PGC_USERSTATE__.login && (1 === window.__PGC_USERSTATE__.pay || 1 === window.__PGC_USERSTATE__.sponsor || 1 === window.__PGC_USERSTATE__.pay_pack_paid || 0 !== e.type && 1 === e.status);\n                    window.playerCallback = function () {\n                        window.jwTimer = setInterval(function () {\n                            var e = window.document.querySelector(\"#player_placeholder\");\n                            \"function\" == typeof e.jwAddEventListener && (e.jwAddEventListener(\"jwplayerMediaComplete\", \"function(){ window.showPreviewMask();}\"),\n                                clearInterval(window.jwTimer))\n                        }, 1e3);\n                        var e = function () {\n                            window.player && \"function\" == typeof window.player.addEventListener && (window.player.addEventListener(\"video_media_play\", function () {\n                                window.hadVideoPlay = !0\n                            }),\n                                window.player.addEventListener(\"video_media_seek\", function () {\n                                    window.hadVideoPlay = !0\n                                }),\n                                clearInterval(window.vMediaPTimer))\n                        };\n                        window.vMediaPTimer = setInterval(e, 1e3),\n                            e()\n                    }\n                        ,\n                        window.getPlayerExtraParams = function () {\n                            var e = window.__PGC_USERSTATE__.paster || {}\n                                , i = ep.skip || {}\n                                , t = window.__PGC_USERSTATE__.progress || {\n                                    last_ep_id: -1\n                                }\n                                , o = !1;\n                            o = !window.hadVideoPlay && (t.last_ep_id < 0 && !t.last_ep_index && !t.last_time);\n                            var n = window.__PGC_USERSTATE__ && window.__PGC_USERSTATE__.epsToastType\n                                , d = window.__PGC_USERSTATE__ && window.__PGC_USERSTATE__.toastTypeMap;\n                            return {\n                                title: ep.longTitle ? ep.titleFormat + \" \" + ep.longTitle : ep.titleFormat,\n                                mediaTitle: md.title,\n                                epTitle: ep.longTitle,\n                                epIndex: ep.titleFormat,\n                                epCover: ep.cover,\n                                epStat: ep.epStatus || md.status,\n                                squarePic: md.squareCover || \"//static.hdslb.com/images/square-cover-default.png\",\n                                record: 0 !== ep.sectionType ? \"\" : md.playerRecord ? encodeURIComponent(md.playerRecord) : \"\",\n                                shareText: window.__INITIAL_STATE__.h1Title + \" #åå©åå©#\",\n                                sharePic: md.cover,\n                                shareUrl: \"//www.bilibili.com/bangumi/play/ss\" + md.ssId + \"/\",\n                                isStart: md.pub.isStart || !md.rights.canWatch && 0 !== ep.sectionType,\n                                isPreview: md.rights.isPreview && s,\n                                allowTicket: md.payMent.sixType.allowTicket,\n                                deadLineToast: md.payMent.sixType.allowTimeLimit && !s && window.__PGC_USERSTATE__.dead_line ? window.__PGC_USERSTATE__.dead_line : void 0,\n                                canPlay1080: a,\n                                allowSponsor: md.rights.allowBp,\n                                multiMode: md.multiMode,\n                                epNeedPay: s,\n                                isFollow: 1 === window.__PGC_USERSTATE__.follow,\n                                canWatch: md.rights.canWatch,\n                                sponsorWeekList: [],\n                                sponsorTotalList: [],\n                                sponsorCount: 0,\n                                danmakuListOffset: md.specialCover ? 0 : 64,\n                                paster: {\n                                    aid: ep.aid || 0,\n                                    cid: e.aid || 0,\n                                    type: e.type || 0,\n                                    duration: e.duration || 0,\n                                    allow_jump: e.allow_jump || 0,\n                                    url: e.url ? e.url : \"\"\n                                },\n                                pubTime: md.pub.timeShow,\n                                recommend: [],\n                                epList: {},\n                                nextEp: null,\n                                headTail: {\n                                    first: !!window.__PGC_USERSTATE__.login && o,\n                                    op: [i.op && i.op.start || 0, i.op && i.op.end || 0],\n                                    ed: [i.ed && i.ed.start || 0, i.ed && i.ed.end || 0],\n                                    hasSkip: ep.hasSkip || !1\n                                },\n                                whitelistToast: n && d && \"white_can_watch\" === n[ep.id] && d[n[ep.id]] && d[n[ep.id]].text_info,\n                                preSaleToast: n && d && \"presell\" === n[ep.id] && d[n[ep.id]] && d[n[ep.id]].text_info\n                            }\n                        }\n                        ;\n                    var i, t, o;\n                    if (\"bangumi\" === ep.from) {\n                        var n = (i = new RegExp(\"(^|&)\" + \"t\" + \"=([^&|^#]*)(&|#|$)\"),\n                            t = window.location.href.split(\"?\"),\n                            null !== (o = (1 < t.length ? t[1] : \"\").match(i)) ? unescape(o[2]) : \"\")\n                            , d = window.__PGC_USERSTATE__.progress || {}\n                            , r = d.last_time || 0\n                            , l = -1 < d.last_ep_id ? d.last_ep_id : void 0\n                            , p = encodeURIComponent(\"module=\" + (2 !== md.ssType ? \"bangumi\" : \"movie\") + \"&season_type=\" + md.ssType)\n                            , _ = (1 === (e = window.__PGC_USERSTATE__.vipInfo || {}).type || 2 === e.type) && 1 === e.status\n                            , w = window.__PGC_USERSTATE__.paster || {}\n                            , c = !_ && 1 !== window.__PGC_USERSTATE__.pay && 1 !== window.__PGC_USERSTATE__.sponsor && w.cid && 0 < w.cid ? 1 : void 0\n                            , m = window.__BILI_CONFIG__ && window.__BILI_CONFIG__.show_bv && ep.bvid ? \"&bvid=\" + ep.bvid + \"&show_bv=1\" : \"\"\n                            , u = \"cid=\" + ep.cid + \"&aid=\" + ep.aid + m + \"&season_type=\" + md.ssType + (r ? \"&lastplaytime=\" + 1e3 * r : \"\") + (l ? \"&last_ep_id=\" + l : \"\") + (c ? \"&pre_ad=1\" : \"\") + \"&has_next=\" + (ep.hasNext ? 1 : \"\") + (window.isWide ? \"&as_wide=1\" : \"\") + \"&player_type=\" + (2 !== md.ssType ? 1 : 2) + \"&urlparam=\" + p + \"&seasonId=\" + md.ssId + \"&episodeId=\" + ep.id + \"&record=\" + (0 !== ep.sectionType ? \"\" : md.playerRecord ? encodeURIComponent(md.playerRecord) : \"\") + \"&t=\" + n + (ep.attribute ? \"&attribute=\" + ep.attribute : \"\");\n                        window.EmbedPlayer(\"player\", \"//static.hdslb.com/play.swf\", u, \"\", \"\", window.playerCallback)\n                    } else {\n                        (window.document.querySelector(\"#bilibili-player\") || window.document.querySelector(\"#bofqi\")).innerHTML = '<embed height=\"100%\" width=\"100%\" src=\"//static.hdslb.com/tc.swf\" type=\"application/x-shockwave-flash\" pluginspage=\"//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" allowscriptaccess=\"always\" rel=\"noreferrer\" quality=\"high\" flashvars=\"bili-cid=' + ep.cid + \"&amp;bili-aid=\" + ep.aid + \"&amp;vid=\" + ep.vid + '\" allowfullscreen=\"true\">'\n                    }\n                }\n                    , promiseArr = [];\n                if (window.__PGC_USERSTATE__)\n                    startPlayer();\n                else {\n                    var cnt = 0;\n                    function t() {\n                        new Promise(function (e) {\n                            window.$.ajax({\n                                url: \"//api.bilibili.com/pgc/view/web/season/user/status\",\n                                type: \"get\",\n                                dataType: \"json\",\n                                xhrFields: {\n                                    withCredentials: !0\n                                },\n                                data: {\n                                    season_id: md.ssId,\n                                    ts: (new Date).getTime()\n                                },\n                                success: function (e) {\n                                    0 === e.code ? window.__PGC_USERSTATE__ = e.result || {} : window.__PGC_USERSTATE__ = {}\n                                }\n                            }).always(e)\n                        }\n                        ).then(function () {\n                            startPlayer()\n                        })\n                    }\n                    window.jQuery || (cnt += 1,\n                        loadScript(\"//static.hdslb.com/js/jquery.min.js\", function () {\n                            0 == --cnt && t()\n                        })),\n                        window.Promise || (cnt += 1,\n                            loadScript(\"//static.hdslb.com/js/promise.auto.min.js\", function () {\n                                0 == --cnt && t()\n                            }))\n                }\n                function startPlayer() {\n                    var e = !1\n                        , i = !0\n                        , t = !1;\n                    window.__INITIAL_STATE__.sections.forEach(function (e) {\n                        0 < e.epList.length && (t = !0)\n                    });\n                    var o = window.__PGC_USERSTATE__.vipInfo || {}\n                        , n = o && (1 === o.type || 2 === o.type) && 1 === o.status\n                        , d = !(6 !== ep.epStatus && 7 !== ep.epStatus && 13 !== ep.epStatus || window.__PGC_USERSTATE__.login && n)\n                        , s = 12 === ep.epStatus && (!window.__PGC_USERSTATE__.login || 1 !== window.__PGC_USERSTATE__.pay_pack_paid)\n                        , a = ep.rights && ep.rights.allow_demand && window.__PGC_USERSTATE__.demand && window.__PGC_USERSTATE__.demand.no_pay_epids && -1 !== window.__PGC_USERSTATE__.demand.no_pay_epids.indexOf(ep.id);\n                    if (1 !== window.__PGC_USERSTATE__.pay && (d || 8 === ep.epStatus || 9 === ep.epStatus || s) && (e = !0),\n                        a || 14 === ep.epStatus ? e = !0 : md.pub.isStart || 0 !== window.__INITIAL_STATE__.epList.length || t ? md.rights.isPreview && !ep.attribute && (0 < window.__INITIAL_STATE__.epList.length || t) ? i = !0 : e && (i = !1) : i = !1,\n                        i) {\n                        if (\"bangumi\" === ep.from) {\n                            var l = setTimeout(function () {\n                                clearTimeout(l),\n                                    window.PlayerMediaLoaded = void 0,\n                                    insertScript()\n                            }, 4e3);\n                            window.PlayerMediaLoaded = function () {\n                                clearTimeout(l),\n                                    window.performance && window.performance.timing && (window.performance.timing.firstscreenfinish = window.performance.timing.playerStage3 || (new Date).getTime()),\n                                    insertScript(),\n                                    window.PlayerMediaLoaded = void 0\n                            }\n                        } else\n                            insertScript();\n                        r(e)\n                    } else\n                        insertScript()\n                }\n            }\n        }\n    </script>\n</body>\n\n</html>";

    function modifyGlobalValue(name, options) {
        const _window = window;
        const name_origin = `${name}_origin`;
        _window[name_origin] = _window[name];
        let value = undefined;
        Object.defineProperty(_window, name, {
            configurable: true,
            enumerable: true,
            get: () => {
                var _a;
                (_a = options === null || options === void 0 ? void 0 : options.onRead) === null || _a === void 0 ? void 0 : _a.call(options, value);
                return value;
            },
            set: (val) => {
                value = options.onWrite(val);
            }
        });
        if (_window[name_origin]) {
            _window[name] = _window[name_origin];
        }
    }
    let callbackCount = 1000;
    function appendScript(node, innerHTML, props) {
        // log(`fuck: ${JSON.stringify(props)}`)
        return new Promise((resolve, reject) => {
            let onLoad;
            if (props.src) {
                onLoad = resolve;
            }
            else if (!props.type || props.type === 'text/javascript') {
                const anyWindow = window;
                const key = `balh_appendScript_${callbackCount++}`;
                anyWindow[key] = resolve;
                innerHTML = `try { ${innerHTML} } finally { window['${key}'](); } `;
            }
            else {
                setTimeout(resolve, 0);
            }
            node.appendChild(createElement('script', {
                // ææå±æ§ä¸ºnull/''æ¶é½æ¿æ¢æundefined
                type: props.type || undefined,
                src: props.src || undefined,
                crossOrigin: props.crossOrigin || undefined,
                // æ è®ºæåå¤±è´¥, é½éè¦è®©å¼æ­¥æ¹æ³ç»§ç»­æ§è¡ä¸å»
                event: { load: onLoad, error: onLoad },
            }, innerHTML));
        });
    }
    function cloneChildNodes(fromNode, toNode) {
        return __awaiter(this, void 0, void 0, function* () {
            // å1: ä¸å®è¦ååºéå, forEachåé¨ä½¿ç¨çé¡ºåºéåå®ç°, ç´æ¥remove()ä¼è®©é¡ºåºæ··ä¹±
            for (let i = toNode.childNodes.length - 1; i >= 0; i--) {
                toNode.childNodes[i].remove();
            }
            for (let i = 0; i < fromNode.childNodes.length; i++) {
                const it = fromNode.childNodes[i];
                if (it instanceof HTMLScriptElement) {
                    // å2: è¦è®©scriptåå®¹æ­£å¸¸æ§è¡, ä¸å®è¦éæ°æå»ºscriptæ ç­¾
                    yield appendScript(toNode, it.innerHTML, { type: it.type, src: it.src, crossOrigin: it.crossOrigin });
                }
                else {
                    // å3: ä¸cloneå¯è½å¯¼è´forEachæ¹æ³åºé®é¢...
                    toNode.appendChild(it.cloneNode(true));
                }
            }
        });
    }
    function fixThailandSeason(ep_id, season_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // é¨åæ³°åºçªå§éè¿ bangumi æ æ³åå¾æ°æ®æèæ°æ®ä¸å®æ´
            // éè¿æ³°åº api è¡¥å¨
            // https://github.com/yujincheng08/BiliRoaming/issues/112
            const thailandApi = new BiliBiliApi(balh_config.server_custom_th);
            const origin = yield thailandApi.getSeasonInfoByEpSsIdOnThailand(ep_id, season_id);
            const input_episodes = origin.result.modules[0].data.episodes;
            origin.result.actors = origin.result.actor.info;
            origin.result.is_paster_ads = 0;
            origin.result.jp_title = origin.result.origin_name;
            origin.result.newest_ep = origin.result.new_ep;
            origin.result.season_status = origin.result.status;
            origin.result.season_title = origin.result.title;
            origin.result.total_ep = input_episodes.length;
            origin.result.rights.watch_platform = 1;
            origin.result.episodes = [];
            input_episodes.forEach((ep) => {
                var _a;
                ep.episode_status = ep.status;
                ep.ep_id = ep.id;
                ep.index = ep.title;
                ep.index_title = ep.long_title;
                (_a = origin.result.episodes) === null || _a === void 0 ? void 0 : _a.push(ep);
            });
            origin.result.style = [];
            (_a = origin.result.styles) === null || _a === void 0 ? void 0 : _a.forEach((it) => {
                origin.result.style.push(it.name);
            });
            let result = JSON.parse(JSON.stringify(origin));
            return result;
        });
    }
    let invalidInitialState;
    function fixBangumiPlayPage() {
        util_init(() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (util_page.bangumi_md()) {
                // ä¸´æ¶ä¿å­å½åçseason_id
                cookieStorage.set('balh_curr_season_id', (_b = (_a = window === null || window === void 0 ? void 0 : window.__INITIAL_STATE__) === null || _a === void 0 ? void 0 : _a.mediaInfo) === null || _b === void 0 ? void 0 : _b.season_id, '');
            }
            if (util_page.anime_ep() || util_page.anime_ss()) {
                const $app = document.getElementById('app');
                if (!$app || invalidInitialState) {
                    // è¿ä¸ªfixBangumiPlayPage()å½æ°ï¼æ¬æ¥æ¯ç¨æ¥éå»ºappOnlyé¡µé¢çï¼ä¸è¿æè¿è¿æ ·appOnlyçé¡µé¢åºæ¬ä¸æ²¡æäºï¼åèåºç°äºä¸æ¹éappOnlyä½é¡µé¢ä¹éè¦éå»ºçæåµ
                    // å¦ï¼https://www.bilibili.com/bangumi/media/md28235576
                    // æå½åé»è®¤å¼æ¹ä¸ºfalseð¤
                    let appOnly = (_e = (_d = (_c = invalidInitialState === null || invalidInitialState === void 0 ? void 0 : invalidInitialState.mediaInfo) === null || _c === void 0 ? void 0 : _c.rights) === null || _d === void 0 ? void 0 : _d.appOnly) !== null && _e !== void 0 ? _e : false;
                    try {
                        // è¯»åä¿å­çseason_id
                        const season_id = (window.location.pathname.match(/\/bangumi\/play\/ss(\d+)/) || ['', cookieStorage.get('balh_curr_season_id')])[1];
                        const ep_id = (window.location.pathname.match(/\/bangumi\/play\/ep(\d+)/) || ['', ''])[1];
                        const bilibiliApi = new BiliBiliApi(balh_config.server_bilibili_api_proxy);
                        let templateArgs = null;
                        // ä¸éå¶å°åºçæ¥å£ï¼å¯ä»¥æ¥è¯¢æ³°åºçªå§ï¼è¯¥æ¹æ³åç½®ç»ä»£çæå¡å¨åBPèçç¹è¯·æ±
                        // å¦æè¯¥æ¥å£å¤±æï¼èªå¨å°è¯åé¢çæ¹æ³
                        try {
                            let result = yield bilibiliApi.getSeasonInfoByEpSsIdOnBangumi(ep_id, season_id);
                            if (balh_config.server_custom_th && (result.code == -404 || result.result.up_info.mid == 677043260 /* ä¸»ç«æ®çæ³°åºæ°æ®ï¼é¨åä¸å®æ´ */)) {
                                result = yield fixThailandSeason(ep_id, season_id);
                                appOnly = true;
                            }
                            if (result.code) {
                                throw result;
                            }
                            const ep = ep_id != '' ? result.result.episodes.find(ep => ep.ep_id === +ep_id) : result.result.episodes[0];
                            if (!ep) {
                                throw `éè¿bangumiæ¥å£æªæ¾å°${ep_id}å¯¹åºçè§é¢ä¿¡æ¯`;
                            }
                            const eps = JSON.stringify(result.result.episodes.map((item, index) => {
                                // è¿åçæ°æ®æ¯æåºçï¼ä¸éè¦å¦å¤æåº                                
                                if (/^\d+(\.\d+)?$/.exec(item.index)) {
                                    item.titleFormat = "ç¬¬" + item.index + "è¯ " + item.index_title;
                                }
                                else {
                                    item.titleFormat = item.index;
                                    item.index_title = item.index;
                                }
                                item.loaded = true;
                                item.epStatus = item.episode_status;
                                item.sectionType = 0;
                                item.id = +item.ep_id;
                                item.i = index;
                                item.link = 'https://www.bilibili.com/bangumi/play/ep' + item.ep_id;
                                item.title = item.index;
                                return item;
                            }));
                            let titleForma;
                            if (ep.index_title) {
                                titleForma = ep.index_title;
                            }
                            else {
                                titleForma = "ç¬¬" + ep.index + "è¯";
                            }
                            templateArgs = {
                                id: ep.ep_id,
                                aid: ep.aid,
                                cid: ep.cid,
                                bvid: ep.bvid,
                                title: ep.index,
                                titleFormat: titleForma,
                                htmlTitle: result.result.title,
                                mediaInfoId: result.result.media_id,
                                mediaInfoTitle: result.result.title,
                                evaluate: Strings.escapeSpecialChars(result.result.evaluate),
                                cover: result.result.cover,
                                episodes: eps,
                                ssId: result.result.season_id,
                                appOnly: appOnly,
                            };
                        }
                        catch (e) {
                            util_warn('éè¿bangumiæ¥å£è·åepä¿¡æ¯å¤±è´¥', e);
                        }
                        if (balh_config.server_bilibili_api_proxy && !templateArgs) {
                            try {
                                const result = yield bilibiliApi.getSeasonInfoByEpId(ep_id);
                                if (result.code) {
                                    throw result;
                                }
                                const ep = result.result.episodes.find(ep => ep.id === +ep_id);
                                if (!ep) {
                                    throw `æªæ¾å°${ep_id}å¯¹åºçè§é¢ä¿¡æ¯`;
                                }
                                const eps = JSON.stringify(result.result.episodes.map((item, index) => {
                                    item.loaded = true;
                                    item.epStatus = item.status;
                                    item.sectionType = 0;
                                    item.titleFormat = "ç¬¬" + item.title + "è¯ " + item.long_title;
                                    item.i = index;
                                    return item;
                                }));
                                templateArgs = {
                                    id: ep.id,
                                    aid: ep.aid,
                                    cid: ep.cid,
                                    bvid: ep.bvid,
                                    title: ep.title,
                                    titleFormat: ep.long_title,
                                    htmlTitle: result.result.season_title,
                                    mediaInfoId: result.result.media_id,
                                    mediaInfoTitle: result.result.season_title,
                                    evaluate: result.result.evaluate,
                                    cover: result.result.cover,
                                    episodes: eps,
                                    ssId: result.result.season_id,
                                    appOnly: appOnly,
                                };
                            }
                            catch (e) {
                                // å¾å¤balh_config.server_bilibili_api_proxyå¹¶ä¸æ¯æä»£çææApi
                                // catchä¸ä¸, åéå°ç¨biliplusçapiçè¯»åepçä¿¡æ¯
                                util_warn('éè¿èªå®ä¹ä»£çæå¡å¨è·åepä¿¡æ¯å¤±è´¥', e);
                            }
                        }
                        if (!templateArgs) {
                            if (!season_id) {
                                throw 'æ æ³è·åseason_id, è¯·åå·æ°å¨ç»å¯¹åºçwww.bilibili.com/bangumi/media/mdé¡µé¢';
                            }
                            const result = yield BiliPlusApi.season(season_id);
                            if (result.code) {
                                throw result;
                            }
                            const ep = result.result.episodes.find((ep) => ep.episode_id === ep_id);
                            if (!ep) {
                                throw 'æ æ³æ¥è¯¢å°epä¿¡æ¯, è¯·åå·æ°å¨ç»å¯¹åºçwww.bilibili.com/bangumi/media/mdé¡µé¢';
                            }
                            let pvCounter = 1;
                            const ep_length = result.result.episodes.length;
                            const eps = JSON.stringify(result.result.episodes.map((item) => {
                                if (/^\d+$/.exec(item.index)) {
                                    item.titleFormat = "ç¬¬" + item.index + "è¯ " + item.index_title;
                                    item.i = +item.index - 1;
                                }
                                else {
                                    item.titleFormat = item.index;
                                    item.i = ep_length - pvCounter;
                                    pvCounter++;
                                    item.index_title = item.index;
                                }
                                item.link = 'https://www.bilibili.com/bangumi/play/ep' + item.episode_id;
                                item.bvid = Converters.aid2bv(+item.av_id);
                                item.badge = '';
                                item.badge_info = { "bg_color": "#FB7299", "bg_color_night": "#BB5B76", "text": "" };
                                item.badge_type = 0;
                                item.title = item.index;
                                item.id = +item.episode_id;
                                item.cid = +item.danmaku;
                                item.aid = +item.av_id;
                                item.loaded = true;
                                item.epStatus = item.episode_status;
                                item.sectionType = item.episode_type;
                                item.rights = { 'allow_demand': 0, 'allow_dm': 1, 'allow_download': 0, 'area_limit': 0 };
                                return item;
                            }).sort((a, b) => {
                                return a.i - b.i; // BPæ¥å£è¿åçæ°æ®æ¯æ åºçï¼éè¦æåº
                            }));
                            templateArgs = {
                                id: ep.episode_id,
                                aid: ep.av_id,
                                cid: ep.danmaku,
                                bvid: Converters.aid2bv(+ep.av_id),
                                title: ep.index,
                                titleFormat: ep.index_title,
                                htmlTitle: result.result.title,
                                mediaInfoTitle: result.result.title,
                                mediaInfoId: (_g = (_f = result.result.media) === null || _f === void 0 ? void 0 : _f.media_id) !== null && _g !== void 0 ? _g : 28229002,
                                evaluate: result.result.evaluate,
                                cover: result.result.cover,
                                episodes: eps,
                                ssId: season_id,
                                appOnly: appOnly,
                            };
                        }
                        const pageTemplateString = Strings.replaceTemplate(pageTemplate, templateArgs);
                        const template = new DOMParser().parseFromString(pageTemplateString, 'text/html');
                        yield cloneChildNodes(template.getElementsByTagName('head')[0], document.head);
                        yield cloneChildNodes(template.getElementsByTagName('body')[0], document.body);
                    }
                    catch (e) {
                        util_warn('éå»ºepé¡µé¢å¤±è´¥', e);
                        ui.alert(Objects.stringify(e));
                    }
                }
            }
            if (util_page.new_bangumi()) {
                let $eplist_module = document.getElementById('eplist_module');
                if (!$eplist_module) {
                    const $danmukuBox = document.getElementById('danmukuBox');
                    if (!$danmukuBox) {
                        util_warn('danmukuBox not found!');
                        return;
                    }
                    // æå¥eplist_moduleçä½ç½®ååå®¹ä¸å®è¦æ¯è¿æ ·... ä¸è½æ¹...
                    // åéäºä¼å¯¼è´Vueæ¸²æåºé, æ¯å¦è§é¢æ­æ¾çªå£æ¶å¤±ä¹ç±»ç(â¯Â°å£Â°)â¯(â´ââ´
                    const $template = createElement('template', {}, `<div id="eplist_module" class="ep-list-wrapper report-wrap-module"><div class="list-title clearfix"><h4 title="æ­£ç">æ­£ç</h4> <span class="mode-change" style="position:relative"><i report-id="click_ep_switch" class="iconfont icon-ep-list-detail"></i> <!----></span> <!----> <span class="ep-list-progress">8/8</span></div> <div class="list-wrapper" style="display:none;"><ul class="clearfix" style="height:-6px;"></ul></div></div>`.trim());
                    (_h = $danmukuBox.parentElement) === null || _h === void 0 ? void 0 : _h.replaceChild($template.content.firstElementChild, $danmukuBox.nextSibling.nextSibling);
                }
            }
        }));
    }
    function area_limit_for_vue() {
        if (isClosed())
            return;
        if (!((util_page.av() && balh_config.enable_in_av) || util_page.new_bangumi())) {
            return;
        }
        function replacePlayInfo() {
            util_debug("window.__playinfo__", window.__playinfo__);
            window.__playinfo__origin = window.__playinfo__;
            let playinfo = undefined;
            // å°__playinfo__ç½®ç©º, è®©æ­æ¾å¨å»éæ°å è½½å®...
            Object.defineProperty(window, '__playinfo__', {
                configurable: true,
                enumerable: true,
                get: () => {
                    util_debug('__playinfo__', 'get');
                    return playinfo;
                },
                set: (value) => {
                    // debugger
                    util_debug('__playinfo__', 'set');
                    // åå§çplayinfoä¸ºç©º, ä¸é¡µé¢å¨loadingç¶æ, è¯´æè¿æ¯htmlä¸­å¯¹playinfoè¿è¡çèµå¼, è¿ä¸ªå¼å¯è½æ¯æåºåéå¶ç, ä¸è½è¦
                    if (!window.__playinfo__origin && window.document.readyState === 'loading') {
                        util_debug('__playinfo__', 'init in html', value);
                        window.__playinfo__origin = value;
                        return;
                    }
                    playinfo = value;
                },
            });
        }
        function replaceUserState() {
            modifyGlobalValue('__PGC_USERSTATE__', {
                onWrite: (value) => {
                    if (value) {
                        // åºåéå¶
                        // todo      : è°ç¨areaLimit(limit), ä¿å­åºåéå¶ç¶æ
                        // 2019-08-17: ä¹åçæ¥å£è¿æç¨, è¿éåä¸ä¿å­~~
                        value.area_limit = 0;
                        // ä¼åç¶æ
                        if (balh_config.blocked_vip && value.vip_info) {
                            value.vip_info.status = 1;
                            value.vip_info.type = 2;
                        }
                    }
                    return value;
                }
            });
        }
        function replaceInitialState() {
            modifyGlobalValue('__INITIAL_STATE__', {
                onWrite: (value) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (((_a = value === null || value === void 0 ? void 0 : value.epInfo) === null || _a === void 0 ? void 0 : _a.id) === -1 && ((_b = value === null || value === void 0 ? void 0 : value.epList) === null || _b === void 0 ? void 0 : _b.length) === 0 && ((_d = (_c = value === null || value === void 0 ? void 0 : value.mediaInfo) === null || _c === void 0 ? void 0 : _c.rights) === null || _d === void 0 ? void 0 : _d.limitNotFound) === true) {
                        invalidInitialState = value;
                        return undefined;
                    }
                    if (value && value.epInfo && value.epList && balh_config.blocked_vip) {
                        for (let ep of [value.epInfo, ...value.epList]) {
                            // 13è²ä¼¼è¡¨ç¤ºä¼åè§é¢, 2ä¸ºæ®éè§é¢
                            if (ep.epStatus === 13) {
                                util_debug('epStatus 13 => 2', ep);
                                ep.epStatus = 2;
                            }
                        }
                    }
                    if (((_f = (_e = value === null || value === void 0 ? void 0 : value.mediaInfo) === null || _e === void 0 ? void 0 : _e.rights) === null || _f === void 0 ? void 0 : _f.appOnly) === true) {
                        value.mediaInfo.rights.appOnly = false;
                        window.__balh_app_only__ = true;
                    }
                    ifNotNull((_g = value === null || value === void 0 ? void 0 : value.epInfo) === null || _g === void 0 ? void 0 : _g.rights, (it) => it.area_limit = 0);
                    (_h = value === null || value === void 0 ? void 0 : value.epList) === null || _h === void 0 ? void 0 : _h.forEach((it) => ifNotNull(it === null || it === void 0 ? void 0 : it.rights, (it) => it.area_limit = 0));
                    return value;
                }
            });
        }
        replaceInitialState();
        replaceUserState();
        replacePlayInfo();
        fixBangumiPlayPage();
        modifyGlobalValue('BilibiliPlayer', {
            onWrite: (value) => {
                return value;
            },
            onRead: (value) => {
            }
        });
    }

    function isLogin() {
        return localStorage.oauthTime !== undefined;
    }
    function clearLoginFlag() {
        delete localStorage.oauthTime;
    }
    function updateLoginFlag(loadCallback) {
        Async.jsonp(balh_config.server + '/login?act=expiretime')
            .then(() => loadCallback && loadCallback(true));
        // .catch(() => loadCallback && loadCallback(false)) // è¯·æ±å¤±è´¥ä¸éè¦åè°
    }
    function isLoginBiliBili() {
        return cookieStorage['DedeUserID'] !== undefined;
    }
    // å½åå¨å¦ä¸æåµæä¼å¼¹ä¸æ¬¡ç»å½æç¤ºæ¡:
    // 1. ç¬¬ä¸æ¬¡ä½¿ç¨
    // 2. ä¸»ç«+æå¡å¨é½éåºç»å½å, åéæ°ç»å½ä¸»ç«
    function checkLoginState() {
        // ç»ä¸äºç¶æï¼è®¾ç½®åå§å¼
        localStorage.balh_must_remind_login_v3 === undefined && (localStorage.balh_must_remind_login_v3 = r.const.TRUE);
        if (isLoginBiliBili()) {
            if (!localStorage.balh_old_isLoginBiliBili // ä¸»ç« ä¸ç»å½ => ç»å½
                || localStorage.balh_pre_server !== balh_config.server // ä»£çæå¡å¨æ¹åäº
                || localStorage.balh_must_remind_login_v3) { // è®¾ç½®äº"å¿é¡»æé"flag
                clearLoginFlag();
                updateLoginFlag(() => {
                    if (!isLogin() || !localStorage.access_key) {
                        localStorage.balh_must_remind_login_v3 = r.const.FALSE;
                        ui.pop({
                            content: [
                                createElement('text', `${GM_info.script.name}\nè¦ä¸è¦èèè¿è¡ä¸ä¸ææï¼\n\nææåå¯ä»¥è§çåºåéå®çªå§ç1080P\nï¼å¦æä½ æ¯å¤§ä¼åææ¿åè¿è¿é¨çªçè¯ï¼\n\nä½ å¯ä»¥éæ¶å¨è®¾ç½®ä¸­æå¼ææé¡µé¢`)
                            ],
                            onConfirm: () => {
                                var _a;
                                biliplus_login.showLogin();
                                (_a = document.querySelector('#AHP_Notice')) === null || _a === void 0 ? void 0 : _a.remove();
                            }
                        });
                    }
                });
            }
            else if ((isLogin() && Date.now() - parseInt(localStorage.oauthTime) > 24 * 60 * 60 * 1000) // å·²ç»å½ï¼æ¯å¤©ä¸ºå¨ææ£æµkeyæææï¼è¿æåäºå¤©ä¼èªå¨ç»­æ
                || localStorage.balh_must_updateLoginFlag) { // æäºæåµä¸ï¼å¿é¡»æ´æ°ä¸æ¬¡
                updateLoginFlag(() => localStorage.balh_must_updateLoginFlag = r.const.FALSE);
            }
        }
        localStorage.balh_old_isLoginBiliBili = isLoginBiliBili() ? r.const.TRUE : r.const.FALSE;
        localStorage.balh_pre_server = balh_config.server;
    }
    function showLogin() {
        const balh_auth_window = window.open('about:blank');
        balh_auth_window.document.title = 'BALH - ææ';
        balh_auth_window.document.body.innerHTML = '<meta charset="UTF-8" name="viewport" content="width=device-width">æ­£å¨è·åææï¼è¯·ç¨åâ¦â¦';
        window.balh_auth_window = balh_auth_window;
        window.$.ajax('https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=https%3A%2F%2Fwww.mcbbs.net%2Ftemplate%2Fmcbbs%2Fimage%2Fspecial_photo_bg.png&sign=04224646d1fea004e79606d3b038c84a', {
            xhrFields: { withCredentials: true },
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                if (data.data.has_login) {
                    balh_auth_window.document.body.innerHTML = '<meta charset="UTF-8" name="viewport" content="width=device-width">æ­£å¨è·³è½¬â¦â¦';
                    balh_auth_window.location.href = data.data.confirm_uri;
                }
                else {
                    balh_auth_window.close();
                    ui.alert('å¿é¡»ç»å½Bç«æè½æ­£å¸¸ææ', () => {
                        location.href = 'https://passport.bilibili.com/login';
                    });
                }
            },
            error: (e) => {
                alert('error');
            }
        });
    }
    function showLogout() {
        ui.popFrame(balh_config.server + '/login?act=logout');
    }
    // çå¬ç»å½message
    window.addEventListener('message', function (e) {
        var _a;
        if (typeof e.data !== 'string')
            return; // åªå¤çe.dataä¸ºstringçæåµ
        switch (e.data.split(':')[0]) {
            case 'BiliPlus-Login-Success': {
                //ç»å¥
                localStorage.balh_must_updateLoginFlag = r.const.TRUE;
                Promise.resolve('start')
                    .then(() => Async.jsonp(balh_config.server + '/login?act=getlevel'))
                    .then(() => location.reload())
                    .catch(() => location.reload());
                break;
            }
            case 'BiliPlus-Logout-Success': {
                //ç»åº
                clearLoginFlag();
                location.reload();
                break;
            }
            case 'balh-login-credentials': {
                (_a = window.balh_auth_window) === null || _a === void 0 ? void 0 : _a.close();
                let url = e.data.split(': ')[1];
                const access_key = new URL(url).searchParams.get('access_key');
                localStorage.access_key = access_key;
                ui.popFrame(url.replace('https://www.mcbbs.net/template/mcbbs/image/special_photo_bg.png', balh_config.server + '/login'));
                break;
            }
        }
    });
    util_init(() => {
        if (!(util_page.player() || util_page.av())) {
            checkLoginState();
        }
    }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER);
    const biliplus_login = {
        showLogin,
        showLogout,
        isLogin,
        isLoginBiliBili,
    };

    const balh_feature_runPing = function () {
        const pingOutput = document.getElementById('balh_server_ping');
        if (!pingOutput) {
            return;
        }
        let xhr = new XMLHttpRequest();
        let testUrl = [r.const.server.S0, r.const.server.S1];
        let testUrlIndex = 0;
        let isReused = false;
        let prevNow;
        let outputArr = [];
        if (balh_config.server_custom) {
            testUrl.push(balh_config.server_custom);
        }
        pingOutput.textContent = 'æ­£å¨è¿è¡æå¡å¨æµéâ¦';
        pingOutput.style.height = '100px';
        xhr.open('GET', '', true);
        xhr.onreadystatechange = function () {
            this.readyState == 4 && pingResult();
        };
        var pingLoop = function () {
            prevNow = performance.now();
            xhr.open('GET', testUrl[testUrlIndex] + '/api/bangumi', true);
            xhr.send();
        };
        var pingResult = function () {
            var duration = (performance.now() - prevNow) | 0;
            if (isReused)
                outputArr.push('\tå¤ç¨è¿æ¥ï¼' + duration + 'ms'), isReused = false, testUrlIndex++;
            else
                outputArr.push(testUrl[testUrlIndex] + ':'), outputArr.push('\tåæ¬¡è¿æ¥ï¼' + duration + 'ms'), isReused = true;
            pingOutput.textContent = outputArr.join('\n');
            testUrlIndex < testUrl.length ? pingLoop() : pingOutput.appendChild(createElement('a', { href: 'javascript:', event: { click: balh_feature_runPing } }, [createElement('text', '\nåæµä¸æ¬¡ï¼')]));
        };
        pingLoop();
    };
    function settings() {
        function addSettingsButton() {
            let indexNav = document.querySelector('.bangumi-nav-right, #index_nav, #fixnav_report');
            let settingBtnSvgContainer;
            const createBtnStyle = (size, diffCss) => {
                diffCss = diffCss || `
                        #balh-settings-btn {
                            bottom: 110px;
                            border: 1px solid #e5e9ef;
                            border-radius: 4px;
                            background: #f6f9fa;
                            margin-top: 4px;
                        }
                        #balh-settings-btn .btn-gotop {
                            text-align: center;
                        }
                    `;
                return createElement('style', {}, [createElement('text', `
                        ${diffCss}
                        #balh-settings-btn {
                            width: ${size};
                            height: ${size};
                            cursor: pointer;
                        }
                        #balh-settings-btn:hover {
                            background: #00a1d6;
                            border-color: #00a1d6;
                        }
                        #balh-settings-btn .icon-saturn {
                            width: 30px;
                            height: ${size};
                            fill: rgb(153,162,170);
                        }
                        #balh-settings-btn:hover .icon-saturn {
                            fill: white;
                        }
                `)]);
            };
            if (indexNav == null) {
                // ä¿¡æ¯é¡µæ·»å å°æé®å³ä¾§
                if (util_page.bangumi_md()) {
                    indexNav = document.querySelector('.media-info-btns');
                    indexNav === null || indexNav === void 0 ? void 0 : indexNav.appendChild(createBtnStyle('44px', `
                            #balh-settings-btn {
                                float: left;
                                margin: 3px 0 0 20px;
                                background: #FFF;
                                border-radius: 10px;
                            }
                            #balh-settings-btn>:first-child {
                                text-align: center;
                                height: 100%;
                            }
                        `));
                }
                else if (util_page.watchroom()) {
                    const _indexNav = indexNav = document.body.appendChild(createElement('div', { style: { position: 'fixed', right: '6px', bottom: '45px', zIndex: '129', textAlign: 'center', display: 'none' } }));
                    indexNav.appendChild(createBtnStyle('45px'));
                    window.addEventListener('scroll', (event) => {
                        _indexNav.style.display = window.scrollY < 600 ? 'none' : '';
                    });
                }
                else {
                    // æ°çè§é¢é¡µé¢çâè¿åé¡µé¢é¡¶é¨âæé®, ç±Vueæ§å¶, å¯¹åé¨htmlçä¿®æ¹ä¼è¢«éç½®, æåªè½éæ°åå»ºæ°çindexNav
                    let navTools = document.querySelector('.nav-tools, .float-nav');
                    if (navTools) {
                        let bottom = navTools.className.includes('float-nav') ? '53px' : '45px';
                        const _indexNav = indexNav = document.body.appendChild(createElement('div', { style: { position: 'fixed', right: '6px', bottom: bottom, zIndex: '129', textAlign: 'center', display: 'none' } }));
                        indexNav.appendChild(createBtnStyle('45px'));
                        window.addEventListener('scroll', (event) => {
                            _indexNav.style.display = window.scrollY < 600 ? 'none' : '';
                        });
                    }
                }
                if (indexNav) {
                    settingBtnSvgContainer = indexNav.appendChild(createElement('div', { id: 'balh-settings-btn', title: GM_info.script.name + ' è®¾ç½®', event: { click: showSettings } }, [createElement('div', {})])).firstChild;
                }
            }
            else {
                // è§é¢é¡µæ·»å å°åé¡¶é¨ä¸æ¹
                window.dispatchEvent(new Event('resize'));
                indexNav.style.display = 'block';
                indexNav.appendChild(createBtnStyle('46px'));
                settingBtnSvgContainer = indexNav.appendChild(createElement('div', { id: 'balh-settings-btn', title: GM_info.script.name + ' è®¾ç½®', event: { click: showSettings } }, [createElement('div', { className: 'btn-gotop' })])).firstChild;
            }
            settingBtnSvgContainer && (settingBtnSvgContainer.innerHTML = `<!-- https://www.flaticon.com/free-icon/saturn_53515 --><svg class="icon-saturn" viewBox="0 0 612.017 612.017"><path d="M596.275,15.708C561.978-18.59,478.268,5.149,380.364,68.696c-23.51-7.384-48.473-11.382-74.375-11.382c-137.118,0-248.679,111.562-248.679,248.679c0,25.902,3.998,50.865,11.382,74.375C5.145,478.253-18.575,561.981,15.724,596.279c34.318,34.318,118.084,10.655,216.045-52.949c23.453,7.365,48.378,11.344,74.241,11.344c137.137,0,248.679-111.562,248.679-248.68c0-25.862-3.979-50.769-11.324-74.24C606.931,133.793,630.574,50.026,596.275,15.708zM66.435,545.53c-18.345-18.345-7.919-61.845,23.338-117.147c22.266,39.177,54.824,71.716,94.02,93.943C128.337,553.717,84.837,563.933,66.435,545.53z M114.698,305.994c0-105.478,85.813-191.292,191.292-191.292c82.524,0,152.766,52.605,179.566,125.965c-29.918,41.816-68.214,87.057-113.015,131.839c-44.801,44.819-90.061,83.116-131.877,113.034C167.303,458.76,114.698,388.479,114.698,305.994z M305.99,497.286c-3.156,0-6.236-0.325-9.354-0.459c35.064-27.432,70.894-58.822,106.11-94.059c35.235-35.235,66.646-71.046,94.058-106.129c0.153,3.118,0.479,6.198,0.479,9.354C497.282,411.473,411.469,497.286,305.99,497.286z M428.379,89.777c55.303-31.238,98.803-41.683,117.147-23.338c18.402,18.383,8.187,61.902-23.204,117.377C500.095,144.62,467.574,112.043,428.379,89.777z"/></svg>`);
        }
        function _showSettings() {
            document.body.appendChild(settingsDOM);
            var form = settingsDOM.querySelector('form');
            // elementsåå«indexçå±æ§, åä»¥nameå½åçå±æ§, å¶ä¸­ä»¥nameå½åçå±æ§æ¯ä¸å¯æä¸¾ç, åªè½éè¿è¿ç§æ¹å¼è·ååºæ¥
            Object.getOwnPropertyNames(form.elements).forEach(function (name) {
                if (name.startsWith('balh_')) {
                    var key = name.replace('balh_', '');
                    var ele = form.elements[name];
                    if (ele.type === 'checkbox') {
                        ele.checked = balh_config[key];
                    }
                    else {
                        ele.value = balh_config[key];
                    }
                }
            });
            document.body.style.overflow = 'hidden';
        }
        // å¾é¡¶å±çªå£åæ¾ç¤ºè®¾ç½®çè¯·æ±
        function showSettings() {
            window.top.postMessage('balh-show-setting', '*');
        }
        // åªæé¡¶å±çªå£ææ¥æ¶è¯·æ±
        if (window === window.top) {
            window.addEventListener('message', (event) => {
                if (event.data === 'balh-show-setting') {
                    _showSettings();
                    window.$('#upos-server')[0].value = balh_config.upos_server || '';
                }
            });
        }
        function onSignClick(event) {
            settingsDOM.click();
            switch (event.target.attributes['data-sign'].value) {
                default:
                case 'in':
                    biliplus_login.showLogin();
                    break;
                case 'out':
                    biliplus_login.showLogout();
                    break;
            }
        }
        function onSettingsFormChange(e) {
            const target = e.target;
            var name = target.name;
            var value = target.type === 'checkbox' ? (target.checked ? r.const.TRUE : r.const.FALSE) : target.value.trim();
            if (name.startsWith('balh_server_custom')) {
                // èªå¨/å¼ºå¶æ·»å  https
                if (r.regex.bilibili_api_proxy.test(`https://${value}`)) {
                    value = `https://${value}`;
                    target.value = value;
                }
                if (r.regex.bilibili_api_proxy.test(value.replace('http://', 'https://'))) {
                    value = value.replace('http://', 'https://');
                    target.value = value;
                }
            }
            balh_config[name.replace('balh_', '')] = value;
            util_debug(name, ' => ', value);
        }
        // ç¬¬ä¸æ¬¡ç¹å»æ¶:
        // 1. 'å¤å¶æ¥å¿&é®é¢åé¦' => 'å¤å¶æ¥å¿'
        // 2. æ¾ç¤º'é®é¢åé¦'
        // 3. å¤å¶æååè¯·æ±è·³è½¬å°GitHub
        // ä¹åçç¹å», åªæ¯æ­£å¸¸çå¤å¶åè½~~
        function onCopyClick(event) {
            let issueLink = document.getElementById('balh-issue-link');
            if (!issueLink) {
                return;
            }
            let continueToIssue = issueLink.style.display === 'none';
            if (continueToIssue) {
                issueLink.style.display = 'inline';
                let copyBtn = document.getElementById('balh-copy-log');
                copyBtn.innerText = 'å¤å¶æ¥å¿';
            }
            let textarea = document.getElementById('balh-textarea-copy');
            textarea.style.display = 'inline-block';
            if (ui.copy(logHub.getAllMsg(), textarea)) {
                textarea.style.display = 'none';
                util_ui_msg.show(window.$(this), continueToIssue ? 'å¤å¶æ¥å¿æå; ç¹å»ç¡®å®, ç»§ç»­æäº¤é®é¢(éè¦GitHubå¸å·)\nè¯·ææ¥å¿ç²è´´å°é®é¢æè¿°ä¸­' : 'å¤å¶æå', continueToIssue ? 0 : 3e3, continueToIssue ? 'button' : undefined, continueToIssue ? openIssuePage : undefined);
            }
            else {
                util_ui_msg.show(window.$(this), 'å¤å¶å¤±è´¥, è¯·ä»ä¸é¢çææ¬æ¡æå¨å¤å¶', 5e3);
            }
        }
        function openIssuePage() {
            // window.open(r.url.issue)
            window.open(r.url.readme);
        }
        let printSystemInfoOk = false;
        // é¼ æ ç§»å¥è®¾ç½®åºé¨çæ¶å, æå°ä¸äºç³»ç»ä¿¡æ¯, æ¹ä¾¿é®é¢åé¦
        function onMouseEnterSettingBottom(event) {
            if (!printSystemInfoOk) {
                printSystemInfoOk = true;
                util_debug('userAgent', navigator.userAgent);
            }
        }
        let customServerCheckText;
        let customTWServerCheckText;
        let customHKServerCheckText;
        let customCNServerCheckText;
        let customTHServerCheckText;
        var settingsDOM = createElement('div', { id: 'balh-settings', style: { position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,.7)', animationName: 'balh-settings-bg', animationDuration: '.5s', zIndex: 10000, cursor: 'pointer' }, event: { click: function (e) { if (e.target === this)
                    util_ui_msg.close(), document.body.style.overflow = '', this.remove(); } } }, [
            createElement('style', {}, [createElement('text', r.css.settings)]),
            createElement('div', { style: { position: 'absolute', background: '#FFF', borderRadius: '10px', padding: '20px', top: '50%', left: '50%', width: '600px', transform: 'translate(-50%,-50%)', cursor: 'default' } }, [
                createElement('h1', {}, [createElement('text', `${GM_info.script.name} v${GM_info.script.version} åæ°è®¾ç½®`)]),
                createElement('br'),
                createElement('h6', { style: { color: '#d01d00', display: balh_config.server_custom ? 'none' : '' } }, [createElement('text', 'BiliPluså·²è¢«å±è½ï¼è¯·å¡«åèªå®ä¹ä»£çæå¡, è¯¦è§: '), createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/packages/unblock-area-limit/README.md#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8', target: '_blank' }, [createElement('text', 'å¸®å©>èªå®ä¹ä»£çæå¡å¨')])]),
                createElement('br'),
                createElement('form', { id: 'balh-settings-form', event: { change: onSettingsFormChange } }, [
                    createElement('text', 'ä»£çæå¡å¨ï¼'), createElement('a', { href: 'javascript:', event: { click: balh_feature_runPing } }, [createElement('text', 'æµé')]), createElement('br'),
                    createElement('div', { style: { display: 'flex' } }, [
                        // _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_server_inner', value: r.const.server.S0 }), _('text', 'åè±æ')]),
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'radio', disabled: 'true', name: 'balh_server_inner', value: r.const.server.S1 }), createElement('text', 'BiliPlus'), createElement('a', { href: 'https://www.biliplus.com/?about' }, [createElement('text', 'ï¼æèµ ï¼')]),
                        ]),
                        createElement('label', { style: { flex: 2 } }, [
                            createElement('input', { type: 'radio', name: 'balh_server_inner', value: r.const.server.CUSTOM }), createElement('text', `èªå®ä¹ï¼é¦éæå¡å¨ï¼`),
                            createElement('input', {
                                type: 'text', name: 'balh_server_custom', placeholder: 'ä¸å®è¦å¡«,å½¢å¦ï¼https://hd.pilipili.com',
                                event: {
                                    input: (event) => {
                                        onSettingsFormChange(event);
                                        customServerCheckText.innerText = r.regex.bilibili_api_proxy.test(event.target.value.trim()) ? 'âï¸' : 'ðï¸';
                                    }
                                }
                            }),
                            customServerCheckText = createElement('span'),
                        ]),
                    ]),
                    createElement('br'),
                    createElement('text', 'èªå®ä¹æå¡å¨åè¡¨'), createElement('a', { href: 'javascript:;', title: 'èæ¬ä¼ç¼å­å½åè§é¢æ¯å¦å±äºæ¸¯/æ¾³/å°/æ³°ï¼ä¿®æ¹ä»£çæå¡å¨å°åå, å»ºè®®æå¨æ¸é¤ä¸è¿ä¸ªç¼å­ã', event: { click: () => localStorage.removeItem('balh_bangumi_area_cache') } }, [createElement('text', 'ï¼æ¸é¤ç¼å­ï¼')]),
                    createElement('div', { style: { display: 'flex', 'flex-wrap': 'wrap' } }, [
                        createElement('label', { style: { flex: '1 1 50%' } }, [
                            createElement('text', `å°æ¹¾: `),
                            createElement('input', {
                                type: 'text', name: 'balh_server_custom_tw', placeholder: 'å½¢å¦ï¼https://hd.pilipili.com',
                                event: {
                                    input: (event) => {
                                        onSettingsFormChange(event);
                                        customTWServerCheckText.innerText = r.regex.bilibili_api_proxy.test(event.target.value.trim()) ? 'âï¸' : 'ðï¸';
                                    }
                                }
                            }),
                            customTWServerCheckText = createElement('span'),
                        ]),
                        createElement('label', { style: { flex: '1 1 50%' } }, [
                            createElement('text', `é¦æ¸¯: `),
                            createElement('input', {
                                type: 'text', name: 'balh_server_custom_hk', placeholder: 'å½¢å¦ï¼https://hd.pilipili.com',
                                event: {
                                    input: (event) => {
                                        onSettingsFormChange(event);
                                        customHKServerCheckText.innerText = r.regex.bilibili_api_proxy.test(event.target.value.trim()) ? 'âï¸' : 'ðï¸';
                                    }
                                }
                            }),
                            customHKServerCheckText = createElement('span'),
                        ]),
                        createElement('label', { style: { flex: '1 1 50%' } }, [
                            createElement('text', `å¤§é: `),
                            createElement('input', {
                                type: 'text', name: 'balh_server_custom_cn', placeholder: 'å½¢å¦ï¼https://hd.pilipili.com',
                                event: {
                                    input: (event) => {
                                        onSettingsFormChange(event);
                                        customCNServerCheckText.innerText = r.regex.bilibili_api_proxy.test(event.target.value.trim()) ? 'âï¸' : 'ðï¸';
                                    }
                                }
                            }),
                            customCNServerCheckText = createElement('span'),
                        ]),
                        createElement('label', { style: { flex: '1 1 50%' } }, [
                            createElement('text', `æ³°å½/ä¸åäº: `),
                            createElement('input', {
                                type: 'text', name: 'balh_server_custom_th', placeholder: 'å½¢å¦ï¼https://hd.pilipili.com',
                                event: {
                                    input: (event) => {
                                        onSettingsFormChange(event);
                                        customTHServerCheckText.innerText = r.regex.bilibili_api_proxy.test(event.target.value.trim()) ? 'âï¸' : 'ðï¸';
                                    }
                                }
                            }),
                            customTHServerCheckText = createElement('span'),
                        ])
                    ]),
                    createElement('br'),
                    createElement('div', { id: 'balh_server_ping', style: { whiteSpace: 'pre-wrap', overflow: 'auto' } }, []),
                    createElement('div', { style: { display: '' } }, [
                        createElement('text', 'uposæå¡å¨ï¼'), createElement('br'),
                        createElement('div', { style: { display: 'flex' } }, [
                            createElement('div', { title: 'åæ´å åæ¢æ¸æ°åº¦ æ å·æ° çæ', style: { flex: 1 } }, [
                                createElement('input', { style: { visibility: 'hidden' }, type: 'checkbox' }),
                                createElement('text', 'æ¿æ¢uposè§é¢æå¡å¨ï¼'),
                                createElement('select', {
                                    id: 'upos-server',
                                    event: {
                                        change: function () {
                                            let server = this.value;
                                            let message = window.$('#upos-server-message');
                                            balh_config.upos_server = server;
                                            document.getElementById('balh-upos-replace-akamai').disabled = !server;
                                            message.text(`å·²ä¿å­`);
                                        }
                                    }
                                }, [
                                    createElement('option', { value: "" }, [createElement('text', 'ä¸æ¿æ¢')]),
                                    createElement('option', { value: "ks3" }, [createElement('text', 'ks3ï¼éå±±ï¼')]),
                                    createElement('option', { value: "kodo" }, [createElement('text', 'kodoï¼ä¸çï¼')]),
                                    createElement('option', { value: "cos" }, [createElement('text', 'cosï¼è¾è®¯ï¼')]),
                                    createElement('option', { value: "bos" }, [createElement('text', 'bosï¼ç¾åº¦ï¼')]),
                                    createElement('option', { value: "wcs" }, [createElement('text', 'wcsï¼ç½å®¿ï¼')]),
                                    createElement('option', { value: "hw" }, [createElement('text', 'hwï¼251ï¼')]),
                                ]),
                                createElement('span', { 'id': 'upos-server-message' })
                            ]),
                            createElement('label', { style: { flex: 1 }, title: 'å¼å¯uposæ¿æ¢æ¶, æ¯å¦æ¿æ¢`akamaized.net`' }, [createElement('input', { id: 'balh-upos-replace-akamai', type: 'checkbox', name: 'balh_upos_replace_akamai', disabled: balh_config.upos_server ? undefined : 'true' }), createElement('text', 'æ¿æ¢akamai'), createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/pull/762#discussion_r569911774' }, [createElement('text', '(ï¼)')])]),
                        ]),
                        createElement('br'),
                    ]),
                    createElement('text', 'èæ¬å·¥ä½æ¨¡å¼ï¼'), createElement('br'),
                    createElement('div', { style: { display: 'flex' } }, [
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.DEFAULT }), createElement('text', 'é»è®¤ï¼èªå¨å¤æ­')]),
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.REPLACE }), createElement('text', 'æ¿æ¢ï¼å¨éè¦æ¶å¤ççªå§')]),
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.REDIRECT }), createElement('text', 'éå®åï¼å®å¨ä»£çææçªå§')])
                    ]), createElement('br'),
                    createElement('text', 'å¶ä»ï¼'), createElement('br'),
                    createElement('div', { style: { display: 'flex' } }, [
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'checkbox', name: 'balh_blocked_vip' }), createElement('text', 'è¢«æ°¸å°çå¤§ä¼å'), createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/packages/unblock-area-limit/README.md#å¤§ä¼åè´¦å·è¢«bç«æ°¸å°äº', target: '_blank' }, [createElement('text', '(ï¼)')])]),
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'checkbox', name: 'balh_enable_in_av' }), createElement('text', 'å¨AVé¡µé¢å¯ç¨'), createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/issues/172', target: '_blank' }, [createElement('text', '(ï¼)')])]),
                        createElement('div', { style: { flex: 1, display: 'flex' } }, [
                            createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'checkbox', name: 'balh_remove_pre_ad' }), createElement('text', 'å»åç½®å¹¿å')]),
                        ])
                    ]), createElement('br'),
                    createElement('div', { style: { display: 'flex' } }, [
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'checkbox', name: 'balh_generate_sub' }), createElement('text', 'ä¸ºç®ç¹å­å¹çæç¸åºçç¹ç®å­å¹')]),
                    ]), createElement('br'),
                    createElement('div', { style: { display: 'flex' } }, [
                        createElement('label', { style: { flex: 1 } }, [createElement('input', { type: 'checkbox', name: 'balh_is_closed' }), createElement('text', 'å³é­èæ¬ï¼èæ¬å½åè¿ææºå¤é®é¢, è¥å½±åæ­£å¸¸ä½¿ç¨, å¯ä»¥ä¸´æ¶å³é­å®ï¼'),]),
                    ]), createElement('br'),
                    createElement('a', { href: 'javascript:', 'data-sign': 'in', event: { click: onSignClick } }, [createElement('text', 'å¸å·ææ')]),
                    createElement('text', 'ã'),
                    createElement('a', { href: 'javascript:', 'data-sign': 'out', event: { click: onSignClick } }, [createElement('text', 'åæ¶ææ')]),
                    createElement('text', 'ãã'),
                    createElement('a', { href: 'javascript:', event: { click: function () { util_ui_msg.show(window.$(this), 'å¦æä½ çå¸å·è¿è¡äºä»è´¹ï¼ä¸è®ºæ¯å¤§ä¼åè¿æ¯æ¿åï¼\nè¿è¡ææä¹åå°å¯ä»¥å¨è§£é¤éå¶æ¶æ­£å¸¸äº«æè¿äºæç\n\nä½ å¯ä»¥éæ¶å¨è¿éæææåæ¶ææ\n\nä¸è¿è¡ææä¸ä¼å½±åèæ¬çæ­£å¸¸ä½¿ç¨ï¼ä½å¯è½ä¼ç¼ºå¤±1080P', 1e4); } } }, [createElement('text', 'ï¼è¿æ¯ä»ä¹ï¼ï¼')]),
                    createElement('br'), createElement('br'),
                    createElement('div', { style: { whiteSpace: 'pre-wrap' }, event: { mouseenter: onMouseEnterSettingBottom } }, [
                        createElement('a', { href: 'https://greasyfork.org/zh-CN/scripts/25718-%E8%A7%A3%E9%99%A4b%E7%AB%99%E5%8C%BA%E5%9F%9F%E9%99%90%E5%88%B6', target: '_blank' }, [createElement('text', 'èæ¬ä¸»é¡µ')]),
                        createElement('text', 'ã'),
                        createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/packages/unblock-area-limit/README.md', target: '_blank' }, [createElement('text', 'å¸®å©è¯´æ')]),
                        createElement('text', 'ã'),
                        createElement('a', { id: 'balh-copy-log', href: 'javascript:;', event: { click: onCopyClick } }, [createElement('text', 'å¤å¶æ¥å¿&é®é¢åé¦')]),
                        createElement('text', 'ã'),
                        createElement('a', { id: 'balh-issue-link', href: 'javascript:;', event: { click: openIssuePage }, style: { display: 'none' } }, [createElement('text', 'é®é¢åé¦')]),
                        createElement('a', { href: 'https://github.com/ipcjs/bilibili-helper/graphs/contributors' }, [createElement('text', 'è´¡ç®è')]),
                        createElement('text', ' æ¥å£ï¼'),
                        createElement('a', { href: 'https://www.biliplus.com/' }, [createElement('text', 'BiliPlus ')]),
                        createElement('a', { href: 'https://github.com/kghost/bilibili-area-limit' }, [createElement('text', 'kghost ')]),
                        createElement('a', { href: 'https://github.com/yujincheng08/BiliRoaming' }, [createElement('text', 'BiliRoaming ')]),
                    ]),
                    createElement('textarea', { id: 'balh-textarea-copy', style: { display: 'none' } })
                ])
            ])
        ]);
        util_init(() => {
            if (!(util_page.player() || (util_page.av() && !balh_config.enable_in_av))) {
                addSettingsButton();
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER);
        return {
            dom: settingsDOM,
            show: showSettings,
        };
    }

    function remove_pre_ad() {
        if (util_page.player()) {
            // æ­æ¾é¡µé¢urlä¸­çpre_adåæ°, å³å®æ¯å¦æ­æ¾å¹¿å...
            if (balh_config.remove_pre_ad && Strings.getSearchParam(location.href, 'pre_ad') === '1') {
                util_debug('éè¦è·³è½¬å°ä¸å«å¹¿åçurl');
                location.href = location.href.replace(/&?pre_ad=1/, '');
            }
        }
    }

    function injectFetch() {
        // å½åæªæ¿æ¢ä»»ä½åå®¹...
        const originFetch = window.fetch;
        window.fetch = function (input, init) {
            util_debug('fetch', input, init);
            return originFetch(input, init)
                .then(r => {
                // log('then', r)
                return r;
            });
        };
    }
    function injectFetch4Mobile() {
        util_debug('injectFetch4Mobile');
        window.fetch = Async.wrapper(window.fetch, resp => new Proxy(resp, {
            get: function (target, prop, receiver) {
                if (prop === 'json') {
                    return Async.wrapper(target.json.bind(target), oriResult => {
                        util_debug('injectFetch:', target.url);
                        if (target.url.match(RegExps.urlPath('/player/web_api/v2/playurl/html5'))) {
                            let cid = Strings.getSearchParam(target.url, 'cid');
                            return BiliPlusApi.playurl(cid)
                                .then(result => {
                                if (result.code) {
                                    return Promise.reject('error: ' + JSON.stringify(result));
                                }
                                else {
                                    return BiliPlusApi.playurl_for_mp4(cid)
                                        .then(url => {
                                        util_debug(`mp4å°å, ç§»å¨ç: ${url}, pcç: ${result.durl[0].url}`);
                                        return {
                                            "code": 0,
                                            "cid": `http://comment.bilibili.com/${cid}.xml`,
                                            "timelength": result.timelength,
                                            "src": url || result.durl[0].url,
                                        };
                                    });
                                }
                            })
                                .catch(e => {
                                // è¥æåè§é¢å°åå¤±è´¥, åè¿ååå§çç»æ
                                util_debug('fetch mp4 url failed', e);
                                return oriResult;
                            });
                        }
                        return oriResult;
                    }, error => error);
                }
                return target[prop];
            }
        }), error => error);
    }

    var space_account_info_map = {
        "11783021": { "code": 0, "message": "0", "ttl": 1, "data": { "mid": 11783021, "name": "åå©åå©çªå§åºå·®", "sex": "ä¿å¯", "face": "http://i0.hdslb.com/bfs/face/9f10323503739e676857f06f5e4f5eb323e9f3f2.jpg", "sign": "", "rank": 10000, "level": 6, "jointime": 0, "moral": 0, "silence": 0, "coins": 0, "fans_badge": false, "fans_medal": { "show": false, "wear": false, "medal": null }, "official": { "role": 3, "title": "åå©åå©çªå§åºå·® å®æ¹è´¦å·", "desc": "", "type": 1 }, "vip": { "type": 0, "status": 0, "due_date": 0, "vip_pay_type": 0, "theme_type": 0, "label": { "path": "", "text": "", "label_theme": "", "text_color": "", "bg_style": 0, "bg_color": "", "border_color": "" }, "avatar_subscript": 0, "nickname_color": "", "role": 0, "avatar_subscript_url": "" }, "pendant": { "pid": 0, "name": "", "image": "", "expire": 0, "image_enhance": "", "image_enhance_frame": "" }, "nameplate": { "nid": 0, "name": "", "image": "", "image_small": "", "level": "", "condition": "" }, "user_honour_info": { "mid": 0, "colour": null, "tags": [] }, "is_followed": true, "top_photo": "http://i2.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png", "theme": {}, "sys_notice": {}, "live_room": { "roomStatus": 1, "liveStatus": 0, "url": "https://live.bilibili.com/931774", "title": "ãæ¢¦ä¹ç¥­ï¼é¨ã ç¤¾å¢æ´»å¨æç»å", "cover": "http://i0.hdslb.com/bfs/live/c89c499096fa6527765de1fcaa021c9e2db7fbf8.jpg", "online": 0, "roomid": 931774, "roundStatus": 0, "broadcast_type": 0 }, "birthday": "", "school": { "name": "" }, "profession": { "name": "" }, "tags": null, "series": { "user_upgrade_status": 3, "show_upgrade_window": false } } },
        "1988098633": { "code": 0, "message": "0", "ttl": 1, "data": { "mid": 1988098633, "name": "bç«_æ²åå", "sex": "ä¿å¯", "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg", "sign": "æä¾bilibiliæ¸¯æ¾³å°å°åå°å±¬æ²åç¯ç®ã", "rank": 10000, "level": 2, "jointime": 0, "moral": 0, "silence": 0, "coins": 0, "fans_badge": false, "fans_medal": { "show": false, "wear": false, "medal": null }, "official": { "role": 0, "title": "", "desc": "", "type": -1 }, "vip": { "type": 0, "status": 0, "due_date": 0, "vip_pay_type": 0, "theme_type": 0, "label": { "path": "", "text": "", "label_theme": "", "text_color": "", "bg_style": 0, "bg_color": "", "border_color": "" }, "avatar_subscript": 0, "nickname_color": "", "role": 0, "avatar_subscript_url": "" }, "pendant": { "pid": 0, "name": "", "image": "", "expire": 0, "image_enhance": "", "image_enhance_frame": "" }, "nameplate": { "nid": 0, "name": "", "image": "", "image_small": "", "level": "", "condition": "" }, "user_honour_info": { "mid": 0, "colour": null, "tags": [] }, "is_followed": true, "top_photo": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png", "theme": {}, "sys_notice": {}, "live_room": { "roomStatus": 0, "liveStatus": 0, "url": "", "title": "", "cover": "", "online": 0, "roomid": 0, "roundStatus": 0, "broadcast_type": 0 }, "birthday": "01-01", "school": { "name": "" }, "profession": { "name": "" }, "tags": null, "series": { "user_upgrade_status": 3, "show_upgrade_window": false } } },
        "2042149112": { "code": 0, "message": "0", "ttl": 1, "data": { "mid": 2042149112, "name": "bç«_ç¶èå", "sex": "ä¿å¯", "face": "http://i0.hdslb.com/bfs/face/member/noface.jpg", "sign": "æä¾bilibiliæ¸¯æ¾³å°å°åå°å±¬ç¶èç¯ç®ã", "rank": 10000, "level": 3, "jointime": 0, "moral": 0, "silence": 0, "coins": 0, "fans_badge": false, "fans_medal": { "show": false, "wear": false, "medal": null }, "official": { "role": 0, "title": "", "desc": "", "type": -1 }, "vip": { "type": 0, "status": 0, "due_date": 0, "vip_pay_type": 0, "theme_type": 0, "label": { "path": "", "text": "", "label_theme": "", "text_color": "", "bg_style": 0, "bg_color": "", "border_color": "" }, "avatar_subscript": 0, "nickname_color": "", "role": 0, "avatar_subscript_url": "" }, "pendant": { "pid": 0, "name": "", "image": "", "expire": 0, "image_enhance": "", "image_enhance_frame": "" }, "nameplate": { "nid": 0, "name": "", "image": "", "image_small": "", "level": "", "condition": "" }, "user_honour_info": { "mid": 0, "colour": null, "tags": [] }, "is_followed": true, "top_photo": "http://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png", "theme": {}, "sys_notice": {}, "live_room": { "roomStatus": 0, "liveStatus": 0, "url": "", "title": "", "cover": "", "online": 0, "roomid": 0, "roundStatus": 0, "broadcast_type": 0 }, "birthday": "", "school": { "name": "" }, "profession": { "name": "" }, "tags": null, "series": { "user_upgrade_status": 3, "show_upgrade_window": false } } },
    };

    function scriptContent() {
        let log = console.log.bind(console, 'injector:');
        if (document.getElementById('balh-injector-source') && invokeBy === GM_info.scriptHandler) {
            // å½å, å¨Firefox+GM4ä¸­, å½è¿åç¼å­çé¡µé¢æ¶, èæ¬ä¼éæ°æ§è¡, å¹¶ä¸æ­¤æ¶XMLHttpRequestæ¯å¯ä¿®æ¹ç(ä¸ºä»ä¹ä¼è¿æ ·?) + é¡µé¢ä¸­å­å¨æ³¨å¥çä»£ç 
            // å¯¼è´scriptSourceçinvokeByç´æ¥æ¯GM4...
            log(`é¡µé¢ä¸­å­å¨æ³¨å¥çä»£ç , ä½invokeByå´ç­äº${GM_info.scriptHandler}, è¿ç§æåµä¸åç, ç»æ­¢èæ¬æ§è¡`);
            return
        }
        if (document.readyState === 'uninitialized') { // Firefoxä¸, å¯¹äºiframeä¸­æ§è¡çèæ¬, ä¼åºç°è¿æ ·çç¶æä¸è·åå°çhrefä¸ºabout:blank...
            log('invokeBy:', invokeBy, 'readState:', document.readyState, 'href:', location.href, 'éè¦ç­å¾è¿å¥loadingç¶æ');
            setTimeout(() => scriptSource(invokeBy + '.timeout'), 0); // è¿éä¼æ´åæ§è¡å¤æ¬¡, ç´å°ç¶æä¸ä¸ºuninitialized...
            return
        }

        log = util_debug;
        log(`[${GM_info.script.name} v${GM_info.script.version} (${invokeBy})] run on: ${window.location.href}`);

        version_remind();
        switch_to_old_player();

        area_limit_for_vue();

        const balh_feature_area_limit = (function () {
            if (isClosed()) return
            injectFetch();
            function injectXHR() {
                util_debug('XMLHttpRequestçæè¿°ç¬¦:', Object.getOwnPropertyDescriptor(window, 'XMLHttpRequest'));
                window.XMLHttpRequest = new Proxy(window.XMLHttpRequest, {
                    construct: function (target, args) {
                        let container = {}; // ç¨æ¥æ¿æ¢responseTextç­åé
                        const dispatchResultTransformer = p => {
                            let event = {}; // ä¼ªè£çevent
                            return p
                                .then(r => {
                                    container.readyState = 4;
                                    container.response = r;
                                    container.responseText = typeof r === 'string' ? r : JSON.stringify(r);
                                    container.__onreadystatechange(event); // ç´æ¥è°ç¨ä¼ä¸ä¼å­å¨thisæåéè¯¯çé®é¢? => ç®åæ²¡çå°, åè¿æ ·(;Â¬_Â¬)
                                })
                                .catch(e => {
                                    // å¤±è´¥æ¶, è®©åå§çresponseå¯ä»¥äº¤ä»
                                    container.__block_response = false;
                                    if (container.__response != null) {
                                        container.readyState = 4;
                                        container.response = container.__response;
                                        container.__onreadystatechange(event); // åä¸
                                    }
                                })
                        };
                        const dispatchResultTransformerCreator = () => {
                            container.__block_response = true;
                            return dispatchResultTransformer
                        };
                        return new Proxy(new target(...args), {
                            set: function (target, prop, value, receiver) {
                                if (prop === 'onreadystatechange') {
                                    container.__onreadystatechange = value;
                                    let cb = value;
                                    value = function (event) {
                                        if (target.readyState === 4) {
                                            if (target.responseURL.match(RegExps.url('bangumi.bilibili.com/view/web_api/season/user/status'))
                                                || target.responseURL.match(RegExps.url('api.bilibili.com/pgc/view/web/season/user/status'))) {
                                                log('/season/user/status:', target.responseText);
                                                let json = JSON.parse(target.responseText);
                                                let rewriteResult = false;
                                                if (json.code === 0 && json.result) {
                                                    areaLimit(json.result.area_limit !== 0);
                                                    if (json.result.area_limit !== 0) {
                                                        json.result.area_limit = 0; // åæ¶åºåéå¶
                                                        rewriteResult = true;
                                                    }
                                                    if (balh_config.blocked_vip) {
                                                        json.result.pay = 1;
                                                        rewriteResult = true;
                                                    }
                                                    if (rewriteResult) {
                                                        container.responseText = JSON.stringify(json);
                                                    }
                                                }
                                            } else if (target.responseURL.match(RegExps.url('bangumi.bilibili.com/web_api/season_area'))) {
                                                log('/season_area', target.responseText);
                                                let json = JSON.parse(target.responseText);
                                                if (json.code === 0 && json.result) {
                                                    areaLimit(json.result.play === 0);
                                                    if (json.result.play === 0) {
                                                        json.result.play = 1;
                                                        container.responseText = JSON.stringify(json);
                                                    }
                                                }
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/x/web-interface/nav'))) {
                                                const isFromReport = Strings.getSearchParam(target.responseURL, 'from') === 'report';
                                                let json = JSON.parse(target.responseText);
                                                log('/x/web-interface/nav', (json.data && json.data.isLogin)
                                                    ? { uname: json.data.uname, isLogin: json.data.isLogin, level: json.data.level_info.current_level, vipType: json.data.vipType, vipStatus: json.data.vipStatus, isFromReport: isFromReport }
                                                    : target.responseText);
                                                if (json.code === 0 && json.data && balh_config.blocked_vip
                                                    && !isFromReport // reportæ¶, è¿æ¯ä¸ä¼ªè£äº...
                                                ) {
                                                    json.data.vipType = 2; // ç±»å, å¹´åº¦å¤§ä¼å
                                                    json.data.vipStatus = 1; // ç¶æ, å¯ç¨
                                                    container.responseText = JSON.stringify(json);
                                                }
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/x/player.so'))) {
                                                // è¿ä¸ªæ¥å£çè¿åæ°æ®è²ä¼¼å¹¶ä¸ä¼å½±åçé¢...
                                                if (balh_config.blocked_vip) {
                                                    log('/x/player.so');
                                                    const xml = new DOMParser().parseFromString(`<root>${target.responseText.replace(/\&/g, "&amp;")}</root>`, 'text/xml');
                                                    const vipXml = xml.querySelector('vip');
                                                    if (vipXml) {
                                                        const vip = JSON.parse(vipXml.innerHTML);
                                                        vip.vipType = 2; // åä¸
                                                        vip.vipStatus = 1;
                                                        vipXml.innerHTML = JSON.stringify(vip);
                                                        container.responseText = xml.documentElement.innerHTML;
                                                        container.response = container.responseText;
                                                    }
                                                }
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/x/player/v2'))) {
                                                // ä¸ä¸ä¸ªæ¥å£çæ°çæ¬
                                                let json = JSON.parse(target.responseText);
                                                // çæå­å¹
                                                if (balh_config.generate_sub && json.code == 0 && json.data.subtitle && json.data.subtitle.subtitles) {
                                                    let subtitles = json.data.subtitle.subtitles;
                                                    let lans = subtitles.map((item) => item.lan);
                                                    let genCN = lans.includes('zh-Hant') && !lans.includes('zh-CN');
                                                    let genHant = lans.includes('zh-CN') && !lans.includes('zh-Hant');
                                                    let origin = genCN ? 'zh-Hant' : genHant ? 'zh-CN' : null;
                                                    let target = genCN ? 'zh-CN' : genHant ? 'zh-Hant' : null;
                                                    let converter = genCN ? 't2cn' : genHant ? 'cn2t' : null;
                                                    let targetDoc = genCN ? 'ä¸­æï¼ä¸­å½ï¼çæ' : genHant ? 'ä¸­æï¼ç¹ä½ï¼çæ' : null;
                                                    if (origin && target && converter && targetDoc) {
                                                        let origSub = subtitles.find((item) => item.lan == origin);
                                                        let origSubUrl = 'http:' + origSub.subtitle_url;
                                                        let origSubId = origSub.id;
                                                        let origSubRealId = BigInt(origSub.id_str);
                                                        let encSubUrl = encodeURIComponent(origSubUrl);
                                                        let encSubId = encodeURIComponent(origSub.id_str);
                                                        let targetSub = {
                                                            lan: target,
                                                            lan_doc: targetDoc,
                                                            is_lock: false,
                                                            subtitle_url: `//www.kofua.top/bsub/${converter}?sub_url=${encSubUrl}&sub_id=${encSubId}`,
                                                            type: 0,
                                                            id: origSubId + 1,
                                                            id_str: (origSubRealId + 1n).toString(),
                                                        };
                                                        json.data.subtitle.subtitles.push(targetSub);
                                                        container.responseText = JSON.stringify(json);
                                                    }
                                                }
                                                // https://github.com/ipcjs/bilibili-helper/issues/775
                                                // ééæäºæ³°åºçªå§æè¿åæ°æ®ï¼ä½å­å¹ä¸ºç©ºçé®é¢ï¼ep372478ï¼
                                                /*
                                                if (json.code == -404 || (json.code == 0 && window.__balh_app_only__ && json.data.subtitle.subtitles.length == 0)) {
                                                    log('/x/player/v2', '404', target.responseText);
                                                    container.__block_response = true;
                                                    let url = container.__url.replace('player/v2', 'v2/dm/view').replace('cid', 'oid') + '&type=1'; //ä»APPæ¥å£æåå­å¹ä¿¡æ¯
                                                    Async.ajax(url).then(async data => {
                                                        if (!data.code && data.data.subtitle) {
                                                            // ä½¿ç¨APPæ¥å£è·åçå­å¹ä¿¡æ¯éæè¿åæ°æ®ï¼å¶å®æåä¸æææ¶æ è§
                                                            const subtitle = data.data.subtitle;
                                                            if (subtitle.subtitles) {
                                                                subtitle.subtitles.forEach(item => (item.subtitle_url = item.subtitle_url.replace(/https?:\/\//, '//')));
                                                            } else {
                                                                // æ³°åºçªå§è¿åçå­å¹ä¸º nullï¼éè¦ä½¿ç¨æ³°åºæå¡å¨å­å¹æ¥å£å¡«åæ°æ®
                                                                let thailand_sub_url = url.replace('https://api.bilibili.com/x/v2/dm/view', `${balh_config.server_custom_th}/intl/gateway/v2/app/subtitle`);
                                                                let thailand_data = await Async.ajax(thailand_sub_url);
                                                                subtitle.subtitles = [];
                                                                thailand_data.data.subtitles.forEach((item) => {
                                                                    let sub = {
                                                                        'id': item.id,
                                                                        'id_str': item.id.toString(),
                                                                        'lan': item.key,
                                                                        'lan_doc': item.title,
                                                                        'subtitle_url': item.url.replace(/https?:\/\//, '//')
                                                                    }
                                                                    subtitle.subtitles.push(sub);
                                                                })
                                                            }
                                                            subtitle.allow_submit = false;
                                                            json.data = { subtitle };
                                                            json.code = 0;
                                                            if (balh_config.blocked_vip) {
                                                                json.data.vip = {
                                                                    type: 2, //å¹´è´¹å¤§ä¼å
                                                                    status: 1 //å¯ç¨
                                                                };
                                                                log('/x/player/v2', 'vip');
                                                            }
                                                            log('/x/player/v2', 'rebuild', json);
                                                        }
                                                        container.responseText = JSON.stringify(json);
                                                        container.response = container.responseText;
                                                        cb.apply(container.responseText ? receiver : this, arguments);
                                                    }).catch(e => {
                                                        util_error('/x/player/v2', e);
                                                        cb.apply(this, arguments);
                                                    })
                                                }
                                                */
                                                if ((json.code === -400 || json.code === -404 || (json.code == 0 && window.__balh_app_only__ && json.data.subtitle.subtitles.length == 0)) && balh_config.server_custom_th) {
                                                    // æ³°åºçªå§è¿åçå­å¹ä¸º nullï¼éè¦ä½¿ç¨æ³°åºæå¡å¨å­å¹æ¥å£å¡«åæ°æ®
                                                    // https://www.bilibili.com/bangumi/play/ep10649765
                                                    let thailand_sub_url = container.__url.replace('https://api.bilibili.com/x/player/v2', `${balh_config.server_custom_th}/intl/gateway/v2/app/subtitle`);
                                                    Async.ajax(thailand_sub_url)
                                                        .then(async thailand_data => {
                                                            let subtitle = { subtitles: [] };
                                                            thailand_data.data.subtitles.forEach((item) => {
                                                                let sub = {
                                                                    'id': item.id,
                                                                    'id_str': item.id.toString(),
                                                                    'lan': item.key,
                                                                    'lan_doc': item.title,
                                                                    'subtitle_url': item.url.replace(/https?:\/\//, '//')
                                                                };
                                                                subtitle.subtitles.push(sub);
                                                            });
                                                            let json = { code: 0, data: { subtitle: subtitle } };
                                                            // todo: json.dataä¸­æè®¸å¤å­æ®µ, éè¦æ³åæ³å¡«å
                                                            if (balh_config.blocked_vip) {
                                                                json.data.vip = {
                                                                    type: 2, //å¹´è´¹å¤§ä¼å
                                                                    status: 1 //å¯ç¨
                                                                };
                                                            }
                                                            return json
                                                        })
                                                        .compose(dispatchResultTransformerCreator());
                                                }
                                                else if (!json.code && json.data && balh_config.blocked_vip) {
                                                    log('/x/player/v2', 'vip');
                                                    const vip = json.data.vip;
                                                    if (vip) {
                                                        vip.type = 2; // åä¸
                                                        vip.status = 1;
                                                        container.responseText = JSON.stringify(json);
                                                        container.response = container.responseText;
                                                    }
                                                }
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/x/player/playurl'))) {
                                                log('/x/player/playurl', 'origin', `block: ${container.__block_response}`, target.response);
                                                // todo      : å½ååªå®ç°äºr.const.mode.REPLACE, éè¦æ¯æå¶ä»æ¨¡å¼
                                                // 2018-10-14: ç­Bç«å¨é¢å¯ç¨æ°çåè¯´(;Â¬_Â¬)
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/pgc/player/web/playurl'))
                                                && !Strings.getSearchParam(target.responseURL, 'balh_ajax')) {
                                                log('/pgc/player/web/playurl', 'origin', `block: ${container.__block_response}`, target.response);
                                                if (!container.__redirect) { // è¯·æ±æ²¡æè¢«éå®å, åéè¦æ£æµç»ææ¯å¦æåºåéå¶
                                                    let json = typeof target.response === 'object' ? target.response : JSON.parse(target.responseText);
                                                    if (balh_config.blocked_vip || json.code || isAreaLimitForPlayUrl(json.result)) {
                                                        areaLimit(true);
                                                        container.__block_response = true;
                                                        let url = container.__url;
                                                        if (isBangumiPage()) {
                                                            url += `&module=bangumi`;
                                                        }
                                                        bilibiliApis._playurl.asyncAjax(url)
                                                            .then(data => {
                                                                if (!data.code) {
                                                                    data = { code: 0, result: data, message: "0" };
                                                                }
                                                                log('/pgc/player/web/playurl', 'proxy', data);
                                                                return data
                                                            })
                                                            .compose(dispatchResultTransformer);
                                                    } else {
                                                        areaLimit(false);
                                                    }
                                                }
                                                // åä¸
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/pgc/view/web/freya/season'))) {
                                                /* ä¸èµ·çæ¾æ å®¤ç¨è¿ä¸ªapiæ¥è¯å«åºåéå¶ */
                                                let json = JSON.parse(target.response);
                                                log('/pgc/view/web/freya/season', 'origin', `area_limit`, json.data.viewUserStatus.area_limit);
                                                if (json.code == 0 && json.data.viewUserStatus.area_limit == 1) {
                                                    areaLimit(true);
                                                    json.data.viewUserStatus.area_limit = 0;
                                                    container.__block_response = true;

                                                    container.responseText = JSON.stringify(json);
                                                    container.response = container.responseText;
                                                    cb.apply(container.responseText ? receiver : this, arguments);
                                                } else {
                                                    areaLimit(false);
                                                }
                                            } else if (target.responseURL.match(RegExps.url('api.bilibili.com/x/space/acc/info?'))) {
                                                const json = JSON.parse(target.responseText);
                                                if (json.code === -404) {
                                                    const mid = new URL(target.responseURL).searchParams.get('mid');
                                                    if (space_account_info_map[mid]) {
                                                        container.responseText = JSON.stringify(space_account_info_map[mid]);
                                                    }
                                                }
                                            }
                                            if (container.__block_response) {
                                                // å±è½å¹¶ä¿å­response
                                                container.__response = target.response;
                                                return
                                            }
                                        }
                                        // è¿éçthisæ¯åå§çxhr, å¨container.responseTextè®¾ç½®äºå¼æ¶éè¦æ¿æ¢æä»£çå¯¹è±¡
                                        cb.apply(container.responseText ? receiver : this, arguments);
                                    };
                                }
                                target[prop] = value;
                                return true
                            },
                            get: function (target, prop, receiver) {
                                if (prop in container) return container[prop]
                                let value = target[prop];
                                if (typeof value === 'function') {
                                    let func = value;
                                    // openç­æ¹æ³, å¿é¡»å¨åå§çxhrå¯¹è±¡ä¸æè½è°ç¨...
                                    value = function () {
                                        if (prop === 'open') {
                                            container.__method = arguments[0];
                                            container.__url = arguments[1];
                                        } else if (prop === 'send') {
                                            if (container.__url.match(RegExps.url('api.bilibili.com/x/player/playurl')) && balh_config.enable_in_av) {
                                                log('/x/player/playurl');
                                                // debugger
                                                bilibiliApis._playurl.asyncAjax(container.__url)
                                                    .then(data => {
                                                        if (!data.code) {
                                                            data = {
                                                                code: 0,
                                                                data: data,
                                                                message: "0",
                                                                ttl: 1
                                                            };
                                                        }
                                                        log('/x/player/playurl', 'proxy', data);
                                                        return data
                                                    })
                                                    .compose(dispatchResultTransformerCreator());
                                            } else if (container.__url.match(RegExps.url('api.bilibili.com/pgc/player/web/playurl'))
                                                && !Strings.getSearchParam(container.__url, 'balh_ajax')
                                                && needRedirect()) {
                                                log('/pgc/player/web/playurl');
                                                // debugger
                                                container.__redirect = true; // æ è®°è¯¥è¯·æ±è¢«éå®å
                                                let url = container.__url;
                                                if (isBangumiPage()) {
                                                    url += `&module=bangumi`;
                                                }
                                                bilibiliApis._playurl.asyncAjax(url)
                                                    .then(data => {
                                                        if (!data.code) {
                                                            data = {
                                                                code: 0,
                                                                result: data,
                                                                message: "0",
                                                            };
                                                        }
                                                        log('/pgc/player/web/playurl', 'proxy(redirect)', data);
                                                        return data
                                                    })
                                                    .compose(dispatchResultTransformerCreator());
                                            }
                                        }
                                        return func.apply(target, arguments)
                                    };
                                }
                                return value
                            }
                        })
                    }
                });
            }

            function injectAjax() {
                log('injectAjax at:', window.jQuery);
                let originalAjax = $.ajax;
                $.ajax = function (arg0, arg1) {
                    let param;
                    if (arg1 === undefined) {
                        param = arg0;
                    } else {
                        arg0 && (arg1.url = arg0);
                        param = arg1;
                    }
                    let oriSuccess = param.success;
                    let oriError = param.error;
                    let mySuccess, myError;
                    // æéç»æçtransformer, ç»æéè¿oriSuccess/Erroræé
                    let dispatchResultTransformer = p => p
                        .then(r => {
                            // debugger
                            oriSuccess(r);
                        })
                        .catch(e => oriError(e));
                    // è½¬æ¢åå§è¯·æ±çç»æçtransformer
                    let oriResultTransformer;
                    let oriResultTransformerWhenProxyError;
                    let one_api;
                    // log(param)
                    if (param.url.match(RegExps.urlPath('/web_api/get_source'))) {
                        one_api = bilibiliApis._get_source;
                        oriResultTransformer = p => p
                            .then(json => {
                                log(json);
                                if (json.code === -40301 // åºåéå¶
                                    || json.result.payment && json.result.payment.price != 0 && balh_config.blocked_vip) { // éè¦ä»è´¹çè§é¢, æ­¤æ¶Bç«è¿åçcidæ¯éäº, æéè¦ä½¿ç¨ä»£çæå¡å¨çæ¥å£
                                    areaLimit(true);
                                    return one_api.asyncAjax(param.url)
                                        .catch(e => json)// æ°çè¯·æ±æ¥é, ä¹åºè¯¥è¿ååæ¥çæ°æ®
                                } else {
                                    areaLimit(false);
                                    if ((balh_config.blocked_vip || balh_config.remove_pre_ad) && json.code === 0 && json.result.pre_ad) {
                                        json.result.pre_ad = 0; // å»é¤åç½®å¹¿å
                                    }
                                    return json;
                                }
                            });
                    } else if (param.url.match(RegExps.urlPath('/player/web_api/playurl')) // èççªå§é¡µé¢playurlæ¥å£
                        || param.url.match(RegExps.urlPath('/player/web_api/v2/playurl')) // æ°ççªå§é¡µé¢playurlæ¥å£
                        || param.url.match(RegExps.url('api.bilibili.com/pgc/player/web/playurl')) // æ°ççªå§é¡µé¢playurlæ¥å£
                        || (balh_config.enable_in_av && param.url.match(RegExps.url('interface.bilibili.com/v2/playurl'))) // æ®éçavé¡µé¢playurlæ¥å£
                    ) {
                        // æ°playrul:
                        // 1. é¨åé¡µé¢åæ°æ¾å¨param.dataä¸­
                        // 2. æåæ¶, è¿åçç»ææ¾å°äºresultä¸­: {"code":0,"message":"success","result":{}}
                        // 3. å¤±è´¥æ¶, è¿åçç»ææ²¡å
                        let isNewPlayurl;
                        if (isNewPlayurl = param.url.match(RegExps.url('api.bilibili.com/pgc/player/web/playurl'))) {
                            if (param.data) {
                                param.url += `?${Object.keys(param.data).map(key => `${key}=${param.data[key]}`).join('&')}`;
                                param.data = undefined;
                            }
                            if (isBangumiPage()) {
                                log(`playurl add 'module=bangumi' param`);
                                param.url += `&module=bangumi`;
                            }
                            // å ä¸è¿ä¸ªåæ°, é²æ­¢éå¤æ¦æªè¿ä¸ªurl
                            param.url += `&balh_ajax=1`;
                        }
                        one_api = bilibiliApis._playurl;
                        if (isNewPlayurl) {
                            oriResultTransformerWhenProxyError = p => p
                                .then(json => !json.code ? json.result : json);
                        }
                        oriResultTransformer = p => p
                            .then(json => {
                                log(json);
                                if (isNewPlayurl && !json.code) {
                                    json = json.result;
                                }
                                if (balh_config.blocked_vip || json.code || isAreaLimitForPlayUrl(json)) {
                                    areaLimit(true);
                                    return one_api.asyncAjax(param.url)
                                        .catch(e => json)
                                } else {
                                    areaLimit(false);
                                    return json
                                }
                            });
                        const oriDispatchResultTransformer = dispatchResultTransformer;
                        dispatchResultTransformer = p => p
                            .then(r => {
                                if (!r.code && !r.from && !r.result && !r.accept_description) {
                                    util_warn('playurlçresultç¼ºå°å¿è¦çå­æ®µ:', r);
                                    r.from = 'local';
                                    r.result = 'suee';
                                    r.accept_description = ['æªç¥ 3P'];
                                    // r.timelength = r.durl.map(it => it.length).reduce((a, b) => a + b, 0)
                                    if (r.durl && r.durl[0] && r.durl[0].url.includes('video-sg.biliplus.com')) {
                                        const aid = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.aid || window.__INITIAL_STATE__.epInfo && window.__INITIAL_STATE__.epInfo.aid || 'fuck';
                                        ui.pop({
                                            content: `åè§é¢å·²è¢«å é¤, å½åæ­æ¾çæ¯<a href="https://video-sg.biliplus.com/">è½¬å­æå¡å¨</a>ä¸­çè§é¢, éåº¦è¾æ¢<br>è¢«å çåå å¯è½æ¯:<br>1. è§é¢è¿è§<br>2. è§é¢è¢«å½ç±»å°çªå§é¡µé¢ => è¯ä¸<a href="https://search.bilibili.com/bangumi?keyword=${aid}">æç´¢av${aid}</a>`
                                        });
                                    }
                                }
                                if (isNewPlayurl && !r.code) {
                                    r = {
                                        code: 0,
                                        message: 'success',
                                        result: r
                                    };
                                }
                                return r
                            })
                            .compose(oriDispatchResultTransformer);
                    } else if (param.url.match(RegExps.url('interface.bilibili.com/player?'))) {
                        if (balh_config.blocked_vip) {
                            mySuccess = function (data) {
                                try {
                                    let xml = new window.DOMParser().parseFromString(`<userstatus>${data.replace(/\&/g, '&amp;')}</userstatus>`, 'text/xml');
                                    let vipTag = xml.querySelector('vip');
                                    if (vipTag) {
                                        let vip = JSON.parse(vipTag.innerHTML);
                                        vip.vipType = 2; // ç±»å, å¹´åº¦å¤§ä¼å
                                        vip.vipStatus = 1; // ç¶æ, å¯ç¨
                                        vipTag.innerHTML = JSON.stringify(vip);
                                        data = xml.documentElement.innerHTML;
                                    }
                                } catch (e) {
                                    log('parse xml error: ', e);
                                }
                                oriSuccess(data);
                            };
                        }
                    } else if (param.url.match(RegExps.url('api.bilibili.com/x/ad/video?'))) {
                        if (balh_config.remove_pre_ad) {
                            mySuccess = function (data) {
                                log('/ad/video', data);
                                if (data && data.code === 0 && data.data) {
                                    data.data = []; // ç§»é¤å¹¿åæ¥å£è¿åçæ°æ®
                                }
                                oriSuccess(data);
                            };
                        }
                    }

                    if (one_api && oriResultTransformer) {
                        // è¯·æ±ç»æéè¿mySuccess/Errorè·å, å°å¶åè£æPromise, æ¹ä¾¿å¤ç
                        let oriResultPromise = new Promise$1((resolve, reject) => {
                            mySuccess = resolve;
                            myError = reject;
                        });
                        if (needRedirect()) {
                            // éè¿proxy, æ§è¡è¯·æ±
                            one_api.asyncAjax(param.url)
                                // proxyæ¥éæ¶, è¿ååå§è¯·æ±çç»æ
                                .catch(e => oriResultPromise.compose(oriResultTransformerWhenProxyError))
                                .compose(dispatchResultTransformer);
                        } else {
                            oriResultPromise
                                .compose(oriResultTransformer)
                                .compose(dispatchResultTransformer);
                        }
                    }

                    // è¥å¤é¨ä½¿ç¨param.successå¤çç»æ, åæ¿æ¢param.success
                    if (oriSuccess && mySuccess) {
                        param.success = mySuccess;
                    }
                    // å¤çæ¿æ¢error
                    if (oriError && myError) {
                        param.error = myError;
                    }
                    // default
                    let xhr = originalAjax.apply(this, [param]);

                    // è¥å¤é¨ä½¿ç¨xhr.done()å¤çç»æ, åæ¿æ¢xhr.done()
                    if (!oriSuccess && mySuccess) {
                        xhr.done(mySuccess);
                        xhr.done = function (success) {
                            oriSuccess = success; // ä¿å­å¤é¨è®¾ç½®çsuccesså½æ°
                            return xhr;
                        };
                    }
                    // å¤çæ¿æ¢error
                    if (!oriError && myError) {
                        xhr.fail(myError);
                        xhr.fail = function (error) {
                            oriError = error;
                            return xhr;
                        };
                    }
                    return xhr;
                };
            }



            function isAreaLimitSeason() {
                return cookieStorage['balh_season_' + getSeasonId()];
            }

            function needRedirect() {
                return balh_config.mode === r.const.mode.REDIRECT || (balh_config.mode === r.const.mode.DEFAULT && isAreaLimitSeason())
            }

            function areaLimit(limit) {
                balh_config.mode === r.const.mode.DEFAULT && setAreaLimitSeason(limit);
            }

            function setAreaLimitSeason(limit) {
                var season_id = getSeasonId();
                cookieStorage.set('balh_season_' + season_id, limit ? '1' : undefined, ''); // ç¬¬ä¸ä¸ªåæ°ä¸º'', è¡¨ç¤ºæ¶Sessionç±»åçcookie
                log('setAreaLimitSeason', season_id, limit);
            }
            /** ä½¿ç¨è¯¥æ¹æ³å¤æ­æ¯å¦éè¦æ·»å module=bangumiåæ°, å¹¶ä¸åç¡®... */
            function isBangumi(season_type) {
                log(`season_type: ${season_type}`);
                // 1: å¨ç»
                // 2: çµå½±
                // 3: çºªå½ç
                // 4: å½å
                // 5: çµè§å§
                return season_type != null // å­å¨season_typeå°±æ¯bangumi?
            }

            function isBangumiPage() {
                return isBangumi(Func.safeGet('window.__INITIAL_STATE__.mediaInfo.season_type || window.__INITIAL_STATE__.mediaInfo.ssType'))
            }

            function getSeasonId() {
                var seasonId;
                // åanimeé¡µé¢çseasonId
                try {
                    // è¥w, æ¯å¶frameçwindow, åæå¯è½æ²¡ææé, èæå¼å¸¸
                    seasonId = window.season_id || window.top.season_id;
                } catch (e) {
                    log(e);
                }
                if (!seasonId) {
                    try {
                        seasonId = (window.top.location.pathname.match(/\/anime\/(\d+)/) || ['', ''])[1];
                    } catch (e) {
                        log(e);
                    }
                }

                // è¥æ²¡åå°, ååmovieé¡µé¢çseasonId, ä»¥må¼å¤´
                if (!seasonId) {
                    try {
                        seasonId = (window.top.location.pathname.match(/\/movie\/(\d+)/) || ['', ''])[1];
                        if (seasonId) {
                            seasonId = 'm' + seasonId;
                        }
                    } catch (e) {
                        log(e);
                    }
                }

                // è¥æ²¡åå°, åå»æ°ççªå§æ­æ¾é¡µé¢çepæss
                if (!seasonId) {
                    try {
                        seasonId = (window.top.location.pathname.match(/\/bangumi\/play\/((ep|ss)\d+)/) || ['', ''])[1];
                    } catch (e) {
                        log(e);
                    }
                }

                // è¥æ²¡åå°, åä»search paramsè·åï¼æ¯å¦æ¾æ å®¤ï¼
                if (!seasonId) {
                    try {
                        seasonId = Strings.getSearchParam(window.location.href, 'seasonid');
                    } catch (e) {
                        log(e);
                    }
                }

                // è¥æ²¡åå°, åå»åavé¡µé¢çavå·
                if (!seasonId) {
                    try {
                        seasonId = (window.top.location.pathname.match(/\/video\/((av|BV)\w+)/) || ['', ''])[1];
                    } catch (e) {
                        log(e);
                    }
                }
                // æå, è¥æ²¡åå°, åè¯å¾ååºå½åé¡µé¢urlä¸­çaid
                if (!seasonId) {
                    seasonId = Strings.getSearchParam(window.location.href, 'aid');
                    if (seasonId) {
                        seasonId = 'aid' + seasonId;
                    }
                }
                return seasonId || '000';
            }

            function isAreaLimitForPlayUrl(json) {
                return (json.errorcid && json.errorcid == '8986943') || (json.durl && json.durl.length === 1 && json.durl[0].length === 15126 && json.durl[0].size === 124627);
            }

            var bilibiliApis = (function () {
                function AjaxException(message, code = 0/*ç¨0è¡¨ç¤ºæªç¥éè¯¯*/) {
                    this.name = 'AjaxException';
                    this.message = message;
                    this.code = code;
                }
                AjaxException.prototype.toString = function () {
                    return `${this.name}: ${this.message}(${this.code})`
                };
                function BilibiliApi(props) {
                    Object.assign(this, props);
                }

                BilibiliApi.prototype.asyncAjaxByProxy = function (originUrl, success, error) {
                    var one_api = this;
                    $.ajax({
                        url: one_api.transToProxyUrl(originUrl),
                        async: true,
                        xhrFields: { withCredentials: true },
                        success: function (result) {
                            log('==>', result);
                            success(one_api.processProxySuccess(result));
                            // log('success', arguments, this);
                        },
                        error: function (e) {
                            log('error', arguments, this);
                            error(e);
                        }
                    });
                };
                BilibiliApi.prototype.asyncAjax = function (originUrl) {
                    return Async.ajax(this.transToProxyUrl(originUrl))
                        .then(r => this.processProxySuccess(r))
                        .compose(util_ui_msg.showOnNetErrorInPromise()) // åºéæ¶, æç¤ºæå¡å¨è¿ä¸ä¸
                };
                var get_source_by_aid = new BilibiliApi({
                    transToProxyUrl: function (url) {
                        return balh_config.server + '/api/view?id=' + window.aid + `&update=true${access_key_param_if_exist()}`;
                    },
                    processProxySuccess: function (data) {
                        if (data && data.list && data.list[0] && data.movie) {
                            return {
                                code: 0,
                                message: 'success',
                                result: {
                                    cid: data.list[0].cid,
                                    formal_aid: data.aid,
                                    movie_status: balh_config.blocked_vip ? 2 : data.movie.movie_status, // 2, å¤§æ¦æ¯åè´¹çææ?
                                    pay_begin_time: 1507708800,
                                    pay_timestamp: 0,
                                    pay_user_status: data.movie.pay_user.status, // ä¸è¬é½æ¯0
                                    player: data.list[0].type, // ä¸è¬ä¸ºmovie
                                    vid: data.list[0].vid,
                                    vip: { // 2+1, è¡¨ç¤ºå¹´åº¦å¤§ä¼å; 0+0, è¡¨ç¤ºæ®éä¼å
                                        vipType: balh_config.blocked_vip ? 2 : 0,
                                        vipStatus: balh_config.blocked_vip ? 1 : 0,
                                    }
                                }
                            };
                        } else {
                            return {
                                code: -404,
                                message: 'ä¸å­å¨è¯¥å§é'
                            };
                        }
                    }
                });
                var get_source_by_season_id = new BilibiliApi({
                    transToProxyUrl: function (url) {
                        return balh_config.server + '/api/bangumi?season=' + window.season_id + access_key_param_if_exist();
                    },
                    processProxySuccess: function (data) {
                        var found = null;
                        if (!data.code) {
                            for (var i = 0; i < data.result.episodes.length; i++) {
                                if (data.result.episodes[i].episode_id == window.episode_id) {
                                    found = data.result.episodes[i];
                                }
                            }
                        } else {
                            ui.alert('ä»£çæå¡å¨éè¯¯:' + JSON.stringify(data) + '\nç¹å»å·æ°çé¢.', window.location.reload.bind(window.location));
                        }
                        var returnVal = found !== null
                            ? {
                                "code": 0,
                                "message": "success",
                                "result": {
                                    "aid": found.av_id,
                                    "cid": found.danmaku,
                                    "episode_status": balh_config.blocked_vip ? 2 : found.episode_status,
                                    "payment": { "price": "9876547210.33" },
                                    "pay_user": {
                                        "status": balh_config.blocked_vip ? 1 : 0 // æ¯å¦å·²ç»æ¯ä»è¿
                                    },
                                    "player": "vupload",
                                    "pre_ad": 0,
                                    "season_status": balh_config.blocked_vip ? 2 : data.result.season_status
                                }
                            }
                            : { code: -404, message: 'ä¸å­å¨è¯¥å§é' };
                        return returnVal;
                    }
                });
                var playurl_by_bilibili = new BilibiliApi({
                    dataType: 'xml',
                    transToProxyUrl: function (originUrl) {
                        const api_url = 'https://interface.bilibili.com/playurl?';
                        const SEC_NORMAL = '1c15888dc316e05a15fdd0a02ed6584f';
                        let paramDict = {
                            cid: Strings.getSearchParam(originUrl, 'cid'),
                            quality: Strings.getSearchParam(originUrl, 'quality'),
                            qn: Strings.getSearchParam(originUrl, 'qn'), // å¢å è¿ä¸ªåæ°, è¿åçæ¸æ°åº¦æ´å¤
                            player: 1,
                            ts: Math.floor(Date.now() / 1000),
                        };
                        if (localStorage.access_key) {
                            paramDict.access_key = localStorage.access_key;
                        }
                        let { sign, params } = Converters.generateSign(paramDict,  SEC_NORMAL);
                        let url =  api_url + params + '&sign=' + sign;
                        return url
                    },
                    processProxySuccess: function (result, alertWhenError = true) {
                        // å°xmlè§£ææjson
                        let obj = Converters.xml2obj(result.documentElement);
                        if (!obj || obj.code) {
                            if (alertWhenError) {
                                ui.alert(`ä»Bç«æ¥å£è·åè§é¢å°åå¤±è´¥\nresult: ${JSON.stringify(obj)}\n\nç¹å»ç¡®å®, è¿å¥è®¾ç½®é¡µé¢å³é­'ä½¿ç¨Bç«æ¥å£è·åè§é¢å°å'åè½`, settings$1.show);
                            } else {
                                return Promise$1.reject(`æå¡å¨éè¯¯: ${JSON.stringify(obj)}`)
                            }
                        } else {
                            obj.accept_quality && (obj.accept_quality = obj.accept_quality.split(',').map(n => +n));
                            if (!obj.durl.push) {
                                obj.durl = [obj.durl];
                            }
                            obj.durl.forEach((item) => {
                                if (item.backup_url === '') {
                                    item.backup_url = undefined;
                                } else if (item.backup_url && item.backup_url.url) {
                                    item.backup_url = item.backup_url.url;
                                }
                            });
                        }
                        log('xml2obj', result, '=>', obj);
                        return obj
                    },
                    _asyncAjax: function (originUrl) {
                        return Async.ajax(this.transToProxyUrl(originUrl))
                            .then(r => this.processProxySuccess(r, false))
                    }
                });
                var playurl_by_proxy = new BilibiliApi({
                    _asyncAjax: function (originUrl, bangumi) {
                        return Async.ajax(this.transToProxyUrl(originUrl, bangumi))
                            .then(r => this.processProxySuccess(r, false))
                    },
                    transToProxyUrl: function (url, bangumi) {
                        let params = url.split('?')[1];
                        if (bangumi === undefined) { // èªå¨å¤æ­
                            // avé¡µé¢ä¸­çiframeæ ç­¾å½¢å¼çplayer, ä¸æ¯çªå§è§é¢
                            bangumi = !util_page.player_in_av();
                            // urlä¸­å­å¨season_typeçæåµ
                            let season_type_param = Strings.getSearchParam(url, 'season_type');
                            if (season_type_param && !isBangumi(+season_type_param)) {
                                bangumi = false;
                            }
                            if (!bangumi) {
                                params = params.replace(/&?module=(\w+)/, ''); // ç§»é¤å¯è½å­å¨çmoduleåæ°
                            }
                        } else if (bangumi === true) { // ä¿è¯æ·»å module=bangumiåæ°
                            params = params.replace(/&?module=(\w+)/, '');
                            params += '&module=bangumi';
                        } else if (bangumi === false) { // ç§»é¤å¯è½å­å¨çmoduleåæ°
                            params = params.replace(/&?module=(\w+)/, '');
                        }
                        // ç®¡ä»ä¸ä¸äºåä¸, å¼ºè¡å°module=bangumiæ¿æ¢æmodule=pgc _(:3ãâ )_
                        params = params.replace(/(&?module)=bangumi/, '$1=pgc');
                        return `${balh_config.server}/BPplayurl.php?${params}${access_key_param_if_exist()}${platform_android_param_if_app_only()}`;
                    },
                    processProxySuccess: function (data, alertWhenError = true) {
                        // dataæå¯è½ä¸ºnull
                        if (data && data.code === -403) {
                            ui.pop({
                                content: `<b>code-403</b>: <i style="font-size:4px;white-space:nowrap;">${JSON.stringify(data)}</i>\n\nå½åä»£çæå¡å¨ï¼${balh_config.server}ï¼ä¾ç¶æåºåéå¶\n\nå¯ä»¥èèè¿è¡å¦ä¸å°è¯:\n1. è¿è¡âå¸å·ææâ\n2. æ¢ä¸ªä»£çæå¡å¨\n3. èå¿ç­å¾æå¡ç«¯ä¿®å¤é®é¢\n\nç¹å»ç¡®å®, æå¼è®¾ç½®é¡µé¢`,
                                onConfirm: settings$1.show,
                            });
                        } else if (data === null || data.code) {
                            util_error(data);
                            if (alertWhenError) {
                                ui.alert(`çªç ´é»æ´å¤±è´¥\n${JSON.stringify(data)}\nç¹å»ç¡®å®å·æ°çé¢`, window.location.reload.bind(window.location));
                            } else {
                                return Promise$1.reject(new AjaxException(`æå¡å¨éè¯¯: ${JSON.stringify(data)}`, data ? data.code : 0))
                            }
                        } else if (isAreaLimitForPlayUrl(data)) {
                            util_error('>>area limit');
                            ui.pop({
                                content: `çªç ´é»æ´å¤±è´¥\néè¦ç»å½\nç¹æ­¤ç¡®å®è¿è¡ç»å½`,
                                onConfirm: biliplus_login.showLogin
                            });
                        } else {
                            if (balh_config.flv_prefer_ws) {
                                data.durl.forEach(function (seg) {
                                    var t, url, i;
                                    if (!seg.url.includes('ws.acgvideo.com')) {
                                        for (i in seg.backup_url) {
                                            url = seg.backup_url[i];
                                            if (url.includes('ws.acgvideo.com')) {
                                                log('flv prefer use:', url);
                                                t = seg.url;
                                                seg.url = url;
                                                url = t;
                                                break;
                                            }
                                        }

                                    }
                                });
                            }
                        }
                        return data;
                    }
                });
                // https://github.com/kghost/bilibili-area-limit/issues/3
                const playurl_by_kghost = new BilibiliApi({
                    _asyncAjax: function (originUrl) {
                        const proxyHostMap = [
                            [/å.*å°.*å°å/, '//bilibili-tw-api.kghost.info/', []],
                            [/å.*æ¸¯.*å°å/, '//bilibili-hk-api.kghost.info/', [
                                34680, // å®è¾¾ä¸å²æ
                                36297,
                            ]],
                            [/ä»éä¸åäº/, '//bilibili-sg-api.kghost.info/', []],
                            [/.*/, '//bilibili-cn-api.kghost.info/', []],
                        ];
                        let proxyHost;
                        for (const [regex, host, ssIds] of proxyHostMap) {
                            if (document.title.match(regex) || ssIds.includes(util_page.ssId)) {
                                proxyHost = host;
                                break;
                            }
                        }
                        if (proxyHost) {
                            return Async.ajax(this.transToProxyUrl(originUrl, proxyHost))
                                .then(r => this.processProxySuccess(r))
                        } else {
                            return Promise$1.reject("æ²¡ææ¯æçæå¡å¨")
                        }
                    },
                    transToProxyUrl: function (originUrl, proxyHost) {
                        return originUrl.replace(/^(https:)?(\/\/api\.bilibili\.com\/)/, `$1${proxyHost}`) + access_key_param_if_exist(true);
                    },
                    processProxySuccess: function (result) {
                        if (result.code) {
                            return Promise$1.reject(result)
                        }
                        return result.result
                    },
                });
                const playurl_by_custom = new BilibiliApi({
                    _asyncAjax: function (originUrl) {
                        return this.selectServer(originUrl).then(r => this.processProxySuccess(r))
                    },
                    selectServer: async function (originUrl) {
                        let result;
                        // å¯¹åºthis.transToProxyUrlçåæ°, ç¨`/`åé, å½¢å¦: `${proxyHost}/${area}`
                        let tried_server_args = [];
                        const isTriedServerArg = (proxyHost, area) => tried_server_args.includes(`${proxyHost}/*`) || tried_server_args.includes(`${proxyHost}/${area}`);
                        /**
                         * @param {string} proxyHost ä»£çå°å
                         * @param {"cn"|"hk"|"th"|"cn"|""} area åºå
                         */
                        const requestPlayUrl = (proxyHost, area) => {
                            tried_server_args.push(`${proxyHost}/${area}`);
                            return Async.ajax(this.transToProxyUrl(originUrl, proxyHost, area))
                                // æè·éè¯¯, é²æ­¢ä¾æ¬¡å°è¯ååæå¡å¨çæµç¨ä¸­æ­¢
                                .catch((e) => {
                                    // proxyHostä¸´æ¶ä¸å¯ç¨, å°å®æ·»å å°tried_server_argsä¸­, é²æ­¢éå¤è¯·æ±
                                    tried_server_args.push(`${proxyHost}/*`);
                                    return ({ code: -1, error: e });
                                })
                        };

                        // æ é¢ææç¡®è¯´æä¼åå°è¯ï¼éå¸¸åç¡®çæé«
                        if (document.title.includes('åéå°ç£') && balh_config.server_custom_tw) {
                            ui.playerMsg('æè·æ é¢æç¤ºï¼ä½¿ç¨å°æ¹¾ä»£çæå¡å¨æåè§é¢å°å...');
                            result = await requestPlayUrl(balh_config.server_custom_tw, 'tw');
                            if (!result.code) {
                                return Promise$1.resolve(result)
                            }
                        }
                        if (document.title.includes('åéæ¸¯æ¾³') && balh_config.server_custom_hk) {
                            ui.playerMsg('æè·æ é¢æç¤ºï¼ä½¿ç¨é¦æ¸¯ä»£çæå¡å¨æåè§é¢å°å...');
                            result = await requestPlayUrl(balh_config.server_custom_hk, 'hk');
                            if (!result.code) {
                                return Promise$1.resolve(result)
                            }
                        }

                        // æå¡å¨åè¡¨, æé¡ºåºè§£æ
                        const server_list = [
                            // å¤§é, éè¿æ é¢æ²¡æ³åºå
                            [balh_config.server_custom_cn, 'å¤§é', 'cn'],
                            // æ³°, éè¿æ é¢æ²¡æ³åºå
                            [balh_config.server_custom_th, 'æ³°å½ï¼ä¸åäºï¼', 'th'],
                            // æ¸¯å°, ä¸è¬è½å¤ä»æ é¢ä¸­å¹éå°, å èä¼åçº§å¯ä»¥ä½ä¸ç¹
                            [balh_config.server_custom_hk, 'é¦æ¸¯', 'hk'],
                            [balh_config.server_custom_tw, 'å°æ¹¾', 'tw'],
                        ];

                        // å°è¯è¯»åçªå§åºåç¼å­å¤æ­çªå§åºåè¿è¡è§£æ
                        let bangumi_area_cache = {};
                        if (localStorage.getItem('balh_bangumi_area_cache')) {
                            bangumi_area_cache = JSON.parse(localStorage.getItem('balh_bangumi_area_cache'));
                            if (util_page.ssId && bangumi_area_cache.hasOwnProperty(util_page.ssId)) {
                                // ç¼å­å­å¨
                                let server_list_map = {};
                                server_list.forEach((item) => {
                                    server_list_map[item[2]] = item;
                                });
                                let area_code = bangumi_area_cache[util_page.ssId];
                                let cache_host = server_list_map[area_code][0];
                                let cache_host_name = server_list_map[area_code][1];
                                ui.playerMsg(`è¯»åçªå§å°åºç¼å­ï¼ä½¿ç¨${cache_host_name}ä»£çæå¡å¨æåè§é¢å°å...`);
                                if (cache_host) {
                                    result = await requestPlayUrl(cache_host, area_code);
                                    if (!result.code) {
                                        return Promise$1.resolve(result)
                                    }
                                }
                            }
                        }

                        // é¦éæå¡å¨è§£æ
                        if (balh_config.server_custom) {
                            ui.playerMsg('ä½¿ç¨é¦éä»£çæå¡å¨æåè§é¢å°å...');
                            // é¦éä»£çæå¡å¨çareaåæ°éè¦ä¸ºç©º
                            result = await requestPlayUrl(balh_config.server_custom, '');
                            if (!result.code) {
                                return Promise$1.resolve(result)
                            }
                        }


                        // é¦éæå¡å¨å¤±è´¥åå¼å§å°è¯æå¡å¨åè¡¨, æé¡ºåºè§£æ
                        for (let server_info of server_list) {
                            const host = server_info[0];
                            const host_name = server_info[1];
                            const host_code = server_info[2];
                            // è¯·æ±è¿çæå¡å¨, ä¸åºè¯¥éå¤è¯·æ±
                            if (host && (!isTriedServerArg(host, host_code))) {
                                ui.playerMsg(`ä½¿ç¨${host_name}ä»£çæå¡å¨æåè§é¢å°å...`);
                                result = await requestPlayUrl(host, host_code);
                                if (!result.code) {
                                    // è§£ææåï¼å°ç»æå­å¥çªå§åºåç¼å­
                                    if (util_page.ssId) {
                                        bangumi_area_cache[util_page.ssId] = host_code;
                                        localStorage.setItem('balh_bangumi_area_cache', JSON.stringify(bangumi_area_cache));
                                    }
                                    return Promise$1.resolve(result)
                                }
                            }
                        }
                        return Promise$1.resolve(result)  // é½å¤±è´¥äºï¼è¿åæåä¸æ¬¡æ°æ®
                    },
                    transToProxyUrl: function (originUrl, proxyHost, area) {
                        if (r.regex.bilibili_api_proxy.test(proxyHost)) {
                            if (area === 'th') {
                                // æ³°åºçªå§è§£æ
                                return getMobiPlayUrl(originUrl, proxyHost, area)
                            }
                            if (window.__balh_app_only__) {
                                // APP éå®ç¨ mobi api
                                return getMobiPlayUrl(originUrl, proxyHost, area)
                            }
                            return originUrl.replace(/^(https:)?(\/\/api\.bilibili\.com\/)/, `$1${proxyHost}/`) + '&area=' + area + access_key_param_if_exist(true);
                        } else {
                            if (window.__balh_app_only__) {
                                return `${proxyHost}?${generateMobiPlayUrlParams(originUrl)}`
                            }
                            // å°proxyHostå½ææ¥å£çå®æ´è·¯å¾è¿è¡æ¼æ¥
                            const params = originUrl.split('?')[1];
                            return `${proxyHost}?${params}${access_key_param_if_exist(true)}`

                        }
                    },
                    processProxySuccess: function (result) {
                        if (result.code) {
                            return Promise$1.reject(result)
                        }
                        // å¨APPéå®æåµå¯ç¨ mobi api è§£æ
                        if (window.__balh_app_only__) {
                            // æ³°åºçªä¹æ¯ APP éå®
                            if (result.hasOwnProperty('data')) {
                                return fixThailandPlayUrlJson(result)
                            }
                            if (result['type'] == "DASH") {
                                return fixMobiPlayUrlJson(result)
                            }
                            return result;
                        }
                        return result.result
                    },
                });
                const playurl = new BilibiliApi({
                    asyncAjax: function (originUrl) {
                        ui.playerMsg(`ä»${r.const.server.CUSTOM === balh_config.server_inner ? 'èªå®ä¹' : 'ä»£ç'}æå¡å¨æåè§é¢å°åä¸­...`);
                        return (r.const.server.CUSTOM === balh_config.server_inner ? playurl_by_custom._asyncAjax(originUrl) : (playurl_by_proxy._asyncAjax(originUrl) // ä¼åä»ä»£çæå¡å¨è·å
                            .catch(e => {
                                if (e instanceof AjaxException) {
                                    ui.playerMsg(e);
                                    if (e.code === 1 // code: 1 è¡¨ç¤ºéçªå§è§é¢, ä¸è½ä½¿ç¨çªå§è§é¢åæ°
                                        || (Strings.getSearchParam(originUrl, 'module') === 'bangumi' && e.code === -404)) { // æäºçªå§è§é¢åä¸éè¦å module=bangumi, è¯¦è§: https://github.com/ipcjs/bilibili-helper/issues/494
                                        ui.playerMsg('å°è¯ä½¿ç¨éçªå§è§é¢æ¥å£æåè§é¢å°å...');
                                        return playurl_by_proxy._asyncAjax(originUrl, false)
                                            .catch(e2 => Promise$1.reject(e)) // å¿½ç¥e2, è¿ååå§éè¯¯e
                                    } else if (e.code === 10004) { // code: 10004, è¡¨ç¤ºè§é¢è¢«éè, ä¸è¬æ·»å module=bangumiåæ°å¯ä»¥æåå°è§é¢
                                        ui.playerMsg('å°è¯ä½¿ç¨çªå§è§é¢æ¥å£æåè§é¢å°å...');
                                        return playurl_by_proxy._asyncAjax(originUrl, true)
                                            .catch(e2 => Promise$1.reject(e))
                                    }
                                }
                                return Promise$1.reject(e)
                            })))
                            .catch(e => {
                                if ((typeof e === 'object' && e.statusText == 'error')
                                    || (e instanceof AjaxException && (e.code === -502 || e.code === -412/*è¯·æ±è¢«æ¦æª*/ || e.code === -500/*å·²çç¸*/))
                                    || (typeof e === 'object' && e.code === -10403)
                                ) {
                                    ui.playerMsg('å°è¯ä½¿ç¨kghostçæå¡å¨æåè§é¢å°å...');
                                    return playurl_by_kghost._asyncAjax(originUrl)
                                        .catch(e2 => Promise$1.reject(e))
                                }
                                return Promise$1.reject(e)
                            })
                            // æ¥éæ¶, å»¶æ¶1ç§ååééè¯¯ä¿¡æ¯
                            .catch(e => Async.timeout(1000).then(r => Promise$1.reject(e)))
                            .catch(e => {
                                let msg;
                                if (typeof e === 'object' && e.statusText == 'error') {
                                    msg = 'ä»£çæå¡å¨ä¸´æ¶ä¸å¯ç¨';
                                    ui.playerMsg(msg);
                                } else {
                                    msg = Objects.stringify(e);
                                }
                                ui.pop({
                                    content: `## æåè§é¢å°åå¤±è´¥\nåå : ${msg}\n\nå¯ä»¥èèè¿è¡å¦ä¸å°è¯:\n1. å¤<a href="">å·æ°</a>å ä¸é¡µé¢\n2. è¿å¥<a href="javascript:bangumi_area_limit_hack.showSettings();">è®¾ç½®é¡µé¢</a>æ´æ¢ä»£çæå¡å¨\n3. èå¿ç­å¾ä»£çæå¡å¨ç«¯ä¿®å¤é®é¢`,
                                    onConfirm: window.location.reload.bind(window.location),
                                    confirmBtn: 'å·æ°é¡µé¢'
                                });
                                return Promise$1.reject(e)
                            })
                            .then(data => {
                                if (data.dash) {
                                    // dashä¸­çå­æ®µå¨é¨åæäºç±»ä¼¼Cè¯­è¨çä¸åçº¿é£æ ¼...
                                    Objects.convertKeyToSnakeCase(data.dash);
                                }
                                // æ¿æ¢åå¤§å¤æ°bangumiä¸çè§é¢é½ä¼æ¥CROSéè¯¯
                                if (!window.__balh_app_only__ && balh_config.upos_server) {
                                    return Converters.replaceUpos(data, uposMap[balh_config.upos_server], balh_config.upos_replace_akamai)
                                }
                                return data
                            })
                    }
                });
                return {
                    _get_source: util_page.movie() ? get_source_by_aid : get_source_by_season_id,
                    _playurl: playurl,
                };
            })();

            if (util_page.anime_ep_m() || util_page.anime_ss_m()) {
                // BiliPlusApi.playurl_for_mp4è¿åçurlè½å¨ç§»å¨è®¾å¤ä¸æ­æ¾çåææ¯, è¯·æ±å¤´ä¸åå«Referer...
                // æè¿éè®¾ç½®meta, ä½¿é¡µé¢ä¸åéReferer
                // æ³¨æå¨ææ¹åå¼ç¨ç­ç¥çæ¹å¼å¹¶ä¸æ¯æ åè¡ä¸º, ç®åå¨Chromeä¸æµè¯æ¯æç¨ç
                document.head.appendChild(createElement('meta', { name: "referrer", content: "no-referrer" }));
                injectFetch4Mobile();
                util_init(() => {
                    const $wrapper = document.querySelector('.player-wrapper');
                    new MutationObserver(function (mutations, observer) {
                        for (let mutation of mutations) {
                            if (mutation.type === 'childList') {
                                for (let node of mutation.addedNodes) {
                                    if (node.tagName === 'DIV' && node.className.split(' ').includes('player-mask')) {
                                        log('éèæ·»å çmask');
                                        node.style.display = 'none';
                                    }
                                }
                            }
                        }
                    }).observe($wrapper, {
                        childList: true,
                        attributes: false,
                    });
                });
            }
            injectXHR();
            {
                let jQuery = window.jQuery;
                if (jQuery) { // è¥å·²å è½½jQuery, åæ³¨å¥
                    injectAjax();
                }
                // éè¦çå¬jQueryåå, å ä¸ºææ¶ä¼è¢«è®¾ç½®å¤æ¬¡...
                Object.defineProperty(window, 'jQuery', {
                    configurable: true, enumerable: true, set: function (v) {
                        // debugger
                        log('set jQuery', jQuery, '->', v);
                        // ä¸´æ¶è§é¿è¿ä¸ªé®é¢ï¼https://github.com/ipcjs/bilibili-helper/issues/297
                        // æ°çavé¡µé¢ä¸­, è¿è¡èæ¬ç injectXHR() å, é¡µé¢ä¼å¾è¯¥æ¹æ³ååè®¾ç½®ä¸¤ä¸ªjQuery...åå æªç¥
                        // ä¸ä¸ªä»jquery.min.jsä¸­è®¾ç½®, ä¸ä¸ªä»player.jsä¸­è®¾ç½®
                        // å¹¶ä¸ç¹å»/è½½å¥ç­äºä»¶ä¼ä»ä¸¤ä¸ªjQueryä¸­åä¸åå...å¯¼è´å¾å¤åè½å¤±å¸¸
                        // è¿éæä»¬å±è½æjquery.min.jsååçä¸äºäºä»¶, é¿åä¸äºé®é¢
                        if (util_page.av_new() && balh_config.enable_in_av) {
                            try { // è·åè°ç¨æ çæ¹æ³ä¸æ¯æ åæ¹æ³, éè¦try-catch
                                const stack = (new Error()).stack.split('\n');
                                if (stack[stack.length - 1].includes('jquery')) { // è¥ä»jquery.min.jsä¸­è°ç¨
                                    log('set jQueury by jquery.min.js', v);
                                    v.fn.balh_on = v.fn.on;
                                    v.fn.on = function (arg0, arg1) {
                                        if (arg0 === 'click.reply' && arg1 === '.reply') {
                                            // å±è½æ"åå¤"æé®çç¹å»äºä»¶
                                            log('block click.reply', arguments);
                                            return
                                        }
                                        return v.fn.balh_on.apply(this, arguments)
                                    };
                                }
                                // jQuery.fn.pagingæ¹æ³ç¨äºåå»ºè¯è®ºåºçé¡µæ , éè¦è¿ç§»å°æ°çjQueryä¸
                                if (jQuery != null && jQuery.fn.paging != null
                                    && v != null && v.fn.paging == null) {
                                    log('è¿ç§»jQuery.fn.paging');
                                    v.fn.paging = jQuery.fn.paging;
                                }
                            } catch (e) {
                                util_error(e);
                            }
                        }

                        jQuery = v;
                        injectAjax();// è®¾ç½®jQueryå, ç«å³æ³¨å¥
                    }, get: function () {
                        return jQuery;
                    }
                });
            }
        }());

        remove_pre_ad();

        check_html5();

        redirect_to_bangumi_or_insert_player();

        fill_season_page();

        const settings$1 = settings();

        jump_to_baipiao();
        biliplus_check_area_limit();

        function main() {
            util_info(
                'mode:', balh_config.mode,
                'blocked_vip:', balh_config.blocked_vip,
                'server:', balh_config.server,
                'upos_server:', balh_config.upos_server,
                'flv_prefer_ws:', balh_config.flv_prefer_ws,
                'remove_pre_ad:', balh_config.remove_pre_ad,
                'generate_sub:', balh_config.generate_sub,
                'enable_in_av:', balh_config.enable_in_av,
                'readyState:', document.readyState,
                'isLogin:', biliplus_login.isLogin(),
                'isLoginBiliBili:', biliplus_login.isLoginBiliBili()
            );
            // æ´é²æ¥å£
            window.bangumi_area_limit_hack = {
                setCookie: cookieStorage.set,
                getCookie: cookieStorage.get,
                login: biliplus_login.showLogin,
                logout: biliplus_login.showLogout,
                getLog: logHub.getAllMsg,
                showSettings: settings$1.show,
                set1080P: function () {
                    const settings = JSON.parse(localStorage.bilibili_player_settings);
                    const oldQuality = settings.setting_config.defquality;
                    util_debug(`defauality: ${oldQuality}`);
                    settings.setting_config.defquality = 112; // 1080P
                    localStorage.bilibili_player_settings = JSON.stringify(settings);
                    location.reload();
                },
                _clear_local_value: function () {
                    delete localStorage.oauthTime;
                    delete localStorage.balh_h5_not_first;
                    delete localStorage.balh_old_isLoginBiliBili;
                    delete localStorage.balh_must_remind_login_v3;
                    delete localStorage.balh_must_updateLoginFlag;
                }
            };
        }

        main();
    }

    scriptContent();
}

scriptSource(GM_info.scriptHandler);
