$(function () {
  //fullpage js
  new fullpage("#fullpage", {
    anchors: ["home", "work", "animated", "frontend", "pctech"],
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    fixedElements:
      ".init-container, .glass-container, .misc-container, .multiply-container",
    onLeave: function (origin, destination, direction) {
      $class = destination.anchor;
      $content = $("#content");
      $content.fadeOut(200, function () {
        appendContent($class);
        setTimeout(function () {
          $content.fadeIn(300);
          entry("enter", direction);
          checkWhere($class);
        }, 200);
      });
      setTimeout(function () {
        $("#glassmorphism").removeClass().addClass($class);
        entry("exit", direction);
      }, 200);
    },
  });
  //init stuff
  appendContent("home");
  checkWhere("home");
  $("#glassmorphism").addClass("home");
});

function appendContent(html) {
  let append = "";
  switch (html) {
    case "home":
      append = `<div class="avatar-container">\
        <div class="rot-bg-front"></div>\
        <div class="img"></div>\
        <div class="rot-bg"></div>\
        </div>\
        <h4>Hello There</h4>\
        <div class="title-container"><h2>I Bring Designs to&nbsp;</h2><h1>Life</h1></div>\
        <ul class="fields"><li>#<span class="typing"></span></li></ul>\
        <p>I have worked at National University of Singapore for 3 years as a visual designer. I mainly worked with software engineers to\
        create high fidelity mobile and desktop app mockups for commercial and government entities.</p>\
        <ul class="companies"><li><object data="./images/logos_nus.svg"></object></li>\
        <li><object data="./images/logos_red-jasper.svg"></object></li>\
        <li><object data="./images/logos_mindef.svg"></object></li>\
        <li><object data="./images/logos_caas.svg"></object></li>\
        </ul>`;
      break;
    case "work":
      append = `<h4>UI/UX Projects</h4>\
        <p>My design scope mainly involved designing marketing and publicity material\
        such as web, mobile/desktop app, pitch deck and video productions. Apart from internal\
        collaborations with faculties within the university, we also work with commercial businesses to\
        improve their business operations.</p>\
        <ul class="projects">\
        <li><div onclick="openLinks('alim', 'fleet-management/v3/timeline.html')" class="project-thumbnails"id="fleet"></div></li>\
        <li><div onclick="openLinks('alim', 'nus-suite')" class="project-thumbnails" id="suite"></div></li>\
        <li><div onclick="openLinks('alim', 'retail-app')" class="project-thumbnails" id="retail"></div></li>\
        <li><div onclick="openLinks('alim', 'exercise-app')" class="project-thumbnails" id="fit"></div></li>\
        </ul>\
        <div onclick="openLinks('behance', 'deadfiesta')" class="view-more"><div class="be-container"><i class="fab fa-behance"></i></div>\
        <h3>View more projects</h3><i class="fas fa-angle-right"></i></div>`;
      break;
    case "animated":
      append = `<h4>Animated Projects</h4>\
        <p>One of the most important functions of a logo is to create and promote brand awareness. We\
        believe in animating our logos as much as possible so they appear more memorable and more\
        recognizable to potential investors/customers in the near future. I also create short animated\
        films for education.</p>\
        <ul class="animated">\
        <li><div onclick="openLinks('alim', '/aarc')" class="animated-logo-container">\
        <video playsinline autoplay muted loop data-keepplaying poster="./images/logo-aarc.png"\
        src="./videos/aarc-anim.webm" type="video/ogg"></video>\
        </div></li>\
        <li><div onclick="openLinks('alim','/bloundhound/logo')" class="animated-logo-container">\
        <video playsinline autoplay muted loop data-keepplaying\
        poster="./images/logo-bloundhound.png" src="./videos/bloundhound-anim.webm"\
        type="video/ogg"></video></div></li>\
        <li><div onclick="openLinks('youtube','/watch?v=b5mnz5T1e58&')" class="animated-logo-container"><video playsinline autoplay muted loop data-keepplaying\
        poster="./images/logo-python.png" src="./videos/python-anim.webm"\
        type="video/ogg"></video></div></li>\
        <li><div onclick="openLinks('youtube','/watch?v=ZLbDM0nE3eY&')" class="animated-logo-container"><video playsinline autoplay muted loop data-keepplaying\
        poster="./images/logo-ascended.png" src="./videos/ascended-logo.webm" type="video/ogg"></video></div></li>\
        </ul>\
        <div class="view-more" onclick="openLinks('youtube', '/channel/UCzFVQCspETObQPbCkpYsxHw')">\
        <div class="yt-container"><i class="fab fa-youtube"></i></div>\
        <h3>See animated videos here</h3><i class="fas fa-angle-right"></i>\
        </div>`;
      break;
    case "frontend":
      append = `<h4>Frontend Web</h4>\
      <p>My role as a designer equipped with the fundamental knowledge of front-end web development gives me a better understanding of the possibilities, limitations, and the tradeoffs.</p>\
      <ul class="projects">\
      <li><div onclick="openLinks('aarc', '')" data-bg="aarc-web" class="web-thumbnails" id="aarc"></div></li>\
      <li><div onclick="openLinks('alim', 'fleet-management/v3')" data-bg="fleet-web" class="web-thumbnails" id="fleetmgmt"></div></li>\
      <li><div onclick="openLinks('lim', '')" class="web-thumbnails" data-bg="lim-web" id="limandrew"></div></li>\
      <li><div onclick="openLinks('alim', 'indoor-navigation')" data-bg="indoor-web" class="web-thumbnails" id="indoor"></div></li>\
      </ul>\
      <div class="view-more" onclick="openLinks('self', 'skootar/')">\
      <div class="fa-container"><i class="fas fa-mobile-alt"></i></div>\
      <h3>See my submission here</h3><i class="fas fa-angle-right"></i>\
      </div>`;
      break;
    case "pctech":
      append = `<h4>PC Hareware & Tech</h4>\
      <p>When I'm not working, I like to keep up with PC hardware and tech related news. I enjoy PC building and I've probably spent more time than I should tinkering with my PC from time to time. As a designer, we're all fascinated about the beauty of colors and this is what the mainstream PC culture is all about today: <span class="glorious">The Glorious RGB.</span></p>\
      <ul class="projects">\
      <li><div class="project-thumbnails"><video playsinline autoplay muted loop data-keepplaying\
      src="./videos/setup-02.MP4"\
      type="video/ogg"></video></div></li>\
      <li><div class="project-thumbnails" id="setup02"></div></li>\
      <li><div class="project-thumbnails" id="setup03"></div></li>\
      <li><div class="project-thumbnails"><video playsinline autoplay muted loop data-keepplaying\
      src="./videos/setup-loop.mp4"\
      type="video/ogg"></video></div></li>\
      </ul>\
      <div class="view-more" onclick="openLinks('self', 'h210i/')">\
      <div class="fa-container"><i class="fas fa-desktop"></i></div>\
      <h3>Check out my NZXT build here</h3><i class="fas fa-angle-right"></i>\
      </div>`;
      break;
  }

  $("#content").html(append);
}

function openLinks(server, what) {
  let domain = "";

  switch (server) {
    case "alim":
      domain = "https://alim.algorithmexchange.com/";
      break;
    case "behance":
      domain = "https://www.behance.net/";
      break;
    case "youtube":
      domain = "https://www.youtube.com/";
      break;
    case "aarc":
      domain = "https://aseanarc.org/";
      break;
    case "lim":
      domain = "https://www.limandrew.org/";
      break;
    case "self":
      domain = "https://deadfiesta.studio/";
      break;
    case "others":
      domain = server;
  }

  window.open(domain + what, "_blank");
}

const controller = new ScrollMagic.Controller();
const fader = document.querySelector(".black");

$(".black").each(function (i) {
  let $fader = $(this);
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    duration: $fader.height(),
  })
    .setClassToggle(this, "faded")
    .addTo(controller);
  // .addIndicators()
});

var init = $(".init-container");
var initfade = gsap.fromTo(
  init,
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.7,
    ease: Power4.easeInOut,
    onComplete: removeInit,
  }
);

function removeInit() {
  $(".init-container").css("display", "none");
}

function toggleGlass(e) {
  e.stopPropagation();
  $glass = $(".glass-container");
  $glass.toggleClass("hide");
  $glass.hasClass("hide") ? toFade("y") : toFade("n");

  function toFade(response) {
    $icon = $(".icon");
    $content = $("#content-state");
    $multiply = $(".multiply-container");
    $glass = $("#glassmorphism");
    if (response == "y") {
      $content.fadeOut();
      $glass.attr("data-hidden", "true");
      glassmorphism("down");
    } else {
      $content.fadeIn();
      $glass.attr("data-hidden", "false");
      glassmorphism("up");
    }
    $icon.toggleClass("up");
    $multiply.toggleClass("faded").toggleClass("passthrough");
  }
}

function entry(going, direction) {
  $content = $("#content");
  var start, end;
  const px = 50;

  if (going == "enter") {
    switch (direction) {
      case "up":
        start = px * -1;
        end = "0";
        break;
      case "down":
        start = px;
        end = "0";
        break;
    }
  } else {
    switch (direction) {
      case "up":
        start = "0";
        end = px;
        break;
      case "down":
        start = "0";
        end = px * -1;
        break;
    }
  }

  let anim = gsap.fromTo(
    $content,
    {
      y: start,
    },
    {
      y: end,
      duration: 0.6,
      ease: "power3.out",
    }
  );
}

function glassmorphism(direction) {
  var end;
  $glassmorphism = $("#glassmorphism");
  direction == "down" ? (end = "110%") : (end = "0");
  let anim = gsap.to($glassmorphism, {
    y: end,
    duration: 1,
    ease: "elastic.out(.5, .45)",
  });
}

function checkWhere(where) {
  switch (where) {
    case "home":
      //typedjs
      var typed = new Typed(".typing", {
        strings: ["ui/ux", "animation", "frontend-web"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 2500,
        smartBackspace: true,
        loop: true,
      });
      break;
    case "frontend":
      $(".web-thumbnails").hover(
        function () {
          var $what = $(this).attr("data-bg");
          $("#" + $what).fadeIn("fast");
        },
        function () {
          var $web = $(".website-bg");
          $web.fadeOut();
        }
      );
      break;
  }
}
