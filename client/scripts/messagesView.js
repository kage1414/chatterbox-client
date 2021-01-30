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
    return template(message);
  },

  initialize: function() {
    MessagesView.render();
  },

  render: function(data) {
    $('#chats').empty();
    console.log('data in render', data);
    if (data !== undefined) {
      for (let i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }

      // $(document).on("click", ".objectId", function() {
      //   alert('object added');
      // });
    }
  },

  renderMessage: function(message) {
    let html = '';
    html += MessagesView.compiled(message);
    $('#chats').append(html);
  }

};