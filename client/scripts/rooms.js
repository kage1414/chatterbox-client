var Rooms = {

  initialize: function() {
    $('#rooms').on('click', Rooms.add);
  },

  add: function() {
    let newRoom = prompt('Please add a room name:');
    RoomsView.renderRoom(newRoom);
  },

  storage: {}

};