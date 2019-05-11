'use strict'

var ship = {
    powerOn: false
    };
var powerOn = function() {
    if (ship.powerOn === false) {
        ship.powerOn = true;
    }
}

// Modules


 function countModules () {
    return availableModules.length
}
countModules();
console.log(availableModules.length);

function countEssential() {
    let j = 0;
    for (let i = 0; i < availableModules.length; i++) {
        if (availableModules[i].essential) {
            j++;
        }
    }
    return j;
}
countEssential();

function loadModule(index) {
  if (availableModules[index].essential !== true) {
     return null;
  }
       availableModules[index].enabled = true;
       ship.modules.push(availableModules[index]);
  }
   
  function findModuleIndex(name) {
for (let i = 0; i < availableModules.length; i++) {
   if (availableModules[i].name === 'name' && availableModules[i].essential) {
        return i;
    }
  }
}
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));