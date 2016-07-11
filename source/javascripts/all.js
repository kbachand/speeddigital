<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="restive.min.js"></script>

<script>
$( document ).ready(function() {
    $('body').restive({
        breakpoints: ['240', '320', '480', '640', '720', '960', '1280'],
        classes: ['rp_240', 'rp_320', 'rp_480', 'rp_640', 'rp_720', 'rp_960', 'rp_1280'],
        turbo_classes: 'is_mobile=mobi,is_phone=phone,is_tablet=tablet',
        force_dip: true
    });
});
</script>
