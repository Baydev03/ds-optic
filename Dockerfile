FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache --virtual build-dependencies python3 make g++
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx/dev/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
