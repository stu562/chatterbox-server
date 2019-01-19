var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = decodeURI(window.location.search.substr(10));


    App.fetch(App.stopSpinner);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();

  },

  //use messages.js to store messages and 
  //allow us to use App.fetch

  fetch: function (callback = () => { }) {
    Parse.readAll(({ results }) => {
      // window.dataArray = results;
      //ignores messages that have been seen
      for (var i = results.length - 1; i >= 0; i--) {
        var msgObj = results[i];
        if (msgObj.username && msgObj.text) {
          if (!Messages.objectIdSeen.includes(msgObj.objectId)) {
            Messages.objectIdSeen.push(msgObj.objectId);
            MessagesView.renderMessage(msgObj);
          }
        }
      }
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
