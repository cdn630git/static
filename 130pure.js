var url = new Array();
url.push("0909rr.com");
url.push("1010rr.com");
url.push("1212rr.com");
url.push("1515rr.com");
url.push("1717rr.com");
url.push("1818rr.com");
url.push("1919rr.com");
url.push("2121rr.com");
url.push("2323rr.com");
url.push("2424rr.com");
url.push("2525rr.com");
url.push("2727rr.com");
url.push("2929rr.com");
url.push("3232rr.com");
url.push("3636rr.com");
url.push("3939rr.com");
url.push("4646rr.com");
url.push("4848rr.com");
url.push("4949rr.com");
url.push("5050rr.com");
url.push("5757rr.com");
url.push("5959rr.com");
url.push("6161rr.com");
url.push("6464rr.com");
url.push("6565rr.com");
url.push("6969rr.com");
url.push("7070rr.com");
url.push("7676rr.com");
url.push("7979rr.com");
url.push("8383rr.com");
url.push("8484rr.com");
url.push("8686rr.com");
url.push("9292rr.com");
url.push("9393rr.com");
url.push("9494rr.com");
url.push("9696rr.com");
url.push("9797rr.com");
var from = new Date(2019, 0, 1).getTime();
var seed = 1;
var i = Math.floor((new Date().getTime() - from) * seed / 86400050);
if (i < 0 || i >= url.length) {
    i = url.length - 1 ;
}
var hhref = escape(url[i]);
