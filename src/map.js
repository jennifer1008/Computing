export function MP(ak) {  
  return new Promise(function (resolve, reject) {  
    window.onload = function () {  
      resolve(BMap)  
    }  
    var script = document.createElement("script");  
    script.type = "text/javascript";  
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=8gwx8rXYroTosSog63GejPaRDcesogan&callback=init";  
    script.onerror = reject;  
    document.head.appendChild(script);  
  })  
}  