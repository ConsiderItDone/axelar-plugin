import { EnvironmentConfig } from "../query/w3";

const configsMap: { [environment: string]: EnvironmentConfig } = {};

const localConfigs: EnvironmentConfig = {
  resourceUrl: `http://localhost:4000`,
  axelarRpcUrl: "https://axelartest-rpc.quickapi.com",
  axelarLcdUrl: "https://axelartest-lcd.quickapi.com",
  axelarCachingServiceUrl: "https://testnet.api.gmp.axelarscan.io",
};
const devnetConfigs: EnvironmentConfig = {
  resourceUrl: `https://nest-server-devnet.axelar.dev`,
  axelarRpcUrl: "",
  axelarLcdUrl: "",
  axelarCachingServiceUrl: "https://devnet.api.gmp.axelarscan.io",
};
const testnetConfigs: EnvironmentConfig = {
  resourceUrl: `https://nest-server-testnet.axelar.dev`,
  axelarRpcUrl: "https://axelartest-rpc.quickapi.com",
  axelarLcdUrl: "https://axelartest-lcd.quickapi.com",
  axelarCachingServiceUrl: "https://testnet.api.gmp.axelarscan.io",
};
const mainnetConfigs: EnvironmentConfig = {
  resourceUrl: `https://nest-server-mainnet.axelar.dev`,
  axelarRpcUrl: "https://axelar-rpc.quickapi.com",
  axelarLcdUrl: "https://axelar-lcd.quickapi.com",
  axelarCachingServiceUrl: "https://mainnet.api.gmp.axelarscan.io",
};

configsMap["local"] = localConfigs;
configsMap["devnet"] = devnetConfigs;
configsMap["testnet"] = testnetConfigs;
configsMap["mainnet"] = mainnetConfigs;

let configToUse: EnvironmentConfig;

export const getConfigs = (environment: string): EnvironmentConfig => {
  if (!configToUse) {
    if (!configsMap[environment])
      throw new Error("config environment does not exist");
    configToUse = configsMap[environment];
  }
  return configToUse;
};
