const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    if (targetCount == 1.5) {
      const startingCount = Number(counter.innerHTML);

      const num = targetCount / 3.1;
      const incr = num.toFixed(1);

      if (startingCount < targetCount) {
        counter.innerHTML = startingCount + incr;

        setTimeout(updateCounter, 250);
      } else {
        counter.innerHTML = targetCount;
      }
    } else {
      const startingCount = Number(counter.innerHTML);

      const incr = targetCount / 10;

      if (startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;

        setTimeout(updateCounter, 150);
      } else {
        counter.innerHTML = targetCount;
      }
    }
  };
  updateCounter();
});

const playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

var $carousel = $(".slider");

var settings = {
  dots: false,
  arrows: false,
  slide: ".slick-slideshow__slide",
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "60px",
  infinite: false,
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  // var visibleSlides = $carousel.find(
  //   '.slick-slideshow__slide[aria-hidden="false"]'
  // );
  //Make sure all of the visible slides have an opacity of 1
  // $(visibleSlides).each(function () {
  //   $(this).css("opacity", 1);
  // });
  //Set the opacity of the first and last partial slides.
  // $(visibleSlides).first().prev().css("opacity", 0);
}

$carousel.slick(settings);
$carousel.slick("slickGoTo", 1);
setSlideVisibility();

$carousel.on("afterChange", function () {
  setSlideVisibility();
});

$(".slider").on("afterChange", function (event, slick, currentSlide) {
  const customSlide = document.querySelectorAll(".slick-slideshow__slide");

  console.log(currentSlide);

  // for (let i = 0; i < customSlide.length; i++) {
  //   const ele = document.getElementsByClassName(customSlide[i].classList[0])[0];
  //   ele.style.backgroundColor = "white";
  //   ele.style.color = "#034446";
  // }
  // let idx;
  // if (currentSlide == 1) {
  //   idx = 20;
  // } else if (currentSlide == 2) {
  //   idx = 21;
  // } else if (currentSlide == 3) {
  //   idx = 22;
  // } else if (currentSlide == 4) {
  //   idx = 23;
  // }
  // const currCustomSlide = customSlide[currentSlide].classList;
  // const currentClass = currCustomSlide[0];
  // const ele1 =
  //   document.getElementsByClassName(currentClass)[0].children[0].classList[0];
  // console.log(document.getElementsByClassName(ele1)[idx].children[1]);

  // document.getElementsByClassName(ele1)[idx].children[1].style.backgroundColor =
  //   "#F1612C";
  // document.getElementsByClassName(ele1)[idx].children[1].style.color =
  //   "#F5D77F";
});
