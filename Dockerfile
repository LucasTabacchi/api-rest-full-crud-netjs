FROM node:20-alpine AS builder
WORKDIR /app


RUN apk add --no-cache openssl libc6-compat


COPY package*.json ./


COPY prisma ./prisma


RUN npm ci


COPY . .


RUN npm run build


RUN npm prune --omit=dev



FROM node:20-alpine
WORKDIR /app


RUN apk add --no-cache openssl libc6-compat

ENV NODE_ENV=production


COPY --from=builder /app/node_modules ./node_modules


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD sh -c "npx prisma migrate deploy && node dist/main.js"
