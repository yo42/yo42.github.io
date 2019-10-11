/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/05/13/Movie/index.html","de8a35a147f6fb9aaa326bb0aad437c7"],["/2018/05/13/hello-world/index.html","6fc5e993e5544cbd38894d414931267a"],["/2018/05/27/关于Docker-Build-目录与GIT库共存的一些技巧/index.html","e94585471b1013bbc99c94734e92bcf4"],["/2018/05/28/Material-io/index.html","08262a7860b49788cf3a4c4447a07e44"],["/2018/06/09/恶意/index.html","e48b1e9c88f3a8dfaef6da11128d71e7"],["/2018/06/11/人间失格/index.html","010a64aa2dbbe616c37c16a424970111"],["/2018/06/11/人间失格/太宰治.jpg","6a341fe59777e90624d66001f28367d7"],["/2018/06/11/爱你就像爱生命/index.html","6b1b8981d9e6e4abb5c8bfa46a3b1185"],["/2018/06/20/JVM性能调优监控工具/index.html","313b8660bb8b22624605079ff6f175ce"],["/2018/06/21/转载-每个程序员都该知道的事/index.html","a688dddf1a71c16d8e59a3a85091c82b"],["/2018/06/21/转载-程序员技术练级攻略/index.html","a44648e3fc6070df7e7ad6d62f298aee"],["/2018/06/23/JumpServer-运维安全审计系统/index.html","a7aa268c497e82adf8284c42da931b86"],["/2018/06/23/JumpServer-运维安全审计系统/jms.png","f9595cf5c17c98b72559c466c1a33623"],["/2018/06/23/JumpServer-运维安全审计系统/jms2.png","d0f38007064d76dd5145794b6f9b0419"],["/2018/06/25/许三观卖血记/index.html","43896c2a6416ee03846f2358fcfbb560"],["/2018/07/02/关于云主机系统的初始化/index.html","92a4084a2c847135628d728b5a8e5b57"],["/2018/07/22/DevOps-And-AIOps/index.html","9458606b48c8fa3f5a421f3deb95bbcb"],["/2018/07/22/从容器到容器云/Docker.png","875386cdf346e2aeec461aab328d3057"],["/2018/07/22/从容器到容器云/index.html","730a9d7832843c70f55209b4ef7e5a82"],["/2018/07/22/从容器到容器云/云平台_simple.png","2a2d607bd512794f5192218bd233536c"],["/2018/07/22/深夜的口琴声/index.html","11a9e7d30955b1425964fcc141fce41a"],["/2018/07/22/深夜的口琴声/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/2018/07/22/深夜的口琴声/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/2018/09/02/Python-NoteBook/index.html","fbfb31aa4008a6c77783a3faacbd14c5"],["/2018/09/04/深入Python-流程控制/index.html","9d5ae99a60ff357feea80f94503c264f"],["/2018/09/06/python模块/index.html","3328a06511e53626e9fcfec4dc104f57"],["/2018/09/08/python输入和输出/index.html","a1fffc1328037fb3a6846af4fc44e23b"],["/2018/09/08/python错误和异常/index.html","2eb254310c4791b34c20097aab02bfd7"],["/2018/09/09/Docker-学习笔记/index.html","06dc75bb7287666c12d88ed1e7456618"],["/2018/09/09/python-next-step/index.html","63928641b12cf0e2716e3efe5c746022"],["/2018/09/09/python-底层虚拟环境-virtualenv/index.html","3091407fe8f6a2553c4a0e3b80c7c1b9"],["/2018/09/09/python面向对象编程/index.html","24039c33085f20e8f3e608f6867ec015"],["/2018/09/09/你的-Python-开发者环境/index.html","b68e95e626446d2f5adaf7c9550e24ce"],["/2018/09/11/Docker-远程API调用启用TLS加密/index.html","65fa08092e6bbe5f9cf156a1ba6c6301"],["/2018/09/11/游戏服内外网穿透/index.html","3e0a703095955307733bc5282186bb26"],["/2018/09/11/游戏服内外网穿透/内外网穿透.png","ec8753d8746827ab3ea78646b8526797"],["/2018/09/11/游戏服内外网穿透/内外网穿透2.png","0e4b121fc3c6e4a2d62ca994f3300f24"],["/2018/09/11/部署postgresql/index.html","d7580c8fbe272f173a769cefd390bdb0"],["/2018/09/15/Docker-Harbor镜像仓库/index.html","b7436e48d68a16495f2c9bca3a43e744"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-优雅的包管理/index.html","15e7908f1761abc6bdfc4a302cbeaf1e"],["/2018/09/15/Hitchhiker-s-Guide-to-Python-学习资料-社区资讯/index.html","1b85e8377b881d56b88a4d880af25b3a"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Code-Style/index.html","29a4a3493fc8eef7b7b1ae53f62d9f54"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-Reading-Great-Code/index.html","a6917f88423156c90413598ac3e9d32f"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码测试/index.html","c400da21cf1fa2cc1fc512a94ccf19e9"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-代码结构/index.html","ecb3e3236ea23fc9d72be0210c229648"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-关于项目License/index.html","1310567e8b095c604e7200fe99e3eed8"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-常见陷阱/index.html","603eae14bd98c2593307f469f15ef336"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-日志记录/index.html","eefac81c4b27dd7bb99ad5d04b18b64f"],["/2018/09/15/Hitchhiker’s-Guide-to-Python-项目文档/index.html","f36d7d3415b148ec0f62e2f571c24832"],["/2018/09/16/关于Gitolite-SSH-Config联动/index.html","94ab12d19c4af3e3a3c0f831b749f78a"],["/2018/09/16/关于Gitolite-SSH-Config联动/ssh.png","63e98a51e8e7f105084acb61ee83cc38"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client.png","b73cfbadda034549354ed0a38287fdaf"],["/2018/09/16/关于游戏客户端资源热更方式-流程/client2.png","db5482a44e90dd3a6a5ecc939a29fc77"],["/2018/09/16/关于游戏客户端资源热更方式-流程/index.html","eff41ba20ac8b68e8dd6b7f70ceb497e"],["/2018/09/24/DevOps最全术语汇总/index.html","1792283bde1f89195598de9a1967892d"],["/2018/09/24/持续集成CI-CD/index.html","c35a831efe31921d68f528bd241704c9"],["/2018/10/01/初尝Node-js/index.html","a29825af7a8c24e4755e065c9f3ae0a7"],["/2018/10/28/DevOps-SRE-必备技能清单/index.html","1493fc13365c30f505f5feae295a3eef"],["/2019/01/29/搭建k8s集群/index.html","3ece3890a51d022dd72a1656b93e88c6"],["/2019/02/14/使用kubeasz搭建K8s集群/index.html","ce704e44a43596564328e65b0b57ef9e"],["/2019/04/23/简单使用Git-Hook/index.html","b684556a6419a25fa3eed0caa2bed880"],["/2019/04/25/Kubernetes-Deployment/index.html","3837da46a74e0b46488eed0b08513132"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/HTTP-Ingress.png","55e736f52ab93c96943e1a23ea3066b6"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/NGINX-Ingress-Controller-4-services.png","7bf8a149c4e11a5c93ae172232ab569c"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/aliyun-ingress.png","158f03ac9492daa8e334b1dab0a8bbff"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/index.html","0909d56d30bc45bc1725112d59b4da3d"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/ingress-ha.png","c1d7b62df88f926145e78aeb922e5d19"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/k8s-jiagou.png","2cbc2428abec75c0cac40d648d5a0a14"],["/2019/04/25/Kubernetes-服务暴露-负载均衡/kubernetes-ingress-controller-and-ingresses.png","c3f5fb1eae1ffc98f38c6c6e24b620ad"],["/2019/04/26/Kubernetes-部署策略/index.html","2ff3866ef4d8345c5e55eac3f79ad5fb"],["/2019/04/26/Kubernetes生产架构/index.html","1c3c0a99f39b0b14dea11ae93ad71648"],["/2019/04/26/Kubernetes生产架构/ingress-ha.png","c1d7b62df88f926145e78aeb922e5d19"],["/2019/04/26/Kubernetes生产架构/k8s-jiagou.png","2cbc2428abec75c0cac40d648d5a0a14"],["/2019/04/26/使用k8s-service对象-阿里云LoadBalancer-监听公网TCP服务/index.html","777d41316090d4bce16e99178bd80466"],["/2019/05/05/Kubernetes-实践-基础概念总结/Docker化前后应用发布流程对比.png","9631ea8b10efdb41977ee88bdef218ca"],["/2019/05/05/Kubernetes-实践-基础概念总结/cloud-native-architecutre-mindnode.jpg","422c208e496762265fa96fe4856191e4"],["/2019/05/05/Kubernetes-实践-基础概念总结/edu后端架构交互时序图.png","bb0c5296dfd7d49e4973110c6d621ad1"],["/2019/05/05/Kubernetes-实践-基础概念总结/index.html","0bd1e7be0b24f340ef27c2a8635dd252"],["/2019/05/05/Kubernetes-实践-基础概念总结/k8s-cluster.png","7786145ae8681304e3be7733ff8928e2"],["/2019/05/05/Kubernetes-实践-基础概念总结/k8s核心组件.png","96186dd853749216619d2371ec17f9c6"],["/2019/05/05/Kubernetes-实践-基础概念总结/业务架构.png","04f486f1d0f750cc2e90861d23093601"],["/2019/05/05/Kubernetes-实践-基础概念总结/推拉流k8s集群.png","090a3a34282dc81a222e63fd7bc5a6cf"],["/404.html","736a646036dcc5df7c37bf7ae2ea2d22"],["/Aobut-Me/index.html","e0306392bb92877961996759f27bc95b"],["/Aobut-Me/index/about_me.html","1fe1a15263270cc4040791c16589c291"],["/archives/2018/05/index.html","c6cb16630915f921a7cc77fdad5d1ce4"],["/archives/2018/06/index.html","3ae9e88bb288276b5b6e1f18ca26693d"],["/archives/2018/07/index.html","01cae3514e023332929335f005f629cf"],["/archives/2018/09/index.html","77786c1fdfcc0be94bcb6feb3529ba1e"],["/archives/2018/09/page/2/index.html","972d981845cb6346f8d671436d0da5f7"],["/archives/2018/09/page/3/index.html","4b5b532fe61850a7302c770c97e07798"],["/archives/2018/10/index.html","306d12d7f19c71d664ee2846f25ffb70"],["/archives/2018/index.html","7029eb356b5602a2562c75841d041808"],["/archives/2018/page/2/index.html","35b3fb3ca471497583e19ddd08c3894c"],["/archives/2018/page/3/index.html","bb0af95d1409dc07ff45e11b185efa1f"],["/archives/2018/page/4/index.html","9008a3f18734baa66512d4869b5f54a2"],["/archives/2018/page/5/index.html","b06064747a9b24745803724a35891bc7"],["/archives/2019/01/index.html","64fcb96502afac8b95b7c6ff7d9834e6"],["/archives/2019/02/index.html","efbc4435b46953654e9705a6df871623"],["/archives/2019/04/index.html","91178c859d8a10025b723f0ed70acace"],["/archives/2019/05/index.html","b8bca42e25229506b963070780706acc"],["/archives/2019/index.html","0dc5033bd9b655706b5e8d04af2e7622"],["/archives/index.html","44b83bb5744a7edfef3083f519425645"],["/archives/page/2/index.html","805da02d507e7ce361022a0bb886ee70"],["/archives/page/3/index.html","7ebb10a601721942e2d3b48c642f912d"],["/archives/page/4/index.html","ea21bf36697956c01ec11ade97b47550"],["/archives/page/5/index.html","82989d14be4c86e476915d7e36fe3baf"],["/archives/page/6/index.html","265c1de5abc36732a40cbf52054d742d"],["/categories/Books/index.html","1aae13632fd207b98e64827bcebeb5b1"],["/categories/Technology/index.html","df37aabd1473cf3313fe57588f077ebe"],["/categories/Technology/page/2/index.html","16e4bea4b7deaccc97e9e3426452fbcf"],["/categories/Technology/page/3/index.html","d640eb324d9f58018fb2a557ae46b256"],["/categories/Technology/page/4/index.html","17383c2e20c3f40e1a60a7816fb61707"],["/categories/index-1.html","836ff60acfe2da1623f94caeabc9a825"],["/css/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["/css/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["/css/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["/css/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["/css/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["/css/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["/css/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["/css/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["/css/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["/css/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["/css/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["/css/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["/css/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["/css/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["/css/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["/css/style.css","26ab31cccf9d16c598eadf65f82c082d"],["/favicon.png","4f3f5ddc770accacfda3ae429eb3dc95"],["/img/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/avatar.jpg","e1ce27aa4ac9319fd17cd0474126ef52"],["/img/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["/img/cc.png","40e8d4f2367ed503ec760572d78852de"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/yo.jpg","ec3256466d7504dd406d6134ae3c9e87"],["/index.html","1cb7da01203f70a3437d8c34d094eba3"],["/js/main.js","fc81c3ac91af03539453593760b962f8"],["/js/main.min.js","16e1c538d05e771ab2761439aeebf68d"],["/js/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["/js/search.min.js","f901db6e7faecf102f487d3920540531"],["/kelang1.jpg","aada326a4a6080439bc38b97fc9da563"],["/kelang2.jpg","02b7d0678ddb9b5e59cdf4d0a6c93871"],["/page/2/index.html","d244ca90962af8b155bed5ca9d6ff96a"],["/page/3/index.html","517249ba5393199a98e4106bfffc4a9c"],["/page/4/index.html","7c51cd00c32d2f9dda2b8c05d40d9e13"],["/page/5/index.html","5ac7a71fce0e559be4badc86c7e87f99"],["/page/6/index.html","517c5bb64d5dc221aae5201532abb77e"],["/sw-register.js","a3d23d7a5985714da1840b5266ddd2fb"],["/tags/Books/index.html","7cee5d8e46dc9f5ba89ead637aab141e"],["/tags/Technology/index.html","3b3b4368ebe67ddccbb0898729493191"],["/tags/Technology/page/2/index.html","62416a0d2ec9f750bd9640dc3c4feb2d"],["/tags/Technology/page/3/index.html","0828b1cde23eaa84546d512dda0f70cb"],["/tags/Technology/page/4/index.html","d3d5fccc686e25c8b799b2915a5f4254"],["/tags/index.html","18c681e942fcdec690ea7377303dac0c"]];
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
