/**
 * Created by wushuyi on 2017/6/22.
 */
// ios 10 禁止缩放
(function () {
    var supportsPassiveOption = false;
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassiveOption = true;
            }
        });
        window.addEventListener('test', null, opts);
    } catch (e) {
    }

    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, supportsPassiveOption ? {passive: false, capture: true} : true);
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, supportsPassiveOption ? {passive: false, capture: true} : true);
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, supportsPassiveOption ? {passive: false, capture: false} : false);
})();