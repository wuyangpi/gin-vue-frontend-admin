(function(i,e){'use strict';e.behaviors.paragraph_gallery={attach:function(e){i(window).on('load resize',function(){if(i('.js-c-gallery').length){i('.js-image-slider',e).each(function(){let target=i(this).find('.field--name-field-media');if(!target.hasClass('slick-initialized')){target.slick({accessibility:!0,arrows:!0,nextArrow:i(this).find('.js-slick-next'),prevArrow:i(this).find('.js-slick-prev'),appendDots:i(this).find('.js-slick-dots-wrapper'),dots:!0,pauseOnHover:!0,pauseOnDotsHover:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,adaptiveHeight:!0,})}});i('.js-image-blocs',e).each(function(){let target=i(this).find('.field--name-field-media');if(i(window).width()<768&&!target.hasClass('slick-initialized')){target.slick({accessibility:!0,arrows:!1,dots:!1,slidesToShow:1,slidesToScroll:1,infinite:!1,variableWidth:!0,responsive:[{breakpoint:768},{breakpoint:9999,settings:'unslick'}]})}})}})}}})(jQuery,Drupal);;
(function(s,i){'use strict';i.behaviors.paragraph_key_figures_carousel={attach:function(i){var a=s('.js-key-figure',i);a.on('init reInit afterChange',function(e,i,a,t){if(s('.node--type-page').hasClass('has-summary')){if(i.slideCount<3){s(this).find('.slick-track').addClass('limit-size')}}
else{if(i.slideCount<4){s(this).find('.slick-track').addClass('limit-size')}}});var e;if(s('.node--type-page').hasClass('has-summary')){e=2}
else{e=3};if(!a.hasClass('slick-initialized')){a.slick({accessibility:!0,dots:!1,arrows:!0,slidesToShow:e,slidesToScroll:1,variableWidth:!0,infinite:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1}}]})}}}})(jQuery,Drupal);;