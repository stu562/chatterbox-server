var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    event.preventDefault();

    App.startSpinner();

    let value = $('#message').val();
    let message = {
      username: App.username,
      text: value,
      roomname: $('select').val()
    };

    Parse.create(message);


    App.fetch(App.stopSpinner);
    $('#message').val('');

  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};