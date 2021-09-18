# Robotic Operating System (ROS)

In this README you will get to setup your ros environment in order to be able to run ROS simulation remotely through out a web platform with turtlebot3.

## Setup and Installation:

1. **requirements:**
    - ubuntu 20.04 or debian since it supports the latest most stable ros noetic
    - Note: You can run this locally on docker container more about it in this [Link](https://varhowto.com/install-ros-noetic-docker/)

2. **Installing ROS:**

Your friend in this part is <a href="http://wiki.ros.org/noetic/Installation/Ubuntu" target="_blank">ROSWiki Ubuntu Installation guide</a>, you can however try installing using a script but i wouldn't fully advice for it because you would neet to setup few other things independently, try at your own risk!

```
$ sudo apt update
$ sudo apt upgrade
$ wget https://raw.githubusercontent.com/ROBOTIS-GIT/robotis_tools/master/install_ros_noetic.sh
$ chmod u+x ./install_ros_noetic.sh 
$ ./install_ros_noetic.sh
```

**If you want try to do a manual install here is how:**

- How to install ROS noetic on ubuntu?
    - Configure ubuntu repos to allow restricted, universe and multiverse, use this [guide](https://help.ubuntu.com/community/Repositories/Ubuntu).
    - Setup sources.list use command below:
    ```
    $ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
    ```
    - Setup Keys:
    ```
    $ sudo apt install curl # if you haven't already installed curl
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
    ```
    - Installation process:
    ```
    $ sudo apt update
    $ sudo apt install ros-noetic-desktop-full
    ```
    - Setup environment:
    ```
    $ source /opt/ros/noetic/setup.bash
    ```

    **Note:** you can run the command directly each time you want to start ros or append it to your **.bashrc** file in order to not set it up each time

    ```
    echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
    # restart your terminal
    ```

    - Dependencies to build packages:
    ```
    $ sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
    $ sudo apt install python3-rosdep
    $ sudo rosdep init
    $ sudo rosdep update
    ```

    **IMPORTANT:**
    - In order to make sure you won't have overlapping streams make sure to install packages as it is shown in ros wiki for example if you are to install rosbash package you do `sudo apt install ros-noetic-rosbash` same of other packages in case ros complains about missing dependencies and such but all in all as you follow along it should be fine.

    **Congratulations you just setup your ROS noetic now let's get to the fun stuff...**

3. **Setting up ROS packages:**

In this section we will setup our environment to prepare our simulation and other necessary packages.

- If not installed, Install rosbash which will give you the ability to have ros command tools on your bash terminal.
```
$ sudo apt install ros-noetic-rosbash
```

- Install rosBridge package to enable <span style="color: red">socket</span> and <span style="color: red">websocket</span> access to ros, this is what we are going to use later using the library `ros.js` in order to control our simulation from web interface.

```
$ sudo apt install ros-noetic-rosbridge-server
```
4. **Let's create your first workspace:**

In this part we go through making a workspace for your project, however first we need some more packages that are critical for the simulation to work:

- Install ros dependent packages:
```
$ sudo apt-get install ros-noetic-joy ros-noetic-teleop-twist-joy \
  ros-noetic-teleop-twist-keyboard ros-noetic-laser-proc \
  ros-noetic-rgbd-launch ros-noetic-rosserial-arduino \
  ros-noetic-rosserial-python ros-noetic-rosserial-client \
  ros-noetic-rosserial-msgs ros-noetic-amcl ros-noetic-map-server \
  ros-noetic-move-base ros-noetic-urdf ros-noetic-xacro \
  ros-noetic-compressed-image-transport ros-noetic-rqt* ros-noetic-rviz \
  ros-noetic-gmapping ros-noetic-navigation ros-noetic-interactive-markers
```

- Install TurtleBot3 packages (More on that later on):
```
$ sudo apt install ros-noetic-dynamixel-sdk
$ sudo apt install ros-noetic-turtlebot3-msgs
$ sudo apt install ros-noetic-turtlebot3
```

<b style="color: lightskyblue">Note:</b>
- In case you don't want to go through the process of setting up a workspace and installing turtlebot3 just use the provided script `workspace_setup.sh` in this folder to setup things automatically for you, then restart your terminal and apply this two commands `cd ~/rlink_ws` and `catkin_make`
- Please you will notice after executing the script two new folders appearing at your Home directory `rlink_ws/` and `maps/` don't delete them they are necessary for the rest of project.

** Create a workspace:**
- Setting up a workspace:

    - to create a new workspace
    ```
    $ mkdir -p ~/rlink_ws/src
    $ cd ~/rlink_ws
    $ catkin_make
    ```
    - to install turtlbot3:
    ```
    $ cd ~/rlink_ws/src
    $ git clone -b noetic-devel https://github.com/ROBOTIS-GIT/turtlebot3.git
    $ git clone -b noetic-devel https://github.com/ROBOTIS-GIT/turtlebot3_simulations
    $ cd ~/rlink
    $ catkin_make
    ```

## To read:

- Turtlebot3 is awesome, with rich features it enabled you to setup a basic robot for simulation and testing skipping through all the hard parts you might run into, a good thing is to check the project out at [ROBOTIS e-Manual](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/)

- more on ROS and applications here at [youtube](https://www.youtube.com/watch?v=Qkm8VtdOds4)

Now you can move to next section of this ros tutorial [here]()
