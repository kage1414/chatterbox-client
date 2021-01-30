var Friends = {

  currentFriends: {},

  initialize: function () {
    $('#chats').on('click', '.username', Friends.toggleStatus);
  },

  toggleStatus: function (event) {
    let $username = $(this).text();
    $username = $username.slice(0, $username.length - 1);
    if (Friends.currentFriends[$username] === undefined) {
      Friends.currentFriends[$username] = true;
    } else {
      delete Friends.currentFriends[$username];
    }
  },

  boldFriends: function () {
    let $friend = $('.username').val();
    console.log($friend);
  }
};


