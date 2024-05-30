import { createPromiseClient } from "@connectrpc/connect";
import { ElizaService } from "./gen/eliza_connect.ts";
import { createConnectTransport } from "@connectrpc/connect-web";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
  // Not needed. Web browsers use HTTP/2 automatically.
  // httpVersion: "1.1"
});

async function main() {
  const client = createPromiseClient(ElizaService, transport);
  const res = await client.say({ sentence: "I feel happy." });
  console.log(res);
}
void main();
