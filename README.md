# RLink

RLink is a MERN stack web app that helps users control ROS enabled robots through a web interface, all you need to do is run rosbridge on your robot, connect to the websocket provided in the platform, and it will take care of the rest.

## ScreenShots:

<div>
    <img alt="Home page" src="https://github.com/YassineChayrrou/RLink/blob/main/screenshots/RLink-1.png" width="500px">
    <img alt="Login" src="https://github.com/YassineChayrrou/RLink/blob/main/screenshots/RLink-5.png" width="500px">
</div>
<br />

- Checkout more in [screenshots/](https://github.com/YassineChayrrou/RLink/tree/main/screenshots)

## About:

**What you can do:**

Given that this project is in it's alpha release what you can do is very limited however pretty fun to play around with.
- currenty, you can navigate your robot using built in arrow and joystick controllers.
- Monitor robot position within a map in the web interface
- Connect and Disconnect as a registered user, the authentication api is fully implemented with options such as forgot password and email retrieval option using mail server etc...

**What you will eventually be able to do:**

- New api routes for new features such as connections history, robot stats, optimization etc... [<span style="color: green">Priority List</span>] 

- Better Dashboard UI with more options such as analytics, run time, distance passed and a lot more after setting up the api. [<span style="color: yellow">Short Term</span>] 

- Better navigation with options such us SLAM(simulation localization and mapping) like features built specifically for web interface [<span style="color: red">Long Term</span>]

- dynamic mapping where you see the map starts to build all while you are in the platform [<span style="color: red">Long Term if possible</span>]
- Support of ROS2 this is a big step however i must grasp the basics of ROS2 to do that, don't know when but i am interested in learning it. [<span style="color: violet">No specific Date</span>]

**What i am currently doing:**
- ...


## Installation :

Frist let's clone and cd to our project directory 

```
$ git clone https://github.com/YassineChayrrou/RLink.git
$ cd ~/RLink
```

Notice this is the folder structure:

<pre>
```
$ tree -L 1
.
├── <b style="color: lightskyblue">api</b>
├── <b style="color: lightskyblue">client</b>
├── README.md
└── <b style="color: lightskyblue">ROS_setup</b>
```
</pre>

<br />

**I. ROS_setup folder:**
1. setting up your ROS environment:

    - go to [ROS_setup](https://github.com/YassineChayrrou/RLink/tree/main/ROS_setup) folder a guideline exists there

    - you can setup your own ros workspace to test inside the interface however you need to look up your `rostopic list` and find your navigation topic to subscribe to inside the platform, usually it is `cmd_vel/`

    - Please follow the entirety of the guideline on setting up your environment more details are [there](https://github.com/YassineChayrrou/RLink/tree/main/ROS_setup)

**II. client folder:**

1. setting up client server:

    > This folder contains all the frontend code using reactjs to be able to run client server follow steps below:

    - go to the [client](https://github.com/YassineChayrrou/RLink/tree/main/client) folder full instructions are there.

    - make sure after setup to run your client server by:
    ```
    $ cd client     //path to client folder inside RLink
    $ npm run dev
    ```

    - any issues make sure you followed installation correctly and check your node version 14+, i think it can run on version 12+ but do check.
    If there still is problem raise an issue i will be glad to help.

**III. api folder:**

1. setting up the backend api server:

    > This folder contains the backend code using express, mongo and other node packages, follow steps below to run the backend api server:

    - make sure to read and follow the instructions inside the [api/](https://github.com/YassineChayrrou/RLink/tree/main/api) folder.

    - there is a `config.env.backup` use it to put your credentials to run your db and mail server from within the application. For more read carefully the instructions at the [api/] folder

    - run backend server by typing:
    ```
    $ npm run server
    ```
    **Note:** it should say connected to port 5000 and mongodb connected
    - any issues please check your nodejs version is 14+, i think it works as well on verion 12+ but please do check.
    If there still is problem raise an issue i will be glad to help.

## Resources:

Resources for this project:
- robot web tools website [here](http://robotwebtools.org/tools.html)
    - => contains all ros javascript libraries i used to help interacting with rosbridge websocket
- ros wiki rosbridge section [here](https://wiki.ros.org/rosbridge_suite)
- ros wiki map visualization [here](https://wiki.ros.org/ros2djs/Tutorials/VisualizingAMap)
- ros wiki ros state publisher [here](https://wiki.ros.org/robot_state_publisher)
- google / youtube / stackoverflow dah!!!

## Contributers:

| Contributer | Github | LinkedIn |
| ----------- | ------ | -------- |
| Yassine Chayrrou | [@YassineChayrrou](https://github.com/YassineChayrrou) | [linkedin](fakelinkunclickable) |

## Author:

Yassine Chayrrou
