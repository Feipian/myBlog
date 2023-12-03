FROM node:16

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/   
# Ensure both package.json and package-lock.json are copied

RUN npm install                  
# Use npm instead of yarn

COPY . /app

RUN npm run build                
# Use npm run build instead of yarn build

CMD ["npm", "start"]             
# Use npm start instead of yarn start
