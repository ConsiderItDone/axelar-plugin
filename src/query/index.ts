import { Module, Client, Input_getLinkEvent, EnvironmentConfig } from "./w3";
import { v4 as uuidv4 } from "uuid";
import { SocketService } from "../common/SocketService";

export interface QueryConfig extends Record<string, unknown> {
  environmentConfig: EnvironmentConfig;
  testMode: boolean;
}

export class Query extends Module<QueryConfig> {
  environmentConfig: EnvironmentConfig;
  testMode: boolean;

  constructor(config: QueryConfig) {
    super(config);
    this.environmentConfig = config.environmentConfig;
    this.testMode = config.testMode || false;
    //this.testMode = config.testMode;
  }

  public getTraceId(): string {
    return uuidv4();
  }

  public getConfig(): EnvironmentConfig {
    return this.environmentConfig;
  }

  public async getLinkEvent(
    input: Input_getLinkEvent,
    client: Client
  ): Promise<string> {
    const socket = new SocketService(
      this.environmentConfig.resourceUrl,
      this.testMode
    );

    const { newRoomId } = await socket
      .joinRoomAndWaitForEvent(input.roomId)
      .catch((error) => {
        throw error;
      });

    socket.disconnect();

    return newRoomId;
  }
}
