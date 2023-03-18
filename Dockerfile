FROM node:19.8.1-alpine as builder

WORKDIR /app

COPY . ./

RUN yarn

RUN yarn build

FROM node:16.19.1-alpine

COPY --from=builder /app ./

RUN pwd

RUN ls -la

EXPOSE 6006

CMD ["yarn", "sb"]