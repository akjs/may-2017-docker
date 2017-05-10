# Use an official Node as base image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

RUN npm install

# Make port 3232 available to the world outside this container
EXPOSE 3232

# Run app.js when the container launches
CMD ["npm", "run", "dev"]
