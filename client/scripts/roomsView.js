var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  compiled: function (roomName) {
    let template = '<option value = "' + roomName + '">' + roomName + '</option>';
    return template;
  },

  initialize: function() {
    RoomsView.render();
  },

  render: function(data) {
    if (data !== undefined) {
      for (let i = 0; i < data.results.length; i++) {
        let currentRoom = data.results[i].roomname;
        // console.log(currentRoom);
        if (currentRoom && Rooms[currentRoom] === undefined) {
          RoomsView.renderRoom(currentRoom);
          Rooms[currentRoom] = true;
        }
      }
    }
  },

  renderRoom: function (roomName) {
    if (Rooms.roomName === undefined) {
      let roomHTML = RoomsView.compiled(roomName);
      $('#rooms select').append(roomHTML);
    }
  }

};
