
if ($('#organisationStructure').css('display') != 'none') {
    setTimeout(() => {
        $('.autofade').each(function () {
            console.log('reaching');
            $(this).addClass('fade');
        });
    }, 10000)

}