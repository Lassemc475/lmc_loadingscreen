let $ = jQuery;

    var text = ["Du er inde om et kort øjeblik", "Du er inde om et kort øjeblik.", "Du er inde om et kort øjeblik..", "Du er inde om et kort øjeblik..."];
    var counter = 0;
    var elem = $("#loader");

    var inst = setInterval(function() {
        elem.html(text[counter] + '.');
        counter++;
        if (counter > 3) {
            counter = 0;
        }
    }, 1000);