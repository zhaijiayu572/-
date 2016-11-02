function scroll(Content, Btn) {         //传入内容和滚动按钮的DOM对象
    var oScroll = Btn.parentNode;
    var oContainer = Content.parentNode;
    var iContentHeight = Content.offsetHeight;
    var iContainerHeight = oContainer.offsetHeight;
    oContainer.style.overflow = "hidden";
    oContainer.style.position = "relative";
    Content.style.position = "relative";
    oScroll.style.display = "none";
    oScroll.style.position = "relative";
    Btn.style.position = "relative";
    Btn.style.cursor = "pointer";
    if (iContainerHeight < iContentHeight) {      //判断滚动条是否出现
        oScroll.style.display = "block";
    }
    Btn.onmousedown = function (e) {
        var iBtnMax = oScroll.offsetHeight - Btn.offsetHeight;
        var iContentMax = iContentHeight - iContainerHeight;
        var fRate = iContentMax/iBtnMax;
        e = e || window.event;
        var iDisY = e.clientY - Btn.offsetTop;
        document.onmousemove = function (e) {
            e = e || window.event;
            var iY = e.clientY - iDisY;
            if(iY < 0){
                iY = 0;
            }
            if(iY > iBtnMax){
                iY = iBtnMax;
            }
            Btn.style.top = iY + 'px';
            Content.style.top = -fRate*iY + 'px';
            console.log(Btn.style.top);
            return false;
        }
    };
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}