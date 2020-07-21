$(function transitPage() {
    $('.nav-link').on('click', function () {

        $('.content').addClass('hidden');
        let clickedBtnId = $(this).attr('id');
        let displayContentId = clickedBtnId.replace('-btn', '');

        $('#' + displayContentId).removeClass('hidden');
    })
});
