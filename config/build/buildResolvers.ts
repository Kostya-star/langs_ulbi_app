import { ResolveOptions } from 'webpack';

export const buildResolvers = (): ResolveOptions => {
  return {
    // extensions: ['.tsx', '.ts', '.js'],
    // modules: ["src", "node_modules"],
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  };
};
