var ship = {
    powerOn: false
    };
var powerOn = function() {
    if (ship.powerOn === false) {
        ship.powerOn = true;
    }
}


powerOn();

function countModules(){
  return availableModules.length;
}

countModules();

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
      availableModules[index].essential = true;}
       ship.modules.push(availableModules[index]);
   
  availableModules[index].enabled = true;
}

function findModuleIndex(name){
  for (let i = 0; i < availableModules.length; i++){
    if (availableModules[i].name === name){
      return i;
    }
  }
}
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));


loadModule(findModuleIndex("communication"));
function setMessage(){
  radio.message = JSON.stringify(navigation)
}
setMessage();

function activateBeacon() {
  radio.beacon = true
}
activateBeacon()

function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2
}

//  Navigation

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0; 
}

function calibrateX() {
  let signal = 0;
  for (let i = 0; i < 12; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}
// calibrateX();

function calibrateY() {
  let signal = 0;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
}
// calibrateY();

function calibrateZ() {
  let signal = 0;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
}
//calibrateZ();

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed) {
  let i = parseInt(speed);
  if (i >= 0) {
    navigation.speed = i
  }
}

function activateAntenna() {
  ship.antenna.active = true;
}
// activateAntenna()

function sendBroadcast() {
  for (let i = 0; i < 100; i++) {
    broadcast();
  }
}
// sendBroadcast()

function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast()

function decodeMessage(message) {
  let arr = message.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      arr[i] = "i"
    }
    else if (arr[i] == 3) {
      arr[i] = "e"
    }
    else if (arr[i] == "0") {
      arr[i] = "o"
    }
    else if (arr[i] == 5) {
      arr[i] = "y"
    }
    else if (arr[i] == 4) {
      arr[i] = "a"
    }
    if (arr[i] == 2) {
      arr[i] = "u"
    }
    arr[73] = 'l';
  }
  message = arr.join('');
  return message;
}
//console.log(decodeMessage('th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l.'))

function returnToEarth() {
    let a = broadcast("x");  
    let b = broadcast("y");
    let c = broadcast("z");
    
    let x = parseInt(decodeMessage(a), 16);
    let y = parseInt(decodeMessage(b), 16);
    let z = parseInt(decodeMessage(c), 16)
    
    navigation.x = x;
    navigation.y = y;
    navigation.z = z;
    }
    returnToEarth()
    