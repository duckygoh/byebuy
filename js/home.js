$(document).ready(function() {
  function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("ads");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body .ad-title h5");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }

  $(document).ready(function() {

    $(".filter-button").click(function() {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      } else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

      }
    });

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");

  });

  $(document).ready(function() {
    $('#ads').delay(2000).fadeIn(0);
  });
});
