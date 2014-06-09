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

    function postClickHandler(evt) {
	evt.preventDefault();
	var $post = $(evt.target).closest('.hugo-post');
	var permalink = $post.attr('data-permalink');
        window.location = permalink;
    }

    $('.hugo-post').on('click', postClickHandler);
});
