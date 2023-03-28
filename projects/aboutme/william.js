var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



//play button using jquery 

var playList = 1;

$( "#play-left" ).click(function() {
    playList--;
    if (playList<1) {
        playList = 4;
    }


    if (playList==1) {

        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project1.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 1</h1>`);

    }

      if (playList==2) {

          $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
          <iframe
            class="video"
            src="./Project2.mp4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen></iframe>
        </div>` );
        $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 2</h1>`);

      }

      if (playList==3) {

        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project3.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 3</h1>`);

      }
      
      if (playList==4) {

        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project4.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 4</h1>`);

    }

  });


  $( "#play-right" ).click(function() {
      playList++;
      if (playList>4) {
          playList = 1;
      }

      if (playList==1) {
        
        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project1.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 1</h1>`);
    }

      if (playList==2) {
      
          $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
          <iframe
            class="video"
            src="./Project2.mp4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
            allowfullscreen></iframe>
        </div>` );
            
          $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 2</h1>`);
      }

      if (playList==3) {
   
        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project3.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 3</h1>`);

      }
      
      if (playList==4) {
   
        $( "#video-onscreen" ).replaceWith( `    <div class="col" id="video-onscreen">
        <iframe
          class="video"
          src="./Project4.mp4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowfullscreen></iframe>
      </div>` );
      $("#video-title").replaceWith(`<h1 class="display-6" id="video-title">Project 4</h1>`);

    }
      
  });
