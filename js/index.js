//
// $.fn.tip = function () {
//   alert("ok");
// }
//
// $.fn === $.prototype // true
//  原型的用处，减少内存消耗

// function a() {
//     console.log("wo shi shui");
// }
//
// a();
//
//
// var a = function () {
//
// }
//
// a();


(function ($) {

    var modePos;

    $.fn.tip = function (options) {

        if(!modePos) {
            console.log('ok');
            modePos = {
                top: function (t, tip) {
                    return {
                        left: t.offset().left + (t.width() - tip.width()) / 2 + 'px',
                        top: t.offset().top - tip.height() - _h +'px'
                    }
                },
                bottom: function (t, tip) {
                    return {
                        left: this.top(t, tip).left,
                        top: t.offset().top + t.height() + _h +'px'
                    }
                }
            }
        }


        var set = $.extend({
            'mode': 'bottom',
            'speed': 200
        }, options),
            _h = 12;

        //策略模式
        // var modePos = {
        //     top: function (t, tip) {
        //         return {
        //             left: t.offset().left + (t.width() - tip.width()) / 2 + 'px',
        //             top: t.offset().top - tip.height() - _h +'px'
        //         }
        //     },
        //     bottom: function (t, tip) {
        //         return {
        //             left: this.top(t, tip).left,
        //             top: t.offset().top + t.height() + _h +'px'
        //         }
        //     }
        // }


        return this.each(function () {
            // console.log('ok');
           var _that = $(this),
               _tip = '.tip-container';

           _that.hover(function () {

               var _mode = set.mode;

               if(_that.attr('data-mode')){
                   _mode = _that.attr('data-mode');
               }


               var _tipHtml = '<div class="tip-container"><div class="tip-point-'+_mode +'"> <div class="tip-content">'+ _that.attr('data-tip')+'</div> </div> </div>';
               var _l, _t;

               _that.removeAttr('title alt');
               $('body').append(_tipHtml);



               $(_tip).css(modePos[_mode](_that, $(_tip))).fadeIn(set.speed);

           },function () {
                $(_tip).remove();
           });
        });
    }

})(jQuery);










