'use strict';
const util                = require('util');
const EventEmitter        = require('events');
const BluetoothSerialPort = require('bindings')('BluetoothSerialPort.node');

/**
 * [Bluetooth description]
 */
function Bluetooth(){
  EventEmitter.call(this);
};

/**
 * [function description]
 * @return {[type]} [description]
 */
 function Connection(port){
  
};

/**
 * [inherits description]
 * @param  {[type]} target [description]
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
function inherits(target, source) {
  var k;
  for (k in source.prototype) {
      target.prototype[k] = source.prototype[k];
  }
  return target;
}

/**
 * [inherits]
 */
Bluetooth            = inherits(Bluetooth                    , EventEmitter);
Bluetooth.Connection = inherits(Connection                   , EventEmitter);
Bluetooth.DeviceINQ  = inherits(BluetoothSerialPort.DeviceINQ, EventEmitter);

/**
 * [connect description]
 * @param  {[type]}   address  [description]
 * @param  {[type]}   channel  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Bluetooth.connect = function connect(address, channel, callback){
  var port = new BluetoothSerialPort.BTSerialPortBinding(address, channel, function(){
    callback(null, new Buletooth.Connection(port));
  }, callback);
};

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = Bluetooth;