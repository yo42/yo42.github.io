/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","836abc66cad14ff04486ddd64948da16"],["/2018/05/13/hello-world/index.html","f66dacb156eacb5958961cfa4df6fa51"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","e9cebd5b962a3de2644b9daa32dd346e"],["/2018/05/28/Material-io/index.html","17a3bd3e68fc2d8e2b9a38d0dcd12f9c"],["/2018/06/09/恶意/index.html","9a12511f90648bc4cd7ec80133411a06"],["/2018/06/11/人间失格/index.html","b646074783cf0e72f0bde15f7ddfcebd"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","87ae1239b11632a4a8716a7e89474456"],["/2018/06/20/JVM性能调优监控工具/index.html","a744e4c711fcebe970208aa826601d80"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","db4118bdb301129c3a83555888674015"],["/2018/06/21/转载-程序员技术练级攻略/index.html","f3750ebc195912ab2c702a962cc7d2d9"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","c8ab72929b2d949e4f3176ea93b2393e"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","cf3456944416f60aa01a33ef24f70f2b"],["/2018/07/02/关于云主机系统的初始化/index.html","7ff4a8c7785912f5915f3c5a5070ce67"],["/2018/07/22/DevOps-And-AIOps/index.html","8ec3a4fffa7fec2e5e62137975f66791"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","89f416f385a7ced2c2ab7a1ff84db9d6"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","68ecc1d2ee7d0ed20ae8dbb0a51639da"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","b75e365384c45ad4f5b64c63a7bdbd31"],["/2018/09/04/深入Python-流程控制/index.html","cd97cef5ff94a9dffa91c8d0587dba60"],["/2018/09/06/python模块/index.html","ec3c6b207ffbd846a86a60a10291851c"],["/2018/09/08/python输入和输出/index.html","475314304b28d64e0b550157d1086b58"],["/2018/09/08/python错误和异常/index.html","b866e58e6bcb53907257956d87ee899c"],["/2018/09/09/Docker-学习笔记/index.html","62a6981b083e651cdcd407296015b846"],["/2018/09/09/python-next-step/index.html","71ecda15f3036107797cc6fa891fa3a6"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","b6dcb0b391d8a3aa0ac48c1edbd19334"],["/2018/09/09/python面向对象编程/index.html","79a704c3288ffbd6a44a193d27624487"],["/2018/09/09/你的-Python-开发者环境/index.html","3e810652bb5ea5959d9aedeeb456ce03"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","98ff5cfc2ec4a332635eaabd11e9bb51"],["/2018/09/11/游戏服内外网穿透/index.html","84b89565a3a517ea1dd6a7323f8e6b16"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","8822e7d3e9a368882e8dc51c6390baa1"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","94560809426642888f7d3f0ba13dac87"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","ce3d61791164bde9980e3afecc09fc90"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","8fae312e8f4a2dbe48474dc1ca91e623"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","c314fe8a1e9bacbddf9582a2bff4befa"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","50015fabd3a815964f5f0cd4ca91e97d"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","bacc59bb4982b3dead44f0a7c0e5ab92"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","313756c0f10c655e6173099199865297"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","ca72f4815ab718c770091b088bedea93"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","eb49dce2220e70e10e9e7baa15dff825"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","b89a8de9a638c8aa7074c41f6616da53"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","f30c6f61e13f8820f1d9006798265307"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","e01d7979226cdcdeb4a17c99afe14142"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","e5308a9297696e9b9b701d8582d4792c"],["/2018/09/24/DevOps最全术语汇总/index.html","d168d8027c8327bb6997498090b92bc9"],["/2018/09/24/持续集成CI-CD/index.html","643e397b2bbe8fc263671c4837cb2c3e"],["/2018/10/01/初尝Node-js/index.html","6e776997bb1f3f135636e350aa9e8cc7"],["/404.html","e966da91aaa6ecd40ac947dfb8d9b60e"],["/Aobut-Me/index.html","49d7ef186a2af04f7a3146468700335d"],["/Aobut-Me/index/about_me.html","896ea5694080d9917b390acafd007bc3"],["/about/index.html","3149706493e157a673caff5d3f576a8d"],["/archives/2018/05/index.html","dd80b4a8391e71f6cfdfc97061547aba"],["/archives/2018/06/index.html","3c4ab15b89146a0455be53b9235a03f5"],["/archives/2018/07/index.html","5de9ca26c507ee6caf3d9b31e235e3ac"],["/archives/2018/09/index.html","c6e3521933327860335dd9fe3553b3df"],["/archives/2018/09/page/2/index.html","469591ec9f843dc468e957d86e4482f7"],["/archives/2018/09/page/3/index.html","564bae3a416432690fb79be600e0e694"],["/archives/2018/10/index.html","0dda65e9fa47c7f263f4ab873333a756"],["/archives/2018/index.html","06eb31e69a8044311e4beed221dc0c18"],["/archives/2018/page/2/index.html","f0353bdfde3ed7ab2cd561ef4f35d3ee"],["/archives/2018/page/3/index.html","ddb8f9ca54cd1e1ff1269ad5da97afe5"],["/archives/2018/page/4/index.html","b02c631f2e776e481e28232849f29c61"],["/archives/2018/page/5/index.html","8ecb863f3d5799112a8dbe58f6e435c9"],["/archives/index.html","440bc33bfa3111b3f13442765ef1fd3e"],["/archives/page/2/index.html","e8b3f73b2ef4185a36754234042d30b4"],["/archives/page/3/index.html","50b532cabf19599d081cd0e593fccf34"],["/archives/page/4/index.html","66b7a60443eb7e4554189007679dd9d1"],["/archives/page/5/index.html","ac3f2de2d7a1a300927f371b44ec6082"],["/categories/Books/index.html","f56a9896a8ce973ae1eefe17d4906286"],["/categories/Technology/index.html","80ee2f601e21e9f32132137ea7c66e47"],["/categories/Technology/page/2/index.html","982837a70b1e6d7a367a78445e731631"],["/categories/Technology/page/3/index.html","1701c7c08b4f7a092a9f0e299b3c02e4"],["/categories/index-1.html","727d708757149586e06f0491ccb07eb4"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","efb1303b2c3abf790b7221f7b4421712"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","69afc817d54e85f4c9b8ee33076a2564"],["/page/3/index.html","240c3128aad813746b9337406fafc1df"],["/page/4/index.html","37e0cf73818d1abab0cf3bd5a4f676b6"],["/page/5/index.html","466b9340dcbad2650f854cb5d56bf2bf"],["/sw-register.js","b761e043434098718f9f5159f0e66889"],["/tags/Books/index.html","a894abf75885a1457a2043f32a684eb5"],["/tags/Technology/index.html","8604dd69d249eb2f1d9df9c6366714ba"],["/tags/Technology/page/2/index.html","b64678523e3020f1c0535ebd75ad417d"],["/tags/Technology/page/3/index.html","2daee0639ed70038843133a552ee7d6e"],["/tags/index.html","3ec45d7a29ba8f0ed595e7decd2563e9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
