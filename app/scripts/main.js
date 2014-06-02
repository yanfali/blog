$(function() {
    'use strict';
    if (window.hugo) {
        var section = window.hugo.section;
        var $active = $('.menu.active');
        if ($active.attr('data-id') !== section) {
            $active.removeClass('.active');
            $('.menu[data-id="' + section + '"]').addClass('active');
        }
    }
});
