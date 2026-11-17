"use strict";
/* ElectroTools LAB 2 — offline, dependency-free education app */
const $ = id => document.getElementById(id);
const $$ = selector => Array.from(document.querySelectorAll(selector));
const UI = {
 uz: {
 navigation:"BO‘LIMLAR",home:"Bosh sahifa",builder:"Sxema yig‘ish",labs:"Laboratoriyalar",tools:"Uskuna va kalkulyatorlar",scope:"Ossillograf",study:"ELEKTRONIKA LABORATORIYASI",disclaimer:"O‘quv simulyatori. Hisoblashlar soddalashtirilgan va haqiqiy elektr montaji uchun qo‘llanma emas.",welcome:"Elektronika laboratoriyasi va hisoblash uskunalari",welcomeDesc:"Sxema yig‘ing, detallarni ulang, kuchlanish va tokni o‘lchang, grafiklarni kuzating.",startBuilding:"Sxema yig‘ishni boshlash",modules:"Laboratoriya modullari",builderDesc:"Sim bilan ulash, Undo/Redo va hisoblash",labsDesc:"LED, sensor, RLC, tranzistor, mantiq",toolsDesc:"Om, BJT, RMS, reaktans va boshqalar",scopeDesc:"Zanjir signali va signal generatori",supportedTitle:"Ishlash imkoniyatlari",supportedText:"DC hisoblash: bitta batareya, rezistor, LED, kalit, lampa, voltmetr, ampermetr, LDR va NTC. AC/RLC, BJT hamda mantiqiy elementlar uchun alohida tajribalar mavjud.",builderHelp:"Detalni tanlab maydonga bosing. Kontaktlarni navbat bilan bosib sim ulang. Detallarni sudrang.",undo:"Ortga",redo:"Oldinga",deleteSelected:"Tanlanganni o‘chirish",clearAll:"Hammasini tozalash",showSchematic:"Sxema ko‘rinishi",showPhysical:"Fizik ko‘rinish",save:"Saqlash",load:"Yuklash",simulate:"▶ Simulyatsiya",stop:"■ To‘xtatish",components:"Detallar va uskunalar",paletteHelp:"Detalni bosing, so‘ng doskaga bosing. Tanlangan detalni Delete tugmasi bilan o‘chiring.",loadDemo:"LED namunasini ochish",wireHint:"Ulash uchun 2 ta kontaktni bosing",cancel:"Bekor qilish",flowLegend:"Yashil animatsiya: tok yo‘li (taxminiy)",offLegend:"Kulrang: faol emas",liveGraph:"Jonli grafik: kuchlanish va tok",graphHelp:"Yashil — batareya toki (mA), ko‘k — batareya kuchlanishi (V). Qiymat o‘zgarsa grafik yangilanadi.",resetGraph:"Grafikni tozalash",properties:"Detal xususiyatlari",selectComponent:"Detalni tanlang",measurements:"O‘lchovlar",labsIntro:"Tayyor tajribani tanlang; ba'zilari sxema muharririda, boshqalari interaktiv hisoblagichlarda ochiladi.",labLed:"LED va kalit",labDivider:"Kuchlanish bo‘luvchi",labLdr:"Fotorezistor (LDR)",labRlc:"Series RLC",labLogic:"Mantiqiy elementlar",labBjt:"BJT tranzistor",chooseLab:"Yuqoridan laboratoriya tanlang",toolsIntro:"Electronics Toolbox uslubidagi mustaqil hisoblash uskunalari.",chooseTool:"Hisoblash uskunaini tanlang",scopeIntro:"Hisoblangan DC o‘lchovlar tarixini yoki mustaqil signal generatorini ko‘ring.",source:"Manba",circuitHistory:"Sxema o‘lchovlari",generator:"Signal generatori",waveform:"Signal turi",amplitude:"Amplituda (V)",frequency:"Chastota (Hz)",pause:"To‘xtatish",resume:"Davom ettirish",value:"Qiymat",brightness:"Yorug‘lik",temperature:"Harorat",voltage:"Kuchlanish",current:"Tok",power:"Quvvat",resistance:"Qarshilik",output:"Chiqish",selectSecond:"Ikkinchi kontaktni tanlang",connected:"Sim ulandi",ready:"Tayyor",running:"Hisoblash yoqilgan",paused:"Hisoblash to‘xtagan",noSelection:"Avval detal yoki simni tanlang",confirmClear:"Barcha detallarni va simlarni o‘chirishga rozimisiz? Bu amalni Undo bilan qaytarish mumkin.",empty:"Sxema bo‘sh",oneSource:"DC hisoblash uchun bitta batareya kerak",unsupported:"Bu detal erkin DC hisoblashda qo‘llanmaydi. Uning maxsus laboratoriyasidan foydalaning:",short:"Batareyaning musbat va manfiy qutblari to‘g‘ridan-to‘g‘ri ulangan",noPath:"Yopiq tok yo‘li topilmadi",solved:"DC hisoblandi",highCurrent:"EHTIYOT: hisoblangan tok juda yuqori; bu faqat o‘quv modeli",selectWire:"Sim tanlandi",deleted:"O‘chirildi",nothingUndo:"Qaytariladigan o‘zgarish yo‘q",nothingRedo:"Takrorlanadigan o‘zgarish yo‘q",invalidFile:"JSON fayli noto‘g‘ri",saved:"Sxema saqlandi",loaded:"Sxema yuklandi",invalidValue:"To‘g‘ri qiymat kiriting",probeNote:"Grafikdagi tok — batareya toki, simlardagi yo‘nalish esa faqat tasviriy.",component:"Detal",delete:"Detalni o‘chirish",open:"OCHIQ",closed:"YOPIQ",on:"YONIQ",off:"O‘CHIQ",battery:"Batareya",resistor:"Rezistor",led:"Svetodiod",lamp:"Lampa",switch:"Kalit",capacitor:"Kondensator",inductor:"G‘altak",voltmeter:"Voltmetr",ammeter:"Ampermetr",diode:"Diod",ldr:"Fotorezistor",ntc:"Termistor",transistor:"Tranzistor",opamp:"Operatsion kuchaytirgich",transformer:"Transformator",acsource:"AC generator",ground:"Yerga ulash",ohm:"Om qonuni",divider:"Kuchlanish bo‘luvchi",reactance:"Reaktans",rescolors:"Rezistor ranglari",ledcalc:"LED rezistori",rms:"RMS qiymatlar",db:"dB va kuchaytirish",freqcalc:"Chastota va davr",bjtcalc:"BJT hisoblash",numbers:"Son tizimlari",rlccalc:"RLC rezonans",logiccalc:"Logic gates",calculate:"Hisoblash",historyEmpty:"Avval sxemani simulyatsiya qiling",signalNote:"Signal generatori mustaqil o‘quv signali, sxemadan o‘lchanmagan",meterNote:"Voltmetr juda katta qarshilikli, ampermetr juda kichik qarshilikli deb olinadi."
 },
 en: {
 navigation:"NAVIGATION",home:"Home",builder:"Circuit Builder",labs:"Laboratories",tools:"Tools & Calculators",scope:"Oscilloscope",study:"ELECTRONICS WORKBENCH",disclaimer:"Educational simulation with simplified models. Not instructions for physical electrical wiring.",welcome:"Electronics tools and virtual laboratory",welcomeDesc:"Build circuits, connect parts, measure current and voltage, and view graphs.",startBuilding:"Open circuit builder",modules:"Laboratory modules",builderDesc:"Wiring, undo/redo and calculations",labsDesc:"LED, sensors, RLC, transistors and logic",toolsDesc:"Ohm, BJT, RMS, reactance and more",scopeDesc:"Circuit signals and signal generator",supportedTitle:"Supported features",supportedText:"DC solver: one battery, resistors, LED, switch, lamp, voltmeter, ammeter, LDR and NTC. Separate AC/RLC, BJT and logic experiments are available.",builderHelp:"Select a component and click the board. Click two terminals to connect them. Drag parts to move.",undo:"Undo",redo:"Redo",deleteSelected:"Delete selected",clearAll:"Clear all",showSchematic:"Schematic view",showPhysical:"Physical view",save:"Save",load:"Open",simulate:"▶ Simulate",stop:"■ Stop",components:"Components & Instruments",paletteHelp:"Select a component, then click the board. Press Delete to remove the selected part.",loadDemo:"Load LED example",wireHint:"Click two terminals to connect",cancel:"Cancel",flowLegend:"Green animation: approximate current path",offLegend:"Gray: inactive",liveGraph:"Live chart: voltage and current",graphHelp:"Green: battery current (mA); blue: supply voltage (V). Changes update the graph.",resetGraph:"Clear graph",properties:"Component properties",selectComponent:"Select a component",measurements:"Measurements",labsIntro:"Choose a guided experiment. Some open in the builder; others use interactive calculators.",labLed:"LED and switch",labDivider:"Voltage divider",labLdr:"Photoresistor (LDR)",labRlc:"Series RLC",labLogic:"Logic gates",labBjt:"BJT Transistor",chooseLab:"Choose an experiment above",toolsIntro:"Independent calculations inspired by electronics toolbox apps.",chooseTool:"Choose a calculator",scopeIntro:"View actual calculated DC measurement history or an independent signal generator.",source:"Source",circuitHistory:"Circuit measurements",generator:"Signal generator",waveform:"Waveform",amplitude:"Amplitude (V)",frequency:"Frequency (Hz)",pause:"Pause",resume:"Resume",value:"Value",brightness:"Light",temperature:"Temperature",voltage:"Voltage",current:"Current",power:"Power",resistance:"Resistance",output:"Output",selectSecond:"Select the second terminal",connected:"Wire connected",ready:"Ready",running:"Simulation active",paused:"Simulation stopped",noSelection:"Select a component or wire first",confirmClear:"Remove every component and wire? You can undo this action.",empty:"Board is empty",oneSource:"DC analysis requires exactly one battery",unsupported:"This component is not supported by the free-form DC solver. Use its separate lab:",short:"Battery positive and negative are directly connected",noPath:"No closed current path",solved:"DC calculation completed",highCurrent:"CAUTION: estimated current is very high; educational model only",selectWire:"Wire selected",deleted:"Deleted",nothingUndo:"Nothing to undo",nothingRedo:"Nothing to redo",invalidFile:"Invalid JSON circuit",saved:"Circuit saved",loaded:"Circuit loaded",invalidValue:"Enter a valid value",probeNote:"Graph current is source current; animated wire direction is illustrative.",component:"Component",delete:"Delete component",open:"OPEN",closed:"CLOSED",on:"ON",off:"OFF",battery:"Battery",resistor:"Resistor",led:"LED",lamp:"Lamp",switch:"Switch",capacitor:"Capacitor",inductor:"Inductor",voltmeter:"Voltmeter",ammeter:"Ammeter",diode:"Diode",ldr:"Photoresistor",ntc:"Thermistor",transistor:"Transistor",opamp:"Op-amp",transformer:"Transformer",acsource:"AC source",ground:"Ground",ohm:"Ohm's law",divider:"Voltage divider",reactance:"Reactance",rescolors:"Resistor colors",ledcalc:"LED resistor",rms:"RMS conversions",db:"dB and gain",freqcalc:"Frequency and period",bjtcalc:"BJT calculation",numbers:"Number systems",rlccalc:"RLC resonance",logiccalc:"Logic gates",calculate:"Calculate",historyEmpty:"Simulate a circuit first",signalNote:"The signal generator is independent, not measured from the circuit",meterNote:"Voltmeter is high-impedance and ammeter low-impedance in this model."
 },
 ru: {
 navigation:"РАЗДЕЛЫ",home:"Главная",builder:"Конструктор схем",labs:"Лаборатории",tools:"Инструменты и калькуляторы",scope:"Осциллограф",study:"ЭЛЕКТРОННАЯ ЛАБОРАТОРИЯ",disclaimer:"Учебная симуляция на упрощённых моделях, а не руководство по реальному электромонтажу.",welcome:"Электронные инструменты и лаборатория",welcomeDesc:"Собирайте схемы, соединяйте детали, измеряйте ток и напряжение, наблюдайте графики.",startBuilding:"Открыть конструктор",modules:"Лабораторные модули",builderDesc:"Соединения, отмена действий и расчёты",labsDesc:"LED, датчики, RLC, транзисторы и логика",toolsDesc:"Ом, BJT, RMS, реактивность и другое",scopeDesc:"Сигналы цепи и генератор",supportedTitle:"Поддерживаемые возможности",supportedText:"DC-расчёт: одна батарея, резисторы, LED, переключатель, лампа, вольтметр, амперметр, LDR и NTC. AC/RLC, BJT и логика — в отдельных лабораториях.",builderHelp:"Выберите деталь и нажмите на поле. Соедините два контакта. Перетаскивайте компоненты.",undo:"Отменить",redo:"Повторить",deleteSelected:"Удалить выбранное",clearAll:"Очистить всё",showSchematic:"Вид схемы",showPhysical:"Физический вид",save:"Сохранить",load:"Открыть",simulate:"▶ Рассчитать",stop:"■ Стоп",components:"Детали и приборы",paletteHelp:"Выберите деталь, затем нажмите на поле. Клавиша Delete удаляет выбранное.",loadDemo:"Пример LED",wireHint:"Нажмите два контакта для соединения",cancel:"Отмена",flowLegend:"Зелёная анимация: примерный путь тока",offLegend:"Серый: неактивно",liveGraph:"График: напряжение и ток",graphHelp:"Зелёный: ток батареи (мА); синий: напряжение питания (В). Изменения отражаются на графике.",resetGraph:"Очистить график",properties:"Свойства компонента",selectComponent:"Выберите компонент",measurements:"Измерения",labsIntro:"Выберите опыт. Часть открывается в конструкторе, остальные — в интерактивных расчётах.",labLed:"LED и переключатель",labDivider:"Делитель напряжения",labLdr:"Фоторезистор (LDR)",labRlc:"Последовательная RLC",labLogic:"Логические элементы",labBjt:"Транзистор BJT",chooseLab:"Выберите лабораторию выше",toolsIntro:"Самостоятельные калькуляторы в стиле приложений для электроники.",chooseTool:"Выберите инструмент",scopeIntro:"История реальных расчётных DC-значений или независимый генератор сигналов.",source:"Источник",circuitHistory:"Измерения цепи",generator:"Генератор сигналов",waveform:"Форма сигнала",amplitude:"Амплитуда (В)",frequency:"Частота (Гц)",pause:"Пауза",resume:"Продолжить",value:"Значение",brightness:"Освещение",temperature:"Температура",voltage:"Напряжение",current:"Ток",power:"Мощность",resistance:"Сопротивление",output:"Выход",selectSecond:"Выберите второй контакт",connected:"Провод подключён",ready:"Готово",running:"Симуляция активна",paused:"Симуляция остановлена",noSelection:"Сначала выберите компонент или провод",confirmClear:"Удалить все компоненты и провода? Это можно отменить.",empty:"Пустая плата",oneSource:"Для расчёта DC нужна ровно одна батарея",unsupported:"Данный элемент не поддерживается свободным DC-расчётом. Используйте отдельную лабораторию:",short:"Полюса батареи соединены напрямую",noPath:"Нет замкнутого пути тока",solved:"Расчёт DC завершён",highCurrent:"ВНИМАНИЕ: расчётный ток очень велик; только учебная модель",selectWire:"Провод выбран",deleted:"Удалено",nothingUndo:"Нечего отменять",nothingRedo:"Нечего повторять",invalidFile:"Неверный файл JSON",saved:"Схема сохранена",loaded:"Схема загружена",invalidValue:"Введите корректное значение",probeNote:"График показывает ток источника; направление анимации проводов условное.",component:"Компонент",delete:"Удалить компонент",open:"РАЗОМКНУТ",closed:"ЗАМКНУТ",on:"ВКЛ",off:"ВЫКЛ",battery:"Батарея",resistor:"Резистор",led:"Светодиод",lamp:"Лампа",switch:"Переключатель",capacitor:"Конденсатор",inductor:"Катушка",voltmeter:"Вольтметр",ammeter:"Амперметр",diode:"Диод",ldr:"Фоторезистор",ntc:"Термистор",transistor:"Транзистор",opamp:"Операционный усилитель",transformer:"Трансформатор",acsource:"AC генератор",ground:"Земля",ohm:"Закон Ома",divider:"Делитель напряжения",reactance:"Реактивное сопротивление",rescolors:"Цвета резистора",ledcalc:"Резистор для LED",rms:"RMS значения",db:"дБ и усиление",freqcalc:"Частота и период",bjtcalc:"Расчёт BJT",numbers:"Системы счисления",rlccalc:"Резонанс RLC",logiccalc:"Логические элементы",calculate:"Рассчитать",historyEmpty:"Сначала рассчитайте схему",signalNote:"Генератор независим от схемы",meterNote:"Вольтметр имеет большое, амперметр малое сопротивление в данной модели."
 }
};
let lang="uz",theme="light",page="home",physical=true,paletteSelection=null,selected=null,pending=null,drag=null,run=false,results=null,nextId=1;
let parts=[],wires=[],undoStack=[],redoStack=[],history=[],sampleClock=0,graphTime=0,lastSignal=0,scopePlaying=true,selectedTool="ohm";
let customPending=null;
const TYPES = ["battery","resistor","led","lamp","switch","capacitor","inductor","voltmeter","ammeter","diode","ldr","ntc","transistor","opamp","transformer","acsource","ground"];
const ICONS={battery:"🔋",resistor:"〽",led:"🔴",lamp:"💡",switch:"⏻",capacitor:"▤",inductor:"∿",voltmeter:"Ⓥ",ammeter:"Ⓐ",diode:"▶",ldr:"☀",ntc:"🌡",transistor:"♧",opamp:"▷",transformer:"🔄",acsource:"〰",ground:"⏚"};
const DEFAULT={battery:9,resistor:330,led:2,lamp:100,switch:1,capacitor:47,inductor:15,voltmeter:0,ammeter:0,diode:.7,ldr:75,ntc:25,transistor:100,opamp:10,transformer:2,acsource:5,ground:0};
const UNIT={battery:"V",resistor:"Ω",led:"V",lamp:"Ω",switch:"0 / 1",capacitor:"µF",inductor:"mH",voltmeter:"",ammeter:"",diode:"V",ldr:"%",ntc:"°C",transistor:"β",opamp:"×",transformer:"ratio",acsource:"V",ground:""};
const SUPPORTED=new Set(["battery","resistor","led","lamp","switch","capacitor","inductor","voltmeter","ammeter","diode","ldr","ntc","ground"]);
const PORTS={ground:[[0,42]],transistor:[[-64,-22],[64,-22],[0,57]],opamp:[[-66,-22],[-66,22],[67,0]],transformer:[[-68,-22],[-68,22],[68,-22],[68,22]]};
const getPorts=type=>PORTS[type]||[[-70,0],[70,0]];
const tr=key=>UI[lang]?.[key]||UI.en[key]||key;
const esc=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp","<":"&lt",">":"&gt",'"':"&quot","'":"&#39"}[c]));
const num=(v,d=2)=>Number.isFinite(v)?Number(v).toFixed(d):"—";
function safeGet(k,fallback){try{return localStorage.getItem(k)||fallback}catch{return fallback}}
function safeSet(k,value){try{localStorage.setItem(k,value)}catch{}}
function toast(message){const t=$("toast");t.textContent=message;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),3200)}
function translate(){document.documentElement.lang=lang;$$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.textContent=tr(key)});$("viewMode").textContent=tr(physical?"showSchematic":"showPhysical");$("simulate").textContent=tr(run?"stop":"simulate");$("pauseScope").textContent=tr(scopePlaying?"pause":"resume");$("status").textContent='● '+tr(run?'running':'paused');renderPalette();renderProperties();renderMeasurements();renderTools();if(page==="tools")openTool(selectedTool);if(page==="scope")renderScope();translateExtras()}
function setTheme(next){theme=next;document.body.classList.toggle("dark",theme==="dark");$("themeToggle").textContent=theme==="dark"?"☀":"☾";safeSet("electro2_theme",theme)}
function go(target){page=target;$$('.page').forEach(el=>el.classList.toggle("active",el.id===target));$$('.nav').forEach(el=>el.classList.toggle("active",el.dataset.page===target));if(target==="scope")renderScope();if(target==="builder")drawTimeline();if(target==="formulas")renderFormulaLibrary();if(target==="notebook")renderNotebook();refreshStats()}
function capture(){return JSON.stringify({parts,wires,nextId})}
function restore(snapshot){const data=JSON.parse(snapshot);parts=data.parts;wires=data.wires;nextId=data.nextId;selected=null;pending=null;drag=null;paletteSelection=null;results=null;renderAll();if(run)calculateNow()}
function checkpoint(){undoStack.push(capture());if(undoStack.length>80)undoStack.shift();redoStack.length=0;updateUndoButtons()}
function updateUndoButtons(){$("undo").disabled=!undoStack.length;$("redo").disabled=!redoStack.length}
function undo(){if(!undoStack.length){toast(tr("nothingUndo"));return}redoStack.push(capture());restore(undoStack.pop());updateUndoButtons()}
function redo(){if(!redoStack.length){toast(tr("nothingRedo"));return}undoStack.push(capture());restore(redoStack.pop());updateUndoButtons()}
function newPart(type,x,y,value=DEFAULT[type]){
  // Use a custom resistive preset only for the next deliberate placement.
  const preset = customPending && paletteSelection===type && customPending.type===type ? customPending : null;
  const p={id:nextId++,type,x:Math.round(x),y:Math.round(y),value:preset?preset.value:value};
  if(preset){p.customName=preset.name;p.customPresetId=preset.id;p.customKind=preset.kind;customPending=null;}
  parts.push(p);return p;
}
function linkParts(idA,portA,idB,portB){if(idA===idB&&portA===portB)return false;const exists=wires.some(w=>(w.a.id===idA&&w.a.port===portA&&w.b.id===idB&&w.b.port===portB)||(w.b.id===idA&&w.b.port===portA&&w.a.id===idB&&w.a.port===portB));if(exists)return false;wires.push({a:{id:idA,port:portA},b:{id:idB,port:portB}});return true}
function removeSelection(){if(!selected){toast(tr("noSelection"));return}checkpoint();if(selected.kind==="part"){parts=parts.filter(p=>p.id!==selected.id);wires=wires.filter(w=>w.a.id!==selected.id&&w.b.id!==selected.id)}else if(selected.kind==="wire"){wires.splice(selected.id,1)}selected=null;pending=null;invalidate();toast(tr("deleted"))}
function clearAll(){if(!parts.length&&!wires.length)return;if(!confirm(tr("confirmClear")))return;checkpoint();parts=[];wires=[];selected=null;pending=null;invalidate()}
function invalidate(){results=null;renderAll();if(run)calculateNow();}
function loadSample(which,record=true){customPending=null;showLabGuide(which);if(record)checkpoint();parts=[];wires=[];selected=null;pending=null;nextId=1;
 if(which==="led") {const b=newPart("battery",120,280,9),sw=newPart("switch",345,130,1),r=newPart("resistor",600,130,330),led=newPart("led",860,280,2);linkParts(b.id,0,sw.id,0);linkParts(sw.id,1,r.id,0);linkParts(r.id,1,led.id,0);linkParts(led.id,1,b.id,1)}
 if(which==="divider"){const b=newPart("battery",140,275,12),r1=newPart("resistor",430,135,1000),r2=newPart("resistor",805,270,2000),m=newPart("voltmeter",450,430,0);linkParts(b.id,0,r1.id,0);linkParts(r1.id,1,r2.id,0);linkParts(r2.id,1,b.id,1);linkParts(m.id,0,r1.id,1);linkParts(m.id,1,b.id,1)}
 if(which==="ldr"){const b=newPart("battery",150,275,9),sensor=newPart("ldr",365,120,75),r=newPart("resistor",620,120,220),led=newPart("led",855,270,2);linkParts(b.id,0,sensor.id,0);linkParts(sensor.id,1,r.id,0);linkParts(r.id,1,led.id,0);linkParts(led.id,1,b.id,1)}
 invalidate();go("builder");if(!run){run=true;$("simulate").textContent=tr("stop");calculateNow()} }
function saveFile(){const blob=new Blob([JSON.stringify({version:2,parts,wires},null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="electrotools-circuit.json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2500);toast(tr("saved"))}
async function openFile(file){if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data.parts)||!Array.isArray(data.wires)||data.parts.length>120||data.wires.length>300)throw Error();const ids=new Set();for(const p of data.parts){if(!TYPES.includes(p.type)||!Number.isSafeInteger(p.id)||p.id<1||ids.has(p.id)||![p.x,p.y,p.value].every(Number.isFinite)||Math.abs(p.value)>1e7)throw Error();ids.add(p.id)}for(const w of data.wires){if(!w||![w.a,w.b].every(q=>q&&ids.has(q.id)&&Number.isSafeInteger(q.port)&&q.port>=0&&q.port<getPorts(data.parts.find(p=>p.id===q.id).type).length))throw Error()}checkpoint();parts=data.parts.map(p=>({...p,x:Math.min(1000,Math.max(75,p.x)),y:Math.min(500,Math.max(75,p.y))}));wires=data.wires.map(w=>({a:{...w.a},b:{...w.b}}));nextId=Math.max(1,...parts.map(p=>p.id+1));selected=null;pending=null;invalidate();toast(tr("loaded"))}catch{toast(tr("invalidFile"))}}
/* Visually distinct component drawings; symbolic and illustrative physical modes. */
function componentShape(p){const lit=Math.abs(results?.components?.[p.id]?.current||0)>0.0003;const col=lit?"#ffdf4f":"#bbcad9";
 if(!physical){switch(p.type){
 case"battery":return '<path class="schem" d="M-18 -28 V28 M-8 -17 V17 M7 -28 V28 M17 -17 V17"/><text x="-28" y="-20" fill="#18a388">+</text>';
 case"resistor":case"ldr":case"ntc":return `<path class="schem" d="M-47 0 H-36 L-27 -15 L-12 15 L3 -15 L18 15 L32 -15 L42 0 H47"/>${p.type==="ldr"?'<path class="schem" d="M-9 -37 L0 -17 M8 -39 L18 -19"/>':p.type==="ntc"?'<path class="schem" d="M-27 30 L26 -30"/>':''}`;
 case"led":case"diode":return `<path class="schem" d="M-27 -26 L17 0 L-27 26 Z M20 -27 V27"/>${p.type==="led"?'<path class="schem" d="M25 -20 L44 -39 M30 -10 L49 -29"/>':''}`;
 case"lamp":return '<circle class="schem" r="28"/><path class="schem" d="M-20 -20 L20 20 M20 -20 L-20 20"/>';
 case"switch":return `<circle cx="-27" r="5" fill="var(--ink)"/><circle cx="27" r="5" fill="var(--ink)"/><path class="schem" d="M-27 0 L${p.value?27:13} ${p.value?0:-19}"/>`;
 case"capacitor":return '<path class="schem" d="M-11 -31 V31 M11 -31 V31"/>';
 case"inductor":return '<path class="schem" d="M-43 0 Q-32 -32 -21 0 Q-10 -32 1 0 Q12 -32 23 0 Q34 -32 45 0"/>';
 case"voltmeter":case"ammeter":return `<circle class="schem" r="30"/><text x="0" y="8" text-anchor="middle" font-size="26" fill="var(--ink)">${p.type==="voltmeter"?"V":"A"}</text>`;
 case"ground":return '<path class="schem" d="M0 0 V18 M-26 18 H26 M-18 26 H18 M-9 33 H9"/>';
 case"transistor":return '<circle class="schem" r="37"/><path class="schem" d="M-12 -20 V20 M-12 -5 L22 -25 M-12 5 L22 25 M14 20 L22 25 L21 16"/>';
 case"opamp":return '<path class="schem" d="M-40 -39 L40 0 L-40 39 Z"/><text x="-26" y="-15" fill="var(--ink)">+</text><text x="-26" y="25" fill="var(--ink)">−</text>';
 case"transformer":return '<path class="schem" d="M-45 -40 Q-17 -30 -45 -20 Q-17 -10 -45 0 Q-17 10 -45 20 Q-17 30 -45 40 M45 -40 Q17 -30 45 -20 Q17 -10 45 0 Q17 10 45 20 Q17 30 45 40 M-8 -43 V43 M8 -43 V43"/>';
 case"acsource":return '<circle class="schem" r="33"/><path class="schem" d="M-23 0 C-12 -33 0 33 12 0 S33 -33 30 -6"/>';
 }}
 switch(p.type){
 case"battery":return `<rect x="-42" y="-30" width="84" height="60" rx="11" fill="#263d55" stroke="#6688a9" stroke-width="3"/><rect x="-35" y="-23" width="70" height="46" rx="5" fill="#337695"/><text x="0" y="7" text-anchor="middle" fill="white" font-size="16" font-weight="bold">+ ${esc(p.value)} V −</text><rect x="-44" y="-12" width="5" height="24" fill="#c8d8e3"/><rect x="39" y="-12" width="5" height="24" fill="#c8d8e3"/>`;
 case"resistor":return '<rect x="-43" y="-14" width="86" height="28" rx="13" fill="#dfc295" stroke="#a77e47" stroke-width="2"/><rect x="-25" y="-13" width="8" height="26" fill="#93421d"/><rect x="-5" y="-13" width="8" height="26" fill="#131313"/><rect x="14" y="-13" width="8" height="26" fill="#db4936"/><rect x="27" y="-13" width="5" height="26" fill="#c99b36"/>';
 case"led":return `<path d="M-19 20 V-3 A19 19 0 0 1 19 -3 V20Z" fill="${lit?"#ff3434":"#929da8"}" stroke="${lit?"#bb1923":"#697786"}" stroke-width="2" class="${lit?'glow':''}"/><rect x="-20" y="18" width="40" height="9" rx="2" fill="#aebdc6"/>`;
 case"lamp":return `<circle r="29" fill="${lit?'#ffe18a':'#c7d2dd'}" stroke="#97a7b5" stroke-width="3" class="${lit?'glow':''}"/><path d="M-18 -16 L18 16 M18 -16 L-18 16" stroke="#a78243" stroke-width="3"/><rect x="-15" y="27" width="30" height="10" rx="2" fill="#8999a6"/>`;
 case"switch":return `<rect x="-45" y="-26" width="90" height="52" rx="12" fill="#334e62" stroke="#8ba3b4" stroke-width="2"/><circle cx="-27" cy="0" r="7" fill="#dce5ea"/><circle cx="27" cy="0" r="7" fill="#dce5ea"/><path d="M-27 0 L${p.value?27:12} ${p.value?0:-17}" stroke="#e5ecf7" stroke-width="6" stroke-linecap="round"/>`;
 case"capacitor":return '<rect x="-29" y="-39" width="58" height="78" rx="9" fill="#277c9d" stroke="#17506c" stroke-width="3"/><path d="M-26 -27 H26 M-26 27 H26" stroke="#68d2ef" stroke-width="4"/><text x="0" y="5" fill="#fff" font-size="12" text-anchor="middle">µF</text>';
 case"inductor":return '<rect x="-51" y="-27" width="102" height="54" rx="10" fill="#455e6d" stroke="#758a9a" stroke-width="2"/><path d="M-39 9 C-39 -24 -24 -24 -24 9 S-9 42 -9 9 S6 -24 6 9 S21 42 21 9 S39 -24 39 9" fill="none" stroke="#d7812f" stroke-width="7"/>';
 case"diode":return '<rect x="-38" y="-15" width="76" height="30" rx="7" fill="#1f252f"/><rect x="14" y="-15" width="9" height="30" fill="#d4d8e3"/>';
 case"ldr":return '<circle r="33" fill="#ebc78d" stroke="#b58b49" stroke-width="3"/><path d="M-22 -17 L22 -17 L-22 0 L22 0 L-22 17 L22 17" stroke="#775939" stroke-width="4" fill="none"/>';
 case"ntc":return '<circle r="32" fill="#347caf" stroke="#24567c" stroke-width="3"/><text x="0" y="8" text-anchor="middle" font-weight="bold" font-size="16" fill="white">NTC</text>';
 case"voltmeter":case"ammeter":return `<rect x="-39" y="-46" width="78" height="92" rx="12" fill="#e0a72a" stroke="#9c711d" stroke-width="3"/><rect x="-32" y="-34" width="64" height="33" rx="4" fill="#bddfac"/><text class="meter-text" text-anchor="middle" y="-13">${num(results?.components?.[p.id]?.[p.type==='voltmeter'?'voltage':'current']*(p.type==='ammeter'?1000:1)||0,2)}${p.type==='voltmeter'?'V':'mA'}</text><circle cx="0" cy="25" r="15" fill="#304456"/><path d="M0 15 V35 M-10 25 H10" stroke="#8fa5b6" stroke-width="2"/>`;
 case"transistor":return '<path d="M-10 -26 L-10 26 M-10 -11 L24 -29 M-10 10 L24 30" stroke="#c9d2e1" stroke-width="5"/><rect x="-40" y="-40" width="80" height="80" rx="16" fill="none" stroke="#3d5564" stroke-width="10"/><text x="0" y="2" text-anchor="middle" fill="#23cba9" font-size="11">NPN</text>';
 case"opamp":return '<path d="M-43 -45 L43 0 L-43 45 Z" fill="#566880" stroke="#91abc5" stroke-width="3"/><text x="-27" y="-16" fill="white" font-size="20">+</text><text x="-27" y="28" fill="white" font-size="20">−</text>';
 case"transformer":return '<rect x="-34" y="-49" width="68" height="98" rx="9" fill="#425467" stroke="#abb5ba" stroke-width="4"/><path d="M-21 -42 V42 M21 -42 V42" stroke="#b26624" stroke-width="13" stroke-dasharray="5 7"/>';
 case"acsource":return '<rect x="-38" y="-35" width="76" height="70" rx="11" fill="#2c526e" stroke="#8eb0c8" stroke-width="2"/><path d="M-26 0 C-15 -28 -5 28 6 0 S25 -28 28 0" stroke="#67e6d4" fill="none" stroke-width="3"/>';
 case"ground":return '<path d="M0 -4 V16 M-26 16 H26 M-18 24 H18 M-10 32 H10" stroke="#90a3b5" stroke-width="4"/>';
 }
 return '';
}
function componentMarkup(p){const ports=getPorts(p.type);const pins=ports.map(([x,y])=>`<path d="M${x*0.65} ${y*.65} L${x} ${y}" stroke="#8295a8" stroke-width="3"/>`).join('');const dots=ports.map(([x,y],i)=>{const attached=wires.some(w=>(w.a.id===p.id&&w.a.port===i)||(w.b.id===p.id&&w.b.port===i));return `<circle class="port ${pending?.id===p.id&&pending?.port===i?'pending':''} ${attached?'connected':'free'}" data-id="${p.id}" data-port="${i}" cx="${x}" cy="${y}" r="9"><title>${esc(attached?'Sim ulangan':'Ulanmagan kontakt')}</title></circle>`}).join('');const label=p.type==='switch'?tr(p.value?'closed':'open'):`${p.value}${UNIT[p.type]?' '+UNIT[p.type]:''}`;
 return `<g class="component ${selected?.kind==='part'&&selected.id===p.id?'selected':''}" data-id="${p.id}" transform="translate(${p.x} ${p.y})"><rect class="selection-box" x="-76" y="-66" width="152" height="132" rx="13" stroke="none" fill="none"/>${pins}${componentShape(p)}<text class="part-name" x="0" y="-53">${esc(p.customName||tr(p.type))} #${p.id}</text><text class="part-value" x="0" y="62">${esc(label)}</text>${dots}</g>`;
}
function termPos(id,port){const p=parts.find(x=>x.id===id);if(!p)return null;const offset=getPorts(p.type)[port];return offset?{x:p.x+offset[0],y:p.y+offset[1]}:null}
function wirePath(w,a,b){
 const from=termPos(w.a.id,w.a.port),to=termPos(w.b.id,w.b.port);
 if(!from||!to)return '';
 const sameSide=w.a.port===w.b.port&&getPorts(a.type).length===2&&getPorts(b.type).length===2;
 // Two RIGHT-facing contacts: lead the return wire around the bottom of the board.
 if(sameSide&&w.a.port===1&&Math.abs(from.x-to.x)>260){
   const farX=Math.min(1042,Math.max(from.x,to.x)+44);
   const laneY=Math.min(530,Math.max(from.y,to.y)+155);
   const nearX=Math.min(from.x,to.x)+43;
   const atFar=from.x>to.x;
   const firstX=atFar?farX:nearX;
   const secondX=atFar?nearX:farX;
   return `M${from.x} ${from.y} L${firstX} ${from.y} L${firstX} ${laneY} L${secondX} ${laneY} L${secondX} ${to.y} L${to.x} ${to.y}`;
 }
 // Ordinary connections stay direct; never pass through the LED body in the sample.
 return `M${from.x} ${from.y} L${to.x} ${to.y}`;
}
function renderBoard(){
 const active=results?.activeWires||[];
 const lookup=new Map(parts.map(p=>[p.id,p]));
 $('board').innerHTML=wires.map((w,i)=>{
   const a=lookup.get(w.a.id),b=lookup.get(w.b.id);
   if(!a||!b)return '';
   const d=wirePath(w,a,b);
   if(!d)return '';
   return `<g><path class="wire ${selected?.kind==='wire'&&selected.id===i?'selected':''}" data-wire="${i}" d="${d}"/>${active.includes(i)?`<path class="flow-overlay" d="${d}"/>`:''}</g>`;
 }).join('')+parts.map(componentMarkup).join('');
}

function renderPalette(){$("palette").innerHTML=TYPES.map(type=>`<button class="part-button ${paletteSelection===type?'active':''}" data-part="${type}" draggable="true"><span class="part-icon">${ICONS[type]}</span><span>${esc(tr(type))}</span></button>`).join('');$$('[data-part]').forEach(b=>b.onclick=()=>{customPending=null;paletteSelection=b.dataset.part;pending=null;$("wireHint").textContent=tr(paletteSelection);renderPalette()});$$('[data-part]').forEach(b=>b.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',b.dataset.part);e.dataTransfer.effectAllowed='copy'}))}
function renderProperties(){const host=$("properties");if(selected?.kind==='wire'){host.innerHTML=`<b>${esc(tr('selectWire'))}</b><p>${esc(tr('deleteSelected'))}</p>`;return}const p=parts.find(x=>x.id===selected?.id);if(!p){host.textContent=tr("selectComponent");return}let readonly=['voltmeter','ammeter','ground'].includes(p.type);host.innerHTML=`<b>${esc(p.customName||tr(p.type))} #${p.id}</b><label>${esc(tr('value'))} (${esc(UNIT[p.type])})<input id="propValue" type="number" value="${p.value}" step="any" ${readonly?'disabled':''}></label>${p.type==='switch'?`<button id="switchFlip" class="outline wide">${esc(tr(p.value?'open':'closed'))}</button>`:''}<button id="propDelete" class="outline danger prop-action">${esc(tr('delete'))}</button>`;$("propDelete").onclick=removeSelection;
 const input=$("propValue");if(!readonly)input.onchange=e=>{const v=Number(e.target.value);if(!Number.isFinite(v)||v<0||v>1e7){toast(tr("invalidValue"));input.value=p.value;return}if(v===p.value)return;checkpoint();p.value=p.type==='switch'?(v?1:0):v;invalidate()};if(p.type==='switch')$("switchFlip").onclick=()=>{checkpoint();p.value=p.value?0:1;invalidate()};}
function renderMeasurements(){const host=$("measurements"),note=$("solverNote");if(!results){host.innerHTML=`<p class="muted small">${esc(tr('historyEmpty'))}</p>`;note.textContent=tr('meterNote');return}const r=results;let rows=`<div class="measurement"><span>${esc(tr('voltage'))}</span><strong>${num(r.voltage)} V</strong></div><div class="measurement"><span>${esc(tr('current'))}</span><strong>${num(r.sourceCurrent*1000,3)} mA</strong></div><div class="measurement"><span>${esc(tr('power'))}</span><strong>${num(r.voltage*r.sourceCurrent*1000)} mW</strong></div>`;if(r.ok){for(const p of parts){if(p.type==='ground')continue;const z=r.components[p.id];if(!z)continue;rows+=`<div class="measurement"><span>${esc(p.customName||tr(p.type))} #${p.id}</span><strong>${num(z.voltage,2)} V / ${num(z.current*1000,2)} mA</strong></div>`}}host.innerHTML=rows;note.textContent=r.message+(r.sourceCurrent>.1?' · '+tr('highCurrent'):'')+' · '+tr('probeNote')+(parts.some(p=>p.type==='led'&&[0,1].some(k=>!wires.some(w=>(w.a.id===p.id&&w.a.port===k)||(w.b.id===p.id&&w.b.port===k))))?' · '+({uz:'LED: ikkala kontakt ulanmaguncha yonmaydi.',en:'LED: both terminals must be connected.',ru:'LED: оба контакта должны быть подключены.'}[lang]):'')}
function renderAll(){renderBoard();renderProperties();renderMeasurements();renderPalette();updateUndoButtons()}
function setupEditor(){const svg=$("board");const pos=e=>{const p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;const mat=svg.getScreenCTM();return mat?p.matrixTransform(mat.inverse()):{x:200,y:200}};
 svg.addEventListener('dragover',e=>e.preventDefault());svg.addEventListener('drop',e=>{e.preventDefault();const type=e.dataTransfer.getData('text/plain');if(!TYPES.includes(type))return;customPending=null;const pt=pos(e);checkpoint();newPart(type,Math.min(1000,Math.max(80,pt.x)),Math.min(490,Math.max(85,pt.y)));paletteSelection=null;invalidate()});
 svg.addEventListener('pointerdown',e=>{const circle=e.target.closest('.port');if(circle){const next={id:Number(circle.dataset.id),port:Number(circle.dataset.port)};if(pending){if(linkParts(pending.id,pending.port,next.id,next.port)){// record state BEFORE inserted wire
 // Undo entry is composed by deleting the most recent wire from a saved copy.
 const after=capture(),snapshot=JSON.parse(after);snapshot.wires.pop();undoStack.push(JSON.stringify(snapshot));if(undoStack.length>80)undoStack.shift();redoStack=[];invalidate();toast(tr('connected'))}pending=null;$("wireHint").textContent=tr('wireHint')}else{pending=next;$("wireHint").textContent=tr('selectSecond')}renderBoard();updateUndoButtons();return}
 const wl=e.target.closest('[data-wire]');if(wl){selected={kind:'wire',id:Number(wl.dataset.wire)};paletteSelection=null;renderAll();return}
 const g=e.target.closest('.component');if(g){selected={kind:'part',id:Number(g.dataset.id)};paletteSelection=null;const now=pos(e);drag={id:selected.id,start:now,partX:parts.find(x=>x.id===selected.id).x,partY:parts.find(x=>x.id===selected.id).y,origin:capture(),moved:false};svg.setPointerCapture(e.pointerId);renderProperties();renderPalette();renderBoard();return}
 if(paletteSelection){checkpoint();const pt=pos(e);newPart(paletteSelection,Math.min(1000,Math.max(80,pt.x)),Math.min(490,Math.max(85,pt.y)));paletteSelection=null;invalidate();return}selected=null;renderAll()});
 svg.addEventListener('pointermove',e=>{if(!drag)return;const p=parts.find(x=>x.id===drag.id);if(!p)return;const now=pos(e);const dx=now.x-drag.start.x,dy=now.y-drag.start.y;if(!drag.moved&&Math.hypot(dx,dy)<5)return;p.x=Math.max(80,Math.min(1000,drag.partX+dx));p.y=Math.max(85,Math.min(490,drag.partY+dy));drag.moved=true;results=null;renderBoard()});
 function stopDrag(){if(!drag)return;if(drag.moved){undoStack.push(drag.origin);if(undoStack.length>80)undoStack.shift();redoStack=[];invalidate()}drag=null;updateUndoButtons()}
 svg.addEventListener('pointerup',stopDrag);svg.addEventListener('pointercancel',stopDrag);
 svg.addEventListener('dblclick',e=>{const g=e.target.closest('.component');if(!g)return;const p=parts.find(x=>x.id===Number(g.dataset.id));if(p?.type==='switch'){checkpoint();p.value=p.value?0:1;selected={kind:'part',id:p.id};invalidate()}});
 document.addEventListener('keydown',e=>{const editing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);if(page==='builder'&&!editing&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo();return}if(page==='builder'&&!editing&&(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();redo();return}if(page==='builder'&&!editing&&(e.key==='Delete'||e.key==='Backspace')){e.preventDefault();removeSelection()}if(e.key==='Escape'){pending=null;paletteSelection=null;renderPalette();renderBoard()}});
}
/* Linear nodal DC analysis for one ideal voltage source. LED/diode: piecewise linear. */
function solveDC(){if(!parts.length)return{ok:false,message:tr('empty'),voltage:0,sourceCurrent:0,components:{},activeWires:[]};const unsupported=parts.filter(p=>!SUPPORTED.has(p.type));if(unsupported.length)return{ok:false,message:tr('unsupported')+' '+unsupported.map(p=>tr(p.type)).join(', '),voltage:0,sourceCurrent:0,components:{},activeWires:[]};const sources=parts.filter(p=>p.type==='battery');if(sources.length!==1)return{ok:false,message:tr('oneSource'),voltage:0,sourceCurrent:0,components:{},activeWires:[]};const source=sources[0];if(!(source.value>0&&source.value<=200))return{ok:false,message:tr('invalidValue'),voltage:0,sourceCurrent:0,components:{},activeWires:[]};
 const keys=parts.flatMap(p=>getPorts(p.type).map((_,i)=>`${p.id}:${i}`));const parent=new Map(keys.map(k=>[k,k]));function find(k){while(parent.get(k)!==k){parent.set(k,parent.get(parent.get(k)));k=parent.get(k)}return k}function union(a,b){const ra=find(a),rb=find(b);if(ra!==rb)parent.set(ra,rb)}wires.forEach(w=>union(`${w.a.id}:${w.a.port}`,`${w.b.id}:${w.b.port}`));const nets=[...new Set(keys.map(find))],map=new Map(nets.map((key,i)=>[key,i])),net=(p,port)=>map.get(find(`${p.id}:${port}`));const positive=net(source,0),negative=net(source,1);if(positive===negative)return{ok:false,message:tr('short'),voltage:source.value,sourceCurrent:0,components:{},activeWires:[]};
 function getR(p){switch(p.type){case'resistor':case'lamp':return Math.max(.1,p.value);case'switch':return p.value>.5?.05:1e12;case'inductor':return .05;case'ammeter':return .05;case'ldr':return 400+Math.pow(100-Math.max(0,Math.min(100,p.value)),2)*5;case'ntc':{const K=273.15+Math.max(0,Math.min(150,p.value));return 10000*Math.exp(3950*(1/K-1/298.15))}case'voltmeter':return 1e10;case'capacitor':return 1e12;default:return 1e12}}
 const edges=parts.filter(p=>p.type!=='battery'&&p.type!=='ground').map(p=>({p,a:net(p,0),b:net(p,1),R:getR(p),bothWired:[0,1].every(k=>wires.some(w=>(w.a.id===p.id&&w.a.port===k)||(w.b.id===p.id&&w.b.port===k)))}));const fixed=new Map([[negative,0],[positive,source.value]]);const unknown=nets.map((_,i)=>i).filter(i=>!fixed.has(i));if(unknown.length>130)return{ok:false,message:'Too many nodes',voltage:source.value,sourceCurrent:0,components:{},activeWires:[]};const idx=new Map(unknown.map((n,i)=>[n,i]));let volt=new Map(fixed);unknown.forEach(n=>volt.set(n,0));let diodeOn=new Map(edges.filter(e=>e.p.type==='led'||e.p.type==='diode').map(e=>[e.p.id,false]));
 function linearSolve(A,b){const n=b.length;for(let i=0;i<n;i++){let pivot=i;for(let k=i+1;k<n;k++)if(Math.abs(A[k][i])>Math.abs(A[pivot][i]))pivot=k;if(Math.abs(A[pivot][i])<1e-19)continue;if(pivot!==i){[A[i],A[pivot]]=[A[pivot],A[i]];[b[i],b[pivot]]=[b[pivot],b[i]]}const d=A[i][i];for(let j=i;j<n;j++)A[i][j]/=d;b[i]/=d;for(let k=0;k<n;k++){if(k===i)continue;const q=A[k][i];if(!q)continue;for(let j=i;j<n;j++)A[k][j]-=q*A[i][j];b[k]-=q*b[i]}}return b}
 for(let iter=0;iter<24;iter++){const A=unknown.map(()=>Array(unknown.length).fill(0)),b=unknown.map(()=>0);for(const e of edges){if(e.a===e.b)continue;const diode=e.p.type==='led'||e.p.type==='diode';const active=diodeOn.get(e.p.id)&&e.bothWired;const R=diode?(active?8:1e11):e.R;const g=1/R,offset=diode&&active?Math.max(.1,e.p.value):0;for(const [n,m,sign] of [[e.a,e.b,1],[e.b,e.a,-1]]){const row=idx.get(n);if(row===undefined)continue;A[row][row]+=g;const col=idx.get(m);if(col!==undefined)A[row][col]-=g;else b[row]+=g*(fixed.get(m)??0);b[row]+=sign*g*offset}}for(let i=0;i<unknown.length;i++)A[i][i]+=1e-10;const sol=linearSolve(A,b);unknown.forEach((n,i)=>volt.set(n,Math.max(-1e5,Math.min(1e5,Number.isFinite(sol[i])?sol[i]:0))));let changed=false;for(const e of edges){if(!diodeOn.has(e.p.id))continue;const drop=(volt.get(e.a)||0)-(volt.get(e.b)||0),on=e.bothWired&&drop>Math.max(.1,e.p.value)-0.005;if(diodeOn.get(e.p.id)!==on){diodeOn.set(e.p.id,on);changed=true}}if(!changed)break}
 const values={};let sourceCurrent=0;const hot=new Set();for(const p of parts){if(p.type==='ground'){values[p.id]={voltage:0,current:0};continue}const a=net(p,0),b=net(p,1),v=(volt.get(a)||0)-(volt.get(b)||0);if(p.type==='battery'){values[p.id]={voltage:p.value,current:0};continue}let I=0;if(p.type==='led'||p.type==='diode'){if(diodeOn.get(p.id)&&edges.find(e=>e.p.id===p.id)?.bothWired)I=Math.max(0,(v-Math.max(.1,p.value))/8)}else I=v/getR(p);if(Math.abs(I)<1e-9)I=0;values[p.id]={voltage:((p.type==='led'||p.type==='diode')&&!edges.find(e=>e.p.id===p.id)?.bothWired)?NaN:v,current:I};if(Math.abs(I)>1e-5){hot.add(a);hot.add(b)}if(a===positive)sourceCurrent+=I;if(b===positive)sourceCurrent-=I}
 sourceCurrent=Math.max(0,Math.abs(sourceCurrent));values[source.id]={voltage:source.value,current:sourceCurrent};const activeWires=[];if(sourceCurrent>1e-5){for(let i=0;i<wires.length;i++){const w=wires[i];const a=parts.find(p=>p.id===w.a.id);const b=parts.find(p=>p.id===w.b.id);if(a&&b&&hot.has(net(a,w.a.port))&&hot.has(net(b,w.b.port)))activeWires.push(i)}}
 return{ok:true,message:sourceCurrent>1e-8?tr('solved'):tr('noPath'),voltage:source.value,sourceCurrent,components:values,activeWires};
}
function calculateNow(){if(!run)return;results=solveDC();renderBoard();renderMeasurements();renderProperties();addHistorySample();drawTimeline();if(page==='scope')renderScope()}
function addHistorySample(){if(!results)return;const last=history.at(-1);const point={t:graphTime,i:results.sourceCurrent*1000,v:results.voltage};if(last&&Math.abs(last.t-point.t)<.00001&&Math.abs(last.i-point.i)<1e-8&&Math.abs(last.v-point.v)<1e-8)return;history.push(point);if(history.length>180)history.shift()}
function plotTimeline(canvas,data,includeBanner=true){const ctx=canvas.getContext('2d');if(!ctx)return;const W=canvas.width,H=canvas.height;ctx.fillStyle='#071827';ctx.fillRect(0,0,W,H);const pad=44;ctx.strokeStyle='#20435a';ctx.lineWidth=1;for(let x=pad;x<=W-16;x+=(W-pad-16)/10){ctx.beginPath();ctx.moveTo(x,14);ctx.lineTo(x,H-30);ctx.stroke()}for(let y=14;y<=H-30;y+=(H-44)/5){ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W-16,y);ctx.stroke()}const maxI=Math.max(1,...data.map(p=>Math.abs(p.i)))*1.15,maxV=Math.max(1,...data.map(p=>Math.abs(p.v)))*1.15;ctx.font='15px ui-monospace,monospace';ctx.fillStyle='#91afbf';ctx.fillText(`I max ${num(maxI,2)} mA`,pad+7,20);ctx.fillText(`U max ${num(maxV,2)} V`,W-205,20);if(!data.length){ctx.font='17px system-ui';ctx.fillStyle='#99b4c8';ctx.fillText(tr('historyEmpty'),pad+20,H/2);return}
 // Show up to a 45 second rolling history, with scope-like time axis.
 const end=data.at(-1).t,start=Math.max(0,end-45),span=Math.max(8,end-start);const points=data.filter(p=>p.t>=start);const xOf=p=>pad+(p.t-(end-span))/(span)*(W-pad-16);const plot=(key,color,max)=>{ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=3;points.forEach((p,i)=>{const x=xOf(p),y=H-30-Math.abs(p[key])/max*(H-56);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)});if(points.length===1){const p=points[0],y=H-30-Math.abs(p[key])/max*(H-56);ctx.lineTo(Math.min(W-16,xOf(p)+2),y)}ctx.stroke()};plot('i','#24e4a8',maxI);plot('v','#79b0ff',maxV);ctx.font='13px ui-monospace,monospace';ctx.fillStyle='#8eabbf';ctx.fillText(`${num(end,1)} s`,W-90,H-9);if(includeBanner){ctx.fillStyle='#24e4a8';ctx.fillText('I / mA',pad, H-7);ctx.fillStyle='#79b0ff';ctx.fillText('U / V',pad+100,H-7)}}
function drawTimeline(){plotTimeline($('timeline'),history)}
function renderScope(){const canvas=$('oscilloscope'),source=$('scopeSource').value,generator=source==='generator';['wave','amplitude','frequency'].forEach(id=>$(id).disabled=!generator);if(!generator){plotTimeline(canvas,history,false);const last=history.at(-1);$("scopeData").textContent=last?`${tr('voltage')}: ${num(last.v)} V · ${tr('current')}: ${num(last.i,3)} mA · t=${num(last.t,1)} s`:tr('historyEmpty');return}
 const ctx=canvas.getContext('2d'),W=canvas.width,H=canvas.height;ctx.fillStyle='#071827';ctx.fillRect(0,0,W,H);ctx.strokeStyle='#183f4b';ctx.lineWidth=1;for(let x=0;x<W;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}for(let y=0;y<H;y+=41){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}const a=Math.min(30,Math.max(0,Number($('amplitude').value)||0)),f=Math.min(1e5,Math.max(.1,Number($('frequency').value)||50)),shape=$('wave').value;ctx.strokeStyle='#26e5ac';ctx.lineWidth=3;ctx.beginPath();for(let x=0;x<W;x++){const phase=2*Math.PI*(x/W*4+lastSignal),sin=Math.sin(phase);const value=shape==='square'?(sin>=0?1:-1):shape==='triangle'?(2/Math.PI*Math.asin(sin)):sin;const y=H/2-value*Math.min(a/15,1)*(H*.4);if(!x)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke();$('scopeData').textContent=`${tr('amplitude')}: ${num(a)} V · ${tr('frequency')}: ${num(f,1)} Hz · T=${num(1000/f,3)} ms · ${tr('signalNote')}`;
}
/* Tool catalog covers the toolbox categories in the reference image. */
const TOOLS=[
 ['ohm','Ω','ohm','V, I, R, P'],['divider','↘','divider','Voltage division'],['reactance','∿','reactance','XL, XC'],['rescolors','▥','rescolors','4-band codes'],['ledcalc','🔴','ledcalc','LED resistance'],['rms','〰','rms','Vrms, Vpeak'],['db','dB','db','Decibels'],['freqcalc','Hz','freqcalc','Period / frequency'],['bjtcalc','♧','bjtcalc','Transistor / BJT'],['numbers','01','numbers','Binary, hex, decimal'],['rlccalc','RLC','rlccalc','Resonance / Q'],['logiccalc','⊕','logiccalc','Logic gates'],['opampcalc','▷','opamp','Op-amp gain'],['transformercalc','🔄','transformer','Transformer ratio'],['attenuator','⌄','attenuator','Attenuator'],['powerfactor','φ','power','Power factor']
 ];
TOOLS.push(
  ['seriesres','Σ','seriesres','Resistors in series'],
  ['parallelres','∥','parallelres','Resistors in parallel'],
  ['rctime','τ','rctime','Time constant and charging'],
  ['rltime','τ','rltime','RL current response'],
  ['lowpass','↘','lowpass','RC filter cutoff'],
  ['capenergy','◉','capenergy','Stored energy'],
  ['indenergy','∿','indenergy','Magnetic energy'],
  ['charge','Q','charge','Charge in coulombs'],
  ['timer555','555','timer555','Astable oscillator'],
  ['batterylife','🔋','batterylife','Idealized runtime'],
  ['efficiencycalc','η','efficiencycalc','Energy efficiency'],
  ['pwmcalc','▥','pwmcalc','Duty cycle'],
  ['adccalc','ADC','adccalc','Resolution and LSB'],
  ['wiredrop','↘','wiredrop','Low-voltage DC wire drop']
);
function renderTools(){
  const query=($('toolSearch')?.value||'').trim().toLocaleLowerCase(),category=$('toolCategory')?.value||'all';
  const matches=TOOLS.filter(([id,icon,key,desc])=>(category==='all'||TOOL_CATEGORIES[id]===category)&&
    (!query||[tr(key),desc,id,key].join(' ').toLocaleLowerCase().includes(query)));
  $('toolCount').textContent=`${matches.length} / ${TOOLS.length}`;
  $('toolsEmpty').hidden=matches.length>0;
  $('toolCards').innerHTML=matches.map(([id,icon,key,desc])=>`<button class="tool-card ${selectedTool===id?'active':''}" data-tool="${id}"><span class="tool-icon">${icon}</span><b>${esc(tr(key))}</b><small>${esc(toolDescription(id,desc))}</small></button>`).join('');
  $$('[data-tool]').forEach(b=>b.onclick=()=>openTool(b.dataset.tool));
}
const field=(id,label,value,unit='',min=null)=>({id,label,value,unit,min});
const TOOL_FIELDS={
 ohm:[field('v','Voltage (V)',12),field('r','Resistance (Ω)',330,'',.01)],
 divider:[field('v','Input voltage (V)',12),field('r1','R1 (Ω)',1000,'',.01),field('r2','R2 (Ω)',2000,'',.01)],
 reactance:[field('f','Frequency (Hz)',1000,'',.001),field('l','Inductance (mH)',100,'',.001),field('c','Capacitance (µF)',10,'',.001)],
 ledcalc:[field('v','Supply (V)',9,'',0),field('vf','LED forward V',2,'',0),field('i','LED current (mA)',15,'',.01)],
 rms:[field('peak','Sine peak voltage (V)',10,'',0)],
 db:[field('vin','Input (V)',1,'',.001),field('vout','Output (V)',5,'',.001)],
 freqcalc:[field('f','Frequency (Hz)',50,'',.001)],
 bjtcalc:[field('v','Supply voltage (V)',12,'',0),field('base','Base voltage (V)',5,'',0),field('rb','Base resistor (Ω)',10000,'',.1),field('rc','Collector resistor (Ω)',1000,'',.1),field('beta','Current gain β',100,'',1)],
 rlccalc:[field('v','AC voltage RMS (V)',12,'',0),field('r','Resistance (Ω)',100,'',.01),field('l','Inductance (mH)',100,'',.001),field('c','Capacitance (µF)',10,'',.001),field('f','Frequency (Hz)',159,'',.001)],
 opampcalc:[field('rf','Feedback Rf (Ω)',10000,'',.1),field('rg','Ground Rg (Ω)',1000,'',.1),field('vin','Input voltage (V)',.2)],
 transformercalc:[field('vp','Primary V RMS',12,'',0),field('np','Primary turns',100,'',.01),field('ns','Secondary turns',200,'',.01)],
 attenuator:[field('vin','Input V',10,'',0),field('atten','Attenuation (dB)',6,'',0)],
 powerfactor:[field('p','Real power (W)',500,'',0),field('s','Apparent power (VA)',625,'',.001)]
};
function generalToolResult(id,v){if(EXTRA_FIELDS[id])return extraToolCalculate(id,v);const fmt=n=>num(n,5);switch(id){
 case'ohm':if(!(v.r>0))return 'R > 0 required';return `I = ${fmt(v.v/v.r*1000)} mA\nP = ${fmt(v.v*v.v/v.r)} W`;
 case'divider':if(!(v.r1>0&&v.r2>0))return 'R1, R2 > 0 required';return `Vout = ${fmt(v.v*v.r2/(v.r1+v.r2))} V\nI = ${fmt(v.v/(v.r1+v.r2)*1000)} mA`;
 case'reactance':if(!(v.f>0&&v.l>0&&v.c>0))return 'f,L,C > 0 required';return `XL = ${fmt(2*Math.PI*v.f*v.l/1000)} Ω\nXC = ${fmt(1/(2*Math.PI*v.f*v.c/1e6))} Ω`;
 case'ledcalc':if(!(v.i>0&&v.v>v.vf))return 'Supply must exceed LED forward voltage';return `R ≈ ${fmt((v.v-v.vf)/(v.i/1000))} Ω\nPR ≈ ${fmt((v.v-v.vf)*v.i/1000)} W`;
 case'rms':return `Vrms = ${fmt(v.peak/Math.sqrt(2))} V\nVpp = ${fmt(v.peak*2)} V`;
 case'db':if(!(v.vin>0&&v.vout>0))return 'Voltages must be positive';return `Voltage gain = ${fmt(v.vout/v.vin)} ×\nGain = ${fmt(20*Math.log10(v.vout/v.vin))} dB`;
 case'freqcalc':if(!(v.f>0))return 'f > 0';return `Period = ${fmt(1/v.f*1000)} ms\nAngular frequency = ${fmt(2*Math.PI*v.f)} rad/s`;
 case'bjtcalc':{if(!(v.rb>0&&v.rc>0&&v.beta>0))return 'Positive resistances and β required';const ib=Math.max(0,(v.base-.7)/v.rb),ic=Math.min(v.beta*ib,Math.max(0,(v.v-.2)/v.rc)),vc=v.v-ic*v.rc;return `IB ≈ ${fmt(ib*1000)} mA\nIC ≈ ${fmt(ic*1000)} mA\nVCE ≈ ${fmt(Math.max(.2,vc))} V\nIllustrative simplified NPN model`}
 case'rlccalc':{if(!(v.r>0&&v.l>0&&v.c>0&&v.f>0))return 'R,L,C,f > 0 required';const l=v.l/1000,c=v.c/1e6,xl=2*Math.PI*v.f*l,xc=1/(2*Math.PI*v.f*c),z=Math.hypot(v.r,xl-xc),i=v.v/z,fr=1/(2*Math.PI*Math.sqrt(l*c)),q=2*Math.PI*fr*l/v.r;return `|Z| = ${fmt(z)} Ω\nIrms = ${fmt(i*1000)} mA\nf₀ = ${fmt(fr)} Hz\nQ ≈ ${fmt(q)}\nP = ${fmt(i*i*v.r)} W`}
 case'opampcalc':if(!(v.rf>0&&v.rg>0))return 'Positive resistance required';return `Non-inverting ideal gain = ${fmt(1+v.rf/v.rg)} ×\nVout ideal = ${fmt(v.vin*(1+v.rf/v.rg))} V`;
 case'transformercalc':if(!(v.np>0&&v.ns>0))return 'Turns must be positive';return `Turns ratio Ns/Np = ${fmt(v.ns/v.np)}\nSecondary ideal voltage = ${fmt(v.vp*v.ns/v.np)} V`;
 case'attenuator':return `Vout = ${fmt(v.vin*10**(-v.atten/20))} V\nVoltage ratio = ${fmt(10**(-v.atten/20))}`;
 case'powerfactor':if(!(v.s>0&&v.p>=0&&v.p<=v.s))return 'Require 0 ≤ W ≤ VA';return `Power factor = ${fmt(v.p/v.s)}\nPhase magnitude = ${fmt(Math.acos(v.p/v.s)*180/Math.PI)}°`;
 default:return '';
}}
const CODE_COLORS=['black','brown','red','orange','yellow','green','blue','violet','gray','white'];
function mountSpecial(id,host){if(id==='rescolors'){host.innerHTML=`<h2>${tr('rescolors')}</h2><div class="form-grid">${[0,1,2,3].map(i=>`<label>Band ${i+1}<select id="color${i}">${(i===3?['gold','silver','brown','red']:CODE_COLORS).map(x=>`<option value="${x}">${x}</option>`).join('')}</select></label>`).join('')}</div><div class="color-resistor" id="colorBody">${[0,1,2,3].map(()=>'<span></span>').join('')}</div><div class="result" id="calcOutput"></div>`;['brown','black','red','gold'].forEach((x,i)=>host.querySelector('#color'+i).value=x);function update(){let colors=[0,1,2,3].map(i=>host.querySelector('#color'+i).value);Array.from(host.querySelectorAll('#colorBody span')).forEach((span,i)=>span.style.background=colors[i]);const ohms=(10*CODE_COLORS.indexOf(colors[0])+CODE_COLORS.indexOf(colors[1]))*10**CODE_COLORS.indexOf(colors[2]);host.querySelector('#calcOutput').textContent=`R = ${ohms.toLocaleString()} Ω ±${({gold:5,silver:10,brown:1,red:2})[colors[3]]}%`}host.querySelectorAll('select').forEach(el=>el.onchange=update);update();return true}
 if(id==='numbers'){host.innerHTML=`<h2>${tr('numbers')}</h2><div class="form-grid"><label>Decimal (0–1,000,000)<input id="decimal" type="number" value="42" min="0" max="1000000" step="1"></label></div><div class="result" id="calcOutput"></div>`;function update(){const n=Number(host.querySelector('#decimal').value);host.querySelector('#calcOutput').textContent=Number.isSafeInteger(n)&&n>=0&&n<=1e6?`Binary: ${n.toString(2)}\nOctal: ${n.toString(8)}\nHexadecimal: ${n.toString(16).toUpperCase()}`:'Enter an integer between 0 and 1,000,000'}host.querySelector('#decimal').oninput=update;update();return true}
 if(id==='logiccalc'){host.innerHTML=`<h2>${tr('logiccalc')}</h2><div class="form-grid"><label>Gate<select id="lgGate">${['AND','OR','NOT','NAND','NOR','XOR','XNOR'].map(s=>`<option>${s}</option>`).join('')}</select></label><label>A<select id="lgA"><option>0</option><option>1</option></select></label><label>B<select id="lgB"><option>0</option><option>1</option></select></label></div><div class="result" id="calcOutput"></div>`;function update(){const a=Number(host.querySelector('#lgA').value),b=Number(host.querySelector('#lgB').value),op=host.querySelector('#lgGate').value;const output=({AND:a&b,OR:a|b,NOT:1-a,NAND:1-(a&b),NOR:1-(a|b),XOR:a^b,XNOR:1-(a^b)})[op];host.querySelector('#calcOutput').textContent=`${op} : A=${a} B=${b} → OUT=${output}`}host.querySelectorAll('select').forEach(s=>s.onchange=update);update();return true}
 return false}
const FIELD_LABELS={"uz":{"Voltage (V)":"Kuchlanish (V)","Resistance (Ω)":"Qarshilik (Ω)","Input voltage (V)":"Kirish kuchlanishi (V)","R1 (Ω)":"R1 (Ω)","R2 (Ω)":"R2 (Ω)","Frequency (Hz)":"Chastota (Hz)","Inductance (mH)":"Induktivlik (mH)","Capacitance (µF)":"Sig‘im (µF)","Supply (V)":"Manba (V)","LED forward V":"LED to‘g‘ri kuchlanishi","LED current (mA)":"LED toki (mA)","Sine peak voltage (V)":"Sinus cho‘qqi kuchlanishi (V)","Input (V)":"Kirish (V)","Output (V)":"Chiqish (V)","Supply voltage (V)":"Manba kuchlanishi (V)","Base voltage (V)":"Baza kuchlanishi (V)","Base resistor (Ω)":"Baza rezistori (Ω)","Collector resistor (Ω)":"Kollektor rezistori (Ω)","Current gain β":"Tok kuchaytirishi β","AC voltage RMS (V)":"AC kuchlanish RMS (V)","Feedback Rf (Ω)":"Teskari aloqa Rf (Ω)","Ground Rg (Ω)":"Yerga ulangan Rg (Ω)","Primary V RMS":"Birlamchi V RMS","Primary turns":"Birlamchi o‘ramlar","Secondary turns":"Ikkilamchi o‘ramlar","Input V":"Kirish V","Attenuation (dB)":"So‘nish (dB)","Real power (W)":"Aktiv quvvat (W)","Apparent power (VA)":"To‘liq quvvat (VA)"},"ru":{"Voltage (V)":"Напряжение (В)","Resistance (Ω)":"Сопротивление (Ω)","Input voltage (V)":"Входное напряжение (В)","R1 (Ω)":"R1 (Ω)","R2 (Ω)":"R2 (Ω)","Frequency (Hz)":"Частота (Гц)","Inductance (mH)":"Индуктивность (мГн)","Capacitance (µF)":"Ёмкость (мкФ)","Supply (V)":"Питание (В)","LED forward V":"Прямое напряжение LED","LED current (mA)":"Ток LED (мА)","Sine peak voltage (V)":"Пиковое напряжение синуса (В)","Input (V)":"Вход (В)","Output (V)":"Выход (В)","Supply voltage (V)":"Напряжение питания (В)","Base voltage (V)":"Напряжение базы (В)","Base resistor (Ω)":"Резистор базы (Ω)","Collector resistor (Ω)":"Резистор коллектора (Ω)","Current gain β":"Коэффициент усиления β","AC voltage RMS (V)":"Действующее AC напряжение (В)","Feedback Rf (Ω)":"Обратная связь Rf (Ω)","Ground Rg (Ω)":"Резистор Rg на землю (Ω)","Primary V RMS":"Первичное напряжение RMS","Primary turns":"Число первичных витков","Secondary turns":"Число вторичных витков","Input V":"Вход V","Attenuation (dB)":"Ослабление (дБ)","Real power (W)":"Активная мощность (Вт)","Apparent power (VA)":"Полная мощность (ВА)"}};
function fieldLabel(label){return FIELD_LABELS[lang]?.[label]||label}
function mountTool(id,host){if(mountSpecial(id,host))return;const fields=TOOL_FIELDS[id];if(!fields){host.textContent='Tool unavailable';return}host.innerHTML=`<h2>${esc(tr(TOOLS.find(t=>t[0]===id)?.[2]||id))}</h2><div class="form-grid">${fields.map(f=>`<label>${esc(fieldLabel(f.label))}<input data-field="${f.id}" type="number" value="${f.value}" step="any" ${f.min!==null?'min="'+f.min+'"':''}></label>`).join('')}</div><div id="calcOutput" class="result"></div>${id==='rlccalc'?'<canvas id="rlcCanvas" width="1000" height="310" style="display:block;width:100%;background:#071827;border-radius:10px;margin-top:15px"></canvas>':''}`;
 function recalc(){const values={};host.querySelectorAll('[data-field]').forEach(el=>values[el.dataset.field]=Number(el.value));host.querySelector('#calcOutput').textContent=Object.values(values).every(Number.isFinite)?localizeCalcResult(generalToolResult(id,values)):tr('invalidValue');if(id==='rlccalc')drawRlc(values,host.querySelector('#rlcCanvas'))}host.querySelectorAll('[data-field]').forEach(el=>el.oninput=recalc);recalc()}
function drawRlc(v,canvas){const ctx=canvas?.getContext('2d');if(!ctx)return;const W=canvas.width,H=canvas.height;ctx.fillStyle='#071827';ctx.fillRect(0,0,W,H);if(!(v.r>0&&v.l>0&&v.c>0))return;const L=v.l/1000,C=v.c/1e6,f0=1/(2*Math.PI*Math.sqrt(L*C));ctx.strokeStyle='#264559';ctx.lineWidth=1;for(let y=30;y<H;y+=55){ctx.beginPath();ctx.moveTo(35,y);ctx.lineTo(W-20,y);ctx.stroke()}ctx.strokeStyle='#25dcb0';ctx.lineWidth=3;ctx.beginPath();for(let x=35;x<W-20;x++){const f=f0*(.12+(x-35)/(W-55)*3),z=Math.hypot(v.r,2*Math.PI*f*L-1/(2*Math.PI*f*C));const y=H-30-(v.r/z)*(H-65);if(x===35)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke();ctx.fillStyle='#afc4d9';ctx.font='18px monospace';ctx.fillText(`Resonance: ${num(f0,2)} Hz`,48,29)}
function openTool(id){selectedTool=id;mountTool(id,$('toolDetails'));$$('[data-tool]').forEach(b=>b.classList.toggle('active',b.dataset.tool===id));const formula=TOOL_FORMULAS[id];if(formula){const note=document.createElement('div');note.className='disclaimer-panel';note.innerHTML=`<strong>${esc(tr('calculatorFormula'))}</strong><p><code>${esc(formula)}</code></p>`;$('toolDetails').appendChild(note)}}
function openLab(id){if(['led','divider','ldr'].includes(id)){loadSample(id,true);showLabGuide(id);return}let tool=id==='rlc'?'rlccalc':id==='logic'?'logiccalc':id==='rc'?'rctime':id==='pwm'?'pwmcalc':'bjtcalc';mountTool(tool,$('labDetails'));}
function init(){lang=safeGet('electro2_lang','uz');if(!UI[lang])lang='uz';theme=safeGet('electro2_theme','light');if(!['light','dark'].includes(theme))theme='light';$('language').value=lang;setTheme(theme);
 $('language').onchange=e=>{lang=e.target.value;safeSet('electro2_lang',lang);translate();if(page==='labs'&&currentLab&&!['led','divider','ldr'].includes(currentLab))openLab(currentLab)};
 $('themeToggle').onclick=()=>setTheme(theme==='dark'?'light':'dark');$('brandHome').onclick=()=>go('home');$$('[data-page]').forEach(b=>b.onclick=()=>go(b.dataset.page));$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
 $('undo').onclick=undo;$('redo').onclick=redo;$('deleteSelected').onclick=removeSelection;$('clearAll').onclick=clearAll;$('demo').onclick=()=>loadSample('led');$('viewMode').onclick=()=>{physical=!physical;$('viewMode').textContent=tr(physical?'showSchematic':'showPhysical');renderBoard()};
 $('cancelWire').onclick=()=>{pending=null;paletteSelection=null;$('wireHint').textContent=tr('wireHint');renderAll()};$('simulate').onclick=()=>{run=!run;$("simulate").textContent=tr(run?'stop':'simulate');$('status').textContent='● '+tr(run?'running':'paused');if(run)calculateNow()};
 $('save').onclick=saveFile;$('load').onclick=()=>$('loadFile').click();$('loadFile').onchange=async e=>{await openFile(e.target.files?.[0]);e.target.value=''};
 $('resetGraph').onclick=()=>{history=[];graphTime=0;drawTimeline();if(page==='scope')renderScope()};
 let currentLabLocal='';$$('[data-lab]').forEach(b=>b.onclick=()=>{currentLab=b.dataset.lab;currentLabLocal=currentLab;openLab(currentLab)});
 $('scopeSource').onchange=renderScope;['wave','amplitude','frequency'].forEach(id=>$(id).oninput=renderScope);$('pauseScope').onclick=()=>{scopePlaying=!scopePlaying;$('pauseScope').textContent=tr(scopePlaying?'pause':'resume')};
 initProfessional();setupEditor();initAddon();renderTools();loadSample('led',false);run=false;results=null;history=[];graphTime=0;renderAll();translate();go('home');drawTimeline();updateUndoButtons();
 setInterval(()=>{if(run){graphTime+=.28;if(!results)results=solveDC();addHistorySample();drawTimeline();if(page==='scope'&&$('scopeSource').value==='circuit')renderScope()}if(scopePlaying&&page==='scope'&&$('scopeSource').value==='generator'){lastSignal=(lastSignal+.018)%1;renderScope()}},280);
}
let currentLab='';



/* ===============================================================
   ELECTROTOOLS STUDIO 5 DEMO — EXTENSION MODULE
   Formula reference, professional calculator catalog, notebook,
   session reports and productivity controls.
   Everything works offline; no external dependencies.
================================================================ */
const EXTRA_TEXT = {
  uz: {
    offlineReady:"OFFLINE TAYYOR",referenceSection:"MA'LUMOTNOMA",formulas:"Formulalar",notebook:"Lab jurnali",
    formulaTitle:"Elektronika formulalari",formulaSubtitle:"Formulalar, izohlar va mos kalkulyatorlar bir joyda.",
    browseFormulas:"Formulalarni ko‘rish",availableParts:"Elektron detallar",calculators:"Kalkulyatorlar",
    componentLibrary:"Sxema katalogi",instantCalculations:"Interaktiv hisoblash",searchableReference:"Qidiriladigan ma'lumotnoma",
    savedNotes:"Saqlangan yozuvlar",localNotebook:"Brauzerda mahalliy saqlanadi",quickStart:"Tez boshlash",
    quickDesc:"Tayyor sxema, laboratoriya yoki jurnaldan boshlang.",loadLedExample:"LED sxemasi",
    loadDividerExample:"Kuchlanish bo‘luvchi",openNotebook:"Lab jurnalini ochish",duplicate:"Nusxalash",
    newBoard:"Yangi sxema",exportCSV:"CSV eksport",captureLab:"Natijani jurnalga yozish",
    searchTools:"Kalkulyator qidirish...",searchFormulas:"Formula yoki belgi qidirish...",allCategories:"Barcha yo‘nalishlar",
    catDc:"DC va quvvat",catAc:"AC va signallar",catComponents:"Komponentlar",catDigital:"Raqamli elektronika",
    noSearchResults:"Qidiruv bo‘yicha hech narsa topilmadi.",copyFormula:"Nusxalash",openCalculator:"Kalkulyatorni ochish",
    learningNotice:"O‘quv eslatmasi",referenceDisclaimer:"Formulalar ideal yoki soddalashtirilgan modellarga asoslangan. Real detallar uchun pasport ma'lumotlarini tekshiring.",
    journalLabel:"TAJRIBA QAYDLARI",notebookSubtitle:"O‘lchov, xulosa va tajriba natijalarini brauzerda saqlang.",
    exportNotes:"Hisobotni eksport qilish",experimentTitle:"Tajriba nomi",observations:"Kuzatish va xulosalar",
    saveNote:"Yozuvni saqlash",captureReadings:"Joriy o‘lchovni qo‘shish",notebookPrivacy:"Yozuvlar faqat shu brauzerda qoladi. Serverga yuborilmaydi.",
    recentNotes:"Saqlangan tajribalar",readNote:"Tahrirlash",deleteNote:"O‘chirish",notesEmpty:"Hali yozuv yo‘q. Birinchi tajribani saqlang.",
    noteSaved:"Tajriba jurnalda saqlandi",noteDeleted:"Yozuv o‘chirildi",noteBlank:"Tajriba nomini kiriting.",
    noMeasurements:"Avval sxemada Simulyatsiya ni ishga tushiring.",csvEmpty:"Grafikda hali ma'lumot yo‘q.",
    csvSaved:"CSV eksport qilindi",copyDone:"Formula nusxalandi",duplicateFirst:"Avval detalni tanlang.",
    onlyComponents:"Faqat detallarni nusxalash mumkin",noteLoad:"Yozuv tahrir uchun ochildi",
    seriesres:"Ketma-ket rezistorlar",parallelres:"Parallel rezistorlar",rctime:"RC vaqt doimiysi",
    rltime:"RL vaqt doimiysi",lowpass:"RC past chastota filtri",capenergy:"Kondensator energiyasi",
    indenergy:"Induktor energiyasi",charge:"Kondensator zaryadi",timer555:"555 taymer",
    batterylife:"Batareya ishlash vaqti",efficiencycalc:"Foydalilik koeffitsiyenti",
    pwmcalc:"PWM signali",adccalc:"ADC rezolyutsiyasi",wiredrop:"Simdagi kuchlanish tushuvi",
    guideTitle:"Tajriba ko‘rsatmalari",labRc:"RC zaryadlanishi",labPwm:"PWM boshqaruvi",calculatorFormula:"Asosiy formula",assumptions:"Model izohi",reportReady:"Hisobot tayyor"
  },
  en: {
    offlineReady:"OFFLINE READY",referenceSection:"REFERENCE",formulas:"Formulas",notebook:"Lab notebook",
    formulaTitle:"Electronics formula library",formulaSubtitle:"Equations, descriptions and matching calculators in one place.",
    browseFormulas:"Browse formulas",availableParts:"Circuit components",calculators:"Calculators",
    componentLibrary:"Component library",instantCalculations:"Interactive calculations",searchableReference:"Searchable reference",
    savedNotes:"Saved experiments",localNotebook:"Saved in this browser",quickStart:"Quick start",
    quickDesc:"Start with an example circuit or open the lab notebook.",loadLedExample:"LED circuit",
    loadDividerExample:"Voltage divider",openNotebook:"Open notebook",duplicate:"Duplicate",
    newBoard:"New circuit",exportCSV:"Export CSV",captureLab:"Capture to notebook",
    searchTools:"Search calculators...",searchFormulas:"Search formulas or symbols...",allCategories:"All categories",
    catDc:"DC & power",catAc:"AC & signals",catComponents:"Components",catDigital:"Digital electronics",
    noSearchResults:"No results. Try another term or category.",copyFormula:"Copy",openCalculator:"Open calculator",
    learningNotice:"Learning note",referenceDisclaimer:"These are idealized or simplified formulas. Check component datasheets before real-world use.",
    journalLabel:"EXPERIMENT JOURNAL",notebookSubtitle:"Save measurements, observations and conclusions in your browser.",
    exportNotes:"Export report",experimentTitle:"Experiment title",observations:"Observations and conclusions",
    saveNote:"Save entry",captureReadings:"Insert current readings",notebookPrivacy:"Entries stay in this browser and are not sent to a server.",
    recentNotes:"Saved experiments",readNote:"Edit",deleteNote:"Delete",notesEmpty:"No entries yet. Save your first experiment.",
    noteSaved:"Experiment saved",noteDeleted:"Entry removed",noteBlank:"Enter an experiment title.",
    noMeasurements:"Run a circuit simulation first.",csvEmpty:"No graph samples to export.",
    csvSaved:"CSV exported",copyDone:"Formula copied",duplicateFirst:"Select a component first.",
    onlyComponents:"Only components can be duplicated",noteLoad:"Entry loaded for editing",
    seriesres:"Series resistors",parallelres:"Parallel resistors",rctime:"RC time constant",
    rltime:"RL time constant",lowpass:"RC low-pass filter",capenergy:"Capacitor energy",
    indenergy:"Inductor energy",charge:"Capacitor charge",timer555:"555 astable timer",
    batterylife:"Battery run time",efficiencycalc:"Efficiency",
    pwmcalc:"PWM signal",adccalc:"ADC resolution",wiredrop:"Wire voltage drop",
    guideTitle:"Experiment instructions",labRc:"RC charging",labPwm:"PWM control",calculatorFormula:"Main formula",assumptions:"Model assumptions",reportReady:"Report ready"
  },
  ru: {
    offlineReady:"ГОТОВО ОФЛАЙН",referenceSection:"СПРАВОЧНИК",formulas:"Формулы",notebook:"Лабораторный журнал",
    formulaTitle:"Справочник формул электроники",formulaSubtitle:"Уравнения, пояснения и калькуляторы в одном месте.",
    browseFormulas:"Смотреть формулы",availableParts:"Компоненты",calculators:"Калькуляторы",
    componentLibrary:"Каталог компонентов",instantCalculations:"Интерактивный расчёт",searchableReference:"Поиск по формулам",
    savedNotes:"Сохранённые записи",localNotebook:"Хранятся в браузере",quickStart:"Быстрый старт",
    quickDesc:"Откройте пример цепи или лабораторный журнал.",loadLedExample:"Цепь со светодиодом",
    loadDividerExample:"Делитель напряжения",openNotebook:"Открыть журнал",duplicate:"Дублировать",
    newBoard:"Новая схема",exportCSV:"Экспорт CSV",captureLab:"Записать результат",
    searchTools:"Поиск калькуляторов...",searchFormulas:"Поиск формул и символов...",allCategories:"Все категории",
    catDc:"DC и мощность",catAc:"AC и сигналы",catComponents:"Компоненты",catDigital:"Цифровая электроника",
    noSearchResults:"Ничего не найдено. Попробуйте другой запрос.",copyFormula:"Копировать",openCalculator:"Открыть калькулятор",
    learningNotice:"Учебное примечание",referenceDisclaimer:"Формулы идеализированные или приближённые. Для реальных деталей сверяйтесь с документацией производителя.",
    journalLabel:"ЖУРНАЛ ОПЫТОВ",notebookSubtitle:"Сохраняйте измерения, наблюдения и выводы в браузере.",
    exportNotes:"Экспорт отчёта",experimentTitle:"Название опыта",observations:"Наблюдения и выводы",
    saveNote:"Сохранить запись",captureReadings:"Вставить текущие измерения",notebookPrivacy:"Записи хранятся только в браузере и не передаются на сервер.",
    recentNotes:"Сохранённые опыты",readNote:"Изменить",deleteNote:"Удалить",notesEmpty:"Записей пока нет. Сохраните первый опыт.",
    noteSaved:"Опыт сохранён",noteDeleted:"Запись удалена",noteBlank:"Укажите название опыта.",
    noMeasurements:"Сначала запустите симуляцию схемы.",csvEmpty:"Нет данных графика для экспорта.",
    csvSaved:"CSV экспортирован",copyDone:"Формула скопирована",duplicateFirst:"Сначала выберите компонент.",
    onlyComponents:"Можно дублировать только компоненты",noteLoad:"Запись открыта для редактирования",
    seriesres:"Последовательные резисторы",parallelres:"Параллельные резисторы",rctime:"Постоянная времени RC",
    rltime:"Постоянная времени RL",lowpass:"RC фильтр НЧ",capenergy:"Энергия конденсатора",
    indenergy:"Энергия катушки",charge:"Заряд конденсатора",timer555:"Таймер 555",
    batterylife:"Время работы батареи",efficiencycalc:"КПД",
    pwmcalc:"ШИМ сигнал",adccalc:"Разрешение АЦП",wiredrop:"Падение напряжения на проводе",
    guideTitle:"Инструкция к опыту",labRc:"Зарядка RC",labPwm:"ШИМ управление",calculatorFormula:"Основная формула",assumptions:"Допущения модели",reportReady:"Отчёт готов"
  }
};

// category = dc, ac, components or digital;
// F[0] category, F[1] equation, F[2..4] translated title,
// F[5..7] translated explanation, F[8] matching calculator ID.
const FORMULAS = [
  ["dc","I = U / R","Ohm's law — current","Om qonuni — tok","Закон Ома — ток","Current equals voltage divided by resistance.","Tok kuchlanishni qarshilikka bo‘lish orqali topiladi.","Ток равен напряжению, делённому на сопротивление.","ohm"],
  ["dc","U = I · R","Ohm's law — voltage","Om qonuni — kuchlanish","Закон Ома — напряжение","Voltage across an ideal resistor.","Ideal rezistordagi kuchlanish tushuvi.","Напряжение на идеальном резисторе.","ohm"],
  ["dc","P = U · I","Electrical power","Elektr quvvati","Электрическая мощность","DC power from voltage and current.","DC quvvat kuchlanish va tokdan topiladi.","Мощность постоянного тока по напряжению и току.","ohm"],
  ["dc","P = I² · R","Resistive power loss","Rezistorning quvvat sarfi","Потери мощности в резисторе","Resistor heating under steady current.","Barqaror tokda rezistordagi issiqlik quvvati.","Мощность тепловыделения в резисторе.","ohm"],
  ["dc","P = U² / R","Power by voltage","Kuchlanish bo‘yicha quvvat","Мощность по напряжению","Equivalent power formula for a resistor.","Rezistor uchun muqobil quvvat formulasi.","Эквивалентная формула мощности резистора.","ohm"],
  ["dc","Rₛ = R₁ + R₂ + …","Series resistance","Ketma-ket qarshilik","Последовательное сопротивление","Resistances add in a series circuit.","Ketma-ket ulangan qarshiliklar qo‘shiladi.","Сопротивления в последовательной цепи складываются.","seriesres"],
  ["dc","1/Rₚ = 1/R₁ + 1/R₂ + …","Parallel resistance","Parallel qarshilik","Параллельное сопротивление","Reciprocal resistances add for parallel branches.","Parallel tarmoqlarda teskari qarshiliklar yig‘iladi.","Суммируются обратные сопротивления ветвей.","parallelres"],
  ["dc","Uout = Uin · R₂/(R₁+R₂)","Voltage divider","Kuchlanish bo‘luvchi","Делитель напряжения","For an unloaded two-resistor divider.","Yuksiz ikkita rezistorli bo‘luvchi uchun.","Для ненагруженного делителя из двух резисторов.","divider"],
  ["dc","Σ I(node) = 0","Kirchhoff's current law","Kirxgofning tok qonuni","Первый закон Кирхгофа","Signed currents at a node sum to zero.","Tugundagi ishorali toklar yig‘indisi nol.","Алгебраическая сумма токов в узле равна нулю.","ohm"],
  ["dc","Σ U(loop) = 0","Kirchhoff's voltage law","Kirxgofning kuchlanish qonuni","Второй закон Кирхгофа","Signed voltage changes around a loop sum to zero.","Konturdagi kuchlanishlarning algebraik yig‘indisi nol.","Сумма напряжений по замкнутому контуру равна нулю.","ohm"],
  ["dc","E = P · t","Electrical energy","Elektr energiyasi","Электрическая энергия","Energy in joules for power in watts and time in seconds.","P vatt, t sekund bo‘lsa energiya joulda.","При P в ваттах и t в секундах энергия в джоулях.","efficiencycalc"],
  ["dc","η = Pout/Pin · 100%","Efficiency","Foydalilik koeffitsiyenti","КПД","Useful output power divided by input power.","Foydali chiqish quvvatining kirish quvvatiga nisbati.","Отношение выходной мощности к входной.","efficiencycalc"],
  ["components","Q = C · U","Capacitor charge","Kondensator zaryadi","Заряд конденсатора","Charge Q in coulombs, C in farads.","Q kulonda, C faradda o‘lchanadi.","Q — кулоны, C — фарады.","charge"],
  ["components","E = ½ · C · U²","Stored capacitor energy","Kondensator energiyasi","Энергия конденсатора","Stored electrostatic energy in joules.","Saqlangan elektr maydon energiyasi joulda.","Энергия электрического поля в джоулях.","capenergy"],
  ["components","τ = R · C","RC time constant","RC vaqt doimiysi","Постоянная времени RC","Time constant in seconds with R in Ω and C in F.","R om va C farad bo‘lsa τ sekundda.","τ в секундах при R в омах и C в фарадах.","rctime"],
  ["components","Uc(t) = Us(1 − e^(−t/RC))","RC charging","RC zaryadlanishi","Зарядка RC","Unloaded first-order capacitor charging.","Birinchi tartibli kondensator zaryadlanish modeli.","Зарядка конденсатора первого порядка.","rctime"],
  ["components","E = ½ · L · I²","Stored inductor energy","G‘altak energiyasi","Энергия катушки","Magnetic energy in an ideal inductor.","Ideal g‘altakdagi magnit maydon energiyasi.","Энергия магнитного поля идеальной катушки.","indenergy"],
  ["components","τ = L / R","RL time constant","RL vaqt doimiysi","Постоянная времени RL","Time constant for an ideal first-order RL circuit.","Ideal birinchi tartibli RL zanjir uchun.","Для идеальной RL-цепи первого порядка.","rltime"],
  ["components","Uₗ = L · dI/dt","Inductor voltage","G‘altak kuchlanishi","Напряжение катушки","Instantaneous inductor voltage.","G‘altakning oniy kuchlanishi.","Мгновенное напряжение на индуктивности.","rltime"],
  ["ac","Xₗ = 2π f L","Inductive reactance","Induktiv reaktans","Индуктивное сопротивление","Frequency-dependent ideal inductor reactance.","Chastotaga bog‘liq ideal g‘altak reaktansi.","Реактивное сопротивление идеальной катушки.","reactance"],
  ["ac","Xc = 1/(2π f C)","Capacitive reactance","Sig‘im reaktansi","Ёмкостное сопротивление","Ideal capacitor reactance magnitude.","Ideal kondensator reaktansining moduli.","Модуль реактивного сопротивления конденсатора.","reactance"],
  ["ac","|Z| = √(R² + (Xₗ−Xc)²)","Series RLC impedance","RLC to‘liq qarshiligi","Импеданс последовательной RLC","Magnitude of a series RLC impedance.","Ketma-ket RLC zanjiri impedansining moduli.","Модуль импеданса последовательной RLC-цепи.","rlccalc"],
  ["ac","f₀ = 1/(2π√(LC))","Resonance frequency","Rezonans chastotasi","Резонансная частота","Ideal series RLC resonance.","Ideal ketma-ket RLC rezonansi.","Резонанс идеальной последовательной RLC-цепи.","rlccalc"],
  ["ac","Q = (1/R)√(L/C)","RLC quality factor","RLC sifat koeffitsiyenti","Добротность RLC","Series RLC Q at resonance.","Rezonansdagi ketma-ket RLC sifat koeffitsiyenti.","Добротность последовательной RLC при резонансе.","rlccalc"],
  ["ac","T = 1/f","Frequency and period","Chastota va davr","Частота и период","One full cycle duration.","Bitta davr davomiyligi.","Длительность одного периода.","freqcalc"],
  ["ac","Urms = Upeak/√2","Sine RMS voltage","Sinus RMS kuchlanishi","Действующее напряжение синуса","For a pure sine wave only.","Faqat sof sinusoidal signal uchun.","Только для чистого синусоидального сигнала.","rms"],
  ["ac","Upp = 2 · Upeak","Peak-to-peak voltage","Cho‘qqidan cho‘qqigacha kuchlanish","Напряжение пик-пик","For a symmetric waveform.","Simmetrik signal uchun.","Для симметричного сигнала.","rms"],
  ["ac","Gain(dB) = 20log₁₀(Uout/Uin)","Voltage gain in dB","Kuchlanish dB kuchaytirishi","Усиление напряжения в дБ","Same input/output impedance assumption.","Kirish va chiqish impedanslari teng deb olinadi.","При одинаковых входном и выходном импедансах.","db"],
  ["ac","fc = 1/(2πRC)","RC low-pass cutoff","RC past chastota chegarasi","Частота среза RC-фильтра НЧ","Ideal first-order passive RC filter.","Ideal birinchi tartibli passiv RC filtr.","Идеальный пассивный RC-фильтр первого порядка.","lowpass"],
  ["components","f ≈ 1.44/((RA + 2RB)·C)","555 astable frequency","555 taymer chastotasi","Частота генератора 555","Idealized 555 astable oscillator.","555 astabil generatorning taxminiy formulasi.","Приближённая формула генератора 555.","timer555"],
  ["components","Us/Up = Ns/Np","Ideal transformer","Ideal transformator","Идеальный трансформатор","Assumes an ideal transformer with no losses.","Yo‘qotishsiz ideal transformator deb olinadi.","Предполагается идеальный трансформатор без потерь.","transformercalc"],
  ["components","Ic ≈ β · Ib","BJT current gain","BJT tok kuchaytirishi","Усиление тока BJT","Approximation in forward-active operation.","Faol rejimdagi soddalashtirilgan baho.","Приближение для активного режима транзистора.","bjtcalc"],
  ["components","R ≈ (Us − Vf)/I","LED series resistor","LED ketma-ket rezistori","Резистор светодиода","Estimate using LED forward voltage.","LED to‘g‘ri kuchlanishi bilan taxminiy hisob.","Оценка по прямому напряжению светодиода.","ledcalc"],
  ["ac","PF = P/S = cos φ","AC power factor","AC quvvat koeffitsiyenti","Коэффициент мощности AC","Real over apparent power for a sinusoidal system.","Sinusoidal zanjirda aktiv va to‘liq quvvat nisbati.","Отношение активной и полной мощности при синусоиде.","powerfactor"],
  ["digital","Y = A ⊕ B","XOR gate","XOR mantiqiy elementi","Элемент XOR","Output is 1 when the two bits differ.","Ikki bit farq qilganda chiqish 1 bo‘ladi.","Выход равен 1, когда входные биты различаются.","logiccalc"],
  ["digital","ΔU = Uref/(2ᴺ−1)","ADC code step","ADC raqam qadami","Шаг кода АЦП","Approximate endpoint-inclusive ideal ADC step.","Ideal ADC uchun chet qiymatlarni o‘z ichiga olgan qadam.","Приближённый шаг идеального АЦП с крайними кодами.","adccalc"],
  ["digital","D = Ton/T · 100%","PWM duty cycle","PWM to‘ldirish koeffitsiyenti","Коэффициент заполнения ШИМ","Percentage of each period at HIGH.","Har davrdagi HIGH davomiyligining foizi.","Процент периода с высоким уровнем сигнала.","pwmcalc"]
];

const TOOL_CATEGORIES = {
  ohm:'dc',divider:'dc',reactance:'ac',rescolors:'components',ledcalc:'components',rms:'ac',db:'ac',freqcalc:'ac',
  bjtcalc:'components',numbers:'digital',rlccalc:'ac',logiccalc:'digital',opampcalc:'components',
  transformercalc:'components',attenuator:'ac',powerfactor:'ac',seriesres:'dc',parallelres:'dc',
  rctime:'components',rltime:'components',lowpass:'ac',capenergy:'components',indenergy:'components',
  charge:'components',timer555:'components',batterylife:'dc',efficiencycalc:'dc',pwmcalc:'digital',
  adccalc:'digital',wiredrop:'dc'
};

const TOOL_DESCRIPTIONS = {
  uz:{ohm:'U, I, R, P',divider:'Kuchlanish bo‘lishi',reactance:'XL va XC',rescolors:'4 halqali kod',
    ledcalc:'LED tok chegarasi',rms:'RMS va amplituda',db:'Desibel',freqcalc:'Davr va chastota',
    bjtcalc:'Tranzistor / BJT',numbers:'Ikkilik, hex, o‘nlik',rlccalc:'Rezonans va Q',logiccalc:'Mantiqiy eshiklar',
    opampcalc:'Kuchaytirish koeffitsiyenti',transformercalc:'O‘ramlar nisbati',attenuator:'So‘nish',powerfactor:'Quvvat koeffitsiyenti',
    seriesres:'Ketma-ket hisob',parallelres:'Parallel hisob',rctime:'Zaryadlanish vaqti',rltime:'Tokning o‘zgarishi',
    lowpass:'Filtr chegarasi',capenergy:'To‘plangan energiya',indenergy:'Magnit energiyasi',charge:'Zaryad miqdori',
    timer555:'Astabil generator',batterylife:'Taxminiy ishlash vaqti',efficiencycalc:'Quvvat samaradorligi',
    pwmcalc:'To‘ldirish koeffitsiyenti',adccalc:'Razryad va LSB',wiredrop:'DC simda kuchlanish tushishi'},
  ru:{ohm:'U, I, R, P',divider:'Деление напряжения',reactance:'XL и XC',rescolors:'4 полосы',
    ledcalc:'Ограничение тока LED',rms:'RMS и амплитуда',db:'Децибелы',freqcalc:'Период и частота',
    bjtcalc:'Транзистор / BJT',numbers:'Двоичная, hex, десятичная',rlccalc:'Резонанс и Q',logiccalc:'Логические элементы',
    opampcalc:'Коэффициент усиления',transformercalc:'Отношение витков',attenuator:'Ослабление',powerfactor:'Коэффициент мощности',
    seriesres:'Последовательное соединение',parallelres:'Параллельное соединение',rctime:'Время заряда',rltime:'Изменение тока',
    lowpass:'Частота среза',capenergy:'Запасённая энергия',indenergy:'Магнитная энергия',charge:'Электрический заряд',
    timer555:'Астабильный генератор',batterylife:'Приблизительное время работы',efficiencycalc:'Эффективность',
    pwmcalc:'Коэффициент заполнения',adccalc:'Разрядность и LSB',wiredrop:'Падение напряжения провода'}
};
function toolDescription(id,original){return TOOL_DESCRIPTIONS[lang]?.[id]||original}
function localizeCalcResult(text){
 if(lang==='en')return text;
 const pairs=lang==='uz'?[
   ['Cutoff','Chegara chastotasi'],['Frequency','Chastota'],['Period','Davr'],['Current','Tok'],['Power loss','Quvvat yo‘qotilishi'],
   ['Power','Quvvat'],['Charge','Zaryad'],['Stored energy','Saqlangan energiya'],['Voltage drop','Kuchlanish tushuvi'],
   ['Conductor power loss','Sim quvvat yo‘qotilishi'],['Efficiency','Foydalilik'],['Duty cycle','To‘ldirish koeffitsiyenti'],
   ['Idealized runtime','Taxminiy vaqt'],['Levels','Darajalar'],['Endpoint step','Chegaraviy qadam'],
   ['Nominal LSB bin','Nominal LSB'],['Supply','Manba'],['Voltage gain','Kuchaytirish'],['Gain','Kuchaytirish'],
   ['Impedance','Impedans'],['Resonance','Rezonans'],['Current gain','Tok kuchaytirishi'],['Stored','Saqlangan']
 ]:[
   ['Cutoff','Частота среза'],['Frequency','Частота'],['Period','Период'],['Current','Ток'],['Power loss','Потери мощности'],
   ['Power','Мощность'],['Charge','Заряд'],['Stored energy','Накопленная энергия'],['Voltage drop','Падение напряжения'],
   ['Conductor power loss','Потери в проводе'],['Efficiency','КПД'],['Duty cycle','Коэффициент заполнения'],
   ['Idealized runtime','Приблизительное время работы'],['Levels','Уровни'],['Endpoint step','Шаг по концам'],
   ['Nominal LSB bin','Номинальный LSB'],['Supply','Питание'],['Voltage gain','Усиление'],['Gain','Усиление'],
   ['Impedance','Импеданс'],['Resonance','Резонанс'],['Current gain','Усиление тока'],['Stored','Накоплено']
 ];
 return pairs.reduce((value,[a,b])=>value.replaceAll(a,b),text);
}

const TOOL_FORMULAS = {
  seriesres:'R = R₁+R₂+R₃',parallelres:'1/R = 1/R₁+1/R₂+1/R₃',
  rctime:'τ = R·C',rltime:'τ = L/R',lowpass:'fc = 1/(2πRC)',
  capenergy:'E = ½CU²',indenergy:'E = ½LI²',charge:'Q = CU',
  timer555:'f ≈ 1.44/((RA+2RB)C)',batterylife:'t ≈ capacity / load',
  efficiencycalc:'η = (Pout/Pin)·100%',pwmcalc:'D = (Ton/T)·100%',
  adccalc:'ΔV = Vref/(2ᴺ−1)',wiredrop:'ΔU = I·Rline'
};

const EXTRA_FIELDS = {
  seriesres:[field('r1','R1 (Ω)',100,'',0),field('r2','R2 (Ω)',220,'',0),field('r3','R3 (Ω)',330,'',0)],
  parallelres:[field('r1','R1 (Ω)',100,'',.001),field('r2','R2 (Ω)',220,'',.001),field('r3','R3 (Ω)',330,'',.001)],
  rctime:[field('r','Resistance (Ω)',1000,'',.001),field('c','Capacitance (µF)',100,'',.001)],
  rltime:[field('r','Resistance (Ω)',100,'',.001),field('l','Inductance (mH)',50,'',.001)],
  lowpass:[field('r','Resistance (Ω)',1000,'',.001),field('c','Capacitance (µF)',1,'',.001)],
  capenergy:[field('c','Capacitance (µF)',100,'',0),field('v','Voltage (V)',9)],
  indenergy:[field('l','Inductance (mH)',100,'',0),field('i','Current (A)',.5)],
  charge:[field('c','Capacitance (µF)',100,'',0),field('v','Voltage (V)',9)],
  timer555:[field('ra','RA (Ω)',10000,'',.001),field('rb','RB (Ω)',22000,'',.001),field('c','Capacitance (µF)',10,'',.001)],
  batterylife:[field('capacity','Battery capacity (mAh)',2000,'',.001),field('load','Average load (mA)',100,'',.001),field('usable','Usable fraction (%)',85,'',.001)],
  efficiencycalc:[field('pin','Input power (W)',10,'',.001),field('pout','Output power (W)',8,'',0)],
  pwmcalc:[field('ton','HIGH duration (ms)',3,'',0),field('period','Period (ms)',10,'',.001)],
  adccalc:[field('ref','Reference voltage (V)',3.3,'',.001),field('bits','ADC bits',10,'',1)],
  wiredrop:[field('i','Current (A)',1,'',0),field('r','Total conductor resistance (Ω)',.2,'',0)]
};

const EXTRA_FIELD_LABELS = {
  uz: {
    'R1 (Ω)':'R1 (Ω)','R2 (Ω)':'R2 (Ω)','R3 (Ω)':'R3 (Ω)',
    'Resistance (Ω)':'Qarshilik (Ω)','Capacitance (µF)':'Sig‘im (µF)','Inductance (mH)':'Induktivlik (mH)',
    'Voltage (V)':'Kuchlanish (V)','Current (A)':'Tok (A)','RA (Ω)':'RA (Ω)','RB (Ω)':'RB (Ω)',
    'Battery capacity (mAh)':'Batareya sig‘imi (mAh)','Average load (mA)':'O‘rtacha tok (mA)',
    'Usable fraction (%)':'Foydalaniladigan sig‘im (%)','Input power (W)':'Kirish quvvati (W)',
    'Output power (W)':'Chiqish quvvati (W)','HIGH duration (ms)':'HIGH davomiyligi (ms)',
    'Period (ms)':'Davr (ms)','Reference voltage (V)':'Tayanch kuchlanish (V)',
    'ADC bits':'ADC bitlari','Total conductor resistance (Ω)':'Simning umumiy qarshiligi (Ω)'
  },
  ru: {
    'Resistance (Ω)':'Сопротивление (Ω)','Capacitance (µF)':'Ёмкость (мкФ)',
    'Inductance (mH)':'Индуктивность (мГн)','Voltage (V)':'Напряжение (В)',
    'Current (A)':'Ток (А)','Battery capacity (mAh)':'Ёмкость батареи (мА·ч)',
    'Average load (mA)':'Средний ток нагрузки (мА)','Usable fraction (%)':'Доступная ёмкость (%)',
    'Input power (W)':'Входная мощность (Вт)','Output power (W)':'Выходная мощность (Вт)',
    'HIGH duration (ms)':'Длительность HIGH (мс)','Period (ms)':'Период (мс)',
    'Reference voltage (V)':'Опорное напряжение (В)','ADC bits':'Разрядность АЦП',
    'Total conductor resistance (Ω)':'Полное сопротивление провода (Ω)'
  }
};

function extraToolCalculate(id,v) {
  const f=x=>num(x,5);
  switch(id) {
    case 'seriesres':return `Rtotal = ${f(v.r1+v.r2+v.r3)} Ω`;
    case 'parallelres':return v.r1>0&&v.r2>0&&v.r3>0
      ?`Rtotal = ${f(1/(1/v.r1+1/v.r2+1/v.r3))} Ω`:'R1, R2, R3 > 0 required';
    case 'rctime':return v.r>0&&v.c>0?`τ = ${f(v.r*v.c/1e6)} s\n5τ ≈ ${f(5*v.r*v.c/1e6)} s (≈99.3% charging)`:'R, C > 0 required';
    case 'rltime':return v.r>0&&v.l>0?`τ = ${f((v.l/1000)/v.r)} s\n5τ ≈ ${f(5*v.l/1000/v.r)} s`:'R, L > 0 required';
    case 'lowpass':return v.r>0&&v.c>0?`Cutoff fc = ${f(1/(2*Math.PI*v.r*v.c/1e6))} Hz`:'R, C > 0 required';
    case 'capenergy':return v.c>=0?`Stored energy = ${f(.5*v.c/1e6*v.v*v.v)} J\n= ${f(.5*v.c*v.v*v.v)} µJ`:'C ≥ 0 required';
    case 'indenergy':return v.l>=0?`Stored energy = ${f(.5*v.l/1000*v.i*v.i)} J`:'L ≥ 0 required';
    case 'charge':return v.c>=0?`Charge Q = ${f(v.c*v.v)} µC\n= ${f(v.c*v.v/1e6)} C`:'C ≥ 0 required';
    case 'timer555': {
      if(!(v.ra>0&&v.rb>0&&v.c>0))return 'RA, RB, C > 0 required';
      const freq=1.44/((v.ra+2*v.rb)*v.c/1e6),d=(v.ra+v.rb)/(v.ra+2*v.rb)*100;
      return `Frequency ≈ ${f(freq)} Hz\nDuty cycle ≈ ${f(d)} %\nPeriod ≈ ${f(1000/freq)} ms`;
    }
    case 'batterylife': {
      if(!(v.capacity>0&&v.load>0&&v.usable>0&&v.usable<=100))return 'Capacity/load > 0, usable 0–100%';
      return `Idealized runtime ≈ ${f(v.capacity*v.usable/100/v.load)} hours\nExcludes aging and discharge effects.`;
    }
    case 'efficiencycalc':return v.pin>0&&v.pout>=0&&v.pout<=v.pin
      ?`Efficiency η = ${f(v.pout/v.pin*100)} %\nPower loss = ${f(v.pin-v.pout)} W`:'Require 0 ≤ Pout ≤ Pin and Pin > 0';
    case 'pwmcalc':return v.period>0&&v.ton>=0&&v.ton<=v.period
      ?`Duty cycle = ${f(100*v.ton/v.period)} %\nFrequency = ${f(1000/v.period)} Hz`:'Require 0 ≤ Ton ≤ period and period > 0';
    case 'adccalc':return v.ref>0&&Number.isInteger(v.bits)&&v.bits>=1&&v.bits<=24
      ?`Levels = ${2**v.bits}\nEndpoint step ≈ ${f(v.ref/(2**v.bits-1))} V\nNominal LSB bin ≈ ${f(v.ref/(2**v.bits))} V`:'Reference > 0, bits integer 1–24';
    case 'wiredrop':return v.i>=0&&v.r>=0
      ?`Voltage drop ΔV = ${f(v.i*v.r)} V\nConductor power loss = ${f(v.i*v.i*v.r)} W`:'Current and resistance ≥ 0 required';
    default:return '';
  }
}

function showLabGuide(which='manual') {
  const guides={
    uz:{led:'1. Simulyatsiyani ishga tushiring.\n2. Rezistor qiymatini o‘zgartiring va tokni kuzating.\n3. Kalitni oching va grafikda tok nolga tushishini tekshiring.',divider:'1. R1 yoki R2 ni o‘zgartiring.\n2. Voltmetrning natijasini ko‘ring.\n3. Natijani Vout=Vin×R2/(R1+R2) bilan solishtiring.',ldr:'1. LDR yorug‘lik qiymatini o‘zgartiring.\n2. LED toki va sim ranglarini kuzating.\n3. O‘lchovlarni jurnalga saqlang.',manual:'Elektron detal tanlang → sxemaga joylashtiring → kontaktlarni ulang → Simulyatsiya tugmasini bosing. Bu muharrir bir manbali soddalashtirilgan DC sxemalarni hisoblaydi.'},
    en:{led:'1. Run the simulator.\n2. Change the resistor and observe the current.\n3. Open the switch and verify that current falls to zero.',divider:'1. Change R1 or R2.\n2. Read the voltmeter value.\n3. Compare it with Vout=Vin×R2/(R1+R2).',ldr:'1. Change the photoresistor light level.\n2. Observe the LED current and wire highlights.\n3. Save readings in the notebook.',manual:'Choose a component → place it → connect terminal dots → click Simulate. The builder solves simplified single-source DC circuits.'},
    ru:{led:'1. Запустите симулятор.\n2. Измените сопротивление и проследите за током.\n3. Разомкните ключ и убедитесь, что ток упал до нуля.',divider:'1. Измените R1 или R2.\n2. Прочитайте показания вольтметра.\n3. Сравните с Vout=Vin×R2/(R1+R2).',ldr:'1. Измените освещённость фоторезистора.\n2. Наблюдайте ток LED и подсветку проводов.\n3. Сохраните измерения в журнале.',manual:'Выберите компонент → разместите → соедините контакты → нажмите «Рассчитать». Решаются упрощённые одноисточниковые DC-цепи.'}
  };
  const node=$('guideBody'); if(!node)return;window.activeGuide=which;
  node.textContent=(guides[lang]||guides.en)[which]||(guides[lang]||guides.en).manual;
}
function renderFormulaLibrary() {
  const host=$('formulaGrid');if(!host)return;
  const query=($('formulaSearch')?.value||'').trim().toLocaleLowerCase();
  const category=$('formulaCategory')?.value||'all';
  const filtered=FORMULAS.map((f,i)=>({f,i})).filter(({f})=>{
    if(category!=='all'&&f[0]!==category)return false;
    const name=lang==='uz'?f[3]:lang==='ru'?f[4]:f[2];
    return !query||[f[1],name,f[2],f[3],f[4],f[5],f[6],f[7],f[8]].join(' ').toLocaleLowerCase().includes(query);
  });
  $('formulaCount').textContent=`${filtered.length} / ${FORMULAS.length}`;
  $('formulasEmpty').hidden=filtered.length>0;
  host.innerHTML=filtered.map(({f,i})=>{
    const title=lang==='uz'?f[3]:lang==='ru'?f[4]:f[2];
    const description=lang==='uz'?f[6]:lang==='ru'?f[7]:f[5];
    return `<article class="formula-card"><span class="formula-eyebrow">${esc(tr('cat'+({dc:'Dc',ac:'Ac',components:'Components',digital:'Digital'}[f[0]])))}</span>`+
      `<h3>${esc(title)}</h3><code>${esc(f[1])}</code><p>${esc(description)}</p>`+
      `<div class="formula-controls"><button class="outline" data-copy-formula="${i}">${esc(tr('copyFormula'))}</button>`+
      `<button class="primary" data-formula-tool="${esc(f[8])}">${esc(tr('openCalculator'))}</button></div></article>`;
  }).join('');
  host.querySelectorAll('[data-copy-formula]').forEach(b=>b.onclick=()=>copyText(FORMULAS[Number(b.dataset.copyFormula)][1]));
  host.querySelectorAll('[data-formula-tool]').forEach(b=>b.onclick=()=>{go('tools');openTool(b.dataset.formulaTool);renderTools()});
  renderCustomFormulaCards(filtered.length);
}

function copyText(text) {
  if(navigator.clipboard&&window.isSecureContext) {
    navigator.clipboard.writeText(text).then(()=>toast(tr('copyDone'))).catch(()=>fallbackCopy(text));
  }else fallbackCopy(text);
}
function fallbackCopy(text) {
  const box=document.createElement('textarea');box.value=text;box.style.position='fixed';box.style.left='-9999px';
  document.body.appendChild(box);box.select();try{document.execCommand('copy');toast(tr('copyDone'))}catch{}box.remove();
}
function downloadPlain(filename,text,mime='text/plain;charset=utf-8') {
  const blob=new Blob([text],{type:mime}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
}
function duplicatePart() {
  if(!selected){toast(tr('duplicateFirst'));return}
  if(selected.kind!=='part'){toast(tr('onlyComponents'));return}
  const p=parts.find(x=>x.id===selected.id);if(!p)return;
  checkpoint();const copied=newPart(p.type,Math.min(1000,p.x+60),Math.min(500,p.y+70),p.value);
  selected={kind:'part',id:copied.id};invalidate();renderProperties();
}
function newBlankBoard() {
  if(!confirm(tr('confirmClear')))return;
  checkpoint();parts=[];wires=[];selected=null;pending=null;run=false;results=null;showLabGuide("manual");
  $('simulate').textContent=tr('simulate');$('status').textContent='● '+tr('paused');history=[];graphTime=0;renderAll();drawTimeline();
}
function exportTimelineCSV() {
  if(!history.length){toast(tr('csvEmpty'));return}
  const rows=['time_s,current_mA,supply_voltage_V',...history.map(h=>`${h.t.toFixed(3)},${h.i.toFixed(6)},${h.v.toFixed(6)}`)];
  downloadPlain('electrotools-graph.csv','\uFEFF'+rows.join('\r\n'),'text/csv;charset=utf-8');toast(tr('csvSaved'));
}

let labNotes=[],editingNoteId=null;
function getNotes() {
  try {const data=JSON.parse(localStorage.getItem('electro3_labnotes')||'[]');return Array.isArray(data)?data.filter(n=>n&&typeof n.title==='string'&&typeof n.text==='string').slice(0,50):[]}
  catch {return []}
}
function persistNotes() {
  try{localStorage.setItem('electro3_labnotes',JSON.stringify(labNotes))}
  catch {toast('Browser storage is unavailable. Export the report to keep a copy.')}
}
function renderNotebook() {
  const host=$('noteList');if(!host)return;
  $('noteCount').textContent=labNotes.length;
  if(!labNotes.length){host.innerHTML=`<div class="empty-state">${esc(tr('notesEmpty'))}</div>`;return}
  host.innerHTML=labNotes.map(n=>`<article class="note-item"><strong>${esc(n.title)}</strong><time>${esc(new Date(n.created).toLocaleString(lang==='uz'?'uz-UZ':lang==='ru'?'ru-RU':'en-US'))}</time>`+
    `<p>${esc(n.text.slice(0,300))}</p><div class="note-buttons"><button class="outline" data-edit-note="${n.id}">${esc(tr('readNote'))}</button>`+
    `<button class="outline danger" data-delete-note="${n.id}">${esc(tr('deleteNote'))}</button></div></article>`).join('');
  host.querySelectorAll('[data-edit-note]').forEach(b=>b.onclick=()=>{
    const n=labNotes.find(x=>String(x.id)===b.dataset.editNote);if(!n)return;
    $('noteTitle').value=n.title;$('noteText').value=n.text;editingNoteId=n.id;toast(tr('noteLoad'));window.scrollTo({top:0,behavior:'smooth'});
  });
  host.querySelectorAll('[data-delete-note]').forEach(b=>b.onclick=()=>{
    labNotes=labNotes.filter(n=>String(n.id)!==b.dataset.deleteNote);persistNotes();renderNotebook();refreshStats();toast(tr('noteDeleted'));
  });
}
function recordSnapshot() {
  if(!results||!results.ok){toast(tr('noMeasurements'));return}
  const now=new Date().toLocaleString(lang==='uz'?'uz-UZ':lang==='ru'?'ru-RU':'en-US');
  const lines=[`--- ${now} ---`,`Circuit: ${parts.length} components, ${wires.length} wires`,
    `DC source: ${num(results.voltage,3)} V`,`DC current: ${num(results.sourceCurrent*1000,3)} mA`,
    `Power: ${num(results.voltage*results.sourceCurrent*1000,3)} mW`];
  parts.forEach(p=>{const z=results.components?.[p.id];if(z)lines.push(`${tr(p.type)} #${p.id}: ${num(z.voltage,3)} V / ${num(z.current*1000,3)} mA`)});
  $('noteText').value=($('noteText').value.trim()+'\n\n'+lines.join('\n')).trim();
  go('notebook');
}
function saveNoteEntry() {
  const title=$('noteTitle').value.trim(),text=$('noteText').value.trim();
  if(!title){toast(tr('noteBlank'));return}
  const now=new Date().toISOString();
  if(editingNoteId){const n=labNotes.find(n=>n.id===editingNoteId);if(n){n.title=title;n.text=text;n.modified=now}}
  else labNotes.unshift({id:Date.now(),title,text,created:now,modified:now});
  labNotes=labNotes.slice(0,50);editingNoteId=null;persistNotes();renderNotebook();refreshStats();toast(tr('noteSaved'));
}
function exportLabReport(){
  const header=['ELECTROTOOLS STUDIO 5 DEMO — LABORATORY REPORT',`Exported: ${new Date().toISOString()}`,'','Educational calculations only','',''];
  const contents=labNotes.flatMap((n,i)=>[
    `EXPERIMENT ${i+1}: ${n.title}`,`Date: ${n.created}`,'',n.text,'',''.padEnd(50,'-'),'']);
  downloadPlain('electronics-lab-report.txt',header.concat(contents).join('\n'));toast(tr('reportReady'));
}
function refreshStats() {
  if($('statParts'))$('statParts').textContent=TYPES.length;
  if($('statTools'))$('statTools').textContent=TOOLS.length;
  if($('statFormulas'))$('statFormulas').textContent=FORMULAS.length;
  if($('statNotes'))$('statNotes').textContent=labNotes.length;
}
function translateExtras(){
  $$('[data-i18n-placeholder]').forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder));
  renderFormulaLibrary();renderNotebook();refreshStats();showLabGuide(window.activeGuide||"led");
}
function initProfessional() {
  Object.keys(EXTRA_TEXT).forEach(code=>Object.assign(UI[code],EXTRA_TEXT[code]));
  Object.assign(TOOL_FIELDS,EXTRA_FIELDS);
  Object.keys(EXTRA_FIELD_LABELS).forEach(k=>Object.assign(FIELD_LABELS[k],EXTRA_FIELD_LABELS[k]));
  labNotes=getNotes();
  $('quickLed').onclick=()=>loadSample('led');
  $('quickDivider').onclick=()=>loadSample('divider');if($('quickMath'))$('quickMath').onclick=()=>{go('tools');openTool('mathcalc')};
  $('duplicatePart').onclick=duplicatePart;
  $('newBoard').onclick=newBlankBoard;
  $('captureLab').onclick=recordSnapshot;
  $('exportGraphCSV').onclick=exportTimelineCSV;
  $('saveNote').onclick=saveNoteEntry;
  $('snapshotNote').onclick=recordSnapshot;
  $('exportNotebook').onclick=exportLabReport;
  $('toolSearch').addEventListener('input',renderTools);
  $('toolCategory').addEventListener('change',renderTools);
  $('formulaSearch').addEventListener('input',renderFormulaLibrary);
  $('formulaCategory').addEventListener('change',renderFormulaLibrary);
  renderNotebook();refreshStats();renderFormulaLibrary();showLabGuide("led");
}


/* ElectroTools Studio 5 Demo: additional tools and verified U notation. */
TOOLS.push(
  ['mathcalc','⌗','mathcalc','Arithmetic / scientific expression'],
  ['wirecalc','ρ','wirecalc','R = ρ · l / S'],
  ['powercalc','P','powercalc','P = U · I']
);
TOOL_CATEGORIES.mathcalc = 'digital';
TOOL_CATEGORIES.wirecalc = 'dc';
TOOL_CATEGORIES.powercalc = 'dc';
for(const [code,labels] of Object.entries({
  uz:['Hisob-kitob kalkulyatori','O‘tkazgich qarshiligi','Elektr quvvati'],
  en:['Scientific calculator','Conductor resistance','Electric power'],
  ru:['Научный калькулятор','Сопротивление проводника','Электрическая мощность']
})) {
  UI[code].mathcalc=labels[0];
  UI[code].wirecalc=labels[1];
  UI[code].powercalc=labels[2];
  if(!TOOL_DESCRIPTIONS[code])TOOL_DESCRIPTIONS[code]={};
  TOOL_DESCRIPTIONS[code].mathcalc='2 × (3 + 4), √, sin, cos, log';
  TOOL_DESCRIPTIONS[code].wirecalc='R = ρ·l/S';
  TOOL_DESCRIPTIONS[code].powercalc='P = U·I';
}
EXTRA_FIELDS.wirecalc=[
  field('rho','Resistivity ρ (Ω·mm²/m)',0.0175,'',0),
  field('l','Length l (m)',10,'',0),
  field('s','Cross-section S (mm²)',1.5,'',0.000001)
];
EXTRA_FIELDS.powercalc=[
  field('u','Voltage U (V)',12),
  field('i','Current I (A)',0.5)
];
Object.assign(EXTRA_FIELD_LABELS.uz,{
 'Resistivity ρ (Ω·mm²/m)':'Solishtirma qarshilik ρ (Ω·mm²/m)',
 'Length l (m)':'Uzunlik l (m)',
 'Cross-section S (mm²)':'Kesim yuzasi S (mm²)',
 'Voltage U (V)':'Kuchlanish U (V)',
 'Current I (A)':'Tok kuchi I (A)'
});
Object.assign(EXTRA_FIELD_LABELS.ru,{
 'Resistivity ρ (Ω·mm²/m)':'Удельное сопротивление ρ (Ω·мм²/м)',
 'Length l (m)':'Длина l (м)',
 'Cross-section S (mm²)':'Площадь сечения S (мм²)', 'Voltage U (V)':'Напряжение U (В)',
 'Current I (A)':'Ток I (А)'
});
TOOL_FORMULAS.wirecalc='R = ρ · l / S';
TOOL_FORMULAS.powercalc='P = U · I';
const baseToolResult=generalToolResult;
generalToolResult=function(id,v){
  if(id==='wirecalc'){
    if(!(v.s>0&&v.rho>=0&&v.l>=0))return 'ρ, l ≥ 0; S > 0 required';
    return `R = ${num(v.rho*v.l/v.s,6)} Ω`;
  }
  if(id==='powercalc'){
    if(!Number.isFinite(v.u)||!Number.isFinite(v.i))return 'Invalid values';
    return `P = U · I = ${num(v.u*v.i,6)} W`;
  }
  return baseToolResult(id,v);
};
/* Small arithmetic parser: no eval, no Function, no external libraries. */
function mathExpression(source){
 const s=String(source).replace(/\s+/g,'').replaceAll('×','*').replaceAll('÷','/').replaceAll('π','pi');
 let k=0;
 function atom(){
  if(s[k]==='+'){k++;return atom()}
  if(s[k]==='-'){k++;return -atom()}
  if(s[k]==='('){k++;const v=add();if(s[k++]!==')')throw Error('Missing closing parenthesis');return v}
  const rest=s.slice(k);
  const m=rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i);
  if(m){k+=m[0].length;return Number(m[0])}
  const fn=rest.match(/^(sqrt|sin|cos|tan|log|ln|abs|pi|e)(?![a-z])/i);
  if(!fn)throw Error('Invalid expression');
  const name=fn[0].toLowerCase();k+=fn[0].length;
  if(name==='pi')return Math.PI;
  if(name==='e')return Math.E;
  if(s[k++]!=='(')throw Error('Use parentheses for functions');
  const v=add();
  if(s[k++]!==')')throw Error('Missing closing parenthesis');
  return {sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,log:Math.log10,ln:Math.log,abs:Math.abs}[name](v);
 }
 function exponent(){let x=atom();if(s[k]==='^'){k++;x=Math.pow(x,exponent())}return x}
 function product(){let x=exponent();while(s[k]==='*'||s[k]==='/'){const op=s[k++],y=exponent();if(op==='/'&&y===0)throw Error('Division by zero');x=op==='*'?x*y:x/y}return x}
 function add(){let x=product();while(s[k]==='+'||s[k]==='-'){const op=s[k++],y=product();x=op==='+'?x+y:x-y}return x}
 const ans=add();if(k!==s.length||!Number.isFinite(ans))throw Error('Invalid or undefined result');return ans;
}
const originalMountSpecial=mountSpecial;
mountSpecial=function(id,host){
 if(id!=='mathcalc')return originalMountSpecial(id,host);
 host.innerHTML=`<h2>${esc(tr('mathcalc'))}</h2><p class="muted">2*(3+4), sqrt(9), sin(pi/2), 2^3, log(100)</p>
  <div class="form-grid"><label>Expression / Ifoda<input type="text" id="mathExpression" value="2*(3+4)+sqrt(9)" autocomplete="off"></label></div>
  <button type="button" class="primary" id="mathCalculate">${esc(tr('calculate'))}</button>
  <div id="calcOutput" class="result" aria-live="polite"></div>`;
 function run(){try{host.querySelector('#calcOutput').textContent='= '+num(mathExpression(host.querySelector('#mathExpression').value),10)}catch(e){host.querySelector('#calcOutput').textContent='Xatolik: '+e.message}}
 host.querySelector('#mathCalculate').onclick=run;
 host.querySelector('#mathExpression').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();run()}});
 run();return true;
};
FORMULAS.push(
 ['dc','R = ρ · l / S','Conductor resistance','O‘tkazgich qarshiligi','Сопротивление проводника','Uniform conductor of cross-section S.','Bir jinsli o‘tkazgich, mos birliklardan foydalaning.','Однородный проводник с площадью S.','wirecalc'],
 ['dc','R = (R₁ · R₂) / (R₁ + R₂)','Two parallel resistors','Ikki parallel rezistor','Два параллельных резистора','For two positive resistances.','Ikkita musbat qarshilik uchun.','Для двух положительных сопротивлений.','parallelres'],
 ['dc','R = U / I','Resistance from Ohm’s law','Om qonunidan qarshilik','Сопротивление по закону Ома','For nonzero current.','I nol bo‘lmaganida.','При ненулевом токе.','ohm'],
 ['dc','P = U · I','DC electrical power','Elektr quvvati','Электрическая мощность','Voltage times current.','Kuchlanish va tokning ko‘paytmasi.','Произведение напряжения и тока.','powercalc'],
 ['ac','ω = 2πf','Angular frequency','Burchak chastotasi','Угловая частота','Angular frequency in rad/s.','Burchak chastotasi rad/s.','Угловая частота рад/с.','freqcalc'],
 ['components','G = 1 / R','Conductance','O‘tkazuvchanlik','Проводимость','For nonzero resistance, G in siemens.','R noldan katta bo‘lganda G simensda.','При R > 0, G в сименсах.','ohm']
);


/* ========================================================
   STUDIO 5.1: CUSTOM FORMULAS + RESISTIVE PARTS + SFX
   Stored locally. Display formulas are not executable code.
======================================================== */
const CUSTOM_FORMULA_KEY='et5_formula_library_custom_1';
const CUSTOM_PRESET_KEY='et5_resistive_presets_1';
const CUSTOM_SOUND_KEY='et5_sound_preferences_1';
function readArray(key,max){try{const v=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(v)?v.slice(0,max):[]}catch{return []}}
function persistAddon(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{toast('Brauzer xotirasi mavjud emas; ma’lumotni eksport qiling.')}}
let customFormulas=readArray(CUSTOM_FORMULA_KEY,200).filter(f=>f&&typeof f.name==='string'&&typeof f.expr==='string');
let customPresets=readArray(CUSTOM_PRESET_KEY,100).filter(p=>p&&typeof p.name==='string'&&Number.isFinite(p.value)&&p.value>0&&['resistor','lamp'].includes(p.type));
let editFormulaId=null,editPresetId=null;
const cId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,9);
const customFields={
  uz:{myFormulas:'Shaxsiy formulalar',addFormula:'+ Formula qo‘shish',myParts:'O‘z detallarim',addPart:'+ Detal yaratish',sound:'Ovoz',formulaSaved:'Formula saqlandi',partSaved:'Detal saqlandi'},
  en:{myFormulas:'My formulas',addFormula:'+ Add formula',myParts:'My parts',addPart:'+ Create part',sound:'Sound',formulaSaved:'Formula saved',partSaved:'Component saved'},
  ru:{myFormulas:'Мои формулы',addFormula:'+ Добавить формулу',myParts:'Мои компоненты',addPart:'+ Создать деталь',sound:'Звук',formulaSaved:'Формула сохранена',partSaved:'Компонент сохранён'}
};
const cTr=key=>customFields[lang]?.[key]||customFields.uz[key]||key;
function renderCustomFormulaCards(builtinCount=0){
 const host=$('myFormulaList');if(!host)return;
 const search=($('formulaSearch')?.value||'').trim().toLocaleLowerCase();
 const category=$('formulaCategory')?.value||'all';
 const filtered=customFormulas.filter(f=>(category==='all'||f.cat===category)&&[f.name,f.expr,f.note].join(' ').toLocaleLowerCase().includes(search));
 host.innerHTML=filtered.map(f=>`<article class="formula-card" data-custom-formula="${esc(f.id)}">
  <span class="formula-eyebrow">SHAXSIY · ${esc(f.cat)}</span>
  <h3>${esc(f.name)}</h3><code>${esc(f.expr)}</code><p>${esc(f.note||'Shaxsiy formula')}</p>
  <div class="formula-controls"><button type="button" class="outline" data-custom-formula-edit="${esc(f.id)}">✎ Tahrirlash</button>
  <button type="button" class="outline danger" data-custom-formula-delete="${esc(f.id)}">× O‘chirish</button></div></article>`).join('')||'<p class="muted small">Hali formula qo‘shilmagan.</p>';
 $('formulaCount').textContent=`${builtinCount+filtered.length} / ${FORMULAS.length+customFormulas.length}`;
 $('statFormulas').textContent=FORMULAS.length+customFormulas.length;
 $('formulasEmpty').hidden=builtinCount+filtered.length>0;
}
function setFormulaForm(f=null){
 editFormulaId=f?.id||null;
 $('myFormulaTitle').textContent=f?'Formulani tahrirlash':'Yangi formula';
 $('myFormulaName').value=f?.name||'';
 $('myFormulaExpr').value=f?.expr||'';
 $('myFormulaNote').value=f?.note||'';
 $('myFormulaCategory').value=f?.cat||'dc';
 $('myFormulaForm').hidden=false;
 $('myFormulaName').focus();
}
function renderCustomPresetList(){
 const el=$('myPresetList');if(!el)return;
 el.innerHTML=customPresets.map(p=>`<div class="et-preset-row" data-custom-preset="${esc(p.id)}">
  <button type="button" class="part-button ${customPending?.id===p.id?'active':''}" data-preset-select="${esc(p.id)}">
   <span class="part-icon">${p.type==='lamp'?'💡':'▰'}</span><span>${esc(p.name)}<small>${Number(p.value).toLocaleString()} Ω</small></span>
  </button><button type="button" class="outline et-small" data-preset-edit="${esc(p.id)}" title="Tahrirlash">✎</button>
  <button type="button" class="outline danger et-small" data-preset-delete="${esc(p.id)}" title="O‘chirish">×</button>
 </div>`).join('')||'<p class="muted small">Hali shaxsiy detal yo‘q.</p>';
}
function setPresetForm(p=null){
 editPresetId=p?.id||null;
 $('myPresetTitle').textContent=p?'Detalni tahrirlash':'Yangi detal';
 $('myPresetName').value=p?.name||'';
 $('myPresetType').value=p?.type||'resistor';
 $('myPresetKind').value=p?.kind||'ordinary';
 $('myPresetValue').value=p?.value||330;
 $('myPresetForm').hidden=false;
 $('myPresetName').focus();
}
let audioCtx=null;
const soundPrefs=(()=>{try{return JSON.parse(localStorage.getItem(CUSTOM_SOUND_KEY)||'{}')}catch{return {}}})();
let soundEnabled=soundPrefs.enabled!==false, soundVolume=Number.isFinite(soundPrefs.volume)?Math.max(0,Math.min(1,soundPrefs.volume)):0.32;
function saveSound(){persistAddon(CUSTOM_SOUND_KEY,{enabled:soundEnabled,volume:soundVolume})}
function tone(freq=620,duration=.075,delay=0,wave='sine'){
 if(!soundEnabled||soundVolume===0)return;
 const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
 try{
  if(!audioCtx)audioCtx=new C();
  if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});
  const now=audioCtx.currentTime+delay;
  const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();
  osc.type=wave;osc.frequency.setValueAtTime(freq,now);
  gain.gain.setValueAtTime(.0001,now);
  gain.gain.exponentialRampToValueAtTime(Math.max(.0002,soundVolume*.075),now+.012);
  gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
  osc.connect(gain);gain.connect(audioCtx.destination);
  osc.start(now);osc.stop(now+duration+.02);
 }catch(e){console.warn('Audio:',e.message)}
}
function playSound(type){
 if(type==='wire'){tone(520,.075);tone(800,.125,.085)}
 else if(type==='success'){tone(600,.06);tone(850,.13,.075)}
 else if(type==='error')tone(190,.19,0,'triangle');
 else if(type==='switch')tone(425,.065,0,'square');
 else tone(700,.055);
}
function initAddon(){
 const formulaHost=$('formulaGrid'),palette=$('palette');if(!formulaHost||!palette)return;
 const panel=document.createElement('div');
 panel.className='panel et-addon';panel.id='myFormulaManager';
 panel.innerHTML=`<div class="et-addon-heading"><div><h3>${cTr('myFormulas')}</h3><p class="muted small">Qo‘shish, tahrirlash va o‘chirish · brauzerda saqlanadi</p></div>
 <button type="button" class="primary" id="myFormulaNew">${cTr('addFormula')}</button></div>
 <form id="myFormulaForm" hidden><h3 id="myFormulaTitle">Yangi formula</h3><div class="form-grid">
 <label>Nomi<input id="myFormulaName" type="text" required maxlength="100" placeholder="Elektr quvvati"></label>
 <label>Kategoriya<select id="myFormulaCategory"><option value="dc">DC</option><option value="ac">AC</option><option value="components">Komponentlar</option><option value="digital">Raqamli elektronika</option></select></label></div>
 <label>Formula<input id="myFormulaExpr" required maxlength="240" placeholder="P = U * I"></label>
 <label>Izoh<textarea id="myFormulaNote" rows="2" maxlength="600" placeholder="Belgilar va o‘lchov birliklari"></textarea></label>
 <div class="et-actions"><button type="submit" class="primary">Saqlash</button><button type="button" id="myFormulaCancel" class="outline">Bekor qilish</button></div></form>
 <div class="formula-grid" id="myFormulaList"></div>`;
 formulaHost.parentNode.insertBefore(panel,formulaHost);
 const partPanel=document.createElement('section');partPanel.className='et-addon-parts';partPanel.id='myPartManager';
 partPanel.innerHTML=`<h3>${cTr('myParts')}</h3><button type="button" class="outline wide" id="myPresetNew">${cTr('addPart')}</button>
 <form id="myPresetForm" hidden><h3 id="myPresetTitle">Yangi detal</h3>
 <label>Nomi<input id="myPresetName" required maxlength="70" placeholder="4.7kΩ rezistor"></label>
 <label>Ko‘rinish<select id="myPresetKind"><option value="ordinary">Oddiy rezistor</option><option value="variable">O‘zgaruvchan rezistor</option><option value="sensor">Sensor — ekvivalent R</option><option value="load">Yuklama</option></select></label>
 <label>Elektr modeli<select id="myPresetType"><option value="resistor">Rezistor (Ω)</option><option value="lamp">Chiroq (Ω)</option></select></label>
 <label>Qarshilik (Ω)<input id="myPresetValue" type="number" required min="0.1" max="10000000" step="any" value="330"></label>
 <div class="et-actions"><button type="submit" class="primary">Saqlash</button><button type="button" class="outline" id="myPresetCancel">Bekor qilish</button></div></form>
 <div id="myPresetList"></div><p class="muted small">Yaratilgan detalni tanlab sxemaga bosing. Sensor modeli bu versiyada belgilangan qarshilik bilan hisoblanadi.</p>`;
 palette.insertAdjacentElement('afterend',partPanel);
 const soundEl=document.createElement('div');soundEl.className='et-sound';
 soundEl.innerHTML=`<button type="button" class="outline" id="etSoundButton" aria-pressed="${soundEnabled}">${soundEnabled?'🔊':'🔇'} ${cTr('sound')}</button>
 <input type="range" id="etSoundVolume" min="0" max="100" value="${Math.round(soundVolume*100)}" aria-label="Ovoz balandligi">`;
 document.querySelector('.top-actions')?.append(soundEl);
 $('etSoundButton').onclick=()=>{soundEnabled=!soundEnabled;saveSound();$('etSoundButton').textContent=(soundEnabled?'🔊':'🔇')+' '+cTr('sound');$('etSoundButton').setAttribute('aria-pressed',String(soundEnabled));if(soundEnabled)playSound('wire')};
 $('etSoundVolume').oninput=e=>{soundVolume=Math.max(0,Math.min(1,Number(e.target.value)/100));saveSound()};
 $('myFormulaNew').onclick=()=>setFormulaForm();
 $('myFormulaCancel').onclick=()=>{$('myFormulaForm').hidden=true;editFormulaId=null};
 $('myFormulaForm').onsubmit=e=>{
  e.preventDefault();const name=$('myFormulaName').value.trim(),expr=$('myFormulaExpr').value.trim(),note=$('myFormulaNote').value.trim(),cat=$('myFormulaCategory').value;
  if(!name||!expr||!['dc','ac','components','digital'].includes(cat))return toast('Formula ma’lumotlarini tekshiring');
  const old=customFormulas.find(f=>f.id===editFormulaId);
  if(old)Object.assign(old,{name,expr,note,cat});
  else{if(customFormulas.length>=200)return toast('Formula limiti: 200');customFormulas.push({id:cId(),name,expr,note,cat})}
  persistAddon(CUSTOM_FORMULA_KEY,customFormulas);$('myFormulaForm').hidden=true;editFormulaId=null;renderFormulaLibrary();playSound('success');toast(cTr('formulaSaved'));
 };
 $('myFormulaList').onclick=e=>{
  const edit=e.target.closest('[data-custom-formula-edit]'),del=e.target.closest('[data-custom-formula-delete]');
  if(edit){const f=customFormulas.find(f=>f.id===edit.dataset.customFormulaEdit);if(f)setFormulaForm(f)}
  if(del&&confirm('Formulani o‘chirasizmi?')){customFormulas=customFormulas.filter(f=>f.id!==del.dataset.customFormulaDelete);persistAddon(CUSTOM_FORMULA_KEY,customFormulas);renderFormulaLibrary();playSound('switch')}
 };
 $('myPresetNew').onclick=()=>setPresetForm();
 $('myPresetCancel').onclick=()=>{$('myPresetForm').hidden=true;editPresetId=null};
 $('myPresetForm').onsubmit=e=>{
  e.preventDefault();const name=$('myPresetName').value.trim(),type=$('myPresetType').value,kind=$('myPresetKind').value,value=Number($('myPresetValue').value);
  if(!name||!['resistor','lamp'].includes(type)||!['ordinary','variable','sensor','load'].includes(kind)||!Number.isFinite(value)||value<.1||value>1e7)return toast('Detal ma’lumotlari noto‘g‘ri');
  const old=customPresets.find(p=>p.id===editPresetId);
  if(old){Object.assign(old,{name,type,kind,value});for(const p of parts){if(p.customPresetId===old.id)p.customName=name}}
  else{if(customPresets.length>=100)return toast('Detal limiti: 100');customPresets.push({id:cId(),name,type,kind,value})}
  persistAddon(CUSTOM_PRESET_KEY,customPresets);$('myPresetForm').hidden=true;editPresetId=null;renderCustomPresetList();renderAll();playSound('success');toast(cTr('partSaved'));
 };
 $('myPresetList').onclick=e=>{
  const use=e.target.closest('[data-preset-select]'),edit=e.target.closest('[data-preset-edit]'),del=e.target.closest('[data-preset-delete]');
  if(use){const p=customPresets.find(p=>p.id===use.dataset.presetSelect);if(!p)return;customPending={...p};paletteSelection=p.type;pending=null;renderAll();renderCustomPresetList();go('builder');$('wireHint').textContent=p.name+': sxema maydoniga bosing';playSound('switch')}
  if(edit){const p=customPresets.find(p=>p.id===edit.dataset.presetEdit);if(p)setPresetForm(p)}
  if(del&&confirm('Andozani o‘chirasizmi? Sxemadagi nusxalar saqlanadi.')){customPresets=customPresets.filter(p=>p.id!==del.dataset.presetDelete);persistAddon(CUSTOM_PRESET_KEY,customPresets);renderCustomPresetList();playSound('switch')}
 };
 document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.id==='etSoundButton')return;
  if(b.closest('#myFormulaManager')||b.closest('#myPartManager'))return;
  if(b.id==='simulate')playSound('success');
  else if(b.id==='switchFlip')playSound('switch');
  else playSound('click');
 });
 const svg=$('board');svg.addEventListener('pointerdown',e=>{
  if(!e.target.closest('.port'))return;
  // Capture phase allows the audio context to start from an actual touch gesture.
  if(pending)playSound('wire');else playSound('click');
 },true);
 // Redrawing a formula page uses the same custom cards + native list.
 renderCustomFormulaCards(FORMULAS.length);renderCustomPresetList();
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();


/* STUDIO 5.2 RESPONSIVE MENU + TOUCH BOARD PAN */
(() => {
  'use strict';
  function activateResponsive() {
    const toggle=document.getElementById('mobileMenuToggle');
    const sidebar=document.getElementById('appSidebar');
    const backdrop=document.getElementById('mobileNavBackdrop');
    const board=document.getElementById('board');
    const scroller=board?.closest('.board-scroll');
    if(!toggle||!sidebar||!backdrop)return;
    const close=()=>{
      document.body.classList.remove('mobile-nav-open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Menyuni ochish');
    };
    const open=()=>{
      document.body.classList.add('mobile-nav-open');
      toggle.setAttribute('aria-expanded','true');
      toggle.setAttribute('aria-label','Menyuni yopish');
    };
    toggle.addEventListener('click',()=> document.body.classList.contains('mobile-nav-open') ? close(): open());
    backdrop.addEventListener('click',close);
    sidebar.addEventListener('click',e=>{if(e.target.closest('.nav'))close()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
    const mq=window.matchMedia('(min-width:981px)');
    if(mq.addEventListener)mq.addEventListener('change',e=>{if(e.matches)close()});
    // One-finger panning on *blank board* while preserving component dragging.
    if(scroller && board){
      let pan=null;
      board.addEventListener('pointerdown',e=>{
        if(e.pointerType!=='touch' || e.target.closest('[data-part],[data-port-id],[data-wire]'))return;
        pan={id:e.pointerId,x:e.clientX,start:scroller.scrollLeft};
        try{board.setPointerCapture(e.pointerId)}catch(_){}
      });
      board.addEventListener('pointermove',e=>{
        if(pan?.id !== e.pointerId)return;
        scroller.scrollLeft=pan.start-(e.clientX-pan.x);
      });
      const end=e=>{if(pan?.id===e.pointerId)pan=null};
      board.addEventListener('pointerup',end);
      board.addEventListener('pointercancel',end);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',activateResponsive,{once:true});
  else activateResponsive();
})();
