$(function () {
  var tooltips = [];
  $(".section").each(function () {
    tooltips.push($(this).attr("title"));
  });
  /**
   * FullpageJs
   */
  $("#fullpage").fullpage({
    //options here
    licenseKey: "YOUR_KEY_HERE",
    navigation: true,
    // navigationTooltips: tooltips,
    afterRender: () => {
      gsap.to("nav", {
        yPercent: -100,
      });
      $("figure").fadeIn("slow");
    },
    onLeave: (origin, destination, direction) => {
      $current = origin.item;
      $next = destination.item;
      $destination = destination.index;
      $last = destination.isLast;
      $imgurl = "";
      $cat = $(destination.item).attr("cat");
      $end = $(destination.item).attr("title");
      $layout = $($($next).find('[data-type="layout"')).attr("class");
      ($destination === 0 ? $("figure").fadeIn() : $("figure").fadeOut() )
      gsap.to($current, {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to($next, {
        opacity: 1,
        duration: 0.3,
      });

      /**
       * Coverpage background toggle
       */
      switch ($end) {
        case "introduction":
        case "started":
        case "chatlist":
        case "chatroom":
        case "features":
          $("footer").css("background-image", "url(./images/" + $end + ".jpg)");
          $("footer").fadeIn(300);
          break;
        case "end":
          animItem.goToAndPlay(0, true);
          break;
        default:
          $("footer").fadeOut();
      }

      /**
       * Nav toggle
       */
      switch ($cat) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
          $("nav .menu li").removeClass("active");
          $("nav .menu li:nth-child(" + $cat + ")").toggleClass("active");
          break;
        default:
          $("nav .menu li").removeClass("active");
      }

      /**
       * Layout animation
       */
      let $direct = '';
      (direction == "down" ? $direct = 1 : $direct = -1);

      let x1 = 50 * $direct;
      let x2 = x1 * -1 * $direct;
      let duration = 0.5;
      let easing = "power2.inOut";

      $layout = $($next).find("[data-type=layout").attr("class");

      switch ($layout) {
        case "split":
        case "grid":
          let nf = $($next).find("[data-type=layout").children().first();
          let ns = $($next).find("[data-type=layout").children().eq(1);
          gsap.from(nf, {
            opacity: 0,
            yPercent: x2,
            ease: easing,
            duration: duration,
          });
          gsap.from(ns, {
            opacity: 0,
            yPercent: x1,
            ease: easing,
            duration: duration,
          });
          break;
        case "half":
          let ul = $($next).find("[data-type=layout").children().eq(1);
          let li = $(ul[0].children)
          gsap.from(ul, {
            opacity: 0,
            yPercent: 100 * $direct,
            duration: duration,
            easing: easing,
          })
          break;
        default:
          gsap.to($next, {
            opacity: 1,
            duration: .3,
            ease: easing,
          });
          gsap.to($current, {
            opacity: 0,
            duration: .3,
          })
          break;
      }

      /**
       * Play/Pause Video
       */
      $video = "#" + $($next).find("video").attr("id");
      $($video).trigger("play");

      /**
       * End lottie start
       */
      // ($end == "end" ? animItem.goToAndPlay(0, true) : animItem.goToAndStop(0))

      /**
       * Toggle Quotes Effect
       */
      $dark = $($next).find("section, header").attr("dark-mode");

      const original = getComputedStyle(document.querySelector("body"));

      let c = "";
      let bg = "";
      let y = "";
      let d = "";

      if ($dark == "true") {
        c = "#fff";
        bg = "#000";
        y = "-100";
        d = 0;
      } else {
        c = original.color;
        bg = original.backgroundColor;
        y = "0";
        d = 1;
      }

      gsap.to("main", {
        color: c,
        backgroundColor: bg,
        ease: "expo.inOut",
      });

      if ($destination > 0) {
        gsap.to("nav", {
          yPercent: y,
          ease: "expo.inOut",
        });
      } else {
        gsap.to("nav", {
          yPercent: -100,
          ease: "expo.inOut",
        });
      }

      /**
       * Scroller Anim
       */
      $total = $(".section").length;
      $index = destination.index;
      $scrollPercent = $index / ($total - 1);
      // $(".scroll").css("transform", "scaleX(" + $scrollPercent + ")");
      if ($index == 0) {
        gsap.to(".scroll", {
          scaleX: 1,
          ease: "expo.inOut",
          duration: 1,
        });
      } else {
        gsap.to(".scroll", {
          scaleX: $scrollPercent,
          ease: "power4.out",
          duration: 0.6,
        });
      }
    },
  });

  $(".mobile-nav").click(function () {
    $("nav").toggleClass("toggle");
    $(".mobile-nav").toggleClass("toggle");
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);
});

/**
 * li hovers & unhovers
 */
$("ul.content li").hover(function () {
  $("ul.content li").toggleClass("unhover");
  $(this).removeClass("unhover").toggleClass("hover");
});

/**
 *
 * Navclick swap
 */

function navclick(what) {
  $where = $(what).attr("data-link");
  fullpage_api.moveTo($where);
}

/**Open Links Litty */

/**Create unique case for external link
 * For images and videos id = filename
 * Differentiate between formats i.e. jpg and png
 */

function openme(data) {
  $this = data;
  $url = "";
  $file = "";
  $type = "";
  $obj = $(data).attr("data-link");
  switch ($obj) {
    case "loading-animation":
      $url =
        "https://medium.com/flawless-app-stories/everything-you-need-to-know-about-loading-animations-10db7f9b61e";
      window.open($url);
      return;
    case "ui-design-trend":
      $url =
        "https://uxdesign.cc/10-newest-and-promising-ui-design-trends-929562b25ad6";
      window.open($url);
      return;
    case "discord-growth-story":
      $url = "https://clickup.com/blog/discord-growth-story/";
      window.open($url);
      return;
    case "guide-ui-design-trend":
      $url =
        "https://uxdesign.cc/a-guide-of-ui-design-trends-for-2021-637ac038cb99";
      window.open($url);
      return;
    case "search-interface":
      $url =
        "https://uxplanet.org/search-interface-20-things-to-consider-4b1466e98881";
      window.open($url);
      return;
    case "product-tour":
      $url = "https://www.appcues.com/blog/product-tours-ui-patterns";
      window.open($url);
      return;
    case "typing-awareness":
      $url =
        "https://www.bustle.com/articles/39042-8-times-the-typing-awareness-indicator-is-the-worst";
      window.open($url);
      return;
    case "rework":
      $url =
        "https://www.figma.com/file/jv3r2zX2Mk4JsHOz34mdYU/SeaTalk-Experience?node-id=0%3A1";
      window.open($url);
      return;
    default:
      $type = $($this).attr("data-type");
      $file = $($this).attr("id");
      switch ($type) {
        case "image/jpg":
          $url = `images/${$file}.jpg`;
          break;
        case "image/png":
          $url = `images/${$file}.png`;
          break;
        case "image/gif":
          $url = `images/${$file}.gif`;
          break;
        case "video/mp4":
          $url = `videos/${$file}.mp4`;
          break;
        case "video/webm":
          $url = `html/${$file}.html`;
          break;
      }
      break;
  }
  var lightbox = lity($url);
}

/**
 * Lottie
 */
const svgContainer = document.getElementById("confetti");
const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets9.lottiefiles.com/packages/lf20_REOnx3.json",
});
animItem.addEventListener("complete", () => {
  animItem.goToAndStop(0);
});
