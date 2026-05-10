// Compliment Generator logic (vanilla JS)

// Array of 100 tasteful, mature compliments (suggestive/romantic but non-explicit)
const compliments = [
  "You have a presence that quietly rearranges the room for the better.",
  "There’s something disarmingly captivating about your smile.",
  "You make confidence look effortless and very attractive.",
  "Your conversation is the kind I’d happily get lost in.",
  "You wear intelligence like a favorite coat—stylish and always right.",
  "That look you give when you’re thinking could start a novel.",
  "You have a way of making a simple hello feel like poetry.",
  "Your wit is deliciously sharp—dangerously charming.",
  "You move through the world with quiet magnetism.",
  "There’s an elegance to your mischief that I admire.",
  "You make late nights seem like the best idea.",
  "You have a way of making a simple hello feel like poetry.",
  "You’re the tasteful kind of risky that’s impossible to ignore.",
  "The ease with which you laugh is intoxicating.",
  "You carry warmth with a hint of danger—very compelling.",
  "Your style whispers confidence and says all the right things.",
  "You’re an excellent reason to stay out a little later.",
  "There’s a timelessness to your charm—classic and unforgettable.",
  "Your eyes tell stories I want to read slowly.",
  "You have a subtle bravado that’s oddly comforting.",
  "You make the everyday feel like an indulgence.",
  "You balance sweetness with spice in perfect measure.",
  "Your curiosity is alluring; it pulls people toward you.",
  "You smell like confidence and a great playlist.",
  "You have the kind of laugh that should be trademarked.",
  "There’s a generous, lived-in kindness about you that’s magnetic.",
  "You give compliments that feel like little perfumed notes.",
  "You flirt with life in a way that’s both bold and graceful.",
  "Your hands look like they build thoughtful things.",
  "You’re sophisticated without ever trying too hard.",
  "Your attention to detail is quietly seductive.",
  "You look like someone who keeps good secrets.",
  "You’re the sort of person who improves other people’s stories.",
  "Your smile could be the plot twist in a romantic scene.",
  "There’s an unbeatable chemistry to how you approach the world.",
  "You carry stories in your silence—and they’re intriguing.",
  "You have a subtle confidence that hums like good coffee.",
  "You make grown-up conversations feel playful again.",
  "Your presence lingers like the best kind of perfume.",
  "You have a way of making complexity feel inviting.",
  "People lean in when you speak—and for good reason.",
  "You are quietly audacious, and it suits you.",
  "Your elegance is easy and delightfully persuasive.",
  "You look like someone who appreciates fine things—and good company.",
  "There’s a cleverness to your charm that never goes out of style.",
  "You make intimate moments feel like a well-composed song.",
  "Your taste is impeccable and utterly contagious.",
  "There’s a slow confidence about you that feels like a rare vintage.",
  "You make subtlety feel like an art form.",
  "There’s an adventurous glint in your eye that’s impossible not to notice.",
  "You carry laughter like it’s a favorite accessory.",
  "You have a knack for turning quiet gestures into meaningful ones.",
  "Your presence is a perfectly timed plot device.",
  "You have the sort of charisma that upgrades everything it touches.",
  "You blend warmth and daring and call it a Tuesday.",
  "You look particularly good in plans that begin at sunset.",
  "Your charm arrives fully formed and utterly disarming.",
  "You’re a pleasant bit of mischief wrapped in thoughtfulness.",
  "You make small talk feel dangerously interesting.",
  "You ought to come with a soundtrack—sultry and tasteful.",
  "Your confidence feels like an invitation to better things.",
  "You have a way of making secrets feel safe.",
  "That effortless charisma of yours should be studied by poets.",
  "You look like someone who knows where the fun begins.",
  "You have a calming intensity that’s very attractive.",
  "You are a fine mix of humor, warmth, and a little hush.",
  "There’s a richness to your laugh that suggests interesting stories.",
  "You make routines feel like slow, enjoyable rituals.",
  "You contain the kind of confident stillness that draws people in.",
  "You are as intriguing as the best kind of mystery novel.",
  "You make even the mundane feel like part of a larger, pleasurable plan.",
  "You have a presence that’s both comforting and exhilarating.",
  "There’s a polished edge to your kindness.",
  "Your company feels like a well-made late-night conversation.",
  "You carry warmth that both soothes and sparks curiosity.",
  "The way you listen is an unexpectedly intimate gift.",
  "You are effortlessly memorable in all the right ways.",
  "You make the idea of staying up late seem entirely reasonable.",
  "Your confidence is a gentle dare — and it’s thrilling.",
  "You have a taste for the thoughtful, the bold, and the beautifully simple.",
  "You are a quietly spectacular presence.",
  "You leave a lovely trail of good ideas and better moods wherever you go."
];

// Grab DOM elements
const complimentEl = document.getElementById('compliment');
const btn = document.getElementById('new-btn');
const emojiBadge = document.getElementById('emoji-badge');

// Keep track of last index to avoid immediate repeats
let lastIndex = -1;

// Small set of emoji used for badge and particles
const emojiList = ['✨','🌟','😊','🔥','🌈','🎉','💫','😄','💖','🤩','🍀','🌻'];

// Safe, clean jokes array (50 items). Each item is either a single 'line' or an object {setup, punchline}.
const jokes = [
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything." },
  { setup: "I told my computer I needed a break.", punchline: "It said: 'No problem — I'll go to sleep.'" },
  { setup: "Why do bees have sticky hair?", punchline: "Because they use a honeycomb." },
  { setup: "What do you call fake spaghetti?", punchline: "An impasta." },
  { setup: "Why did the math book look sad?", punchline: "It had too many problems." },
  { setup: "What do you call a factory that makes okay products?", punchline: "A satisfactory." },
  { setup: "Why was the robot so bad at soccer?", punchline: "It kept kicking up sparks." },
  { setup: "I would tell you a construction joke...", punchline: "But I'm still working on it." },
  { setup: "Why did the coffee file a police report?", punchline: "It got mugged." },
  { setup: "What do you call a belt made of watches?", punchline: "A waist of time." },
  { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up." },
  { setup: "What do you call cheese that's not yours?", punchline: "Nacho cheese." },
  { setup: "I asked the librarian if the library had books on paranoia.", punchline: "She whispered: 'They're right behind you.'" },
  { setup: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing." },
  { setup: "How do you organize a space party?", punchline: "You planet." },
  { setup: "Why did the cookie go to the hospital?", punchline: "Because it felt crummy." },
  { setup: "Why was the broom late?", punchline: "It swept in." },
  { setup: "What did one wall say to the other?", punchline: "I'll meet you at the corner." },
  { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out." },
  { setup: "Why was the stadium so cool?", punchline: "It was filled with fans." },
  { setup: "What do you call an alligator in a vest?", punchline: "An investigator." },
  { setup: "Why did the bicycle fall over?", punchline: "It was two-tired." },
  { setup: "What do you call a cow with no legs?", punchline: "Ground beef." },
  { setup: "I told a joke about a roof once.", punchline: "It went over everyone's head." },
  { setup: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one." },
  { setup: "Why was the math teacher late to work?", punchline: "She took the rhombus." },
  { setup: "What do you call a snowman in summer?", punchline: "A puddle." },
  { setup: "Why did the picture go to jail?", punchline: "It was framed." },
  { setup: "How does a penguin build its house?", punchline: "Igloos it together." },
  { setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { setup: "Why did the smartphone go to school?", punchline: "It wanted to be smarter." },
  { setup: "What do you call a dinosaur with an extensive vocabulary?", punchline: "A thesaurus." },
  { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks." },
  { setup: "Why was the calendar popular?", punchline: "It had a lot of dates." },
  { setup: "Why can't your nose be 12 inches long?", punchline: "Because then it'd be a foot." },
  { setup: "Why did the banana go to the doctor?", punchline: "It wasn't peeling well." },
  { setup: "How does the ocean say hello?", punchline: "It waves." },
  { setup: "Why did the computer show up at work late?", punchline: "It had a hard drive." },
  { setup: "Why did the grape stop in the middle of the road?", punchline: "It ran out of juice." },
  { setup: "What did the janitor say when he jumped out of the closet?", punchline: "Supplies!" },
  { setup: "What do you call a pile of cats?", punchline: "A meowntain." },
  { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." },
  { setup: "What did zero say to eight?", punchline: "Nice belt!" },
  { setup: "Why did the scarecrow become a successful musician?", punchline: "Because he had perfect straw-timing." },
  { setup: "Why do seagulls fly over the sea?", punchline: "Because if they flew over the bay they'd be bagels." },
  { setup: "What do you call an elephant that doesn't matter?", punchline: "An irrelephant." },
  { setup: "Why did the tomato sit down at the computer?", punchline: "To ketchup on emails." }
];

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
 * Display a joke: show setup immediately, animate punchline after delay.
 */
function setNewJoke() {
  if (!document.getElementById('joke-setup')) return;
  const idx = Math.floor(Math.random() * jokes.length);
  const j = jokes[idx];

  const setupEl = document.getElementById('joke-setup');
  const punchEl = document.getElementById('joke-punchline');

  // Clear prior
  setupEl.textContent = '';
  punchEl.textContent = '';
  punchEl.classList.remove('revealed');

  // If it's a single-line joke (string), show immediately
  if (typeof j === 'string') {
    setupEl.textContent = j;
    // reveal a playful punchy emoji
    spawnParticles(6);
    return;
  }

  // Show setup
  setupEl.textContent = j.setup || '';

  // After a short delay, reveal punchline with animation
  setTimeout(() => {
    punchEl.textContent = j.punchline || '';
    // trigger CSS reveal
    requestAnimationFrame(() => punchEl.classList.add('revealed'));
    // fun particles for punchline
    spawnParticles(10);
  }, 1600);
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

  // Joke button
  const jokeBtn = document.getElementById('joke-btn');
  if (jokeBtn) jokeBtn.addEventListener('click', setNewJoke);

  // Allow keyboard activation on Enter/Space (button already handles it, but keep for clarity)
  btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setNewCompliment();
    }
  });
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', init);
