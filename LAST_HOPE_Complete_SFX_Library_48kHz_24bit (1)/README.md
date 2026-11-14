# LAST HOPE — Complete Game Sound Effects Library
Recover the Past. Rebuild the Future.
Agency: ARES Scientific Recovery Agency

## Technical Specifications
- Format: Standard RIFF WAV (uncompressed PCM)
- Sample Rate: 48,000 Hz (48 kHz)
- Bit Depth: 24-bit signed little-endian PCM
- Channels: Mono for centered one-shot cues; Stereo for atmospheric loops & spatial sweeps
- Total Sound Effects: 218
- Peak Normalization: -1.5 dBFS ceiling (no clipping; calibrated lower bed levels for ambience & hum loops)
- Seamless Loops: Phase-aligned & equal-power overlap crossfaded at loop boundaries

## Folder Organization
- 01_TARSY/ (18 files) — Physical 6-wheel mobility, DC gearmotors, robotic arm, universal gripper, collisions, and chassis power.
- 02_PLAYER_ROBOT/ (16 files) — Intelligent, slightly retro-digital electronic boot, communication, technical analysis, hums, and alerts.
- 03_SCANNER_AND_EXPLORATION/ (39 files) — Shared scanning & interaction system for both TARSY and Player Robot: sweeps, detections, data ports, and 7 recognition stages.
- 04_UI_AND_MENUS/ (18 files) — Tactile 1970s NASA console switches, relay clicks, tabs, and archive confirmations (0.1–0.7s).
- 05_VIKING_SAMPLER_ARM/ (12 files) — Vintage 1970s extendable ribbon boom, mechanical strain, soil scoop, and signature Latch Pin Release.
- 06_VIKING_SEISMOMETER/ (8 files) — Precision caging solenoid clicks, piezo test pulses, and subtle scientific trace playbacks.
- 07_HP3_MOLE/ (16 files) — Lightweight titanium penetrator strikes, seamless hammering loop variations, and regolith soil pinning.
- 08_INGENUITY/ (14 files) — Lightweight miniature coaxial dual-rotor acoustics in thin Martian air plus flight telemetry cues.
- 09_PUZZLES/ (18 files) — Short, readable evidence linking, command sequence ticks, and blueprint reconstruction cues.
- 10_DATA_RECOVERY/ (16 files) — Retro FSK baud chirps, continuous transfer loops, corruption errors, and archive unlocks.
- 11_MISSIONS/ (12 files) — Deployment confirmations, arrival cues, artifact discoveries, and mission completion stingers.
- 12_SYSTEM_WARNINGS/ (12 files) — Battery thresholds, charging tones, structural/tool warnings, and interference alerts.
- 13_MARS_AMBIENCE/ (9 files) — Seamless stereo atmospheric beds for Chryse Planitia, Elysium Planitia, and Jezero Crater.
- 14_GENERAL_INTERACTIONS/ (10 files) — Item collection, checkpoints, upgrades, optional objectives, and mission exit confirmations.

## Manifest & Phaser 4 Integration
- `manifest.json`: Complete machine-readable catalog of Sound ID, File Name, Description, Duration, Loop/One-Shot, Character/System, and Intended Game Event.
- `phaser4AudioManifest.ts`: Ready-to-import TypeScript definitions and `preloadLastHopeAudio()` helper for Phaser 4.
