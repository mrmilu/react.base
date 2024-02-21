FROM node:20 AS builder

WORKDIR /app

RUN corepack enable

COPY ./yarn.lock ./package.json ./.yarnrc.yml ./

COPY patches/ ./patches

RUN yarn install

COPY . .

RUN --mount=type=secret,id=env_variables \
    cat /run/secrets/env_variables > .env

RUN yarn ioc-generate

RUN yarn graphql

RUN yarn build --base=/clientes/payments/

FROM nginx

# delete default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
