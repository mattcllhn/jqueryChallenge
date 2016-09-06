console.log('sourced');
$(document).ready(function(){
console.log('in docready');
var redClicks=0;
var yellowClicks=0;
var greenClicks=0;
var blueClicks=0;

$('#red-button').on('click',function(){
  var newDiv=$('<div />',{
    class: 'redDiv',
    click: function(){
      redClicks--;
      this.remove();
      displayClicks();
    }
  });//newDiv object
  redClicks++;
  $('#outputSpan').append(newDiv);
  displayClicks();
});//onclick red


$('#yellow-button').on('click',function(){
  var newDiv=$('<div />',{
    class: 'yellowDiv',
    click: function(){
      yellowClicks--;
      this.remove();
      displayClicks();
    }
  });//newDiv object
  yellowClicks++;
  $('#outputSpan').append(newDiv);
  displayClicks();
});//onclick yellow
$('#green-button').on('click',function(){
  var newDiv=$('<div />',{
    class: 'greenDiv',
    click: function(){
      greenClicks--;
      this.remove();
      displayClicks();
    }
  });//newDiv object
  greenClicks++;
  $('#outputSpan').append(newDiv);
  displayClicks();
});//onclick green

$('#blue-button').on('click',function(){
  var newDiv=$('<div />',{
    class: 'blueDiv',
    click: function(){
      blueClicks--;
      this.remove();
      displayClicks();
    }
  });//newDiv object
  blueClicks++;
  $('#outputSpan').append(newDiv);
  displayClicks();
});//onclick blue



var displayClicks= function () {
  $('#red-tracker').html('Total Red: '+redClicks);
  $('#yellow-tracker').html('Total Yellow: '+yellowClicks);
  $('#green-tracker').html('Total Green: '+greenClicks);
  $('#blue-tracker').html('Total Blue: '+blueClicks);


};//displayClicks












});//docready
