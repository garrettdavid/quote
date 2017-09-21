$(document).ready(function() {
  getQuote();
  $('#quoteBtn').click(getQuote);
});

function getQuote() {
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=callback',
    dataType: 'jsonp',
    jsonpCallback: 'callback',
  }).done(function(response) {
    $('.quote').text(response.quoteText);
    $('.author').text(response.quoteAuthor);
    $('#link').attr('href', response.quoteLink);

    var tweetUrl = $('#tweet').attr('href', function() {
      return 'https://twitter.com/intent/tweet?text=' + response.quoteText + ' -' + response.quoteAuthor;
    });
  });
};
