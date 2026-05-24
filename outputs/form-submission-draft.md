# Agora Agents Hackathon — Google Form Submission Draft

**Form URL:** https://forms.gle/ok3Gr9zhmHnApvK48  
**Resolved URL:** https://docs.google.com/forms/d/e/1FAIpQLSfgDV0TLAEONtGYDKSjxusDCeqsa4prj01FhoBM2a8NTQvfmA/viewform  
**Status:** DRAFT — Gabriel must open form and fill manually. Do NOT auto-submit.  
**Prepared:** 2026-05-24 by autonomous Claude session

---

## Field-by-field answers

### Project Name
```
AGRA — Committee-Governed Grantmaker
```

### GitHub Handle
```
gabrielantonyxaviour
```

### Discord Handle
```
[Gabriel: fill in your Discord handle, e.g. gabrielaxy or similar]
```

### Telegram Handle
```
[Gabriel: fill in your Telegram handle]
```

### Twitter / X Profile (optional)
```
https://x.com/gabrielaxyeth
```

### Number of Team Members
```
1 (Solo)
```

### Team Members Names
```
Gabriel Antony Xaviour
```

### Problem Statement
```
Micro-grant programs are bottlenecked by human review committees — slow, expensive, inconsistent, and inaccessible at scale. Organizations like Open Source Collective, Gitcoin, and Protocol Labs spend weeks manually reviewing hundreds of small grant applications for projects that need funding in days, not months. The result: good projects drop out, reviewers burn out, and treasury allocation decisions are opaque and hard to audit.
```

### Project Description
```
AGRA is an autonomous grant committee that reviews micro-grant applications using three independent AI agents — a Public Goods Agent (evaluates impact and public benefit), a Safety Agent (vetoes weak proof or unsafe requests), and a Treasury Agent (enforces payout caps and policy). Each agent votes independently: any agent can veto, cap, or accept a request. Decisions are deterministic and reproducible from a trace hash. Accepted applications produce an encoded USDC payout call ready for recording on Circle Arc Testnet. Rejected applications receive a public reason. Every decision path can be replayed from the repo (`npm run replay`), making the committee fully auditable. The demo console allows anyone to submit a grant application and watch the three-agent deliberation in real time, with a fixture ledger showing prior accepted and rejected decisions.
```

### Traction
```
AGRA has processed 4 grant applications in the demo environment, including one accepted fixture (Priya Raman / Open-source Tamil AI Safety Glossary, 18 USDC) and one rejected fixture, both with public committee traces. The committee deliberation is live at https://agra-committee-grantmaker.vercel.app. The replay script allows anyone to independently reproduce the canonical accepted decision and verify the trace hash. No live Arc Testnet broadcast has been completed yet (pending Circle faucet funding of the test wallet 0x58374c7ec9192e2d588e39ACA0eA43f60f432b13 — faucet blocked by verification challenge). The Arc read proof works: chain ID 5042002, USDC decimals 6.
```

### Project Source Code (required)
```
https://github.com/gabrielantonyxaviour/agra-committee-grantmaker
```

### Project Live (optional but encouraged)
```
https://agra-committee-grantmaker.vercel.app
```

### Project Video Demo (required — BLOCKING)
```
[Gabriel: Record a < 3 min video following EXECUTION_PACKET.md demo script.
 Suggested tool: Loom (loom.com), then paste the share URL here.
 
 Demo script:
 1. Open https://agra-committee-grantmaker.vercel.app
 2. Show the seeded decision ledger (accepted / rejected fixtures)
 3. Submit a new grant application in the intake form
 4. Watch the three committee agents vote (PG / Safety / Treasury)
 5. Show the trace hash, payout currency, cap, Arc proof status
 6. Run `npm run replay` in terminal to show reproducibility
 7. Show `npm run arc:check` output (chain ID, USDC decimals, wallet balance 0)
 
 Target: 2-3 minutes. No narration required, just screen recording.]
```

### Circle / Arc Feedback (optional)
```
Arc Testnet RPC and USDC/EURC decimals are readable and work well out of the box via viem. The main friction point is the Circle faucet — it blocked our test wallet funding attempt with an unusual-traffic/reCAPTCHA challenge, which prevented us from completing a live Arc write proof (DecisionRegistry deployment + DecisionRecorded event). The faucet UX for developers should have a developer-mode or GitHub-authenticated path that doesn't require solving a captcha on every attempt. The Arc chain ID (5042002) and the USDC contract address are well-documented. The ABI and call encoding for `recordDecision` worked correctly on first attempt.
```

### General Feedback (optional)
```
The hackathon page and judging criteria were clear. Agentic sophistication and Circle tool usage as separate criteria was useful — it pushed us to integrate Arc meaningfully rather than just writing "uses USDC" in the description. Suggestion: add a testnet faucet alternative (drip via GitHub OAuth or social) so builders aren't blocked by CAPTCHAs during hack week.
```

---

## Pre-submit checklist

- [ ] Video URL filled in (BLOCKING — cannot submit without this)
- [ ] Discord handle filled in
- [ ] Telegram handle filled in  
- [ ] Review all answers for accuracy
- [ ] Open form in Gabriel's Chrome profile (gabrielantony56@gmail.com)
- [ ] Fill each field from this draft
- [ ] Screenshot the pre-submit state (scroll to show all answers)
- [ ] Gabriel reads and approves
- [ ] Click Submit

## Notes

- Google Forms did not render via agent-browser CDP/headless mode (consistent with prior session finding).
- Form was previously inventoried via curl — fields confirmed: project name, GitHub/Discord/Telegram/X handles, team size, team names, problem, description, traction, source code URL, live URL, video URL (required), Circle/Arc feedback, general feedback.
- The video URL field is REQUIRED and is the final blocker for submission.
