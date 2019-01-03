function killErrors(){return true;}window.onerror=killErrors;
var adtoptxt="";
var adtop="";
var index1="";
var index2="";
var adfoot="";
var mail="";
var sihu="";
var footlink="";
var listad="";
var txtcommend="";
var txtgg="";
var vodhelp="";
var vodhelp1="";
var vodhelp2='<div style="color:blue;">【提示：在线播放为标清版，若对画质有要求的朋友，请选择下载高清版到本地播放】</div>';
var palyhelp="";
var playhelp="";
var adLeftCouple="";
var adRightCouple="";
var adLeftFloat="";
var adRightFloat="";
var adLeftCoupleTop=0;
var adLeftCoupleLeft=0;
var adLeftCoupleTxt="";
var adRightCoupleTop=0;
var adRightCoupleRight=0;
var adRightCoupleTxt="";
var adLeftFloatLeft=0;
var adLeftFloatBottom=0;
var adLeftFloatTxt="";
var adRightFloatRight=0;
var adRightFloatBottom=0;
var adRightFloatTxt="";
var adplayer="";
var tongji="";
var cssurl="";
var adhost=window.location.host.toLowerCase();
var btnClose = "";
var picTopAds = "";
var picFootAds = "";
var dyplayTxt = "";

var myDate = new Date();
var date1 = (myDate.getMonth()+1);
date1="0"+date1;
var day1 = myDate.getDate();
day1="0"+day1;
//取后2位
date1=date1.substring(date1.length-2,date1.length);
day1=day1.substring(day1.length-2,day1.length);

//关闭按钮，暂时未用
btnClose = '<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeFloat();" style="color:white;text-decoration:none;">×</a></div>';

function scrollx(p){
	var d = document,dd = d.documentElement,db = d.body,w = window,o = d.getElementById(p.id),ie6 = /msie 6/i.test(navigator.userAgent),style,timer;
	if(o){
		o.style.cssText +=";z-index:999;position:"+(p.ofloat&&!ie6?'fixed':'absolute')+";"+(p.oleft==undefined?'':'left:'+p.oleft+'px;')+(p.otop==undefined?'':'top:'+p.otop+'px')+(p.oright==undefined?'':'right:'+p.oright+'px;')+(p.obottom==undefined?'':'bottom:'+p.obottom+'px');
		if(p.ofloat&&ie6){
			if (p.otop!=undefined){
				o.style.cssText += ';top:expression(documentElement.scrollTop + '+p.otop+' + "px" );';
			}
			if(p.oleft!=undefined){
				o.style.cssText += ';left:expression(documentElement.scrollLeft + '+p.oleft+' + "px");';
			}
			if (p.obottom!=undefined){
				o.style.cssText += ';top:expression(documentElement.clientHeight - '+o.offsetHeight+' + documentElement.scrollTop - ' +p.obottom+' + "px" );';
			}
			if (p.oright!=undefined){
				o.style.cssText += ';left:expression(documentElement.clientWidth - '+o.offsetWidth+' + documentElement.scrollLeft - ' +p.oright+' + "px" );';
			}
			dd.style.cssText +=';background-image: url(about:blank);background-attachment:fixed;';
		}else{
			if(!p.ofloat){
				w.onresize = w.onscroll = function(){
					clearInterval(timer);
					timer = setInterval(function(){
						//双选择为了修复chrome 下xhtml解析时dd.scrollTop为 0
						var st = (dd.scrollTop||db.scrollTop),c;
						c = st - o.offsetTop + (p.otop!=undefined?p.otop:(w.innerHeight||dd.clientHeight)-o.offsetHeight);
						if(c!=0){
							o.style.top = o.offsetTop + Math.ceil(Math.abs(c)/10)*(c<0?-1:1) + 'px';
						}else{
							clearInterval(timer);
						}
					},10)
				}
			}
		}
	}
}

	adLeftCoupleTop=50;
	adLeftCoupleLeft=0;
	adLeftCoupleTxt='<a href="https://www.jse9.com/main.html?m=reg" target="_blank"><img src="https://wx1.sinaimg.cn/large/006fVPCvly1fy6hz69jtgg303m07iqbd.gif" border="0" width="150" height="350"></a>';

	adRightCoupleTop=50;
	adRightCoupleRight=0;
    adRightCoupleTxt='<a href="https://www.12hvip.com/main.html?m=reg" target="_blank"><img src="https://i.imgur.com/CuRtkjG.gif" border="0" width="150" height="350"></a>';

	adLeftFloatLeft=0;
	adLeftFloatBottom=125;
	adLeftFloatTxt='<a href="https://m.12hvip.com/main.html?m=reg" target="_blank"><img src="https://wx1.sinaimg.cn/mw690/0060lm7Tly1fti0se432zg305k064n50.gif" border="0" width="180" height="200"></a>';

	adLeftFloatpcLeft=0;
	adLeftFloatpcBottom=0;
	adLeftFloatpcTxt='<a href="https://www.13hvip.com/main.html?m=reg" target="_blank"><img src="https://wx1.sinaimg.cn/mw690/0060lm7Tly1fti0se432zg305k064n50.gif" border="0" width="180" height="200"></a>';
	
	adRightFloatRight=0;
	adRightFloatBottom=125;
    adRightFloatTxt='<a href="https://m.5ymt.com/main.html?m=reg" target="_blank"><img src="https://wx1.sinaimg.cn/mw690/0060lm7Tly1fti0e4pwu7g305k064whw.gif" border="0" width="180" height="200"></a>';

	adRightFloatpcRight=0;
	adRightFloatpcBottom=0;
    adRightFloatpcTxt='<a href="https://www.62pe.com/main.html?m=reg" target="_blank"><img src="https://wx1.sinaimg.cn/mw690/0060lm7Tly1fti0e4pwu7g305k064whw.gif" border="0" width="180" height="200"></a>';


	//以下代码请勿修改
	//ipad|
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iphone/i)){
	var x = Math.random();
	if (x <= 0.2)
    {
	index1=index1+"<A href=\"https://m.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	index1=index1+"<A href=\"https://m.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
    index1=index1+"<A href=\"https://m.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
    index1=index1+"<A href=\"https://m.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
	
    index2=index2+"<div class=\"index2\"><div class='index3'>";
	index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<\/div></div>";
	}
	if (x >0.2 && x <=0.4)
    {
	index1=index1+"<A href=\"https://m.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	index1=index1+"<A href=\"https://m.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
    index1=index1+"<A href=\"https://m.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
    index1=index1+"<A href=\"https://m.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
	
    index2=index2+"<div class=\"index2\"><div class='index3'>";
	index2=index2+"<A href=\"https://m.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<\/div></div>";
	}
	if (x >0.4 && x <=0.6)
    {
	index1=index1+"<A href=\"https://m.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
    index1=index1+"<A href=\"https://m.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
    index1=index1+"<A href=\"https://m.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
	
    index2=index2+"<div class=\"index2\"><div class='index3'>";
	index2=index2+"<A href=\"https://m.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<\/div></div>";
	}
	if (x >0.6 && x <=0.8)
    {
	index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
    index1=index1+"<A href=\"https://m.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
    index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
	
    index2=index2+"<div class=\"index2\"><div class='index3'>";
	index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<\/div></div>";
	}
	if (x >0.8 && x <=2)
    {
	index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	index1=index1+"<A href=\"https://m.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
    index1=index1+"<A href=\"https://m.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
    index1=index1+"<A href=\"https://m.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	index1=index1+"<A href=\"https://m.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
    index1=index1+"<A href=\"https://m.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
	
    index2=index2+"<div class=\"index2\"><div class='index3'>";
	index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<A href=\"https://m.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	index2=index2+"<A href=\"https://m.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
    index2=index2+"<\/div></div>";
	}

		if (adLeftFloatTxt!=""){
			adLeftFloat+='<div id="leftFloat" style="position:absolute;bottom:'+adLeftFloatBottom+'px;left:'+adLeftFloatLeft+'px;">'+adLeftFloatTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adLeftFloat);
			scrollx({id:'leftFloat',oleft:adLeftFloatLeft,obottom:adLeftFloatBottom,ofloat:1})
		}
		if (adRightFloatTxt!=""){
			adRightFloat+='<div id="rightFloat" style="position:absolute;bottom:'+adRightFloatBottom+'px;right:'+adRightFloatRight+'px;">'+adRightFloatTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adRightFloat);
			scrollx({id:'rightFloat',oright:adRightFloatRight,obottom:adRightFloatBottom,ofloat:1})
		}
	}else{
	   var y = Math.random();
	   if (y <= 0.2)
	   {
	   index1=index1+"<A href=\"https://www.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
       index1=index1+"<A href=\"https://www.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
       index1=index1+"<A href=\"https://www.53cu.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
 
	  index2=index2+"<div class=\"index2\"><div class='index3'>";
	  index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.8hkh.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jsi3.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<\/div></div>";
	   }
	   if (y >0.2 && y <=0.4)
	   {
	   index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
       index1=index1+"<A href=\"https://www.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
       index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
		
	   index2=index2+"<div class=\"index2\"><div class='index3'>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.18hgg.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jse9.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<\/div></div>";
	   }
	   if (y >0.4 && y <=0.6)
	   {
	   index1=index1+"<A href=\"https://www.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
       index1=index1+"<A href=\"https://www.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
       index1=index1+"<A href=\"https://www.5cvcv.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
		
	   index2=index2+"<div class=\"index2\"><div class='index3'>";
	  index2=index2+"<A href=\"https://www.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.13hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<\/div></div>";
	   }
	   if (y >0.6 && y <=0.8)
	   {
	   index1=index1+"<A href=\"https://www.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
       index1=index1+"<A href=\"https://www.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
       index1=index1+"<A href=\"https://www.5ymt.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
		
	   index2=index2+"<div class=\"index2\"><div class='index3'>";
	  index2=index2+"<A href=\"https://www.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.8hha.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jsf7.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<\/div></div>";
	   }
	   if (y >0.8 && y <=2)
	   {
	   index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwphv11uwg30r803wte8.gif\" width=\"960\" height=\"137\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrb0nlvqg30qo01o77i.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthr9qk180g30qo01oadv.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fthrmzhh1kj30qo01o0tr.jpg\" width=\"960\" height=\"55\"><\/A>";
       index1=index1+"<A href=\"https://www.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthrp4z617j30qo01ojs8.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/large/006fVPCvly1fthrpv4j1dj30qo01nq3y.jpg\" width=\"960\" height=\"55\"><\/A>";
	   index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/006fVPCvly1fthqphtdtxg30qo01oq42.gif\" width=\"960\" height=\"70\"><\/A>";
       index1=index1+"<A href=\"https://www.62pe.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx2.sinaimg.cn/large/006fVPCvly1fthqvqnts8g30qo01o755.gif\" width=\"960\" height=\"70\"><\/A>";
	   index1=index1+"<A href=\"https://www.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwrlidrixg30xc05kwjq.gif\" width=\"960\" height=\"160\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
       index1=index1+"<A href=\"https://www.zy155.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx1.sinaimg.cn/large/0060lm7Tly1ftwr0vc5osg30qo028aeo.gif\" width=\"960\" height=\"80\"><\/A>";
		
	   index2=index2+"<div class=\"index2\"><div class='index3'>";
	  index2=index2+"<A href=\"https://www.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.12hvip.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://ae01.alicdn.com/kf/HTB1AoMbaovrK1RjSszf5jXJNVXas.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<A href=\"https://www.46ts.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6imiwmhpg30qo01o0va.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
	  index2=index2+"<A href=\"https://www.jse4.com/main.html?m=reg\" target=\"_blank\"><img border=\"0\" src=\"https://wx4.sinaimg.cn/large/006fVPCvly1fy6hwzkchbg30qo01ydnv.gif\" width=\"960\" height=\"70\"><\/A>";
      index2=index2+"<\/div></div>";
	   }
		if (adLeftCoupleTxt!=""){
            adLeftCouple+='<div id="leftCouple" style="position:absolute;top:'+adLeftCoupleTop+'px;left:'+adLeftCoupleLeft+'px;">'+adLeftCoupleTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adLeftCouple);
            scrollx({id:'leftCouple',otop:adLeftCoupleTop,oleft:adLeftCoupleLeft,ofloat:1})
        }
        if (adRightCoupleTxt!=""){
            adRightCouple+='<div id="rightCouple" style="position:absolute;top:'+adRightCoupleTop+'px;right:'+adRightCoupleRight+'px;">'+adRightCoupleTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adRightCouple);
            scrollx({id:'rightCouple',otop:adRightCoupleTop,oright:adRightCoupleRight,ofloat:1})
        }
        if (adLeftFloatpcTxt!=""){
            adLeftFloat+='<div id="leftFloat" style="position:absolute;bottom:'+adLeftFloatpcBottom+'px;left:'+adLeftFloatpcLeft+'px;">'+adLeftFloatpcTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adLeftFloat);
            scrollx({id:'leftFloat',oleft:adLeftFloatpcLeft,obottom:adLeftFloatpcBottom,ofloat:1})
        }
        if (adRightFloatpcTxt!=""){
            adRightFloat+='<div id="rightFloat" style="position:absolute;bottom:'+adRightFloatpcBottom+'px;right:'+adRightFloatpcRight+'px;">'+adRightFloatpcTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
            document.writeln(adRightFloat);
            scrollx({id:'rightFloat',oright:adRightFloatpcRight,obottom:adRightFloatpcBottom,ofloat:1})
        }
	}

	txtcommend='<a href="/help/vod.html" target="_blank"><font color="#FF0000">该视频侵权删除，播放报错点击这里！</font></a>';
	//mail
	//mail=mail+'@gmail.com';

	//內容頁播放文字
	vodhelp=vodhelp+'<a href="/help/m-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">【手机播放教程】</span></a><a href="/help/pc-play.html" target="_blank"><span style="color:#ff0000;line-height:1.5;font-size:16px;">【电脑播放教程】</span></a> <a href="/help/weixin.html" target="_blank"><span style="color:#ff0000;font-weight:bold;line-height:1.5;font-size:16px;">【永久地址获取方法】</span></a>';
	//vodhelp1=vodhelp1+'html代码'';
	//播放頁文字
    playhelp='<span class="playerTip"><a style="background: #d5210f;color:#fff;" href="https://www.5cvcv.com/main.html?m=reg" target="_blank" >新用户注册送68元，首存最高送3888元!!<font style="background: #d5210f;color:#FFFF00;font-size:35px">  点击进入!!</font></a></span>';
	palyhelp='<span class="playerTip"><a style="color:#fff;"href="/help/index.html" target="_blank" class="white">建议使用谷歌或苹果自带浏览,若无法播放请点击查看帮助教程!</a></span>';
//aaa
	if(navigator.userAgent.match(/Android/i)) {
		txtcommend=txtcommend+'<font color="#FF0000"><strong>.</strong></font>';
	}


function errimg(obj,image) {
	obj.src = image;
	obj.onerror = null;
}

var hostname;
var hostname2;
var hostnametxt;
var hostnamelogo;
var lf=window.location.host.toLowerCase().split(".");
hostname2=sbc2dbc(window.location.host.toUpperCase());
if (lf.length>1){
	hostname=lf[lf.length-2] + "." + lf[lf.length-1]
	//hostnametxt="www." + hostname.substring(0,3) + hostname.substring(3,hostname.length);
	hostnametxt=lf[lf.length-2];
	hostnamelogo=hostnametxt+"<span style='font-size:24px;color:#881313'>."+lf[lf.length-1]+"</font>";
	document.title=document.title+hostname2;
	if (document.getElementById("WebUrl")){
		document.getElementById("WebUrl").innerHTML=hostname2;
	}
}
window.status=hostname2;
