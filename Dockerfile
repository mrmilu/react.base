ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS dependencies

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --ignore-scripts

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

RUN --mount=type=secret,id=env_variables \
    cat /run/secrets/env_variables > .env

RUN pnpm ioc-generate

RUN pnpm graphql

RUN pnpm build

FROM nginx:alpine

RUN apk add --no-cache dumb-init

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["nginx", "-g", "daemon off;"]