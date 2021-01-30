var FormView = {

  $form: $('form'),

  $button: $('#refresh'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$button.on('click', FormView.handleRefresh);
    FormView.handleRefresh();
    $('#main #options').on('change', FormView.handleRefresh);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    let name = App.username;

    let $text = $('#message').val();
    let $room = $('#options').val();
    if ($room === 'All Rooms') {
      $room = '';
    }

    let messageObject = {
      username: name,
      text: $text,
      roomname: $room
    };
    Parse.create(messageObject);
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleRefresh: function (event) {
    App.fetch();
  }

};