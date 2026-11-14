// LAST HOPE - UI, Puzzles, and Story Controller
(function() {
  let pok = 0;
  let backScreen = 4;
  let u = 0; // index of unlocked artifact (0=Tarsy, 1=Mole, 2=Seismo, 3=Ingenuity, 4=Viking Arm)
  let S = [0, 0, 0, 0, 0]; // 0=undiscovered, 1=partial, 2=solved
  let entered = {};
  let playerName = "Agent";
  let playerAge = "12";
  let storyPage = 0;
  let timeLeft = 300; // 5 minutes outside
  let timerInterval = null;
  let craftSlots = { base: false, release: false, arm: false, head: false };
  let selectedTile = null;
  let currentScreen = 0;

  const ARTIFACT_INFO = [
    {
      n: "TARSY",
      regionId: "base",
      regionName: "ARES BASE CAMP & SITE X",
      screen: 6,
      sub: "Old civilization robot that might be handy in some way.",
      desc: "Timeline: Lost during early reconnaissance.<br>Role: Companion robot equipped with laser, scanner, and analytical subroutines.<br>Location: Base Camp - Crash Site X.",
      fail: "Damaged power bus and disconnected internal wiring prevented bootup.",
      fix: "Connecting the primary red power wire to the blue control bus restored full functionality.",
      sol: "Tarsy now follows the agent, providing hints, location scans, and cutting tools.",
      matters: "Collaborative human-robot teams are vital for planetary surface science."
    },
    {
      n: "HP3 MOLE",
      regionId: "elysium",
      regionName: "ELYSIUM PLANITIA",
      screen: 7,
      sub: "Self-hammering thermal probe to measure Martian heatflow.",
      desc: "Timeline: Landed 2018, deployed 2019, final penetration concluded 2021.<br>Description: Self-hammering thermal probe designed to burrow 3-5 meters underground to measure Mars internal heat flow.<br>Location: Elysium Planitia.",
      fail: "Insufficient soil friction: The probe encountered cohesive duricrust instead of loose soil, causing it to bounce in place.",
      fix: "Increasing the pushing force and anchor pressure to overcome the hard duricrust layer.",
      sol: "Recoil suppression, expandable anchoring collar, and robotic-arm-assisted rotary-percussive drilling.",
      matters: "Heat flow measurements reveal the thermal history, mantle activity, and core state of Mars."
    },
    {
      n: "VIKING 1 SEISMOMETER",
      regionId: "chryse_seismo",
      regionName: "CHRYSE PLANITIA",
      screen: 8,
      sub: "Three-axis seismic instrument to detect Martian ground vibrations.",
      desc: "Timeline: Landed July 1976.<br>Description: Three-axis seismic instrument designed to detect Martian ground vibrations and marsquakes.<br>Location: Chryse Planitia Basalt Plains.",
      fail: "Uncaging mechanism failure: The release pins did not fire, keeping the internal sensors permanently locked.",
      fix: "Utilizing a high-energy LASER beam to sever the jammed locking bar and drop the caging structure.",
      sol: "Lock-free sensor architectures, redundant release actuators, and thermally matched low-expansion materials.",
      matters: "Seismic waves allow planetary scientists to map the crust, mantle, and core layers."
    },
    {
      n: "INGENUITY MARS HELICOPTER",
      regionId: "jezero",
      regionName: "JEZERO CRATER",
      screen: 9,
      sub: "Lightweight autonomous coaxial aerial scout demonstrator.",
      desc: "Timeline: First flight April 2021; final flight Jan 2024.<br>Description: Lightweight autonomous coaxial helicopter technology demonstrator.<br>Location: Jezero Crater Sand Ripple Delta.",
      fail: "Navigation tracking loss: The downward camera lost optical tracking over featureless sand ripples, leading to a hard landing and damaged rotor blades.",
      fix: "Extracting the high-resolution downward navigation camera to serve as optical eyes for the repair arm.",
      sol: "Multi-sensor fusion (stereo cameras, IMU, LiDAR/altimeters) and tougher polymer composite blades.",
      matters: "Ingenuity completed 72 historic flights, pioneering aerial mobility on other worlds."
    },
    {
      n: "VIKING 1 SURFACE SAMPLER ARM",
      regionId: "chryse_trench",
      regionName: "CHRYSE EXCAVATION TRENCH",
      screen: 10,
      sub: "Extendible robotic boom with collector scoop to dig soil.",
      desc: "Timeline: Landed July 1976.<br>Description: Extendible robotic boom with a collector scoop to dig soil and deliver samples.<br>Location: Chryse Deep Trench.",
      fail: "Mechanical jam: The boom latch pin failed to drop free during initial extension, obstructing the arm.",
      fix: "Reconstructing NASA's historical recovery procedure: extending the boom further past the jam threshold to drop the gravity pin.",
      sol: "Replacing gravity-drop pins with spring-assisted self-releasing latches and adding extension verification sensors.",
      matters: "Robotic arms on rovers like Curiosity and Perseverance build directly on Viking's heritage."
    }
  ];

  const KNOWLEDGE_ITEMS = [
    {
      t: "KNOWLEDGE · TARSY COMPANION",
      img: "assets/tarsy/01_tarsy_idle.png",
      html: "<b class='am'>WHAT IT IS</b>An autonomous auxiliary robot equipped with diagnostic lasers, terrain scanners, and power conduits.<br><b class='am'>ROLE IN MISSION</b>Follows the player across regions, reveals directional cues, and assists with mechanical overrides.<br><b class='am'>WHY IT MATTERS</b>Complex extraterrestrial missions rely on modular autonomous teammates to handle unexpected anomalies."
    },
    {
      t: "KNOWLEDGE · HP3 MOLE",
      img: "assets/artifacts/mole/07_preserved.png",
      html: "<b class='am'>WHAT WENT WRONG</b>The Martian soil at Elysium Planitia was not granular sand, but a thick, cemented crust known as 'duricrust'. Without sufficient friction along the probe's sides, the hammer recoil pushed the mole upward rather than down.<br><b class='am'>HOW TO OVERCOME IT</b>Modern designs incorporate recoil suppression, expandable anchoring collars, and robotic-arm-assisted rotary-percussive drilling.<br><b class='am'>WHY IT MATTERS</b>Measuring internal heat flow teaches us how terrestrial planets cool and whether volcanic or seismic activity persists."
    },
    {
      t: "KNOWLEDGE · VIKING 1 SEISMOMETER",
      img: "assets/artifacts/seismometer/06_preserved.png",
      html: "<b class='am'>WHAT WENT WRONG</b>Viking 1's seismometer failed to uncage after touchdown because the explosive pin-pullers failed to retract the locking pins, leaving the sensor mass immobilized.<br><b class='am'>HOW TO OVERCOME IT</b>Lock-free sensor architectures, redundant thermal shape-memory alloy actuators, and non-pyrotechnic releases.<br><b class='am'>WHY IT MATTERS</b>NASA's InSight mission successfully placed an uncaged ultra-sensitive seismometer on the Martian surface 42 years later, recording over 1,300 marsquakes."
    },
    {
      t: "KNOWLEDGE · INGENUITY HELICOPTER",
      img: "assets/artifacts/ingenuity/01_original_intact.png",
      html: "<b class='am'>WHAT WENT WRONG</b>On Flight 72, the autonomous navigation camera lost optical feature tracking over uniform sand ripples, leading to attitude divergence and a hard landing that clipped rotor tips.<br><b class='am'>HOW TO OVERCOME IT</b>Multi-sensor fusion integrating stereo visual odometry, downward LiDAR altimetry, and reinforced carbon-fiber rotor composites.<br><b class='am'>WHY IT MATTERS</b>Proved powered, controlled flight is possible in Mars's thin atmosphere (less than 1% of Earth's air density)."
    },
    {
      t: "KNOWLEDGE · VIKING SAMPLER ARM",
      img: "assets/artifacts/viking_arm/04_operational_extended.png",
      html: "<b class='am'>WHAT WENT WRONG</b>During initial checkout, the boom latch pin did not drop free because the boom hadn't traveled far enough to clear the retention catch, preventing further retraction.<br><b class='am'>HOW TO OVERCOME IT</b>NASA JPL engineers commanded the boom to extend further, allowing gravity and spring tension to pull the pin clear. Future arms added positive-acting micro-switches and spring-assist latches.<br><b class='am'>WHY IT MATTERS</b>Viking took the very first samples of Martian soil, establishing the foundation for all modern planetary sampling."
    },
    {
      t: "KNOWLEDGE · RSRA REPAIR ARM",
      img: "assets/artifacts/viking_arm/04_operational_extended.png",
      html: "<b class='am'>WHAT IT IS</b>The Robotic Spacecraft Repair Arm integrates the 4 solutions: Base Clamp (Mole anchoring), Release Unit (Seismometer latching), Sensor Head (Ingenuity camera), and Telescopic Boom (Viking arm).<br><b class='am'>CANADARM HERITAGE</b>Inspired by NASA and CSA's Canadarm and Canadarm2, which assembled the International Space Station and captured orbiting satellites.<br><b class='am'>WHY IT MATTERS</b>Robotic repair arms enable spacecraft to survive deep-space malfunctions without risking human EVA crew."
    }
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function init() {
    window.AudioManager?.init?.();
    setupWirePuzzle();
    setupLaserPuzzle();
    setupBoomSlider();
    setupCrafting();
    startTimer();
    updateHUD();
    setupTextAndButtonFitting();
  }

  function go(screenIndex) {
    currentScreen = screenIndex;
    const screens = document.querySelectorAll(".scr");
    screens.forEach((s, idx) => {
      s.classList.toggle("on", idx === screenIndex);
    });

    if (screenIndex === 4) {
      window.Game?.resume?.();
      window.AudioManager?.startAmbience?.();
    } else {
      window.Game?.pause?.();
    }

    if (screenIndex !== 11 && screenIndex !== 15 && screenIndex !== 5) {
      backScreen = (screenIndex === 0 || screenIndex === 3) ? 4 : screenIndex;
    }

    // Screen specific logic
    if (screenIndex === 2) {
      storyPage = 0;
      updateStoryText();
    } else if (screenIndex === 3) {
      const bar = $("ld");
      if (bar) {
        bar.style.width = "20%";
        setTimeout(() => bar.style.width = "60%", 500);
        setTimeout(() => bar.style.width = "100%", 1200);
        setTimeout(() => go(4), 2200);
      }
    } else if (screenIndex === 5) {
      renderMap();
    } else if (screenIndex === 11) {
      renderDiscoveries();
    } else if (screenIndex === 12) {
      renderCraftUI();
    }

    // Discovery POK upon entering an artifact screen
    if (screenIndex >= 7 && screenIndex <= 10) {
      const artIdx = screenIndex - 6;
      if (!entered[screenIndex]) {
        entered[screenIndex] = true;
        if (S[artIdx] === 0) {
          S[artIdx] = 1;
          pok += 5;
          window.AudioManager?.play?.("pok", 0.9);
          window.AudioManager?.play?.("artifact_discovered", 0.8);
        }
      }
    }

    updateHUD();
    setTimeout(window.fit, 35);
  }

  function updateHUD() {
    const pkEl = $("pk");
    if (pkEl) pkEl.textContent = String(pok).padStart(2, "0");

    const pkpEl = $("pkp");
    if (pkpEl) pkpEl.style.display = S[0] >= 2 ? "flex" : "none";

    const crbEl = $("crb");
    if (crbEl) crbEl.style.display = S[0] >= 2 ? "block" : "none";

    const askbEl = $("askb");
    if (askbEl) askbEl.style.display = S[0] >= 2 ? "block" : "none";

    const cbEl = $("cb");
    if (cbEl) cbEl.style.width = Math.min(100, (pok / 45) * 100) + "%";

    const cpEl = $("cp");
    if (cpEl) cpEl.textContent = `${String(pok).padStart(2, "0")} / 45`;
  }

  function updateLocationBanner(name, coords) {
    const banner = $("hud-region-name");
    if (banner) banner.textContent = name;
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (currentScreen === 4 && timeLeft > 0) {
        timeLeft -= 1;
        const pct = Math.max(0, (timeLeft / 300) * 100);
        const bar = document.querySelector("#s4 .bar i");
        if (bar) {
          bar.style.width = pct + "%";
          if (pct < 15) {
            bar.style.background = "#e0301a";
            if (timeLeft % 10 === 0) window.AudioManager?.play?.("alarm_crit", 0.8);
          } else if (pct < 35) {
            bar.style.background = "#ffb21a";
            if (timeLeft % 20 === 0) window.AudioManager?.play?.("alarm_low", 0.7);
          } else {
            bar.style.background = "#2fd8e8";
          }
        }
      }
    }, 1000);
  }

  function rechargeTime(amount) {
    timeLeft = Math.min(300, timeLeft + amount);
  }

  function storyNext() {
    window.AudioManager?.play?.("click");
    if (storyPage === 0) {
      storyPage = 1;
      updateStoryText();
    } else {
      go(3); // Loading screen
    }
  }

  function updateStoryText() {
    const stEl = $("st");
    if (!stEl) return;
    if (storyPage === 0) {
      stEl.innerHTML = `
        <b class="am">THE MISSION</b><br>
        After 3 centuries, all of humanity's modern technology was destroyed by nuclear wars. All knowledge was stored in digital devices that became artifacts humans scavenge for.<br><br>
        A global organization, ARES (Agency for the Recovery of Exploration Science), sent a robot through a space shuttle to Mars, controlled by YOU, the agent.<br><br>
        <span class="c">Keep it safe: technology is fragile, and the robot cannot survive outside the shuttle indefinitely.</span>
      `;
    } else {
      stEl.innerHTML = `
        <b class="am">THE DAMAGE & THE GOAL</b><br>
        When the space shuttle touched down on Mars, the external propulsion-control connection was damaged.<br><br>
        The shuttle cannot safely ignite its engines because this system cannot communicate properly with the thrusters.<br><br>
        <span class="am">You require ONE tool to launch:</span> A Robotic Spacecraft Repair Arm (RSRA) capable of reaching the damaged area, opening the panel, and reconnecting the component.<br><br>
        Recover the 4 lost NASA artifacts, collect <span class="c">45 Points of Knowledge (POK)</span>, and craft the repair arm!
      `;
    }
    setTimeout(window.fit, 30);
  }

  // --- MAP SCREEN (MULTI-REGION SELECTOR) ---
  function renderMap() {
    const mp = $("mp");
    if (!mp) return;
    mp.innerHTML = "";

    const REGION_PINS = [
      { id: "base", name: "BASE CAMP (SITE X)", artIdx: 0, x: 14, y: 52, icon: "★" },
      { id: "elysium", name: "ELYSIUM PLANITIA (MOLE)", artIdx: 1, x: 35, y: 32, icon: "′" },
      { id: "chryse_seismo", name: "CHRYSE PLANITIA (SEISMOMETER)", artIdx: 2, x: 55, y: 65, icon: "′" },
      { id: "jezero", name: "JEZERO CRATER (INGENUITY)", artIdx: 3, x: 74, y: 38, icon: "′" },
      { id: "chryse_trench", name: "CHRYSE TRENCH (SAMPLER ARM)", artIdx: 4, x: 86, y: 72, icon: "′" }
    ];

    REGION_PINS.forEach((pinData) => {
      const isUnlocked = pinData.artIdx <= u || pinData.id === "base";
      const isSolved = S[pinData.artIdx] === 2;

      const pin = document.createElement("div");
      pin.className = "pin" + (!isUnlocked ? " lk" : "");
      pin.style.left = `${pinData.x}%`;
      pin.style.top = `${pinData.y}%`;
      pin.textContent = pinData.icon;

      if (pinData.id === "base") {
        pin.style.background = "#ff7a1a";
        pin.style.borderColor = "#ffe3bd";
      }

      pin.onclick = () => {
        window.AudioManager?.play?.("click");
        if (!isUnlocked) {
          const pop = $("pop");
          pop.style.display = "flex";
          pop.innerHTML = `
            <b class="am" style="color:#e0301a">REGION LOCKED</b><br>
            Recover the preceding artifact to calculate atmospheric trajectory coordinates!
          `;
          return;
        }

        const art = ARTIFACT_INFO[pinData.artIdx];
        const pop = $("pop");
        pop.style.display = "flex";
        pop.innerHTML = `
          <b class="am">${art.regionName}</b><br>
          <span class="sm">${art.desc}</span><br>
          <span class="c">STATUS: ${isSolved ? "RECOVERED ✓" : S[pinData.artIdx] === 1 ? "PARTIAL" : "UNDISCOVERED"}</span><br><br>
          <div style="display:flex;gap:15px;align-items:center;">
            <span class="c" style="cursor:pointer;font-size:.85cqw" id="btn-deploy-region">▶ DEPLOY TO REGION</span>
            <span style="cursor:pointer;color:#ff7a1a;font-size:.8cqw" id="btn-close-pop">✖ CLOSE</span>
          </div>
        `;

        $("btn-deploy-region").onclick = () => {
          window.AudioManager?.play?.("confirm");
          window.Game?.travelToRegion?.(pinData.id);
        };
        $("btn-close-pop").onclick = () => {
          pop.style.display = "none";
        };
      };

      mp.appendChild(pin);

      const label = document.createElement("div");
      label.style.cssText = `position:absolute;left:${pinData.x + 2.5}%;top:${pinData.y + 1}%;font-size:.65cqw;color:${!isUnlocked ? '#888' : isSolved ? '#2fd8e8' : '#ffb21a'};pointer-events:none;white-space:nowrap;`;
      label.textContent = pinData.name + (isSolved ? " ✓" : !isUnlocked ? " 🔒" : "");
      mp.appendChild(label);
    });

    $("pop").style.display = "none";
    setTimeout(window.fit, 30);
  }

  // --- DISCOVERIES SCREEN (6 CIRCLES) ---
  function renderDiscoveries() {
    const dg = $("dg");
    if (!dg) return;
    dg.innerHTML = "";

    const items = [
      { name: "HP3 MOLE", status: S[1], img: "assets/artifacts/mole/07_preserved.png", infoIdx: 1 },
      { name: "VIKING SEISMOMETER", status: S[2], img: "assets/artifacts/seismometer/06_preserved.png", infoIdx: 2 },
      { name: "INGENUITY HELICOPTER", status: S[3], img: "assets/artifacts/ingenuity/01_original_intact.png", infoIdx: 3 },
      { name: "VIKING SAMPLER ARM", status: S[4], img: "assets/artifacts/viking_arm/04_operational_extended.png", infoIdx: 4 },
      { name: "TARSY (COMPANION)", status: S[0], img: "assets/tarsy/01_tarsy_idle.png", infoIdx: 0 },
      { name: "COMING SOON", status: -1, img: null, infoIdx: -1 }
    ];

    items.forEach(item => {
      const circ = document.createElement("div");
      circ.className = "circ " + (item.status === 2 ? "f" : item.status === 1 ? "pa" : "n");

      if (item.status === -1) {
        circ.innerHTML = `<span class="t" style="font-size:1.4cqw">????</span>COMING SOON<span class="c">ARES ARCHIVE</span>`;
      } else if (item.status === 0) {
        circ.innerHTML = `<span class="t" style="font-size:1.6cqw">???</span>UNDISCOVERED`;
      } else {
        const filterStyle = item.status === 1 ? "filter:grayscale(1) brightness(0.7);" : "";
        circ.innerHTML = `
          <img src="${item.img}" style="width:50%;height:50%;object-fit:contain;${filterStyle}">
          <span>${item.name}</span>
          <span class="c">${item.status === 2 ? "FULL ✓" : "PARTIAL"}</span>
        `;
        circ.style.cursor = "pointer";
        circ.onclick = () => {
          window.AudioManager?.play?.("click");
          showDossier(item.infoIdx);
        };
      }
      dg.appendChild(circ);
    });
    setTimeout(window.fit, 30);
  }

  function showDossier(idx) {
    const art = ARTIFACT_INFO[idx];
    const dp = $("dp");
    if (!art || !dp) return;
    dp.style.display = "flex";
    dp.innerHTML = `
      <b class="am" style="font-size:1.1cqw">${art.n} DOSSIER</b>
      ${art.desc}<br><br>
      <b class="am">WHY DID IT FAIL?</b><br>${art.fail}<br><br>
      <b class="am">HOW TO OVERCOME THIS?</b><br>${art.sol}<br><br>
      <b class="am">WHY IT MATTERS</b><br>${art.matters}<br><br>
      <span class="c" style="cursor:pointer;align-self:flex-end">✖ CLOSE</span>
    `;
    dp.onclick = () => {
      dp.style.display = "none";
    };
    setTimeout(window.fit, 30);
  }

  // --- PUZZLE 0: FIX TARSY (WIRE PUZZLE) ---
  function setupWirePuzzle() {
    const wr = $("wr");
    const wb = $("wb");
    const wl = $("wl");
    const wsv = $("wsv");
    if (!wr || !wb || !wl || !wsv) return;

    let dragging = false;

    function getCoords(el) {
      const r = el.getBoundingClientRect();
      const s = $("s6").getBoundingClientRect();
      return {
        x: ((r.left + r.width / 2 - s.left) / s.width) * 100,
        y: ((r.top + r.height / 2 - s.top) / s.height) * 56.25
      };
    }

    wr.addEventListener("pointerdown", () => {
      dragging = true;
      const c = getCoords(wr);
      wl.setAttribute("x1", c.x);
      wl.setAttribute("y1", c.y);
      wl.setAttribute("x2", c.x);
      wl.setAttribute("y2", c.y);
      window.AudioManager?.play?.("hover");
    });

    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const s = $("s6").getBoundingClientRect();
      const mx = ((e.clientX - s.left) / s.width) * 100;
      const my = ((e.clientY - s.top) / s.height) * 56.25;
      wl.setAttribute("x2", mx);
      wl.setAttribute("y2", my);
    });

    window.addEventListener("pointerup", (e) => {
      if (!dragging) return;
      dragging = false;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target === wb || target?.id === "wb") {
        completeTarsyWire();
      } else {
        wl.setAttribute("x1", 0);
        wl.setAttribute("y1", 0);
        wl.setAttribute("x2", 0);
        wl.setAttribute("y2", 0);
      }
    });

    wb.addEventListener("click", () => {
      completeTarsyWire();
    });
  }

  function completeTarsyWire() {
    if (S[0] === 2) return;
    const wr = $("wr");
    const wb = $("wb");
    const wl = $("wl");
    const s = $("s6").getBoundingClientRect();
    const r1 = wr.getBoundingClientRect();
    const r2 = wb.getBoundingClientRect();

    wl.setAttribute("x1", ((r1.left + r1.width / 2 - s.left) / s.width) * 100);
    wl.setAttribute("y1", ((r1.top + r1.height / 2 - s.top) / s.height) * 56.25);
    wl.setAttribute("x2", ((r2.left + r2.width / 2 - s.left) / s.width) * 100);
    wl.setAttribute("y2", ((r2.top + r2.height / 2 - s.top) / s.height) * 56.25);
    wl.setAttribute("stroke", "#2fd8e8");
    wl.setAttribute("stroke-width", "2");

    window.AudioManager?.play?.("tarsy_on", 1.0);
    window.AudioManager?.play?.("puzzle_win", 0.9);

    S[0] = 2;
    pok += 5;
    u = Math.max(u, 1);
    window.Game?.updateArtifactSolved?.(0);

    const m6 = $("m6");
    if (m6) {
      m6.innerHTML = "<b class='am'>CIRCUIT RESTORED! TARSY REBOOTED!</b><br>Tarsy: 'System nominal! I will follow and guide you.' (+5 POK)";
    }

    const t6 = $("t6");
    if (t6) {
      t6.style.filter = "none";
      t6.src = "assets/tarsy/01_tarsy_idle.png";
    }

    const n6 = $("n6");
    if (n6) n6.style.display = "block";
    updateHUD();
    setTimeout(window.fit, 30);
  }

  // --- PUZZLE 1: HP3 MOLE ---
  window.mole = function(val) {
    window.AudioManager?.play?.("click");
    const msg = $("m7");
    if (val === 5) {
      if (S[1] === 2) return;
      window.AudioManager?.play?.("mole_hammer", 0.9);
      window.AudioManager?.play?.("puzzle_win", 0.9);
      S[1] = 2;
      pok += 5;
      u = Math.max(u, 2);
      window.Game?.updateArtifactSolved?.(1);

      if (msg) {
        msg.innerHTML = "<b class='am'>CORRECT! PUSHING FORCE = 5</b><br>Increased friction overcame the duricrust! Mole burrowed successfully. (+5 POK)";
      }
      const n7 = $("n7");
      if (n7) n7.style.display = "block";
      updateHUD();
    } else {
      window.AudioManager?.play?.("alarm_low", 0.5);
      if (msg) {
        msg.innerHTML = `<span style="color:#e0301a">Force value ${val} is insufficient!</span> The probe bounces in place against cohesive duricrust. Need more downward force!`;
      }
    }
    setTimeout(window.fit, 30);
  };

  // --- PUZZLE 2: VIKING SEISMOMETER (LASER) ---
  function setupLaserPuzzle() {
    const sz = $("sz");
    if (!sz) return;

    let cutting = false;
    sz.addEventListener("pointerdown", (e) => {
      cutting = true;
      window.AudioManager?.play?.("laser", 0.8);
      checkLaserCut(e);
    });
    window.addEventListener("pointermove", (e) => {
      if (!cutting) return;
      checkLaserCut(e);
    });
    window.addEventListener("pointerup", () => {
      cutting = false;
    });

    function checkLaserCut(e) {
      if (S[2] === 2) return;
      const rect = sz.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      if (x > 0.65 && y < 0.4) {
        completeSeismoLaser();
      }
    }
  }

  function completeSeismoLaser() {
    if (S[2] === 2) return;
    window.AudioManager?.play?.("latch", 0.9);
    window.AudioManager?.play?.("puzzle_win", 0.9);

    S[2] = 2;
    pok += 5;
    u = Math.max(u, 3);
    window.Game?.updateArtifactSolved?.(2);

    const pin = $("sz_pin");
    if (pin) pin.style.display = "none";

    const msg = $("m8");
    if (msg) {
      msg.innerHTML = "<b class='am'>LOCKING PIN CUT! CAGING RELEASED!</b><br>The 3-axis seismic sensor is now unconstrained and measuring ground tremors. (+5 POK)";
    }

    const n8 = $("n8");
    if (n8) n8.style.display = "block";
    updateHUD();
    setTimeout(window.fit, 30);
  }

  // --- PUZZLE 3: INGENUITY (CAMERA EXTRACTION) ---
  window.cam = function() {
    if (S[3] === 2) return;
    window.AudioManager?.play?.("item_collect", 0.9);
    window.AudioManager?.play?.("puzzle_win", 0.9);

    S[3] = 2;
    pok += 5;
    u = Math.max(u, 4);
    window.Game?.updateArtifactSolved?.(3);

    const camEl = $("cam");
    if (camEl) {
      camEl.style.background = "#ff7a1a";
      camEl.textContent = "✓";
    }

    const msg = $("m9");
    if (msg) {
      msg.innerHTML = "<b class='am'>OPTICAL NAV CAMERA SALVAGED!</b><br>High-resolution terrain tracking sensor extracted for our repair arm. (+5 POK)";
    }

    const n9 = $("n9");
    if (n9) n9.style.display = "block";
    updateHUD();
    setTimeout(window.fit, 30);
  };

  // --- PUZZLE 4: VIKING SAMPLER ARM (BOOM SLIDER) ---
  function setupBoomSlider() {
    const rg = $("rg");
    if (!rg) return;
    rg.oninput = function() {
      const val = parseInt(rg.value);
      const bm = $("bm");
      const sc = $("sc");
      const lp = $("lp");

      if (bm) bm.style.width = val + "%";
      if (sc) sc.style.left = (val + 5) + "%";

      if (val >= 80 && S[4] !== 2) {
        if (lp) {
          lp.style.top = "70%";
          lp.style.background = "#2fd8e8";
        }
        window.AudioManager?.play?.("latch", 0.9);
        window.AudioManager?.play?.("boom_extend", 0.8);
        window.AudioManager?.play?.("puzzle_win", 1.0);

        S[4] = 2;
        pok += 5;
        window.Game?.updateArtifactSolved?.(4);

        const msg = $("m10");
        if (msg) {
          msg.innerHTML = "<b class='am'>BOOM EXTENDED! LATCH PIN RELEASED!</b><br>Replicated NASA recovery: extending cleared the obstruction. Soil scoop operational! (+5 POK)";
        }

        const n10 = $("n10");
        if (n10) n10.style.display = "block";
        updateHUD();
        setTimeout(window.fit, 30);
      }
    };
  }

  // --- CRAFTING SCREEN (RSRA ASSEMBLY) ---
  function setupCrafting() {
    ["base", "release", "head", "arm"].forEach(type => {
      const tile = $(`t_${type}`);
      if (tile) {
        tile.onclick = () => {
          window.AudioManager?.play?.("click");
          document.querySelectorAll(".tile").forEach(t => t.classList.remove("sel"));
          selectedTile = type;
          tile.classList.add("sel");
        };
      }

      const slot = $(`sl_${type}`);
      if (slot) {
        slot.onclick = () => {
          if (!selectedTile) {
            $("m12").textContent = "Select a component tile on the right first, then tap this slot.";
            return;
          }
          if (selectedTile === type) {
            window.AudioManager?.play?.("confirm", 0.9);
            craftSlots[type] = true;
            slot.classList.add("ok");
            slot.innerHTML = `<b class="am">✓ ${type.toUpperCase()} MOUNTED</b>`;
            $(`t_${type}`).classList.add("dn");
            selectedTile = null;
            checkCraftComplete();
          } else {
            window.AudioManager?.play?.("alarm_low", 0.5);
            $("m12").textContent = `Incorrect slot! That component belongs to another joint of the RSRA.`;
          }
        };
      }
    });
  }

  function renderCraftUI() {
    const lk = $("lk");
    const cr = $("cr");
    if (pok >= 45) {
      if (lk) lk.style.display = "none";
      if (cr) cr.style.display = "block";
    } else {
      if (lk) lk.style.display = "flex";
      if (cr) cr.style.display = "none";
    }
    setTimeout(window.fit, 30);
  }

  function checkCraftComplete() {
    const allDone = craftSlots.base && craftSlots.release && craftSlots.head && craftSlots.arm;
    if (allDone) {
      window.AudioManager?.play?.("victory", 1.0);
      const msg = $("m12");
      if (msg) {
        msg.innerHTML = "<b class='am'>RSRA ASSEMBLED SUCCESSFULLY!</b><br>Canadarm-inspired repair arm ready to deploy on Space Shuttle propulsion panel!";
      }
      const go13 = $("go13");
      if (go13) {
        go13.style.display = "block";
        go13.textContent = "DEPLOY TO BASE";
        go13.onclick = () => {
          window.Game?.travelToRegion?.("base");
          window.UI?.setTarsyMessage?.("TARSY: RSRA is complete! Walk to the Space Shuttle to initiate the emergency repair!");
        };
      }
    }
  }

  function isCraftComplete() {
    return craftSlots.base && craftSlots.release && craftSlots.head && craftSlots.arm;
  }

  // --- KNOWLEDGE POPUP MODAL (SCREEN 15) ---
  window.goK = function(kIdx) {
    go(15);
    const item = KNOWLEDGE_ITEMS[kIdx];
    if (!item) return;

    $("kt").textContent = item.t;
    $("kimg").src = item.img;
    $("kb").innerHTML = item.html;

    const kn = $("kn");
    if (kn) {
      kn.querySelector(".lbl").textContent = kIdx === 5 ? "PROCEED TO SHUTTLE" : kIdx === 4 ? "OPEN CRAFTING" : "OPEN MARS MAP";
      kn.onclick = () => {
        window.AudioManager?.play?.("click");
        if (kIdx === 4) {
          go(12); // Craft
        } else if (kIdx === 5) {
          window.Game?.travelToRegion?.("base");
        } else {
          go(5); // Map to select next region!
        }
      };
    }
    setTimeout(window.fit, 30);
  };

  // --- EPIC ENDING CINEMATIC (SCREEN 13 & 14) ---
  function triggerEndingSequence() {
    go(13);
    playEndingCinematic();
  }

  function playEndingCinematic() {
    const s13 = $("s13");
    if (!s13) return;

    window.AudioManager?.play?.("alarm_crit", 0.9);

    s13.innerHTML = `
      <div id="end-container" style="position:absolute;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2cqw;color:#ffe3bd;text-align:center;">
        <div id="end-phase" style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <img id="end-img" src="assets/player/walk_frame_01.png" style="width:15%;image-rendering:pixelated;margin-bottom:2cqw;filter:drop-shadow(0 0 10px #ff7a1a)">
          <div id="end-txt" class="p i3" style="max-width:70%;padding:1.5cqw;font-size:1.1cqw;line-height:1.8">
            CRITICAL WARNING: Atmospheric degradation detected!<br>The rover chassis is sustaining severe internal electrical damage...
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      $("end-txt").innerHTML = `
        <span style="color:#e0301a">INTERNAL TIME CRITICAL: 00:03 SECONDS REMAINING!</span><br>
        The robot pushes its servos to maximum torque, dragging toward the shuttle hatch...
      `;
      $("end-img").src = "assets/player/walk_frame_04.png";
      window.AudioManager?.play?.("alarm_crit", 1.0);
    }, 3000);

    setTimeout(() => {
      $("end-txt").innerHTML = `
        <b class="am" style="font-size:1.4cqw">HATCH REACHED AT THE LAST MINUTE!</b><br>
        The agent docks inside the airlock just before systems shut down.<br>
        RSRA Robotic Arm deployed to the propulsion bay!
      `;
      $("end-img").src = "assets/artifacts/viking_arm/04_operational_extended.png";
      window.AudioManager?.play?.("confirm", 1.0);
    }, 6500);

    setTimeout(() => {
      window.AudioManager?.play?.("launch", 1.0);
      $("end-txt").innerHTML = `
        <b class="am" style="font-size:1.5cqw">PROPULSION CONNECTION RESTORED!</b><br>
        ARES Shuttle ignition sequence confirmed. Launching from Martian surface!
      `;
      $("end-img").src = "assets/rocket/front_elevation.png";
      $("end-img").style.width = "22%";
    }, 10000);

    setTimeout(() => {
      $("end-txt").innerHTML = `
        Traversing 225 million kilometers across deep space...<br>
        Returning the recovered scientific knowledge of humanity's past civilization to Earth!
      `;
      $("end-img").src = "assets/rocket/front_elevation.png";
    }, 14000);

    setTimeout(() => {
      go(14);
      startTypewriterEpilogue();
    }, 18000);
  }

  function startTypewriterEpilogue() {
    window.AudioManager?.play?.("victory", 1.0);
    const lines = [
      "Congratulations on discovering the lost pieces.",
      "What you have accomplished will never be forgotten.",
      "Simply because, you returned the",
      "LAST HOPE",
      "To humanity",
      "At the",
      "LAST MINUTE."
    ];

    const s14 = $("s14");
    if (!s14) return;
    s14.innerHTML = `
      <div style="position:absolute;inset:0;background:radial-gradient(circle at center, #2a1208 0%, #000 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3cqw;color:#ffe3bd;text-align:center;">
        <div id="epilogue-box" style="font-size:1.1cqw;line-height:2.2;max-width:80%;"></div>
        <div style="margin-top:2.5cqw;display:flex;gap:1.5cqw">
          <div class="p i7 b" style="padding:1cqw 2cqw;cursor:pointer" onclick="location.reload()">PLAY AGAIN</div>
          <div class="p i9 b" style="padding:1cqw 2cqw;cursor:pointer" onclick="window.UI?.freeRoam?.()">FREE ROAM MARS</div>
        </div>
      </div>
    `;

    const box = $("epilogue-box");
    let lineIdx = 0;

    function nextLine() {
      if (lineIdx < lines.length) {
        const p = document.createElement("div");
        const lineText = lines[lineIdx];
        if (lineIdx === 3) {
          p.style.cssText = "font-size:2.2cqw;color:#ff7a1a;margin:0.8cqw 0;text-shadow:0 0 10px #ff7a1a";
        } else if (lineIdx === 6) {
          p.style.cssText = "font-size:1.6cqw;color:#2fd8e8;margin:0.8cqw 0;text-shadow:0 0 8px #2fd8e8";
        }
        p.textContent = lineText;
        box.appendChild(p);
        lineIdx++;
        setTimeout(nextLine, 1200);
      }
    }
    nextLine();
  }

  function freeRoam() {
    timeLeft = 9999;
    go(4);
  }

  // --- COMPLETE BUTTON & TEXT AUTO-FITTING ENGINE ---
  function setupTextAndButtonFitting() {
    const AR = { i7: 390 / 118, i8: 291 / 112, i9: 483 / 119, i10: 150 / 134 };
    document.querySelectorAll(".b,.ch").forEach(el => {
      const k = ["i7", "i8", "i9", "i10"].find(c => el.classList.contains(c));
      if (!k) return;
      el.classList.add("btn2");
      el.style.height = "auto";
      el.style.aspectRatio = AR[k];

      const F = { i7: 1.3, i9: 1.25, i8: 1.15, i10: 1.2 }[k];
      const w0 = parseFloat(el.style.width);
      const l0 = parseFloat(el.style.left);
      if (w0 && !isNaN(l0)) {
        const w1 = w0 * F;
        el.style.width = w1 + "%";
        el.style.left = Math.max(1, Math.min(l0 - (w1 - w0) / 2, 99 - w1)) + "%";
      }

      if (el.classList.contains("b") && !el.querySelector(".lbl")) {
        const tx = el.textContent.trim();
        el.textContent = "";
        const s = document.createElement("span");
        s.className = "lbl";
        s.textContent = tx;
        el.appendChild(s);
      }
    });

    const st = document.querySelector(".stage");
    let tm;

    window.fit = function() {
      if (!st) return;
      const H = st.clientHeight;

      // 1. Fit Buttons
      st.querySelectorAll(".btn2").forEach(el => {
        if (!el.offsetHeight && el.style.display !== "none") return;
        if (el.dataset.t0 === undefined) el.dataset.t0 = el.style.top;
        el.style.top = el.dataset.t0;
        const h = el.offsetHeight;
        if (!h) return;
        const top = el.offsetTop;
        if (top + h > H - 4) el.style.top = ((H - h - 5) / H * 100) + "%";
        const l = el.querySelector(".lbl");
        if (l) {
          let fs = h * 0.38;
          l.style.fontSize = fs + "px";
          while (l.scrollWidth > l.clientWidth && fs > 4) {
            fs -= 0.5;
            l.style.fontSize = fs + "px";
          }
        }
      });

      // 2. Fit Text Panels (.p:not(.btn2)) - Essential for 9-slice borders!
      const IN = {
        i1: [8, 16, 8, 14],
        i2: [8, 14, 8, 14],
        i3: [10, 18, 8, 15],
        i4: [10, 18, 10, 15],
        i5: [10, 15, 10, 15],
        i6: [8, 15, 8, 14]
      };

      st.querySelectorAll(".p:not(.btn2)").forEach(el => {
        if (!el.offsetHeight) return;
        const k = Object.keys(IN).find(c => el.classList.contains(c));
        if (k) {
          const [L, T, R, B] = IN[k];
          const w = el.offsetWidth;
          const h = el.offsetHeight;
          el.style.padding = (T * h / 100) + "px " + (R * w / 100) + "px " + (B * h / 100) + "px " + (L * w / 100) + "px";
        }
        el.style.fontSize = "";
        let fs = parseFloat(getComputedStyle(el).fontSize);
        while ((el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) && fs > 8.5) {
          fs -= 0.35;
          el.style.fontSize = fs + "px";
        }
      });
    };

    const later = () => { clearTimeout(tm); tm = setTimeout(window.fit, 30); };
    new MutationObserver(later).observe(st, { childList: true, characterData: true, subtree: true });
    new ResizeObserver(later).observe(st);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(later);
  }

  // Global UI Interface
  window.UI = {
    init,
    go,
    rechargeTime,
    storyNext,
    updateLocationBanner,
    openArtifactScreen: (idx) => {
      const art = ARTIFACT_INFO[idx];
      if (art) go(art.screen);
    },
    showPrompt: (text, callback) => {
      const promptEl = $("interaction-prompt");
      if (promptEl) {
        promptEl.style.display = "block";
        promptEl.textContent = text;
        promptEl.onclick = callback;
      }
    },
    hidePrompt: () => {
      const promptEl = $("interaction-prompt");
      if (promptEl) promptEl.style.display = "none";
    },
    setTarsyMessage: (msg) => {
      const gm = $("gm");
      if (gm) gm.textContent = msg;
    },
    canLaunch: () => isCraftComplete(),
    triggerEndingSequence,
    freeRoam
  };

  window.confirmAgent = function() {
    window.AudioManager?.play?.("confirm");
    const nm = $("nm");
    const ag = $("ag");
    if (nm && nm.value) playerName = nm.value;
    if (ag && ag.value) playerAge = ag.value;
    go(2);
  };

  window.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();
