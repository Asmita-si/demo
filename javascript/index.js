alert("welcome to my site");

$(".ani").hover(
  function () {
    $(this).addClass("animate__heartBeat");
  },
  function () {
    $(this).removeClass("animate__heartBeat");
  }
);