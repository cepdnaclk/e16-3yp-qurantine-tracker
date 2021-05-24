#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>

const char *ssid = "SLT-ADSLAF3498";  //ENTER YOUR WIFI ssid
const char *password = "0312237546";  //ENTER YOUR WIFI password

const char* serverName ="http://192.168.1.103:3000/hardware/datapath";

String DeviceId = "159";
String temp = "30";

unsigned long lastTime = 0;
unsigned long timerDelay = 5000;

String payload() {
    StaticJsonDocument<200> jsonBuffer;
    //JsonObject& root = jsonBuffer.createObject();
    jsonBuffer["temp"] = "22";
    jsonBuffer["DeviceId"] = DeviceId;    
    String JSONmessage;
    serializeJson(jsonBuffer,JSONmessage);
    return JSONmessage;
}

void setup() {
  Serial.begin(9600);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
  if ((millis() - lastTime) > timerDelay) {

    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      
     /* http.begin("https://www.courier.com/blog/how-to-send-emails-with-node-js");
      int res = http.GET();
      Serial.println("Respond code :");
      Serial.println(res);*/
      http.begin(client,serverName);

      
      http.addHeader("Content-Type", "application/json");
      // Data to send with HTTP POST
           
      // Send HTTP POST request
      String httpRequestData = payload();
      //String httpRequestData =String("{\"temp\":\"" + temp + "\",\"DeviceId\":\"" + DeviceId + "\"}") ;
      Serial.println(httpRequestData);
      int httpResponseCode = http.POST(httpRequestData);
      Serial.print(http.getString());
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}
   
