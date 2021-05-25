#include <Arduino.h>
#include <Wire.h>
#include "Buzzer.h"

int buzzer = D5 ;
void initialize_Buzzer(){
    pinMode (buzzer, OUTPUT) ;
}

void  send_Alert(){
      digitalWrite (buzzer, HIGH) ;
      delay(500); ;
      digitalWrite (buzzer, LOW) ;
      delay(5000); ;
}