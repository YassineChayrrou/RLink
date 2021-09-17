# RLink

RLink is a MERN stack web app that helps users control ROS enabled robots through a web interface, all you need to do is run rosbridge on your robot, connect to the websocket provided in the platform, and it will take care of the rest.

**What you can do:**

Given that this project is in it's alpha release what you can do is very limited however pretty fun to play around with.
- currenty, you can navigate your robot using built in arrow and joystick controllers.
- Monitor robot position within a map in the web interface
- Connect and Disconnect as a registered user, the auth api is fully JWT authentication, and its fully implemented with forgot password and email retrieval option.

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

1. setting up your ROS environment:
    - go to [ROS_setup](https://github.com/YassineChayrrou/RLink/tree/main/ROS_setup) folder a guideline exists there