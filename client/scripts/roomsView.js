var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    Parse.readAll((data) => {
      let results = data.results;
      for (item of results) {
        if (item.roomname) {
          Rooms[item.roomname.trim().toLowerCase()] = item.roomname.trim();
        }
      }
      for (room in Rooms) {
        this.renderRoom(Rooms[room]);
      }
    });
    $('select').change(RoomsView.filterRooms);
    this.$button.on('click', RoomsView.showTextInput);
  },

  renderRoom: function (room) {
    this.$select.append(`<option class=roomname value=${room}>${room}</option>`);
  },

  filterRooms: function (event) {
    //filter out chats that do not have roomname
    var roomname = event.target.value;
    var allChats = document.querySelectorAll('.chat');
    console.log(allChats);
    if (roomname === 'All') {
      for (chat of allChats) {
        $(chat).show();
      }
    } else {
      for (chat of allChats) {
        if (chat.classList !== undefined) {
          if (chat.classList.contains(roomname)) {
            $(chat).show();
          } else {
            $(chat).hide();
          }
        }
      }
    }
  },

  showTextInput: function(event) {
    var newRoom = prompt('Make a new room!', 'Enter Room Name...');
    RoomsView.renderRoom(newRoom);
  }
};
