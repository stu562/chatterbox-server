var Parse = {

  server: `http://127.0.0.1:3000/classes/messages/`,

  create: function (message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create messages', error);
      }
    });
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      // data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to read messages', error);
      }
    });
  }

};