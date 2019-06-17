$(document).ready(function() {
    // initial
    $('#content').load('content/index.html');

    //handle menu clicks
    $('ul#nav li a').click(function(e) {
       var page = $(this).attr('href');
       $('#content').load('content/' + page + '.html');
       e.preventDefault(); // could also use "return false;" here
    });

});