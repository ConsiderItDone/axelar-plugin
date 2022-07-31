import {
  MaybeAsync,
  PluginFactory,
  PluginPackageManifest,
} from "@polywrap/core-js";
import { getConfigs } from "./utils/configs";
import {
  Args_getLinkEvent,
  Args_getTraceId,
  EnvironmentConfig,
  manifest,
  Module,
} from "./wrap";
import { v4 as uuidv4 } from "uuid";
import { SocketService } from "./services/SocketService";

export interface AxelarPluginConfigs extends Record<string, unknown> {
  environment: string;
  auth?: string;
}

export class AxelarPlugin extends Module<AxelarPluginConfigs> {
  environmentConfig: EnvironmentConfig;

  constructor(pluginConfig: AxelarPluginConfigs) {
    super(pluginConfig);
    this.environmentConfig = getConfigs(pluginConfig.environment);
  }

  public static manifest(): PluginPackageManifest {
    return manifest;
  }

  getConfig(): MaybeAsync<EnvironmentConfig> {
    return this.environmentConfig;
  }

  getTraceId(args: Args_getTraceId): MaybeAsync<string> {
    return uuidv4();
  }

  async getLinkEvent(args: Args_getLinkEvent): Promise<string> {
    const socket = new SocketService(this.environmentConfig.resourceUrl);

    const { newRoomId } = await socket
      .joinRoomAndWaitForEvent(args.roomId)
      .catch((error) => {
        throw error;
      });

    socket.disconnect();

    return newRoomId;
  }
}

export const axelarPlugin: PluginFactory<AxelarPluginConfigs> = (
  pluginConfig: AxelarPluginConfigs
) => {
  return {
    factory: () => new AxelarPlugin(pluginConfig),
    manifest: AxelarPlugin.manifest(),
  };
};

export const plugin = axelarPlugin;
