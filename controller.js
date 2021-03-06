
// On page load
(function() {
    var testPeriodStart     = new Date(Date.UTC(2020, 11, 1, 04, 48, 0));
    var testPeriodEnd       = new Date(Date.UTC(2020, 11, 1, 05, 30, 0));

    var mondayShowStart     = new Date(Date.UTC(2020, 11, 1, 18, 50));
    var mondayShowEnd       = new Date(Date.UTC(2020, 11, 1, 20, 20));

    var tuesdayShowStart    = new Date(Date.UTC(2020, 11, 2, 18, 50));
    var tuesdayShowEnd      = new Date(Date.UTC(2020, 11, 2, 20, 20));

    var wednesdayShowStart  = new Date(Date.UTC(2020, 11, 3, 18, 50));
    var wednesdayShowEnd    = new Date(Date.UTC(2020, 11, 3, 20, 20));

    setInterval(function() {
        console.log("Scheduler running")

        var now = Date.now();

        var duringTest      = (now > testPeriodStart && now < testPeriodEnd);
        var duringMonday    = (now > mondayShowStart && now < mondayShowEnd);
        var duringTuesday   = (now > tuesdayShowStart && now < tuesdayShowEnd)
        var duringWednesday = (now > wednesdayShowStart && now < wednesdayShowEnd)

        // During one of the shows?
        if  (duringTest || duringMonday || duringTuesday || duringWednesday) {
            // This runs every few seconds during the show
            document.getElementById("countdown-container").style.visibility='hidden';
            document.getElementById("video-container").style.visibility='visible';

            console.log("Currently in show")
        }

        // Not during a show?
        else {
            document.getElementById("countdown-container").style.visibility='visible';
            document.getElementById("video-container").style.visibility='hidden';

            console.log("Not in show")
        }
    }, 3000);
    
})();