# AGRA X Post Draft

Date: 2026-05-24
Status: DRAFT — do NOT post without Gabriel's approval

---

## Option A — Demo-forward (recommended)

Built AGRA: an autonomous grant committee for the @AgoraCanteen hackathon 🏛️

Three AI committee agents review micro-grant applications:
• Public Goods agent — impact signal
• Safety agent — vets proof/security
• Treasury agent — enforces caps & policy

Each decision produces a USDC-ready trace hash for @Circle Arc Testnet recording.

No humans clicked "approve" on any of these decisions.

Repo: https://github.com/gabrielantonyxaviour/agra-committee-grantmaker
Live: https://agra-committee-grantmaker.vercel.app

#AgentHackathon #CircleUSDC #ArcTestnet #AI #PublicGoods

---

## Option B — Technical angle

AGRA records grant committee decisions on-chain with cryptographic traces.

Architecture:
- 3 independent LLM agents vote (PG / Safety / Treasury)
- Dissent + vetoes produce `canBroadcast: false` outcomes
- Accepted decisions encode a USDC Arc Testnet call
- Every trace is reproducible: `npm run replay`

Built for @AgoraCanteen x @Circle hackathon.

https://github.com/gabrielantonyxaviour/agra-committee-grantmaker

---

## Option C — One-liner (for replies/threads)

AGRA: 3 AI agents committee-vote on grant applications. Accepted → USDC payout trace on @Circle Arc Testnet. No human approval needed.

https://github.com/gabrielantonyxaviour/agra-committee-grantmaker

---

## Notes for Gabriel

- Replace video placeholder once a demo video is recorded
- If Arc Testnet write succeeds (faucet funded), add the Arc tx hash/explorer URL
- Post from @gabrielaxyeth account
- Tag @AgoraCanteen and @Circle — verify correct handles before posting
