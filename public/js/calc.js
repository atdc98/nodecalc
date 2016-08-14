var calcApp = angular.module('NodeCalc', []);
calcApp.controller('CalcController', ['$scope', function ($scope) {
  var m = null;

  function sleep(time) {
    time = time*1000;
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  function setScreen(v) {
    document.getElementById('res').value = v;
  }

  $scope.memory = {
    recall: function() {
      $scope.screen.add(m);
    },
    clear: function() {
      m = null;
      curr_v = document.getElementById('res').value;
      setScreen('Memory clear');
      sleep(1).then(() => {
        setScreen(curr_v);
      });
    },
    add: function() {
      m = document.getElementById('res').value;
      setScreen(m + ' saved');
      sleep(1).then(() => {
        setScreen(m);
      });
    }
  };

  $scope.calculate = function() {
    var places = 8;
    try { setScreen(parseFloat(eval(document.getElementById('res').value).toFixed(places))) } catch(e) { setScreen('Error'); }
  }
  
  $scope.screen = {
    add: function(v) {
      var operators = ['/', '*', '+', '-'];
      if (document.getElementById('res').value === '0' && operators.indexOf(v) < 0) {
        document.getElementById('res').value = v
      }
      else {
        document.getElementById('res').value += v
      }
    },
    clear: function() {
      document.getElementById('res').value = '0';
    }
  };

  $scope.buttons = {
    memory: [ 
      {text: 'mrc', action: $scope.memory.recall},
      {text: 'm-', action: $scope.memory.clear},
      {text: 'm+', action: $scope.memory.add},
    ],
    symbols: {
      divide: {text: '/', action: $scope.screen.add},
      multiply: {text: '*', action: $scope.screen.add},
      add: {text: '+', action: $scope.screen.add},
      subtract: {text: '-', action: $scope.screen.add},
      decimal: {text: '.', action: $scope.screen.add}
    },
    verbs: {
      clear: {text: 'C', action: $scope.screen.clear},
      calculate: {text: '=', action: $scope.calculate}
    },
    numbers: {
      row7to9: [
        {text: '7', action: $scope.screen.add},
        {text: '8', action: $scope.screen.add},
        {text: '9', action: $scope.screen.add},
      ],
      row4to6: [
        {text: '4', action: $scope.screen.add},
        {text: '5', action: $scope.screen.add},
        {text: '6', action: $scope.screen.add},
      ],
      row1to3: [
        {text: '1', action: $scope.screen.add},
        {text: '2', action: $scope.screen.add},
        {text: '3', action: $scope.screen.add},
      ],
      zero: {text: '0', action: $scope.screen.add},
    }
  };
}]);

/*
$(document).keypress(function(event) {
  if (event.key === 'Enter') {
    // if key pressed is Enter, eval
    e();
  }
  else {
    // record the keypress (TODO: make sure only numbers are recorded)
    a(String.fromCharCode(event.which));
  }
});
*/