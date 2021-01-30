var MessagesView = {

  $chats: $('#chats'),

  compiled: function (message) {
    if (message.username === undefined) {
      message['username'] = 'anonymous';
    }
    if (message.text === undefined) {
      message['text'] = '';
    }
    let template = _.template(
      '<div class = "message">' +
          '<a class = "username" value = "<%- username %>">' +
            '<%- username %>' +
            ':' +
          '</a>' +
          '<span class = "text">' +
            '<%- text %>' +
            ' ' +
          '</span>' +
      '</div>');

    let friendTemplate = _.template(
      '<div class = "message">' +
          '<b class = "username" value = "<%- username %>">' +
            '<%- username %>' +
            ':' +
          '</b>' +
          '<span class = "text">' +
            '<%- text %>' +
            ' ' +
          '</span>' +
      '</div>');
    if (Friends.currentFriends[message.username]) {
      return friendTemplate(message);
    } else {
      return template(message);
    }
  },

  initialize: function() {
    MessagesView.render();
  },

  render: function(data) {
    $('#chats').empty();
    if (data !== undefined) {
      let $roomname = $('#options option:selected').text();
      for (let i = 0; i < data.results.length; i++) {
        if (RoomsView.roomNameFormat(data.results[i].roomname) === $roomname || $roomname === 'All Rooms') {
          MessagesView.renderMessage(data.results[i]);
        }
      }
    }
  },

  renderMessage: function(message) {
    let html = '';
    html += MessagesView.compiled(message);
    $('#chats').append(html);
  }

};