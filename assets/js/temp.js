/**
 * Created by wushuyi on 2017/6/21.
 */


function getStyle(el) {
    var $el = $(el);
    $el.css({
        display: 'inline',
    })
    var w = $el.width();
    var h = $el.height();
    var gFontSize = parseInt($('html').css('font-size'));
    var temp = `
    width: px2rem(${ Math.ceil(hotcss.rem2px(w / gFontSize)) + 4 });
    height: px2rem(${ Math.ceil(hotcss.rem2px(h / gFontSize)) });
    margin-left: px2rem(${ Math.ceil(hotcss.rem2px(-(w / 2) / gFontSize)) - 2 });
    margin-top: px2rem(${ Math.ceil(hotcss.rem2px(-(h / 2) / gFontSize)) });
`;
    return temp;
}

getStyle($0);

function setStyle(el) {
    var $el = $(el);
    $el.css({
        width: $el.css('width'),
        height: $el.css('height'),
        'margin-left': $el.css('margin-left'),
        'margin-top': $el.css('margin-top'),
    });
}

setStyle($0);

(function() {
    'use strict';
    var $select = document.getElementById('animateSelect');
    var $button = document.getElementById('animateButton');
    var $greenPixl = document.querySelector('.green.pixl');

    var animation;
    var greenAnimation;
    var letters = just.splitText('#animateLabel').characters;

    function animateIntro() {
        just.animate({
            targets: letters,
            delay: '+=125ms',
            mixins: 'zoomInUp',
            fill: 'both',
            on: {
                created: function(ctx) {
                    ctx.target.style.opacity = 1;
                }
            }
        })
            .animate({
                targets: [
                    '#animateSelect',
                    '#animateButton',
                    '#actionWrapper a',
                    '#starWrapper',
                    '#githubBanner',
                    '#greenPixlContainer'
                ],
                delay: '+=175ms',
                to: '1s',
                mixins: 'fadeIn',
                on: {
                    created: function(ctx) {
                        ctx.target.style.opacity = 1;
                    }
                }
            })
            .on({
                finish: jumpForJoy
            });
    }

    function animateTitle(mixinName) {
        if (animation) {
            animation.cancel();
        }
        animation = just.animate({
            targets: letters,
            delay: '+=125ms',
            mixins: mixinName,
            fill: 'both'
        })
            .on('finish', function() {
                animation.cancel();
            });
    }

    function animateGreenPixl() {
        if (greenAnimation) {
            greenAnimation.cancel();
        }
        var randomAnimation = just.shuffle([{
            targets: '.pixl',
            mixins: 'jello'
        }, {
            targets: '.pixl',
            to: '2s',
            css: {
                rotateX: [0, '360deg'],
                rotateY: [0, '180deg'],
            },
            direction: 'alternate',
            iterations: 2
        }, {
            targets: $greenPixl,
            to: '1.5s',
            fill: 'forwards',
            easing: 'ease-in-out',
            css: [{
                transform: 'rotate(0)'
            }, {
                transform: 'rotate(360deg)'
            }]
        }, {
            targets: '.pixl',
            to: '6s',
            css: [{
                offset: 0,
                transform: 'none'
            }, {
                offset: .25,
                x: '200px',
                rotate: '180deg'
            }, {
                offset: .75,
                x: '-200px',
                rotate: '-180deg'
            }, {
                offset: 1,
                transform: 'none'
            }]
        }]);

        greenAnimation = just
            .animate(randomAnimation)
            .on('finish', jumpForJoy);
    }

    function jumpForJoy() {
        if (greenAnimation) {
            greenAnimation.cancel();
        }
        greenAnimation = just.animate({
            targets: '.pixl',
            delay: '1500ms',
            mixins: 'bounce',
            to: 1200
        })
            .play(Infinity);
    }

    function onReanimate() {
        // spooky!
        const val = $select.options[$select.selectedIndex].value
        animateTitle(val);
    }

    $select.addEventListener('change', onReanimate);
    $button.addEventListener('click', onReanimate);
    $greenPixl.addEventListener('click', animateGreenPixl);

    animateIntro();
})();

ffmpeg -i 2017-06-21_17-25-48_1.mp4 -f mpegts
-codec:v mpeg1video  -b:v 1500k -r 30 -bf 0 \
-codec:a mp2 -ar 44100 -ac 1 -b:a 128k \
out.ts