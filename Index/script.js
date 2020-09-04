var numberRounds = 0;
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid rgb(255, 99, 228) }";
var TxtRotate = function(el, toRotate, period) {
    if(numberRounds <= 1) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
};
TxtRotate.prototype.tick = function() {
    if(numberRounds === 1 && this.isDeleting) {
        document.body.removeChild(css);

        var newcss = document.createElement("style");
        newcss.type = "text/css";
        newcss.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #292a31 }";
        document.body.appendChild(newcss);
    }
    else {
        if(numberRounds === 1){
            document.getElementById("Mission-Hacks-Version").classList.add("green-color");
        }
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            numberRounds = this.loopNum;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            if(numberRounds <= 1) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    }
    // INJECT CSS

    document.body.appendChild(css);

};

function removeLine1(){
    document.getElementById("border").classList.remove("code-type-border");
}
function removeLine2(){
    document.getElementById("border-2").classList.remove("code-type-border");
}
setTimeout(removeLine1, 4500);

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#why');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                document.getElementById("why-title").classList.remove("white-text");
                element2.classList.add('why');
                element2.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#us');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {
                document.getElementById("why-title").classList.remove("white-text");
                element2.classList.add('us');
                element2.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();


(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.cd-timeline-content');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -50 ) {
                element2.classList.add('fade');
                element2.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();


(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.faq-li');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {

                $('.faq-li').addClass('faq-animate');
                $('.faq-l-c').addClass('up-animate')
                $('.faq-li').removeClass("hidden")
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();


(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.hr');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -100 ) {
                element2.classList.add('hr-animate');
                element2.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.place-1');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                element2.classList.add('first');
                $('.place-2').addClass('second')
                $('.place-3').addClass('third')

            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
