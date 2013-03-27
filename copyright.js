(function() {
    if (typeof jQuery === "undefined") {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
          "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
        script_tag.onload = main; // Run main() once jQuery has loaded
        script_tag.onreadystatechange = function () { // Same thing but for IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') main();
        }
        document.getElementsByTagName("head")[0].appendChild(script_tag);
    } else {
        main();
    }

    function main() {
        $(document).ready(function (e) {
            $("head").prepend("<link href='http://fonts.googleapis.com/css?family=Open+Sans|Gentium+Book+Basic' rel='stylesheet' type='text/css'>");
            var element = '<div id="copyright-campaign-box" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);text-align:center;font-family:\'Gentium Book Basic\', serif;letter-spacing:0.1em;font-size:1em;"><div style="position:fixed;top:20px;right:20px;bottom:20px;left:20px;color:#EFEFEF;padding:20px;border:5px solid #cccccc;";><div id="close-copyright-campaign-box" style="position:fixed;top:0px;right:0px;width:40px;height:40px;padding:0;border-radius:2em;border:5px solid #cccccc;color:#cccccc;background:#000000;font-size:2em;font-weight:bold;">&#215;</div><div style="position:fixed;top:30%;left:0;width:100%;"><h1 style="font-family:\'Open Sans\', sans-serif;text-transform:uppercase;font-size:3em;margin:0 0 40px 0;">Järkeä tekijänoikeuslakiin?</h1><p style="font-size:1.5em;">Allekirjoita <a href="https://www.kansalaisaloite.fi/fi/aloite/70" style="color:#aaaacc;">kansalaisaloite kohtuullisemman tekijänoikeuslain puolesta</a>.</p><p><a href="#" style="color:#aaaacc;">Internetin musta päivä 23.3</a></p></div><div style="position:absolute;bottom:40px;left:0;text-align:center;width:100%;"><a href="https://github.com/SC5/copyright-campaign" style="color:#efefef;text-decoration:underline;">Code</a> by <a href="http://sc5.io" style="color:#efefef;text-decoration:underline;">SC5</a></div></div></div>';
            $(document.body).html(element);

            function hideBox() {
                $("#copyright-campaign-box").hide();
                if(typeof(Storage)!=="undefined") {
                    //localStorage.boxClosed = true; // removed for testing
                }
            }

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
    }
}());