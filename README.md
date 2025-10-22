# 🌱 Veggie Tools MCP Server

**Demo Site**: [https://veggie.tools](https://veggie.tools)

A Model Context Protocol (MCP) server that provides vegetable gardening assistance. This is a demo project.

## Running Test Bots

Test the site with simulated bot traffic:

```bash
npm run test-bots
```

This will send requests to the live site simulating various search engine bots (Googlebot, etc.).

### Edit the Test Script

To customize the test behavior, edit `test-requests.sh`:

- **User Agents** (lines 7-35): Uncomment or add bot names in the `USER_AGENTS` array
- **Number of Requests** (line 37): Change `REQUESTS_PER_BOT=1000` to your desired amount
- **Paths** (line 38): Modify `ENDPOINTS=("/")` to test different URLs

## Deployment

### Prerequisites

- Node.js 18+
- Cloudflare account
- Wrangler CLI

### Deploy to Cloudflare Workers

```bash
# Install dependencies
npm install

# Login to Cloudflare (first time only)
npx wrangler login

# Deploy
npm run deploy
```

Your site will be deployed to:

```
https://veggie-tools-mcp.<your-subdomain>.workers.dev
```

### Local Development

```bash
# Run development server
npm run dev
```

Server runs at `http://localhost:8787`

---
