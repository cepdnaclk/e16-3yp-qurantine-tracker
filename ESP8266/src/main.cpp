#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
#include "LM35.h"

//wifi credentials
const char *ssid = "SLT-ADSLAF3498";  
const char *password = "0312237546";  
//server
const char* serverName ="http://192.168.1.103:3000/hardware/datapath";
//demo data
String DeviceId = "159";

void setup() {
  Serial.begin(9600);
  measure_temp_init();
  //connect to wifi network
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  
}

void loop() {
    //temperature reaing
    float temperature = take_readings();
    String temp="";
    temp.concat(temperature);

    if(WiFi.status()== WL_CONNECTED){

      //creating a json object
      StaticJsonDocument<200> jsonBuffer;
      jsonBuffer["temp"] = temp ;
      jsonBuffer["DeviceId"] = DeviceId;    
      char JSONmessage[300];
      serializeJson(jsonBuffer,JSONmessage);

      //server start
      HTTPClient http;
      http.begin(serverName);      
      http.addHeader("Content-Type", "application/json");
  
      // Send HTTP POST request     
      Serial.println(JSONmessage);
      int httpResponseCode = http.POST(JSONmessage);
      Serial.print(http.getString());
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      //end
      http.end();
      delay(300);
    }
    else {
      Serial.println("WiFi Disconnected");
    }
}
   
