# Testing-Library/React SW async test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

- build a image

 `docker build -t sample:dev .`

 - show images

 `docker images`

- run container 

`docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
  `

### Exp

The docker run command creates and runs a new container instance from the image we just created.
- it starts the container in interactive mode. Why is this necessary? As of version 3.4.1, react-scripts exits after start-up (unless CI mode is specified) which will cause the container to exit. Thus the need for interactive mode.

- --rm removes the container and volumes after the container exits.
- -v ${PWD}:/app mounts the code into the container at “/app”.

- {PWD} may not work on Windows. 

Since we want to use the container version of the “node_modules” folder, we configured another volume: -v /app/node_modules. You should now be able to remove the - local “node_modules” flavor.
- -p 3000:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host.

- -e CHOKIDAR_USEPOLLING=true enables a polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, and fsevents) so that hot-reloading will work.

### MORE 
`docker help`
# react-testing-lib
