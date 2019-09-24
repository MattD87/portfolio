const portfolio = {};

//typed JS function to be rendered to screen
portfolio.typed = new Typed("#typed", {
  strings: [
    "",
    // "^2000Javacsirpt ^300",
    // "Javascript",
    "Lover of CSS.",
    "Lover of CSS. Yeah, I said it.^2000",
    "Javascript Enthusiast.^2000",
    "JAMstack.",
    "JAMstack. mmmm jam.^300",
    "JAMstack aficionado.^2000",
    "Your next developer.^6000"

    // "^2000Javacsirpt ^300",
    // "Javascript",
    // "Javascript Enthusiast.^2000",
    // "Lover of CSS.",
    // "Lover of CSS. Yeah, I said it.^2000",
    // "Your next developer.^5000"
  ],
  smartBackspace: true,
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 300,
  loop: true
});

// Add smooth scrolling to all links
portfolio.animation = () => {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
      $(".projectContainer h3").addClass("animated fadeInDownBig");
    }
  });
};

portfolio.init = () => {
  portfolio.animation();
};

$(function() {
  portfolio.init();
});
