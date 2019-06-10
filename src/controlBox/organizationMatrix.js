
$(".project-row").click((event) => {
    const xebian = $('.xebian');
    $('.xebian').parent().removeClass('hover-xebian');
    const { target } = event;
    $(target).addClass('hover-xebian');
    target.append(xebian[0]);
});