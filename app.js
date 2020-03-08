var timeline = anime.timeline ();

timeline.add ({
    targets: '#eDot',
    translateX: 60,
    translateY: 30,
    duration: 0,
    delay: 400
})


timeline.add ({
    targets: '#eDot',
    delay: 300,
    translateY: 100,
    easing: 'easeOutBounce'
})

timeline.add ({
    targets: '#eDot',
    scale: 15
})

timeline.add ({
    targets: '#eDot',
    translateY: -10,
    translateX: -2,
    easing: 'easeOutElastic(1, .8)',
})

    // adding animation in the timeline
timeline.add({
    targets: '#eDot',
    duration: 1500,
    scale: 500
})