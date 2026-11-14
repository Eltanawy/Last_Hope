// Audio Manager for LAST HOPE
const AudioManager = (function() {
  const sounds = {};
  let muted = false;
  let bgm = null;

  const SOUND_FILES = {
    click: 'assets/audio/ui_click.wav',
    confirm: 'assets/audio/ui_confirm.wav',
    hover: 'assets/audio/ui_hover.wav',
    pok: 'assets/audio/pok_gain.wav',
    puzzle_start: 'assets/audio/puzzle_start.wav',
    puzzle_win: 'assets/audio/puzzle_success.wav',
    tarsy_on: 'assets/audio/tarsy_power_on.wav',
    tarsy_move: 'assets/audio/tarsy_move.wav',
    tarsy_scan: 'assets/audio/tarsy_scan.wav',
    mole_hammer: 'assets/audio/mole_hammer.wav',
    laser: 'assets/audio/seismo_laser.wav',
    boom_extend: 'assets/audio/arm_extend.wav',
    latch: 'assets/audio/latch_release.wav',
    rotor: 'assets/audio/rotor_spin.wav',
    wind: 'assets/audio/mars_wind.wav',
    alarm_low: 'assets/audio/battery_low.wav',
    alarm_crit: 'assets/audio/battery_critical.wav',
    victory: 'assets/audio/mission_complete.wav',
    launch: 'assets/audio/rocket_launch.wav',
    hint: 'assets/audio/hint.wav',
    analysis: 'assets/audio/analysis.wav',
    power_down: 'assets/audio/power_down.wav'
  };

  function init() {
    for (const [name, path] of Object.entries(SOUND_FILES)) {
      try {
        const audio = new Audio(path);
        audio.preload = 'auto';
        sounds[name] = audio;
      } catch (e) {
        console.warn('Audio load error:', name, e);
      }
    }
  }

  function play(name, vol = 0.8) {
    if (muted) return;
    try {
      const src = SOUND_FILES[name];
      if (!src) return;
      const sound = new Audio(src);
      sound.volume = Math.max(0, Math.min(1, vol));
      sound.play().catch(() => {});
    } catch (e) {
      // autoplay block or missing
    }
  }

  function startAmbience() {
    if (bgm || muted) return;
    try {
      bgm = new Audio(SOUND_FILES.wind);
      bgm.loop = true;
      bgm.volume = 0.25;
      bgm.play().catch(() => {});
    } catch (e) {}
  }

  function stopAmbience() {
    if (bgm) {
      bgm.pause();
      bgm.currentTime = 0;
      bgm = null;
    }
  }

  function toggleMute() {
    muted = !muted;
    if (muted) {
      if (bgm) bgm.pause();
    } else {
      if (bgm) bgm.play().catch(() => {});
    }
    return muted;
  }

  function isMuted() {
    return muted;
  }

  return {
    init,
    play,
    startAmbience,
    stopAmbience,
    toggleMute,
    isMuted
  };
})();

window.AudioManager = AudioManager;
