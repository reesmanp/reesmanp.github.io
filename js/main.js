const HTML = document.documentElement;
const MODE_BUTTONS = document.querySelectorAll("#mode-toggle button");
const MODES = ["dev", "professional"];
const MODE_NAV_KEYS = ["ArrowLeft", "ArrowRight"];
const STORAGE_KEY = "portfolio-mode";
const URL_PARAM = "mode";
const TERMINAL_KEYS = ["Enter", "ArrowDown"];

/**
 * Returns the lowercased version of the input string if it is included in MODES otherwise it returns an empty string
 * @param {string} raw - The string to be normalized 
 * @returns {string} The lowercased version of raw if raw is included in MODES else returns an empty string
 */
function normalizeMode(raw) {
  if (!raw) {
    return "";
  }

  const lower = raw.toLowerCase();
  return MODES.includes(lower) ? lower : "";
}

/**
 * Determines which mode to use on initial load
 * @returns {string} The mode to use
 */
function getInitialMode() {
  MODE_BUTTONS.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.mode === HTML.dataset.mode));
  });

  const fromUrl = new URLSearchParams(window.location.search).get(URL_PARAM);
  const urlMode = normalizeMode(fromUrl);
  if (urlMode) {
    return urlMode;
  }

  try {
    const stored = normalizeMode(localStorage.getItem(STORAGE_KEY));
    if (stored) {
      return stored;
    }
  } catch (_) {
    /* localStorage may be blocked */
  }

  return MODES[0];
}

/**
 * Sets a mode in the DOM and local storage if it can be normalized then it updates MODE_BUTTONS
 * @param {string} rawMode - The mode to set in the DOM
 */
function setMode(rawMode) {
  const mode = normalizeMode(rawMode);
  if (!mode || mode === HTML.dataset.mode) {
    return;
  }

  document.startViewTransition(() => {
    HTML.dataset.mode = mode;
    MODE_BUTTONS.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.mode === mode));
    });

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (_) {
      /* ignore */
    }
  });

}

/**
 * Returns the short timezone abbreviation of the user's timezone or a specific timezone
 * @param {string|undefined} timeZone - The IANA timezone name 
 * @returns {string} The abbreviated timezone
 */
function getTimezoneAbbreviation(timeZone) {
  const {
    timeZoneName
  } = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "short",
    }).formatToParts(new Date()).map(Object.values));

  return timeZoneName || "LOCAL";
}

/**
 * Formats a date and converts it to an optional timezone
 * @param {Date} date - The date to format
 * @param {string|undefined} timeZone - The IANA timezone name
 * @returns {string} The formatted date
 */
function formatTZ(date, timeZone) {
  const {
    year,
    month,
    day,
    hour,
    minute,
    second
  } = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, hourCycle: "h23",
    }).formatToParts(date).map(Object.values));

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

/**
 * Finds the next #reveal-* checkbox that isn't already checked or disabled. There should only be 0 or 1 in the DOM at a time. 
 * @returns {HTMLElement|undefined} The next checkbox to be checked
 */
function getNextCheckbox() {
  return document.querySelector(".reveal-toggle:not(:checked):enabled");
}

/**
 * Takes in an HTMLElement and adds data-time-pst and data-time-local to it with formatted dates
 * @param {HTMLElement} element - The DOM element to add dataset items to
 */
function stampEyebrow(element) {
  const now = new Date();
  const defaultTZ = "America/Los_Angeles";
  element.dataset.timePst = `${formatTZ(now, defaultTZ)} ${getTimezoneAbbreviation(defaultTZ)}`;
  element.dataset.timeLocal = `${formatTZ(now)} ${getTimezoneAbbreviation()}`;
}

/**
 * HOF Enables the given checkbox when the type-cmd animation finishes
 * @param {HTMLElement} unlocks - The checkbox to unlock when the animation finishes
 * @returns {function(HTMLElement)} A function that temporarily applies an onanimated function to an element to unlock the next checkbox
 */
function enableNextCheckboxAfterAnimation(unlocks) {
  return function (element) {
    element.onanimationend = (event) => {
      if (event.animationName === "type-cmd") {
        unlocks.disabled = false;
        element.onanimationend = null;
      }
    };
  }
}

window.addEventListener("keydown", event => {
  if (event.target.closest("a[href], button, input, select, textarea")) {
    return;
  }

  if (MODE_NAV_KEYS.includes(event.key)) {
    switch (event.key) {
      case "ArrowLeft":
        setMode(MODES[0]);
        break;
      case "ArrowRight":
        setMode(MODES[1]);
        break;
    }
  }

  if (TERMINAL_KEYS.includes(event.key)) {
    if (HTML.dataset.mode !== MODES[0]) {
      return;
    }

    event.preventDefault();

    const checkbox = getNextCheckbox();
    if (!checkbox) {
      return;
    }
    const nextCheckbox = checkbox.nextElementSibling;
    const sectionToBeRevealed = document.getElementById(checkbox.id.slice("reveal-".length));
    sectionToBeRevealed.querySelectorAll(".eyebrow").forEach(stampEyebrow);
    sectionToBeRevealed.querySelectorAll(".typed").forEach(enableNextCheckboxAfterAnimation(nextCheckbox));

    checkbox.checked = true;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionToBeRevealed.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
});

MODE_BUTTONS.forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});
document.querySelectorAll(".brand-mark").forEach(stampEyebrow);
document.querySelectorAll("#hero .eyebrow").forEach(stampEyebrow);
setMode(getInitialMode());
