const greeting = document.querySelector("#greeting");


// Setting up timeline and parameters inheritance
var timeline = anime.timeline({
    easing: 'easeOutExpo',
    loop: true
})

// Adding animations

timeline.add({
    targets: '.eDot',
    translateX: [
      { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
      { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
    ],
    scale: [
      { value: [0, 1], duration: 200, easing: 'easeOutBack' },
      { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
      { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
      { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
    ],
    offset: 0
  })