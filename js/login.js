$(document).ready(function() {
  $('#login-btn').on('click', function(event) {
    // disable button
    $(this).prop("disabled", true);

    // add spinner to button for some time
    $(this).html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Logging in...');

    var _self = $(this);

    setTimeout(function() {
      _self.html('Success');
    }, 3000);

    setTimeout(function() {
      window.location.href = "home.html";
    }, 6000);
  });
});
