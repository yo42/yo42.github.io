/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","db82d8d201b3101a0eaccdd04e8d7ffc"],["/2018/05/13/hello-world/index.html","cf628a3a9e21162e25f2b372c2d2be5a"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","47ea1ec606f59ea7c881e23205bf55f3"],["/2018/05/28/Material-io/index.html","a110c353488ffdaa4e79b19e63ec9b25"],["/2018/06/09/恶意/index.html","6967970c3ac0b7e9e9df39cd32b25f64"],["/2018/06/11/人间失格/index.html","50123fd63a8b4875fd52144a60dc5d10"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","07dba68861bc0a99021939685c83070d"],["/2018/06/20/JVM性能调优监控工具/index.html","69e08c96e2a1406ad166406264015cc4"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","3b797cef96ad8cf3e6e0f2ef48ad16b9"],["/2018/06/21/转载-程序员技术练级攻略/index.html","ebbf5264a718916d5f8af7b56d4405b2"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","eda48588e01380db59d2bec3f95498b5"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","673906f3383108733bfdbd6023ee5698"],["/2018/07/02/关于云主机系统的初始化/index.html","c08b3955cc16fe9d32a9b942aaf8cac9"],["/2018/07/22/DevOps-And-AIOps/index.html","d2c06a48423084749bc006197f5db50e"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","ed6c3b7d88a7136cf6709346b7540a6d"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","e288e2b1f660e6804b9e414782132480"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","976432c6aa1bd4fe17387b955db57c53"],["/2018/09/04/深入Python-流程控制/index.html","70dfcbb5eaf76aa9d49774d1acb4abd1"],["/2018/09/06/python模块/index.html","0e09dbbad07cb9e58e956def066ff0b8"],["/2018/09/08/python输入和输出/index.html","12b69de91ea20b595683fb136cc40dbb"],["/2018/09/08/python错误和异常/index.html","a77596518ef39a2b5b30857517e84538"],["/2018/09/09/Docker-学习笔记/index.html","4746654f4b35bb0e608ea13f75170d4c"],["/2018/09/09/python-next-step/index.html","e31188228024c98a112beec3740d7643"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","e66b82988fa70668d76e63e8379d0ad3"],["/2018/09/09/python面向对象编程/index.html","45000856cbfbe97ecf0e8453f7895998"],["/2018/09/09/你的-Python-开发者环境/index.html","42b1eef8a028afa8f9f494830cdc598e"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","2f4ca3d1d5df66cbfd61f306d4f1ed78"],["/2018/09/11/游戏服内外网穿透/index.html","8d84fc97663cb03a67cfe49bad938b23"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","d920f5e27e15c5429eb25c0940e1a9dc"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","66e865a6de25fb697efaf7a45f520f5d"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","fa78e69c887ae1561543e630261496d1"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","75a3d009ae9a03a753ceabdbdccdcda1"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","5de5349cd5fba510108862fc30692c2c"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","ce45bd0bac17955ebe5ac6564e948c82"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","dab55a35722f3db27451226189d1c3b5"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","1a141610e87892534e5450de62753b40"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","d9e163403f5acc8f390715d678798000"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","0e2cc25d050356e15257fa988833d2a2"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","d065a126f65d109f26904c47e2dd695b"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","48ce332673b854f2c1930ee81f89cac7"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","8b1ee86d1f82d518864e7a9dc0bd982e"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","0e3e582c30503890a3cc1ec1d406d1c7"],["/2018/09/24/DevOps最全术语汇总/index.html","e5208c2dee2f55eafc9ab9e44948fd41"],["/2018/09/24/持续集成CI-CD/index.html","db333a457075533f7f5c6171b379ff52"],["/2018/10/01/初尝Node-js/index.html","286342bc03ffd7f23028415e6b80eb71"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","70f841a92a6dee4bd33a01a77ce3f37b"],["/2019/01/29/搭建k8s集群/index.html","1b3b4bdc67115ad54cbaf41e19e72241"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","a152df510baa61ff9c6b63d58e4560e8"],["/2019/04/23/简单使用Git-Hook/index.html","02375fb26110538d7305fa940984f752"],["/404.html","5460f68767beac64ebcda2e86a48635c"],["/Aobut-Me/index.html","c0491d2693ba4deefc5f173adf2f7588"],["/Aobut-Me/index/about_me.html","6dfd7a59f2b626e1df00fceaa606b2bf"],["/archives/2018/05/index.html","5761bb87b9c9d1e5f07e0e8beb2aa680"],["/archives/2018/06/index.html","4f05030dbae213d6ef9784dc286d7550"],["/archives/2018/07/index.html","a3f2dddd3e224193ffdf8b7136612430"],["/archives/2018/09/index.html","bf18e7272a4a5d3af6c9ae553ac66f3e"],["/archives/2018/09/page/2/index.html","8e8fc6574605cd2c33655e95e9eff578"],["/archives/2018/09/page/3/index.html","c751304a2e8233785791d383a8ae42c9"],["/archives/2018/10/index.html","460da4d4cf9b413fce06db921fd8fc4d"],["/archives/2018/index.html","b7197e874ebf0a36cadaf7191dff8832"],["/archives/2018/page/2/index.html","176aafc6e0c5aace6376a6c44179ff40"],["/archives/2018/page/3/index.html","bea5cdb5d6564b4be760db6601cc4a1d"],["/archives/2018/page/4/index.html","c432d5ccd9d60ea271b870bbf05b5d01"],["/archives/2018/page/5/index.html","1ded1cda9685d07f631ad39de75555f0"],["/archives/2019/01/index.html","880340336f3043461c127dda3ae495b3"],["/archives/2019/02/index.html","a40211b2dd2266201b1d069c58c786e4"],["/archives/2019/04/index.html","935de441e2cf56d7eae8aec136666cca"],["/archives/2019/index.html","65aa6ab78789728cab1664cc5f6de136"],["/archives/index.html","c1ef7e53aaf52059143417b560c8affa"],["/archives/page/2/index.html","2be6be499b77da21485a2509dfde111a"],["/archives/page/3/index.html","a8de078b6c7994d3b91b2f06665b8153"],["/archives/page/4/index.html","08a8b3aedab5f85f6d8a4502db2dd8ee"],["/archives/page/5/index.html","83e41f73bc5ec3db5409b498939638ce"],["/categories/Books/index.html","519505dd2ff126513d7b60c7d6b15ea2"],["/categories/Technology/index.html","fe6103ab1b368c0bd86a247c16269569"],["/categories/Technology/page/2/index.html","704dee1532d91b948ff98c32cfb1e6d0"],["/categories/Technology/page/3/index.html","2ccaed12010cf7105a241d71b4bd702d"],["/categories/Technology/page/4/index.html","f36b66c158981188c6a08c94188d6a79"],["/categories/index-1.html","d4a77e7ac66fff54614fe997b42e38ec"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","41db98ba1f96180ffec85be04ebd0042"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","7fbc1d722df1486847ddff7254fcf09c"],["/page/3/index.html","31ae65598a76c2205aa586b6f8efb3d7"],["/page/4/index.html","238e1b1beb4571884aca0476a32e0de8"],["/page/5/index.html","6e1d6024bca681957ae6a9f83e3fed1f"],["/sw-register.js","f33e9ace70ceb0fd93dba6b7cc3b237a"],["/tags/Books/index.html","c9172685e03348ccf92ef49ad670ba46"],["/tags/Technology/index.html","788c1173550e769d9d245bfd92cb44ca"],["/tags/Technology/page/2/index.html","de2c8a1876f8e4a268718a9a2189e797"],["/tags/Technology/page/3/index.html","d2b059dc51dd63b190530e57f80666a9"],["/tags/Technology/page/4/index.html","f82804e0d50643ff59f966fd4120dd1e"],["/tags/index.html","32a0eb69898b008a62ea37139edc0be6"]];
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
