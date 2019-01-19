var MessageView = {

  render: _.template(`
      <div class="chat <%=decodeURI(DOMPurify.sanitize(roomname))%>">
        <div class="username" data-user="<%=decodeURI(DOMPurify.sanitize(username))%>"><%= decodeURI(DOMPurify.sanitize(username))%>:</div>
        <div class="text"><%= DOMPurify.sanitize(text) %></div>
      </div>
    `)

};