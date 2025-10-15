# 🌱 Veggie Tools MCP Server

A Model Context Protocol (MCP) server that provides comprehensive vegetable gardening assistance. Deploy this on Cloudflare Workers to get expert gardening advice through MCP-compatible AI assistants.

## Features

- **Plant Information**: Detailed growing guides for common vegetables and herbs
- **Companion Planting**: Learn which plants grow well together
- **Planting Calendar**: Zone-specific planting schedules
- **Pest Diagnosis**: Common pest identification and management
- **Soil Requirements**: pH levels and soil preparation guides
- **Watering Guides**: Optimal watering schedules and best practices

## Supported Plants

- Tomato
- Lettuce
- Carrot
- Pepper
- Cucumber
- Basil
- Zucchini

## API Endpoints

### Health Check
```
GET /health
```
Returns the service health status.

### MCP Protocol
```
POST /mcp
```
Main endpoint for MCP tool calls. Accepts JSON requests with the following structure:
```json
{
  "method": "tools/list" | "tools/call",
  "params": {
    "name": "tool_name",
    "arguments": { /* tool-specific args */ }
  }
}
```

### API Info
```
GET /api
```
Returns information about available tools and endpoints.

## Available MCP Tools

### 1. get_plant_info
Get detailed growing information for a specific plant.
```json
{
  "plant": "tomato"
}
```

### 2. companion_planting
Get companion planting recommendations.
```json
{
  "plant": "tomato"
}
```

### 3. planting_calendar
Get planting timing based on USDA hardiness zone (1-10).
```json
{
  "zone": 7,
  "plant": "tomato" // optional
}
```

### 4. diagnose_pest
Get information about common pests for a plant.
```json
{
  "plant": "tomato"
}
```

### 5. soil_requirements
Get soil pH and preparation requirements.
```json
{
  "plant": "tomato"
}
```

### 6. watering_guide
Get watering schedule and best practices.
```json
{
  "plant": "tomato"
}
```

### 7. list_vegetables
List all available plants in the database (no parameters required).

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Cloudflare account (for deployment)

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

### Local Testing
The development server will start at `http://localhost:8787`

Visit the root URL to see the web interface, or test the API endpoints:
```bash
# Health check
curl http://localhost:8787/health

# List tools
curl -X POST http://localhost:8787/mcp \
  -H "Content-Type: application/json" \
  -d '{"method":"tools/list","params":{}}'

# Get plant info
curl -X POST http://localhost:8787/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "method":"tools/call",
    "params":{
      "name":"get_plant_info",
      "arguments":{"plant":"tomato"}
    }
  }'
```

## Deployment to Cloudflare Workers

### First Time Setup
1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

### Deploy
```bash
npm run deploy
```

Your MCP server will be deployed to Cloudflare's global network and accessible at:
```
https://veggie-tools-mcp.<your-subdomain>.workers.dev
```

### Environment Configuration
The deployment is configured in `wrangler.jsonc`. You can modify:
- Worker name
- Compatibility date
- Static assets directory

## Project Structure

```
veggie-tools-mcp/
├── src/
│   └── index.ts          # Main MCP server implementation
├── public/
│   ├── index.html        # Web interface
│   └── robots.txt        # SEO configuration
├── test/
│   └── index.spec.ts     # Tests
├── package.json          # Dependencies
├── wrangler.jsonc        # Cloudflare Workers config
└── tsconfig.json         # TypeScript config
```

## Using with MCP Clients

To use this server with an MCP-compatible AI assistant:

1. Configure your MCP client to point to your deployed worker URL
2. The server will expose all gardening tools to the AI assistant
3. Ask questions like:
   - "What are the soil requirements for growing tomatoes?"
   - "When should I plant carrots in zone 7?"
   - "What plants are good companions for basil?"

## Technology Stack

- **Runtime**: Cloudflare Workers
- **Framework**: Model Context Protocol SDK
- **Language**: TypeScript
- **Testing**: Vitest
- **Deployment**: Wrangler CLI

## Contributing

Contributions are welcome! To add more plants or features:

1. Update the `VEGETABLES_DB` object in `src/index.ts`
2. Add or modify tools as needed
3. Update tests
4. Submit a pull request

## License

MIT License - feel free to use this project for your gardening needs!

## Support

For issues or questions:
- Open an issue on GitHub
- Check the MCP documentation at https://github.com/modelcontextprotocol/servers

---

Built with ❤️ for gardeners everywhere 🌿

