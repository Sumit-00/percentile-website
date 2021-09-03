// $(".carousel .carousel-inner").swipe({
//   swipeLeft: function (event, direction, distance, duration, fingerCount) {
//     this.parent().carousel("next");
//   },
//   swipeRight: function () {
//     this.parent().carousel("prev");
//   },
//   threshold: 0,
//   tap: function (event, target) {
//     window.location = $(this).find(".carousel-item.active a").attr("href");
//   },
//   excludedElements: "label, button, input, select, textarea, .noSwipe",
// });

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

        setTimeout(updateCounter, 40);
      } else {
        counter.innerHTML = targetCount;
      }
    } else {
      const startingCount = Number(counter.innerHTML);

      const incr = targetCount / 10;

      if (startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;

        setTimeout(updateCounter, 40);
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
