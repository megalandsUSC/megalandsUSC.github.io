---
title: Methodology & Work Packages
layout: discover-section
---

DISCOVER is structured around four Work Packages (WP) covering the full pipeline from raw LiDAR data processing to dissemination and knowledge transfer.

<p class="discover-section-title">Methodological workflow</p>

<div class="discover-steps">
  <div class="discover-step">
    <div class="discover-step__num">1</div>
    <div class="discover-step__title">LiDAR Data</div>
    <p>Download and processing of PNOA LiDAR point clouds over the Comarca de Sarria (836 km²)</p>
  </div>
  <div class="discover-step">
    <div class="discover-step__num">2</div>
    <div class="discover-step__title">AI on Point Clouds</div>
    <p>Supervised learning applied directly to 3D point cloud data, without raster conversion</p>
  </div>
  <div class="discover-step">
    <div class="discover-step__num">3</div>
    <div class="discover-step__title">Probabilistic Output</div>
    <p>The model assigns a PointWiseEntropy probability score to each terrain feature potentially representing a burial mound</p>
  </div>
  <div class="discover-step">
    <div class="discover-step__num">4</div>
    <div class="discover-step__title">Validation</div>
    <p>Archaeological field survey + citizen review on Zooniverse to retrain and refine the model</p>
  </div>
</div>

<p class="discover-section-title">Work packages</p>

<div class="discover-wp-grid">
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">WP 1</div>
    <div class="discover-wp-card__title">LiDAR Data Processing</div>
    <ul>
      <li><strong>T1.</strong> Download and processing of LiDAR data (Comarca de Sarria)</li>
      <li><strong>T2.</strong> Advanced visualisation techniques on high-resolution DTMs (LRM, MSRM, etc.)</li>
    </ul>
    <p style="font-size:0.82rem; color: var(--disc-muted, #6b7280); margin-top:0.75rem; margin-bottom:0;">
      Study area: <strong>836.4 km²</strong> — 252 known archaeological records
    </p>
  </div>
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">WP 2</div>
    <div class="discover-wp-card__title">Artificial Intelligence</div>
    <ul>
      <li><strong>T1.</strong> Design and testing of automatic detection algorithms on LiDAR point clouds</li>
      <li><strong>T2.</strong> Efficient pre-processing of LiDAR point clouds using HPC (CESGA)</li>
      <li><strong>T3.</strong> Application of the detection algorithm across the full study area</li>
    </ul>
  </div>
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">WP 3</div>
    <div class="discover-wp-card__title">Analytical Meta-model</div>
    <ul>
      <li><strong>T1.</strong> Archaeological fieldwork — survey and groundtruthing of AI-detected features</li>
      <li><strong>T2.</strong> Citizen validation (Zooniverse) and model retraining with new labelled data</li>
    </ul>
  </div>
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">WP 4</div>
    <div class="discover-wp-card__title">Dissemination &amp; Transfer</div>
    <ul>
      <li><strong>T1.</strong> Presentation of results at conferences</li>
      <li><strong>T2.</strong> Publication of results in peer-reviewed journals</li>
      <li><strong>T3.</strong> Closing project meeting</li>
      <li><strong>T4.</strong> Project dissemination plan</li>
      <li><strong>T5.</strong> Knowledge transfer, valorisation and data management plan</li>
    </ul>
  </div>
</div>

<p class="discover-section-title">Innovation: AI directly on point clouds</p>

Unlike conventional approaches — which convert LiDAR data into raster images before applying detection algorithms — DISCOVER applies supervised learning **directly to the raw 3D point cloud**. This preserves all original geometric information and improves the model's discriminative capacity.

The model assigns each point a **PointWiseEntropy** value: an uncertainty measure that acts as a probability indicator for the presence of an archaeological feature. Zooniverse volunteers then review the highest-scoring shapes, labelling them as anthropogenic structures or natural landforms, feeding that information back to retrain the AI.

{% include figure.html img="discover/discover_logo_plataforma.png" alt="DISCOVER tool interface on Zooniverse" caption="Classification interface of the DISCOVER tool on the Zooniverse platform." %}

<p class="discover-section-title">Pilot study area</p>

The **Comarca de Sarria** (Lugo, Galicia) was selected as the pilot area due to its high density of known tumular monuments (252 records) and the availability of high-resolution PNOA LiDAR data. At 836.4 km², it is large enough to validate the method's effectiveness before scaling to the whole of Galicia.
