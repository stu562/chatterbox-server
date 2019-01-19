var MessagesView = {

  $chats: $('#chats'),
  $username: $('div.username'),

  initialize: function () {
    this.$chats.on('click', '.username', MessagesView.addUser);
  },

  renderMessage: function (message) {
    this.$chats.prepend(MessageView.render(message));
  },


  addUser: function (event) {

    var user = event.currentTarget;
    var $user = $(user);
    var username = decodeURI($user.data().user);
    Friends[username] = username;
    var list = document.querySelectorAll(`[data-user="${username}"]`);
    for (user of list) {
      $(user).parent().css({ 'border': '3px dashed black' });
    }
    console.log(decodeURI(username), 'added as friend!');
  }
  //use selector on chat field and then listen to the .username
  //$('#chat').on('click', '.username', ()=> {add friend});
};