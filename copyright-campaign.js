var copyrightCampaign = function(options) {
    options = typeof options !== 'undefined' ? options : {};
    function setDefaultOption(option, value) {
        options[option] = typeof options[option] !== 'undefined' ? options[option] : value;
    }

    setDefaultOption(options, {});
    setDefaultOption("onCampaignDayOnly", true);
    setDefaultOption("showOnlyOnce", true);
    setDefaultOption("title", 'Tänään juhlitaan<br>kansainvälistä tekijänoikeuspäivää');
    setDefaultOption("bigText", 'Tutustu <a href="https://www.kansalaisaloite.fi/fi/aloite/70">Järkeä tekijänoikeuslakiin -aloitteeseen!</a>');
    setDefaultOption("smallText", 'Yhdessä voimme tehdä Suomen tekijänoikeuslaista reilumman kuluttajille, tekijöille ja uusia palveluita kehittäville yrityksille.');
    setDefaultOption("protocol", (window.location.protocol == 'https:') ? 'https' : 'http');

    var today = new Date();
    if (!(today.getDate() == 23 && today.getMonth() + 1 == 4) && options["onCampaignDayOnly"]) {
        return;
    }

    if (typeof jQuery === "undefined") {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
          options.protocol + "://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js");
        script_tag.onload = main; // Run main() once jQuery has loaded
        /*script_tag.onreadystatechange = function () { // Same thing but for IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') main();
        }*/
        document.getElementsByTagName("head")[0].appendChild(script_tag);
    } else {
        main();
    }

    function main() {
        $(document).ready(function (e) {
            $("head").prepend("<link href='" + options.protocol + "://fonts.googleapis.com/css?family=Open+Sans:800|Gentium+Book+Basic' rel='stylesheet' type='text/css'>");
            
            var widgetStyle = '<style type="text/css">#copyright-campaign-box { z-index:9999;position:fixed;top:0;left:0;width:100%;height:100%;background:rgb(0,0,0);background:rgba(0,0,0,0.9);text-align:center;font-family:\'Gentium Book Basic\', serif;letter-spacing:0.1em;font-size:16px; } .inner-campaign-box { position:fixed;top:28px;right:28px;bottom:28px;left:28px;color:#EFEFEF;padding:20px;border:5px solid #ffffff; } #corner-close-button { position:fixed;top:8px;right:8px;padding:8px 16px;border-radius:2em;text-decoration:none;border:5px solid #ffffff;color:#ffffff;background:#000000;font-size:16px;font-weight:bold; } #corner-close-button:hover { background:#333333; } .campaign-text-content { position:fixed;top:15%;left:0;right:0;bottom:0; padding: 35px; } #copyright-campaign-box h1 { width:100%;font-family:\'Open Sans\', sans-serif;text-transform:uppercase;text-align:center;font-size:40px;margin: 0 auto 40px auto; } #closeCampaignText { display: none; } .campaign-text-content div { max-width:35em; padding: 0 30px; margin: 0 auto 40px auto; } #copyright-campaign-box a { color:#aaaacc;text-decoration:none; } #copyright-campaign-box a:hover { color:#ccccee;text-decoration:none; } #copyright-campaign-box .subscribe { font-size:24px; } #subscriptions { display: none; } #copyright-campaign-box .credits { position:fixed;bottom:40px;left:0;text-align:center;width:100%; } @media (max-width: 680px) { #copyright-campaign-box, #copyright-campaign-box .subscribe { font-size:16px; } #copyright-campaign-box h1 { font-size:19px; } .campaign-text-content div, #copyright-campaign-box h1 { margin-bottom: 20px; max-width: none; padding: 0; } } @media(max-height: 550px) { .campaign-text-content { position: static; padding: 0; } .campaign-text-content div, #copyright-campaign-box h1 { margin-bottom: 10px; } #copyright-campaign-box .credits { position: static;width:auto;max-width:none;} #closeCampaignText, #campaignInfoLink, .credits { display: none; } } </style>';

            $("head").prepend(widgetStyle);

            var widgetElement = '<div id="copyright-campaign-box"><div class="inner-campaign-box";><a href="#" id="corner-close-button" class="close-copyright-campaign-box" style="color:#ffffff">Sulje</a><div class="campaign-text-content"><h1>'+options.title+'</h1><div>'+options.smallText+'</div><div class="subscribe">'+options.bigText+'</div><div id="subscriptions">Jo <span id="subscriptionCount"><b></b></span> allekirjoitusta!</div><div id="campaignInfoLink"><a href="http://mustapaiva.jarkea.fi/" target="_blank">Kampanjasivu</a></div><div id="closeCampaignText"><a href="#" class="close-copyright-campaign-box">Sulje</a></div></div><div class="credits"><a href="https://github.com/SC5/copyright-campaign/" target="_blank">Code</a> by <a href="http://sc5.io" target="_blank">SC5</a> &amp; <a target="_blank" href="https://kfalck.net">Kenneth Falck</a></div></div></div>';
            $(document.body).append(widgetElement);

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
                e.preventDefault();
                hideBox();
            });

            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    hideBox();
                }
            });

            $.getJSON("https://www.kansalaisaloite.fi/api/v1/initiatives/70?jsonp=?").done(function(data) {
                    if (data.supportCount) {
                        $("#subscriptionCount b").html(data.supportCount);
                        $("#subscriptions").show();
                    }
            });
        });
    }
};
