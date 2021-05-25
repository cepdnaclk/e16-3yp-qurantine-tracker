#include "LM35.h"
#include <Arduino.h> /* we need arduino functions to implement this */

int temp;
int LM35= A0;     
float tempC;
float vref = 3.3;
float resolution = vref / 1023;


void measure_temp_init() {
    pinMode(LM35,INPUT);
}

float take_readings(){
    temp=analogRead(LM35);
    tempC = temp * resolution*1000;
    Serial.print(" DegreeC= ");    
    Serial.print(tempC);
    Serial.print("\n");
    return tempC;
}
