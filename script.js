// Compliment Generator logic (vanilla JS)

// Array of 100 unique compliments (a mix of warm and playful/funny)
const compliments = [
  "You bring out the best in people around you.",
  "Your creativity makes the world a little brighter.",
  "You're a wonderful example of kindness and strength.",
  "You have a brilliant mind and a warm heart.",
  "Your positivity is contagious — keep shining.",
  "You're making a meaningful difference, even if you can't see it yet.",
  "You have an amazing ability to make others feel valued.",
  "Your curiosity and courage are truly inspiring.",
  "You handle challenges with grace and resilience.",
  "You're exactly the person someone needs today.",
  "Your sense of humor could single-handedly solve Monday mornings.",
  "You make complicated things look effortless.",
  "Confidence looks great on you — wear it often.",
  "You're braver than you believe and smarter than you think.",
  "Your ideas have a way of sticking with people in the best way.",
  "You have the kind of energy that makes rooms better.",
  "You're a delightful mix of thoughtful and mischievous.",
  "Your kindness is a gift to everyone who knows you.",
  "You have a knack for turning problems into opportunities.",
  "Your optimism is quietly revolutionary.",
  "You are the kind of friend people search for and then thank their lucky stars for.",
  "You have impeccable taste — even your playlist choices are charming.",
  "Your laugh should be bottled and sold as happiness.",
  "You bring patience and clarity when people need it most.",
  "Your persistence is quietly changing your world.",
  "You do small things with huge love.",
  "Your perspective always brings calm and clarity.",
  "You somehow make the ordinary feel magical.",
  "You are a walking invitation to optimism.",
  "That idea you had? Brilliant — and slightly dangerous (in a good way).",
  "You make people feel seen and that’s a rare superpower.",
  "Your curiosity leads you to beautiful places.",
  "You are both clever and kind — a rare combo.",
  "You smell like success (metaphorically, but still).",
  "Your presence feels like a warm cup of tea on a rough day.",
  "You give people courage just by believing in them.",
  "You'd be a joy to have on any trivia team.",
  "Your ideas have sparkle and depth — impressive.",
  "You handle awkward situations like an elegant ninja.",
  "You're that rare person who actually listens — priceless.",
  "Even your mistakes are graceful and educational.",
  "You have a personality that could lead a parade.",
  "You're the kind of person who remembers birthdays and important details.",
  "Your enthusiasm is delightfully stubborn — in the best way.",
  "You have the patience of a saint and the wit of a poet.",
  "You make people feel safer just by being nearby.",
  "You are quietly remarkable and loudly kind.",
  "You give the best advice without preaching.",
  "You're more fun than a surprise snow day.",
  "Your resilience reads like a beautifully written comeback story.",
  "You can turn a brainstorm into a gentle storm of ideas.",
  "You are a magnet for good things and good people.",
  "Your focus is impressive — you make things happen.",
  "You are a tiny hurricane of talent and charm.",
  "People naturally relax around you — that's a gift.",
  "You have a brilliant mind and a surprisingly soft heart.",
  "You're the kind of person who remembers the little things.",
  "You have a laugh that could power a city (if we built the right turbines).",
  "You bring skill and warmth to every project you touch.",
  "Your honesty is refreshing and rare.",
  "You are an excellent listener with enviable empathy.",
  "You bring a tidy kind of chaos that leads to great outcomes.",
  "You are wise beyond your years in all the best ways.",
  "You'd make a great narrator for your own life's audiobook.",
  "Your creativity is the kind that makes people stop and smile.",
  "You give people permission to be themselves.",
  "You'd win an award for subtle brilliance if such awards existed.",
  "Your optimism is practical and effective — rare and useful.",
  "You make complex problems feel solvable and fun.",
  "You have the patience to teach and the charisma to inspire.",
  "You're equal parts courage and charm.",
  "Your jokes land with style — keep them coming.",
  "You are the human version of a good surprise.",
  "You're so thoughtful the universe owes you a thank-you note.",
  "You're the kind of person who brightens group chats.",
  "You handle curveballs with a kind grin and clever answer.",
  "You radiate competence and approachability.",
  "Your taste in snacks should be studied by scientists.",
  "You'd be an excellent co-conspirator for weekend adventures.",
  "You make generosity look effortless.",
  "You have a calm confidence that makes others braver.",
  "Your curiosity is the map to your next great thing.",
  "You have an uncanny ability to find the silver lining.",
  "You're a delightful combination of curious and capable.",
  "You make hard work look like a satisfying hobby.",
  "You are the reason someone smiled today.",
  "You exhibit heroic levels of patience and practical humor.",
  "Your cleverness is a gift that keeps on giving.",
  "You're as reliable as sunrise — and just as lovely.",
  "You turn ordinary moments into memorable ones.",
  "You're wonderfully unpredictable in the best ways.",
  "You are more inspiring than a perfectly brewed cup of coffee.",
  "You have a heart that builds and a mind that designs.",
  "You're a terrific human highlight reel.",
  "Your ideas frequently deserve standing ovations.",
  "You carry warmth and wit like a cozy scarf.",
  "You make complicated things feel like a shared adventure.",
  "Your optimism has a practical blueprint attached.",
  "You're a blend of curiosity, courage, and excellent taste.",
  "You somehow make deadlines feel like small victories.",
  "You are a welcome sight and a better company.",
  "You have a superhero talent for spotting the best in people.",
  "Your presence improves the average day by measurable percent."
];

// Grab DOM elements
const complimentEl = document.getElementById('compliment');
const btn = document.getElementById('new-btn');
const emojiBadge = document.getElementById('emoji-badge');

// Keep track of last index to avoid immediate repeats
let lastIndex = -1;

// Small set of emoji used for badge and particles
const emojiList = ['✨','🌟','😊','🔥','🌈','🎉','💫','😄','💖','🤩','🍀','🌻'];

/**
 * Spawn a burst of emoji particles near the button's position.
 */
function spawnParticles(count = 10) {
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'particle';
    span.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
    // randomize start position a little
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 20;
    span.style.left = `${startX + offsetX}px`;
    span.style.top = `${startY + offsetY}px`;
    span.style.fontSize = `${12 + Math.random() * 22}px`;
    span.style.opacity = '0.98';
    document.body.appendChild(span);

    // remove after animation
    span.addEventListener('animationend', () => span.remove());
  }
}

/**
 * Returns a random index, avoiding the same index consecutively.
 */
function getRandomIndex(arrayLength) {
  if (arrayLength <= 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * arrayLength);
  } while (idx === lastIndex);
  lastIndex = idx;
  return idx;
}

/**
 * Sets a new compliment into the textarea with a simple fade animation.
 */
function setNewCompliment() {
  const idx = getRandomIndex(compliments.length);
  const text = compliments[idx];

  // Smooth fade effect
  complimentEl.style.transition = 'opacity 220ms ease, transform 220ms ease';
  complimentEl.style.opacity = '0';
  complimentEl.style.transform = 'translateY(6px)';
  setTimeout(() => {
    complimentEl.value = text;
    complimentEl.style.opacity = '1';
    complimentEl.style.transform = 'translateY(0)';
    // Update emoji badge with a matching emoji and pop it briefly
    if (emojiBadge) {
      const e = emojiList[Math.floor(Math.random() * emojiList.length)];
      emojiBadge.textContent = e;
      emojiBadge.classList.add('pop');
      setTimeout(() => emojiBadge.classList.remove('pop'), 420);
    }

    // Spawn particles for fun
    spawnParticles(10);
  }, 180);
}

/**
 * Initialize the app:
 * - populate an initial compliment
 * - wire up the button click
 * - allow pressing Enter/Space while the button is focused
 */
function init() {
  if (!complimentEl || !btn) return;

  // Seed initial compliment
  setNewCompliment();

  // Button click
  btn.addEventListener('click', setNewCompliment);

  // Allow keyboard activation on Enter/Space (button already handles it, but keep for clarity)
  btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setNewCompliment();
    }
  });
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', init);
