FROM node:lts-alpine as build


#Container for building
WORKDIR /Milk-WebView-dir

#Creating build
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


#Creating the other container
FROM nginx

#Nginx side
COPY --from=build /Milk-WebView-dir/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5174/tcp

CMD ["nginx", "-g", "daemon off;"]
