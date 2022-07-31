/// NOTE: This is an auto-generated file.
///       All modifications will be overwritten.

export const schema: string = `### Polywrap Header START ###
scalar UInt
scalar UInt8
scalar UInt16
scalar UInt32
scalar Int
scalar Int8
scalar Int16
scalar Int32
scalar Bytes
scalar BigInt
scalar BigNumber
scalar JSON
scalar Map

directive @imported(
  uri: String!
  namespace: String!
  nativeType: String!
) on OBJECT | ENUM

directive @imports(
  types: [String!]!
) on OBJECT

directive @capability(
  type: String!
  uri: String!
  namespace: String!
) repeatable on OBJECT

directive @enabled_interface on OBJECT

directive @annotate(type: String!) on FIELD

directive @env(required: Boolean!) on FIELD_DEFINITION

### Polywrap Header END ###

type Module {
  getLinkEvent(
    roomId: String!
  ): String!

  getTraceId: String!

  getConfig: EnvironmentConfig!
}

type EnvironmentConfig {
  resourceUrl: String!
  axelarRpcUrl: String!
  axelarLcdUrl: String!
  axelarCachingServiceUrl: String!
}

### Imported Modules START ###

### Imported Modules END ###

### Imported Objects START ###

### Imported Objects END ###

### Imported Envs START ###

### Imported Envs END ###
`;
