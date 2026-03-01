# GenUX Refinement Plan (Paper-Aligned, Backward-Compatible)

This document is a planning-first roadmap to refine the GenUX codebase **without breaking the current accepted research outputs**.

## 1) Gap Analysis: Codebase vs. Paper Claims

### A. LLM/Semantic drift status is inconsistent
- The paper conclusion says semantic/embedding-based drift is not yet implemented.
- The repository currently includes a Gemini analysis API route (LLM endpoint), which can create confusion unless positioned as an optional analysis layer rather than a core detector.

### B. Reproducibility risk from external data URLs
- The main dashboard fetches CSV files from public remote URLs.
- For research reproducibility, primary experiments should run from versioned local datasets/fixtures first, with remote data as optional extensions.

### C. Core engine import/path mismatch risk
- `lib/genux-core.ts` imports `BehaviorLearningModel`, `UIGenerator`, and `DeploymentEngine` using names/paths that do not match current file names in `lib/`.
- This can break strict builds and weakens confidence in runtime claims.

### D. Synthetic/randomized UI metrics in dashboard path
- `components/genux-dashboard.tsx` simulates many metrics using `Math.random()`.
- This is useful for demoing but should be clearly separated from paper-metric evaluation paths.

### E. Security and governance gap
- Gemini API route has a fallback key in source code. Even for research prototypes, default keys in code should be removed.

### F. Data processing assumptions are fragile
- Lightweight CSV parsing currently splits on commas/semicolons/tabs without robust quote handling. This is acceptable for controlled fixtures but risky for real-world logs.

## 2) Data Strategy (Decide Before Refactor)

To keep your accepted metrics stable while enabling real-time testing, use **three-tier data handling**:

1. **Tier A — Frozen Research Baseline (Do Not Change)**
   - Keep existing fixtures and outputs used in paper claims.
   - Tag them as immutable baseline assets.

2. **Tier B — Controlled Real-Time Pilot Data**
   - New append-only interaction logs from your current app sessions.
   - Store as versioned daily files (or SQLite) with schema validation.

3. **Tier C — Optional External/LLM Enrichment**
   - LangChain/Gemini-based narrative insight generation as a non-blocking module.
   - Must not alter baseline drift metric formulas.

## 3) Refactor Plan (Module-Wise, Minimal Change)

### Module 0: Baseline Freeze + Audit
- Snapshot current outputs (`e2e-output.json`, `sensitivity-summary.json`, CSV metrics).
- Add a reproducibility manifest documenting command + checksum for each baseline artifact.

### Module 1: Data Contracts
- Define a canonical interaction schema (required fields + optional fields).
- Add schema validation at ingestion boundary.
- Add explicit dataset modes: `baseline`, `realtime`, `external`.

### Module 2: Drift Core Isolation
- Keep paper metrics implementation untouched, move to a dedicated deterministic core module.
- Wrap existing processor behind a stable interface so UI/demo code cannot accidentally change formulas.

### Module 3: Realtime Ingestion (No API dependency)
- Add local ingestion adapter for app logs.
- Keep processing synchronous/lightweight target (2–5 ms per event path where feasible).
- Add queue + backpressure behavior for burst traffic.

### Module 4: Optional LangChain Artifact Layer
- Add a separate “insight generation” service:
  - Input: computed drift metrics + selected context windows.
  - Output: narrative artifact (markdown/json report).
- This module is optional and does not influence drift score computation.

### Module 5: Verification Matrix
- Build tests that map each paper metric to one executable check.
- Add regression checks to ensure baseline metrics remain within strict tolerance.

## 4) What We Should Not Change (to protect accepted research)

- Do not modify core equations used to report:
  - combined drift score,
  - significance thresholding,
  - latency reporting method,
  - intent match computation.
- Do not overwrite historical output artifacts used in manuscript results.

## 5) First Coding Iteration Proposal

1. Remove secret fallback behavior (API key from env only).
2. Introduce a `data-source` config (`baseline|realtime|external`) with default `baseline`.
3. Add schema validation for incoming records.
4. Fix core engine import/path consistency.
5. Add regression script that compares new run vs frozen baseline outputs.

## 6) Open Questions for You (before coding modules)

1. Which exact dataset should be the **official Tier A baseline** (single file vs. merged files)?
2. For Tier B realtime data, do you prefer file logs (CSV/JSONL) or SQLite?
3. Should LangChain run with Gemini, OpenAI, or provider-agnostic abstraction first?
4. Do you want paper-facing figures regenerated from only Tier A data, or Tier A + Tier B side-by-side?

