# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
# RUN npm cache clean --force
RUN npm install

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app
# RUN npm config set strict-ssl=false

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
ARG NEXT_PUBLIC_API_URL
ARG NEXTAUTH_SECRET
ARG NEXT_PUBLIC_SESSION_MAX_AGE_HOURS
ARG NEXTAUTH_URL

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXT_PUBLIC_SESSION_MAX_AGE_HOURS=$NEXT_PUBLIC_SESSION_MAX_AGE_HOURS
ENV NEXTAUTH_URL=$NEXTAUTH_URL

RUN env

CMD ["node", "server.js"]
