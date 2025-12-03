FROM node:22.12.0-alpine AS builder

ENV VITE_FIREBASE_API_KEY=AIzaSyD0BP7un1ZJtxZARWmJuzrFQ_e5z1IKCFw
ENV VITE_FIREBASE_AUTH_DOMAIN=trisog-travels.firebaseapp.com
ENV VITE_FIREBASE_PROJECT_ID=trisog-travels
ENV VITE_FIREBASE_STORAGE_BUCKET=trisog-travels.appspot.com
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=345146381411
ENV VITE_FIREBASE_APP_ID=1:345146381411:web:804ff682f09b17c99b5456
ENV VITE_PUBLIC_API_URL=http://localhost:3000/api

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist ./

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]