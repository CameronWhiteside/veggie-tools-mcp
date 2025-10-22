#!/bin/bash

# Test script to send 10 requests per bot to both / and /robots.txt
# Usage: ./test-requests.sh

BASE_URL="https://veggie.tools"
USER_AGENTS=(
    # "GPTBot"
    "Googlebot"
    # "Amazonbot"
    # "Anchor Browser"
    # "Applebot"
    # "archive.org_bot"
    # "bingbot"
    # "Bytespider"
    # "CCBot"
    # "ChatGPT-User"
    # "ClaudeBot"
    # "Claude-SearchBot"
    # "Claude-User"
    # "DuckAssistBot"
    # "FacebookBot"
    # "Google-CloudVertexBot"
    # "meta-externalagent"
    # "meta-externalfetcher"
    # "MistralAI-User"
    # "Novellum AI Crawl"
    # "OAI-SearchBot"
    # "PerplexityBot"
    # "Perplexity-User"
    # "PetalBot"
    # "ProRataInc"
    # "Timpibot"
	# "Boop"
)

REQUESTS_PER_BOT=1000
ENDPOINTS=("/")
TOTAL_REQUESTS=$((${#USER_AGENTS[@]} * REQUESTS_PER_BOT * ${#ENDPOINTS[@]}))

echo "🤖 Bot Crawler Test - Root & Robots.txt"
echo "========================================"
echo "Total User Agents: ${#USER_AGENTS[@]}"
echo "Requests per Bot per Endpoint: $REQUESTS_PER_BOT"
echo "Endpoints: ${ENDPOINTS[@]}"
echo "Total Requests: $TOTAL_REQUESTS"
echo "Target: $BASE_URL"
echo ""
echo "Starting concurrent requests..."
echo ""

# Function to make a request
make_request() {
    local index=$1
    local user_agent="$2"
    local endpoint="$3"
    local timestamp=$(date '+%H:%M:%S.%3N')

    printf "[%-5d] %s - %-25s %-15s " "$index" "$timestamp" "$user_agent" "$endpoint"

    curl -s -o /dev/null -w "Status: %{http_code} | Time: %{time_total}s | Size: %{size_download}b\n" \
        -H "User-Agent: $user_agent" \
        -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
        -H "Accept-Language: en-US,en;q=0.5" \
        -H "Accept-Encoding: gzip, deflate" \
        -H "Connection: keep-alive" \
        -H "Cache-Control: no-cache" \
        --max-time 30 \
        "$BASE_URL$endpoint" &
}

# Start concurrent requests - 10 per bot per endpoint
request_count=0
for user_agent in "${USER_AGENTS[@]}"; do
    echo "📡 Launching requests for: $user_agent"

    for endpoint in "${ENDPOINTS[@]}"; do
        for i in $(seq 1 $REQUESTS_PER_BOT); do
            request_count=$((request_count + 1))
            make_request "$request_count" "$user_agent" "$endpoint"

            # Small delay to avoid overwhelming the server
            sleep 0.003
        done
    done

    echo "   ✓ Queued $((REQUESTS_PER_BOT * ${#ENDPOINTS[@]})) requests"
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "All $TOTAL_REQUESTS requests initiated. Waiting for responses..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

wait

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Bot test completed!"
echo "Total requests sent: $TOTAL_REQUESTS"
echo "  - Root (/) requests: $((${#USER_AGENTS[@]} * REQUESTS_PER_BOT))"
echo "  - robots.txt requests: $((${#USER_AGENTS[@]} * REQUESTS_PER_BOT))"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
