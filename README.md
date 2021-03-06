# Axelar JavaScript Plugin
A plugin to support the Axelar polywrapper. The Axelr wrapper depends on the Axelar JavaScript plugin.

# Installation

Yarn installation: `yarn add axelar-polywrap-js`

or with NPM: `npm install axelar-polywrap-js`

# How to use

Set up your Axelar config.
```typescript
import { AxelarPluginConfig } from "@cidt/axelar-polywrap-js";

export async function setUpTestConfig(): Promise<AxelarPluginConfig> {
  let config: AxelarPluginConfig = {
    environment: "testnet" // devnet, mainnet,
  };
  return config;
}

const axelarConfig = setUpTestConfig();

export default axelarConfig;
```

Then add the plugin to the Polywrap Client configuration.
```typescript
import { Web3ApiClient } from "@web3api/client-js";
import { plugin as axelarPlugin } from "@cidt/axelar-polywrap-js";
import axelarConfig from "./utils/config";

const client = new Web3ApiClient({
  plugins: [
    {
      uri: "w3://ens/axelar.web3api.eth",
      plugin: axelarPlugin(axelarConfig)
    }
  ]
});

```

Now you're ready to make queries to the [Axelar wrapper](https://github.com/ConsiderItDone/axelar-wrapper).
