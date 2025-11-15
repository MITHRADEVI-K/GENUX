13 nov 2025 


result:

@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test -- --reporter=spec 2>&1 | head -200

> my-v0-project@0.1.0 test
> node --test --reporter=spec

node: bad option: --reporter=spec
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1

> my-v0-project@0.1.0 test
> node --test

(node:17809) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/data-processor.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ mean and variance helpers (1.289766ms)
✔ statisticalSignificance simple case (0.452865ms)
✔ computeDriftScore uses weights and temporal decay (0.288138ms)
✔ processRealTimeData computes metrics and returns object (0.54157ms)
file:///workspaces/GENUX-FORGE/lib/gemini-adapter.js:66
module.exports = { analyze, MODE }
^

ReferenceError: module is not defined in ES module scope
    at file:///workspaces/GENUX-FORGE/lib/gemini-adapter.js:66:1
    at ModuleJobSync.runSync (node:internal/modules/esm/module_job:436:37)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:427:47)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1561:24)
    at Module._compile (node:internal/modules/cjs/loader:1712:5)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)

Node.js v22.17.0
✖ test/gemini-adapter.test.js (29.704559ms)
(node:17827) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ integration: detect drift between v1 and v2 fixtures (2.193613ms)
(node:17838) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓ Loaded 2271 rows in 34.63ms
  ✓ Statistical significance computed in 2.82ms (target: 156ms)
    Value: 0.0379
  ✓ Real-time metrics in 1.83ms (target: 156ms)
    Adaptation Effectiveness: 3.66/5
    Intent Match Rate: 82.5%
  ✓ Drift score computed in 1.97ms (target: 2100ms, stub mode)
    Statistical Significance: 0.0379
    Combined Drift Score: 0.4769
  ✓ Average UX sentiment: 3.18/5
  ✓ All metrics in valid ranges:
    Personalization: 4.13/5
    Loading Speed: 4.10/5
    Mobile Responsiveness: 4.21/5
    Accessibility: 4.10/5
✔ Performance: Load real UX Research.csv dataset (37.053076ms)
✔ Performance: Statistical significance on real data (120 rows) (17.622771ms)
✔ Performance: Real-time metrics processing (full dataset) (17.806468ms)
✔ Performance: Drift score computation with LLM confidence (22.403069ms)
✖ Accuracy: Intent accuracy calculation on real data (14.738537ms)
✔ Correctness: Verify sentiment mapping correctness (12.406614ms)
✔ Correctness: Validate metric averages are in expected ranges (15.474631ms)
ℹ tests 13
ℹ suites 0
ℹ pass 11
ℹ fail 2
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 422.60854

✖ failing tests:

test at test/gemini-adapter.test.js:1:1
✖ test/gemini-adapter.test.js (29.704559ms)
  'test failed'

test at test/performance.test.js:88:1
✖ Accuracy: Intent accuracy calculation on real data (14.738537ms)
  AssertionError [ERR_ASSERTION]: intent accuracy in [-1,1], got -9.743505063848525
      at TestContext.<anonymous> (file:///workspaces/GENUX-FORGE/test/performance.test.js:100:10)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1047:25)
      at Test.processPendingSubtests (node:internal/test_runner/test:744:18)
      at Test.postRun (node:internal/test_runner/test:1173:19)
      at Test.run (node:internal/test_runner/test:1101:12)
      at async Test.processPendingSubtests (node:internal/test_runner/test:744:7) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: '=='
  }
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1 | tail -100
#     at Object..js (node:internal/modules/cjs/loader:1895:10)
#     at Module.load (node:internal/modules/cjs/loader:1465:32)
#     at Function._load (node:internal/modules/cjs/loader:1282:12)
#     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
#     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
#     at Module.require (node:internal/modules/cjs/loader:1487:12)
# Node.js v22.17.0
# Subtest: test/gemini-adapter.test.js
not ok 2 - test/gemini-adapter.test.js
  ---
  duration_ms: 28.853582
  type: 'test'
  location: '/workspaces/GENUX-FORGE/test/gemini-adapter.test.js:1:1'
  failureType: 'testCodeFailure'
  exitCode: 1
  signal: ~
  error: 'test failed'
  code: 'ERR_TEST_FAILURE'
  ...
# (node:18364) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
# Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
# To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
# (Use `node --trace-warnings ...` to show where the warning was created)
# Subtest: integration: detect drift between v1 and v2 fixtures
ok 6 - integration: detect drift between v1 and v2 fixtures
  ---
  duration_ms: 2.174327
  type: 'test'
  ...
# (node:18375) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
# Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
# To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
# (Use `node --trace-warnings ...` to show where the warning was created)
#   ✓ Loaded 2271 rows in 21.34ms
#   ✓ Statistical significance computed in 2.00ms (target: 156ms)
#     Value: 0.0379
#   ✓ Real-time metrics in 1.79ms (target: 156ms)
#     Adaptation Effectiveness: 3.66/5
#     Intent Match Rate: 82.5%
#   ✓ Drift score computed in 1.67ms (target: 2100ms, stub mode)
#     Statistical Significance: 0.0379
#     Combined Drift Score: 0.4769
#   ✓ Intent accuracy: 0.7027 (range: [-1, 1])
#   ✓ Average UX sentiment: 3.18/5
#   ✓ All metrics in valid ranges:
#     Personalization: 4.13/5
#     Loading Speed: 4.10/5
#     Mobile Responsiveness: 4.21/5
#     Accessibility: 4.10/5
# Subtest: Performance: Load real UX Research.csv dataset
ok 7 - Performance: Load real UX Research.csv dataset
  ---
  duration_ms: 23.475477
  type: 'test'
  ...
# Subtest: Performance: Statistical significance on real data (120 rows)
ok 8 - Performance: Statistical significance on real data (120 rows)
  ---
  duration_ms: 15.26939
  type: 'test'
  ...
# Subtest: Performance: Real-time metrics processing (full dataset)
ok 9 - Performance: Real-time metrics processing (full dataset)
  ---
  duration_ms: 15.881747
  type: 'test'
  ...
# Subtest: Performance: Drift score computation with LLM confidence
ok 10 - Performance: Drift score computation with LLM confidence
  ---
  duration_ms: 19.68036
  type: 'test'
  ...
# Subtest: Accuracy: Intent accuracy calculation on real data
ok 11 - Accuracy: Intent accuracy calculation on real data
  ---
  duration_ms: 12.299187
  type: 'test'
  ...
# Subtest: Correctness: Verify sentiment mapping correctness
ok 12 - Correctness: Verify sentiment mapping correctness
  ---
  duration_ms: 15.294494
  type: 'test'
  ...
# Subtest: Correctness: Validate metric averages are in expected ranges
ok 13 - Correctness: Validate metric averages are in expected ranges
  ---
  duration_ms: 11.813851
  type: 'test'
  ...
1..13
# tests 13
# suites 0
# pass 12
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 359.798425
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1 | tail -50
ok 7 - Performance: Load real UX Research.csv dataset
  ---
  duration_ms: 25.694718
  type: 'test'
  ...
# Subtest: Performance: Statistical significance on real data (120 rows)
ok 8 - Performance: Statistical significance on real data (120 rows)
  ---
  duration_ms: 17.522832
  type: 'test'
  ...
# Subtest: Performance: Real-time metrics processing (full dataset)
ok 9 - Performance: Real-time metrics processing (full dataset)
  ---
  duration_ms: 15.889344
  type: 'test'
  ...
# Subtest: Performance: Drift score computation with LLM confidence
ok 10 - Performance: Drift score computation with LLM confidence
  ---
  duration_ms: 25.935239
  type: 'test'
  ...
# Subtest: Accuracy: Intent accuracy calculation on real data
ok 11 - Accuracy: Intent accuracy calculation on real data
  ---
  duration_ms: 18.954673
  type: 'test'
  ...
# Subtest: Correctness: Verify sentiment mapping correctness
ok 12 - Correctness: Verify sentiment mapping correctness
  ---
  duration_ms: 23.677254
  type: 'test'
  ...
# Subtest: Correctness: Validate metric averages are in expected ranges
ok 13 - Correctness: Validate metric averages are in expected ranges
  ---
  duration_ms: 22.096524
  type: 'test'
  ...
1..13
# tests 13
# suites 0
# pass 12
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 501.706581
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1 | grep -A 15 "not ok"
not ok 2 - test/gemini-adapter.test.js
  ---
  duration_ms: 29.262755
  type: 'test'
  location: '/workspaces/GENUX-FORGE/test/gemini-adapter.test.js:1:1'
  failureType: 'testCodeFailure'
  exitCode: 1
  signal: ~
  error: 'test failed'
  code: 'ERR_TEST_FAILURE'
  ...
# (node:18902) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
# Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
# To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
# (Use `node --trace-warnings ...` to show where the warning was created)
# Subtest: integration: detect drift between v1 and v2 fixtures
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1 | tail -20
ok 12 - Correctness: Verify sentiment mapping correctness
  ---
  duration_ms: 13.308099
  type: 'test'
  ...
# Subtest: Correctness: Validate metric averages are in expected ranges
ok 13 - Correctness: Validate metric averages are in expected ranges
  ---
  duration_ms: 11.755113
  type: 'test'
  ...
1..13
# tests 13
# suites 0
# pass 12
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 416.640854
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test 2>&1 | tail -60
#     Statistical Significance: 0.0379
#     Combined Drift Score: 0.4769
#   ✓ Intent accuracy: 0.7027 (range: [-1, 1])
#   ✓ Average UX sentiment: 3.18/5
#   ✓ All metrics in valid ranges:
#     Personalization: 4.13/5
#     Loading Speed: 4.10/5
#     Mobile Responsiveness: 4.21/5
#     Accessibility: 4.10/5
# Subtest: Performance: Load real UX Research.csv dataset
ok 7 - Performance: Load real UX Research.csv dataset
  ---
  duration_ms: 23.296081
  type: 'test'
  ...
# Subtest: Performance: Statistical significance on real data (120 rows)
ok 8 - Performance: Statistical significance on real data (120 rows)
  ---
  duration_ms: 15.611946
  type: 'test'
  ...
# Subtest: Performance: Real-time metrics processing (full dataset)
ok 9 - Performance: Real-time metrics processing (full dataset)
  ---
  duration_ms: 15.91805
  type: 'test'
  ...
# Subtest: Performance: Drift score computation with LLM confidence
ok 10 - Performance: Drift score computation with LLM confidence
  ---
  duration_ms: 19.828273
  type: 'test'
  ...
# Subtest: Accuracy: Intent accuracy calculation on real data
ok 11 - Accuracy: Intent accuracy calculation on real data
  ---
  duration_ms: 11.578169
  type: 'test'
  ...
# Subtest: Correctness: Verify sentiment mapping correctness
ok 12 - Correctness: Verify sentiment mapping correctness
  ---
  duration_ms: 11.991743
  type: 'test'
  ...
# Subtest: Correctness: Validate metric averages are in expected ranges
ok 13 - Correctness: Validate metric averages are in expected ranges
  ---
  duration_ms: 11.562522
  type: 'test'
  ...
1..13
# tests 13
# suites 0
# pass 12
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 377.718362
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ node --test
(node:20260) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/data-processor.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ mean and variance helpers (1.229314ms)
✔ statisticalSignificance simple case (0.486538ms)
✔ computeDriftScore uses weights and temporal decay (0.304117ms)
✔ processRealTimeData computes metrics and returns object (1.394198ms)
(node:20271) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/gemini-adapter.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
file:///workspaces/GENUX-FORGE/lib/gemini-adapter.js:67
export { analyze, MODE }
                  ^^^^

SyntaxError: Duplicate export of 'MODE'
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)

Node.js v22.17.0
✖ test/gemini-adapter.test.js (42.530431ms)
(node:20282) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ integration: detect drift between v1 and v2 fixtures (4.330199ms)
(node:20293) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓ Loaded 2271 rows in 20.67ms
  ✓ Statistical significance computed in 4.52ms (target: 156ms)
    Value: 0.0379
  ✓ Real-time metrics in 4.18ms (target: 156ms)
    Adaptation Effectiveness: 3.66/5
    Intent Match Rate: 82.5%
  ✓ Drift score computed in 2.32ms (target: 2100ms, stub mode)
    Statistical Significance: 0.0379
    Combined Drift Score: 0.4769
  ✓ Intent accuracy: 0.7027 (range: [-1, 1])
  ✓ Average UX sentiment: 3.18/5
  ✓ All metrics in valid ranges:
    Personalization: 4.13/5
    Loading Speed: 4.10/5
    Mobile Responsiveness: 4.21/5
    Accessibility: 4.10/5
✔ Performance: Load real UX Research.csv dataset (23.115937ms)
✔ Performance: Statistical significance on real data (120 rows) (30.057016ms)
✔ Performance: Real-time metrics processing (full dataset) (44.645344ms)
✔ Performance: Drift score computation with LLM confidence (36.518852ms)
✔ Accuracy: Intent accuracy calculation on real data (22.187191ms)
✔ Correctness: Verify sentiment mapping correctness (14.985862ms)
✔ Correctness: Validate metric averages are in expected ranges (14.95973ms)
ℹ tests 13
ℹ suites 0
ℹ pass 12
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 519.933246

✖ failing tests:

test at test/gemini-adapter.test.js:1:1
✖ test/gemini-adapter.test.js (42.530431ms)
  'test failed'
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test --silent
(node:21028) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/data-processor.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ mean and variance helpers (1.190151ms)
✔ statisticalSignificance simple case (0.408723ms)
✔ computeDriftScore uses weights and temporal decay (0.302725ms)
✔ processRealTimeData computes metrics and returns object (0.500463ms)
(node:21045) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/gemini-adapter.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ gemini adapter offline deterministic response (1.434967ms)
✖ gemini adapter live mode without key throws (0.625417ms)
(node:21057) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ integration: detect drift between v1 and v2 fixtures (2.179536ms)
(node:21068) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓ Loaded 2271 rows in 39.77ms
  ✓ Statistical significance computed in 3.70ms (target: 156ms)
    Value: 0.0379
  ✓ Real-time metrics in 1.85ms (target: 156ms)
    Adaptation Effectiveness: 3.66/5
    Intent Match Rate: 82.5%
  ✓ Drift score computed in 5.02ms (target: 2100ms, stub mode)
    Statistical Significance: 0.0379
    Combined Drift Score: 0.4769
  ✓ Intent accuracy: 0.7027 (range: [-1, 1])
  ✓ Average UX sentiment: 3.18/5
  ✓ All metrics in valid ranges:
    Personalization: 4.13/5
    Loading Speed: 4.10/5
    Mobile Responsiveness: 4.21/5
    Accessibility: 4.10/5
✔ Performance: Load real UX Research.csv dataset (44.321838ms)
✔ Performance: Statistical significance on real data (120 rows) (18.335591ms)
✔ Performance: Real-time metrics processing (full dataset) (18.201328ms)
✔ Performance: Drift score computation with LLM confidence (23.364501ms)
✔ Accuracy: Intent accuracy calculation on real data (14.066755ms)
✔ Correctness: Verify sentiment mapping correctness (15.229183ms)
✔ Correctness: Validate metric averages are in expected ranges (13.41111ms)
ℹ tests 14
ℹ suites 0
ℹ pass 13
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 514.0212

✖ failing tests:

test at test/gemini-adapter.test.js:11:1
✖ gemini adapter live mode without key throws (0.625417ms)
  AssertionError [ERR_ASSERTION]: Expected analyze to throw when live mode and no key
      at TestContext.<anonymous> (file:///workspaces/GENUX-FORGE/test/gemini-adapter.test.js:21:12)
      at async Test.run (node:internal/test_runner/test:1054:7)
      at async Test.processPendingSubtests (node:internal/test_runner/test:744:7) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: '=='
  }
@mithradevi2309 ➜ /workspaces/GENUX-FORGE (main) $ cd /workspaces/GENUX-FORGE && npm test --silent
(node:21436) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/data-processor.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ mean and variance helpers (1.246956ms)
✔ statisticalSignificance simple case (0.371774ms)
✔ computeDriftScore uses weights and temporal decay (0.265255ms)
✔ processRealTimeData computes metrics and returns object (0.574051ms)
(node:21452) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/gemini-adapter.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ gemini adapter offline deterministic response (1.337936ms)
✔ gemini adapter live mode without key throws (0.452574ms)
(node:21463) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/integration.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ integration: detect drift between v1 and v2 fixtures (2.591996ms)
(node:21474) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspaces/GENUX-FORGE/test/performance.test.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspaces/GENUX-FORGE/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓ Loaded 2271 rows in 22.52ms
  ✓ Statistical significance computed in 2.05ms (target: 156ms)
    Value: 0.0379
  ✓ Real-time metrics in 2.54ms (target: 156ms)
    Adaptation Effectiveness: 3.66/5
    Intent Match Rate: 82.5%
  ✓ Drift score computed in 1.87ms (target: 2100ms, stub mode)
    Statistical Significance: 0.0379
    Combined Drift Score: 0.4769
  ✓ Intent accuracy: 0.7027 (range: [-1, 1])
  ✓ Average UX sentiment: 3.18/5
  ✓ All metrics in valid ranges:
    Personalization: 4.13/5
    Loading Speed: 4.10/5
    Mobile Responsiveness: 4.21/5
    Accessibility: 4.10/5
✔ Performance: Load real UX Research.csv dataset (24.823432ms)
✔ Performance: Statistical significance on real data (120 rows) (18.52377ms)
✔ Performance: Real-time metrics processing (full dataset) (26.789874ms)
✔ Performance: Drift score computation with LLM confidence (27.698353ms)
✔ Accuracy: Intent accuracy calculation on real data (11.944304ms)
✔ Correctness: Verify sentiment mapping correctness (13.042753ms)
✔ Correctness: Validate metric averages are in expected ranges (18.424363ms)
ℹ tests 14
ℹ suites 0
ℹ pass 14
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 480.316893
