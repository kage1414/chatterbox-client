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

  roomNameFormat: function(roomname) {
    if (roomname) {
      let trimmedRoomName = roomname.trim();
      let upcaseRoomName = trimmedRoomName[0].toUpperCase() + trimmedRoomName.slice(1).toLowerCase();
      return upcaseRoomName;
    } else {
      return undefined;
    }
  },

  render: function(data) {
    if (data !== undefined) {
      $('#allrooms select').empty();
      for (let i = 0; i < data.results.length; i++) {
        let currentRoom = data.results[i].roomname;
        if (currentRoom) {
          let upcaseRoomName = RoomsView.roomNameFormat(currentRoom);
          Rooms.storage[upcaseRoomName] = true;
        }
      }
      for (let key in Rooms.storage) {
        RoomsView.renderRoom(key);
      }
      let allRoomsHTML = '<option value = "All Rooms" selected >All Rooms</option>';
      $('#allrooms select').prepend(allRoomsHTML);
    }
  },

  renderRoom: function (roomName) {
    // debugger;
    // roomName = roomName.replace(/\n/g, '');
    if (Rooms.storage.roomName === undefined) {
      let roomHTML = RoomsView.compiled(roomName);
      $('#allrooms select').append(roomHTML);
    }
  }

};
