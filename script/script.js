$(document).ready(function () {
    let currentSlide = 0;

    function showSlide(destination, index) {
        destination.find('.slide').hide();
        destination.find('.slide').eq(index).show();
    }

    $('.next').on('click', function () {
        let destination = $(this).closest('.destination');
        currentSlide = (currentSlide + 1) % destination.find('.slide').length;
        showSlide(destination, currentSlide);
    });

    $('.prev').on('click', function () {
        let destination = $(this).closest('.destination');
        currentSlide = (currentSlide - 1 + destination.find('.slide').length) % destination.find('.slide').length;
        showSlide(destination, currentSlide);
    });

    // Exibe o primeiro slide ao carregar a página
    $('.destination').each(function () {
        showSlide($(this), currentSlide);
    });
});

function redirectToURL(url) {
    window.location.href = url;
}