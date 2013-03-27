var copyrightCampaign = function(options) {
    options = typeof options !== 'undefined' ? options : { onBlackoutDayOnly: false, showOnlyOnce: true };
    var today = new Date();
    if (!(today.getDate() == 27 && today.getMonth() == 3) && options["onBlackoutDayOnly"]) {
        return;
    }

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
            $("head").prepend("<link href='http://fonts.googleapis.com/css?family=Open+Sans:800|Gentium+Book+Basic' rel='stylesheet' type='text/css'>");
            
            var element = '<div id="copyright-campaign-box" style="z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);text-align:center;font-family:\'Gentium Book Basic\', serif;letter-spacing:0.1em;font-size:1em;"><div style="position:fixed;top:28px;right:28px;bottom:28px;left:28px;color:#EFEFEF;padding:20px;border:5px solid #ffffff;";><a href="#" class="close-copyright-campaign-box" style="position:fixed;top:8px;right:8px;padding:8px 16px;border-radius:2em;text-decoration:none;border:5px solid #ffffff;color:#ffffff;background:#000000;font-size:1em;font-weight:bold;">Sulje</a><div style="position:fixed;top:30%;left:0;width:100%;"><h1 style="font-family:\'Open Sans\', sans-serif;text-transform:uppercase;font-size:3em;margin:0 0 40px 0;">Järkeä<br>tekijänoikeuslakiin?</h1><div style="font-size:1.5em;"><div style="margin:0 auto;width:70%">Allekirjoita <a href="https://www.kansalaisaloite.fi/fi/aloite/70" style="color:#aaaacc;text-decoration:none;">kansalaisaloite kohtuullisemman tekijänoikeuslain puolesta</a>.</div></div><div style="margin:40px 0px;">Katso myös: <a href="#" style="color:#aaaacc;text-decoration:none;">Internetin musta päivä 23.4.</a></div><div><a href="#" class="close-copyright-campaign-box" style="color:#aaaacc;text-decoration:none;font-size:1em">Sulje</a></div></div><div style="position:absolute;bottom:40px;left:0;text-align:center;width:100%;"><a href="https://github.com/SC5/copyright-campaign/" style="color:#aaaacc;text-decoration:none;">Code</a> by <a href="http://sc5.io" style="color:#aaaacc;text-decoration:none;">SC5</a></div></div></div>';
            $(document.body).append(element);

            function hideBox() {
                $("#copyright-campaign-box").hide();
                if(options["showOnlyOnce"] && typeof(Storage)!=="undefined") {
                    localStorage.boxClosed = true;
                }
            }

            if(options["showOnlyOnce"] && typeof(Storage)!=="undefined" && localStorage.boxClosed) {
                hideBox();
            }

            $(".close-copyright-campaign-box").click(function(e) {
                hideBox();
            });

            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    hideBox();
                }
            });
        });
    }
};