/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","6191f18c284acd711148b3de6d6d17c7"],["/2018/05/13/hello-world/index.html","5796b8551c3178ceff1743ea965839e5"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","b04f84bfc452783980b6c65d464873c6"],["/2018/05/28/Material-io/index.html","349a8444944db982627299ad29a98a4b"],["/2018/06/09/恶意/index.html","ec0d6eb03ea1a4effffb12934164556b"],["/2018/06/11/人间失格/index.html","03639fdf5d1684ed25d9efa28e686dc3"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","09d9a2cf70bc791e480c75329aeac901"],["/2018/06/20/JVM性能调优监控工具/index.html","d4f72bcbaf07a870413167a0c268b39e"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","c6388c482303442b6d719f9285d8e52b"],["/2018/06/21/转载-程序员技术练级攻略/index.html","9d9121a34df68c6a5d53dec89f6443b7"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","b886fa194cb2c4a193ca99175d10457d"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","eddfc3bf179d4c18432cf590cc22f573"],["/2018/07/02/关于云主机系统的初始化/index.html","c01267db03a1b1cd66258668e21c2c64"],["/2018/07/22/DevOps-And-AIOps/index.html","9672141c67447646d48725f1ff1ca78c"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","e92c1d3586f47a487886ba5214c8ca4e"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","d4619a989b4417b6d96b0d692a90f096"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","7cb74068f8a54dcec052996b68d089c1"],["/2018/09/04/深入Python-流程控制/index.html","6098546c332a22313b82f9bb8e4478d1"],["/2018/09/06/python模块/index.html","140b1f56f003b38d71a2f432ca4ef947"],["/2018/09/08/python输入和输出/index.html","67842eff0d435ed75b692e2305f90eb9"],["/2018/09/08/python错误和异常/index.html","f6c1e7290c44affa359cdeefe6e9b553"],["/2018/09/09/Docker-学习笔记/index.html","faa91940056cf0a4278ace94178a4ddf"],["/2018/09/09/python-next-step/index.html","d83b3bcd34623c7d0e06c267bc5481e6"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","ce20b8a62c2c9114a94dbfac380ef23d"],["/2018/09/09/python面向对象编程/index.html","f73f8ca853114683c4fad612bc07af08"],["/2018/09/09/你的-Python-开发者环境/index.html","68e05d50392be7c0919f21fd78fc3fec"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","2e69ffb3475ef2e69fca7a9c9997e380"],["/2018/09/11/游戏服内外网穿透/index.html","a5307f554f0ac98917dc6ce177b93c18"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","157ccc853218d8afa3823aea2c66a585"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","4e012796e5723a8d578875df5bce688f"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","6f45782016ee8e939eb90b5e8e8d2377"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","8eaf90e1411792a859f49abfab2303e3"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","3c8dee59960ee43566e0919546415dbd"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","ac26fbe34460bef7ccad85cecf827b6f"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","088f02a702ccad4e1db775eade53e2b2"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","4c35fa37e6d2db3cc0e20c064d0a9df4"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","c80cea2208e4ee4957f34876b8cefd34"],["/404.html","deaf544d7b98a846fcd7654776275752"],["/Aobut-Me/index.html","4506f82a4fe9b615631ce7ad815a10c7"],["/about/index.html","43f74f560a9daf94091097a52f261dd7"],["/archives/2018/05/index.html","01f901bf55e6900f42edfb0c34e31de4"],["/archives/2018/06/index.html","4d478fe3114bb8ac0725ed93af7224f5"],["/archives/2018/07/index.html","5f737bbcf18b5f3c5cd497520e6ffe08"],["/archives/2018/09/index.html","ba0d2c8dd71baaa0df1f6ee70e8f43ee"],["/archives/2018/09/page/2/index.html","38675ceb41f6bfab3494e926073a37a2"],["/archives/2018/09/page/3/index.html","17de048e396464c2b92540041ba55e94"],["/archives/2018/index.html","18c98735322297d9af7feb5df4e30f1b"],["/archives/2018/page/2/index.html","fa65873de2e95a6b8c6124415aa5decb"],["/archives/2018/page/3/index.html","291b212345a8352630a95fe561fc55f7"],["/archives/2018/page/4/index.html","7ecbf9a6f372340998d95ccab462fff0"],["/archives/index.html","b2d5faeb9b076cbb50e7e80999b92efa"],["/archives/page/2/index.html","1dae60ccc53090daa5d4730358c2e466"],["/archives/page/3/index.html","c72b99d7eaa554b1d7661b969a5f0437"],["/archives/page/4/index.html","34e8c4820bc370ac298dd5d97708cbe8"],["/categories/Books/index.html","0bf617f63b6438bb685ff643d511dd23"],["/categories/Technology/index.html","9ea3e4356bdb2b8f5de00df4eea00c5a"],["/categories/Technology/page/2/index.html","0a5080a6734452c96e6a8b47e43dd048"],["/categories/Technology/page/3/index.html","a6b11f4ad960179ee6eb5ff77e4d0d6f"],["/categories/index-1.html","613a85095b21df8016beb00045e1aeb7"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","5650fe89f16929c0ecf8967075bf4450"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","0395ff60c0266c4d83c361e7cf3dbc69"],["/page/3/index.html","22ac99a586e84132d7a981ba7f648bdc"],["/page/4/index.html","14fd2eacecefc1987b595b96a63c988d"],["/sw-register.js","9a419b9e5f17f2e883ef8f6e1a4cc4be"],["/tags/Books/index.html","ee0edd05eba983807c06f890b0e01132"],["/tags/Technology/index.html","f293c4d39b512d9fad6f545efeacf777"],["/tags/Technology/page/2/index.html","874d284c3d4975c5dce2825400afa773"],["/tags/Technology/page/3/index.html","92aabd09a38da62ac396816f976c90f4"],["/tags/index.html","1f0e1e52c77780302b4d01eda5ca8364"]];
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