
# Hardware And Software Designs
## Hardware Design
### Components
  * Node MCU 12e module
  * ublox NEO-6M GPS md0153 Module
  * LM 35 temperature module
  * MAX30100 Pulse Oximeter and Heart-Rate Sensor
  * Li Po rechargeable batteries
  * 3V mini buzzer
  
### Power Requirement

The node mcu works with 3.3 v so we supply power of 7.4v(power supply) from the betteries to the Vin pin of the node mcu. since the node mcu has an in built voltage regulator we can supply a voltage range of 7-12Vs to Vin

### Circuit Diagram
