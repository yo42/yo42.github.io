/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/05/13/hello-world/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/05/28/Material-io/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/09/恶意/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/11/人间失格/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/20/JVM性能调优监控工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/21/转载-程序员技术练级攻略/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/02/关于云主机系统的初始化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/22/DevOps-And-AIOps/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/04/深入Python-流程控制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/06/python模块/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/08/python输入和输出/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/08/python错误和异常/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/09/Docker-学习笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/09/python-next-step/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/09/python面向对象编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/09/你的-Python-开发者环境/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/11/游戏服内外网穿透/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/24/DevOps最全术语汇总/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/09/24/持续集成CI-CD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/01/初尝Node-js/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/01/29/搭建k8s集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/23/简单使用Git-Hook/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/25/Kubernetes-Deployment/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/HTTP-Ingress.png","55e736f52ab93c96943e1a23ea3066b6"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/NGINX-Ingress-Controller-4-services.png","7bf8a149c4e11a5c93ae172232ab569c"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/aliyun-ingress.png","158f03ac9492daa8e334b1dab0a8bbff"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/ingress-ha.png","c1d7b62df88f926145e78aeb922e5d19"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/k8s-jiagou.png","2cbc2428abec75c0cac40d648d5a0a14"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/kubernetes-ingress-controller-and-ingresses.png","c3f5fb1eae1ffc98f38c6c6e24b620ad"],["/2019/04/26/Kubernetes-部署策略/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/26/Kubernetes生产架构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/04/26/Kubernetes生产架构/ingress-ha.png","c1d7b62df88f926145e78aeb922e5d19"],["/2019/04/26/Kubernetes生产架构/k8s-jiagou.png","2cbc2428abec75c0cac40d648d5a0a14"],["/2019/04/26/使用k8s-service对象-阿里云LoadBalancer-监听公网TCP服务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/05/05/Kubernetes-实践-基础概念总结/Docker化前后应用发布流程对比.png","9631ea8b10efdb41977ee88bdef218ca"],["/2019/05/05/Kubernetes-实践-基础概念总结/cloud-native-architecutre-mindnode.jpg","422c208e496762265fa96fe4856191e4"],["/2019/05/05/Kubernetes-实践-基础概念总结/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/05/05/Kubernetes-实践-基础概念总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2019/05/05/Kubernetes-实践-基础概念总结/k8s-cluster.png","7786145ae8681304e3be7733ff8928e2"],["/2019/05/05/Kubernetes-实践-基础概念总结/k8s核心组件.png","96186dd853749216619d2371ec17f9c6"],["/2019/05/05/Kubernetes-实践-基础概念总结/业务架构.png","04f486f1d0f750cc2e90861d23093601"],["/2019/05/05/Kubernetes-实践-基础概念总结/推拉流k8s集群.png","090a3a34282dc81a222e63fd7bc5a6cf"],["/404.html","7d97ea5611fed65c97cf660328ca55ab"],["/Aobut-Me/index.html","65efcfce5b95201cd84f4e12958af634"],["/Aobut-Me/index/about_me.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2018/05/index.html","e03b069107e5a91c3f3f3eccbf40f911"],["/archives/2018/06/index.html","6474db8b75083e20b038e5e59c85482a"],["/archives/2018/07/index.html","ce273c410670cfd95fb041cd6c67b6e7"],["/archives/2018/09/index.html","60518b72e85675348393ac6f21951f17"],["/archives/2018/09/page/2/index.html","7f9e33b0b21f0591fa1c28ccbc9ae9d6"],["/archives/2018/09/page/3/index.html","4da8273e8a76335ef0943c825d6baa1b"],["/archives/2018/10/index.html","4aa4cbfd52b7e4c465787c0b23fc4689"],["/archives/2018/index.html","8cc6111189ca0102291be14c6d4ffdb2"],["/archives/2018/page/2/index.html","2571f997184864fea54cb51725786172"],["/archives/2018/page/3/index.html","812ade443364a190196d4603d49697e2"],["/archives/2018/page/4/index.html","a9c76489556c4115d2b9c05525801719"],["/archives/2018/page/5/index.html","57d2389b948bb0ca45de7cc1c5944a49"],["/archives/2019/01/index.html","9ff7284207fe3cf739b4fef56433ec60"],["/archives/2019/02/index.html","f3b4c1af2d463c718713a169b3b9db05"],["/archives/2019/04/index.html","c12767db44b700128e1f0dc9decbb48d"],["/archives/2019/05/index.html","8ad5f96ca67625a3a84a08dc48120b59"],["/archives/2019/index.html","feb9c20d356d08376540ec374aa3fbc7"],["/archives/index.html","be3cf1f289e8fabd1b0c3201af09247e"],["/archives/page/2/index.html","ef378abf4fff4ad8255637a895c7fe4f"],["/archives/page/3/index.html","47bcc39c78528154dcc4aef131b63596"],["/archives/page/4/index.html","71885ca3896f3c2b045d57cbe1ff1566"],["/archives/page/5/index.html","8667c8411cbb457102389815d514224c"],["/archives/page/6/index.html","2ad51eb60b3bf2bc576da1a689954256"],["/categories/Books/index.html","dc8dae8583e749d2356a399a8a652d36"],["/categories/Technology/index.html","67cd9238fe1b42b40d1adef9f83663e3"],["/categories/Technology/page/2/index.html","88ed00924ed94fa641e5d6d3bfa28c1f"],["/categories/Technology/page/3/index.html","b15de0bb9c519ef59001170c3ba22abb"],["/categories/Technology/page/4/index.html","8fc85da347b1e8c725821a2ab26075b8"],["/categories/index-1.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","1c7cd8db1f7c9de5c21df9afe16bc999"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","336c0f92ed4d1a8ea8e83305271bcb72"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","c6c1dc3c406624e54066c889a2aa2dc0"],["/page/3/index.html","fd20779bf155b5727c961f3c79626557"],["/page/4/index.html","e88e21f19f9d2982f94fdb0a36c08cb2"],["/page/5/index.html","dd0ad22e2a0a63cf4dae550706597d58"],["/page/6/index.html","91225fba638b5ab96a6b7b362a26accb"],["/sw-register.js","3fa178970e303aef6bd841f771e545e2"],["/tags/Books/index.html","4571bba3c18a66b2dbf2283dac76199d"],["/tags/Technology/index.html","f24787fdade6968292d16b492da77932"],["/tags/Technology/page/2/index.html","b899d48b4291bcd609837436dfefc35c"],["/tags/Technology/page/3/index.html","946bc88789c090a0fe8f8fc7e0fafdbb"],["/tags/Technology/page/4/index.html","e87928e4ed118b1788e7f47595adbf9f"],["/tags/index.html","d2dd1e69ee130aa808ac131a0ef033d8"]];
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
