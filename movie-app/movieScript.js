$('#submit').on('click', function() {
    const newItem = $('<li>').text('Title: ' + $('#title').get(0).value 
    + " Rating: " + $('#rating').get(0).value);

    const newButton = $("<button id='remove'>").text('REMOVE');
    newButton.on('click', function() {
        $(this).parent().remove();
    });
    
    newItem.append(newButton);
    $('ol').append(newItem);
    
})


