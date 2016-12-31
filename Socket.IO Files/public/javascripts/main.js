$(function(){
  // Create the socket.io connection
  var $socket = io.connect();

  //Cache Dom Varialbles
  var $toolbar = $('#toolbar');
  var $toolbarText = $('#toolbar-text');
  var $toolbarButton = $('#toolbar-button');
  var $displayText = $('#display-text');

  console.log('Start jquery');

  // Add function when button clicked
  // Will submit text box
  $toolbarButton.click(function(){
    $socket.emit('send message', $toolbarText.val());
    $toolbarText.val('');
  });

  // This message will recieve "data" as an object
  $socket.on('new message', function(data){
    console.log('Success Client Recieved!!!!');
    $displayText.append(data + "<br/>");
  });
});
