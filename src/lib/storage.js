/**
 * Persist progress to localStorage. Safe defaults and try/catch
 * so the app never crashes due to storage errors (private mode, quota, etc.).
 */

const STORAGE_KEY = 'biblingo_progress';

const DEFAULTS = {
  completed: ['l1-1', 'l1-2', 'l1-3', 'l2-1'],
  xp: 240,
  streak: 4,
};

export function loadProgress() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return DEFAULTS;
    const completed = Array.isArray(parsed.completed) ? parsed.completed : DEFAULTS.completed;
    const xp = typeof parsed.xp === 'number' && parsed.xp >= 0 ? parsed.xp : DEFAULTS.xp;
    const streak = typeof parsed.streak === 'number' && parsed.streak >= 0 ? parsed.streak : DEFAULTS.streak;
    return { completed, xp, streak };
  } catch {
    return DEFAULTS;
  }
}

export function saveProgress(completed, xp, streak) {
  try {
    if (typeof localStorage === 'undefined') return;
    const payload = {
      completed: Array.isArray(completed) ? completed : DEFAULTS.completed,
      xp: typeof xp === 'number' && xp >= 0 ? xp : DEFAULTS.xp,
      streak: typeof streak === 'number' && streak >= 0 ? streak : DEFAULTS.streak,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota or security errors
  }
}
