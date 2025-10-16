const quizData = {
  easy: [
    {
      id: 1,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correct: 1,
      explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined."
    },
    {
      id: 2,
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Tiger", "Elephant", "Lion", "Leopard"],
      correct: 2,
      explanation: "Lions are called the 'King of the Jungle' despite actually living in savannas, not jungles."
    },
    {
      id: 3,
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
      id: 4,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correct: 0,
      explanation: "H2O represents water - two hydrogen atoms bonded to one oxygen atom."
    },
    {
      id: 5,
      question: "Which color is created by mixing red and yellow?",
      options: ["Purple", "Green", "Orange", "Pink"],
      correct: 2,
      explanation: "Red and yellow combine to create orange, a secondary color on the color wheel."
    }
  ],
  medium: [
    {
      id: 1,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correct: 1,
      explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP, the cell's main energy currency."
    },
    {
      id: 2,
      question: "Which programming language was created by Guido van Rossum?",
      options: ["JavaScript", "Java", "Python", "C++"],
      correct: 2,
      explanation: "Python was created by Guido van Rossum and first released in 1991, named after Monty Python's Flying Circus."
    },
    {
      id: 3,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correct: 2,
      explanation: "Canberra is the capital of Australia, chosen as a compromise between Sydney and Melbourne."
    },
    {
      id: 4,
      question: "Which element has the atomic number 79?",
      options: ["Silver", "Gold", "Platinum", "Copper"],
      correct: 1,
      explanation: "Gold has the atomic number 79 and the chemical symbol Au (from the Latin 'aurum')."
    },
    {
      id: 5,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1,
      explanation: "World War II ended in 1945 with the surrender of Japan on September 2, 1945."
    },
    {
      id: 6,
      question: "What is the speed of light in vacuum?",
      options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
      correct: 0,
      explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second, a fundamental constant of nature."
    },
    {
      id: 7,
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correct: 1,
      explanation: "Saturn has the most moons with 146 confirmed natural satellites as of 2024."
    },
    {
      id: 8,
      question: "What does 'HTTP' stand for?",
      options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "HyperText Translation Protocol", "High Transfer Text Protocol"],
      correct: 0,
      explanation: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the World Wide Web."
    }
  ],
  hard: [
    {
      id: 1,
      question: "What is the time complexity of the quicksort algorithm in the average case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correct: 1,
      explanation: "Quicksort has an average time complexity of O(n log n), though worst-case is O(n²)."
    },
    {
      id: 2,
      question: "Which mathematician proved that there are infinitely many prime numbers?",
      options: ["Pythagoras", "Euclid", "Archimedes", "Gauss"],
      correct: 1,
      explanation: "Euclid proved the infinitude of primes around 300 BCE using his famous proof by contradiction."
    },
    {
      id: 3,
      question: "What is the Heisenberg Uncertainty Principle?",
      options: ["Energy cannot be created or destroyed", "The position and momentum of a particle cannot both be precisely determined", "Light behaves as both wave and particle", "Time is relative to the observer"],
      correct: 1,
      explanation: "The Heisenberg Uncertainty Principle states that the more precisely we know a particle's position, the less precisely we can know its momentum, and vice versa."
    },
    {
      id: 4,
      question: "Which Byzantine Emperor reconquered much of the former Western Roman Empire?",
      options: ["Constantine I", "Justinian I", "Basil II", "Leo III"],
      correct: 1,
      explanation: "Justinian I (527-565 CE) reconquered much of the Western Roman Empire, including North Africa, Italy, and parts of Spain."
    },
    {
      id: 5,
      question: "What is the derivative of ln(x) with respect to x?",
      options: ["x", "1/x", "ln(x)", "e^x"],
      correct: 1,
      explanation: "The derivative of the natural logarithm ln(x) is 1/x, a fundamental result in calculus."
    },
    {
      id: 6,
      question: "Which design pattern ensures a class has only one instance?",
      options: ["Factory", "Observer", "Singleton", "Strategy"],
      correct: 2,
      explanation: "The Singleton pattern ensures that a class has only one instance and provides global access to it."
    },
    {
      id: 7,
      question: "What is the half-life of Carbon-14?",
      options: ["5,730 years", "1,600 years", "12,000 years", "50,000 years"],
      correct: 0,
      explanation: "Carbon-14 has a half-life of approximately 5,730 years, making it useful for radiocarbon dating."
    },
    {
      id: 8,
      question: "Which economic theory suggests that government spending can stimulate economic growth during recessions?",
      options: ["Monetarism", "Supply-side economics", "Keynesian economics", "Austrian economics"],
      correct: 2,
      explanation: "Keynesian economics, developed by John Maynard Keynes, advocates for government intervention during economic downturns."
    },
    {
      id: 9,
      question: "What is the name of the process by which plants convert light energy into chemical energy?",
      options: ["Cellular respiration", "Photosynthesis", "Chemosynthesis", "Glycolysis"],
      correct: 1,
      explanation: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen."
    },
    {
      id: 10,
      question: "Which philosopher wrote 'Critique of Pure Reason'?",
      options: ["Immanuel Kant", "Georg Hegel", "Friedrich Nietzsche", "Arthur Schopenhauer"],
      correct: 0,
      explanation: "Immanuel Kant wrote 'Critique of Pure Reason' (1781), a foundational work in modern philosophy."
    }
  ]
};

// Quiz State
let currentDifficulty = null;
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizCompleted = false;
let startTime = null;
let endTime = null;
let userStats = JSON.parse(localStorage.getItem('knowledgeForgeStats')) || {
  totalQuizzes: 0,
  totalCorrect: 0,
  totalQuestions: 0,
  bestScores: { easy: 0, medium: 0, hard: 0 },
  badges: []
};

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const progressContainer = document.getElementById('progressContainer');
const quizCard = document.getElementById('quizCard');
const startButton = document.getElementById('startButton');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextButton = document.getElementById('nextButton');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const difficultyDisplay = document.getElementById('difficultyDisplay');
const questionDifficulty = document.getElementById('questionDifficulty');

// Initialize App
function initApp() {
  setupDifficultySelection();
  setupEventListeners();
}

// Setup Difficulty Selection
function setupDifficultySelection() {
  const difficultyCards = document.querySelectorAll('.difficulty-card');

  difficultyCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove previous selections
      difficultyCards.forEach(c => c.classList.remove('selected'));

      // Select current card
      card.classList.add('selected');
      currentDifficulty = card.dataset.difficulty;

      // Enable start button
      startButton.disabled = false;
    });
  });
}

// Setup Event Listeners
function setupEventListeners() {
  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', nextQuestion);
}

// Start Quiz
function startQuiz() {
  if (!currentDifficulty) return;

  // Hide welcome screen and show quiz
  welcomeScreen.style.display = 'none';
  progressContainer.style.display = 'block';
  quizCard.style.display = 'block';

  // Initialize quiz state
  currentQuestions = [...quizData[currentDifficulty]];
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  quizCompleted = false;
  startTime = new Date();

  // Update difficulty display
  difficultyDisplay.textContent = `${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)} Mode`;
  questionDifficulty.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1);
  questionDifficulty.className = `difficulty-badge ${currentDifficulty}`;

  loadQuestion();
  updateProgress();
}

// Load Current Question
function loadQuestion() {
  if (currentQuestion >= currentQuestions.length) {
    showResults();
    return;
  }

  const question = currentQuestions[currentQuestion];
  selectedAnswer = null;

  // Animate card transition
  quizCard.style.animation = 'slideUp 0.6s ease-out';

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  questionText.textContent = question.question;

  // Clear previous answers
  answersContainer.innerHTML = '';

  // Create answer options
  question.options.forEach((option, index) => {
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer-option';
    answerDiv.textContent = option;
    answerDiv.addEventListener('click', () => selectAnswer(index, answerDiv));
    answersContainer.appendChild(answerDiv);
  });

  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === currentQuestions.length - 1 ? 'Show Results' : 'Next Question';
}

// Select Answer
function selectAnswer(answerIndex, answerElement) {
  if (selectedAnswer !== null) return;

  selectedAnswer = answerIndex;
  const question = currentQuestions[currentQuestion];
  const isCorrect = answerIndex === question.correct;

  // Remove previous selections
  document.querySelectorAll('.answer-option').forEach(option => {
    option.classList.remove('selected');
  });

  // Mark selected answer
  answerElement.classList.add('selected');

  // Show correct/incorrect feedback after a short delay
  setTimeout(() => {
    document.querySelectorAll('.answer-option').forEach((option, index) => {
      if (index === question.correct) {
        option.classList.add('correct');
      } else if (index === answerIndex && !isCorrect) {
        option.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      score++;
      createFloatingText('Correct!', '#00ff88');
    } else {
      createFloatingText('Incorrect!', '#ff00ff');
    }

    // Show explanation
    showExplanation(question.explanation);

    nextButton.disabled = false;
  }, 300);
}

// Show Explanation
function showExplanation(explanation) {
  const explanationDiv = document.createElement('div');
  explanationDiv.style.cssText = `
                background: rgba(0, 245, 255, 0.1);
                border-left: 4px solid #00f5ff;
                padding: 18px;
                margin-top: 25px;
                border-radius: 12px;
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.9);
                animation: slideDown 0.5s ease-out;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(0, 245, 255, 0.2);
            `;
  explanationDiv.innerHTML = `<strong style="color: #00f5ff;">Explanation:</strong> ${explanation}`;

  // Remove existing explanation
  const existingExplanation = answersContainer.querySelector('.explanation');
  if (existingExplanation) {
    existingExplanation.remove();
  }

  explanationDiv.className = 'explanation';
  answersContainer.appendChild(explanationDiv);
}

// Create Floating Text Effect
function createFloatingText(text, color) {
  const floatingText = document.createElement('div');
  floatingText.textContent = text;
  floatingText.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${color};
                font-size: 1.5rem;
                font-weight: 700;
                pointer-events: none;
                z-index: 1000;
                animation: floatUp 2s ease-out forwards;
            `;

  document.body.appendChild(floatingText);

  // Add floating animation
  const style = document.createElement('style');
  style.textContent = `
                @keyframes floatUp {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
                    100% { opacity: 0; transform: translate(-50%, -80px) scale(1); }
                }
            `;
  document.head.appendChild(style);

  setTimeout(() => {
    if (document.body.contains(floatingText)) {
      document.body.removeChild(floatingText);
    }
    if (document.head.contains(style)) {
      document.head.removeChild(style);
    }
  }, 2000);
}

// Next Question
function nextQuestion() {
  currentQuestion++;
  updateProgress();
  loadQuestion();
}

// Update Progress
function updateProgress() {
  const progress = (currentQuestion / currentQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Question ${currentQuestion + 1} of ${currentQuestions.length}`;
}

// Show Results
function showResults() {
  quizCompleted = true;
  endTime = new Date();
  const timeTaken = Math.round((endTime - startTime) / 1000);
  const percentage = Math.round((score / currentQuestions.length) * 100);

  // Update user stats
  updateUserStats(percentage, timeTaken);

  // Hide progress container
  progressContainer.style.display = 'none';

  // Create results content
  quizCard.innerHTML = `
                <div class="results-container">
                    <div class="score-circle">
                        <div>
                            <div class="score-text">${percentage}%</div>
                            <div class="score-label">Score</div>
                        </div>
                    </div>
                    <h2 class="results-message">${getResultMessage(percentage)}</h2>
                    <p class="results-details">You got ${score} out of ${currentQuestions.length} questions correct!</p>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value">${timeTaken}s</div>
                            <div class="stat-label">Time Taken</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${Math.round(timeTaken / currentQuestions.length)}s</div>
                            <div class="stat-label">Avg per Question</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${userStats.totalQuizzes}</div>
                            <div class="stat-label">Total Quizzes</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${Math.round((userStats.totalCorrect / userStats.totalQuestions) * 100) || 0}%</div>
                            <div class="stat-label">Overall Accuracy</div>
                        </div>
                    </div>

                    ${getBadgeSection(percentage)}

                    <div style="margin-top: 20px;">
                        <button class="replay-button" onclick="restartQuiz()">🔄 Try Again</button>
                        <button class="replay-button" onclick="goHome()" style="margin-left: 10px;">🏠 Home</button>
                    </div>
                </div>
            `;

  // Add confetti effect for good scores
  if (percentage >= 70) {
    createConfetti();
  }
}

// Update User Stats
function updateUserStats(percentage, timeTaken) {
  userStats.totalQuizzes++;
  userStats.totalCorrect += score;
  userStats.totalQuestions += currentQuestions.length;

  // Update best score for difficulty
  if (percentage > userStats.bestScores[currentDifficulty]) {
    userStats.bestScores[currentDifficulty] = percentage;
  }

  // Award badges
  const badge = getBadgeForScore(percentage, currentDifficulty);
  if (badge && !userStats.badges.some(b => b.id === badge.id)) {
    userStats.badges.push({
      ...badge,
      earnedDate: new Date().toISOString(),
      difficulty: currentDifficulty,
      score: percentage
    });
  }

  // Save to localStorage
  localStorage.setItem('knowledgeForgeStats', JSON.stringify(userStats));
}

// Get Badge for Score
function getBadgeForScore(percentage, difficulty) {
  const badges = {
    easy: [
      { id: 'easy_bronze', name: 'Bronze Explorer', threshold: 60, color: '#cd7f32', icon: 'B' },
      { id: 'easy_silver', name: 'Silver Seeker', threshold: 80, color: '#c0c0c0', icon: 'S' },
      { id: 'easy_gold', name: 'Gold Discoverer', threshold: 100, color: '#ffd700', icon: 'G' }
    ],
    medium: [
      { id: 'medium_bronze', name: 'Bronze Scholar', threshold: 60, color: '#cd7f32', icon: 'B' },
      { id: 'medium_silver', name: 'Silver Intellect', threshold: 80, color: '#c0c0c0', icon: 'S' },
      { id: 'medium_gold', name: 'Gold Genius', threshold: 100, color: '#ffd700', icon: 'G' }
    ],
    hard: [
      { id: 'hard_bronze', name: 'Bronze Expert', threshold: 60, color: '#cd7f32', icon: 'B' },
      { id: 'hard_silver', name: 'Silver Master', threshold: 80, color: '#c0c0c0', icon: 'S' },
      { id: 'hard_gold', name: 'Gold Legend', threshold: 100, color: '#ffd700', icon: 'G' }
    ]
  };

  const difficultyBadges = badges[difficulty];
  for (let i = difficultyBadges.length - 1; i >= 0; i--) {
    if (percentage >= difficultyBadges[i].threshold) {
      return difficultyBadges[i];
    }
  }
  return null;
}

// Get Badge Section HTML
function getBadgeSection(percentage) {
  const badge = getBadgeForScore(percentage, currentDifficulty);

  if (!badge) {
    return `
                    <div class="badge-section">
                        <h3 class="badge-title">Keep Trying!</h3>
                        <p>Score 60% or higher to earn your first badge!</p>
                    </div>
                `;
  }

  return `
                <div class="badge-section">
                    <h3 class="badge-title">Congratulations! You earned a badge!</h3>
                    <div class="badge-preview">
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <defs>
                                <radialGradient id="badgeGradient" cx="50%" cy="30%">
                                    <stop offset="0%" style="stop-color:${badge.color};stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:${badge.color}88;stop-opacity:1" />
                                </radialGradient>
                            </defs>
                            <circle cx="100" cy="100" r="90" fill="url(#badgeGradient)" stroke="${badge.color}" stroke-width="4"/>
                            <text x="100" y="85" text-anchor="middle" font-size="40" fill="white">${badge.icon}</text>
                            <text x="100" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white">${badge.name}</text>
                            <text x="100" y="145" text-anchor="middle" font-size="12" fill="white">${currentDifficulty.toUpperCase()} • ${percentage}%</text>
                        </svg>
                    </div>
                    <input type="text" class="name-input" id="badgeName" placeholder="Enter your name for the certificate" maxlength="30">
                    <div>
                        <button class="download-button" onclick="downloadBadge('${badge.id}', '${badge.name}', '${badge.icon}', '${badge.color}', ${percentage})"><span>📥 Download Certificate</span></button>
                    </div>
                </div>
            `;
}

// Download Badge
function downloadBadge(badgeId, badgeName, badgeIcon, badgeColor, percentage) {
  try {
    const userName = document.getElementById('badgeName').value.trim() || 'Quiz Champion';

    // Create canvas for badge
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Ensure canvas is ready
    if (!ctx) {
      throw new Error('Canvas context not available');
    }

    // Dark gradient background
    const bgGradient = ctx.createRadialGradient(400, 400, 0, 400, 400, 400);
    bgGradient.addColorStop(0, '#1a202c');
    bgGradient.addColorStop(0.5, '#2d3748');
    bgGradient.addColorStop(1, '#0f1419');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 800, 800);

    // Outer glow effect
    const outerGlow = ctx.createRadialGradient(400, 400, 250, 400, 400, 350);
    outerGlow.addColorStop(0, 'transparent');
    outerGlow.addColorStop(0.7, badgeColor + '20');
    outerGlow.addColorStop(1, badgeColor + '40');
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(400, 400, 350, 0, 2 * Math.PI);
    ctx.fill();

    // Main badge circle
    const badgeGradient = ctx.createRadialGradient(380, 350, 0, 400, 400, 280);
    badgeGradient.addColorStop(0, badgeColor);
    badgeGradient.addColorStop(0.6, badgeColor + 'DD');
    badgeGradient.addColorStop(1, badgeColor + '99');
    ctx.fillStyle = badgeGradient;
    ctx.beginPath();
    ctx.arc(400, 400, 280, 0, 2 * Math.PI);
    ctx.fill();

    // Inner highlight circle
    const highlight = ctx.createRadialGradient(370, 330, 0, 400, 400, 250);
    highlight.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
    highlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    highlight.addColorStop(1, 'transparent');
    ctx.fillStyle = highlight;
    ctx.beginPath();
    ctx.arc(400, 400, 250, 0, 2 * Math.PI);
    ctx.fill();

    // Multiple border rings
    ctx.strokeStyle = badgeColor;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(400, 400, 280, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(400, 400, 270, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = badgeColor + 'AA';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(400, 400, 290, 0, 2 * Math.PI);
    ctx.stroke();

    // Set text properties
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Badge icon with enhanced shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = 'white';
    ctx.font = 'bold 120px Arial, sans-serif';
    ctx.fillText(badgeIcon, 400, 350);

    // Clear shadow for other text
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Badge name with outline
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.lineWidth = 4;
    ctx.strokeText(badgeName, 400, 430);
    ctx.fillStyle = 'white';
    ctx.fillText(badgeName, 400, 430);

    // User name
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.lineWidth = 2;
    ctx.strokeText(userName, 400, 480);
    ctx.fillText(userName, 400, 480);

    // Score and difficulty background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(250, 510, 300, 40);
    ctx.strokeStyle = badgeColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(250, 510, 300, 40);

    // Score and difficulty text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.fillText(`${currentDifficulty.toUpperCase()} LEVEL • ${percentage}% SCORE`, 400, 530);

    // Date
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = '18px Arial, sans-serif';
    ctx.fillText(`Earned: ${new Date().toLocaleDateString()}`, 400, 570);

    // KnowledgeForge branding
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.fillText('🏆 KNOWLEDGEFORGE ACHIEVEMENT CERTIFICATE 🏆', 400, 610);

    // Decorative elements - stars in corners
    const drawStar = (x, y, size, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 144 - 90) * Math.PI / 180;
        const outerRadius = size;
        const innerRadius = size * 0.4;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x1 = x + Math.cos(angle) * radius;
        const y1 = y + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x1, y1);
        else ctx.lineTo(x1, y1);
      }
      ctx.closePath();
      ctx.fill();
    };

    // Corner stars
    drawStar(120, 120, 12, 'rgba(255, 255, 255, 0.8)');
    drawStar(680, 120, 12, 'rgba(255, 255, 255, 0.8)');
    drawStar(120, 680, 12, 'rgba(255, 255, 255, 0.8)');
    drawStar(680, 680, 12, 'rgba(255, 255, 255, 0.8)');

    // Additional decorative stars
    drawStar(200, 200, 8, badgeColor + 'AA');
    drawStar(600, 200, 8, badgeColor + 'AA');
    drawStar(200, 600, 8, badgeColor + 'AA');
    drawStar(600, 600, 8, badgeColor + 'AA');

    // Convert canvas to data URL and trigger download
    const dataURL = canvas.toDataURL('image/png', 1.0);

    // Create download link
    const link = document.createElement('a');
    link.download = `KnowledgeForge-Certificate-${badgeName.replace(/\s+/g, '-')}-${userName.replace(/\s+/g, '-')}-${Date.now()}.png`;
    link.href = dataURL;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success notification
    showDownloadSuccess();

  } catch (error) {
    console.error('Badge download failed:', error);
    showDownloadError();
  }
}

// Show download success message
function showDownloadSuccess() {
  const successMsg = document.createElement('div');
  successMsg.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    padding: 16px 24px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                    z-index: 10000;
                    font-weight: 600;
                    animation: slideInRight 0.5s ease-out;
                ">
                    🎉 Certificate Downloaded Successfully!
                </div>
            `;

  document.body.appendChild(successMsg);

  setTimeout(() => {
    if (document.body.contains(successMsg)) {
      document.body.removeChild(successMsg);
    }
  }, 4000);
}

// Show download error message
function showDownloadError() {
  const errorMsg = document.createElement('div');
  errorMsg.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    color: white;
                    padding: 16px 24px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
                    z-index: 10000;
                    font-weight: 600;
                    animation: slideInRight 0.5s ease-out;
                ">
                    ❌ Download failed. Please try again.
                </div>
            `;

  document.body.appendChild(errorMsg);

  setTimeout(() => {
    if (document.body.contains(errorMsg)) {
      document.body.removeChild(errorMsg);
    }
  }, 4000);
}

// Get Result Message
function getResultMessage(percentage) {
  if (percentage >= 90) return "Outstanding! You're a quiz master!";
  if (percentage >= 80) return "Excellent work! Impressive knowledge!";
  if (percentage >= 70) return "Great job! Well done!";
  if (percentage >= 60) return "Good effort! You're getting there!";
  return "Keep studying and try again!";
}

// Create Confetti Effect
function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
                        position: fixed;
                        width: 10px;
                        height: 10px;
                        background: ${colors[Math.floor(Math.random() * colors.length)]};
                        left: ${Math.random() * 100}vw;
                        animation: confettiFall ${Math.random() * 3 + 2}s linear infinite;
                        animation-delay: ${Math.random() * 3}s;
                        z-index: 1000;
                    `;
      document.body.appendChild(confetti);

      setTimeout(() => {
        if (document.body.contains(confetti)) {
          document.body.removeChild(confetti);
        }
      }, 5000);
    }, i * 100);
  }
}

// Restart Quiz
function restartQuiz() {
  // Reset quiz state
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  quizCompleted = false;

  // Show quiz elements
  progressContainer.style.display = 'block';

  // Restart with same difficulty
  currentQuestions = [...quizData[currentDifficulty]];
  startTime = new Date();

  loadQuestion();
  updateProgress();
}

// Go Home
function goHome() {
  // Reset everything
  currentDifficulty = null;
  currentQuestions = [];
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  quizCompleted = false;

  // Show welcome screen
  welcomeScreen.style.display = 'block';
  progressContainer.style.display = 'none';
  quizCard.style.display = 'none';

  // Reset difficulty selection
  document.querySelectorAll('.difficulty-card').forEach(card => {
    card.classList.remove('selected');
  });
  startButton.disabled = true;
}

// Initialize the app when page loads
initApp();
