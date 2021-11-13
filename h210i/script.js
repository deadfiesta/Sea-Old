"use strict";

//const
const nzxtCase = document.querySelector(".hero-right");
const heroText = document.querySelector(".hero-left");
const descriptionText = document.querySelector(".description");
const priceTag = document.querySelector(".pricing");

//cal total cost pricing
var sum = 0;
var buy = 0;
$('.pricing').each(function () {
    var val = $.trim($(this).text());

    if (val) {
        val = parseFloat(val.replace(/^\$/, ""));

        sum += !isNaN(val) ? val : 0;
    }
});
const cost = (Math.round(sum * 100) / 100).toFixed(2);
$('.total-pricing').html(cost);
//cal total purchased 
$('.purchased').each(function () {
    var val = $.trim($(this).text());

    if (val) {
        val = parseFloat(val.replace(/^\$/, ""));

        buy += !isNaN(val) ? val : 0;
    }
});
const bought = (Math.round(buy * 100) / 100).toFixed(2);
$('.total-purchased').html(bought);

//click events
$('#cpu').click(() => {
    window.open("https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x", "_blank")
});
$('#aio').click(() => {
    window.open("https://www.nzxt.com/products/kraken-m22", "_blank")
});
$('#motherboard').click(() => {
    window.open("https://www.asus.com/sg/Motherboards/ROG-STRIX-B550-I-GAMING/", "_blank")
});
$('.branding').click(() => {
    window.open("https://deadfiesta.studio/")
})
$('#ryzen3700').click(() => {
    window.open("https://sg.carousell.com/p/amd-ryzen-7-3700x-brand-new-1037325300/", "_blank")
})
$('#nzxtm22').click(() => {
    window.open("https://www.amazon.sg/NZXT-Kraken-120mm-All-One/dp/B079JF6NDC/ref=sr_1_1?dchild=1&keywords=kraken+m22&qid=1600318203&sr=8-1&load-pop-up=1&", "_blank")
})
$('#corsairvengence').click(() => {
    window.open("https://www.lazada.sg/products/corsair-vengeance-lpx-32gb-2x16gb-ddr4-3600mhz-c18-amd-ryzen-dimm-desktop-memory-kit-black-cmk32gx4m2z3600c18-i706136909-s2209694374.html?mp=1&spm=spm%3Da2o42.order_details.item_title.1", "_blank")
})
$('#samsungevo970').click(() => {
    window.open("https://www.lazada.sg/products/samsung-970-evo-plus-250gb-500gb-1tb-pcie-nvme-m2-internal-ssd-i320972666-s1679804880.html?mp=1", "_blank")
})
$('#samsungevo870').click(() => {
    window.open("https://shopee.sg/product/262423255/4440939596", "_blank")
})
$('#seagatebarracuda').click(() => {
    window.open("https://www.lazada.sg/products/seagate-barracuda-st2000dm008-2tb-7200-rpm-256mb-cache-sata-60gbs-35-hard-drive-bare-drive-i324910907-s676724344.html?mp=1", "_blank")
})
$('#evgasupernova').click(() => {
    window.open("https://www.lazada.sg/products/evga-supernova-850-g-80-plus-gold-850w-fully-modular-fdb-fan-10-year-warranty-includes-power-on-self-tester-power-supply-120-gp-0850-x3-evga-850w-psu-i265332042-s411955592.html?mp=1", "_blank")
})
$('#nzxth210i').click(() => {
    window.open("https://www.lazada.sg/products/nzxt-h210i-mini-tower-case-cam-powered-premium-mini-itx-case-i447424576-s1190472822.html?mp=1", "_blank")
})
$('#bequietsilentwings').click(() => {
    window.open("https://www.lazada.sg/products/be-quiet-silent-wings-3-120mm-140-mm-pwm-fans-i426170115-s1090828642.html?", "_blank")
})
$('#lgultragear').click(() => {
    window.open("https://www.lazada.sg/products/delivery-in-24-hoursdynacore-lg-ultragear-34gn850-b-34-qhd-nano-ips-gaming-monitor-with-nvidia-g-sync-compatible-lg-34gn850-i797140600-s2626660769.html?spm=a2o42.searchlist.list.3.1d3a87cdR18n13&search=1", '_blank')
})
$('.bequietsilentwings').click(() => {
    window.open("https://www.allstars.com.sg/be-quiet-silent-wings-3-140mm-pwm-high-speed-14cm-chassis-case-fan-bl071-1600rpm-28-1dba-77-5cfm-2-16mmh-2-0-300k-hrs-wrty-1-yr-with-distributor/", "_blank")
})
$('.tecwareflexpsu').click(() => {
    window.open("https://shopee.sg/product/16343535/7645605058", "_blank")
})
$('#fca800').click(() => {
    window.open("http://jiaying.com/catalog/brackets/monitor/wall/FC-A800.pdf", "_blank")
})
$('#fan-1,#fan-2').click(() => {
    window.open("https://www.bequiet.com/en/casefans/723", "_blank")
})
$('#fan-3,#fan-4').click(() => {
    window.open("https://www.bequiet.com/en/casefans/724", "_blank")
})
$('#nzxtusbhub').click(() => {
    window.open("https://www.nzxt.com/products/internal-usb-hub", "_blank")
})
$('.tecwareflex').click(() => {
    window.open("https://www.tecware.co/flex", "_blank")
})
$('#nzxthue2underglow').click(() => {
    window.open("https://www.nzxt.com/products/hue-2-underglow", "_blank")
})
$('#nzxthue2').click(() => {
    window.open("https://www.amazon.sg/gp/product/B07GF4K7XB/ref=ppx_yo_dt_b_asin_image_o00_s00?ie=UTF8&psc=1", "_blank")
})
$('#nzxthue2led').click(() => {
    window.open("https://www.nzxt.com/products/hue-2-led-strip-accessory", "_blank")
})
$('#nzxthue2ambient').click(() => {
    window.open("https://shopee.sg/NZXT-HUE-2-AMBIENT-RGB-LIGHTING-KIT-AC-HUEHU-A2-i.209449600.4520824899", "_blank")
})

//mouseover events
// $('.type').addClass('unselected');
$('.part').hover(
    function () {
        var type = "#" + $(this).attr('type');
        $(type).addClass('selectedhover');
    }, function () {
        var type = "#" + $(this).attr('type');
        $(type).removeClass('selectedhover');
    }
);

//scrollreveal events
var slideUp = {
    distance: '5em',
    origin: 'bottom',
    opacity: '0',
}

var fadeIn = {
    distance: '1em',
    origin: 'bottom',
    opacity: '0',
}
// ScrollReveal().reveal('.type', fadeIn)
ScrollReveal().reveal('.part', slideUp)

//counterup 
// $('.pricing').counterUp();
$('.total-pricing').counterUp();
$('.total-purchased').counterUp();

//scrollmagic events
//init controller
var cpu, aio, mobo, gpu, ram, hdd, psu, chas, acc, fan, monitor;

function calculateHeight() {
    var type = $('.type').height() + parseInt($('.type').css('margin-top')) + parseInt($('.type').css('margin-bottom')) + parseInt($('.type').css('padding-top')) + parseInt($('.type').css('padding-bottom'));
    var pad = parseInt($('.part').css('padding-top')) + parseInt($('.part').css('padding-bottom')) + parseInt($('.part').css('margin-top')) + parseInt($('.part').css('margin-bottom'));
    var spaces = type + pad;
    cpu = spaces + $('#processor').height();
    aio = spaces + $('#liquidcooler').height();
    mobo = spaces + $('#motherboard').height();
    gpu = spaces + $('#graphics').height();
    ram = spaces + $('#memory').height();
    hdd = type + $('#storage-1').height() + pad + $('#storage-2').height() + pad + $('#storage-3').height() + pad;
    psu = spaces + $('#powersupply').height();
    chas = spaces + $('#chassis').height();
    acc = spaces + $('#accessories').height();
    fan = type +$('#fan-1').height() + pad +$('#fan-2').height();
    monitor = type + $('#monitor').height() + pad + $('#monitor-arm').height();
}

const scrollMagic = () => {
    var controller = new ScrollMagic.Controller({});

    new ScrollMagic.Scene({
        triggerElement: "#typecpu", duration: cpu
    })
        .setClassToggle("#typecpu, #processor", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeaio", duration: aio
    })
        .setClassToggle("#typeaio, #liquidcooler", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typemobo", duration: mobo
    })
        .setClassToggle("#typemobo, #motherboard", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typegpu", duration: gpu
    })
        .setClassToggle("#typegpu, #graphics", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeram", duration: ram
    })
        .setClassToggle("#typeram, #memory", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typehdd", duration: hdd
    })
        .setClassToggle("#typehdd, #storage-1, #storage-2, #storage-3", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typepsu", duration: psu
    })
        .setClassToggle("#typepsu, #powersupply", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typecase", duration: chas
    })
        .setClassToggle("#typecase, #chassis", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typeaccessories", duration: acc
    })
        .setClassToggle("#typeaccessories, #accessories", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typecasefan", duration: fan
    })
        .setClassToggle("#typecasefan, #fan-1,#fan-2,#fan-3,#fan-4", "selected")
        .addTo(controller)
        // .addIndicators();

    new ScrollMagic.Scene({
        triggerElement: "#typemonitor", duration: monitor
    })
        .setClassToggle("#typemonitor, #monitor", "selected")
        .addTo(controller)
        // .addIndicators();


}

$(document).ready(function () {
    calculateHeight();
    scrollMagic();
})

$(window).resize(function() {
    calculateHeight();
    scrollMagic();
})