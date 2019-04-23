/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","d899bddf3d48c1795231be03a53fe080"],["/2018/05/13/hello-world/index.html","f27ca231a4f7ef3c343414e22b4768be"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","68dcc46ebda945f47b036c12729a5223"],["/2018/05/28/Material-io/index.html","5fdd0891bea1fb22e23a893c1f0636a2"],["/2018/06/09/恶意/index.html","7327e8b26f76c3e92e1fd1371c90d9de"],["/2018/06/11/人间失格/index.html","3786bef467b11069bc88b3c5bcfbe5dc"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","6c257e2d5811a3ce6081334b7687c976"],["/2018/06/20/JVM性能调优监控工具/index.html","17420ec4e93e822b53bab38ea2ce7ae9"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","87cded58191231721be30573f54671a0"],["/2018/06/21/转载-程序员技术练级攻略/index.html","dfecc82aad4cee5db77c996377656871"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","1532e298f5467d7dc0aab7e45bff5a01"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","bfc8cafd331b204437fb91686f8815f6"],["/2018/07/02/关于云主机系统的初始化/index.html","d566a0f6c3bfa9621700b32a3d543c10"],["/2018/07/22/DevOps-And-AIOps/index.html","162776153b77023fa07cab7cafb79013"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","7d19c1544a70faacc927d8d430573720"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","0680006296c1946c5c52d8b2747fea2a"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","01e3997aa60e2c7af861042a27b6093c"],["/2018/09/04/深入Python-流程控制/index.html","752c4c730faf1308903b6ece0d795925"],["/2018/09/06/python模块/index.html","a40b78b16738386db70e43ab1521e502"],["/2018/09/08/python输入和输出/index.html","f41a96d98078d846f47f4ad2601fbd73"],["/2018/09/08/python错误和异常/index.html","5387806b52ffab522939a1ac57494de9"],["/2018/09/09/Docker-学习笔记/index.html","f2599922dd2dbecddeb7735f898e410a"],["/2018/09/09/python-next-step/index.html","2ff08ec3b2ed988372f2727fe2b613a9"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","127303caef6c73a8dd230aa124ac0deb"],["/2018/09/09/python面向对象编程/index.html","34d6cfb270d40f6a0392a77883f72ab2"],["/2018/09/09/你的-Python-开发者环境/index.html","9e68a4df2cc09f62a98f54c5e48a0b3f"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","b4d8f937b8da2236d91317c59305f5c3"],["/2018/09/11/游戏服内外网穿透/index.html","599cac98579ee9e166095dc4a768b8f6"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","a0806255599294f4834f807c96bfc5c5"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","13f55d0e0a60d2e5a0c85dacb74ee5c4"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","f2b059dfebaab91722ce935be40e62a7"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","2befa665451aceb4f434a47a49d7da88"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","58aa007d6d052aafb0436872d36f6526"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","9fcbd66c92ea3b4e8620c3579ea1f1c0"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","18b6ff48aa721453a835581d3f7a82e5"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","966b9e84911e870ab58fd1eeea2e4ca3"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","af5bfe8f1a80a9f5764fba5285d307c9"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","2ea0c1e081fca723af770958ab30b19d"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","ef283606aa2179596b0b9dfe337723bb"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","39d56d4ad9046f095ade341f51916aff"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","5984eea8cfa2251cb63bb17138d1c533"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","ab6a5601306dc66e9f7a444e10862b75"],["/2018/09/24/DevOps最全术语汇总/index.html","ae4aa756f14f1d1be618d8d73ae012ae"],["/2018/09/24/持续集成CI-CD/index.html","fbc171bf156f37c8d42188b53ee30d7d"],["/2018/10/01/初尝Node-js/index.html","c251e8e7a19b28c791c76cff6a28f9d1"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","e29edd0e7796d1f7b67e2ff4addc3862"],["/2019/01/29/搭建k8s集群/index.html","73fef8c4a9d5f7a8f12d9746370b5586"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","5ff6b2ba6c3c674c5d8d107bb570d69b"],["/2019/04/23/简单使用Git-Hook/index.html","fa0263f4da05448dde4c8780175579c9"],["/404.html","25587cad349dd9a025320c8bd6ce5c24"],["/Aobut-Me/index.html","6a3053d8f2301ec207b828698e07ead5"],["/Aobut-Me/index/about_me.html","c214089b8ec2cb2fa1dd908ad7a43d4a"],["/archives/2018/05/index.html","9807c9da7fc73b29d09c1556297fe813"],["/archives/2018/06/index.html","8ce587155a50e8a90ccd201784bb99ce"],["/archives/2018/07/index.html","be50ec9aca28b98747f1d7bfffc1eef4"],["/archives/2018/09/index.html","0a3c975d6920363a2fdbc3a3e028f0fc"],["/archives/2018/09/page/2/index.html","7dcca8232b8ab0e1793f1596c539c848"],["/archives/2018/09/page/3/index.html","f7f8017d0d3432b8a9eecf60d6783cbd"],["/archives/2018/10/index.html","ee7af4fc0e5d4349c9b3c0b3350697e9"],["/archives/2018/index.html","580495967a2d54344cfba8d406c902cc"],["/archives/2018/page/2/index.html","c7511039a51f788e58dac345207fd306"],["/archives/2018/page/3/index.html","03ae85e475e9fb7dc03377fdd28f9de5"],["/archives/2018/page/4/index.html","8f51aaa985f481242525931c126cf29e"],["/archives/2018/page/5/index.html","47e2b7c98f8414896abdac1bf4a4b13f"],["/archives/2019/01/index.html","f89aa2e107291f413eabe48e8223ad9c"],["/archives/2019/02/index.html","5679817aeced57717cbaf0b22be5e5d7"],["/archives/2019/04/index.html","b2b9e2af6b001a312e6047225b23c07c"],["/archives/2019/index.html","a661e9c10de7b0baead6dcc0012bf740"],["/archives/index.html","eb015be748dbe3f02f2ae6c0d50de857"],["/archives/page/2/index.html","4cbf86b0d79bc6fba4137e3dfce84a49"],["/archives/page/3/index.html","ddcf15a419c82b13a2c99339c09b5ad4"],["/archives/page/4/index.html","86737b9d81ac7678bc3ad6cae2bcdd9e"],["/archives/page/5/index.html","75cded1ce2664adc27c6269f3b8b28f2"],["/categories/Books/index.html","6cc5913a189ee582fa960a7c07e3a50c"],["/categories/Technology/index.html","764901d9168be14f6fd376b8ab047d9a"],["/categories/Technology/page/2/index.html","08165c4841e23bdd0ab60734d0bad9dd"],["/categories/Technology/page/3/index.html","c4c4bb00b2b5c103dbed48c0c5834f1e"],["/categories/Technology/page/4/index.html","844ca21654283f10782a8e30cb5d695c"],["/categories/index-1.html","0bb3ff8b445092b639e6bdacb6c43cc3"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","84f815ebf95d8afff5d751b43ae3f14a"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","28d5ab1771e92657acfe5abea9fb80d0"],["/page/3/index.html","5e70c1f576eeca139c2bae4f339ef89c"],["/page/4/index.html","f06deb2979a0f5aaae69ae16c01963b3"],["/page/5/index.html","c53dfeb7a7d2fbde97d5c0f55b33a447"],["/sw-register.js","173d11cc8182d51eda28d10d21f31c2a"],["/tags/Books/index.html","90dc756827023c7a8efa36a3e2069234"],["/tags/Technology/index.html","88e4b59fb07f16384971d2a0880429af"],["/tags/Technology/page/2/index.html","0a5a7760ccf115f532fa7f9b6794542f"],["/tags/Technology/page/3/index.html","2d7093a75167f39f17d7a6dfd41a24a4"],["/tags/Technology/page/4/index.html","0f1d0003e9bc2bdee06725ffc8774843"],["/tags/index.html","902bbd5679d4d02ac4005fbfdf467e78"]];
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
