---
title: The Project
layout: discover-section
---

DISCOVER (*Automatic Detection of Tumular and Megalithic Monuments using LiDAR and Artificial Intelligence*) is a research project funded by the **Fondos Impulso of the Universidade de Santiago de Compostela** and developed at the CISPAC between 2025 and 2026. The Principal Investigator is **Miguel Carrero-Pazos** (USC-CISPAC).

<p class="discover-section-title">Background and motivation</p>

Galicia holds one of the largest concentrations of tumular and megalithic monuments on the European Atlantic façade. Specialist literature documents more than **7,500 megaliths** and around **2,500 hillforts** registered, figures that could exceed 10,000 burial mounds and 4,000 hillforts when considering the whole of the Northwestern Iberian Peninsula.

However, available archaeological catalogues present serious reliability problems:

- **Outdated coordinates** with low spatial precision
- **Duplicate or contradictory records** across different sources
- **Appearance and disappearance** of tumuli between successive catalogue revisions
- **Dense vegetation** preventing systematic field surveys

{% include alert.html text="Until now, detecting these features required manual inspection of high-resolution aerial imagery combined with intensive fieldwork — a laborious process that cannot scale to large territories." color="info" %}

<p class="discover-section-title">Project objectives</p>

<div class="discover-wp-grid">
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">Objective 1</div>
    <div class="discover-wp-card__title">Automatic detection with AI</div>
    <ul>
      <li>Design a supervised-learning detection algorithm operating directly on LiDAR point clouds</li>
      <li>Efficiently pre-process LiDAR data for use in AI models</li>
      <li>Apply the algorithm to the study area (Comarca de Sarria, 836 km²)</li>
    </ul>
  </div>
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">Objective 2</div>
    <div class="discover-wp-card__title">Improving the megalithic catalogue</div>
    <ul>
      <li>Update and clean the catalogue of tumular and megalithic monuments in Galicia</li>
      <li>Correct coordinate errors and duplicate entries in existing records</li>
      <li>Identify new sites not yet included in official heritage databases</li>
    </ul>
  </div>
  <div class="discover-wp-card">
    <div class="discover-wp-card__label">Objective 3</div>
    <div class="discover-wp-card__title">Field validation</div>
    <ul>
      <li>Verify AI-detected features through archaeological field survey (<em>groundtruthing</em>)</li>
      <li>Feed validated results back into the model for retraining</li>
      <li>Integrate citizen validation via the Zooniverse platform</li>
    </ul>
  </div>
</div>

<p class="discover-section-title">Methodological innovation</p>

The core novelty of DISCOVER lies in applying **supervised learning directly to raw LiDAR point clouds** — without first converting the data into raster images — thereby preserving full 3D geometric information and improving model discrimination compared to earlier approaches.

Airborne LiDAR data yields high-resolution digital elevation models in which vegetation can be effectively filtered out, revealing archaeological structures hidden beneath the ground cover. Combined with the **High-Performance Computing (HPC)** infrastructure of CESGA, large volumes of data can be processed efficiently.

<p class="discover-section-title">Collaborating institutions</p>

| Institution | Role |
|-------------|------|
| **USC – CISPAC** | Scientific coordination and direction |
| **CITIUS** | AI algorithm development |
| **CITMAGA** | Geospatial modelling support |
| **CESGA** | HPC infrastructure and supercomputing |
| **Zooniverse** | Citizen science platform |

{% include alert.html text="DISCOVER is linked to the MegaLands project (PID2024-156264NA-I00, MICIU/AEI/FEDER, EU), both coordinated from the CISPAC at USC." color="secondary" %}
