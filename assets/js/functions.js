/**
 * Created by wushuyi on 2017/6/20.
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
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, supportsPassiveOption ? {passive: false, capture: false} : false);
})();

//消除点击延迟
var swiftclick = SwiftClick.attach(document.body);

var queue = new createjs.LoadQueue();
queue.on("complete", handleComplete, this);
queue.loadManifest([
    './assets/audio/flashing_audio.mp3',
    './assets/images/dlytr.png',
    './assets/images/dlytr2.png',
    './assets/images/dlytr3.png',
    './assets/video/out.ts',
]);

function handleComplete() {
    $('.page1').find('.button1 .typo').text('点击进入');
    var sound = new Howl({
        src: ['./assets/audio/flashing_audio.mp3']
    });
    var rythm = new Rythm();
    rythm.setMusic(sound);
    rythm.addRythm('pulse2', 'pulse', 0, 10, {min: 1, max: 1.3});
// var waveLow = true;
// var waveHigh = true;
// var $num = $('#num');
// var $waveState = $('#waveState');
//
// rythm.setAnalyserCb(function (num) {
//     $num.text(num);
//     if (num === NaN) {
//         $waveState.text('wave');
//     } else if (num < 0.5 && waveHigh) {
//         waveLow = true;
//         waveHigh = false;
//         // console.log('waveLow');
//         $waveState.text('waveLow');
//         runAnimate.next();
//     } else if (num > 0.7 && waveLow) {
//         waveLow = false;
//         waveHigh = true;
//         $waveState.text('waveHigh');
//         runAnimate.next();
//         // console.log('waveHigh');
//     }
// });

    var animation = null;
    var pageList = [
        function page1($page, next) {
            $page.find('.button1').one('click', function () {
                next();
                rythm.setGain(1);
                rythm.start();
            });
        },
        function page2($page, next) {
            $page.show();
            setTimeout(next, 600);
        },
        function page3($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page4($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page5($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page6($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page7($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            animation = just.animate({
                targets: $tit1.get(0),
                css: [
                    {

                        transform: 'translateZ(0) scale3d(8, 8, 8)'
                    },
                    {
                        // opacity: 1,
                        // color: '#FFFFFF',
                        transform: 'translateZ(0) scale3d(2, 2, 2)'
                    }
                ],
                to: 300,
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page8($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            animation = just.animate({
                targets: $tit1.get(0),
                css: [
                    {

                        transform: 'translateZ(0) scale3d(8, 8, 8)'
                    },
                    {
                        // opacity: 1,
                        // color: '#FFFFFF',
                        transform: 'translateZ(0) scale3d(2, 2, 2)'
                    }
                ],
                to: 300,
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page9($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            animation = just.animate({
                targets: $tit1.get(0),
                css: [
                    {

                        transform: 'translateZ(0) scale3d(8, 8, 8)'
                    },
                    {
                        // opacity: 1,
                        // color: '#FFFFFF',
                        transform: 'translateZ(0) scale3d(2, 2, 2)'
                    }
                ],
                to: 300,
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page10($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            animation = just.animate({
                targets: $tit1.get(0),
                css: [
                    {

                        transform: 'translateZ(0) scale3d(2, 2, 2)'
                    },
                    {
                        // opacity: 1,
                        // color: '#FFFFFF',
                        transform: 'translateZ(0) scale3d(0.5, 0.5, 0.5)'
                    }
                ],
                to: 600,
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 300);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page11($page, next) {
            $page.show();
            setTimeout(next, 600);
        },
        function page12($page, next) {
            $page.show();
            setTimeout(next, 600);
        },
        function page13($page, next) {
            $page.show();
            setTimeout(next, 600);
        },
        function page14($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            animation = just.animate({
                targets: letters,
                delay: function () {
                    return '+=100ms';
                },
                to: 700,
                mixins: 'flipInX',
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                // setTimeout(next, 300);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function next($page, next) {
            $page.show();
            // setTimeout(next, 300);
        },
    ];

    var runAnimate = (function () {
        var pages = $('.page');
        var len = pages.length;
        var index = 0;
        var arr = [];
        var slice = arr.slice;

        function next(num) {
            if (num) {
                index = num;
            }
            if (index < len) {
                var args = $.fn.toArray(arguments).slice(1);
                // alert(JSON.stringify(args));
                pages.eq(index - 1).hide();
                pageList[index] && pageList[index].apply(null, [pages.eq(index), next]);
                index += 1;
            }
        }

        return {
            next: next
        };
    })();

    // runAnimate.next();

    runAnimate.next(1);


}


