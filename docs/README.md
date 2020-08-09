# Cam Alert

## Description

Cam Alert allows players to setup security cameras and receive notifications when movement is detected by a camera.

## Usage

### Setting up a Camera

1. Create a camera with **/cam create**
2. Configure a camera with **/cam update**
3. Place the camera at the desired location. The camera will monitor **opposite** of
   the direction the player is facing when the camera is placed
   (ex: placing a camera while facing East will result in the camera facing West)
4. (Optional) Break the camera and place it in a different location

### Commands

- /cam create - Create a camera with default settings
- /cam update range [block amount] - Update the camera in hand with a new range
- /cam update threshold [seconds] - Update the camera in hand with a new notification threshold. The notification threshold determines the minimum seconds between notifications for repeating intruders
- /cam update owner [player name] - Update the camera in hand with a new owner. The owner will receive all camera notifications

### Demo

[Cam Alert v0.1 Demo](https://youtu.be/gLEKmJ4tbEM)

## Configuration

### Permissions

- camalert.create - Use **/cam create**
- camalert.update.range - Use **/cam update range** with any block amount
- camalert.update.range.[block amount] - Restrict **/cam update range** to a specific block amount. This permission can be set more than once
- camalert.update.range.min.[block amount] - Restrict **/cam update range** to a minimum block amount
- camalert.update.range.max.[block amount] - Restrict **/cam update range** to a maximum block amount
- camalert.update.range.\* - Use **/cam update range** with any block amount and override minimum, maximum, and specific restrictions
- camalert.update.notifythreshold - Use **/cam update threshold** with any notify seconds
- camalert.update.notifythreshold.[seconds] - Restrict **/cam update threshold** to a specific notify seconds. This permission can be set more than once
- camalert.update.notifythreshold.min.[seconds] - Restrict **/cam update threshold** to a minimum notify seconds
- camalert.update.notifythreshold.max.[seconds] - Restrict **/cam update threshold** to a maximum notify seconds
- camalert.update.notifythreshold.\* - Use **/cam update threshold** with any notify seconds and override minimum, maximum, and specific restrictions
- camalert.update.owner - Use **/cam update owner** with any player name
- camalert.update.owner.[player name] - Restrict **/cam update owner** to a specific player name. This permission can be set more than once
- camalert.update.owner.self - Restrict **/cam update owner** to the player's own name
- camalert.update.owner.\* - Use **/cam update owner** with any player name and override specific restrictions
- camalert.update.\* - Use **/cam update** with any parameter and any value
- camalert.\* - Use **/cam** with any parameters and any values (admin powers)

### config.yml

- settings.defaults.cameraRange - Set the default camera range for **/cam create**
- settings.defaults.notificationThresholdSeconds - Set the default camera notification threshold seconds for **/cam create**
- settings.defaults.entityNotificationsEnabled - Toggle if cameras send notifications for non-player movement
- settings.defaults.cameraBlockMaterial - Set the default block material for **/cam create**

## Support

Please [post an issue](https://github.com/PineconeLP/cam-alert/issues) if you have any questions, concerns, problems, or suggestions regarding Cam Alert. Cam Alert has many planned features and is actively in development, so suggestions are appreciated as the plugin continues to grow.
