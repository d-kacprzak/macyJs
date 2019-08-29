const masonary = new Macy({
    container: '.container',
    mobileFirs: true,
    margin: {
        x: 20,
        y: 20
    },
    breakAt: {
        568: {
            margin: {
                x: 10,
                y: 10
            },
            columns: 1
        },
        768: {
            margin: {
                x: 10,
                y: 10
            },
            columns: 2
        },
        992: 3,
        1200: 4
    }
});

masonary.addEventListener('resize', function () {
    masonary.recalculate(true, true);
});



