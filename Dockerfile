FROM node:20 AS builder

WORKDIR /app

RUN corepack enable

COPY ./pnpm-lock.yaml ./package.json ./

RUN pnpm install

COPY . .

RUN --mount=type=secret,id=env_variables \
    cat /run/secrets/env_variables > .env

RUN pnpm ioc-generate

# Un comment if using graphql instead of REST
# RUN pnpm graphql

RUN pnpm build

FROM nginx

# delete default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
