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

    **Congratulations you just setup your ROS noetic now let's get to the fun stuff...**