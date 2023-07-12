FROM node:19.8.1-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:16.19.1-alpine as runner

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 6006

CMD ["yarn", "sb"]