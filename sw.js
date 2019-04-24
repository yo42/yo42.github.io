/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","f37f714897f89c13d06429acc405e20e"],["/2018/05/13/hello-world/index.html","3eb88c0f85513d028e98c1a64eb7251f"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","254740938579e03e3fcc288f3461e7de"],["/2018/05/28/Material-io/index.html","01d4c3749e90c12b1feeb5f524d92b45"],["/2018/06/09/恶意/index.html","5239b0a6ab880c22fa65ad1370e2579f"],["/2018/06/11/人间失格/index.html","4619b53d9f73201cbf54812011f9784a"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","352628ef06c79b08fe66ddf9d62c3dcf"],["/2018/06/20/JVM性能调优监控工具/index.html","ef812f6d39ec4f29e0424530c206c386"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","300d0196b183811c3b92ce8757c63a98"],["/2018/06/21/转载-程序员技术练级攻略/index.html","09b4e9a2df6ab9e84bfdad89ea72f988"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","3cb8c657d0018a4e9e469df733be9d7b"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","176ec2a29819596559a4b8c9cb74681e"],["/2018/07/02/关于云主机系统的初始化/index.html","376915cd7b360204b05278360b9adaeb"],["/2018/07/22/DevOps-And-AIOps/index.html","9c11b56cd35f6be80a4514bbf94adc79"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","b52bc00738c3f26931506081177c8747"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","b52af220df53f15b7089fab73c079601"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","4f82d098cff469c484230445385d85be"],["/2018/09/04/深入Python-流程控制/index.html","2eb670a71c4ed5a23017f2ca1fcb3de3"],["/2018/09/06/python模块/index.html","06458d8656a38d8a11187e782b7a297b"],["/2018/09/08/python输入和输出/index.html","64508a4fbc35fa45852e88b49f6a5c0b"],["/2018/09/08/python错误和异常/index.html","62c8423ebf9a72e8520a32d817b61338"],["/2018/09/09/Docker-学习笔记/index.html","8db05880e6718d7e8c73a88b85b3ab75"],["/2018/09/09/python-next-step/index.html","8e3f3509b4018ef3d74f828ab572e5d3"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","982c2a983b89c34a0222251a6b59015a"],["/2018/09/09/python面向对象编程/index.html","f369920453e661ca122797eab183e51d"],["/2018/09/09/你的-Python-开发者环境/index.html","31dade2717169f8855afb1ee3205624d"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","c936b92e9790af3aa0022681ac4a7bfb"],["/2018/09/11/游戏服内外网穿透/index.html","8b6c5e4c2938c98613df1e84898cb6d3"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","edad016026403a92d58448dfa256aab3"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","30862152c6befacba2d5557cb8c64fc4"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","1e19b8e6c2fc6b85329853c7cab09e52"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","0556ba1dda19fbd390c2426a092669f5"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","c3b44774a4114159e488ad4e891ec21b"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","e049195d6487f630d4d4df6b4973c192"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","7924a3a29382dbf00643c25abff381e3"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","2152da47f5a9a5f1c9da5e67f81fdde3"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","aef1964a5b3740f9366fc917e339fe1e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","8d920aaacd5ec572e10f503dd3b8ac33"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","0ac968d5a5cd90c07f4a0d600a1e5519"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","4865a3baa5e9f72545b6a491757cccde"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","6268f43f46817d825586e0b584dce92e"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","e7a6302e201392d72efa452e5f9bf3f4"],["/2018/09/24/DevOps最全术语汇总/index.html","8c1ce537324fbac91779235254f122c0"],["/2018/09/24/持续集成CI-CD/index.html","ecf822c51bde5f653ee302199e063192"],["/2018/10/01/初尝Node-js/index.html","75f9447fe607d5bfed3623d4949db2b8"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","ebe668f538adfc5c20d7168fb84813a4"],["/2019/01/29/搭建k8s集群/index.html","4ca1627f9562e19396b34a00860e1614"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","0cb1a95373c94a745d72cab87fd541c4"],["/2019/04/23/简单使用Git-Hook/index.html","96fd3ababc0825eb66862a7d3470880c"],["/404.html","f864dfb73b465ea9f16f40994bc8eea9"],["/Aobut-Me/index.html","0aeeebe06c1b46d1ac798f1b6b6a7b40"],["/Aobut-Me/index/about_me.html","aab781e7b588458deae84b20bc537b8d"],["/archives/2018/05/index.html","7852289f489bd658920fe65a9ad40a5a"],["/archives/2018/06/index.html","d349da31ee2f7b1c02a722a8c7694292"],["/archives/2018/07/index.html","b87f6ee575962caed12ca6e313d5dec4"],["/archives/2018/09/index.html","6ce0609e821f4c5365157b10caa3cec0"],["/archives/2018/09/page/2/index.html","6d14a3b299b60ae96a7dee4bd63f0d0b"],["/archives/2018/09/page/3/index.html","ab62be0ba0b8c0d69e6355773d225a5d"],["/archives/2018/10/index.html","d0dd241123a93ea7c97170db221be5e2"],["/archives/2018/index.html","786315b6125b0dca184457cf5709bee3"],["/archives/2018/page/2/index.html","7a62ae7059e8e5eb96ecabf6d5c8c43a"],["/archives/2018/page/3/index.html","abffccbf2372b666a8d3b89d35228800"],["/archives/2018/page/4/index.html","6af55f81dfb21fa8c8db25ac748cfeaf"],["/archives/2018/page/5/index.html","5f9e07a210befb5e1d4c837f2ab8f556"],["/archives/2019/01/index.html","622a647f97e69f196eb9378a8d473377"],["/archives/2019/02/index.html","ef4783e2a464a0edead732c2215e8584"],["/archives/2019/04/index.html","e94483f654a4c299c71604ebdcd1c23d"],["/archives/2019/index.html","fc81ef6b65c34e0fae295f27f2f8f51f"],["/archives/index.html","87a7810ac2ce529da3581bf8b8e5700c"],["/archives/page/2/index.html","b2c227ecdb94ef595b788703812a463e"],["/archives/page/3/index.html","ddd5325567d3d0249639f4d2775231e6"],["/archives/page/4/index.html","350c6538921c95866b7a4c30091bbe3f"],["/archives/page/5/index.html","9dee212e6a9ff8fe76d72e1749b51f57"],["/categories/Books/index.html","a78646b2c53b6ad2de4a44af2694c0c9"],["/categories/Technology/index.html","84143b2b888a3f5b8df7133decf66f8b"],["/categories/Technology/page/2/index.html","bbaae35e9d9bd61f9fdf71f0e5840111"],["/categories/Technology/page/3/index.html","37afc9051d87b2721d9a562e8310157d"],["/categories/Technology/page/4/index.html","5c00d2646294127e5364e0de18f9f31a"],["/categories/index-1.html","9044e43e5c8be1a9c5269132ccec4180"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","c8d8f662d0fbaa591695e186824eaad4"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","60fe32f73a6dc90cde688774b9075b59"],["/page/3/index.html","01932098511b8a8607565ee2608eb7b3"],["/page/4/index.html","450d740a387c72275ba793b4265a41cd"],["/page/5/index.html","b75a29d28f5bb47ce434a453c22b092a"],["/sw-register.js","eab46fd03f9502f4e11ae4a90de1e74f"],["/tags/Books/index.html","33e9020a72fc614fc1afefda7ed95a89"],["/tags/Technology/index.html","e6d16655bdfd80ccf0908648915f1751"],["/tags/Technology/page/2/index.html","53983475d1dd1ba9ab8efc84e2f9c546"],["/tags/Technology/page/3/index.html","cd54996c128b09a5dce10d8484eee34a"],["/tags/Technology/page/4/index.html","a7c06f850af34b5e5aa4f07a7d4cb421"],["/tags/index.html","a2cc43f0aa5967d319f4b40a7ec93bfb"]];
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
