/**
 * Created by XavierXinweiWang on 16/10/1.
 */
$('#tight').click(function()
{
    $('#header').css("background-image", "url(images/tight.jpg)");
    $('#header').css("background-position-y", "-12vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark red');
});

$('#slacky').click(function()
{
    $('#header').css("background-image", "url(images/lazycover.jpg)");
    $('#header').css("background-position-y", "-27vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark lime  lighten-2');
});

$('#mediocre').click(function()
{
    $('#header').css("background-image", "url(images/cover.jpg)");
    $('#header').css("background-position-y", "-25vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark orange accent-2');
});

