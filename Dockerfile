FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

FROM base AS build
WORKDIR /app
COPY . /app

RUN corepack enable
RUN apk add --no-cache python3 alpine-sdk

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

RUN cd web && WEB_DEFAULT_API="http://127.0.0.1/" pnpm run build

RUN pnpm deploy --filter=@imput/cobalt-api --prod /prod/api

FROM base
WORKDIR /app

RUN apk add --no-cache nginx

COPY --from=build /prod/api /app/api
COPY --from=build /app/.git /app/.git
COPY --from=build /app/web/build /app/web

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
