/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.

import * as Types from "./types";

import {
  Client,
  PluginModule,
  MaybeAsync
} from "@polywrap/core-js";

export interface Args_getLinkEvent extends Record<string, unknown> {
  roomId: Types.String;
}

export interface Args_getTraceId extends Record<string, unknown> {
}

export interface Args_getConfig extends Record<string, unknown> {
}

export abstract class Module<
  TConfig
> extends PluginModule<
  TConfig
> {

  abstract getLinkEvent(
    args: Args_getLinkEvent,
    client: Client
  ): MaybeAsync<Types.String>;

  abstract getTraceId(
    args: Args_getTraceId,
    client: Client
  ): MaybeAsync<Types.String>;

  abstract getConfig(
    args: Args_getConfig,
    client: Client
  ): MaybeAsync<Types.EnvironmentConfig>;
}
