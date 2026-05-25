export const ARC_TESTNET_CHAIN_ID = 5042002;
export const ARC_EXPLORER = "https://testnet.arcscan.app";
export const ARC_RPC_URL =
  process.env.ARC_TESTNET_RPC_URL ?? "https://rpc.testnet.arc.network";

export const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000" as const;
export const EURC_ADDRESS =
  "0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a" as const;

// Live DecisionRegistry deployed on Arc Testnet. Source of truth for every
// recorded committee decision; the ledger is read back from its events.
export const DECISION_REGISTRY_ADDRESS = (process.env
  .NEXT_PUBLIC_DECISION_REGISTRY_ADDRESS ??
  process.env.DECISION_REGISTRY_ADDRESS ??
  "") as string;

// Block the registry was deployed at — bounds event log queries.
export const REGISTRY_DEPLOY_BLOCK = 43985651n;

export const TREASURY_CAP_USDC = 25;
