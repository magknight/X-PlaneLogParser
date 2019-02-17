# X-Plane Log Parser
As the name suggests, it's a parser for the X-Plane log file. I was getting really annoyed with having to look through people's log files when they were immensely log, and contained 90% stuff I didn't care about. Here, my solution is to remove the lines that are not of interest.

It's not very exciting

## Install
``npm install -g x-plane-log-parser``

## Usage
For the default file location: ``./Log.txt`` run
```npm start```
For a custom file location, run:
```npm start --path="C:/X-Plane 11/Log.txt"```

It's also possible to use:
```
xp-log
xp-log --file="./airspace/Log.txt"
```
