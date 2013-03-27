function hideBox() {
    $("#copyright-campaign-box").hide();
    if(typeof(Storage)!=="undefined") {
        localStorage.boxClosed = true;
    }
}

$(document).ready(function (e) {
    if(typeof(Storage)!=="undefined" && localStorage.boxClosed) {
        hideBox();
    }

    $("#close-copyright-campaign-box").click(function(e) {
        hideBox();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            hideBox();
        }
    });
});
