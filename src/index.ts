import { PluginFactory, PluginPackage } from "@web3api/core-js";
import { getConfigs } from "./common/configs";
import { EnvironmentConfig } from "./query/w3";
import * as Internal from "./w3";
export { manifest, schema } from "./w3";

export interface AxelarPluginConfigs extends Record<string, unknown> {
  environment: string;
  auth?: string;
}

export class AxelarPlugin extends Internal.AxelarPlugin {
  environmentConfig: EnvironmentConfig;

  constructor(pluginConfig: AxelarPluginConfigs) {
    const environmentConfig = getConfigs(pluginConfig.environment);
    super({
      query: { environmentConfig, testMode: pluginConfig.auth === "local" },
    });
    this.environmentConfig = environmentConfig;
  }
}

export const axelarPlugin: PluginFactory<AxelarPluginConfigs> = (
  pluginConfig: AxelarPluginConfigs
): PluginPackage => {
  const environmentConfig = getConfigs(pluginConfig.environment);

  return Internal.axelarPlugin({
    query: { environmentConfig, testMode: pluginConfig.auth === "local" },
  });
};

export const plugin = axelarPlugin;
