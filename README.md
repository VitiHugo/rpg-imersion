This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Running with Docker

You can run this project in a Docker container using Docker Compose. This setup uses Node.js version `22.13.1` (as specified in the Dockerfile) and exposes the application on port `3000`.

### Build and Run

To build and start the application with Docker Compose:

```bash
docker compose up --build
```

This will build the Docker image and start the Next.js app in a container named `typescript-app`.

### Ports

- The application will be available at [http://localhost:3000](http://localhost:3000)

### Environment Variables

- The Docker Compose file is set up to optionally use an environment file. If you have environment variables, create a `.env` file in the project root and uncomment the `env_file` line in `docker-compose.yml`.
- By default, the container runs with `NODE_ENV=production` and `NODE_OPTIONS=--max-old-space-size=4096`.

### Special Configuration

- The Dockerfile uses a multi-stage build to optimize image size and security. Only production dependencies and build artifacts are included in the final image.
- The application runs as a non-root user inside the container for improved security.

No additional configuration is required to run the app with Docker beyond the steps above. If you need to customize the build or runtime environment, adjust the Dockerfile or `docker-compose.yml` as needed.
