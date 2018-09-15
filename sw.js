/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","6e196c9675646d8cf619b86011ee321f"],["/2018/05/13/hello-world/index.html","3dc26c8199680f3704875996ba3afd60"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","1d3850a1dddd5e7239696ff56fd907ca"],["/2018/05/28/Material-io/index.html","a2da188ea450d8bb9773e94efef78f45"],["/2018/06/09/恶意/index.html","cea00c9d3fc8b5442ba4deee3eea5e3d"],["/2018/06/11/人间失格/index.html","46751aed1a6bfda4846076f6e4ccfb49"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","fa8fe4d2ce958dab1746d03177a24a86"],["/2018/06/20/JVM性能调优监控工具/index.html","d3c0e73643a42a728578f384255d8f3b"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","f0b91f8e809ac73ceb6e1a0061d8b64e"],["/2018/06/21/转载-程序员技术练级攻略/index.html","41881e49a4d6edd1c2f73c5ff756ac10"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","45c8c19d25adea3ac2a94a86b8e253b0"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","2a85632af4d7ef7d9422f8abc7a62db7"],["/2018/07/02/关于云主机系统的初始化/index.html","820dadc138b8e0215257c69d1fd90505"],["/2018/07/22/DevOps-And-AIOps/index.html","f4353c0d170d80387fcfb905e79fc2fb"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","6170af9e4e6cc13389d1c756056f3fcc"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","70fe356ceae529fc84dca984ac16f6b3"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","f17b589a094e4160842f4abdb1def80f"],["/2018/09/04/深入Python-流程控制/index.html","91d67b5dc5e79df0986a828f3c7451de"],["/2018/09/06/python模块/index.html","2dae73841946887ea9c5aa0c8435732c"],["/2018/09/08/python输入和输出/index.html","f2c3b6bdecbc2dacb4a1245dd4846c59"],["/2018/09/08/python错误和异常/index.html","e8be2026fa16e52021a0e327a2bee3b7"],["/2018/09/09/Docker-学习笔记/index.html","5d55f46d83e4b2ba526d2cc9177a80f7"],["/2018/09/09/python-next-step/index.html","266d21d9cff3264133c41ada78aec0bd"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","b4de0e3cb7d72023a1cfb0244d2dd66a"],["/2018/09/09/python面向对象编程/index.html","2b332a7bc07d9d517db0aadc6b2e679d"],["/2018/09/09/你的-Python-开发者环境/index.html","758c7b06ba5a545d82d7fa54af097eaf"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","22e1eaa0037bd51f97193d0afb3023a4"],["/2018/09/11/游戏服内外网穿透/index.html","252c674f52171063bcc47530d0c786a8"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","a8727d9d8f1e8afa302b4ad02652a82b"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","6b697e5c156cad472af4db845eac8bdb"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","94b58a5dd32cb62fe120cc1327210b41"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","40359b8ab4a90e6db0a7183dbee24f9f"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","77b73f68f57af4b932ec874da5f2c3d2"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","5b8f9c9ea8df431492fa3841708df2b3"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","7b90c8a7a08014e1d15a30498c788f98"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","12d7990841a44700ff00bf4a0aa7bbff"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","09a054c002b4cbefc76b92136dc7446f"],["/404.html","4ac6d28aa19ba7851e2afefa91aaf194"],["/Aobut-Me/index.html","c0a945dd0b814abcb2e097928fcd6951"],["/Cosmos04.jpg","cd578f459770ed13c9fb97582692b14b"],["/about/index.html","df598eca7e2bf9ecd02f30ecf46dbe43"],["/archives/2018/05/index.html","0b3d102b2e1f01ea1f0e6e3756e98d00"],["/archives/2018/06/index.html","1158fd85222acda4ec03fa97bfd13664"],["/archives/2018/07/index.html","75fe1e6de4d5e005bc00b9073aeee320"],["/archives/2018/09/index.html","f25e37684efce41669077db04c89438d"],["/archives/2018/09/page/2/index.html","02d99b0f168dbb5c3f5f43762eed412b"],["/archives/2018/09/page/3/index.html","84c3cb37b4e64952e67b1a2d05843c2c"],["/archives/2018/index.html","6b9421b726c1d287753b0426d471b95a"],["/archives/2018/page/2/index.html","e6900a7306db40b0eb1984e3ce3e66fc"],["/archives/2018/page/3/index.html","582d44a21cc22e335fd25e0d8da0405a"],["/archives/2018/page/4/index.html","ba1a1d8750d79b38ca75f0942df1bcbd"],["/archives/index.html","c2cc1b79873a8892f60193850584e0a0"],["/archives/page/2/index.html","ff7b13b07bfa609b2046074edacd8916"],["/archives/page/3/index.html","af64ee17df691cbf0fdbb3f0b68dc677"],["/archives/page/4/index.html","a3ce2f092a49748a7f869684b0008531"],["/bundle.js","f4932408ee735887c568fe1c05c5c306"],["/categories/Books/index.html","5ea63a88962bd0339c09e0c529c10241"],["/categories/Technology/index.html","7fb12fe8c4f95f1baf2f261509dde324"],["/categories/Technology/page/2/index.html","3bc00463706bdd95ca680eaa3acc9b96"],["/categories/Technology/page/3/index.html","c29420cb38e1abd61ec6eb102003fe5a"],["/categories/index-1.html","ef6c8493a9de913831b79f9cc4098f79"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/fontawesome/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Bold.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Light.woff2","69f8a0617ac472f78e45841323a3df9e"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Medium.woff2","574fd0b50367f886d359e8264938fc37"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Regular.woff2","2751ee43015f9884c3642f103b7f70c9"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/fonts/roboto/Roboto-Thin.woff2","954bbdeb86483e4ffea00c4591530ece"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","6badb0cdec72a55b7680e179209b5263"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","ab3c25f11378acdcba635e51a99f3c60"],["/page/3/index.html","0dcdae30e23c66bad12c78100e519ea8"],["/page/4/index.html","fa092731e42702852b5659761b045b0c"],["/style.css","3520b5bac0e577c46755274b50aaac62"],["/sw-register.js","ab28feccb30106fecec3f893f7d0d235"],["/tags/Books/index.html","71173ef143d0dc4b81ff12ee99e5c2f5"],["/tags/Technology/index.html","896fe3b1f2ccfdff53578171ff07f26a"],["/tags/Technology/page/2/index.html","77f8e2437a0de1dd1eb4a0aff4e10a40"],["/tags/Technology/page/3/index.html","d59f3edd04c0ec59588ee594e668c40c"],["/tags/index.html","cfb6ea8fe850f7322a2b2136f77df744"]];
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
