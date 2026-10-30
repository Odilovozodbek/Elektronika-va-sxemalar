
"use strict";

/*
  ELECTROTOOLS STUDIO 5
  SCRIPT.JS — 1/2
  Ikkinchi qismni shu kodning davomiga qo'shing.
*/

(() => {

  // ===== DOM HELPERS =====

  const $ = id => document.getElementById(id);

  const $$ = selector =>
    [...document.querySelectorAll(selector)];

  const fmt = (v, d = 3) =>
    Number.isFinite(v)
      ? Number(v.toFixed(d)).toLocaleString("en-US")
      : "—";

  const esc = s =>
    String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);

  const valid = v => Number.isFinite(v) && v >= 0;

  const store = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (_) {}
  };

  const recall = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (_) {
      return fallback;
    }
  };

  // ===== COMPONENT NAMES =====

  const names = {
    battery: ["Batareya", "Battery", "Батарея"],
    resistor: ["Rezistor", "Resistor", "Резистор"],
    led: ["Svetodiod", "LED", "Светодиод"],
    lamp: ["Chiroq", "Lamp", "Лампа"],
    switch: ["Kalit", "Switch", "Переключатель"],
    capacitor: ["Kondensator", "Capacitor", "Конденсатор"],
    inductor: ["Induktor", "Inductor", "Катушка"],
    voltmeter: ["Voltmetr", "Voltmeter", "Вольтметр"],
    ammeter: ["Ampermetr", "Ammeter", "Амперметр"],
    ldr: ["Fotorezistor", "LDR", "Фоторезистор"],
    ntc: ["Termistor", "NTC", "Термистор"],
    diode: ["Diod", "Diode", "Диод"],
    photodiode: ["Fotodiod", "Photodiode", "Фотодиод"],
    potentiometer: [
      "Potensiometr",
      "Potentiometer",
      "Потенциометр"
    ],
    transistor: ["Tranzistor", "Transistor", "Транзистор"],
    opamp: [
      "Operatsion kuchaytirgich",
      "Op-amp",
      "Операционный усилитель"
    ],
    transformer: [
      "Transformator",
      "Transformer",
      "Трансформатор"
    ]
  };

  const definitions = {
    battery: {
      cat: "sources", unit: "V", value: 9, icon: "🔋"
    },
    resistor: {
      cat: "passive", unit: "Ω", value: 330, icon: "▰"
    },
    led: {
      cat: "active", unit: "V", value: 2, icon: "💡"
    },
    lamp: {
      cat: "active", unit: "Ω", value: 100, icon: "☼"
    },
    switch: {
      cat: "passive", unit: "0/1", value: 1, icon: "⏻"
    },
    capacitor: {
      cat: "passive", unit: "µF", value: 10, icon: "▯"
    },
    inductor: {
      cat: "passive", unit: "mH", value: 100, icon: "∿"
    },
    voltmeter: {
      cat: "measurement", unit: "V", value: 0, icon: "Ⓥ"
    },
    ammeter: {
      cat: "measurement", unit: "A", value: 0, icon: "Ⓐ"
    },
    ldr: {
      cat: "passive", unit: "Ω", value: 1000, icon: "☀"
    },
    ntc: {
      cat: "passive", unit: "Ω", value: 1000, icon: "🌡"
    },
    diode: {
      cat: "active", unit: "V", value: 0.7, icon: "▶"
    },
    photodiode: {
      cat: "active", unit: "", value: 0, icon: "◁"
    },
    potentiometer: {
      cat: "passive", unit: "Ω", value: 1000, icon: "◉"
    },
    transistor: {
      cat: "active", unit: "", value: 0, icon: "♧"
    },
    opamp: {
      cat: "active", unit: "", value: 0, icon: "△"
    },
    transformer: {
      cat: "passive", unit: "", value: 0, icon: "◎"
    }
  };

  // ===== TRANSLATIONS =====

  const languageText = {
    uz: {
      home: "Bosh sahifa",
      builder: "Sxema yig‘ish",
      laboratories: "Laboratoriyalar",
      equipment: "Uskunalar",
      calculators: "Kalkulyatorlar",
      oscilloscope: "Ossillograf",
      formulas: "Formulalar",
      components: "Elektron detallar",
      notebook: "Laboratoriya jurnali",
      theme: "Rejim",
      dashboardTitle: "Virtual elektronika laboratoriyasi",
      dashboardDescription:
        "Sxema yig‘ish, hisoblash, formulalar va o‘lchov uskunalari."
    },
    en: {
      home: "Home",
      builder: "Circuit builder",
      laboratories: "Laboratories",
      equipment: "Equipment",
      calculators: "Calculators",
      oscilloscope: "Oscilloscope",
      formulas: "Formulas",
      components: "Electronic components",
      notebook: "Lab notebook",
      theme: "Theme",
      dashboardTitle: "Virtual electronics laboratory",
      dashboardDescription:
        "Circuit design, calculation, formulas and measurement equipment."
    },
    ru: {
      home: "Главная",
      builder: "Конструктор схем",
      laboratories: "Лаборатории",
      equipment: "Оборудование",
      calculators: "Калькуляторы",
      oscilloscope: "Осциллограф",
      formulas: "Формулы",
      components: "Электронные компоненты",
      notebook: "Лабораторный журнал",
      theme: "Тема",
      dashboardTitle: "Виртуальная лаборатория электроники",
      dashboardDescription:
        "Сборка схем, расчёты, формулы и измерительное оборудование."
    }
  };

  const languageIndex = { uz: 0, en: 1, ru: 2 };

  let lang = recall("et-language", "uz");
  let theme = recall("et-theme", "light");

  if (!languageText[lang]) lang = "uz";
  if (!["light", "dark"].includes(theme)) theme = "light";

  // ===== APPLICATION STATE =====

  let currentPage = "home";
  let physical = true;

  let selectedType = null;
  let selected = null;
  let pending = null;
  let drag = null;

  let parts = [];
  let wires = [];
  let nextId = 1;

  let previous = [];
  let future = [];

  let solution = null;
  let measurements = [];

  let selectedCategory = "all";
  let activeCalculator = "ohm";

  let paused = false;
  let animationTime = 0;

  let notes = recall("et-notes", []);

  if (!Array.isArray(notes)) notes = [];

  const partName = type =>
    names[type][languageIndex[lang]];

  // ===== NOTIFICATIONS =====

  const toast = text => {
    const node = $("notification");
    if (!node) return;

    node.textContent = text;
    node.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
      node.classList.remove("show");
    }, 2800);
  };

  // ===== PAGE NAVIGATION =====

  function pageTo(name) {
    if (!$(name)?.classList.contains("page")) return;

    currentPage = name;

    $$(".page").forEach(p => {
      p.hidden = p.id !== name;
      p.classList.toggle("active", p.id === name);
    });

    $$(".nav-item").forEach(b => {
      const active = b.dataset.page === name;
      b.classList.toggle("active", active);

      if (active) {
        b.setAttribute("aria-current", "page");
      } else {
        b.removeAttribute("aria-current");
      }
    });

    $("sidebar").classList.remove("open");

    $("sidebarToggle").setAttribute(
      "aria-expanded",
      "false"
    );

    if (name === "oscilloscope") drawScope();
  }

  // ===== CHANGE LANGUAGE =====

  function changeLanguage() {
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach(el => {
      const text = languageText[lang][el.dataset.i18n];
      if (text) el.textContent = text;
    });

    $("language").value = lang;

    renderPalette();
    renderBoard();
    renderProperties();
    renderLibrary();
  }

  // ===== LIGHT / DARK MODE =====

  function changeTheme() {
    document.body.classList.toggle(
      "dark",
      theme === "dark"
    );

    document.documentElement.dataset.theme = theme;

    $("themeToggle")
      .querySelector(".theme-icon")
      .textContent = theme === "dark" ? "☀" : "☾";
  }

  // ===== UNDO / REDO =====

  function capture() {
    return JSON.stringify({ parts, wires, nextId });
  }

  function commit() {
    previous.push(capture());

    if (previous.length > 80) previous.shift();

    future = [];
  }

  function restore(snapshot) {
    const data = JSON.parse(snapshot);

    parts = data.parts;
    wires = data.wires;
    nextId = data.nextId;

    selected = null;
    pending = null;
    solution = null;

    updateEverything();
  }

  function stepBack() {
    if (!previous.length) {
      toast("Ortga qaytariladigan amal yo‘q");
      return;
    }

    future.push(capture());
    restore(previous.pop());
  }

  function stepForward() {
    if (!future.length) {
      toast("Qayta bajariladigan amal yo‘q");
      return;
    }

    previous.push(capture());
    restore(future.pop());
  }

  // ===== COMPONENT CREATION =====

  function addPart(type, x, y, value = definitions[type]?.value) {
    if (!definitions[type]) return null;

    const p = {
      id: nextId++,
      type,
      x,
      y,
      value
    };

    parts.push(p);
    return p;
  }

  function addWire(a, b) {
    if (a.id === b.id && a.port === b.port) return;

    const exists = wires.some(w =>
      (
        JSON.stringify(w.a) === JSON.stringify(a) &&
        JSON.stringify(w.b) === JSON.stringify(b)
      ) ||
      (
        JSON.stringify(w.a) === JSON.stringify(b) &&
        JSON.stringify(w.b) === JSON.stringify(a)
      )
    );

    if (exists) return;

    commit();
    wires.push({ a, b });
    solution = null;

    updateEverything();
  }

  // ===== DELETE SELECTED =====

  function deleteSelected() {
    if (!selected) {
      toast("Avval detal yoki simni tanlang");
      return;
    }

    commit();

    if (selected.kind === "part") {
      parts = parts.filter(p => p.id !== selected.id);

      wires = wires.filter(
        w =>
          w.a.id !== selected.id &&
          w.b.id !== selected.id
      );
    } else {
      wires.splice(selected.id, 1);
    }

    selected = null;
    solution = null;
    updateEverything();
  }

  // ===== DUPLICATE =====

  function duplicateSelected() {
    if (selected?.kind !== "part") {
      toast("Nusxalash uchun detalni tanlang");
      return;
    }

    const p = parts.find(x => x.id === selected.id);
    if (!p) return;

    commit();

    const copy = addPart(
      p.type,
      Math.min(1125, p.x + 80),
      Math.min(605, p.y + 65),
      p.value
    );

    selected = { kind: "part", id: copy.id };
    solution = null;

    updateEverything();
  }

  function connectDirect(a, portA, b, portB) {
    wires.push({
      a: { id: a.id, port: portA },
      b: { id: b.id, port: portB }
    });
  }

  // ===== READY-MADE CIRCUITS =====

  function loadDemo(which = "led") {
    commit();

    parts = [];
    wires = [];
    nextId = 1;

    selected = null;
    pending = null;
    selectedType = null;
    solution = null;

    const battery = addPart(
      "battery",
      130,
      290,
      which === "voltage-divider" ? 12 : 9
    );

    if (which === "voltage-divider") {
      const r1 = addPart("resistor", 380, 120, 1000);
      const r2 = addPart("resistor", 665, 260, 2000);
      const v = addPart("voltmeter", 440, 445, 0);

      connectDirect(battery, 0, r1, 0);
      connectDirect(r1, 1, r2, 0);
      connectDirect(r2, 1, battery, 1);

      connectDirect(v, 0, r1, 1);
      connectDirect(v, 1, r2, 1);

    } else if (which === "sensor") {
      const l = addPart("ldr", 385, 120, 1000);
      const r = addPart("resistor", 650, 120, 330);
      const led = addPart("led", 925, 280, 2);

      connectDirect(battery, 0, l, 0);
      connectDirect(l, 1, r, 0);
      connectDirect(r, 1, led, 0);
      connectDirect(led, 1, battery, 1);

    } else {
      const sw = addPart("switch", 380, 120, 1);
      const r = addPart("resistor", 650, 120, 330);
      const led = addPart("led", 925, 280, 2);

      connectDirect(battery, 0, sw, 0);
      connectDirect(sw, 1, r, 0);
      connectDirect(r, 1, led, 0);
      connectDirect(led, 1, battery, 1);
    }

    updateEverything();
    pageTo("builder");
    runSimulation();
  }

  // ===== COMPONENT PALETTE =====

  function renderPalette() {
    const key =
      $("componentSearch").value.toLocaleLowerCase();

    $("componentPalette").innerHTML =
      Object.entries(definitions)
        .filter(([type, d]) =>
          (
            selectedCategory === "all" ||
            d.cat === selectedCategory
          ) &&
          partName(type).toLocaleLowerCase().includes(key)
        )
        .map(([type, d]) => `
          <button
            type="button"
            class="component-item
              ${selectedType === type ? "selected" : ""}"
            data-add="${type}"
          >
            <span class="component-icon">${d.icon}</span>
            <span>${esc(partName(type))}</span>
          </button>
        `)
        .join("");

    $$("[data-component-category]").forEach(b => {
      b.classList.toggle(
        "active",
        b.dataset.componentCategory === selectedCategory
      );
    });

    $("componentCount").textContent =
      Object.keys(definitions).length;
  }

  // ===== SVG CIRCUIT DRAWING =====

  const terminal = (p, port) => ({
    x: p.x + (port === 0 ? -67 : 67),
    y: p.y
  });

  function partSVG(p) {
    const on =
      solution?.details?.[p.id]?.current > 0.00001;

    let shape = "";

    if (physical) {
      const colors = {
        battery: "#31465f",
        resistor: "#e1c79a",
        led: on ? "#ffc944" : "#a84949",
        lamp: on ? "#ffe28b" : "#93a2b6",
        switch: "#648199",
        capacitor: "#2376a4",
        inductor: "#b88142",
        voltmeter: "#e7b23a",
        ammeter: "#d69b36",
        ldr: "#b59b68",
        ntc: "#7bc8cf",
        diode: "#353d49",
        potentiometer: "#d9bd80"
      };

      const color = colors[p.type] || "#54718a";

      shape = `
        <rect
          class="component-body"
          x="-42" y="-25" width="84" height="50"
          rx="12" fill="${color}"
          style="fill:${color}"
        />
        <text
          x="0" y="5" text-anchor="middle"
          style="fill:white;font-size:18px"
        >${definitions[p.type].icon}</text>
      `;

      if (p.type === "led" && on) {
        shape += `
          <circle cx="0" cy="0" r="35"
            fill="#ffdc55" opacity=".25"/>
        `;
      }

    } else {
      const path = {
        battery: "M-12 -23 V23 M5 -14 V14",
        resistor:
          "M-44 0 L-34 -13 L-22 13 L-10 -13 L2 13 L14 -13 L26 13 L37 0",
        led:
          "M-22 -22 L20 0 L-22 22 Z M21 -24 V24",
        lamp:
          "M-20 -20 L20 20 M20 -20 L-20 20",
        switch:
          `M-32 0 L${p.value ? "32 0" : "24 -22"}`,
        capacitor:
          "M-10 -24 V24 M10 -24 V24",
        inductor:
          "M-38 0 Q-28 -30 -18 0 Q-8 -30 2 0 Q12 -30 22 0 Q32 -30 42 0",
        voltmeter:
          "M0 -27 A27 27 0 1 0 0 27 A27 27 0 1 0 0 -27",
        ammeter:
          "M0 -27 A27 27 0 1 0 0 27 A27 27 0 1 0 0 -27",
        diode:
          "M-20 -23 L19 0 L-20 23 Z M21 -24 V24",
        ldr:
          "M-38 -18 H38 V18 H-38 Z",
        ntc:
          "M-38 -18 H38 V18 H-38 Z"
      }[p.type] || "M-34 -20 H34 V20 H-34 Z";

      shape = `
        <path class="component-symbol" d="${path}"/>
      `;

      if (["voltmeter", "ammeter"].includes(p.type)) {
        shape += `
          <text
            x="0" y="6" text-anchor="middle"
            style="font-size:19px"
          >${p.type === "voltmeter" ? "V" : "A"}</text>
        `;
      }
    }

    const unit = definitions[p.type].unit;

    const value = p.type === "switch"
      ? (p.value ? "YOPIQ" : "OCHIQ")
      : `${fmt(p.value)} ${unit}`;

    return `
      <g
        class="circuit-component
          ${selected?.kind === "part" &&
            selected.id === p.id ? "selected" : ""}"
        data-part-id="${p.id}"
        transform="translate(${p.x} ${p.y})"
      >
        <line
          x1="-67" y1="0" x2="-43" y2="0"
          stroke="var(--component-stroke)"
          stroke-width="3"
        />
        <line
          x1="43" y1="0" x2="67" y2="0"
          stroke="var(--component-stroke)"
          stroke-width="3"
        />

        ${shape}

        <text x="0" y="-47" text-anchor="middle">
          ${esc(partName(p.type))} #${p.id}
        </text>

        <text x="0" y="51" text-anchor="middle">
          ${esc(value)}
        </text>

        <circle
          class="component-terminal
            ${pending?.id === p.id &&
              pending.port === 0 ? "pending" : ""}"
          cx="-67" cy="0" r="9"
          data-terminal-id="${p.id}"
          data-port="0"
        />

        <circle
          class="component-terminal
            ${pending?.id === p.id &&
              pending.port === 1 ? "pending" : ""}"
          cx="67" cy="0" r="9"
          data-terminal-id="${p.id}"
          data-port="1"
        />
      </g>
    `;
  }

  function renderBoard() {
    const lookup = new Map(parts.map(p => [p.id, p]));

    $("wireLayer").innerHTML = wires.map((w, i) => {
      const a = lookup.get(w.a.id);
      const b = lookup.get(w.b.id);

      if (!a || !b) return "";

      const s = terminal(a, w.a.port);
      const e = terminal(b, w.b.port);

      const active =
        solution?.activeNets?.has(
          solution.netOf(w.a.id, w.a.port)
        ) || false;

      return `
        <path
          class="circuit-wire
            ${selected?.kind === "wire" &&
              selected.id === i ? "selected" : ""}
            ${active ? "active" : ""}"
          data-wire-id="${i}"
          d="M${s.x} ${s.y}
             L${e.x} ${s.y}
             L${e.x} ${e.y}"
        />
      `;
    }).join("");

    $("componentLayer").innerHTML =
      parts.map(partSVG).join("");

    $("componentTotal").textContent =
      `Elementlar: ${parts.length} | Simlar: ${wires.length}`;
  }

  // ===== COMPONENT PROPERTIES =====

  function renderProperties() {
    const area = $("componentProperties");

    const p = selected?.kind === "part"
      ? parts.find(x => x.id === selected.id)
      : null;

    if (!p) {
      area.innerHTML =
        "<p>Tahrirlash uchun detalni tanlang.</p>";
      return;
    }

    const locked = [
      "voltmeter", "ammeter", "transistor",
      "opamp", "transformer", "photodiode"
    ].includes(p.type);

    area.innerHTML = `
      <strong>${esc(partName(p.type))} #${p.id}</strong>

      <label>
        Qiymat (${esc(definitions[p.type].unit || "—")})
        <input
          id="partValue"
          type="number"
          step="any"
          value="${p.value}"
          ${locked ? "disabled" : ""}
        >
      </label>

      ${p.type === "switch" ? `
        <button
          type="button"
          id="toggleSwitch"
          class="btn btn-secondary"
        >Kalitni almashtirish</button>
      ` : ""}
    `;

    $("partValue")?.addEventListener("change", () => {
      const value = Number($("partValue").value);

      if (!Number.isFinite(value) || value < 0) {
        toast("Musbat qiymat kiriting");
        return;
      }

      commit();
      p.value = p.type === "switch"
        ? Number(value !== 0)
        : value;

      solution = null;
      updateEverything();
    });

    $("toggleSwitch")?.addEventListener("click", () => {
      commit();
      p.value = p.value ? 0 : 1;
      solution = null;

      updateEverything();
      runSimulation();
    });
  }

  function updateEverything() {
    renderPalette();
    renderBoard();
    renderProperties();
    renderReadings();
  }

  // ===== POINTER COORDINATES =====

  function boardPoint(ev) {
    const svg = $("circuitBoard");
    const p = svg.createSVGPoint();

    p.x = ev.clientX;
    p.y = ev.clientY;

    const matrix = svg.getScreenCTM();

    return matrix
      ? p.matrixTransform(matrix.inverse())
      : { x: 300, y: 300 };
  }

  // ===== BOARD INTERACTIONS =====

  function configureBoard() {
    const board = $("circuitBoard");

    board.addEventListener("pointerdown", ev => {
      const term = ev.target.closest(
        "[data-terminal-id]"
      );

      if (term) {
        const t = {
          id: Number(term.dataset.terminalId),
          port: Number(term.dataset.port)
        };

        if (pending) {
          addWire(pending, t);
          pending = null;
          $("wireMessage").textContent = "Sim ulandi";
        } else {
          pending = t;
          $("wireMessage").textContent =
            "Ikkinchi kontaktni tanlang";
        }

        renderBoard();
        return;
      }

      const wire = ev.target.closest("[data-wire-id]");

      if (wire) {
        selected = {
          kind: "wire",
          id: Number(wire.dataset.wireId)
        };

        selectedType = null;
        updateEverything();
        return;
      }

      const part = ev.target.closest("[data-part-id]");

      if (part) {
        const id = Number(part.dataset.partId);

        selected = { kind: "part", id };
        selectedType = null;

        drag = {
          id,
          from: boardPoint(ev),
          original: capture(),
          moved: false
        };

        board.setPointerCapture(ev.pointerId);
        updateEverything();
        return;
      }

      if (selectedType) {
        const pos = boardPoint(ev);

        commit();

        const p = addPart(
          selectedType,
          Math.max(75, Math.min(1120, pos.x)),
          Math.max(80, Math.min(590, pos.y))
        );

        selected = { kind: "part", id: p.id };
        selectedType = null;
        solution = null;

        updateEverything();
        return;
      }

      selected = null;
      updateEverything();
    });

    board.addEventListener("pointermove", ev => {
      if (!drag) return;

      const p = parts.find(p => p.id === drag.id);
      if (!p) return;

      const pos = boardPoint(ev);

      const dx = pos.x - drag.from.x;
      const dy = pos.y - drag.from.y;

      if (Math.abs(dx) + Math.abs(dy) > 1) {
        drag.moved = true;
      }

      p.x = Math.max(75, Math.min(1120, p.x + dx));
      p.y = Math.max(80, Math.min(590, p.y + dy));

      drag.from = pos;
      renderBoard();
    });

    const stop = () => {
      if (drag?.moved) {
        previous.push(drag.original);

        if (previous.length > 80) previous.shift();

        future = [];
        solution = null;

        updateEverything();
      }

      drag = null;
    };

    board.addEventListener("pointerup", stop);
    board.addEventListener("pointercancel", stop);
  }

  // ===== DC CIRCUIT SOLVER =====
  // Educational simplified DC analysis.
  // One battery, resistive networks and
  // approximate diode models.

  function calculateDC() {
    const sources = parts.filter(
      p => p.type === "battery"
    );

    if (sources.length !== 1) {
      return {
        error: "DC hisoblash uchun bitta batareya kerak."
      };
    }

    if (parts.some(p => [
      "transistor", "opamp",
      "transformer", "photodiode"
    ].includes(p.type))) {
      return {
        error:
          "Bu detal erkin DC hisoblashda qo‘llanmaydi. " +
          "Maxsus laboratoriyadan foydalaning."
      };
    }

    const src = sources[0];

    if (!(src.value > 0)) {
      return {
        error: "Batareya kuchlanishi 0 dan katta bo‘lishi kerak."
      };
    }

    const parent = new Map();

    for (const p of parts) {
      for (let k = 0; k < 2; k++) {
        parent.set(`${p.id}:${k}`, `${p.id}:${k}`);
      }
    }

    function find(key) {
      let a = key;

      while (parent.get(a) !== a) {
        a = parent.get(a);
      }

      let b = key;

      while (parent.get(b) !== b) {
        const n = parent.get(b);
        parent.set(b, a);
        b = n;
      }

      return a;
    }

    function union(a, b) {
      a = find(a);
      b = find(b);

      if (a !== b) parent.set(a, b);
    }

    wires.forEach(w => {
      union(
        `${w.a.id}:${w.a.port}`,
        `${w.b.id}:${w.b.port}`
      );
    });

    const netOf = (id, k) => find(`${id}:${k}`);

    const plus = netOf(src.id, 0);
    const minus = netOf(src.id, 1);

    if (plus === minus) {
      return {
        error:
          "Batareya qutblari sim orqali qisqa tutashtirilgan."
      };
    }

    const roots = [
      ...new Set(
        parts.flatMap(p => [
          netOf(p.id, 0),
          netOf(p.id, 1)
        ])
      )
    ];

    const unknown = roots.filter(
      n => n !== plus && n !== minus
    );

    const index = new Map(
      unknown.map((n, i) => [n, i])
    );

    const fixed = new Map([
      [plus, src.value],
      [minus, 0]
    ]);

    const diodeMode = new Map();

    const models = parts
      .filter(p => p !== src)
      .map(p => {
        let r = Infinity;
        let vf = 0;

        if ([
          "resistor", "lamp", "ldr",
          "ntc", "potentiometer"
        ].includes(p.type)) {
          r = Math.max(p.value, 1e-3);
        }

        if (p.type === "switch") {
          r = p.value ? 0.01 : Infinity;
        }

        if (
          p.type === "ammeter" ||
          p.type === "inductor"
        ) {
          r = 0.01;
        }

        if (
          p.type === "led" ||
          p.type === "diode"
        ) {
          r = 1e10;
          vf = Math.max(0.1, p.value);
        }

        return {
          p,
          a: netOf(p.id, 0),
          b: netOf(p.id, 1),
          r,
          vf
        };
      });

    function gaussian(A, B) {
      const n = B.length;

      for (let i = 0; i < n; i++) {
        let max = i;

        for (let j = i + 1; j < n; j++) {
          if (
            Math.abs(A[j][i]) >
            Math.abs(A[max][i])
          ) {
            max = j;
          }
        }

        [A[i], A[max]] = [A[max], A[i]];
        [B[i], B[max]] = [B[max], B[i]];

        if (Math.abs(A[i][i]) < 1e-14) {
          continue;
        }

        const div = A[i][i];

        for (let j = i; j < n; j++) {
          A[i][j] /= div;
        }

        B[i] /= div;

        for (let k = 0; k < n; k++) {
          if (k === i) continue;

          const f = A[k][i];
          if (!f) continue;

          for (let j = i; j < n; j++) {
            A[k][j] -= f * A[i][j];
          }

          B[k] -= f * B[i];
        }
      }

      return B;
    }

    let volts = new Map(fixed);

    unknown.forEach(n => volts.set(n, 0));

    for (let iteration = 0; iteration < 18; iteration++) {
      const n = unknown.length;

      const A = Array.from(
        { length: n },
        () => Array(n).fill(0)
      );

      const B = Array(n).fill(0);

      for (let k = 0; k < n; k++) {
        A[k][k] += 1e-10;
      }

      for (const m of models) {
        if (m.a === m.b) continue;

        const diode = [
          "led", "diode"
        ].includes(m.p.type);

        const on =
          diode && diodeMode.get(m.p.id);

        const resistance = diode
          ? (on ? 5 : 1e10)
          : m.r;

        if (!Number.isFinite(resistance)) continue;

        const g = 1 / Math.max(
          resistance,
          1e-6
        );

        const drop = on ? m.vf : 0;

        for (const [node, other, sign] of [
          [m.a, m.b, 1],
          [m.b, m.a, -1]
        ]) {
          const row = index.get(node);

          if (row === undefined) continue;

          A[row][row] += g;

          const col = index.get(other);

          if (col !== undefined) {
            A[row][col] -= g;
          } else {
            B[row] += g * (
              fixed.get(other) ?? 0
            );
          }

          B[row] += sign * g * drop;
        }
      }

      const result = gaussian(A, B);

      unknown.forEach((node, i) => {
        volts.set(
          node,
          Number.isFinite(result[i])
            ? result[i]
            : 0
        );
      });

      let changed = false;

      for (const m of models) {
        if (![
          "led", "diode"
        ].includes(m.p.type)) {
          continue;
        }

        const difference =
          (volts.get(m.a) || 0) -
          (volts.get(m.b) || 0);

        const shouldOn =
          difference >= m.vf - 0.001;

        if (
          Boolean(diodeMode.get(m.p.id)) !== shouldOn
        ) {
          diodeMode.set(m.p.id, shouldOn);
          changed = true;
        }
      }

      if (!changed) break;
    }

    const details = {};
    let signedSource = 0;

    const activeNets = new Set();

    for (const m of models) {
      const U =
        (volts.get(m.a) || 0) -
        (volts.get(m.b) || 0);

      let I = 0;

      if ([
        "led", "diode"
      ].includes(m.p.type)) {
        if (diodeMode.get(m.p.id)) {
          I = Math.max(
            0,
            (U - m.vf) / 5
          );
        }

      } else if (Number.isFinite(m.r)) {
        I = U / Math.max(m.r, 1e-6);
      }

      details[m.p.id] = {
        voltage: U,
        current: Math.abs(I),
        signedCurrent: I,
        power: Math.abs(U * I)
      };

      if (Math.abs(I) > 1e-7) {
        activeNets.add(m.a);
        activeNets.add(m.b);
      }

      if (m.a === plus) signedSource += I;
      if (m.b === plus) signedSource -= I;
    }

    const totalI = Math.abs(signedSource);

    if (totalI > 1e-7) {
      activeNets.add(plus);
      activeNets.add(minus);
    }

    details[src.id] = {
      voltage: src.value,
      current: totalI,
      power: src.value * totalI
    };

    const req = totalI > 1e-12
      ? src.value / totalI
      : Infinity;

    return {
      voltage: src.value,
      current: totalI,
      resistance: req,
      power: src.value * totalI,
      details,
      netOf,
      activeNets
    };
  }

  // ===== RUN SIMULATION =====

  function runSimulation() {
    solution = calculateDC();

    const error = solution.error;

    $("simulationStatus").textContent =
      error ? "Hisoblash xatosi" : "Hisoblandi";

    $("simulationStatus").classList.toggle(
      "error",
      Boolean(error)
    );

    $("simulationStatus").classList.toggle(
      "running",
      !error
    );

    if (error) {
      toast(error);
    } else {
      measurements.push({
        t: Date.now(),
        U: solution.voltage,
        I: solution.current * 1000
      });

      if (measurements.length > 120) {
        measurements.shift();
      }
    }

    renderBoard();
    renderReadings();
    drawTimeline();
    drawScope();
  }

  // ===== MEASUREMENTS =====

  function renderReadings() {
    const good = solution && !solution.error;

    $("measuredVoltage").textContent =
      good ? `${fmt(solution.voltage)} V` : "— V";

    $("measuredCurrent").textContent =
      good ? `${fmt(solution.current * 1000)} mA` : "— mA";

    $("measuredResistance").textContent =
      good ? `${fmt(solution.resistance)} Ω` : "— Ω";

    $("measuredPower").textContent =
      good ? `${fmt(solution.power)} W` : "— W";

    $("solverInformation").textContent =
      solution?.error ||
      "O‘quv DC modeli: bitta batareya, " +
      "rezistor, kalit, LED va boshqa " +
      "qo‘llab-quvvatlanadigan detallar. " +
      "Kondensator DC da uzilish sifatida olinadi.";
  }

  // ===== GRAPH ENGINE =====

  function graphBase(canvas) {
    const c = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;

    c.fillStyle = "#081b2a";
    c.fillRect(0, 0, w, h);

    c.strokeStyle = "#254253";
    c.lineWidth = 1;

    for (let x = 0; x <= w; x += w / 10) {
      c.beginPath();
      c.moveTo(x, 0);
      c.lineTo(x, h);
      c.stroke();
    }

    for (let y = 0; y <= h; y += h / 6) {
      c.beginPath();
      c.moveTo(0, y);
      c.lineTo(w, y);
      c.stroke();
    }

    return c;
  }

  function plotLine(ctx, values, max, color, width, height) {
    if (!values.length) return;

    if (values.length === 1) {
      values = [values[0], values[0]];
    }

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    values.forEach((v, i) => {
      const x = i / (values.length - 1) * width;

      const y =
        height - 20 -
        Math.max(0, v) /
        Math.max(max, 1e-12) *
        (height - 40);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }

  function drawTimeline() {
    const canvas = $("circuitGraph");
    const c = graphBase(canvas);

    const a = measurements.map(x => x.I);
    const b = measurements.map(x => x.U);

    plotLine(
      c, a, Math.max(1, ...a),
      "#32e5a4", canvas.width, canvas.height
    );

    plotLine(
      c, b, Math.max(1, ...b),
      "#5fa9ff", canvas.width, canvas.height
    );
  }

  // ===== OSCILLOSCOPE =====

  function drawScope() {
    const canvas = $("oscilloscopeCanvas");
    if (!canvas) return;

    const ctx = graphBase(canvas);
    const w = canvas.width;
    const h = canvas.height;

    const source = $("signalSource").value;

    if (source === "circuit") {
      const values = measurements.map(x => x.U);
      const currents = measurements.map(x => x.I);

      plotLine(
        ctx, values, Math.max(1, ...values),
        "#5fa9ff", w, h
      );

      plotLine(
        ctx, currents, Math.max(1, ...currents),
        "#32e5a4", w, h
      );

      $("oscilloscopeReadings").textContent =
        `Tarixiy o‘lchovlar: ${measurements.length} ta. ` +
        "U (V) va I (mA).";

      return;
    }

    const A = Number($("signalAmplitude").value);
    const f = Number($("signalFrequency").value);

    if (!valid(A) || !(f > 0)) {
      $("oscilloscopeReadings").textContent =
        "Amplituda ≥ 0 va chastota > 0 bo‘lishi kerak.";
      return;
    }

    const kind = $("signalType").value;

    ctx.beginPath();
    ctx.strokeStyle = "#32e5a4";
    ctx.lineWidth = 3;

    for (let x = 0; x < w; x++) {
      const t = 4 * x / w + animationTime;
      const phase = t * 2 * Math.PI;

      let signal = Math.sin(phase);

      if (kind === "square") {
        signal = signal >= 0 ? 1 : -1;
      }

      if (kind === "triangle") {
        signal =
          2 / Math.PI * Math.asin(Math.sin(phase));
      }

      const y =
        h / 2 -
        signal *
        Math.min(0.42 * h, A / Math.max(10, A) * 0.42 * h);

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.stroke();

    $("oscilloscopeReadings").textContent =
      `Umax = ${fmt(A)} V | ` +
      `f = ${fmt(f)} Hz | ` +
      `T = ${fmt(1000 / f)} ms`;
  }

  // ===== FILE EXPORT =====

  function exportText(
    filename,
    text,
    type = "text/plain"
  ) {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  // ===== CLEAR CIRCUIT =====

  function requestClear() {
    const dialog = $("confirmationDialog");

    $("confirmationTitle").textContent =
      "Sxemani tozalash";

    $("confirmationMessage").textContent =
      "Barcha detallar va simlar o‘chadi. " +
      "Undo orqali tiklash mumkin.";

    if (!dialog.showModal) {
      if (window.confirm("Sxema tozalansinmi?")) {
        clearBoard();
      }
      return;
    }

    dialog.addEventListener(
      "close",
      () => {
        if (dialog.returnValue === "confirm") {
          clearBoard();
        }
      },
      { once: true }
    );

    dialog.showModal();
  }

  function clearBoard() {
    commit();

    parts = [];
    wires = [];
    nextId = 1;

    selected = null;
    pending = null;
    solution = null;

    updateEverything();
  }

  function saveCircuit() {
    exportText(
      "electrotools-circuit.json",
      JSON.stringify(
        { version: 1, parts, wires },
        null,
        2
      ),
      "application/json"
    );
  }

  // ===== IMPORT CIRCUIT =====

  async function loadCircuit(file) {
    if (!file) return;

    try {
      const data = JSON.parse(await file.text());

      if (
        !Array.isArray(data.parts) ||
        !Array.isArray(data.wires) ||
        data.parts.length > 150 ||
        data.wires.length > 500
      ) {
        throw Error("Struktura xato");
      }

      const ids = new Set();

      const cleanParts = data.parts.map(p => {
        if (
          !definitions[p.type] ||
          !Number.isSafeInteger(p.id) ||
          p.id <= 0 ||
          ids.has(p.id) ||
          ![p.x, p.y, p.value].every(Number.isFinite) ||
          p.value < 0
        ) {
          throw Error("Detal xato");
        }

        ids.add(p.id);

        return {
          id: p.id,
          type: p.type,
          x: Math.max(75, Math.min(1120, p.x)),
          y: Math.max(80, Math.min(590, p.y)),
          value: p.value
        };
      });

      const cleanWires = data.wires.map(w => {
        const ok = [w.a, w.b].every(t =>
          t &&
          ids.has(t.id) &&
          (t.port === 0 || t.port === 1)
        );

        if (!ok) throw Error("Sim xato");

        return {
          a: {
            id: w.a.id,
            port: w.a.port
          },
          b: {
            id: w.b.id,
            port: w.b.port
          }
        };
      });

      commit();

      parts = cleanParts;
      wires = cleanWires;

      nextId =
        Math.max(0, ...cleanParts.map(p => p.id)) + 1;

      selected = null;
      pending = null;
      solution = null;

      updateEverything();
      toast("Sxema yuklandi");

    } catch (err) {
      toast("JSON yuklanmadi: " + err.message);
    }
  }

  // ===== SAFE SCIENTIFIC CALCULATOR PARSER =====
  // No eval() or Function().

  function calculateExpression(input) {
    const s = String(input)
      .replace(/\s+/g, "")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/π/g, "pi");

    let pos = 0;

    function primary() {
      if (s[pos] === "+") {
        pos++;
        return primary();
      }

      if (s[pos] === "-") {
        pos++;
        return -primary();
      }

      if (s[pos] === "(") {
        pos++;

        const v = expression();

        if (s[pos++] !== ")") {
          throw Error("Qavs yopilmagan");
        }

        return v;
      }

      const sub = s.slice(pos);

      const m = sub.match(
        /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i
      );

      if (m) {
        pos += m[0].length;
        return Number(m[0]);
      }

      const fn = sub.match(
        /^(sqrt|sin|cos|tan|log|ln|abs|pi|e)/i
      );

      if (fn) {
        pos += fn[0].length;

        const name = fn[0].toLowerCase();

        if (name === "pi") return Math.PI;
        if (name === "e") return Math.E;

        if (s[pos++] !== "(") {
          throw Error("Funksiya uchun qavs kerak");
        }

        const v = expression();

        if (s[pos++] !== ")") {
          throw Error("Qavs yopilmagan");
        }

        const map = {
          sqrt: Math.sqrt,
          sin: Math.sin,
          cos: Math.cos,
          tan: Math.tan,
          log: Math.log10,
          ln: Math.log,
          abs: Math.abs
        };

        return map[name](v);
      }

      throw Error("Noto‘g‘ri ifoda");
    }

    function power() {
      let x = primary();

      if (s[pos] === "^") {
        pos++;
        x = Math.pow(x, power());
      }

      return x;
    }

    function term() {
      let x = power();

      while (
        s[pos] === "*" ||
        s[pos] === "/"
      ) {
        const op = s[pos++];
        const y = power();

        if (op === "/" && y === 0) {
          throw Error("Nolga bo‘lish mumkin emas");
        }

        x = op === "*" ? x * y : x / y;
      }

      return x;
    }

    function expression() {
      let x = term();

      while (
        s[pos] === "+" ||
        s[pos] === "-"
      ) {
        const op = s[pos++];
        const y = term();

        x = op === "+" ? x + y : x - y;
      }

      return x;
    }

    const result = expression();

    if (
      pos !== s.length ||
      !Number.isFinite(result)
    ) {
      throw Error("Ifoda aniqlanmagan");
    }

    return result;
  }

  // END OF PART 1
  // DO NOT ADD })(); HERE.
  // PASTE PART 2 IMMEDIATELY BELOW.

  // ===== CALCULATORS =====

  const calculatorInfo = {
    scientific: {
      name: "Hisob-kitob kalkulyatori",
      cat: "basic"
    },
    ohm: {
      name: "Om qonuni — I = U / R",
      cat: "dc"
    },
    "series-resistance": {
      name: "Ketma-ket qarshilik",
      cat: "resistance"
    },
    "parallel-resistance": {
      name: "Parallel qarshilik",
      cat: "resistance"
    },
    "conductor-resistance": {
      name: "O‘tkazgich qarshiligi",
      cat: "resistance"
    },
    power: {
      name: "Elektr quvvati",
      cat: "dc"
    },
    "voltage-divider": {
      name: "Kuchlanish bo‘luvchi",
      cat: "dc"
    },
    "led-resistor": {
      name: "LED uchun rezistor",
      cat: "components"
    },
    "capacitive-reactance": {
      name: "Sig‘im reaktiv qarshiligi",
      cat: "ac"
    },
    "inductive-reactance": {
      name: "Induktiv reaktiv qarshilik",
      cat: "ac"
    },
    "rlc-resonance": {
      name: "RLC rezonans chastotasi",
      cat: "ac"
    },
    "resistor-colors": {
      name: "Rezistor rang halqalari",
      cat: "resistance"
    }
  };

  const calcFields = {
    scientific: [
      [
        "expression",
        "Ifoda",
        "2*(3+4)+sqrt(9)",
        "text"
      ]
    ],

    ohm: [
      [
        "mode",
        "Hisoblanadigan kattalik",
        "I",
        "select",
        ["I", "U", "R"]
      ],
      ["U", "Kuchlanish U (V)", 12],
      ["I", "Tok I (A)", 0.02],
      ["R", "Qarshilik R (Ω)", 330]
    ],

    "series-resistance": [
      [
        "list",
        "Qarshiliklar (Ω), vergul bilan",
        "100, 220, 330",
        "text"
      ]
    ],

    "parallel-resistance": [
      [
        "list",
        "Qarshiliklar (Ω), vergul bilan",
        "100, 220, 330",
        "text"
      ]
    ],

    "conductor-resistance": [
      ["rho", "Solishtirma qarshilik ρ (Ω·mm²/m)", 0.0175],
      ["l", "Uzunlik l (m)", 10],
      ["S", "Kesim S (mm²)", 1.5]
    ],

    power: [
      ["U", "Kuchlanish U (V)", 12],
      ["I", "Tok kuchi I (A)", 0.5]
    ],

    "voltage-divider": [
      ["U", "Manba kuchlanishi U (V)", 12],
      ["R1", "R₁ (Ω)", 1000],
      ["R2", "R₂ (Ω)", 2000]
    ],

    "led-resistor": [
      ["U", "Manba kuchlanishi (V)", 9],
      ["Uf", "LED to‘g‘ri kuchlanishi (V)", 2],
      ["mA", "Istalgan LED toki (mA)", 15]
    ],

    "capacitive-reactance": [
      ["f", "Chastota f (Hz)", 50],
      ["C", "Sig‘im C (µF)", 10]
    ],

    "inductive-reactance": [
      ["f", "Chastota f (Hz)", 50],
      ["L", "Induktivlik L (mH)", 100]
    ],

    "rlc-resonance": [
      ["L", "Induktivlik L (mH)", 100],
      ["C", "Sig‘im C (µF)", 10]
    ]
  };

  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "gray",
    "white"
  ];

  const colorUz = [
    "qora",
    "jigarrang",
    "qizil",
    "to‘q sariq",
    "sariq",
    "yashil",
    "ko‘k",
    "binafsha",
    "kulrang",
    "oq"
  ];

  function colorSelect(id, options, initial) {
    return `
      <label>
        ${id}
        <select id="${id}">
          ${options.map(x => `
            <option
              value="${x}"
              ${x === initial ? "selected" : ""}
            >
              ${esc(colorUz[colors.indexOf(x)] || x)}
            </option>
          `).join("")}
        </select>
      </label>
    `;
  }

  function renderCalculatorCards() {
    $("calculatorCount").textContent =
      Object.keys(calculatorInfo).length;
  }

  function openCalculator(key) {
    if (!calculatorInfo[key]) {
      return toast("Kalkulyator topilmadi");
    }

    pageTo("calculators");
    activeCalculator = key;

    $("activeCalculatorTitle").textContent =
      calculatorInfo[key].name;

    const form = $("calculatorForm");
    const action = $("calculateButton");
    const area = $("calculatorInputs");

    form.hidden = false;
    action.hidden = false;

    $("calculatorResult").textContent = "";

    if (key === "resistor-colors") {
      area.innerHTML =
        colorSelect("band0", colors, "brown") +
        colorSelect("band1", colors, "black") +
        colorSelect(
          "band2",
          [...colors, "gold", "silver"],
          "red"
        ) +
        colorSelect(
          "band3",
          ["brown", "red", "gold", "silver"],
          "gold"
        );

    } else {
      area.innerHTML = (calcFields[key] || [])
        .map(([id, title, value, type, options]) => {

          if (type === "select") {
            return `
              <label>
                ${esc(title)}
                <select id="calc_${id}">
                  ${options.map(o => `
                    <option ${value === o ? "selected" : ""}>
                      ${o}
                    </option>
                  `).join("")}
                </select>
              </label>
            `;
          }

          return `
            <label>
              ${esc(title)}
              <input
                id="calc_${id}"
                type="${type || "number"}"
                ${type === "text" ? "" : 'step="any"'}
                value="${esc(value)}"
                required
              >
            </label>
          `;
        })
        .join("");
    }

    if (key === "scientific") {
      const keys = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "(", ")",
        "sqrt(", "^", "+", "C"
      ];

      area.innerHTML += `
        <div
          class="calculator-keypad"
          style="grid-column:1/-1"
        >
          ${keys.map(v => `
            <button
              type="button"
              class="${"/*+-^".includes(v) ? "operator" : ""}"
              data-key="${esc(v)}"
            >${esc(v)}</button>
          `).join("")}
        </div>
      `;
    }

    area.querySelectorAll("[data-key]").forEach(b => {
      b.addEventListener("click", () => {
        const input = $("calc_expression");

        if (b.dataset.key === "C") {
          input.value = "";
        } else {
          input.value += b.dataset.key;
        }

        input.focus();
      });
    });

    area.querySelectorAll("select").forEach(e => {
      e.addEventListener("change", () => {
        if (key === "resistor-colors") {
          computeCalculator();
        }
      });
    });

    if (key === "resistor-colors") {
      computeCalculator();
    }

    $("calculatorResult").scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });
  }

  // ===== CALCULATOR OPERATIONS =====

  function computeCalculator() {
    const value = id =>
      Number($("calc_" + id)?.value);

    const positive = v =>
      Number.isFinite(v) && v > 0;

    const result = $("calculatorResult");

    try {
      let output = "";

      switch (activeCalculator) {

        // SCIENTIFIC
        case "scientific":
          output =
            "Natija = " +
            fmt(
              calculateExpression(
                $("calc_expression").value
              ),
              9
            );
          break;

        // OHM'S LAW
        case "ohm": {
          const mode = $("calc_mode").value;
          const U = value("U");
          const I = value("I");
          const R = value("R");

          if (mode === "I") {
            if (!positive(R) || !Number.isFinite(U)) {
              throw Error("R > 0 bo‘lishi kerak");
            }

            output =
              `I = U / R = ${fmt(U / R, 6)} A`;
          }

          if (mode === "U") {
            if (
              !Number.isFinite(I) ||
              !Number.isFinite(R)
            ) {
              throw Error("I va R son bo‘lishi kerak");
            }

            output =
              `U = I · R = ${fmt(I * R, 6)} V`;
          }

          if (mode === "R") {
            if (!positive(I) || !Number.isFinite(U)) {
              throw Error("I > 0 bo‘lishi kerak");
            }

            output =
              `R = U / I = ${fmt(U / I, 6)} Ω`;
          }

          break;
        }

        // SERIES AND PARALLEL RESISTANCE
        case "series-resistance":
        case "parallel-resistance": {
          const raw = $("calc_list").value;

          const values = raw
            .split(/[;,\s]+/)
            .filter(Boolean)
            .map(Number);

          if (
            !values.length ||
            values.some(x =>
              !Number.isFinite(x) || x < 0
            )
          ) {
            throw Error(
              "0 yoki musbat rezistor qiymatlarini kiriting"
            );
          }

          if (activeCalculator === "series-resistance") {
            const R = values.reduce(
              (a, b) => a + b,
              0
            );

            output =
              `R = Σ Rᵢ = ${fmt(R, 6)} Ω`;

          } else {
            const R = values.some(x => x === 0)
              ? 0
              : 1 / values.reduce(
                  (a, b) => a + 1 / b,
                  0
                );

            output =
              `R = 1 / Σ(1/Rᵢ) = ${fmt(R, 6)} Ω`;
          }

          break;
        }

        // CONDUCTOR RESISTANCE
        case "conductor-resistance": {
          const rho = value("rho");
          const l = value("l");
          const S = value("S");

          if (
            !valid(rho) ||
            !valid(l) ||
            !positive(S)
          ) {
            throw Error(
              "ρ va l ≥ 0, S > 0 bo‘lishi kerak"
            );
          }

          output =
            `R = ρ · l / S = ${fmt(rho * l / S, 6)} Ω\n` +
            "ρ: Ω·mm²/m, l: m, S: mm²";

          break;
        }

        // ELECTRICAL POWER
        case "power": {
          const U = value("U");
          const I = value("I");

          if (
            !Number.isFinite(U) ||
            !Number.isFinite(I)
          ) {
            throw Error("Qiymatlar xato");
          }

          output =
            `P = U · I = ${fmt(U * I, 6)} W`;
          break;
        }

        // VOLTAGE DIVIDER
        case "voltage-divider": {
          const U = value("U");
          const R1 = value("R1");
          const R2 = value("R2");

          if (
            !valid(R1) ||
            !valid(R2) ||
            R1 + R2 === 0 ||
            !Number.isFinite(U)
          ) {
            throw Error("R₁+R₂ > 0 bo‘lishi kerak");
          }

          output =
            "U₂ = U · R₂/(R₁+R₂) = " +
            `${fmt(U * R2 / (R1 + R2), 6)} V`;

          break;
        }

        // LED CURRENT LIMITING RESISTOR
        case "led-resistor": {
          const U = value("U");
          const Uf = value("Uf");
          const mA = value("mA");

          if (
            !positive(mA) ||
            !valid(Uf) ||
            !(U > Uf)
          ) {
            throw Error(
              "Uₛ > ULED va tok > 0 bo‘lishi kerak"
            );
          }

          const R = (U - Uf) / (mA / 1000);
          const P = (U - Uf) * mA / 1000;

          output =
            `R = ${fmt(R, 3)} Ω\n` +
            `P = ${fmt(P, 4)} W (rezistor)`;

          break;
        }

        // CAPACITIVE REACTANCE
        case "capacitive-reactance": {
          const f = value("f");
          const C = value("C") * 1e-6;

          if (!positive(f) || !positive(C)) {
            throw Error("f va C > 0 bo‘lishi kerak");
          }

          output =
            "Xc = 1/(2πfC) = " +
            `${fmt(1 / (2 * Math.PI * f * C), 6)} Ω`;

          break;
        }

        // INDUCTIVE REACTANCE
        case "inductive-reactance": {
          const f = value("f");
          const L = value("L") / 1000;

          if (!positive(f) || !positive(L)) {
            throw Error("f va L > 0 bo‘lishi kerak");
          }

          output =
            `XL = 2πfL = ${fmt(2 * Math.PI * f * L, 6)} Ω`;

          break;
        }

        // RLC RESONANCE
        case "rlc-resonance": {
          const L = value("L") / 1000;
          const C = value("C") * 1e-6;

          if (!positive(L) || !positive(C)) {
            throw Error("L va C > 0 bo‘lishi kerak");
          }

          const f0 =
            1 / (2 * Math.PI * Math.sqrt(L * C));

          output =
            `f₀ = 1/(2π√LC) = ${fmt(f0, 6)} Hz`;

          break;
        }

        // RESISTOR COLOR CODE
        case "resistor-colors": {
          const a = colors.indexOf(
            $("band0").value
          );

          const b = colors.indexOf(
            $("band1").value
          );

          const m = $("band2").value;
          const t = $("band3").value;

          const multiplier =
            m === "gold" ? 0.1 :
            m === "silver" ? 0.01 :
            10 ** colors.indexOf(m);

          const tolerance = {
            brown: 1,
            red: 2,
            gold: 5,
            silver: 10
          }[t];

          const R = (a * 10 + b) * multiplier;

          output =
            `R = ${fmt(R, 6)} Ω ±${tolerance}%`;

          break;
        }
      }

      result.textContent = output;

    } catch (err) {
      result.textContent =
        "Xatolik: " + err.message;
    }
  }

  // ===== FILTER CALCULATORS =====

  function filterCalculators() {
    const key =
      $("calculatorSearch").value.toLocaleLowerCase();

    const category = $("calculatorCategory").value;

    $$(".calculator-card").forEach(card => {
      const info =
        calculatorInfo[card.dataset.calculator];

      const term = (
        info?.name || card.textContent
      ).toLocaleLowerCase();

      card.hidden = !(
        term.includes(key) &&
        (
          category === "all" ||
          card.dataset.category === category
        )
      );
    });
  }

  // ===== FORMULA LIBRARY =====

  const additionalFormulas = [
    [
      "Kuchlanish bo‘luvchi",
      "U₂ = U · R₂ / (R₁ + R₂)",
      "dc",
      "voltage-divider"
    ],
    [
      "LED cheklovchi rezistor",
      "R = (Uₛ − ULED) / I",
      "resistance",
      "led-resistor"
    ],
    [
      "Sig‘im reaktiv qarshiligi",
      "Xc = 1 / (2πfC)",
      "ac",
      "capacitive-reactance"
    ],
    [
      "Induktiv reaktiv qarshilik",
      "XL = 2πfL",
      "ac",
      "inductive-reactance"
    ],
    [
      "RLC rezonans chastotasi",
      "f₀ = 1 / (2π√(LC))",
      "ac",
      "rlc-resonance"
    ],
    [
      "Ketma-ket RLC impedansi",
      "|Z| = √(R² + (XL − Xc)²)",
      "ac",
      null
    ],
    [
      "RC vaqt doimiysi",
      "τ = R · C",
      "ac",
      null
    ],
    [
      "RL vaqt doimiysi",
      "τ = L / R",
      "ac",
      null
    ],
    [
      "Kondensatordagi zaryad",
      "Q = C · U",
      "dc",
      null
    ],
    [
      "Kondensatordagi energiya",
      "E = C · U² / 2",
      "power",
      null
    ],
    [
      "Induktordagi energiya",
      "E = L · I² / 2",
      "power",
      null
    ],
    [
      "Elektr energiyasi",
      "E = P · t",
      "power",
      null
    ],
    [
      "Chastota va davr",
      "f = 1 / T",
      "ac",
      null
    ],
    [
      "Sinus RMS kuchlanish",
      "Ueff = Umax / √2",
      "ac",
      null
    ],
    [
      "Sinus RMS tok",
      "Ieff = Imax / √2",
      "ac",
      null
    ],
    [
      "Samaradorlik",
      "η = Pchiq / Pkir · 100%",
      "power",
      null
    ],
    [
      "Elektr o‘tkazuvchanlik",
      "G = 1 / R",
      "resistance",
      null
    ],
    [
      "Tok zichligi",
      "J = I / S",
      "dc",
      null
    ],
    [
      "Om qonuni (kuchlanish)",
      "U = I · R",
      "dc",
      "ohm"
    ],
    [
      "Om qonuni (qarshilik)",
      "R = U / I",
      "resistance",
      "ohm"
    ]
  ];

  function renderFormulaCards() {
    $("additionalFormulas").innerHTML =
      additionalFormulas
        .map(([title, formula, cat, key]) => `
          <article
            class="formula-card"
            data-category="${cat}"
          >
            <h2>${esc(title)}</h2>

            <div class="formula-equation">
              <code>${esc(formula)}</code>
            </div>

            ${key ? `
              <button
                type="button"
                class="btn btn-secondary"
                data-open-calculator="${key}"
              >Hisoblash</button>
            ` : ""}
          </article>
        `)
        .join("");

    $("formulaCount").textContent =
      $$("#formulaGrid .formula-card").length +
      additionalFormulas.length;

    filterFormulas();
  }

  function filterFormulas() {
    const key =
      $("formulaSearch").value.toLocaleLowerCase();

    const category = $("formulaCategory").value;

    $$(
      "#formulaGrid .formula-card, " +
      "#additionalFormulas .formula-card"
    ).forEach(card => {
      const text = card.textContent.toLocaleLowerCase();

      card.hidden = !(
        text.includes(key) &&
        (
          category === "all" ||
          card.dataset.category === category
        )
      );
    });
  }

  // ===== COMPONENT LIBRARY =====

  function renderLibrary() {
    const term =
      $("componentLibrarySearch").value.toLocaleLowerCase();

    $("componentLibraryGrid").innerHTML =
      Object.entries(definitions)
        .filter(([type]) =>
          partName(type).toLocaleLowerCase().includes(term)
        )
        .map(([type, d]) => `
          <button
            type="button"
            class="component-library-card"
            data-library="${type}"
          >
            <span
              class="preview"
              style="font-size:45px"
            >${d.icon}</span>

            <strong>${esc(partName(type))}</strong>

            <small>
              ${esc(d.cat)} · ${esc(d.unit || "—")}
            </small>
          </button>
        `)
        .join("");
  }

  // ===== EQUIPMENT WORKSPACE =====

  function openEquipment(type) {
    const area = $("equipmentWorkspace");

    if (type === "generator") {
      pageTo("oscilloscope");
      $("signalSource").value = "generator";
      drawScope();
      return;
    }

    if (type === "multimeter") {
      area.innerHTML = `
        <h2>Virtual multimetr</h2>

        <p>
          Avval sxemada «Simulyatsiya» tugmasini bosing.
        </p>

        <div class="lab-result">
          U = ${
            solution && !solution.error
              ? fmt(solution.voltage)
              : "—"
          } V

          <br>

          I = ${
            solution && !solution.error
              ? fmt(solution.current * 1000)
              : "—"
          } mA

          <br>

          R = ${
            solution && !solution.error
              ? fmt(solution.resistance)
              : "—"
          } Ω
        </div>
      `;
    }

    if (type === "power-supply") {
      const battery = parts.find(
        p => p.type === "battery"
      );

      area.innerHTML = `
        <h2>Virtual DC manba</h2>

        <label>
          Kuchlanish U (V)

          <input
            id="powerVoltage"
            type="number"
            min="0.1"
            max="100"
            step="0.5"
            value="${battery?.value || 9}"
          >
        </label>

        <button
          type="button"
          class="btn btn-primary"
          id="applyPower"
        >
          Sxemaga qo‘llash
        </button>
      `;

      $("applyPower").onclick = () => {
        const v = Number($("powerVoltage").value);

        if (!(v > 0 && v <= 100)) {
          return toast("0 < U ≤ 100 V");
        }

        commit();

        const b = parts.find(
          p => p.type === "battery"
        );

        if (b) {
          b.value = v;
        } else {
          addPart("battery", 130, 290, v);
        }

        solution = null;
        updateEverything();

        pageTo("builder");
        runSimulation();
      };
    }
  }

  // ===== LABORATORIES =====

  function openLab(type) {
    if (type === "led") {
      return loadDemo("led");
    }

    if (type === "voltage-divider") {
      return loadDemo("voltage-divider");
    }

    if (type === "sensor") {
      return loadDemo("sensor");
    }

    const area = $("laboratoryWorkspace");

    const configs = {
      rc: {
        title: "RC zaryadlanish",
        fields: [
          ["U", "Manba U (V)", 9],
          ["R", "R (Ω)", 1000],
          ["C", "C (µF)", 100]
        ]
      },

      rlc: {
        title: "RLC rezonansi",
        fields: [
          ["U", "U (V RMS)", 12],
          ["R", "R (Ω)", 100],
          ["L", "L (mH)", 100],
          ["C", "C (µF)", 10],
          ["f", "f (Hz)", 159]
        ]
      },

      transistor: {
        title: "BJT soddalashtirilgan modeli",
        fields: [
          ["Ib", "Baza toki Ib (mA)", 0.1],
          ["beta", "Tok kuchaytirish β", 100],
          ["Rc", "Kollektor R (Ω)", 1000],
          ["U", "Manba U (V)", 12]
        ]
      },

      pwm: {
        title: "PWM signal",
        fields: [
          ["U", "Amplituda U (V)", 5],
          ["f", "Chastota f (Hz)", 100],
          ["duty", "To‘ldirish koeffitsienti (%)", 50]
        ]
      },

      logic: {
        title: "Mantiqiy elementlar",
        fields: [
          ["a", "Kirish A (0 / 1)", 1],
          ["b", "Kirish B (0 / 1)", 0]
        ]
      }
    };

    const config = configs[type];
    if (!config) return;

    area.innerHTML = `
      <h2>${esc(config.title)}</h2>

      <div class="lab-controls">
        ${type === "logic" ? `
          <label class="lab-control">
            Element
            <select id="labGate">
              <option>AND</option>
              <option>OR</option>
              <option>NOT</option>
              <option>NAND</option>
              <option>NOR</option>
              <option>XOR</option>
              <option>XNOR</option>
            </select>
          </label>
        ` : ""}

        ${config.fields.map(([id, name, value]) => `
          <label class="lab-control">
            ${esc(name)}

            <input
              data-lab-input="${id}"
              type="number"
              step="any"
              value="${value}"
            >
          </label>
        `).join("")}
      </div>

      <div id="labOutput" class="lab-result"></div>

      <canvas
        id="labCanvas"
        width="800"
        height="240"
        style="
          display:block;
          width:100%;
          height:auto;
          background:#081b2a;
          border-radius:10px;
          margin-top:15px;
        "
      ></canvas>
    `;

    const compute = () => {
      const get = id =>
        Number(
          area.querySelector(
            `[data-lab-input="${id}"]`
          ).value
        );

      const out = $("labOutput");
      const canvas = $("labCanvas");
      const ctx = graphBase(canvas);

      try {

        // RC
        if (type === "rc") {
          const U = get("U");
          const R = get("R");
          const C = get("C") * 1e-6;

          if (!valid(U) || !(R > 0 && C > 0)) {
            throw Error(
              "U ≥ 0, R > 0, C > 0 bo‘lishi kerak"
            );
          }

          const tau = R * C;

          out.textContent =
            `τ = R·C = ${fmt(tau, 6)} s\n` +
            "Uc(t) = U(1 − e^(−t/τ))";

          const values = [];

          for (let i = 0; i < 100; i++) {
            values.push(
              U * (1 - Math.exp(-5 * i / 99))
            );
          }

          plotLine(
            ctx, values, Math.max(U, 1),
            "#32e5a4", canvas.width, canvas.height
          );
        }

        // RLC
        else if (type === "rlc") {
          const U = get("U");
          const R = get("R");
          const L = get("L") / 1000;
          const C = get("C") * 1e-6;
          const f = get("f");

          if (
            !valid(U) ||
            ![R, L, C, f].every(x => x > 0)
          ) {
            throw Error(
              "R, L, C, f > 0 bo‘lishi kerak"
            );
          }

          const f0 =
            1 / (2 * Math.PI * Math.sqrt(L * C));

          const Z = Math.hypot(
            R,
            2 * Math.PI * f * L -
            1 / (2 * Math.PI * f * C)
          );

          out.textContent =
            `f₀ = ${fmt(f0)} Hz\n` +
            `Z = ${fmt(Z)} Ω\n` +
            `I = ${fmt(U / Z * 1000)} mA RMS`;

          const values = [];

          for (let i = 0; i < 100; i++) {
            const hz = f0 * (0.2 + 2.8 * i / 99);

            values.push(
              R / Math.hypot(
                R,
                2 * Math.PI * hz * L -
                1 / (2 * Math.PI * hz * C)
              )
            );
          }

          plotLine(
            ctx, values, 1,
            "#32e5a4", canvas.width, canvas.height
          );
        }

        // BJT
        else if (type === "transistor") {
          const Ib = get("Ib") / 1000;
          const beta = get("beta");
          const Rc = get("Rc");
          const U = get("U");

          if (
            !valid(Ib) ||
            !valid(beta) ||
            !(Rc > 0) ||
            !valid(U)
          ) {
            throw Error("Qiymatlar mos emas");
          }

          const Ic = Math.min(
            beta * Ib,
            U / Rc
          );

          out.textContent =
            `Ic ≈ min(β·Ib, U/Rc)\n` +
            `Ic ≈ ${fmt(Ic * 1000)} mA\n` +
            "Ideal model: VCE(sat) hisobga olinmagan.";

          plotLine(
            ctx,
            [Ic * 1000, Ic * 1000],
            Math.max(1, Ic * 1000),
            "#32e5a4",
            canvas.width,
            canvas.height
          );
        }

        // PWM
        else if (type === "pwm") {
          const U = get("U");
          const f = get("f");
          const duty = get("duty");

          if (
            !valid(U) ||
            !(f > 0) ||
            duty < 0 ||
            duty > 100
          ) {
            throw Error(
              "U ≥ 0, f > 0, 0 ≤ duty ≤ 100"
            );
          }

          out.textContent =
            `T = ${fmt(1000 / f)} ms\n` +
            `Uo‘rt = ${fmt(U * duty / 100)} V`;

          const values = Array.from(
            { length: 120 },
            (_, i) =>
              (i % 30) / 30 < duty / 100 ? U : 0
          );

          plotLine(
            ctx, values, Math.max(U, 1),
            "#32e5a4", canvas.width, canvas.height
          );
        }

        // LOGIC GATES
        else if (type === "logic") {
          const A = get("a") ? 1 : 0;
          const B = get("b") ? 1 : 0;

          const gate = $("labGate").value;

          const table = {
            AND: A & B,
            OR: A | B,
            NOT: 1 - A,
            NAND: 1 - (A & B),
            NOR: 1 - (A | B),
            XOR: A ^ B,
            XNOR: 1 - (A ^ B)
          };

          out.textContent =
            `${gate}: A=${A}, B=${B}, ` +
            `chiqish=${table[gate]}`;

          plotLine(
            ctx,
            [table[gate], table[gate]],
            1,
            "#32e5a4",
            canvas.width,
            canvas.height
          );
        }

      } catch (err) {
        out.textContent =
          "Xatolik: " + err.message;
      }
    };

    area.querySelectorAll("input,select")
      .forEach(el =>
        el.addEventListener("input", compute)
      );

    compute();
  }

  // ===== LAB NOTEBOOK =====

  function persistNotes() {
    store("et-notes", notes);
    renderNotes();
  }

  function renderNotes() {
    $("experimentCount").textContent = notes.length;

    $("savedExperiments").innerHTML =
      notes.length
        ? notes.map((n, i) => `
          <article class="saved-experiment">
            <h3>${esc(n.title)}</h3>
            <small>${esc(n.date)}</small>
            <p>${esc(n.details)}</p>

            <button
              type="button"
              class="btn btn-danger btn-small"
              data-delete-note="${i}"
            >
              O‘chirish
            </button>
          </article>
        `).join("")
        : "<p>Hozircha yozuvlar yo‘q.</p>";
  }

  function captureMeasurement() {
    if (!solution || solution.error) {
      return toast("Avval sxemani hisoblang");
    }

    $("experimentVoltage").value = solution.voltage;
    $("experimentCurrent").value = solution.current;

    $("experimentResistance").value =
      Number.isFinite(solution.resistance)
        ? solution.resistance
        : "";

    toast("O‘lchovlar jurnalga ko‘chirildi");
  }

  function addNote(event) {
    event.preventDefault();

    const title =
      $("experimentTitle").value.trim();

    if (!title) return;

    const date =
      $("experimentDate").value ||
      new Date().toISOString().slice(0, 10);

    const details = [
      `U = ${$("experimentVoltage").value || "—"} V`,
      `I = ${$("experimentCurrent").value || "—"} A`,
      `R = ${$("experimentResistance").value || "—"} Ω`,
      $("experimentNotes").value.trim()
    ].join("\n");

    notes.unshift({
      title,
      date,
      details
    });

    notes = notes.slice(0, 100);

    persistNotes();
    toast("Tajriba saqlandi");
  }

  // ===== INITIALIZE ALL BUTTONS =====

  function init() {
    changeTheme();

    $("language").value = lang;

    // BRAND
    $("brandHome").onclick = () =>
      pageTo("home");

    // SIDEBAR
    $("sidebarToggle").onclick = () => {
      const open =
        $("sidebar").classList.toggle("open");

      $("sidebarToggle").setAttribute(
        "aria-expanded",
        String(open)
      );
    };

    // LANGUAGE
    $("language").onchange = e => {
      lang = e.target.value;

      store("et-language", lang);
      changeLanguage();
    };

    // THEME
    $("themeToggle").onclick = () => {
      theme = theme === "light"
        ? "dark"
        : "light";

      store("et-theme", theme);
      changeTheme();

      drawTimeline();
      drawScope();
    };

    // DELEGATED BUTTONS
    document.addEventListener("click", e => {
      const target = e.target.closest("button");

      if (!target) return;

      if (target.dataset.page) {
        pageTo(target.dataset.page);
      }

      if (target.dataset.go) {
        pageTo(target.dataset.go);
      }

      if (target.dataset.add) {
        selectedType = target.dataset.add;
        selected = null;

        renderPalette();

        $("wireMessage").textContent =
          "Doska ustiga bosing";
      }

      if (target.dataset.openCalculator) {
        openCalculator(
          target.dataset.openCalculator
        );
      }

      if (target.dataset.lab) {
        openLab(target.dataset.lab);
      }

      if (target.dataset.equipmentOpen) {
        openEquipment(
          target.dataset.equipmentOpen
        );
      }

      if (target.dataset.library) {
        const type = target.dataset.library;

        $("componentInformation").innerHTML = `
          <h2>${esc(partName(type))}</h2>
          <p>
            Kategoriya: ${esc(definitions[type].cat)}
            <br>
            Standart qiymat:
            ${definitions[type].value}
            ${esc(definitions[type].unit)}
          </p>
        `;
      }

      if (
        target.dataset.deleteNote !== undefined
      ) {
        const i = Number(target.dataset.deleteNote);

        if (Number.isInteger(i)) {
          notes.splice(i, 1);
          persistNotes();
        }
      }
    });

    // QUICK START
    $("quickLed").onclick = () =>
      loadDemo("led");

    $("quickDivider").onclick = () =>
      loadDemo("voltage-divider");

    $("quickMath").onclick = () =>
      openCalculator("scientific");

    // COMPONENT PALETTE
    $("componentSearch").oninput =
      renderPalette;

    $$("[data-component-category]").forEach(b => {
      b.onclick = () => {
        selectedCategory =
          b.dataset.componentCategory;

        renderPalette();
      };
    });

    // UNDO / REDO
    $("undoButton").onclick = stepBack;
    $("redoButton").onclick = stepForward;

    // COMPONENT ACTIONS
    $("duplicateButton").onclick =
      duplicateSelected;

    $("deleteSelectedButton").onclick =
      deleteSelected;

    $("clearCircuitButton").onclick =
      requestClear;

    // CANCEL WIRE
    $("cancelWireButton").onclick = () => {
      pending = null;

      $("wireMessage").textContent =
        "Sim bekor qilindi";

      renderBoard();
    };

    // RESET VIEW
    $("resetZoomButton").onclick = () => {
      $("circuitBoard").setAttribute(
        "viewBox",
        "0 0 1200 650"
      );

      toast("Masshtab 100%");
    };

    // SCHEMATIC / PHYSICAL MODE
    $("viewModeButton").onclick = () => {
      physical = !physical;

      $("viewModeButton").textContent =
        physical
          ? "Sxematik ko‘rinish"
          : "Fizik ko‘rinish";

      renderBoard();
    };

    // SIMULATE
    $("simulateButton").onclick =
      runSimulation;

    // SAVE / LOAD
    $("saveCircuitButton").onclick =
      saveCircuit;

    $("loadCircuitButton").onclick = () =>
      $("circuitFileInput").click();

    $("circuitFileInput").onchange = e => {
      loadCircuit(e.target.files?.[0]);
      e.target.value = "";
    };

    // GRAPH
    $("clearGraphButton").onclick = () => {
      measurements = [];

      drawTimeline();
      drawScope();
    };

    $("exportGraphButton").onclick = () => {
      const csv =
        "timestamp,U_V,I_mA\n" +
        measurements.map(m =>
          `${new Date(m.t).toISOString()},${m.U},${m.I}`
        ).join("\n");

      exportText(
        "circuit-graph.csv",
        csv,
        "text/csv"
      );
    };

    // CALCULATORS
    $("calculatorSearch").oninput =
      filterCalculators;

    $("calculatorCategory").onchange =
      filterCalculators;

    $("calculatorForm").onsubmit = e => {
      e.preventDefault();
      computeCalculator();
    };

    $("resetCalculatorButton").onclick = () =>
      openCalculator(activeCalculator);

    // FORMULAS
    $("formulaSearch").oninput =
      filterFormulas;

    $("formulaCategory").onchange =
      filterFormulas;

    // COMPONENT LIBRARY
    $("componentLibrarySearch").oninput =
      renderLibrary;

    // OSCILLOSCOPE
    $("signalSource").onchange =
      drawScope;

    [
      "signalType",
      "signalAmplitude",
      "signalFrequency"
    ].forEach(id => {
      $(id).addEventListener(
        "input",
        drawScope
      );
    });

    $("pauseOscilloscope").onclick = () => {
      paused = !paused;

      $("pauseOscilloscope").textContent =
        paused
          ? "Davom ettirish"
          : "Pauza";
    };

    // LAB NOTEBOOK
    $("notebookForm").onsubmit =
      addNote;

    $("captureMeasurementsButton").onclick =
      captureMeasurement;

    $("exportNotebookButton").onclick = () => {
      const text = notes.map(n =>
        `${n.title}\n${n.date}\n${n.details}\n----`
      ).join("\n\n");

      exportText(
        "laboratoriya-jurnali.txt",
        text
      );
    };

    // GLOBAL SEARCH
    $("globalSearch").addEventListener(
      "keydown",
      e => {
        if (e.key !== "Enter") return;

        const q = e.target.value.trim();
        if (!q) return;

        if (/formula|om|qarshilik|ohm/i.test(q)) {
          pageTo("formulas");

          $("formulaSearch").value = q;
          filterFormulas();

        } else if (/led|labor|rc|rlc/i.test(q)) {
          pageTo("laboratories");

        } else {
          pageTo("calculators");

          $("calculatorSearch").value = q;
          filterCalculators();
        }
      }
    );

    // KEYBOARD SHORTCUTS
    document.addEventListener("keydown", e => {
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          document.activeElement?.tagName
        )
      ) {
        return;
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        stepBack();
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "y"
      ) {
        e.preventDefault();
        stepForward();
      }

      if (
        (e.key === "Delete" ||
         e.key === "Backspace") &&
        currentPage === "builder"
      ) {
        deleteSelected();
      }

      if (e.key === "Escape") {
        pending = null;
        selectedType = null;

        renderBoard();
      }
    });

    // INITIAL RENDERING
    configureBoard();
    renderFormulaCards();
    renderCalculatorCards();
    changeLanguage();
    renderNotes();
    updateEverything();

    $("experimentDate").value =
      new Date().toISOString().slice(0, 10);

    // INITIAL EXAMPLE
    pageTo("home");
    loadDemo("led");
    pageTo("home");

    drawTimeline();

    // OSCILLOSCOPE ANIMATION
    const frame = () => {
      if (
        !paused &&
        currentPage === "oscilloscope" &&
        $("signalSource").value === "generator"
      ) {
        animationTime += 0.006;
        drawScope();
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  // ===== START APPLICATION =====

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }

})(); // END OF ELECTROTOOLS STUDIO 5
