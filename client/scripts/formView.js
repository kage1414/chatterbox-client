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
    // Stop the browser from submitting the form
    console.log('this is event', event);
    event.preventDefault();
    let name = App.username;
    console.log(name);
    let $text = $('#message').val();
    console.log($text);
    let $room = $('#options').val();
    if ($room === 'All Rooms') {
      $room = '';
    }
    console.log($room);
    let messageObject = {
      username: name,
      text: $text,
      roomname: $room
    };
    Parse.create(messageObject);

    // console.log('click!');
    // console.log(Messages);
    // let $message = $('#message');
    // console.log($message);
    // Parse.create(Messages);
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