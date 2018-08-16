var xhr = new XMLHttpRequest();
var input = document.getElementById('input_data');
var output = document.getElementById('output_data');
var register =  document.getElementById('register');
var long_word_filter = document.getElementById('long_word_filter');
var substring_filter = document.getElementById('substring_filter');
var timer = 100;

xhr.open('GET','data.json',false);
xhr.send();
if(xhr.status != 200) {
  alert( xhr.status + ': ' + xhr.statusText ); 
} else {
    var data = JSON.parse(xhr.responseText).data;
    input.disabled=false;
    output.disabled=false;
    register .disabled=false;
    long_word_filter.disabled=false;
    substring_filter.disabled=false;
}

function longWordFilter(){
  output.innerHTML='';
  var ul = document.createElement('ul');
  output.appendChild(ul);
  data.forEach(function(item){
    var li =  document.createElement('li');
    if(item.length>+input.value && input.value!=''){
      li.innerHTML=item;
      setTimeout(function(){
        ul.appendChild(li);
      },timer);
      timer+=25;
    }
  });
  timer=0;
}

function substringFilter(){
  output.innerHTML='';
  var ul = document.createElement('ul');
  output.appendChild(ul);
  data.forEach(function(item){
    var li =  document.createElement('li');
    switch(register.checked){
      case false: 
        if(item.toLowerCase().indexOf(input.value.toLowerCase())>=0 && input.value!=''){
          li.innerHTML=item;
          setTimeout(function(){
           ul.appendChild(li);
          },timer);
          timer+=25;
        }
        break;
      case true :
        if(item.indexOf(input.value)>=0 && input.value!=''){
          li.innerHTML=item;
          setTimeout(function(){
           ul.appendChild(li);
          },timer);
          timer+=25;
        }
        break;
    }
  });
  timer=0;
}