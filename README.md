# Mifos Self Service Application
Mifos Self Service Meteorjs based Application with support of web and hybrid mobile app support.

# Instructions to build the Angular-Meteor app on the browser
 
 * First make sure if meteor is present or not from the below given command.

    ```
    meteor --version
    ```
 * If it is not present download it from the following command

    For OS X  or Linux
    ```
     curl https://install.meteor.com/ | sh
    ```
    For windows

    Download from [this](https://install.meteor.com/windows) link

 * Fork the project
 * Clone the project to your local machine using the commmand

     ```
     git clone https://github.com/gauravsaini03/mifos-selfservice-app
     ```
 * Now enter into the project directory

    ```
     cd mifos-selfservice-app/
    ```
 * To start the angular-meteor app write

    ```
    meteor
    ```

 *   **Note**

    By default the meteor will be hosted on port number 3000. To start the meteor app on another port number.

    ```
    meteor --port portNumber
    ```

# Instructions to build angular-meteor app on the mobile

 * First make sure that meteor is installed on your device.

 * Follow below given links to have all the pre-requisites which you will need to install the app on your device.

    1. Android on linux device -> [link](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-Android-on-Linux)
    2. Android on Mac -> [link](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-Android-on-Mac)
    3. Ios on Mac -> [link](https://github.com/meteor/meteor/wiki/Mobile-Development-Install:-iOS-on-Mac)

    **Note** :- Currently, it is only possible to build iOS apps on an OS X system.

 * After following the above instructions on any of the link.Now add platform depending upon your use.

    1. `meteor add-platform ios` adds the iOS platform to a project.
    2. `meteor add-platform android` adds the Android platform to a project.

  ## Running a meteor mobile app

 * To run your app on a emulator

    1. `meteor run ios` runs your Meteor app in an iOS simulator and starts the server.
    2. `meteor run android` runs your Meteor app in an Android simulator and starts the server.

 * To run your device on a physical device

    1. `meteor run ios-device` runs your Meteor app in an iOS device and starts the server.
    2. `meteor run android-device` runs your Meteor app in an Android device and starts the server.

 * **Note**

    If any error occurs during running your app, you can list the missing dependencies by appending `--verbose` at the
 end of the command which you have used to run the app either on a emulator or physical device.

    ```
    meteor run ios --verbose
    meteor run ios-device --verbose
    ```


