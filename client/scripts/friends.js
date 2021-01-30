var Friends = {

  currentFriends: {},

  initialize: function () {
    $('#chats').on('click', '.username', Friends.toggleStatus);
    // console.log('init');
  },

  toggleStatus: function (event) {
    // console.log('click!');
    // console.log('this is this', this);
    let $username = $(this).text();
    $username = $username.slice(0, $username.length - 1);
    console.log('this is username', $username);
    if (Friends.currentFriends[$username] === undefined) {
      Friends.currentFriends[$username] = true;
    } else {
      delete Friends.currentFriends[$username];
    }
  }
};


