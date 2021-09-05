# Robotic Operating System (ROS)

In this README you will get to setup your ros environment in order to be able to run ROS simulation remotely through out a web platform.

## Setup and Installation:

1. **requirements:**
    - ubuntu 20.04 or debian since it supports the latest most stable ros noetic
    - Note: You can run this locally on docker container more about it in this [Link](https://varhowto.com/install-ros-noetic-docker/)

2. **Installing ROS:**

Your friend in this part is <a href="http://wiki.ros.org/noetic/Installation/Ubuntu" target="_blank">ROSWiki Ubuntu Installation guide</a>

- How to install ROS noetic on ubuntu?
    - Configure ubuntu repos to allow restricted, universe and multiverse, use this [guide](https://help.ubuntu.com/community/Repositories/Ubuntu).
    - Setup sources.list use command below:
    ```
    sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
    ```
    - Setup Keys:
    ```
    sudo apt install curl # if you haven't already installed curl
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
    ```
    - Installation process:
    ```
    sudo apt update
    sudo apt install ros-noetic-desktop-full
    ```
    - Setup environment:
    ```
    source /opt/ros/noetic/setup.bash
    ```
    **Note:** you can run the command directly each time you want to start ros or append it to your **.bashrc** file in order to not set it up each time
    ```
    echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
    # restart your terminal
    ```
    - Dependencies to build packages:
    ```
    sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
    sudo apt install python3-rosdep
    sudo rosdep init
    sudo rosdep update
    ```

    **IMPORTANT:**
    - In order to make sure you won't have overlapping streams make sure to install packages as it is shown in ros wiki for example if you are to install rosbash package you do `sudo apt install ros-noetic-rosbash` same of other packages in case ros complains about missing dependencies and such but all in all as you follow along it should be fine.

    **Congratulations you just setup your ROS noetic now let's get to the fun stuff...**

3. **Setting up ROS environment:**

In this section we will setup our environment to prepare our simulation and other necessary packages.

- Install rosbash which will give you the ability to have ros command tools on your bash terminal.
```
sudo apt install ros-noetic-rosbash
```

- Install rosBridge package to enable <span style="color: red">socket</span> and <span style="color: red">websocket</span> access to ros, this is what we are going to use later using the library `ros.js` in order to control our simulation from web interface.

```
sudo apt install ros-noetic-rosbridge-server
```
