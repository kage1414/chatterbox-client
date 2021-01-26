var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }

};

let compiled = _.template(
  '<div class = "message">' +
    '<div class = "username">' +
      '<b>' +
        '<%= username %>' +
        ': ' +
      '</b>' +
      '<span class = "text">' +
        '<%= text %>' +
        ' ' +
      '</span>' +
      '<em class = "createdAt">' +
        '<small>' +
          '<%= createdAt %>' +
        '</small>' +
      '</em>' +
    '</div>' +
   '</div>');

$.getJSON(Parse.server,
  function(data) {
    let i, html = "";
    for (i = 0; i < data.results.length; i++) {
      html += compiled(data.results[i]);
    }
    $('#chats').append(html);
  });

$(document).on("click", ".objectId", function() {
  alert('object added');
});
