# e16-3yp-qurantine-tracker

## Group Members 
  * E/16/364 Tharushi Suwaris : e16364@eng.pdn.ac.lk
  * E/16/039 Nimashi Uthpala : e16039@eng.pdn.ac.lk
  * E/16/087 Sachini Dissanayaka : e16087@eng.pdn.ac.lk
  
 ## Background

The COVID19 pandemic, also known as the coronavirus pandemic, is an ongoing global pandemic of coronavirus disease 2019 (COVID19), caused by severe acute respiratory syndrome coronavirus 2 (SARSCoV2). The outbreak was first identified in December 2019 in Wuhan, China. The World Health Organization declared the outbreak a Public Health Emergency of International Concern on 30th January 2020 and a pandemic on 11th March. The first case of the virus was confirmed in Sri Lanka on 27th January 2020, after a 44-year-old Chinese woman from Hubei Province in China was admitted to the National Institute of Infection Diseases.

As of 16 August 2020, 2,890 confirmed cases have been reported in the country with 11 deaths. On 3rd March 2020, the first reported case involving a Sri Lankan origin outside Sri Lanka was reported in Italy. As of 23 March, forty-five quarantine centers have been built in the country by the Sri Lanka Army as a preventive measure to tackle the coronavirus pandemic. Nearly 3,500 people have been under quarantine in 45 quarantine centers which also include 31 foreigners from 14 countries.

As of 25 March 2020, Sri Lankan authorities have tracked down over 14,000 people who had contacted the identified patients and had ordered self-quarantine for such people. 

![Background](Images/__avoid_public_crowd-512.png)

## Problem

When putting a person under self-quarantine, medical officers and the police will come to the house where that person lives and advise that person not to go out. Even though the person under self-quarantine is advised not to go out the medical officers cannot be guaranteed that the person will not go out because they do not have a proper method to monitor the people under self-quarantine. If people under self-quarantine do not obey the rules and go out of the home and interact with other people, there will be a risk of exposing other people to the virus if those self-quarantined people are infected.  And also there is no any method to know if the body temperature of a self-quarantined person has increased.

## Solution

Implementation of a wearable device that can be used to track the location and measure the body temperature of the person under self-quarantine. This device will be having features such as,

* GPS precise positioning
* Can set a virtual fence
* Detect and monitor the body temperature
* Unauthorized removal notifications
* Low battery notification
* Designed as a wrist band
  
The data taken by this device will be sent to medical officers via a cloud server. Then they will analyse these data by using a mobile app. After analysing the data medical officers can take necessary actions according to the state of the person wearing the device.

 ![How It Works](Images/HIW.PNG)

## Implementation

Since this device will be used to monitor a person under self-quarantine, all the measurements should be precise. For temperature measurements, high precision temperature sensor will be used. The location of the person will be tracked using GPS precise positioning. The self-quarantined person does not allow to remove the device. A notification will be sent to the medical officers when that person is trying to remove the device in unauthorised manner. To detect such unauthorised removals, heartbeat sensor will be used. If the signals from heart beat sensor stops, medical officer will assume that the device is removed from the person who was wearing it. Then medical officer will take necessary action against that person. Since this device is not allowed to remove, recharging the battery will be troublesome. By using higher life time/ rechargeable batteries and by the battery optimization, there is no need of charging this device frequently. For ease of use, this device will be designed as a wrist band and also it will be light weighted.

 ![Implmentation](Images/tintiells.png)

## Target Audience

Target audience of this product is healthcare sector since this device will be used to monitor self-quarantined people. We are planning to introduce this product to healthcare sector through the Ministry of Health. This device will be used by the people under self-quarantine and mobile app will be used by the medical officers who authorised to monitor the self-quarantine people. So, by using this device the medical officers can provide a proper and a responsible service to control spreading covid19 throughout the society.

## Advising Lecturers
 - Dr. Isuru Nawinne
 - Dr. Ziyan Marikkar
 
## Links

- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [Faculty of Engineering](http://eng.pdn.ac.lk/)
- [University of Peradeniya](https://www.pdn.ac.lk/)
