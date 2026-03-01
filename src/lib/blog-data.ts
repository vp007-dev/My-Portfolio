export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverColor: string; // HSL accent for the post card
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-lifelink-emergency-sos",
    title: "Building LifeLink — An Emergency SOS Platform with Real-Time Location",
    excerpt: "How I designed and built a one-tap distress signal system that shares live location with nearby responders using React and TypeScript.",
    content: `
## The Problem

In emergencies, every second counts. Most people fumble with their phones trying to call for help. I wanted to build something that works with a single tap.

## The Architecture

LifeLink is built with React and TypeScript on the frontend, with a real-time backend handling location streaming and responder matching.

### Key Technical Decisions

1. **WebSocket for Live Location** — HTTP polling wasn't fast enough. I needed sub-second updates for responder tracking.
2. **Geofencing Algorithm** — Finding "nearby" responders required implementing a haversine distance calculation with spatial indexing.
3. **Progressive Web App** — The app needed to work offline and launch instantly. Service workers handle caching and background sync.

### The One-Tap Flow

\`\`\`
User taps SOS → GPS acquired → Emergency type selected → 
Nearest responders notified → Live location shared → 
Responder en route → ETA displayed
\`\`\`

## Challenges

The hardest part was battery optimization. Continuous GPS polling drains batteries fast — exactly when you need your phone most. I implemented adaptive polling that increases frequency only when a responder is actively tracking.

## What I Learned

Building for emergencies forces you to think about edge cases obsessively. What if there's no internet? What if GPS is inaccurate? What if no responders are nearby? Every failure mode needs a graceful fallback.

## Impact

LifeLink earned stars on GitHub and validated the idea that emergency tech doesn't need to be complicated — it needs to be reliable.
    `,
    date: "2026-02-15",
    readTime: "6 min",
    category: "Full Stack",
    tags: ["React", "TypeScript", "WebSocket", "PWA"],
    coverColor: "225 76% 52%",
  },
  {
    slug: "nasa-space-apps-challenge-journey",
    title: "My NASA Space Apps Challenge Experience — Code Meets Cosmos",
    excerpt: "Participating in the world's largest hackathon taught me more about collaboration and rapid prototyping than any bootcamp ever could.",
    content: `
## Why NASA Space Apps?

I've always been fascinated by space. When I discovered NASA runs an annual hackathon open to anyone, I knew I had to participate. The challenge: solve real NASA problems using open data.

## Our Project: Symphony of Stars

We built an immersive web experience that sonifies astronomical data — turning star brightness, distance, and spectral class into music. Each constellation becomes a unique melody.

### The Tech Stack

- **React + Three.js** for 3D star field visualization
- **Web Audio API** for real-time sound synthesis
- **NASA Open APIs** for stellar catalogs
- **Framer Motion** for UI transitions

### Turning Data Into Sound

The core algorithm maps star properties to musical parameters:

\`\`\`
Brightness → Volume (louder = brighter)
Spectral Class → Instrument (O-type = strings, M-type = bass)
Distance → Reverb (farther = more spacious)
Right Ascension → Stereo panning
\`\`\`

## The 48-Hour Sprint

Hackathons compress months of learning into a weekend. We went from "cool idea" to working prototype in 48 hours. Sleep was optional, coffee was mandatory.

## Takeaways

1. **Constraints breed creativity** — Limited time forced us to cut scope ruthlessly
2. **Interdisciplinary thinking matters** — Combining astronomy, music theory, and code created something none of us could build alone
3. **Ship imperfect** — A working demo beats a perfect plan every time

Space isn't just for astronauts. It's for anyone curious enough to look up and code.
    `,
    date: "2026-01-28",
    readTime: "5 min",
    category: "Space & Research",
    tags: ["NASA", "Three.js", "Web Audio", "Hackathon"],
    coverColor: "260 70% 55%",
  },
  {
    slug: "ai-iot-smart-waste-beacon",
    title: "BEACON — Using AI & IoT to Revolutionize Waste Management",
    excerpt: "Building a smart waste management system that combines computer vision, IoT sensors, and a React dashboard to make cities cleaner.",
    content: `
## The Urban Waste Crisis

Indian cities generate 62 million tonnes of waste annually. Most of it isn't sorted, tracked, or managed efficiently. BEACON was born from frustration with overflowing bins and no data.

## System Architecture

BEACON has three layers:

### 1. IoT Sensor Network
- **Ultrasonic sensors** measure bin fill levels
- **Weight sensors** detect waste type
- **ESP32 microcontrollers** transmit data via MQTT

### 2. AI Classification
- **Computer Vision** model trained on waste images
- Classifies into: recyclable, organic, hazardous, general
- Runs inference on edge devices for real-time sorting

### 3. Dashboard & Analytics
- **React + TypeScript** frontend
- Real-time bin status map
- Route optimization for collection trucks
- Historical analytics and predictions

## The ML Pipeline

Training the waste classifier was the biggest challenge. I collected 15,000+ images, augmented the dataset, and fine-tuned a MobileNet model for edge deployment.

\`\`\`
Accuracy: 94.2% on test set
Inference time: <100ms on ESP32
Model size: 2.3MB (quantized)
\`\`\`

## Real-World Testing

We deployed 12 prototype bins on campus. Within a month, collection efficiency improved by 35% and recyclable recovery increased by 28%.

## What's Next

The goal is to scale BEACON to city-level deployment. Smart cities need smart waste — and the tech is ready.
    `,
    date: "2026-01-10",
    readTime: "7 min",
    category: "AI & IoT",
    tags: ["Python", "IoT", "Computer Vision", "React"],
    coverColor: "160 60% 45%",
  },
  {
    slug: "game-dev-phaser-asteroids",
    title: "Making Browser Games with PhaserJS — Lessons from Aestroids & SpaceBall",
    excerpt: "What I learned building arcade-style browser games, from physics engines to sprite management and the joy of shipping fun experiences.",
    content: `
## Why Browser Games?

There's something magical about sharing a URL and someone instantly playing your game. No downloads, no installs — just click and play. PhaserJS makes this possible with surprisingly little code.

## Aestroids: My First Real Game

A classic asteroids clone, but building it taught me fundamentals that apply everywhere:

### Physics That Feel Right

Getting ship movement to feel "good" took 30+ iterations. The secret is subtle details:
- **Momentum decay** — Ships don't stop instantly, they drift
- **Screen wrapping** — Fly off one edge, appear on the other
- **Particle trails** — Thrust creates tiny particles that sell the motion

### The Game Loop

\`\`\`javascript
update(time, delta) {
  this.handleInput();
  this.updatePhysics(delta);
  this.checkCollisions();
  this.spawnAsteroids();
  this.updateParticles();
  this.updateUI();
}
\`\`\`

## SpaceBall: Going Further

SpaceBall added multiplayer physics — balls bouncing, gravity wells, and score mechanics. The challenge shifted from "make it work" to "make it fair."

### Collision Detection Deep Dive

Circle-circle collisions are elegant:
\`\`\`
distance = sqrt((x2-x1)² + (y2-y1)²)
collision = distance < (radius1 + radius2)
\`\`\`

But making collisions *feel* satisfying requires screen shake, sound effects, and a brief pause (hit-stop) that your brain registers as impact.

## Lessons for Any Developer

1. **Start with a game loop** — It's just requestAnimationFrame with state management
2. **Juice it** — Small effects (particles, screenshake, sounds) make everything 10x better
3. **Ship on itch.io** — Having real players find bugs you never imagined
4. **Games teach systems thinking** — Every feature interacts with every other feature

Games aren't just entertainment — they're the most demanding real-time applications you can build in a browser.
    `,
    date: "2025-12-20",
    readTime: "6 min",
    category: "Game Dev",
    tags: ["PhaserJS", "JavaScript", "Game Design", "WebGL"],
    coverColor: "340 82% 55%",
  },
  {
    slug: "contributing-to-simple-icons",
    title: "My First Open Source Contribution — Simple Icons & the Power of Community",
    excerpt: "How submitting a single SVG icon to Simple Icons taught me about open source workflows, code reviews, and building for millions.",
    content: `
## The Intimidation Factor

Open source felt unreachable. Massive codebases, strict contribution guidelines, reviewers who've been coding longer than I've been alive. But everyone starts somewhere.

## Finding Simple Icons

Simple Icons is a collection of 3000+ SVG brand icons used by millions of developers. It's the perfect first contribution:
- Clear contribution guidelines
- Atomic changes (one icon = one PR)
- Helpful maintainers
- Immediate visual impact

## The Process

### 1. Research the Brand
Every icon needs verification — official brand guidelines, correct colors, proper attribution.

### 2. Create the SVG
Icons must be exactly 24x24px, single path, optimized. I used Figma to trace the logo and SVGO to optimize:

\`\`\`
Before: 2.4KB (messy paths, redundant attributes)
After: 0.3KB (single optimized path)
\`\`\`

### 3. Submit the PR
Following the template: icon SVG, brand color hex, source URL, and a clean commit message.

### 4. Code Review
The maintainer asked for two changes:
- Path optimization (removing unnecessary curve handles)
- Color accuracy (my hex was slightly off)

Two rounds of feedback, and it was merged. 🎉

## What Open Source Taught Me

1. **Read the docs first** — 90% of rejected PRs ignore contribution guidelines
2. **Small PRs get reviewed faster** — Don't try to change the world in one commit
3. **Feedback isn't personal** — Code review makes everyone better
4. **Your code serves millions** — Simple Icons gets 50M+ npm downloads/month

## Beyond the First PR

That single contribution opened doors. I started reviewing others' PRs, suggesting improvements, and understanding how large-scale projects maintain quality at scale.

Open source isn't about being the best coder. It's about showing up, being respectful, and making things slightly better than you found them.
    `,
    date: "2025-11-15",
    readTime: "5 min",
    category: "Open Source",
    tags: ["GitHub", "SVG", "Community", "Simple Icons"],
    coverColor: "45 95% 55%",
  },
  {
    slug: "low-level-programming-nasm-sdl2",
    title: "Going Low-Level — Why I Code in NASM Assembly and SDL2 in 2026",
    excerpt: "In an age of AI-generated code, understanding what happens beneath the abstractions makes you a fundamentally better engineer.",
    content: `
## Against the Grain

Everyone's learning Python and JavaScript. I'm writing x86 assembly. Not because I'm contrarian — because understanding the machine changes how you think about *every* language.

## What NASM Teaches You

### Memory Is Everything

In assembly, there's no garbage collector. No automatic memory management. You allocate, you track, you free. Every byte matters.

\`\`\`nasm
section .data
    msg db "Hello, bare metal", 0
    
section .text
    global _start
_start:
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    mov rsi, msg        ; buffer
    mov rdx, 17         ; length
    syscall
\`\`\`

### The CPU Thinks in Patterns

Understanding CPU pipelines, cache lines, and branch prediction makes you write better high-level code too. When you know *why* arrays are faster than linked lists (cache locality), data structure choices become intuitive.

## SDL2: Graphics Without the Magic

SDL2 gives you a framebuffer and input events. That's it. No scene graph, no UI framework, no hand-holding. You draw every pixel.

Building a renderer from scratch teaches you:
- **Double buffering** — Why screens don't flicker
- **Dirty rectangles** — Only redraw what changed
- **Fixed timestep** — Physics that don't break at different framerates

## Why This Matters for Web Dev

Sounds crazy, but my React code got better after writing assembly:
- I think about **bundle size** because I've counted bytes
- I understand **event loops** because I've built them
- I respect **abstractions** because I know what they hide

## The Joy of Bare Metal

There's a unique satisfaction in making a CPU do exactly what you want, instruction by instruction. No framework opinions, no magic — just you and the silicon.

Modern tools are incredible. But knowing what's underneath makes you dangerous in the best way.
    `,
    date: "2025-10-05",
    readTime: "7 min",
    category: "Systems",
    tags: ["NASM", "Assembly", "SDL2", "C", "Low-Level"],
    coverColor: "220 40% 25%",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
