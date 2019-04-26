/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","7f42e31515a7772199c67356cd7388cc"],["/2018/05/13/hello-world/index.html","0dd0f8b4438664acc629a3102c8cc20e"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","7228bfdd3d983cad69d37db3ad3c2edf"],["/2018/05/28/Material-io/index.html","0819bc555bd8bd2cb18c1c849fbf806c"],["/2018/06/09/恶意/index.html","3aad10550d2cfa2b57acb558786db944"],["/2018/06/11/人间失格/index.html","664fc5723d5df71c341ce54086e142c5"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","abf6c9cd959f179aa9b60cfe7234f779"],["/2018/06/20/JVM性能调优监控工具/index.html","7d6f664e6385b74e5e1b7c48bcb2e54a"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","4ad5e73db2859583eb23c3ac9326fb48"],["/2018/06/21/转载-程序员技术练级攻略/index.html","2fbae3867d7c84eb8f456ee8d827b6cb"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","9ce48eb36a3bfd932fd3a355b073ed3a"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","7a76c990cf615cd4a8cbbb44a02de0e6"],["/2018/07/02/关于云主机系统的初始化/index.html","a9a60da255f58eb7c91a986c76af7ef4"],["/2018/07/22/DevOps-And-AIOps/index.html","afd6da7f549241b3caa460db7e743eb7"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","a600af128fa0d8772f5210c6cf19a205"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","eaf17cb6baf2c0501191ee7c780c33ee"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","21659e146127c75d74047b21ab3467fa"],["/2018/09/04/深入Python-流程控制/index.html","f0318e28da8627208c7086808a05b89f"],["/2018/09/06/python模块/index.html","586d53ad9a4235f1497c6037ff2d7f18"],["/2018/09/08/python输入和输出/index.html","2cf4ef8c6922debc3b64e8838b47a509"],["/2018/09/08/python错误和异常/index.html","31e7458c9459e0d68a39a703a662b6db"],["/2018/09/09/Docker-学习笔记/index.html","8b90f75cde930e8fd0806ee9ef2422bd"],["/2018/09/09/python-next-step/index.html","1dbdc6391512f8ebae057afd8d64bb8e"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","9fc309d82d7cfc670d87a5c55dbb164f"],["/2018/09/09/python面向对象编程/index.html","53c59c45a867a81193a7b47e97d5d45c"],["/2018/09/09/你的-Python-开发者环境/index.html","829710798e0cbaf12d48fddba247221a"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","70c94624511f222fb5ccfa1ed0a4e37f"],["/2018/09/11/游戏服内外网穿透/index.html","c8a091ffd1c23cb6bb5dff2a3cac2eca"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","ab0a1b8f6a889fc49f2b56101b39d86b"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","3e6021f44568d87579f834aff3b3641e"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","a1164d89dab81bc68eb263fe07bd94d1"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","92065eaf0dc21003bd255a0f7c6257cf"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","f2a693fd7c4cb7435e56ca9f8872e306"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","050639a175e0c000d065fc09d640db5c"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","34b8c6ab4dd1d90c7b8366e39a1c1d2d"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","36dc9f39149ab65487eb1a7e687e4732"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","01784d9ba4ce23d17e8b5ecb34fe434d"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","8449b2d9a6699ceb25289c093beb6873"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","1a0d076a38229c2769fdd0e94ecb1db6"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","9dea35c79932f204b46fe615d0b93239"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","4a7fbaeb45ce525f1b6b8f39cffaa1d9"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","9aa1deee69bb09fec0bd9bd4fd7c0030"],["/2018/09/24/DevOps最全术语汇总/index.html","7e48bdd32f839c95a8e39f7c9a1fa56e"],["/2018/09/24/持续集成CI-CD/index.html","40c61722572ff0d8d43d6b9207c3244b"],["/2018/10/01/初尝Node-js/index.html","8574d8882878ce2af772b8d4baf62150"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","7211c8231eee804bae1be99b1b15aeb0"],["/2019/01/29/搭建k8s集群/index.html","17d10dd7faa7503592911f10a34279f7"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","fcd536080cc56bcec1070ac76689d125"],["/2019/04/23/简单使用Git-Hook/index.html","58b24ea8f80119535317c1dfd9fe921e"],["/2019/04/24/Kubernetes-实践-基础概念总结/Docker化前后应用发布流程对比.png","9631ea8b10efdb41977ee88bdef218ca"],["/2019/04/24/Kubernetes-实践-基础概念总结/cloud-native-architecutre-mindnode.jpg","422c208e496762265fa96fe4856191e4"],["/2019/04/24/Kubernetes-实践-基础概念总结/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/04/24/Kubernetes-实践-基础概念总结/index.html","ebf1a614d7babad2d7c907f000af9f34"],["/2019/04/24/Kubernetes-实践-基础概念总结/k8s-cluster.png","7786145ae8681304e3be7733ff8928e2"],["/2019/04/24/Kubernetes-实践-基础概念总结/k8s核心组件.png","96186dd853749216619d2371ec17f9c6"],["/2019/04/24/Kubernetes-实践-基础概念总结/业务架构.png","04f486f1d0f750cc2e90861d23093601"],["/2019/04/24/Kubernetes-实践-基础概念总结/推拉流k8s集群.png","090a3a34282dc81a222e63fd7bc5a6cf"],["/2019/04/25/Kubernetes-Deployment/index.html","fba2726b088501b6fdeb9e78f6df19ad"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/HTTP-Ingress.png","55e736f52ab93c96943e1a23ea3066b6"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/NGINX-Ingress-Controller-4-services.png","7bf8a149c4e11a5c93ae172232ab569c"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/index.html","6d4308b2e9b195788649c2760589ee9c"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/kubernetes-ingress-controller-and-ingresses.png","c3f5fb1eae1ffc98f38c6c6e24b620ad"],["/2019/04/26/Kubernetes-部署策略/index.html","d8e297fc92a9484624ccbf7e674b5cd1"],["/2019/04/26/Kubernetes生产架构/index.html","e884112f174fb1ad7ab02cd16412d074"],["/2019/04/26/使用k8s-service对象-阿里云LoadBalancer-监听公网TCP服务/index.html","ca4e53d504fe25beb99ba22f91d32e71"],["/404.html","79be23fc15292d51b25d4ea3d22fce7b"],["/Aobut-Me/index.html","79cbde11a895b5af08bdb847ba505ffc"],["/Aobut-Me/index/about_me.html","bbe2cb615c47b20e4dee09b273ec8934"],["/archives/2018/05/index.html","6fe4b58303eb515d7a30860093d2dcf4"],["/archives/2018/06/index.html","e0b317ac521bf62feebfb8e85ee1ad92"],["/archives/2018/07/index.html","25d316616f44a1e4467bcec9392ce653"],["/archives/2018/09/index.html","3396ce844ac0f69f027e57fc6e450b00"],["/archives/2018/09/page/2/index.html","2dbfceef13bc0a0ba722b92c8be01825"],["/archives/2018/09/page/3/index.html","e7a37b488cb98cd4034b162893039d82"],["/archives/2018/10/index.html","180a1581929203058773b37ceb1cde60"],["/archives/2018/index.html","39c331b98e42355655d12decd712460c"],["/archives/2018/page/2/index.html","dd3cd31ad3da8645a2c8d7119b8e454a"],["/archives/2018/page/3/index.html","ba4d884f7fdef0c5427c543f27be384e"],["/archives/2018/page/4/index.html","e12a5756ac2b13cbf4b52b43ec59f415"],["/archives/2018/page/5/index.html","bf8cea1186ba62023e5b8fd16ca54c9f"],["/archives/2019/01/index.html","381bceb7d1ebbef37b647c408f877d7c"],["/archives/2019/02/index.html","99a1220efbca9b43142661ee4f354cbd"],["/archives/2019/04/index.html","ec2ef930f7b25b1a43aa16a3b8148245"],["/archives/2019/index.html","0f8355e99a2b74c757fb9535beb9f6e5"],["/archives/index.html","47f13443a4bd5fff4b1d883fa377bb1b"],["/archives/page/2/index.html","000bc05112c769992471a48f9b8811d1"],["/archives/page/3/index.html","1fa1ba989f7cd31bd899c30d0f142625"],["/archives/page/4/index.html","33656acc00840152fba202bb1f2ad9e1"],["/archives/page/5/index.html","25c30bdb0e55a8546942a6105802d3f0"],["/archives/page/6/index.html","cf19355c750be99aa213054a10901493"],["/categories/Books/index.html","bb67b5898b02d6e75aa6fb78573de540"],["/categories/Technology/index.html","59bf0e56184f30871962dc64e4e292d0"],["/categories/Technology/page/2/index.html","d607e8196c4632342a9c08bb3d0d5923"],["/categories/Technology/page/3/index.html","ccb4d06c8b1ca4330719fc3f102b4a70"],["/categories/Technology/page/4/index.html","271610526e3d200282c5b130edee769d"],["/categories/index-1.html","c6a7fa7e03fb1e771cd57c90ebc041df"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","13ee93cf01bf44abf5dcb02feafe9283"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","b911885c6a4227f109fe1bd73dafb6ca"],["/page/3/index.html","35d21f98ec2676f873839e68f30d926c"],["/page/4/index.html","59547439e3d724fcae628422200a9a0f"],["/page/5/index.html","274fb0a6f5bc168993b4d92fea5bc0b8"],["/page/6/index.html","4e5f35fbd921beeb53a9c9b9116c8b56"],["/sw-register.js","7c3682f1dc5661945bc12cbb65c10732"],["/tags/Books/index.html","1a5f55141940b84e1e38e5b2ba6be21f"],["/tags/Technology/index.html","281627ad0e46e5a8a5b418181bbcd7ed"],["/tags/Technology/page/2/index.html","35f347ab8372a47744052883228e9fdc"],["/tags/Technology/page/3/index.html","7d75be72b05228f70c4520d7f868adb5"],["/tags/Technology/page/4/index.html","f8c575a699960e1fdc712dd9bf490a68"],["/tags/index.html","3e37ba01b2f779b07c4c609dfcdd9778"]];
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
