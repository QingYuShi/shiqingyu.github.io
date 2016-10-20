(function (window) {
    var document = window.document,
        docEl = document.documentElement,//docEle=html;
        psd =640,//默认设计图640
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var width = docEl.clientWidth;//可视区宽度
        if (width > psd)
        {
            width = psd;
        }
        if (window.navigator.userAgent.indexOf('MSIE')==-1)
        {
            docEl.dataset.width = width;
            docEl.dataset.percent = 100 * (width / psd);
        }
        docEl.style.fontSize = 100 * (width / psd) + 'px';
    };
    recalc();
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
})(window);
//fontSize/100=设备宽/psd图大小