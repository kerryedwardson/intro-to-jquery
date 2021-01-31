function removeBox() {
  $('button.remove').click(function() {
    console.log('remove was clicked');
    $('div').remove();
  })
}

function changeColor() {
  $('button.color').click(function() {
    console.log('color was clicked');
    $('div').css('background-color', 'yellow');
  })
}

function changeSize() {
  $('button.size').click(function() {
    console.log('size was clicked');
    $('div').css('width', '1000px');
  })
}

removeBox();
changeColor();
changeSize();