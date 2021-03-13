console.log(`Let’s get ready to party with jQuery!`);

//Give all images inside of an article tag the class of image-center
$('img').get(0).classList.add('image-center');

//Remove the last paragraph
$('p').last().remove();

//Set font size of the title to random size
$('#title').css("font-size", Math.random() * 100);

//Add item to the list
const newItem = $('<li>').text('A brand new thing');
$('ol').append(newItem);

//Empty aside and apologize
$('aside').empty();
$('aside').append($('<p>', {text: "I'm very very sorry about that."}));

//Change background color to match values
$('.form-control').on('change', function() {
    console.log('Changing bg color');

    const color = 'rgb(' + $('.form-control').get(0).value
    + ',' + $('.form-control').get(1).value
    + ',' + $('.form-control').get(2).value + ')';

    $('body').css('background-color', color);
})

//Remove the image on click
$('img').get(0).remove();