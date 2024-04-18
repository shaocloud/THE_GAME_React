
# THE GAME

**An Interactive Segment for Bound Theatre's "*A WORLD WITHOUT EGGS*"**

-------

## What is it?

A scene in *A WORLD WITHOUT EGGS* that allows the audience to vote at various points and influence the show.


Mainly a two-part solution:
**Unity** - projects scenes on the screen during the show
**React** - displays the voting interface on the user's phone

This is the Github repo for the React part.

## How it works

1. Show begins - Production crew launches **Unity application** and clicks through scenes according to cues
2. Production crew reaches a scene which enables voting
3. **Unity application** updates the **Realtime Database** with question and options
4. Scene displays a QR code for audience to visit - [Link](http://eggs.shao.casa)
5. Audience phones display the **React app**
6. **React app** display voting interface after retrieving state from **Realtime Database**
7. Audience vote on **React app**, sending updates to **Realtime Database**
8. **Unity application** gets live updates from **Realtime Database**
9. **Unity application** ends voting, updating **Realtime Database**
10. **React app** hides voting interface after retrieving state from **Realtime Database**
11. Repeat from step 2.

## Preview it on Youtube:
[![A WIP video of the Unity segment of the game](http://img.youtube.com/vi/VXva7fc89vk/0.jpg)](https://youtube.com/shorts/VXva7fc89vk)

##  Technologies used

**1. React**
Frontend interface for mobile
Displays different information depending on the current state of the game
Retrieves data from Firebase
Sends data to Firebase

**2. Github**
Versioning for React

**3. netlify**
Auto-builds and deploys React

**4. Google Firebase - Realtime Database**
Receives votes near-instantly from React
Receives state updates from Unity

**5. Unity Engine**
Displays scenes from the game on the projection
Provides a "console" for the production crew to switch between cues
Handles logic of receiving updates from Firebase
Sends data to Firebase