# use nodejs runtime
FROM node:18-alpine

# set working directory
WORKDIR /nodedocker

# copy everything

COPY . .

## install dependencies

RUN npm install 

# expose PORT 3000 

EXPOSE 3000


#commands to run

CMD ["node","index.js"]
