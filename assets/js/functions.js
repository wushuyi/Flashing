/**
 * Created by wushuyi on 2017/6/20.
 */

//JSMpeg
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

var preloadImages = (function () {
    var images = [
        './assets/images/master/hartmut_esslinger.png',
        './assets/images/master/robin_king.png',
        './assets/images/fly.png?v1',
        './assets/images/graduation.png?v1',
        './assets/images/invitation.png',
        './assets/images/logo.png',
    ];
    for (var i = 1; i < 31; i++) {
        images.push('./assets/images/human/human' + i + '.png');
    }
    for (var i = 1; i < 18; i++) {
        images.push('./assets/images/work/work' + i + '.png');
    }
    for (var i = 1; i < 4; i++) {
        images.push('./assets/images/building' + i + '.png?v1');
    }
    for (var i = 1; i < 13; i++) {
        images.push('./assets/images/type/type' + i + '.png');
    }
    for (var i = 1; i < 3; i++) {
        images.push('./assets/images/class/class' + i + '.png');
    }
    return images;
})();

$typo = $('.page1').find('.button1 .typo');

function handleComplete() {
    $typo.text('点击进入');
    var sound = new Howl({
        src: ['./assets/audio/flashing_audio.mp3'],
        loop: true,
    });
    // var rythm = new Rythm();
    // rythm.setMusic(sound);
    // rythm.addRythm('pulse2', 'pulse', 0, 10, {min: 1, max: 1.3});
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
                setTimeout(next, 0);
                sound.play();
                // rythm.setGain(1);
                // rythm.start();
            });
        },
        function page2($page, next) {
            $page.show();
            setTimeout(next, 600);
        },
        function page3($page, next) {
            $page.show();
            setTimeout(next, 1000);
        },
        function page4($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page5($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page6($page, next) {
            $page.show();
            setTimeout(next, 400);
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
        /*function page14($page, next) {
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
         },*/
        function page15($page, next) {
            $page.show();
            setTimeout(next, 400);
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
            // var allCss = [
            //     {
            //         transform: 'translate3d(' + ((-$(window).height() / 2) + 180 * hotcss.dpr) + 'px, 0, 0)',
            //         visibility: 'hidden'
            //     },
            //     {
            //         transform: 'translate3d(0, 0, 0)',
            //         visibility: 'visible'
            //     }
            // ];

            var createAnimate = function ($el, mixins, cb) {
                animation = just.animate({
                    targets: $el.get(0),
                    mixins: mixins,
                    delay: function () {
                        setTimeout(function () {
                            $el.show();
                        }, 20);
                        return 0;
                    },
                    to: 400,
                    fill: 'both',
                    easing: 'easeIn',
                }).animate({
                    targets: $el.get(0),
                    mixins: 'fadeOut',
                    delay: 300,
                    to: 100,
                    fill: 'both',
                    easing: 'easeOut',
                }).on('finish', function (ctx) {
                    setTimeout(function () {
                        cb && cb();
                    }, 20);

                });
            };

            createAnimate($tit1, 'bounceInDown', function () {
                createAnimate($tit2, 'fadeInUp', function () {
                    createAnimate($tit3, 'fadeInRight', function () {
                        createAnimate($tit4, 'flipInY', function () {
                            setTimeout(next, 10);
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
            setTimeout(next, 400);
        },
        function page19($page, next) {
            $page.show();
            setTimeout(next, 1000);
        },
        function page20($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page21($page, next) {
            $page.show();
            setTimeout(next, 1000);
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
                        cb && cb();
                    });
                } else {
                    cb && cb();
                }
            };
            createAnimate($img3, function () {
                createAnimate($img2, function () {
                    createAnimate($img1, function () {
                        setTimeout(next, 600);
                    }, true);
                });
            });

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        /*        function page23($page, next) {
         $page.show();
         setTimeout(next, 1000);
         },*/
        function page29($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page30($page, next) {
            $page.show();
            setTimeout(next, 400);
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
        function page37_1($page, next) {
            var $img1 = $page.find('.img1');
            var $typo = $page.find('.typo');
            $typo.css({opacity: 0});
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
                    to: 4000,
                });
                if (!notOut) {
                    animation.animate({
                        targets: $el.get(0),
                        mixins: 'fadeOut',
                        fill: 'both',
                        easing: 'linear',
                        delay: 1000,
                        to: 300,
                    }).on('finish', function () {
                        cb && cb();
                    });
                } else {
                    setTimeout(cb, 1000);
                }
            };
            var createAnimate2 = function ($el, mixins, cb, notOut) {
                animation = just.animate({
                    targets: $el.get(0),
                    mixins: mixins,
                    fill: 'both',
                    easing: 'linear',
                    to: 200,
                });
                if (!notOut) {
                    animation.animate({
                        targets: $el.get(0),
                        mixins: 'fadeOutRight',
                        fill: 'both',
                        easing: 'linear',
                        delay: 600,
                        to: 100,
                    }).on('finish', function () {
                        cb && cb();
                    });
                } else {
                    setTimeout(cb, 1000);
                }
            };
            createAnimate2($typo.eq(0), 'bounceInLeft', function () {
                createAnimate2($typo.eq(1), 'bounceInLeft', function () {
                    createAnimate2($typo.eq(2), 'bounceInLeft', function () {
                        createAnimate2($typo.eq(3), 'bounceInLeft', function () {
                            setTimeout(next, 300);
                        }, true);
                    });
                });
            });
            createAnimate($img1, function () {
            }, true);

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page24($page, next) {
            $page.show();
            var parentNext = next;
            var player = null;
            var playerList = [
                function start(canvas, next) {
                    // sound.pause();
                    $(canvas).hide();
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
                    setTimeout(function () {
                        $(canvas).show();
                    }, 800);
                },
                function end(canvas, next) {
                    player.destroy();
                    player = null;
                    $(canvas).remove();
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
        function page37_2($page, next) {
            var $img1 = $page.find('.img1');
            var $typo = $page.find('.typo');
            $typo.css({opacity: 0});
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
                    to: 4000,
                });
                if (!notOut) {
                    animation.animate({
                        targets: $el.get(0),
                        mixins: 'fadeOut',
                        fill: 'both',
                        easing: 'linear',
                        delay: 1000,
                        to: 300,
                    }).on('finish', function () {
                        cb && cb();
                    });
                } else {
                    setTimeout(cb, 1000);
                }
            };
            var createAnimate2 = function ($el, mixins, cb, notOut) {
                animation = just.animate({
                    targets: $el.get(0),
                    mixins: mixins,
                    fill: 'both',
                    easing: 'linear',
                    to: 200,
                });
                if (!notOut) {
                    animation.animate({
                        targets: $el.get(0),
                        mixins: 'fadeOutRight',
                        fill: 'both',
                        easing: 'linear',
                        delay: 600,
                        to: 100,
                    }).on('finish', function () {
                        cb && cb();
                    });
                } else {
                    setTimeout(cb, 1000);
                }
            };
            createAnimate2($typo.eq(0), 'bounceInLeft', function () {
                createAnimate2($typo.eq(1), 'bounceInLeft', function () {
                    createAnimate2($typo.eq(2), 'bounceInLeft', function () {
                        createAnimate2($typo.eq(3), 'bounceInLeft', function () {
                            setTimeout(next, 300);
                        }, true);
                    });
                });
            });
            createAnimate($img1, function () {
            }, true);

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page25($page, next) {
            // var $img1 = $page.find('.img1');
            // var $img2 = $page.find('.img2');
            // var $img3 = $page.find('.img3');
            // $img1.hide();
            // $img2.hide();
            // $img3.hide();
            var $imgBox = $page.find('.img-box');
            var imgIndex = 0;
            var $imgList = [];
            for (var j = 0; j < 6; j++) {
                for (var i = 0; i < 3; i++) {
                    imgIndex += 1;
                    var $img = $('<div class="img" style="background-image: url(./assets/images/work/work' + imgIndex + '.png);"></div>');
                    $imgList.push($img);
                    $imgBox.eq(i).append($img);
                }
            }
            var $img = $page.find('.img');
            $img.css({opacity: 0});
            var winW = $(window).width();
            var css1 = [
                {
                    opacity: 1,
                    transform: 'translate3d(' + winW + 'px, 0, 0)'
                },
                {
                    opacity: 1,
                    transform: 'translate3d(0, 0, 0)'
                },
            ];
            var css2 = [
                {
                    opacity: 1,
                    transform: 'translate3d(' + -winW + 'px, 0, 0)'
                },
                {
                    opacity: 1,
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
                    to: 300,
                }).on('finish', function () {
                    cb && cb();
                });
            };
            // createAnimate($img2, css2);
            createAnimate($imgList[0], css1, function () {
                createAnimate($imgList[1], css2, function () {

                    createAnimate($imgList[2], css1, function () {
                        createAnimate($imgList[3], css2, function () {

                            createAnimate($imgList[4], css1, function () {
                                createAnimate($imgList[5], css2, function () {

                                    createAnimate($imgList[6], css1, function () {
                                        createAnimate($imgList[7], css2, function () {

                                            createAnimate($imgList[8], css1, function () {
                                                createAnimate($imgList[9], css2, function () {

                                                    createAnimate($imgList[10], css1, function () {
                                                        createAnimate($imgList[11], css2, function () {

                                                            createAnimate($imgList[12], css1, function () {
                                                                createAnimate($imgList[13], css2, function () {

                                                                    createAnimate($imgList[14], css1, function () {
                                                                        createAnimate($imgList[15], css2, function () {

                                                                            createAnimate($imgList[16], css1, function () {
                                                                                createAnimate($imgList[17], css2, function () {
                                                                                    setTimeout(next, 10);
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page26($page, next) {
            $page.show();
            setTimeout(next, 400);
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
        // function page33($page, next) {
        //     var $imgContent = $page.find('.img-content');
        //     var html = '';
        //     var work = 0, top = 0, left = 0;
        //     for (var i = 0; i < 3; i++) {
        //         for (var j = 1; j < 6; j++) {
        //             work += 1;
        //             html += '<div class="img-box">' +
        //                 '<div class="img" style="background-image: url(./assets/images/work/work' + (work) + '.png);"></div>' +
        //                 '</div>';
        //         }
        //     }
        //     $imgContent.append(html);
        //     var $imgBox = $imgContent.find('.img-box');
        //     var preanimation = animation;
        //     animation = just.animate({
        //         targets: $imgBox.toArray(),
        //         delay: function () {
        //             return '+=300ms';
        //         },
        //         mixins: 'flipInY',
        //         fill: 'both',
        //         easing: 'easeInOut',
        //     }).on('finish', function () {
        //         setTimeout(next, 100);
        //     });
        //     setTimeout(function () {
        //         $page.show();
        //         preanimation && preanimation.cancel();
        //     }, 10);
        // },
        function page34($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page35($page, next) {
            $page.show();
            setTimeout(next, 400);
        },
        function page36($page, next) {
            var $tit1 = $page.find('.tit1');
            var $imgbox1 = $page.find('.imgbox1');
            $imgbox1.css({
                opacity: 0
            });
            var preanimation = animation;
            var letters = just.splitText($tit1.find('.typo').get(0)).characters;
            animation = just.animate({
                targets: letters,
                css: [
                    {
                        transform: 'scale3d(3, 3, 3)',
                        opacity: 0,
                    },
                    {
                        transform: 'scale3d(1, 1, 1)',
                        opacity: 1,
                    },

                ],
                delay: function () {
                    return '+=300ms';
                },
                to: 600,
                fill: 'both',
                easing: 'easeOutCubic',
            }).animate({
                targets: $tit1.get(0),
                css: [
                    {
                        transform: 'translate3d(0, 0, 0)'
                    },
                    {
                        transform: 'translate3d(0 , ' + (-100 * hotcss.dpr) + 'px , 0)'
                    },
                ],
                delay: function () {
                    return '+=300ms';
                },
                to: 600,
                fill: 'both',
                easing: 'easeOutCubic',
            }).animate({
                targets: $imgbox1.get(0),
                css: [
                    {
                        opacity: 0,
                        transform: 'scale3d(2, 2, 2)'
                    },
                    {
                        opacity: 1,
                        transform: 'scale3d(0.8 , 0.8 , 0.8)'
                    },
                ],
                to: 400,
                fill: 'both',
                easing: 'easeOutCubic',
            }).on('finish', function () {
                setTimeout(next, 800);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page36_1($page, next) {
            var $imgContent = $page.find('.img-content');
            var $typo = $page.find('.typo');
            $typo.css({opacity: 0});
            var html = '';
            var work = 0, top = 0, left = 0;
            for (var i = 0; i < 6; i++) {
                for (var j = 1; j < 6; j++) {
                    work += 1;
                    html += '<div class="img-box">' +
                        '<div class="img" style="background-image: url(./assets/images/human/human' + (work) + '.png);"></div>' +
                        '</div>';
                }
            }
            $imgContent.append(html);
            var $imgBox = $imgContent.find('.img-box');
            var preanimation = animation;
            var createAnimate2 = function ($el, mixins, cb) {
                animation = just.animate({
                    targets: $el.get(0),
                    mixins: mixins,
                    fill: 'both',
                    easing: 'linear',
                    to: 600,
                }).on('finish', function () {
                    cb && cb();
                });
            };
            createAnimate2($typo.eq(0), 'bounceInLeft');
            animation = just.animate({
                targets: $imgBox.toArray(),
                delay: function () {
                    return '+=150ms';
                },
                mixins: 'flipInY',
                fill: 'both',
                easing: 'easeInOut',
            }).on('finish', function () {
                setTimeout(next, 100);
            });
            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page36_2($page, next) {
            var preanimation = animation;
            var $imgTop = $page.find('.img-top');
            var $imgBottom = $page.find('.img-bottom');
            var $typo = $page.find('.typo');
            var topHtml = (function () {
                var html = '';
                for (var i = 1; i <= 12; i++) {
                    html += '<div class="img-box">' +
                        '<div class="img" style="background-image: url(./assets/images/type/type' + (i) + '.png);"></div>' +
                        '</div>';
                }
                return html;
            })();
            var bottomHtml = (function () {
                var html = '';
                for (var i = 1; i <= 2; i++) {
                    html += '<div class="img-box">' +
                        '<div class="img" style="background-image: url(./assets/images/class/class' + (i) + '.png);"></div>' +
                        '</div>';
                }
                return html;
            })();
            $imgTop.html(topHtml);
            $imgBottom.html(bottomHtml);
            var $topBox = $imgTop.find('.img-box');
            var $bottomBox = $imgBottom.find('.img-box');
            $typo.css({opacity: 0});
            $topBox.css({opacity: 0});
            $bottomBox.css({opacity: 0});
            var createAnimate2 = function ($el, mixins, cb) {
                animation = just.animate({
                    targets: $el.get(0),
                    mixins: mixins,
                    fill: 'both',
                    easing: 'linear',
                    to: 600,
                }).on('finish', function () {
                    cb && cb();
                });
            };
            createAnimate2($typo.eq(0), 'bounceInLeft', function () {
                setTimeout(function () {
                    createAnimate2($typo.eq(1), 'bounceInLeft');
                }, 1000);
            });

            just.animate({
                targets: $imgTop.find('.img-box').toArray(),
                delay: function () {
                    return '+=120ms';
                },
                mixins: 'flipInY',
                fill: 'both',
                easing: 'easeInOut',
            }).on('finish', function () {
                var winW = $(window).width();
                var css1 = [
                    {
                        opacity: 1,
                        transform: 'translate3d(' + winW + 'px, 0, 0)',
                    },
                    {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                ];
                var css2 = [
                    {
                        opacity: 1,
                        transform: 'translate3d(' + -winW + 'px, 0, 0)',
                    },
                    {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0)',
                    },
                ];
                var preanimation = animation;
                var createAnimate = function ($el, css, cb) {
                    animation = just.animate({
                        targets: $el.get(0),
                        css: css,
                        fill: 'both',
                        easing: 'easeOutCubic',
                        to: 300,
                    }).on('finish', function () {
                        cb && cb();
                    });
                };
                createAnimate($bottomBox.eq(0), css1, function () {
                    createAnimate($bottomBox.eq(1), css2, function () {
                        setTimeout(next, 100);
                    });
                });
            });

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
        },
        function page38($page, next) {
            var $img1 = $page.find('.img1');
            var $img2 = $page.find('.img2');
            $img1.css({opacity: 0});
            $img2.css({opacity: 0});
            var preanimation = animation;
            var createAnimate = function ($el, cb, notOut) {
                animation = just.animate({
                    targets: $el.get(0),
                    css: [
                        {
                            opacity: 0.8,
                            transform: 'translateZ(0) scale3d(1, 1, 1)'
                        },
                        {
                            opacity: 1,
                            transform: 'translateZ(0) scale3d(1.25, 1.25, 1.25)'
                        },
                    ],
                    fill: 'both',
                    easing: 'linear',
                    to: 800,
                });
                if (!notOut) {
                    animation.animate({
                        targets: [$el.get(0), $page.find('.tit1').get(0)],
                        mixins: 'fadeOut',
                        fill: 'both',
                        easing: 'linear',
                        delay: 1000,
                        to: 300,
                    }).on('finish', function () {
                        cb && cb();
                    });
                } else {
                    setTimeout(cb, 1000);
                }
            };
            createAnimate($img2, function () {
                animation = just.animate({
                    targets: $img1.get(0),
                    css: [
                        {
                            offset: 0,
                            transform: 'perspective(400px)',
                            rotateX: '90deg',
                            opacity: 0
                        },
                        {
                            offset: 0.4,
                            transform: 'perspective(400px)',
                            rotateX: '20deg'
                        },
                        {
                            offset: 0.6,
                            transform: 'perspective(400px)',
                            rotateX: '10deg',
                            opacity: 1
                        },
                        {
                            offset: 0.8,
                            transform: 'perspective(400px)',
                            rotateX: '0deg',
                        },
                        {
                            offset: 1,
                            opacity: 1,
                            transform: 'perspective(400px)'
                        }
                    ],
                    // mixins: 'flipInX',
                    fill: 'both',
                    easing: 'linear',
                    to: 800,
                });
                sound.fade(1, 0, 3000);
                // setTimeout(sound.pause, 4000);
            });
            $img2.show();

            setTimeout(function () {
                $page.show();
                preanimation && preanimation.cancel();
            }, 10);
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
                // console.log(index);
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
    // sound.play();
    runAnimate.next();
    // runAnimate.next(37);
}
var loader = new PxLoader();

loader.addData('./assets/video/video.mp4');

$.each(preloadImages, function (index, item) {
    loader.addImage(item);
});

loader.addData('./assets/audio/flashing_audio.mp3');

loader.addProgressListener(function (e) {
    var num = parseInt(e.completedCount / e.totalCount * 100) + '%';
    $typo.text('加载中' + num);
});
loader.addCompletionListener(handleComplete);

// 设置微信分享
var isWeiXin = (function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
})();

if (isWeiXin) {
    $script(['http://res.wx.qq.com/open/js/jweixin-1.0.0.js', 'js/wxshare.js' + varsion], function () {
        var getQueryConfig = {
            'version': "1.0.0",
            "platform": "H5"
        };

        function getWeiXinShareUrl(url) {
            return 'http://api.5151study.com/weixin/signature?url=' + url;
        }

        var reqUrl = getWeiXinShareUrl(location.href);

        $.get(reqUrl, getQueryConfig, function (data) {
            wxshare.init({
                initData: data.data,
                setData: {
                    title: '这个潜伏在教育界的神秘力量终于出现了',
                    descContent: '2017上海视觉艺术学院德稻实验班一期毕业典礼',
                    imgUrl: 'http://m.5151study.com/Flashing/assets/images/favicon.png',
                }
            });
        });

        console.log('jweixin');
    });
}