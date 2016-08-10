var m = "";

$(document).keypress(function(event) {
  if (event.key === 'Enter') {
    e();
  }
  else {
    a(String.fromCharCode(event.which));
  }
});

function s(v) { 
  document.getElementById('res').value = v 
};

function a(v) {
  var operators = ['/', '*', '+', '-'];
  if (document.getElementById('res').value === '0' && operators.indexOf(v) < 0) {
    document.getElementById('res').value = v
  }
  else {
    document.getElementById('res').value += v
  }
};

function add_m(v) {
  m = v;
  curr_v = document.getElementById('res').value;
  s(v + ' saved');
  sleep(1).then(() => {
    s(curr_v);
  });
};

function remove_m() {
  m = "";
  curr_v = document.getElementById('res').value;
  s('Memory clear');
  sleep(1).then(() => {
    s(curr_v);
  });
};

function get_m() {
  a(m);
};

function e() { 
  try { s(eval(document.getElementById('res').value)) } catch(e) { s('Error'); } 
};

function sleep(time) {
  time = time*1000;
  return new Promise((resolve) => setTimeout(resolve, time));
}