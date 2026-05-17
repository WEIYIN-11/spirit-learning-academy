const stages = [
  { name: "幼年期・靈芽", minXp: 0, lore: "靈力初醒，純真無瑕，對世界充滿好奇與信任。" },
  { name: "童年期・靈躍", minXp: 30, lore: "靈性活躍，喜歡探索與玩耍，開始展現靈動與直覺力。" },
  { name: "少年期・靈悟", minXp: 60, lore: "靈智漸長，開始理解人心與情感，能感知並回應主人的情緒。" },
  { name: "成長期・靈慧", minXp: 90, lore: "靈力穩定提升，智慧與直覺並重，能指引方向、守護主人。" },
  { name: "成熟期・靈護", minXp: 120, lore: "靈性成熟，守護之力強大，成為主人堅定的庇佑與依靠。" },
  { name: "靈尊期・月騰", minXp: 150, lore: "靈力大幅躍升，能調動月華之力，掌握治癒與淨化的力量。" },
  { name: "靈聖期・星儀", minXp: 180, lore: "靈性達到聖域層次，能連結星辰、預見未來，指引命運之路。" },
  { name: "靈皇期・月華尊", minXp: 210, lore: "靈力達到巔峰，統御月華之源，成為靈界的王者與守護核心。" },
  { name: "靈神期・月神使", minXp: 240, lore: "超越凡靈，成為月神的使者，掌管靈界法則，守護宇宙平衡。" },
  { name: "完全體・永恆月靈狐", minXp: 270, lore: "與月同源，永恆不滅，是愛、智慧與守護的化身。" }
];

const state = loadState();
let selectedAnswer = null;
let shuffledOptions = [];

const viewButtons = document.querySelectorAll(".tab");
const views = {
  learn: document.querySelector("#learnView"),
  quiz: document.querySelector("#quizView"),
  path: document.querySelector("#pathView")
};

const nodes = {
  appEyebrow: document.querySelector("#appEyebrow"),
  courseSelect: document.querySelector("#courseSelect"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonNumber: document.querySelector("#lessonNumber"),
  lessonProgress: document.querySelector("#lessonProgress"),
  conceptTitle: document.querySelector("#conceptTitle"),
  conceptBody: document.querySelector("#conceptBody"),
  conceptCode: document.querySelector("#conceptCode"),
  termGrid: document.querySelector("#termGrid"),
  lessonDiagram: document.querySelector("#lessonDiagram"),
  questionText: document.querySelector("#questionText"),
  quizCounter: document.querySelector("#quizCounter"),
  quizReward: document.querySelector("#quizReward"),
  answers: document.querySelector("#answers"),
  feedback: document.querySelector("#feedback"),
  explainCard: document.querySelector("#explainCard"),
  nextButton: document.querySelector("#nextButton"),
  startQuizButton: document.querySelector("#startQuizButton"),
  resetButton: document.querySelector("#resetButton"),
  beastStage: document.querySelector(".beast-stage"),
  beastModeToggle: document.querySelector("#beastModeToggle"),
  pathList: document.querySelector("#pathList"),
  xpValue: document.querySelector("#xpValue"),
  xpBar: document.querySelector("#xpBar"),
  stageName: document.querySelector("#stageName"),
  stageLore: document.querySelector("#stageLore"),
  beastAtlas: document.querySelector("#beastAtlas"),
  beastName: document.querySelector("#beastName"),
  beastActions: document.querySelectorAll(".beast-actions button")
};

const dragState = {
  active: false,
  pointerId: null,
  offsetX: 0,
  offsetY: 0
};

function loadState() {
  const saved = localStorage.getItem("spirit-learning-progress");
  if (saved) {
    return JSON.parse(saved);
  }

  return {
    activeCourseId: "python-basics",
    courses: {}
  };
}

function saveState() {
  localStorage.setItem("spirit-learning-progress", JSON.stringify(state));
}

function ensureUiState() {
  if (!state.ui) {
    state.ui = {
      beastCompact: false,
      beastX: null,
      beastY: null
    };
  }
  return state.ui;
}

function catalog() {
  return window.courseCatalog || [];
}

function activeCourse() {
  return catalog().find((course) => course.id === state.activeCourseId) || catalog()[0];
}

function courseState(courseId = state.activeCourseId) {
  if (!state.courses[courseId]) {
    state.courses[courseId] = {
      lessonIndex: 0,
      questionIndex: 0,
      xp: 0,
      completedLessons: [],
      answered: {}
    };
  }
  return state.courses[courseId];
}

function currentLesson() {
  const course = activeCourse();
  const progress = courseState(course.id);
  return course.lessons[progress.lessonIndex];
}

function currentQuestion() {
  const progress = courseState(activeCourse().id);
  return currentLesson().quiz[progress.questionIndex];
}

function setView(name) {
  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  Object.entries(views).forEach(([key, view]) => view.classList.toggle("active", key === name));
}

function setBeastCompact(compact) {
  const ui = ensureUiState();
  ui.beastCompact = compact;
  nodes.beastStage.classList.toggle("compact", compact);
  nodes.beastModeToggle.textContent = compact ? "放大" : "縮小陪伴";

  if (compact) {
    applyBeastPosition();
  } else {
    nodes.beastStage.style.left = "";
    nodes.beastStage.style.top = "";
  }

  saveState();
}

function applyBeastPosition() {
  const ui = ensureUiState();
  const width = Math.min(112, window.innerWidth - 18);
  const height = 156;
  const fallbackX = window.innerWidth - width - 12;
  const fallbackY = 92;
  const x = clamp(ui.beastX ?? fallbackX, 8, window.innerWidth - width - 8);
  const y = clamp(ui.beastY ?? fallbackY, 8, window.innerHeight - height - 8);

  ui.beastX = x;
  ui.beastY = y;
  nodes.beastStage.style.left = `${x}px`;
  nodes.beastStage.style.top = `${y}px`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function beginBeastDrag(event) {
  if (!ensureUiState().beastCompact) return;
  if (event.target.closest("button")) return;

  const rect = nodes.beastStage.getBoundingClientRect();
  dragState.active = true;
  dragState.pointerId = event.pointerId;
  dragState.offsetX = event.clientX - rect.left;
  dragState.offsetY = event.clientY - rect.top;
  nodes.beastStage.setPointerCapture(event.pointerId);
}

function moveBeastDrag(event) {
  if (!dragState.active || event.pointerId !== dragState.pointerId) return;

  const ui = ensureUiState();
  const rect = nodes.beastStage.getBoundingClientRect();
  ui.beastX = clamp(event.clientX - dragState.offsetX, 8, window.innerWidth - rect.width - 8);
  ui.beastY = clamp(event.clientY - dragState.offsetY, 8, window.innerHeight - rect.height - 8);
  nodes.beastStage.style.left = `${ui.beastX}px`;
  nodes.beastStage.style.top = `${ui.beastY}px`;
}

function endBeastDrag(event) {
  if (!dragState.active || event.pointerId !== dragState.pointerId) return;
  dragState.active = false;
  dragState.pointerId = null;
  saveState();
}

function renderCourseOptions() {
  nodes.courseSelect.innerHTML = catalog()
    .map((course) => `<option value="${course.id}">${course.title}</option>`)
    .join("");
  nodes.courseSelect.value = activeCourse().id;
}

function renderLesson() {
  const course = activeCourse();
  const progress = courseState(course.id);
  const lesson = currentLesson();
  nodes.appEyebrow.textContent = `${course.shortTitle}・靈獸學習課程`;
  nodes.lessonTitle.textContent = lesson.title;
  nodes.lessonNumber.textContent = `第 ${progress.lessonIndex + 1} 課`;
  nodes.lessonProgress.textContent = `${progress.completedLessons.length}/${course.lessons.length} 完成`;
  nodes.conceptTitle.textContent = lesson.title;
  nodes.conceptBody.textContent = lesson.body;
  nodes.conceptCode.textContent = lesson.code;
  nodes.startQuizButton.textContent = progress.completedLessons.includes(progress.lessonIndex) ? "再練一次小測驗" : "開始小測驗";
  renderTerms(lesson.terms);
  renderDiagram(lesson.diagram);
}

function renderTerms(terms) {
  nodes.termGrid.innerHTML = terms
    .map(
      (term) => `
        <details class="term-card">
          <summary>
            <span>${term.name}</span>
            <small>${term.short}</small>
          </summary>
          <p>${term.detail}</p>
        </details>
      `
    )
    .join("");
}

function renderDiagram(diagram) {
  const rows = diagram.rows
    .map((row) => {
      if (diagram.type === "indent") {
        const spaces = row.indent === 0 ? "0 格" : "4 格";
        return `
          <div class="indent-row indent-${row.indent}">
            <span class="indent-guide">${spaces}</span>
            <code>${row.text}</code>
            <b>${row.tag}</b>
          </div>
        `;
      }

      return `
        <div class="diagram-row">
          <span>${row.left}</span>
          <strong>${row.right}</strong>
          ${row.note ? `<em>${row.note}</em>` : ""}
        </div>
      `;
    })
    .join("");

  nodes.lessonDiagram.innerHTML = `
    <h3>${diagram.title}</h3>
    <div class="diagram-${diagram.type}">${rows}</div>
  `;
}

function renderQuiz() {
  const progress = courseState(activeCourse().id);
  const question = currentQuestion();
  selectedAnswer = null;
  shuffledOptions = shuffleOptions(question);
  nodes.quizCounter.textContent = `題目 ${progress.questionIndex + 1}/${currentLesson().quiz.length}`;
  nodes.quizReward.textContent = "+15 XP";
  nodes.questionText.textContent = question.question;
  nodes.feedback.textContent = "";
  nodes.explainCard.hidden = true;
  nodes.explainCard.innerHTML = "";
  nodes.nextButton.disabled = true;
  nodes.nextButton.textContent = progress.questionIndex === currentLesson().quiz.length - 1 ? "完成本課" : "下一題";
  nodes.answers.innerHTML = "";

  shuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = option.text;
    button.addEventListener("click", () => chooseAnswer(index));
    nodes.answers.append(button);
  });
}

function shuffleOptions(question) {
  const options = question.options.map((text, originalIndex) => ({
    text,
    correct: originalIndex === question.answer
  }));

  for (let index = options.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }

  return options;
}

function chooseAnswer(index) {
  if (selectedAnswer !== null) return;

  selectedAnswer = index;
  const course = activeCourse();
  const progress = courseState(course.id);
  const question = currentQuestion();
  const buttons = [...nodes.answers.querySelectorAll("button")];
  const correctIndex = shuffledOptions.findIndex((option) => option.correct);
  const isCorrect = shuffledOptions[index]?.correct;
  const answerKey = `${progress.lessonIndex}-${progress.questionIndex}`;

  buttons.forEach((button, buttonIndex) => {
    if (buttonIndex === correctIndex) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
    button.disabled = true;
  });

  if (isCorrect) {
    const firstCorrect = !progress.answered[answerKey];
    if (firstCorrect) {
      progress.xp += 15;
      progress.answered[answerKey] = true;
    }
    nodes.feedback.textContent = firstCorrect
      ? `答對了，靈月靈狐吸收了新知識。${question.explain}`
      : `答對了。${question.explain}`;
  } else {
    nodes.feedback.textContent = `這題先記一下：${question.explain}`;
  }

  nodes.explainCard.hidden = false;
  nodes.explainCard.innerHTML = `
    <h3>為什麼是這個答案？</h3>
    <p>${question.why}</p>
  `;
  nodes.nextButton.disabled = false;
  saveState();
  renderBeast();
}

function nextQuestion() {
  const course = activeCourse();
  const progress = courseState(course.id);
  if (progress.questionIndex < currentLesson().quiz.length - 1) {
    progress.questionIndex += 1;
    renderQuiz();
    return;
  }

  if (!progress.completedLessons.includes(progress.lessonIndex)) {
    progress.completedLessons.push(progress.lessonIndex);
    progress.xp += 10;
  }

  if (progress.lessonIndex < course.lessons.length - 1) {
    progress.lessonIndex += 1;
  }

  progress.questionIndex = 0;
  saveState();
  renderAll();
  setView("learn");
}

function renderPath() {
  const course = activeCourse();
  const progress = courseState(course.id);
  nodes.pathList.innerHTML = "";
  course.lessons.forEach((lesson, index) => {
    const item = document.createElement("article");
    const complete = progress.completedLessons.includes(index);
    const active = index === progress.lessonIndex;
    item.className = `path-item${complete ? " complete" : ""}`;
    item.innerHTML = `
      <div class="path-mark">${complete ? "✓" : index + 1}</div>
      <div>
        <h3>${lesson.title}</h3>
        <p>${lesson.quiz.length} 題小測驗，${lesson.terms.length} 個名詞解釋</p>
      </div>
      <span class="path-status">${complete ? "完成" : active ? "進行中" : "未解鎖"}</span>
    `;
    nodes.pathList.append(item);
  });
}

function renderBeast() {
  const progress = courseState(activeCourse().id);
  const stage = [...stages].reverse().find((item) => progress.xp >= item.minXp) || stages[0];
  const stageIndex = stages.indexOf(stage);
  const nextStage = stages[stageIndex + 1];
  const stageBase = stage.minXp;
  const stageTarget = nextStage ? nextStage.minXp : stage.minXp + 30;
  const fill = Math.min(100, ((progress.xp - stageBase) / (stageTarget - stageBase)) * 100);
  const column = stageIndex % 5;
  const row = Math.floor(stageIndex / 5);

  nodes.xpValue.textContent = progress.xp;
  nodes.stageName.textContent = stage.name;
  nodes.stageLore.textContent = stage.lore;
  nodes.beastName.textContent = `靈月靈狐，${stage.name}`;
  nodes.xpBar.style.width = `${fill}%`;
  nodes.beastAtlas.style.backgroundPosition = `${column * 25}% ${row * 100}%`;
}

function playBeastAction(action) {
  nodes.beastAtlas.classList.remove("action-wave", "action-tail", "action-spin");
  nodes.beastAtlas.dataset.action = action;
  void nodes.beastAtlas.offsetWidth;
  nodes.beastAtlas.classList.add(`action-${action}`);
}

function renderAll() {
  ensureUiState();
  renderCourseOptions();
  renderLesson();
  renderQuiz();
  renderPath();
  renderBeast();
  setBeastCompact(ensureUiState().beastCompact);
}

function resetProgress() {
  const shouldReset = confirm("要重置目前課程的靈獸與課程進度嗎？");
  if (!shouldReset) return;

  state.courses[activeCourse().id] = {
    lessonIndex: 0,
    questionIndex: 0,
    xp: 0,
    completedLessons: [],
    answered: {}
  };
  saveState();
  renderAll();
  setView("learn");
}

function changeCourse(courseId) {
  state.activeCourseId = courseId;
  courseState(courseId);
  saveState();
  renderAll();
  setView("learn");
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

nodes.courseSelect.addEventListener("change", (event) => changeCourse(event.target.value));
nodes.startQuizButton.addEventListener("click", () => {
  const progress = courseState(activeCourse().id);
  progress.questionIndex = 0;
  saveState();
  renderQuiz();
  setBeastCompact(true);
  setView("quiz");
});
nodes.nextButton.addEventListener("click", nextQuestion);
nodes.resetButton.addEventListener("click", resetProgress);
nodes.beastModeToggle.addEventListener("click", () => setBeastCompact(!ensureUiState().beastCompact));
nodes.beastStage.addEventListener("pointerdown", beginBeastDrag);
nodes.beastStage.addEventListener("pointermove", moveBeastDrag);
nodes.beastStage.addEventListener("pointerup", endBeastDrag);
nodes.beastStage.addEventListener("pointercancel", endBeastDrag);
window.addEventListener("resize", () => {
  if (ensureUiState().beastCompact) applyBeastPosition();
});
nodes.beastActions.forEach((button) => {
  button.addEventListener("click", () => playBeastAction(button.dataset.action));
});

renderAll();
