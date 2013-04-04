Järkeä tekijänoikeuslakiin -kampanja
====================================
Esimerkkisivu: http://sc5.github.com/copyright-campaign/

Osallistu kampanjaan lisäämällä seuraava koodi sivullesi:
```html
<script type="text/javascript" src="http://sc5.github.com/copyright-campaign/copyright-campaign.js" charset="UTF-8"></script>
<script>
copyrightCampaign();
</script>
```

Voit halutessasi kustomoida widgetin toimintaa parametreilla:

```html
<script type="text/javascript" src="http://sc5.github.com/copyright-campaign/copyright-campaign.js" charset="UTF-8"></script>
<script>
copyrightCampaign({ onCampaignDayOnly: true,
                    showOnlyOnce: true,
                    title: 'Järkeä<br>tekijänoikeuslakiin?',
                    bigText: 'Allekirjoita <a href="https://www.kansalaisaloite.fi/fi/aloite/70">kansalaisaloite kohtuullisemman tekijänoikeuslain puolesta</a>.',
                    smallText: 'Katso myös: <a href="#">Internetin musta päivä 23.4.</a>'});
</script>
```

Jos muutat tekstejä, testaa että layout pysyy ehjänä.