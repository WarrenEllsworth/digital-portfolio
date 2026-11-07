# Warren Ellsworth — Digital Portfolio

A static portfolio for GitHub Pages. No build step or external services are required.

## Publish
In repository Settings → Pages, deploy from the `main` branch and `/ (root)` folder.

## Add your notes
Edit `notes.js` and fill in `artifact1Note`, `artifact2Note`, `designLearningNote`, and `nextStepNote`. These notes render as plain text; leave a value empty to retain its labeled placeholder. Commit changes to publish them.

## Evidence
The two EC EN 340 artifacts are the saved Qucs-S Lab2Project and receiver start schematic, their associated NGspice datasets, and the receiver netlist. Model include paths have been changed to the bundled relative `MCP6001.lib` path. The plots are drawn from saved datasets, not newly measured hardware or rerun results. The receiver waveform shows 10–12 ms of the saved all-source transient run. No claim of final breadboard, PCB, or hardware validation is made.

Project descriptions are based on Warren’s current résumé. Full résumé databases, transcripts, grades, assignment screenshots, private identifiers, and client documents are not included.

## November 2026 refresh
The one-page layout has three main sections: About, professional introduction, and contextual projects. The original four reflections in `notes.js` remain verbatim, with static HTML fallbacks. The original EC EN 340 downloads and `#artifacts` destination remain available. Additional earlier project descriptions are retained in the expandable background collection.

The site uses system fonts, local assets, semantic links/disclosures, keyboard focus styles, and progressive scroll animations. `prefers-reduced-motion` disables animation and smooth scrolling. There is no build dependency; serve the repository with any static HTTP server and check `node --check site.js` before publishing.

### Images and scope
Portrait and hardware photographs were supplied by Warren. Published photo derivatives omit metadata. Meter labels and the board account identifier are visibly obscured in privacy-edited derivatives; originals are not part of this repository. The Family History screen is a representative mockup with fictional data, not a private record or a live app screenshot.

BYU's logo is sourced from its [official website](https://www.byu.edu/); the PassiveLogic mark is sourced from its [official website](https://www.passivelogic.com/). They identify education/employment context and do not imply endorsement.

The PCB is at an early assembly stage. Circuit photographs alone do not establish electrical performance. The Zenner description distinguishes onboarding/driver work and observed network joins from verified physical readings.
