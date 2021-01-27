var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    let compiled = _.template(
      '<div class = "message">' +
        '<div class = "username">' +
          '<b>' +
            '<%- username %>' +
            ': ' +
          '</b>' +
          '<span class = "text">' +
            '<%- text %>' +
            ' ' +
          '</span>' +
          '<em class = "createdAt">' +
            '<small>' +
              '<%- createdAt %>' +
            '</small>' +
          '</em>' +
        '</div>' +
       '</div>');

    // Rooms.$appendRooms();

    $.getJSON(Parse.server,
      function(data) {
        console.log(data);
        let i, html = "";
        for (i = 0; i < data.results.length; i++) {
          html += compiled(data.results[i]);
        }
        $('#chats').append(html);
      });

    $(document).on("click", ".objectId", function() {
      alert('object added');
    });
  }

};