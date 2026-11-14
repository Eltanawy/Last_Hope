// LAST HOPE - Multi-Region Open World Game Engine using KAPLAY
(function() {
  let k;
  let player;
  let tarsy;
  let shuttle;
  let currentRegionId = "base";
  let regionEntities = [];
  let isPaused = false;
  let activeArtifactIndex = -1;
  let walkFrame = 1;
  let walkTimer = 0;
  let isMoving = false;
  let playerDir = 1; // 1 = right, -1 = left
  let targetPos = null;
  let isPointerDown = false;
  let scanTimer = 0;

  const PLAYER_SCALE = 0.42;
  const TARSY_SCALE = 0.45;

  // Artifact Status Tracker
  const ARTIFACT_DATA = [
    { id: 0, name: "TARSY", region: "base", x: 750, y: 550, spriteStuck: "tarsy_dust", spriteFixed: "tarsy_idle", solved: false },
    { id: 1, name: "HP3 MOLE", region: "elysium", x: 1200, y: 550, spriteStuck: "mole_stuck", spriteFixed: "mole_fixed", solved: false },
    { id: 2, name: "VIKING 1 SEISMOMETER", region: "chryse_seismo", x: 1200, y: 550, spriteStuck: "seismo_caged", spriteFixed: "seismo_fixed", solved: false },
    { id: 3, name: "INGENUITY HELICOPTER", region: "jezero", x: 1200, y: 550, spriteStuck: "ingenuity_crashed", spriteFixed: "ingenuity_fixed", solved: false },
    { id: 4, name: "VIKING 1 SURFACE SAMPLER ARM", region: "chryse_trench", x: 1200, y: 550, spriteStuck: "arm_jammed", spriteFixed: "arm_fixed", solved: false }
  ];

  // Distinct Planetary Regions with unique themes, environments, and landmarks
  const REGIONS = {
    base: {
      id: "base",
      name: "ARES BASE CAMP & CRASH SITE X",
      coordsName: "BASE CAMP (24.5°N, 43.2°W)",
      bgColor: [22, 10, 6],
      worldW: 1600,
      worldH: 1100,
      spawn: { x: 440, y: 680 },
      hasShuttle: true,
      hasArtifact: 0,
      decorations: [
        { s: "crater", x: 950, y: 250, sc: 0.8 },
        { s: "crater", x: 350, y: 950, sc: 0.9 },
        { s: "rock_large", x: 600, y: 350, sc: 0.7, solid: true },
        { s: "rock_large", x: 1100, y: 700, sc: 0.8, solid: true },
        { s: "rock_small", x: 500, y: 550, sc: 0.6 },
        { s: "debris_metal", x: 710, y: 570, sc: 0.5 },
        { s: "debris_panel", x: 480, y: 750, sc: 0.6 }
      ]
    },
    elysium: {
      id: "elysium",
      name: "ELYSIUM PLANITIA (VOLCANIC DURICRUST)",
      coordsName: "ELYSIUM PLANITIA (4.5°N, 135.9°E)",
      bgColor: [32, 12, 7],
      worldW: 1800,
      worldH: 1100,
      spawn: { x: 320, y: 550 },
      hasShuttle: false,
      hasArtifact: 1,
      decorations: [
        { s: "crater", x: 600, y: 250, sc: 1.1 },
        { s: "crater", x: 1500, y: 800, sc: 1.2 },
        { s: "crater", x: 800, y: 850, sc: 0.8 },
        { s: "rock_large", x: 850, y: 400, sc: 0.75, solid: true },
        { s: "rock_large", x: 1450, y: 350, sc: 0.7, solid: true },
        { s: "rock_small", x: 500, y: 700, sc: 0.6 },
        { s: "rock_small", x: 1050, y: 600, sc: 0.5 },
        { s: "debris_panel", x: 1100, y: 520, sc: 0.5 }
      ]
    },
    chryse_seismo: {
      id: "chryse_seismo",
      name: "CHRYSE PLANITIA (VIKING LANDER SITE)",
      coordsName: "CHRYSE BASALT PLAINS (22.3°N, 47.9°W)",
      bgColor: [26, 11, 7],
      worldW: 1800,
      worldH: 1100,
      spawn: { x: 320, y: 550 },
      hasShuttle: false,
      hasArtifact: 2,
      decorations: [
        { s: "rock_large", x: 550, y: 350, sc: 0.85, solid: true },
        { s: "rock_large", x: 900, y: 750, sc: 0.8, solid: true },
        { s: "rock_large", x: 1500, y: 400, sc: 0.9, solid: true },
        { s: "rock_large", x: 1400, y: 800, sc: 0.75, solid: true },
        { s: "rock_small", x: 700, y: 450, sc: 0.65 },
        { s: "rock_small", x: 1300, y: 650, sc: 0.6 },
        { s: "debris_metal", x: 1050, y: 500, sc: 0.6 },
        { s: "debris_panel", x: 1350, y: 520, sc: 0.6 },
        { s: "crater", x: 450, y: 800, sc: 0.9 }
      ]
    },
    jezero: {
      id: "jezero",
      name: "JEZERO CRATER (SAND RIPPLE DELTA)",
      coordsName: "JEZERO DELTA (18.4°N, 77.5°E)",
      bgColor: [36, 15, 8],
      worldW: 1800,
      worldH: 1100,
      spawn: { x: 320, y: 550 },
      hasShuttle: false,
      hasArtifact: 3,
      decorations: [
        { s: "crater", x: 450, y: 300, sc: 1.3 },
        { s: "crater", x: 1550, y: 750, sc: 1.0 },
        { s: "rock_large", x: 750, y: 750, sc: 0.7, solid: true },
        { s: "rock_large", x: 1350, y: 350, sc: 0.8, solid: true },
        { s: "rock_small", x: 950, y: 400, sc: 0.6 },
        { s: "rock_small", x: 1400, y: 650, sc: 0.5 },
        { s: "debris_metal", x: 1100, y: 580, sc: 0.5 }
      ]
    },
    chryse_trench: {
      id: "chryse_trench",
      name: "CHRYSE EXCAVATION TRENCH",
      coordsName: "CHRYSE TRENCH (22.7°N, 48.2°W)",
      bgColor: [24, 10, 6],
      worldW: 1800,
      worldH: 1100,
      spawn: { x: 320, y: 550 },
      hasShuttle: false,
      hasArtifact: 4,
      decorations: [
        { s: "crater", x: 500, y: 800, sc: 1.1 },
        { s: "crater", x: 1500, y: 300, sc: 1.0 },
        { s: "rock_large", x: 800, y: 350, sc: 0.8, solid: true },
        { s: "rock_large", x: 1350, y: 750, sc: 0.85, solid: true },
        { s: "rock_small", x: 650, y: 550, sc: 0.6 },
        { s: "rock_small", x: 1100, y: 450, sc: 0.5 },
        { s: "debris_panel", x: 1050, y: 580, sc: 0.6 }
      ]
    }
  };

  function init() {
    const canvas = document.getElementById("game-canvas");
    k = kaplay({
      canvas: canvas,
      width: 960,
      height: 540,
      letterbox: false,
      background: [22, 10, 6],
      global: false
    });

    const sp = (typeof window !== "undefined" && window.SP) ? window.SP : (typeof SP !== "undefined" ? SP : null);
    const extra = (sp && sp.EXTRA) ? sp.EXTRA : {};

    // 1. Load Player Sprites (Base64 if available for 100% reliable zero-CORS loading)
    if (sp && sp.P && sp.P.walk) {
      for (let i = 1; i <= 6; i++) {
        k.loadSprite(`player_walk_${i}`, sp.P.walk[i - 1]);
      }
      k.loadSprite("player_walk_7", sp.P.walk[0]);
      k.loadSprite("player_idle", sp.P.idle[0]);
    } else {
      for (let i = 1; i <= 7; i++) {
        k.loadSprite(`player_walk_${i}`, `assets/player/walk_frame_0${i}.png`);
      }
      k.loadSprite("player_idle", "assets/player/walk_frame_01.png");
    }

    // 2. Load Tarsy Sprites
    if (sp && sp.T) {
      k.loadSprite("tarsy_idle", sp.T.idle);
      k.loadSprite("tarsy_drive", sp.T.drive);
      k.loadSprite("tarsy_dust", sp.T.dust);
      k.loadSprite("tarsy_scan", sp.T.scan);
    } else {
      k.loadSprite("tarsy_idle", "assets/tarsy/01_tarsy_idle.png");
      k.loadSprite("tarsy_drive", "assets/tarsy/02_tarsy_moving_drive.png");
      k.loadSprite("tarsy_dust", "assets/tarsy/07_tarsy_mars_dust_weathered.png");
      k.loadSprite("tarsy_scan", "assets/tarsy/04_tarsy_scanning_active.png");
    }

    // 3. Load Rocket, Artifacts, and Environment (Base64 data URLs for instant offline display)
    k.loadSprite("shuttle", extra.shuttle || "assets/rocket/front_elevation.png");
    k.loadSprite("mole_stuck", extra.mole_stuck || "assets/artifacts/mole/04_stuck_shallow.png");
    k.loadSprite("mole_fixed", extra.mole_fixed || "assets/artifacts/mole/07_preserved.png");
    k.loadSprite("seismo_caged", extra.seismo_caged || "assets/artifacts/seismometer/02_unreleased_caged.png");
    k.loadSprite("seismo_fixed", extra.seismo_fixed || "assets/artifacts/seismometer/06_preserved.png");
    k.loadSprite("ingenuity_crashed", extra.ingenuity_crashed || "assets/artifacts/ingenuity/03_flight72_damaged.png");
    k.loadSprite("ingenuity_fixed", extra.ingenuity_fixed || "assets/artifacts/ingenuity/01_original_intact.png");
    k.loadSprite("arm_jammed", extra.arm_jammed || "assets/artifacts/viking_arm/02_jammed_latch_pin.png");
    k.loadSprite("arm_fixed", extra.arm_fixed || "assets/artifacts/viking_arm/04_operational_extended.png");

    k.loadSprite("rock_small", extra.rock_small || "assets/terrain/04_small_rocks.png");
    k.loadSprite("rock_large", extra.rock_large || "assets/terrain/05_large_rocks.png");
    k.loadSprite("crater", extra.crater || "assets/terrain/07_crater.png");
    k.loadSprite("debris_metal", extra.debris_metal || "assets/debris/01_metal_fragments.png");
    k.loadSprite("debris_panel", extra.debris_panel || "assets/debris/04_damaged_panels.png");

    loadRegion("base");
    setupInputs();
    setupGameLoop();
  }

  function loadRegion(regionId) {
    const reg = REGIONS[regionId];
    if (!reg) return;
    currentRegionId = regionId;

    // Clear previous region entities
    regionEntities.forEach(e => {
      try { k.destroy(e); } catch(err) {}
    });
    regionEntities = [];
    shuttle = null;
    tarsy = null;
    activeArtifactIndex = -1;
    targetPos = null;
    isPointerDown = false;

    // Set background color
    k.setBackground(reg.bgColor[0], reg.bgColor[1], reg.bgColor[2]);

    const artId = reg.hasArtifact;
    const art = ARTIFACT_DATA[artId];

    // Subtle Ground soil textures (layer z = 1, NEVER covers player or artifacts!)
    for (let gx = 0; gx < reg.worldW; gx += 400) {
      for (let gy = 0; gy < reg.worldH; gy += 320) {
        const px = gx + 100;
        const py = gy + 80;
        // Never place ground circles over spawn or artifact!
        if (art && Math.hypot(px - art.x, py - art.y) < 260) continue;
        if (Math.hypot(px - reg.spawn.x, py - reg.spawn.y) < 260) continue;

        const patch = k.add([
          k.circle(110),
          k.pos(px, py),
          k.color(reg.bgColor[0] + 8, reg.bgColor[1] + 4, reg.bgColor[2] + 2),
          k.opacity(0.12),
          k.anchor("center"),
          k.z(1)
        ]);
        regionEntities.push(patch);
      }
    }

    // Natural obstacles & decorations (layer z = 10)
    reg.decorations.forEach(dec => {
      const comps = [
        k.sprite(dec.s),
        k.pos(dec.x, dec.y),
        k.scale(dec.sc),
        k.anchor("center"),
        k.z(10)
      ];
      if (dec.solid) {
        comps.push(k.area());
      }
      const ent = k.add(comps);
      regionEntities.push(ent);
    });

    // Space Shuttle (only at Base Camp) (layer z = 30)
    if (reg.hasShuttle) {
      shuttle = k.add([
        k.sprite("shuttle"),
        k.pos(350, 680),
        k.scale(0.38),
        k.anchor("center"),
        k.z(30),
        k.area({ shape: new k.Rect(k.vec2(0, 30), 100, 180) }),
        "shuttle"
      ]);
      regionEntities.push(shuttle);

      // Launch Pad Ring
      const pad = k.add([
        k.circle(140),
        k.pos(350, 740),
        k.color(255, 122, 26),
        k.opacity(0.15),
        k.anchor("center"),
        k.z(5)
      ]);
      regionEntities.push(pad);
    }

    // Artifact for this region (layer z = 50, ALWAYS VISIBLE!)
    if (art) {
      const ring = k.add([
        k.circle(52),
        k.pos(art.x, art.y),
        k.color(47, 216, 232),
        k.opacity(0.28),
        k.anchor("center"),
        k.z(20)
      ]);
      regionEntities.push(ring);

      let spriteName;
      if (artId === 0) {
        spriteName = art.solved ? "tarsy_idle" : "tarsy_dust";
      } else {
        spriteName = art.solved ? art.spriteFixed : art.spriteStuck;
      }

      const artEnt = k.add([
        k.sprite(spriteName),
        k.pos(art.x, art.y),
        k.scale(artId === 0 ? TARSY_SCALE : 0.48),
        k.anchor("center"),
        k.z(50),
        k.area(),
        `artifact_${artId}`
      ]);
      regionEntities.push(artEnt);

      if (artId === 0) {
        tarsy = artEnt;
      }
    }

    // Player Entity (layer z = 100, ON TOP OF EVERYTHING!)
    if (player) {
      try { k.destroy(player); } catch(e) {}
    }
    player = k.add([
      k.sprite("player_idle"),
      k.pos(reg.spawn.x, reg.spawn.y),
      k.scale(PLAYER_SCALE),
      k.anchor("center"),
      k.z(100),
      k.area({ shape: new k.Rect(k.vec2(0, 15), 36, 40) }),
      "player"
    ]);
    player.flipX = true;

    // If Tarsy is solved and we are NOT in base, spawn companion alongside player (layer z = 80)
    if (ARTIFACT_DATA[0].solved && regionId !== "base") {
      tarsy = k.add([
        k.sprite("tarsy_idle"),
        k.pos(player.pos.x - 55, player.pos.y),
        k.scale(TARSY_SCALE),
        k.anchor("center"),
        k.z(80)
      ]);
      regionEntities.push(tarsy);
    }

    // Center camera on player
    k.camPos(player.pos);

    // Update HUD location banner
    window.UI?.updateLocationBanner?.(reg.name, reg.coordsName);
  }

  function updateTargetFromPointer(clientX, clientY) {
    const canvas = document.getElementById("game-canvas");
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = 960 / rect.width;
    const scaleY = 540 / rect.height;
    const screenX = (clientX - rect.left) * scaleX;
    const screenY = (clientY - rect.top) * scaleY;
    const cam = k.camPos();
    targetPos = k.vec2(screenX + cam.x - 480, screenY + cam.y - 270);
  }

  function setupInputs() {
    const canvas = document.getElementById("game-canvas");
    if (!canvas) return;

    // Pointer Down: set target and track drag
    canvas.addEventListener("pointerdown", (e) => {
      if (isPaused) return;
      isPointerDown = true;
      updateTargetFromPointer(e.clientX, e.clientY);
    });

    // Pointer Move: update destination continuously while dragging
    window.addEventListener("pointermove", (e) => {
      if (!isPointerDown || isPaused) return;
      updateTargetFromPointer(e.clientX, e.clientY);
    });

    // Pointer Up: IMMEDIATELY STOP continuous walking!
    window.addEventListener("pointerup", () => {
      isPointerDown = false;
      targetPos = null; // Stops instantly when finger or mouse button is released!
    });

    window.addEventListener("pointercancel", () => {
      isPointerDown = false;
      targetPos = null;
    });

    k.onKeyPress("e", () => {
      if (isPaused) return;
      handleInteract();
    });

    k.onKeyPress("h", () => {
      if (isPaused) return;
      triggerTarsyScan();
    });
  }

  function setupGameLoop() {
    k.onUpdate(() => {
      if (isPaused || !player) return;

      const dt = k.dt();
      const reg = REGIONS[currentRegionId];
      let moveX = 0;
      let moveY = 0;
      const speed = 220;

      // Keyboard Controls (WASD / Arrows) - immediately cancel click target
      if (k.isKeyDown("left") || k.isKeyDown("a")) { moveX -= 1; targetPos = null; }
      if (k.isKeyDown("right") || k.isKeyDown("d")) { moveX += 1; targetPos = null; }
      if (k.isKeyDown("up") || k.isKeyDown("w")) { moveY -= 1; targetPos = null; }
      if (k.isKeyDown("down") || k.isKeyDown("s")) { moveY += 1; targetPos = null; }

      // Pointer / Click to Move
      if (targetPos) {
        const diff = targetPos.sub(player.pos);
        if (diff.len() > 16) {
          const dir = diff.unit();
          moveX = dir.x;
          moveY = dir.y;
        } else {
          targetPos = null;
        }
      }

      // Movement execution
      if (moveX !== 0 || moveY !== 0) {
        isMoving = true;
        const norm = k.vec2(moveX, moveY).unit();
        player.move(norm.scale(speed));

        if (moveX !== 0) {
          playerDir = moveX > 0 ? 1 : -1;
          player.flipX = playerDir > 0;
        }
        player.scale = k.vec2(PLAYER_SCALE, PLAYER_SCALE);

        // Cycle walk animation
        walkTimer += dt;
        if (walkTimer >= 0.09) {
          walkTimer = 0;
          walkFrame = (walkFrame % 7) + 1;
          player.sprite = `player_walk_${walkFrame}`;
        }
      } else {
        if (isMoving) {
          isMoving = false;
          player.sprite = "player_idle";
          player.scale = k.vec2(PLAYER_SCALE, PLAYER_SCALE);
        }
      }

      // Camera smoothly follows player inside current world bounds
      const targetCamX = Math.max(480, Math.min(reg.worldW - 480, player.pos.x));
      const targetCamY = Math.max(270, Math.min(reg.worldH - 270, player.pos.y));
      const curCam = k.camPos();
      k.camPos(curCam.lerp(k.vec2(targetCamX, targetCamY), dt * 6));

      // Tarsy Companion follower logic
      const isTarsyFixed = ARTIFACT_DATA[0].solved;
      if (isTarsyFixed && tarsy && tarsy !== player) {
        const followTarget = player.pos.sub(k.vec2(playerDir * 55, 10));
        const dist = tarsy.pos.dist(followTarget);
        if (dist > 26) {
          const moveDir = followTarget.sub(tarsy.pos).unit();
          tarsy.move(moveDir.scale(speed * 0.96));
          tarsy.sprite = scanTimer > 0 ? "tarsy_scan" : "tarsy_drive";
        } else {
          tarsy.sprite = scanTimer > 0 ? "tarsy_scan" : "tarsy_idle";
        }
        tarsy.flipX = playerDir > 0;
        tarsy.scale = k.vec2(TARSY_SCALE, TARSY_SCALE);
      }

      if (scanTimer > 0) {
        scanTimer -= dt;
      }

      // Proximity check
      checkProximity();

      // Recharge life support if near shuttle
      if (shuttle && player.pos.dist(shuttle.pos) < 170) {
        window.UI?.rechargeTime?.(dt * 30);
      }
    });
  }

  function checkProximity() {
    const reg = REGIONS[currentRegionId];
    let nearestIndex = -1;
    const artId = reg.hasArtifact;
    const art = ARTIFACT_DATA[artId];

    if (art) {
      const d = player.pos.dist(k.vec2(art.x, art.y));
      if (d < 95) {
        nearestIndex = artId;
      }
    }

    activeArtifactIndex = nearestIndex;

    // Shuttle interaction
    if (shuttle) {
      const shuttleDist = player.pos.dist(shuttle.pos);
      const canLaunch = window.UI?.canLaunch?.();
      if (canLaunch && shuttleDist < 160) {
        window.UI?.showPrompt?.("PRESS [E] OR TAP TO REPAIR SHUTTLE AND LAUNCH!", () => {
          window.UI?.triggerEndingSequence?.();
        });
        return;
      }
    }

    if (nearestIndex !== -1) {
      const promptText = art.solved
        ? `PRESS [E] OR TAP TO REVIEW [${art.name}]`
        : `PRESS [E] OR TAP TO EXAMINE [${art.name}]`;
      window.UI?.showPrompt?.(promptText, () => {
        handleInteract();
      });
    } else {
      window.UI?.hidePrompt?.();
    }
  }

  function handleInteract() {
    if (activeArtifactIndex === -1) {
      if (shuttle && window.UI?.canLaunch?.() && player.pos.dist(shuttle.pos) < 160) {
        window.UI?.triggerEndingSequence?.();
      }
      return;
    }
    window.UI?.openArtifactScreen?.(activeArtifactIndex);
  }

  function triggerTarsyScan() {
    if (!ARTIFACT_DATA[0].solved) {
      window.UI?.setTarsyMessage?.("TARSY is offline and covered in dust. Reconnect the wiring first!");
      return;
    }

    scanTimer = 3.5;
    window.AudioManager?.play?.("tarsy_scan", 0.9);

    const reg = REGIONS[currentRegionId];
    const artId = reg.hasArtifact;
    const art = ARTIFACT_DATA[artId];

    if (art && !art.solved) {
      const dx = art.x - player.pos.x;
      const dy = art.y - player.pos.y;
      const dirName = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "EAST" : "WEST") : (dy > 0 ? "SOUTH" : "NORTH");
      window.UI?.setTarsyMessage?.(`TARSY SCANNED: Signal detected ${dirName}! Move toward ${art.name}.`);
    } else {
      let nextArt = ARTIFACT_DATA.find(a => !a.solved);
      if (nextArt) {
        const nextReg = REGIONS[nextArt.region];
        window.UI?.setTarsyMessage?.(`TARSY SCANNED: Next artifact is at ${nextReg.name}! Open MAP to deploy.`);
      } else {
        window.UI?.setTarsyMessage?.("TARSY: All artifacts recovered! Open MAP and deploy to ARES BASE CAMP to repair the shuttle!");
      }
    }
  }

  function updateArtifactSolved(index) {
    if (ARTIFACT_DATA[index]) {
      ARTIFACT_DATA[index].solved = true;
      loadRegion(currentRegionId);
    }
  }

  function travelToRegion(regionId) {
    if (!REGIONS[regionId]) return;
    window.AudioManager?.play?.("confirm", 0.9);
    loadRegion(regionId);
    window.UI?.go?.(4);
  }

  function pause() {
    isPaused = true;
    targetPos = null;
    isPointerDown = false;
  }

  function resume() {
    isPaused = false;
  }

  window.Game = {
    init,
    pause,
    resume,
    updateArtifactSolved,
    travelToRegion,
    triggerTarsyScan,
    getCurrentRegion: () => REGIONS[currentRegionId],
    getArtifactData: () => ARTIFACT_DATA,
    getRegions: () => REGIONS
  };
})();
