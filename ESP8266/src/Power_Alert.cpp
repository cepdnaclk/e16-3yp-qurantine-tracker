#include <Arduino.h>
#include <Wire.h>
#include "Power_Alert.h"

int LED1  = D6;
int LED2  = D7;

void initialize_LEDs(){
    pinMode(LED1, OUTPUT);
    pinMode(LED2, OUTPUT);
}

void  Low_Battery_Alert(){
    digitalWrite(LED2, HIGH);
}

void Indicate_Charging(){
    digitalWrite(LED1, HIGH);
}