# GenUX: A Hybrid Two-Mode Drift Detection Framework for Generative User Interfaces

---

## Quick Links

- [Dataset on Kaggle](https://www.kaggle.com/datasets/mdatikurrahman3111/ui-ux-dataset)
- [Research Paper](./paper.pdf)
- [System Architecture](#system-architecture)
- [Results & Performance](#results)
- [Experimental Setup](#experimental-setup)
- [Contact](#contact)

---

## Overview

GenUX introduces a novel, hybrid two-mode framework for detecting user behavioral drift in Generative User Interface (GenUI) systems. By integrating statistical modeling with Large Language Model (LLM)-generated semantic analysis, GenUX delivers adaptive, real-time user interfaces that evolve with user behavior. The framework addresses the "Interpretation Gap" in traditional drift detection methods by capturing subtle, contextual variations and providing actionable, human-readable insights in natural language.

---

## Research Highlights

- **Hybrid Detection Approach:**  
  GenUX combines statistical drift monitoring (2-5 ms real-time latency) with LLM-driven semantic behavioral interpretation, providing both quantitative anomaly detection and qualitative contextual understanding.

- **High Accuracy and Statistical Significance:**  
  Empirical evaluation on 2,271 distinct user interaction logs across five interface versions demonstrates:
  - **Combined drift score: 0.4769** (strong detection capability)
  - **Statistical significance: p=0.0379** (below α=0.05 threshold)
  - **Real-time inference: 2-5 ms** processing time per interaction

- **Comprehensive UX Adaptation Performance:**  
  - **Mobile Responsiveness: 4.21/5**
  - **Accessibility Score: 4.10/5**
  - **Intent Match Accuracy: 82.5%**
  - **Association Effectiveness: 3.66/5**

- **Primary Behavior Shifts Detected:**  
  - Personalization acceptance changes (-12.3% V1→V2, +11.2% V4→V5)
  - Performance expectation shifts (+15.7% V3→V4)
  - Behavioral stability cycles (82.1% confidence V2→V3)

- **Scalable and Modular:**  
  The multi-layered system architecture ensures reproducibility, explicit metric boundaries, and component-level performance tracking across web (45%), mobile (35%), and desktop (20%) platforms.

---

## System Architecture

GenUX implements a modular detection-and-adaptation pipeline designed for behavioral anomaly quantification, metric deviation computation, and real-time interface adaptations. The architecture consists of six primary modules:

1. **Interaction Logger:**  
   Tracks user actions, component selections, state modifications, and event trigger frequencies, compiling structured session data objects.

2. **BehaviorMetrics Module:**  
   Calculates statistical metrics including interaction frequency, response delay, error rate, and component usage patterns using counts, durations, deltas, and cumulative transitions.

3. **DriftEvaluator Engine:**  
   Applies rolling-summary functions, threshold comparisons, and deviation scoring to detect abnormal changes between previous and current interaction states.

4. **ComponentPerformanceTracker:**  
   Captures performance attributes of individual UI components, including responsive detection metrics, error occurrence, historical usage, falloff rate, and recovery rate.

5. **LayoutSimulationEngine:**  
   Combines configuration updates and evaluative responses to drift signals using rules-based correction actions for UI component distribution and workflow ordering.

6. **PolicyRules Engine:**  
   Captures explicit policies for managing drift events, determining whether to present layout suggestions, swap components, alter workflows, or show warnings based on metric conditions.

**Real-Time Adaptation Loop:**  
Each simulation step collects interactions, updates metrics, calculates drift measures, tests policies, and implements layout changes with automatic state-change logging for reproducibility.

### Architecture Diagram
![GenUX System Architecture](image5_architecture.png)

*Figure: Hybrid LLM-Statistical Architecture integrating behavioral data streams from multiple sources through statistical drift analysis and LLM semantic interpretation in a fusion engine.*

---

## Experimental Setup

- **Dataset:**  
  - **2,847 interaction records** collected over temporal behavioral drift analysis across **five subsequent interface versions** (resulting in **2,271 distinct user logs** after preprocessing)
  - Captured **17 UX dimensions** including personalization, loading speed, mobile responsiveness, accessibility, error rates, intent matching, and semantic feedback
  - **Platform Distribution:**
    - Web: 45%
    - Mobile: 35%
    - Desktop: 20%
  - **User Demographics:**
    - Female: 57%, Male: 43%
    - Average session duration: 12.3 minutes
    - Total UI components tracked: 23
  - **Dataset publicly available on Kaggle:**  
    [UI UX Dataset](https://www.kaggle.com/datasets/mdatikurrahman3111/ui-ux-dataset)

- **Environment & Implementation:**  
  - Python-based modular simulation-driven system
  - Deterministic drift functions with repeatable threshold parameters
  - Sequential processing pipeline: (1) log interactions → (2) calculate metrics → (3) drift detection → (4) rules evaluation → (5) layout modifications → (6) log outcomes
  - Standard consumer hardware (no GPU requirements)
  - Real-time statistical mode: 2-5 ms latency per interaction

- **Statistical Drift Detection Methods:**  
  - Interaction frequency drift: |F_t - F_{t-1}| ≥ θ_freq
  - Response-time deviation: |T_t - T_{t-1}| > θ_time
  - Error rate drift: |E_t - E_{t-1}|
  - Component performance degradation: |C_t - C_{t-1}|
  - Aggregate drift scoring with multi-metric fusion

---

## Results

### Performance Metrics

| Metric | Value | Classification |
|--------|-------|----------------|
| Combined Drift Score | 0.4769 | High |
| Statistical Significance | p=0.0379 | Significant |
| Processing Time | 2-5 ms | Real-time |
| Mobile Responsiveness | 4.21/5 | Excellent |
| Accessibility Score | 4.10/5 | Excellent |
| Intent Match Accuracy | 82.5% | High |
| Association Effectiveness | 3.66/5.0 | Good |

### Version-Wise Behavioral Drift Analysis

| Transition | Change | Confidence | Primary Insight |
|------------|--------|------------|-----------------|
| V1→V2 | -12.3% | 87.2% | Resistance to customization due to privacy concerns |
| V2→V3 | No drift | 82.1% | Behavioral stability maintained |
| V3→V4 | +15.7% | 83.8% | Expectations rising due to competition |
| V4→V5 | +11.2% | 87.8% | Cyclical behavioral patterns emerging |

### Key Findings

- **Drift Detection Reliability:**  
  Statistical drift logic consistently triggers when interaction counts, error ratios, or latencies deviate from stable baseline measurements, with millisecond-scale processing confirmed through full instrumentation.

- **Adaptation Effectiveness:**  
  Rule-based layout modifications successfully stabilized interaction flows in subsequent iterations, reducing drift signal frequency and improving component performance metrics.

- **Component Isolation:**  
  System accurately identifies poorly performing UI elements through tracking logs, enabling targeted adaptations for unstable user interaction paths.

- **Hybrid Approach Advantage:**  
  Results establish that hybrid statistical + LLM approaches outperform purely rule-based or probabilistic methods in modeling the evolving landscape of user behavior within GenUI systems.

---

## Threat Analysis & Mitigation

### Risks Identified

- **Data/Model Drift:** Evolving user behavior patterns may deviate from training distributions
- **Performance Bottlenecks:** Real-time processing constraints at scale
- **Intent Match Degradation:** Accuracy decline triggering UX quality issues
- **Privacy Concerns:** User behavioral data sensitivity
- **API Vulnerabilities:** Third-party service dependencies

### Mitigation Strategies

**Phase 1 - Immediate Actions (Triggered when Intent Match < 80%):**
- A/B Test Rollout for gradual feature validation
- Input Stabilization through preprocessing normalization
- Memory Optimization for reduced latency

**Phase 2 - Long-term Solutions:**
- Ensemble LLM Integration for robustness
- Continuous Monitoring System for drift detection
- Performance Caching for repeated query optimization
- Adaptive threshold adjustments based on temporal patterns
- Component-level fallback mechanisms

**Security Measures:**
- Deterministic processing for reproducibility
- Structured logging for audit trails
- Explicit metric boundaries for transparent evaluation
- Rule-based policy testing against error spikes and timing anomalies

---

## Discussion & Future Work

GenUX demonstrates that integrating statistical rigor with planned LLM-based semantic interpretation creates a foundation for next-generation drift detection in generative interface systems. The current implementation provides reproducible drift profiles through deterministic statistical indicators that reliably recognize abrupt behavioral differences.

**Current Capabilities:**
- Millisecond-scale processing times enable real-time responsiveness
- Stable drift activation patterns ensure consistent detection
- Reproducible correction sequences enhance interface reliability
- Component-level performance isolation supports targeted adaptations

**Limitations:**
- Semantic drift layer currently planned but not implemented
- Rule-based adaptations require manual policy definition
- Single-mode statistical detection lacks contextual interpretation
- Threshold parameters require domain-specific tuning

**Future Directions:**
- **Semantic Drift Module Implementation:** Integrate LLM reasoning, contextual embeddings, and language interpretation for enhanced behavioral understanding
- **Generative UI Reconstruction:** Expand beyond rule-based corrections to LLM-powered interface regeneration
- **Multi-Modal Behavioral Analysis:** Incorporate eye-tracking, gesture recognition, and emotional state detection
- **Benchmark Standardization:** Establish human-specification benchmarks for evaluating GenUX systems in rapidly changing user contexts
- **Cross-Domain Validation:** Extend framework to e-commerce, healthcare, education, and entertainment applications
- **Explainable AI Integration:** Provide natural language justifications for drift detection decisions

---

## References

A full list of 21 references is available in the research paper, including key works from:
- ACM Conference on Human Factors in Computing Systems (CHI)
- IEEE Transactions on Virtual Reality
- International Conference on Machine Learning (ICML)
- arXiv preprints on LLM-driven UI/UX design
- International Journal of Human-Computer Interaction

Key reference areas include adaptive interfaces, LLM-powered design tools, behavioral drift detection, generative UI systems, and user experience evaluation methodologies.

---

## Data Availability

The dataset used in this research is open for educational and research use:  
**[UI UX Dataset on Kaggle](https://www.kaggle.com/datasets/mdatikurrahman3111/ui-ux-dataset)**

**Dataset Statistics:**
- Total Interactions: 2,847 records
- Distinct User Logs: 2,271
- Platform Coverage: Web (45%), Mobile (35%), Desktop (20%)
- Gender Distribution: Female (57%), Male (43%)
- Version Transitions: 4
- Average Session Duration: 12.3 minutes
- UI Components Tracked: 23

---

## Citation

If you use GenUX or the associated research, please cite:

```bibtex
@article{genux2025,
  author = {Mithradevi K},
  title = {GenUX: A Hybrid Two-Mode Drift Detection Framework for Generative User Interfaces},
  institution = {Department of Computer Science and Engineering, Chennai, India},
  year = {2025},
  note = {Empirical evaluation with 2271 user interaction logs}
}
```

**Paper Format:** Springer LNCS (Lecture Notes in Computer Science)

---

## Contact

**Primary Author:** Mithradevi K  
**Email:** mithradevik.cse2023@citcchennai.net  
**ORCID:** 0009-0001-4856-541X

**Institution:** Department of Computer Science and Engineering  
Chennai Institute of Technology, Kundrathur  
Chennai, Tamil Nadu, India-600069

For questions, collaboration opportunities, or access to additional research materials, please contact the authors via email.

---

## Keywords

Generative UI • Drift Detection • Large Language Models • Adaptive Interfaces • User Experience • Behavioral Analysis • Real-time Systems • Statistical Modeling • Human-Computer Interaction

---

## License

This research is made available for academic and educational purposes. The dataset is publicly accessible under Kaggle's standard terms of use. For commercial applications or derivative works, please contact the authors.

---

*Last Updated: November 2025*
