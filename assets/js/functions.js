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
//
(function (JSMpeg) {
    var pause = JSMpeg.Player.prototype.pause;
    JSMpeg.Player.prototype.pause = function () {
        pause.call(this);
        if (this.onpause) {
            setTimeout(this.onpause, 0);
        }
    };
})(JSMpeg);

//消除点击延迟
var swiftclick = SwiftClick.attach(document.body);

var queue = new createjs.LoadQueue();
queue.on("complete", handleComplete, this);
queue.loadManifest([
    './assets/audio/flashing_audio.mp3',
    './assets/video/video.mp4',
]);

function handleComplete() {
    $('.page1').find('.button1 .typo').text('点击进入');
    var sound = new Howl({
        src: ['./assets/audio/flashing_audio.mp3'],
        loop: true,
    });
    // sound.play();
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
                mixins: 'flipInX',
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 10);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page15($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page16($page, next) {
            $page.show();
            var $tit1 = $page.find('.tit1');
            var $tit2 = $page.find('.tit2');
            var $tit3 = $page.find('.tit3');
            var $tit4 = $page.find('.tit4');
            $tit1.hide();
            $tit2.hide();
            $tit3.hide();
            $tit4.hide();
            var preanimation = animation;
            var allCss = [
                {
                    transform: 'translate3d(' + (-$(window).height() / 2) + 'px, 0, 0)',
                    visibility: 'hidden'
                },
                {
                    transform: 'translate3d(0, 0, 0)',
                    visibility: 'visible'
                }
            ];

            var createAnimate = function ($el, css, cb) {
                animation = just.animate({
                    targets: $el.get(0),
                    css: css,
                    mixins: 'slideInLeft',
                    delay: function () {
                        setTimeout(function () {
                            $el.show();
                        }, 10);
                        return 0;
                    },
                    to: 200,
                    fill: 'both',
                    easing: 'easeIn',
                }).animate({
                    targets: $el.get(0),
                    mixins: 'fadeOut',
                    delay: 200,
                    to: 100,
                    fill: 'both',
                    easing: 'easeOut',
                }).on('finish', function (ctx) {
                    cb();
                });
            };

            createAnimate($tit1, allCss, function () {
                createAnimate($tit2, allCss, function () {
                    createAnimate($tit3, allCss, function () {
                        createAnimate($tit4, allCss, function () {
                            next();
                        });
                    });
                });
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page17($page, next) {
            var $img1 = $page.find('.img1');
            console.log($img1);
            var preanimation = animation;
            animation = just.animate({
                targets: $img1.get(0),
                css: [
                    {

                        transform: 'translateZ(0) scale3d(1, 1, 1)'
                    },
                    {
                        transform: 'translateZ(0) scale3d(1.1, 1.1, 1.1)'
                    }
                ],
                fill: 'both',
                easing: 'linear',
                to: 1000,
            }).on('finish', function () {
                setTimeout(next, 10);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page18($page, next) {
            $page.show();
            setTimeout(next, 200);
        },
        function page19($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page20($page, next) {
            $page.show();
            setTimeout(next, 200);
        },
        function page21($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page22($page, next) {
            var $img1 = $page.find('.img1');
            var $img2 = $page.find('.img2');
            var $img3 = $page.find('.img3');
            var preanimation = animation;
            var createAnimate = function ($el, cb, notOut) {
                animation = just.animate({
                    targets: $el.get(0),
                    css: [
                        {
                            transform: 'translateZ(0) scale3d(1, 1, 1)'
                        },
                        {
                            transform: 'translateZ(0) scale3d(1.1, 1.1, 1.1)'
                        },
                    ],
                    fill: 'both',
                    easing: 'linear',
                    to: 800,
                });
                if (!notOut) {
                    animation.animate({
                        targets: $el.get(0),
                        mixins: 'fadeOut',
                        fill: 'both',
                        easing: 'linear',
                        to: 300,
                    }).on('finish', function () {
                        cb();
                    });
                } else {
                    cb();
                }
            };
            createAnimate($img3, function () {
                createAnimate($img2, function () {
                    createAnimate($img1, function () {
                        setTimeout(next, 100);
                    }, true);
                });
            });

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page23($page, next) {
            $page.show();
            setTimeout(next, 1000);
        },
        function page24($page, next) {
            $page.show();
            var parentNext = next;
            var player = null;
            var playerList = [
                function start(canvas, next) {
                    // sound.pause();
                    setTimeout(next, 0);
                },
                function video1(canvas, next) {
                    player = new JSMpeg.Player('./assets/video/video.mp4', {
                        canvas: canvas,
                        autoplay: true,
                        loop: false,
                    });
                    player.onpause = function () {
                        next();
                    };
                },
                function end(canvas, next) {
                    player.destroy();
                    player = null;
                    setTimeout(parentNext, 0);
                }
            ];
            var players = (function ($page) {
                var canvas = $page.find('.video1 canvas').get(0);
                var len = playerList.length;
                var index = 0;
                var arr = [];
                var slice = arr.slice;

                function next(num) {
                    if (num) {
                        index = num;
                    }
                    if (index < len) {
                        var args = $.fn.toArray(arguments).slice(1);
                        playerList[index] && playerList[index].apply(null, [canvas, next]);
                        index += 1;
                    }
                }

                return {
                    next: next
                };
            })($page);
            players.next();
            // setTimeout(next, 300);
        },
        function page25($page, next) {
            var $img1 = $page.find('.img1');
            var $img2 = $page.find('.img2');
            var $img3 = $page.find('.img3');
            $img1.hide();
            $img2.hide();
            $img3.hide();
            var winW = $(window).width();
            var css1 = [
                {
                    transform: 'translate3d(' + winW + 'px, 0, 0)'
                },
                {
                    transform: 'translate3d(0, 0, 0)'
                },
            ];
            var css2 = [
                {
                    transform: 'translate3d(' + -winW + 'px, 0, 0)'
                },
                {
                    transform: 'translate3d(0, 0, 0)'
                },
            ];
            var preanimation = animation;
            var createAnimate = function ($el, css, cb) {
                animation = just.animate({
                    targets: $el.get(0),
                    css: css,
                    fill: 'both',
                    easing: 'easeOutCubic',
                    to: 600,
                }).on('finish', function () {
                    cb && cb();
                });
                $el.show();
            };
            createAnimate($img1, css1);
            createAnimate($img2, css2);
            createAnimate($img3, css1, function () {
                setTimeout(next, 300);
            });

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page26($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page27($page, next) {
            $page.show();
            setTimeout(next, 1000);
        },
        function page28($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            animation = just.animate({
                targets: letters,
                delay: function () {
                    return '+=100ms';
                },
                mixins: 'flipInX',
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 10);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);

        },
        function page29($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page30($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page31($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            animation = just.animate({
                targets: letters,
                delay: function () {
                    return '+=80ms';
                },
                mixins: 'zoomInDown',
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
        function page32($page, next) {
            var $tit1 = $page.find('.tit1');
            var preanimation = animation;
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            animation = just.animate({
                targets: letters,
                css: [
                    {
                        transform: 'scale3d(1, 1, 1)',
                        color: '#FFFFFF',
                    },
                    {
                        transform: 'scale3d(0.8, 0.8, 0.8)',
                        color: '#FD0201',
                    },
                    {
                        transform: 'scale3d(1.2, 1.2, 1.2)',
                        color: '#6F08BB',
                    },
                    {
                        transform: 'scale3d(0.8, 0.8, 0.8)',
                        color: '#EDC703',
                    },
                    {
                        transform: 'scale3d(1.2, 1.2, 1.2)',
                        color: '#01A517',
                    },
                    {
                        transform: 'scale3d(0.8, 0.8, 0.8)',
                        color: '#052CC7',
                    },
                    {
                        transform: 'scale3d(1.2, 1.2, 1.2)',
                        color: '#04AA1C',
                    },
                    {
                        transform: 'scale3d(1, 1, 1)',
                        color: '#FFFFFF',
                    },
                ],
                delay: function () {
                    return '+=250ms';
                },
                to: 750,
                fill: 'both',
                easing: 'easeIn',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page33($page, next) {
            var $imgContent = $page.find('.img-content');
            var html = '';
            for (var i = 1; i <= 15; i++) {
                html += '<div class="img-box"><div class="img" style="background-image: url(./assets/images/work/work' + i + '.png);"></div></div>';
            }
            $imgContent.append(html);
            var $imgBox = $imgContent.find('.img-box');
            var winW = $(window).width();
            var winH = $(window).height();
            $imgBox.css({
                transform: 'translate3d(' + -138 * hotcss.dpr + 'px, 0, 0)'
            });
            var preanimation = animation;
            animation = just.animate({
                targets: $imgBox.toArray(),
                css: [
                    {
                        transform: 'translate3d(' + -138 * hotcss.dpr + 'px, 0, 0)',
                    },
                    {
                        transform: 'translate3d(' + (winW - 138 * hotcss.dpr) + 'px, 0, 0)',
                    },
                    {
                        transform: 'translate3d(' + (winW - 138 * hotcss.dpr) + 'px, ' + (winH - 90 * hotcss.dpr) + 'px, 0)',
                    },
                    {
                        transform: 'translate3d(' + (0) + 'px, ' + (winH - 90 * hotcss.dpr) + 'px, 0)',
                    },
                    {
                        transform: 'translate3d(' + (0) + 'px, ' + (-90 * hotcss.dpr) + 'px, 0)',
                    }
                ],
                delay: function () {
                    return '+=400ms';
                },
                to: 6000,
                fill: 'both',
                easing: 'easeInOut',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
            $page.show();
            // setTimeout(next, 300);
        },
        function page34($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page35($page, next) {
            $page.show();
            setTimeout(next, 300);
        },
        function page36($page, next) {
            $page.show();
            // setTimeout(next, 300);
        },
        function next($page, next) {
            $page.show();
            sound.pause();
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

    runAnimate.next(35);

}


