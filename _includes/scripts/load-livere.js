(function (w, d, s) {
    console.log("---- script Loading ----");
    w.liveReLoading = typeof w.liveReLoading != 'undefined' ? w.liveReLoading : false;
    w.liveReThis = false;

    function loadLiveRe(event) {
        if (!w.liveReThis) {
            console.log("---- function loadLiveRe ----");
            var j, e = d.getElementsByTagName(s)[0];
            if (typeof LivereTower === 'function') { return; }
            j = d.createElement(s);
            j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
            j.async = true;

            e.parentNode.insertBefore(j, e);

            w.liveReThis = true;
            commentLoading = false;
            console.log("commentLoading -> ", commentLoading);
            
        }
    }
    if (!w.liveReLoading) {
        w.liveReLoading = true;
        if (w.addEventListener) w.addEventListener('scroll', loadLiveRe, { passive: true });
        else if (w.attachEvent) w.attachEvent('onscroll', loadLiveRe);
        else w.onscroll = loadLiveRe;
        console.log("이벤트 리스너 등록");
    }
})(window, document, 'script');
