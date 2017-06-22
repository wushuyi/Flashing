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

    var swiftclick = SwiftClick.attach(document.body);
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
            var $tit1 = $page.find('.tit1');
            console.log($tit1);
            // var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        color: '#BABABA',
                        transform: 'scale3d(4, 4, 4)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        color: '#FFFFFF',
                        transform: 'none'
                    }
                ],
                targets: $tit1.find('.typo').get(0),
                to: 800,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {

                setTimeout(next, 300);
            });
        },
        function page3($page, next) {
            setTimeout(next, 300);
        },
        function page4($page, next) {
            setTimeout(next, 300);
        },
        function page5($page, next) {
            var $tit1 = $page.find('.tit1');
            console.log($tit1);
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                targets: letters,
                delay: '+=100ms',
                to: 800,
                mixins: 'flipInY',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {

                setTimeout(next, 300);
            });
        },
        function page6($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                targets: $tit1.get(0),
                to: 600,
                mixins: 'lightSpeedIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {
                setTimeout(next, 300);
            });
        },
        function page7($page, next) {
            var $tit1 = $page.find('.tit1');
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                targets: letters,
                delay: '+=100ms',
                to: 800,
                mixins: 'flip',
                fill: 'none',
                easing: 'easeInBack',
            }).on('finish', function () {

                setTimeout(next, 300);
            });
        },
        function page8($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        color: '#BABABA',
                        transform: 'scale3d(2.5, 2.5, 2.5)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        color: '#FFFFFF',
                        transform: 'none'
                    }
                ],
                targets: $tit1.get(0),
                to: 800,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {

                setTimeout(next, 600);
            });
        },
        function page9($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        color: '#BABABA',
                        transform: 'scale3d(2.5, 2.5, 2.5)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        color: '#FFFFFF',
                        transform: 'none'
                    }
                ],
                targets: $tit1.get(0),
                to: 800,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {

                setTimeout(next, 600);
            });
        },
        function page10($page, next) {
            var $tit1 = $page.find('.tit1');
            $tit1.css({
                visibility: 'hidden'
            });
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                targets: letters,
                delay: '+=150ms',
                to: 800,
                mixins: 'slideInDown',
                fill: 'none',
                // easing: 'easeIn',
            }).on('finish', function () {

                setTimeout(next, 400);
            });
        },
        function page11($page, next) {

            var $tit1 = $page.find('.tit1');
            $page.css({
                backgroundColor: '#FFFFFF',
            });
            setTimeout(next, 1000);
        },
        // function page12($page, next) {
        //     setTimeout(next, 600);
        // },
        function page13($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 1,
                        color: '#FFFFFF',
                        transform: 'translateZ(0) scale3d(1, 1, 1)'
                    },
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0.5,
                        color: '#BABABA',
                        transform: 'translateZ(0) scale3d(4, 4, 4)'

                    }
                ],
                targets: $tit1.get(0),
                delay: 200,
                to: 600,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {
                setTimeout(next, 0);
            });
        },
        function page14($page, next) {

            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        transform: 'translateZ(0) scale3d(16, 16, 16)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        transform: 'translateZ(0) scale3d(4, 4, 4)'
                    }
                ],
                targets: $tit1.get(0),
                to: 500,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
        },
        function page15($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        transform: 'translateZ(0) scale3d(16, 16, 16)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        transform: 'translateZ(0) scale3d(4, 4, 4)'
                    }
                ],
                targets: $tit1.get(0),
                to: 500,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
        },
        function page16($page, next) {
            var $tit1 = $page.find('.tit1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        opacity: 0,
                        transform: 'translateZ(0) scale3d(16, 16, 16)'
                    },
                    {
                        opacity: 1
                    },
                    {
                        opacity: 1,
                        transform: 'translateZ(0) scale3d(4, 4, 4)'
                    }
                ],
                targets: $tit1.get(0),
                to: 500,
                mixins: 'zoomIn',
                fill: 'both',
                easing: 'easeInBack',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
        },
        function page17($page, next) {
            var video1 = $page.find('.video1');
            var player = new JSMpeg.Player('./assets/video/out.ts', {
                canvas: video1.get(0),
                autoplay: true,
                loop: false,
            });
            var checkEnd = function () {
                if (player.currentTime > 2.74) {
                    setTimeout(next, 0);
                    player.destroy();
                } else {
                    requestAnimationFrame(checkEnd);
                }
            };
            requestAnimationFrame(checkEnd);
        },
        function page18($page, next) {
            var $tit1 = $page.find('.img1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        backgroundPositionX: '0%',
                    },
                    {
                        backgroundPositionX: '50%',
                    },
                    {
                        backgroundPositionX: '100%',
                    }
                ],
                targets: $tit1.find('.bgimg').get(0),
                to: 2000,
                fill: 'none',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 0);
            });
        },
        function page19($page, next) {
            var $tit1 = $page.find('.img1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        backgroundPositionX: '100%',
                    },
                    {
                        backgroundPositionX: '50%',
                    },
                    {
                        backgroundPositionX: '0%',
                    }
                ],
                targets: $tit1.find('.bgimg').get(0),
                to: 2000,
                fill: 'none',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 0);
            });
        },
        function page20($page, next) {
            var $tit1 = $page.find('.img1');
            if (animation) {
                animation.cancel();
            }
            animation = just.animate({
                css: [
                    {
                        backgroundPositionX: '0%',
                    },
                    {
                        backgroundPositionX: '50%',
                    },
                    {
                        backgroundPositionX: '100%',
                    }
                ],
                targets: $tit1.find('.bgimg').get(0),
                to: 2000,
                fill: 'none',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 0);
            });
        },
        function page21($page, next) {
            rythm.stop();
        },
    ];

    var runAnimate = (function () {
        var pages = $('.page');
        var len = pages.length;
        var index = 0;
        var arr = [];
        var slice = arr.slice;

        function next() {
            if (index < len) {
                var args = $.fn.toArray(arguments).slice(1);
                // alert(JSON.stringify(args));
                pages.eq(index - 1).hide();
                pages.eq(index).show();
                pageList[index] && pageList[index].apply(null, [pages.eq(index), next]);
                index += 1;
            }
        }

        return {
            next: next
        };
    })();

    runAnimate.next();
}


// function test(index) {
//     pageList[index]($('.page').eq(index));
// }
// test(17);

