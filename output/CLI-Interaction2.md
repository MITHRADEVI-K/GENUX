@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ npm test --silent
(node:55536) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/data-processor.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use node --trace-warnings ... to show where the warning was created)
✔ mean and variance helpers (1.41686ms)
✔ statisticalSignificance simple case (0.443546ms)
✔ computeDriftScore uses weights and temporal decay (0.278759ms)
✔ processRealTimeData computes metrics and returns object (0.576454ms)
(node:55547) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/gemini-adapter.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use node --trace-warnings ... to show where the warning was created)
✔ gemini adapter offline deterministic response (1.624046ms)
✔ gemini adapter live mode without key throws (0.660841ms)
(node:55558) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use node --trace-warnings ... to show where the warning was created)
✔ integration: detect drift between v1 and v2 fixtures (2.765926ms)
(node:55569) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use node --trace-warnings ... to show where the warning was created)
✓ Loaded 2271 rows in 26.06ms
✓ Statistical significance computed in 2.38ms (target: 156ms)
Value: 0.0379
✓ Real-time metrics in 3.45ms (target: 156ms)
Adaptation Effectiveness: 3.66/5
Intent Match Rate: 82.5%
✓ Drift score computed in 4.01ms (target: 2100ms, stub mode)
Statistical Significance: 0.0379
Combined Drift Score: 0.4769
✓ Intent accuracy: 0.7027 (range: [-1, 1])
✓ Average UX sentiment: 3.18/5
✓ All metrics in valid ranges:
Personalization: 4.13/5
Loading Speed: 4.10/5
Mobile Responsiveness: 4.21/5
Accessibility: 4.10/5
✔ Performance: Load real UX Research.csv dataset (28.781005ms)
✔ Performance: Statistical significance on real data (120 rows) (18.173654ms)
✔ Performance: Real-time metrics processing (full dataset) (26.287169ms)
✔ Performance: Drift score computation with LLM confidence (45.584773ms)
✔ Accuracy: Intent accuracy calculation on real data (14.128384ms)
✔ Correctness: Verify sentiment mapping correctness (16.699342ms)
✔ Correctness: Validate metric averages are in expected ranges (14.497194ms)
ℹ tests 14
ℹ suites 0
ℹ pass 14
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 469.418882
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $



