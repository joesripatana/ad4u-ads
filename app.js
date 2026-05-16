const STORAGE_KEY = "thaiScreenAds.v1";

const MEDIA_DB_NAME = "thaiScreenAdsMedia";
const MEDIA_STORE = "mediaFiles";
const PUBLIC_APP_URL = "https://ad4u.adttix.com";
const GOOGLE_MAPS_KEY_STORAGE = "ad4uGoogleMapsApiKey";
const DEFAULT_SCREEN_WIDTH = 1080;
const DEFAULT_SCREEN_HEIGHT = 1920;
const SCREEN_SIZE_PRESETS = [
  { id: "portrait-1080x1920", label: "Portrait 1080x1920", width: 1080, height: 1920 },
  { id: "landscape-1920x1080", label: "Landscape 1920x1080", width: 1920, height: 1080 },
  { id: "square-1080x1080", label: "Square 1080x1080", width: 1080, height: 1080 },
  { id: "portrait-720x1280", label: "Portrait 720x1280", width: 720, height: 1280 }
];
const THAILAND_GEO_BOUNDS = {
  north: 20.6,
  south: 5.4,
  west: 97.2,
  east: 105.8,
  center: { lat: 13.7563, lng: 100.5018 }
};
const SEEDED_SCREEN_COORDINATES = {
  "TAB-BKK-001": { lat: 13.7447, lng: 100.5331 },
  "TAB-BKK-REAL-001": { lat: 13.7306, lng: 100.5696 },
  "TAB-BKK-002": { lat: 13.7372, lng: 100.5603 },
  "TAB-CNX-001": { lat: 18.7886, lng: 98.9853 },
  "TAB-HKT-001": { lat: 7.8963, lng: 98.2966 },
  "TAB-KKC-001": { lat: 16.4747, lng: 102.8208 },
  "TAB-HDY-001": { lat: 7.0065, lng: 100.4687 }
};
const PROVINCE_CENTER_COORDINATES = {
  Bangkok: { lat: 13.7563, lng: 100.5018 },
  "Chiang Mai": { lat: 18.7883, lng: 98.9853 },
  "Khon Kaen": { lat: 16.4419, lng: 102.8359 },
  Phuket: { lat: 7.8804, lng: 98.3923 },
  Songkhla: { lat: 7.1756, lng: 100.6143 },
  "Pathum Thani": { lat: 14.0208, lng: 100.525 },
  Nonthaburi: { lat: 13.8591, lng: 100.5217 },
  "Samut Prakan": { lat: 13.5991, lng: 100.5998 },
  "Chon Buri": { lat: 13.3611, lng: 100.9847 }
};

const THAILAND_PROVINCES = [
  "Amnat Charoen", "Ang Thong", "Bangkok", "Bueng Kan", "Buri Ram", "Chachoengsao", "Chai Nat", "Chaiyaphum",
  "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi",
  "Khon Kaen", "Krabi", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan",
  "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat",
  "Nan", "Narathiwat", "Nong Bua Lam Phu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phang Nga",
  "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya",
  "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo",
  "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Saraburi", "Satun", "Sing Buri", "Sisaket",
  "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani",
  "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"
];

const DISTRICTS_BY_PROVINCE = {
  Bangkok: ["Bang Kapi", "Bang Khae", "Bang Khen", "Bang Kho Laem", "Bang Na", "Bang Rak", "Bang Sue", "Chatuchak", "Din Daeng", "Don Mueang", "Dusit", "Huai Khwang", "Khlong Toei", "Lat Phrao", "Pathum Wan", "Phaya Thai", "Phra Khanong", "Ratchathewi", "Sathon", "Suan Luang", "Thon Buri", "Watthana", "Yan Nawa"],
  "Chiang Mai": ["Mueang", "Chiang Dao", "Chom Thong", "Doi Saket", "Hang Dong", "Mae Rim", "Mae Taeng", "San Kamphaeng", "San Sai", "Saraphi"],
  "Khon Kaen": ["Mueang", "Ban Fang", "Ban Phai", "Chum Phae", "Nam Phong", "Phon", "Phu Wiang"],
  Phuket: ["Mueang", "Kathu", "Thalang"],
  Songkhla: ["Mueang", "Hat Yai", "Sadao", "Singhanakhon"],
  "Chon Buri": ["Mueang", "Bang Lamung", "Pattaya", "Si Racha", "Sattahip"],
  "Nakhon Ratchasima": ["Mueang", "Pak Chong", "Sikhio", "Bua Yai"],
  "Surat Thani": ["Mueang", "Ko Samui", "Ko Pha-ngan", "Phunphin"],
  Krabi: ["Mueang", "Ao Luek", "Ko Lanta", "Nuea Khlong"],
  Rayong: ["Mueang", "Ban Chang", "Klaeng", "Pluak Daeng"],
  "Udon Thani": ["Mueang", "Kumphawapi", "Nong Han"],
  "Ubon Ratchathani": ["Mueang", "Warin Chamrap", "Det Udom"],
  Nonthaburi: ["Mueang", "Pak Kret", "Bang Bua Thong"],
  "Pathum Thani": ["Mueang", "Khlong Luang", "Lam Luk Ka", "Thanyaburi"],
  "Samut Prakan": ["Mueang", "Bang Phli", "Phra Pradaeng"],
  "Phra Nakhon Si Ayutthaya": ["Phra Nakhon Si Ayutthaya", "Bang Pa-in", "Wang Noi"],
  "Nakhon Pathom": ["Mueang", "Sam Phran", "Nakhon Chai Si"],
  Ratchaburi: ["Mueang", "Ban Pong", "Damnoen Saduak"],
  "Prachuap Khiri Khan": ["Mueang", "Hua Hin", "Pran Buri"]
};

const seedState = {
  currentUserId: "u1",
  route: "dashboard",
  authMode: "login",
  language: "",
  selectedScreens: [],
  activeBookingScreenId: null,
  playerScreenId: null,
  previousRoute: "book",
  selectedAdvertId: null,
  editingAdvertId: null,
  photoIndex: {},
  selectedSlots: {},
  calendarDay: "Mon",
  calendarDate: "2026-05-02",
  pendingRegistration: null,
  pendingMobileOtp: null,
  minimumSpend: 1000,
  moderationRules: ["alcohol", "gambling", "weapon", "drugs", "adult", "political attack", "hate"],
  houseAdvert: {
    id: "house-seed",
    title: "AD4U Network Promo",
    type: "video",
    fileName: "house-network-promo.mp4",
    duration: 15,
    mediaKey: "",
    mimeType: "",
    message: "Advertise here across Thailand"
  },
  houseAdverts: [],
  toast: "",
  users: [
    { id: "u1", name: "Owner Super Admin", email: "owner@thaiscreen.test", password: "admin123", role: "super_admin" },
    { id: "u2", name: "Bangkok Operator", email: "operator@thaiscreen.test", password: "operator123", role: "operator" },
    { id: "u3", name: "Demo Customer", email: "customer@thaiscreen.test", password: "customer123", role: "customer" }
  ],
  screens: [
    { id: "s1", name: "Siam Square Entrance", province: "Bangkok", city: "Pathum Wan", venue: "Retail frontage", status: "online", rate: 260, x: 55, y: 48, tabletId: "TAB-BKK-001", brightness: 86, width: 1080, height: 1920, lastSeen: "2 min ago", tags: ["Mall", "Youth"], photos: ["https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80"] },
    { id: "s-real-001", name: "Alpha EV Office Tablet", province: "Bangkok", city: "Watthana", venue: "Office reception test screen", status: "online", rate: 100, x: 60, y: 46, tabletId: "TAB-BKK-REAL-001", brightness: 90, width: 1080, height: 1920, lastSeen: "now", tags: ["EV", "Office", "Test screen"], photos: [], latitude: 13.7306, longitude: 100.5696 },
    { id: "s2", name: "Asok BTS Walkway", province: "Bangkok", city: "Watthana", venue: "Transit corridor", status: "online", rate: 310, x: 58, y: 45, tabletId: "TAB-BKK-002", brightness: 91, width: 1920, height: 1080, lastSeen: "1 min ago", tags: ["Transit", "Office"], photos: ["https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80"], latitude: 13.7372, longitude: 100.5603 },
    { id: "s3", name: "Chiang Mai Old City Cafe", province: "Chiang Mai", city: "Mueang", venue: "Cafe counter", status: "online", rate: 145, x: 36, y: 24, tabletId: "TAB-CNX-001", brightness: 74, width: 1080, height: 1920, lastSeen: "4 min ago", tags: ["Tourist", "Cafe"], photos: ["https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"], latitude: 18.7886, longitude: 98.9853 },
    { id: "s4", name: "Phuket Patong Hotel Lobby", province: "Phuket", city: "Kathu", venue: "Hotel lobby", status: "warning", rate: 210, x: 32, y: 80, tabletId: "TAB-HKT-001", brightness: 68, width: 1920, height: 1080, lastSeen: "18 min ago", tags: ["Tourist", "Hotel"], photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"], latitude: 7.8963, longitude: 98.2966 },
    { id: "s5", name: "Khon Kaen University Gate", province: "Khon Kaen", city: "Mueang", venue: "Campus shop", status: "online", rate: 125, x: 61, y: 32, tabletId: "TAB-KKC-001", brightness: 79, width: 1080, height: 1920, lastSeen: "3 min ago", tags: ["Student", "Campus"], photos: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80"], latitude: 16.4747, longitude: 102.8208 },
    { id: "s6", name: "Hat Yai Market Corner", province: "Songkhla", city: "Hat Yai", venue: "Market kiosk", status: "offline", rate: 115, x: 48, y: 88, tabletId: "TAB-HDY-001", brightness: 0, width: 1080, height: 1920, lastSeen: "2 hr ago", tags: ["Market", "Local"], photos: ["https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"], latitude: 7.0065, longitude: 100.4687 }
  ],
  adverts: [
    { id: "a1", customerId: "u3", title: "Songkran Hotel Promo", type: "video", fileName: "songkran-promo.mp4", duration: 16, billableSeconds: 30, status: "approved", uploadedAt: "2026-05-02" }
  ],
  cart: [],
  orders: [
    { id: "o1", customerId: "u3", advertId: "a1", status: "paid", total: 1860, createdAt: "2026-05-02", items: [
      { screenId: "s1", slots: ["Mon 09:00", "Mon 09:15", "Tue 13:00"] },
      { screenId: "s2", slots: ["Fri 18:00", "Sat 12:00", "Sat 12:15"] }
    ] }
  ],
  playbackLogs: [
    { screenId: "s1", advertId: "a1", at: "2026-05-02 19:24", status: "played" },
    { screenId: "s2", advertId: "a1", at: "2026-05-02 19:20", status: "played" }
  ]
};

let state = loadState();
let uploadDraft = { title: "", type: "video", fileName: "", duration: 15 };
let filters = { province: "All", text: "" };
let networkFilters = { province: "All", city: "All" };
let modal = null;
let saveTimer = null;
let playerRefreshTimer = null;
let playerCountdownTimer = null;
let currentPlayerDuration = 15;
let calendarBuildToken = 0;
let selectedMedia = null;
let selectedHouseMedia = null;
let stickerUpload = null;
let stickerImage = null;
const mediaUrlCache = new Map();
const mediaLoads = new Set();
let googleMapsLoader = null;
let googleScreenMap = null;
let googleScreenMarkers = [];

const stickerTemplates = [
  { id: "hello", text: "สวัสดีค่า", color: "#ef5f8d", accent: "heart", image: [54, 34, 260, 336], textY: 386, rotate: -2 },
  { id: "fight", text: "สู้ๆนะ", color: "#8b65c9", accent: "spark", image: [98, 26, 260, 342], textY: 386, rotate: 1 },
  { id: "please", text: "ได้โปรด~~", color: "#e95d8b", accent: "heart", image: [64, 22, 280, 336], textY: 390, rotate: -1 },
  { id: "work", text: "ตั้งใจทำงานน้า", color: "#f0a223", accent: "burst", image: [86, 30, 278, 332], textY: 392, rotate: 2 },
  { id: "kiss", text: "จุ๊บๆ", color: "#ef6f9b", accent: "hearts", image: [48, 42, 280, 330], textY: 390, rotate: -2 },
  { id: "sad", text: "เสียใจ", color: "#5a9fda", accent: "broken", image: [74, 34, 282, 338], textY: 388, rotate: 1 },
  { id: "hungry", text: "หิวจัง", color: "#e28b43", accent: "food", image: [78, 30, 282, 336], textY: 388, rotate: -1 },
  { id: "shock", text: "ตกใจ", color: "#8762c7", accent: "shock", image: [88, 22, 280, 348], textY: 392, rotate: 2 },
  { id: "cry", text: "ร้องห้ายย", color: "#6eb0de", accent: "tear", image: [58, 28, 284, 344], textY: 388, rotate: -2 },
  { id: "cute", text: "อ้อนๆ", color: "#ef779a", accent: "heart", image: [84, 28, 276, 338], textY: 388, rotate: 1 },
  { id: "broke", text: "ตังหมดแล้ว", color: "#8064b5", accent: "money", image: [68, 40, 312, 318], textY: 388, rotate: -1 },
  { id: "miss", text: "คิดถึงนะ", color: "#e85f8b", accent: "hearts", image: [68, 26, 282, 338], textY: 388, rotate: 1 },
  { id: "smile", text: "ยิ้มหน่อย", color: "#e7a128", accent: "spark", image: [92, 22, 270, 342], textY: 386, rotate: -1 },
  { id: "love", text: "รักที่สุดเลย", color: "#ef6a96", accent: "heart", image: [78, 18, 286, 346], textY: 390, rotate: 2 },
  { id: "send", text: "ส่งใจให้น้า", color: "#e76093", accent: "heart", image: [58, 24, 320, 330], textY: 390, rotate: -2 },
  { id: "thanks", text: "ขอบคุณนะ", color: "#dd9a2d", accent: "flower", image: [76, 30, 282, 338], textY: 388, rotate: 1 },
  { id: "ok", text: "โอเคค่าาา", color: "#5aa3de", accent: "ok", image: [76, 26, 284, 340], textY: 388, rotate: -1 },
  { id: "bye", text: "บายบาย", color: "#df5d82", accent: "wave", image: [82, 26, 286, 340], textY: 390, rotate: 1 },
  { id: "sleep", text: "ฝันดีนะ", color: "#6e9ed6", accent: "flower", image: [88, 26, 278, 338], textY: 388, rotate: -2 },
  { id: "care", text: "ดูแลตัวเองนะ", color: "#65a960", accent: "spark", image: [64, 24, 306, 340], textY: 390, rotate: 2 }
];

function applyPlayerDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const screenRef = params.get("player") || params.get("screen");
  if (!screenRef) {
    if (state.route === "player") {
      const user = currentUser();
      state.route = state.previousRoute && state.previousRoute !== "player" ? state.previousRoute : user?.role === "customer" ? "book" : "dashboard";
      state.playerScreenId = null;
    }
    return;
  }
  const screen = state.screens.find((item) => item.tabletId === screenRef || item.id === screenRef);
  if (!screen) return;
  state.currentUserId = null;
  state.playerScreenId = screen.id;
  state.route = "player";
  state.previousRoute = "auth";
  saveState();
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return hydrateState(structuredClone(seedState));
  try {
    return hydrateState({ ...structuredClone(seedState), ...JSON.parse(saved) });
  } catch {
    return structuredClone(seedState);
  }
}

function hydrateState(loaded) {
  loaded.language ||= detectDefaultLanguage();
  seedState.screens.forEach((seedScreen) => {
    if (!loaded.screens.some((screen) => screen.tabletId === seedScreen.tabletId)) loaded.screens.push(structuredClone(seedScreen));
  });
  loaded.screens = loaded.screens.map((screen) => {
    const seeded = seedState.screens.find((item) => item.id === screen.id);
    const coordinates = normalizedCoordinatesForScreen({ ...seeded, ...screen });
    return {
      ...screen,
      width: Number(screen.width || seeded?.width || DEFAULT_SCREEN_WIDTH),
      height: Number(screen.height || seeded?.height || DEFAULT_SCREEN_HEIGHT),
      photos: screen.photos?.length ? screen.photos : seeded?.photos || [],
      tierPricing: screen.tierPricing || seeded?.tierPricing || defaultTierPricing(screen.rate),
      defaultAdverts: screen.defaultAdverts || seeded?.defaultAdverts || [],
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
      x: coordinates.x,
      y: coordinates.y
    };
  });
  loaded.moderationRules = loaded.moderationRules?.length ? loaded.moderationRules : [...seedState.moderationRules];
  loaded.houseAdvert = { ...seedState.houseAdvert, ...(loaded.houseAdvert || {}) };
  loaded.houseAdvert.id ||= "house-seed";
  loaded.houseAdverts = loaded.houseAdverts?.length ? loaded.houseAdverts : [loaded.houseAdvert];
  loaded.houseAdverts = loaded.houseAdverts.map((advert, index) => ({ ...advert, id: advert.id || `house-${index}` }));
  loaded.users = loaded.users.map((user) => ({
    ...user,
    companyName: user.companyName || (user.role === "customer" ? user.name : ""),
    firstName: user.firstName || user.name?.split(" ")[0] || "",
    surname: user.surname || user.name?.split(" ").slice(1).join(" ") || "",
    mobile: user.mobile || "",
    kycStatus: user.kycStatus || (user.role === "customer" ? "needs_mobile" : "complete"),
    profile: user.profile || {},
    payment: user.payment || {},
    invoice: user.invoice || {}
  }));
  loaded.pendingRegistration ||= null;
  loaded.pendingMobileOtp ||= null;
  loaded.selectedScreens = loaded.selectedScreens?.length ? [loaded.selectedScreens[0]] : [];
  loaded.activeBookingScreenId = null;
  loaded.selectedSlots = {};
  loaded.photoIndex ||= {};
  return loaded;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveState, 350);
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MEDIA_DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(MEDIA_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function putMediaBlob(key, file) {
  const db = await openMediaDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, "readwrite");
    tx.objectStore(MEDIA_STORE).put(file, key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function getMediaBlob(key) {
  const db = await openMediaDb();
  const blob = await new Promise((resolve, reject) => {
    const request = db.transaction(MEDIA_STORE).objectStore(MEDIA_STORE).get(key);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return blob;
}

async function deleteMediaBlob(key) {
  if (!key) return;
  const db = await openMediaDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(MEDIA_STORE, "readwrite");
    tx.objectStore(MEDIA_STORE).delete(key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
  const cachedUrl = mediaUrlCache.get(key);
  if (cachedUrl) URL.revokeObjectURL(cachedUrl);
  mediaUrlCache.delete(key);
}

async function keepOnlyCustomerAdvert(keepAdvertId) {
  const userId = currentUser()?.id;
  const removed = state.adverts.filter((advert) => advert.customerId === userId && advert.id !== keepAdvertId);
  if (!removed.length) return;
  const removedIds = new Set(removed.map((advert) => advert.id));
  state.adverts = state.adverts.filter((advert) => advert.customerId !== userId || advert.id === keepAdvertId);
  state.cart = state.cart.filter((item) => !removedIds.has(item.advertId));
  state.selectedSlots = {};
  await Promise.all(removed.map((advert) => deleteMediaBlob(advert.mediaKey)));
}

function mediaSourceFor(advert) {
  if (!advert) return "";
  if (advert.mediaUrl) return advert.mediaUrl;
  if (!advert.mediaKey) return "";
  if (mediaUrlCache.has(advert.mediaKey)) return mediaUrlCache.get(advert.mediaKey);
  loadMediaSource(advert);
  return "";
}

async function loadMediaSource(advert) {
  if (!advert?.mediaKey || mediaLoads.has(advert.mediaKey)) return;
  mediaLoads.add(advert.mediaKey);
  try {
    const blob = await getMediaBlob(advert.mediaKey);
    if (blob) {
      mediaUrlCache.set(advert.mediaKey, URL.createObjectURL(blob));
      render();
    }
  } catch {
    toast("Could not load the local preview file. Upload it again in this browser.");
  } finally {
    mediaLoads.delete(advert.mediaKey);
  }
}

function uid(prefix) {
  return `${prefix}${Math.random().toString(36).slice(2, 8)}`;
}

function currentUser() {
  return state.users.find((u) => u.id === state.currentUserId);
}

function isStaff() {
  return ["super_admin", "admin", "operator"].includes(currentUser()?.role);
}

function isCustomer() {
  return currentUser()?.role === "customer";
}

function detectDefaultLanguage() {
  const browserLanguage = (navigator.language || navigator.userLanguage || "").toLowerCase();
  const languages = (navigator.languages || []).join(" ").toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  return browserLanguage.includes("th") || languages.includes("th") || timezone.includes("Bangkok") ? "th" : "en";
}

const labels = {
  en: {
    dashboard: "Dashboard",
    profilePayment: "Profile & payment",
    bookAdverts: "Book adverts",
    basket: "Basket",
    advertStats: "Advert stats",
    myOrders: "My orders",
    controlRoom: "Control room",
    capacity: "Capacity",
    screens: "Screens",
    adverts: "Adverts",
    liveStats: "Live stats",
    orders: "Orders",
    teamRoles: "Team & roles",
    profileTitle: "Profile & payment",
    profileCopy: "Complete KYC, billing, payment, and invoice details before booking.",
    continueBooking: "Continue booking",
    verified: "Verified",
    needed: "Needed",
    complete: "Complete",
    missing: "Missing",
    mobileKyc: "mobile KYC",
    companyProfile: "company profile",
    paymentInvoice: "payment and invoice",
    firstLogin: "First login security check",
    kycCopy: "For security we need to KYC you. Confirm your email {email}, enter your mobile number, then verify by SMS OTP.",
    mobileNumber: "Mobile number",
    countryCode: "Country code",
    sendPhoneOtp: "Send phone OTP",
    phoneOtpSent: "Phone OTP sent to",
    verifyPhone: "Verify phone",
    mobileVerified: "Mobile verified",
    accountEmail: "Account email",
    welcomeEmail: "Welcome email is simulated here for prototype testing.",
    username: "Username",
    loginUrl: "Login URL",
    lockedUntilMobile: "Complete mobile OTP first.",
    companyName: "Company name",
    businessType: "Business type",
    name: "Name",
    surname: "Surname",
    companyAddress: "Company address",
    province: "Province",
    postcode: "Postcode",
    authorizedPerson: "Authorized person",
    saveProfile: "Save profile",
    paymentBillingInvoice: "Payment, billing, invoice",
    paymentMethod: "Payment method",
    billingContact: "Billing contact",
    billingPhone: "Billing phone",
    taxId: "Thai tax ID / company ID",
    invoiceEmail: "Invoice email",
    invoiceType: "Invoice type",
    invoiceAddress: "Invoice address",
    savePayment: "Save payment setup",
    select: "Select"
  },
  th: {
    dashboard: "แดชบอร์ด",
    profilePayment: "โปรไฟล์และการชำระเงิน",
    bookAdverts: "จองโฆษณา",
    basket: "ตะกร้า",
    advertStats: "สถิติโฆษณา",
    myOrders: "คำสั่งซื้อของฉัน",
    controlRoom: "ห้องควบคุม",
    capacity: "ความจุ",
    screens: "หน้าจอ",
    adverts: "โฆษณา",
    liveStats: "สถิติสด",
    orders: "คำสั่งซื้อ",
    teamRoles: "ทีมและสิทธิ์",
    profileTitle: "โปรไฟล์และการชำระเงิน",
    profileCopy: "กรอก KYC ข้อมูลบิล การชำระเงิน และใบกำกับภาษีก่อนจอง",
    continueBooking: "ไปจองต่อ",
    verified: "ยืนยันแล้ว",
    needed: "ต้องทำ",
    complete: "ครบแล้ว",
    missing: "ยังขาด",
    mobileKyc: "KYC มือถือ",
    companyProfile: "โปรไฟล์บริษัท",
    paymentInvoice: "การชำระเงินและใบกำกับ",
    firstLogin: "ตรวจสอบความปลอดภัยครั้งแรก",
    kycCopy: "เพื่อความปลอดภัย เราต้องยืนยันตัวตนของคุณ ยืนยันอีเมล {email} ใส่เบอร์มือถือ แล้วรับรหัส OTP ทาง SMS",
    mobileNumber: "เบอร์มือถือ",
    countryCode: "รหัสประเทศ",
    sendPhoneOtp: "ส่ง OTP ทางมือถือ",
    phoneOtpSent: "ส่ง OTP ไปที่",
    verifyPhone: "ยืนยันมือถือ",
    mobileVerified: "ยืนยันมือถือแล้ว",
    accountEmail: "อีเมลบัญชี",
    welcomeEmail: "อีเมลต้อนรับถูกจำลองไว้สำหรับทดสอบต้นแบบ",
    username: "ชื่อผู้ใช้",
    loginUrl: "ลิงก์เข้าสู่ระบบ",
    lockedUntilMobile: "กรุณายืนยัน OTP มือถือก่อน",
    companyName: "ชื่อบริษัท",
    businessType: "ประเภทธุรกิจ",
    name: "ชื่อ",
    surname: "นามสกุล",
    companyAddress: "ที่อยู่บริษัท",
    province: "จังหวัด",
    postcode: "รหัสไปรษณีย์",
    authorizedPerson: "ผู้มีอำนาจ",
    saveProfile: "บันทึกโปรไฟล์",
    paymentBillingInvoice: "การชำระเงิน บิล ใบกำกับ",
    paymentMethod: "วิธีชำระเงิน",
    billingContact: "ผู้ติดต่อด้านบิล",
    billingPhone: "เบอร์โทรด้านบิล",
    taxId: "เลขประจำตัวผู้เสียภาษี / เลขบริษัท",
    invoiceEmail: "อีเมลรับใบกำกับ",
    invoiceType: "ประเภทใบกำกับ",
    invoiceAddress: "ที่อยู่ใบกำกับ",
    savePayment: "บันทึกข้อมูลชำระเงิน",
    select: "เลือก"
  }
};

function t(key, replacements = {}) {
  const language = state.language || "en";
  let value = labels[language]?.[key] || labels.en[key] || key;
  Object.entries(replacements).forEach(([from, to]) => {
    value = value.replace(`{${from}}`, to);
  });
  return value;
}

function setLanguage(language) {
  state.language = language;
  saveState();
  render();
}

function renderLanguageToggle() {
  return `<div class="language-toggle" aria-label="Language">
    <button class="${(state.language || "en") === "en" ? "active" : ""}" data-language="en" type="button">English</button>
    <button class="${state.language === "th" ? "active" : ""}" data-language="th" type="button">ไทย</button>
  </div>`;
}

function renderCountryCodeOptions(selected = "+66") {
  const options = [
    ["+66", "Thailand +66"]
  ];
  return options.map(([value, label]) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`).join("");
}

function splitMobile(mobile = "") {
  const known = ["+66"];
  const code = known.find((item) => mobile.startsWith(item)) || "+66";
  return { code, local: mobile.startsWith(code) ? mobile.slice(code.length) : mobile };
}

function screenSizePresetFor(width = DEFAULT_SCREEN_WIDTH, height = DEFAULT_SCREEN_HEIGHT) {
  return SCREEN_SIZE_PRESETS.find((preset) => Number(preset.width) === Number(width) && Number(preset.height) === Number(height))?.id || "custom";
}

function clampLatitude(value) {
  return Math.max(THAILAND_GEO_BOUNDS.south, Math.min(THAILAND_GEO_BOUNDS.north, Number(value)));
}

function clampLongitude(value) {
  return Math.max(THAILAND_GEO_BOUNDS.west, Math.min(THAILAND_GEO_BOUNDS.east, Number(value)));
}

function latLngToMapPosition(latitude, longitude) {
  const lat = clampLatitude(latitude);
  const lng = clampLongitude(longitude);
  const x = ((lng - THAILAND_GEO_BOUNDS.west) / (THAILAND_GEO_BOUNDS.east - THAILAND_GEO_BOUNDS.west)) * 100;
  const y = ((THAILAND_GEO_BOUNDS.north - lat) / (THAILAND_GEO_BOUNDS.north - THAILAND_GEO_BOUNDS.south)) * 100;
  return {
    x: Math.max(5, Math.min(95, x)),
    y: Math.max(5, Math.min(95, y))
  };
}

function defaultCoordinatesForScreen(screen) {
  return SEEDED_SCREEN_COORDINATES[screen.tabletId] || PROVINCE_CENTER_COORDINATES[normalizeProvinceName(screen.province)] || THAILAND_GEO_BOUNDS.center;
}

function normalizedCoordinatesForScreen(screen) {
  const fallback = defaultCoordinatesForScreen(screen);
  const latitude = Number.isFinite(Number(screen.latitude)) ? clampLatitude(screen.latitude) : fallback.lat;
  const longitude = Number.isFinite(Number(screen.longitude)) ? clampLongitude(screen.longitude) : fallback.lng;
  const position = latLngToMapPosition(latitude, longitude);
  return { latitude, longitude, x: position.x, y: position.y };
}

function screenGoogleMapsUrl(screen) {
  const coordinates = normalizedCoordinatesForScreen(screen);
  return `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`;
}

function getGoogleMapsApiKey() {
  return window.AD4U_GOOGLE_MAPS_API_KEY || localStorage.getItem(GOOGLE_MAPS_KEY_STORAGE) || "";
}

function loadGoogleMapsApi() {
  if (window.google?.maps) return Promise.resolve(window.google.maps);
  if (googleMapsLoader) return googleMapsLoader;
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) return Promise.reject(new Error("missing-google-maps-key"));
  googleMapsLoader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.maps);
    script.onerror = () => {
      googleMapsLoader = null;
      reject(new Error("google-maps-load-failed"));
    };
    document.head.appendChild(script);
  });
  return googleMapsLoader;
}

function promptForGoogleMapsApiKey() {
  const current = getGoogleMapsApiKey();
  const nextKey = window.prompt("Paste your Google Maps JavaScript API key.", current || "");
  if (nextKey === null) return;
  if (!nextKey.trim()) {
    localStorage.removeItem(GOOGLE_MAPS_KEY_STORAGE);
    googleMapsLoader = null;
    toast("Google Maps API key removed from this browser.");
    render();
    return;
  }
  localStorage.setItem(GOOGLE_MAPS_KEY_STORAGE, nextKey.trim());
  googleMapsLoader = null;
  toast("Google Maps API key saved in this browser.");
  render();
}

function renderScreenSizeOptions(selected = "portrait-1080x1920") {
  return [
    ...SCREEN_SIZE_PRESETS.map((preset) => `<option value="${preset.id}" ${selected === preset.id ? "selected" : ""}>${preset.label}</option>`),
    `<option value="custom" ${selected === "custom" ? "selected" : ""}>Custom size</option>`
  ].join("");
}

function partialEmail(email = "") {
  const [name, domain] = email.split("@");
  if (!domain) return email;
  return `${name.slice(0, 2)}${"*".repeat(Math.max(2, name.length - 2))}@${domain}`;
}

function makeOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function makePassword() {
  return `TS-${Math.random().toString(36).slice(2, 8).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
}

function profileComplete(user = currentUser()) {
  if (!user || user.role !== "customer") return true;
  const profile = user.profile || {};
  return Boolean(
    user.companyName &&
    user.firstName &&
    user.surname &&
    user.email &&
    user.mobile &&
    profile.companyAddress &&
    profile.province &&
    profile.postcode &&
    profile.businessType &&
    profile.authorizedPerson
  );
}

function paymentComplete(user = currentUser()) {
  if (!user || user.role !== "customer") return true;
  const payment = user.payment || {};
  const invoice = user.invoice || {};
  return Boolean(payment.method && payment.billingContact && invoice.taxType && invoice.invoiceEmail && invoice.taxId);
}

function customerCanBook(user = currentUser()) {
  return !user || user.role !== "customer" || (user.kycStatus === "complete" && profileComplete(user) && paymentComplete(user));
}

function money(value) {
  return new Intl.NumberFormat("en-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(value);
}

function defaultTierPricing(rate) {
  return { Mon: rate, Tue: rate, Wed: rate, Thu: rate, Fri: rate, Sat: rate, Sun: rate };
}

function normalizeProvinceName(value = "") {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return THAILAND_PROVINCES.find((province) => province.toLowerCase() === trimmed.toLowerCase()) || trimmed;
}

function normalizeDistrictName(province, value = "") {
  const trimmed = value.trim();
  if (!trimmed) return "";
  const normalizedProvince = normalizeProvinceName(province);
  const knownDistricts = DISTRICTS_BY_PROVINCE[normalizedProvince] || [];
  return knownDistricts.find((district) => district.toLowerCase() === trimmed.toLowerCase()) || trimmed;
}

function nextAvailablePinPosition(x, y) {
  const baseX = Number.isFinite(x) ? Math.max(5, Math.min(95, x)) : 50;
  const baseY = Number.isFinite(y) ? Math.max(5, Math.min(95, y)) : 50;
  const offsets = [
    [0, 0],
    [2, -2],
    [-2, 2],
    [3, 1],
    [-3, -1],
    [4, -3],
    [-4, 3],
    [0, 4],
    [0, -4]
  ];
  for (const [offsetX, offsetY] of offsets) {
    const candidateX = Math.max(5, Math.min(95, baseX + offsetX));
    const candidateY = Math.max(5, Math.min(95, baseY + offsetY));
    const overlaps = state.screens.some((screen) => Math.abs(Number(screen.x) - candidateX) < 1.5 && Math.abs(Number(screen.y) - candidateY) < 1.5);
    if (!overlaps) return { x: candidateX, y: candidateY };
  }
  return { x: baseX, y: baseY };
}

function billableSeconds(duration) {
  return Math.max(15, Math.ceil(Number(duration || 15) / 15) * 15);
}

function toast(message) {
  state.toast = message;
  render();
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}

function setRoute(route) {
  window.clearTimeout(playerRefreshTimer);
  window.clearInterval(playerCountdownTimer);
  if (route === "player" && state.route !== "player") state.previousRoute = state.route;
  if (route !== state.route && state.route === "book") clearBookingDraft();
  if (isCustomer() && route !== "profile" && route !== "customerDashboard" && !customerCanBook()) {
    state.route = "profile";
    saveState();
    render();
    return toast("Complete KYC, profile, and payment setup before booking adverts.");
  }
  state.route = route;
  saveState();
  render();
}

async function requestUpdateNow() {
  const user = currentUser();
  if (user?.role !== "super_admin") return;
  const firstConfirm = window.confirm("Update now from Git? This will pull the latest pushed version for AD4U.");
  if (!firstConfirm) return;
  const secondConfirm = window.confirm("Please confirm again. Do you want to run the AD4U update now?");
  if (!secondConfirm) return;
  const updateCode = window.prompt("Enter the AD4U update code to run the live Git pull now.");
  if (!updateCode) return toast("Update cancelled.");
  toast("Requesting update now...");
  try {
    const response = await fetch(`${PUBLIC_APP_URL}/update-now.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-AD4U-Update-Code": updateCode
      },
      body: JSON.stringify({ requestedBy: user.email, at: new Date().toISOString() })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`Update request failed with ${response.status}`);
    toast(payload.message || "Update requested. Check the live site again in a minute.");
  } catch {
    toast("Instant update could not run. Check the update code or server PHP command access. Daily 04:00 auto-update remains active.");
  }
}

function clearBookingDraft() {
  state.selectedSlots = {};
  state.activeBookingScreenId = null;
  calendarBuildToken += 1;
}

function login(email, password) {
  const user = state.users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) return toast("Login failed. Try owner@thaiscreen.test / admin123 or create a customer account.");
  state.currentUserId = user.id;
  state.route = user.role === "customer" ? user.kycStatus === "complete" && profileComplete(user) ? "customerDashboard" : "profile" : "dashboard";
  saveState();
  render();
}

function register(form) {
  const email = form.email.value.trim();
  if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) return toast("That email is already registered.");
  state.pendingRegistration = {
    companyName: form.companyName.value.trim(),
    firstName: form.firstName.value.trim(),
    surname: form.surname.value.trim(),
    email,
    otp: makeOtp()
  };
  state.authMode = "verifyEmail";
  saveState();
  render();
  toast(`Demo email OTP sent: ${state.pendingRegistration.otp}`);
}

function verifyRegistrationOtp(form) {
  const pending = state.pendingRegistration;
  if (!pending) return toast("Start registration first.");
  if (form.otp.value.trim() !== pending.otp) return toast("Email OTP is not correct.");
  const password = makePassword();
  const user = {
    id: uid("u"),
    companyName: pending.companyName,
    firstName: pending.firstName,
    surname: pending.surname,
    name: `${pending.companyName}`,
    email: pending.email,
    username: pending.email,
    password,
    role: "customer",
    mobile: "",
    kycStatus: "needs_mobile",
    profile: {},
    payment: {},
    invoice: {},
    welcomeEmail: { username: pending.email, password, loginUrl: PUBLIC_APP_URL }
  };
  state.users.push(user);
  state.currentUserId = user.id;
  state.pendingRegistration = null;
  state.authMode = "login";
  state.route = "profile";
  saveState();
  render();
  toast("Account created. Demo welcome email includes username, password, and login URL.");
}

function logout() {
  state.currentUserId = null;
  saveState();
  render();
}

function requestMobileOtp(form) {
  const user = currentUser();
  if (!user) return;
  const mobile = `${form.countryCode.value}${form.mobile.value.trim().replace(/^0+/, "")}`;
  if (!mobile) return toast("Enter your mobile number.");
  user.mobile = mobile;
  state.pendingMobileOtp = { userId: user.id, mobile, otp: makeOtp() };
  saveState();
  render();
  toast(`Demo SMS OTP sent: ${state.pendingMobileOtp.otp}`);
}

function verifyMobileOtp(form) {
  const user = currentUser();
  const pending = state.pendingMobileOtp;
  if (!user || !pending || pending.userId !== user.id) return toast("Request a phone OTP first.");
  if (form.otp.value.trim() !== pending.otp) return toast("Phone OTP is not correct.");
  user.kycStatus = "profile_required";
  state.pendingMobileOtp = null;
  saveState();
  render();
  toast("Phone verified. Complete your profile and payment setup.");
}

function saveCustomerProfile(form) {
  const user = currentUser();
  if (!user) return;
  user.companyName = form.companyName.value.trim();
  user.firstName = form.firstName.value.trim();
  user.surname = form.surname.value.trim();
  user.name = user.companyName || `${user.firstName} ${user.surname}`.trim();
  user.profile = {
    companyAddress: form.companyAddress.value.trim(),
    province: form.province.value.trim(),
    postcode: form.postcode.value.trim(),
    businessType: form.businessType.value.trim(),
    authorizedPerson: form.authorizedPerson.value.trim()
  };
  if (profileComplete(user) && paymentComplete(user)) user.kycStatus = "complete";
  saveState();
  render();
  toast(profileComplete(user) ? "Profile saved." : "Please complete every required profile field.");
}

function savePaymentProfile(form) {
  const user = currentUser();
  if (!user) return;
  user.payment = {
    method: form.method.value,
    billingContact: form.billingContact.value.trim(),
    billingPhone: form.billingPhone.value.trim()
  };
  user.invoice = {
    taxType: form.taxType.value,
    taxId: form.taxId.value.trim(),
    invoiceEmail: form.invoiceEmail.value.trim(),
    invoiceAddress: form.invoiceAddress.value.trim(),
    withholdingTax: form.withholdingTax.checked
  };
  if (profileComplete(user) && paymentComplete(user)) user.kycStatus = "complete";
  saveState();
  render();
  toast(paymentComplete(user) ? "Payment and invoice setup saved." : "Please complete every payment/invoice field.");
}

async function uploadAdvert(form) {
  const duration = Number(form.duration.value);
  const media = selectedMedia;
  if (state.editingAdvertId) {
    const advert = state.adverts.find((item) => item.id === state.editingAdvertId);
    if (!advert) return;
    const width = media?.width || advert.width || 0;
    const height = media?.height || advert.height || 0;
    const editSizeProblem = mediaUploadProblem({ width, height });
    if (editSizeProblem) return toast(editSizeProblem);
    advert.title = form.title.value.trim();
    advert.type = media?.type || form.type.value;
    advert.fileName = form.fileName.value.trim() || media?.fileName || `${advert.title.replaceAll(" ", "-").toLowerCase()}.${advert.type === "video" ? "mp4" : "jpg"}`;
    advert.duration = duration;
    advert.billableSeconds = billableSeconds(duration);
    advert.width = width;
    advert.height = height;
    if (media?.file) {
      const key = `media-${advert.id}-${Date.now()}`;
      await putMediaBlob(key, media.file);
      advert.mediaKey = key;
      advert.mediaUrl = "";
      advert.mimeType = media.mimeType;
      mediaUrlCache.set(key, media.objectUrl);
    } else if (media?.dataUrl) {
      advert.mediaUrl = media.dataUrl;
    }
    if (media?.mimeType) advert.mimeType = media.mimeType;
    applyModeration(advert);
    advert.uploadedAt = new Date().toISOString().slice(0, 10);
    await keepOnlyCustomerAdvert(advert.id);
    state.selectedAdvertId = advert.id;
    state.editingAdvertId = null;
    selectedMedia = null;
    uploadDraft = { title: "", type: "video", fileName: "", duration: 15 };
    saveState();
    render();
    return toast(`Advert replaced. ${advert.duration}s will be billed as ${advert.billableSeconds}s.`);
  }
  if (!media) return toast(`Choose a real video or image file. Accepted screen sizes: ${acceptedSizeText()}.`);
  const uploadSizeProblem = mediaUploadProblem(media);
  if (uploadSizeProblem) return toast(uploadSizeProblem);
  const advertId = uid("a");
  const advert = {
    id: advertId,
    customerId: currentUser().id,
    title: form.title.value.trim(),
    type: media?.type || form.type.value,
    fileName: form.fileName.value.trim() || media?.fileName || `${form.title.value.trim().replaceAll(" ", "-").toLowerCase()}.${form.type.value === "video" ? "mp4" : "jpg"}`,
    duration,
    billableSeconds: billableSeconds(duration),
    mediaUrl: media?.dataUrl || "",
    mediaKey: "",
    mimeType: media?.mimeType || "",
    width: media?.width || 0,
    height: media?.height || 0,
    status: "pending_review",
    moderationReason: "",
    uploadedAt: new Date().toISOString().slice(0, 10)
  };
  if (media?.file) {
    const key = `media-${advertId}-${Date.now()}`;
    await putMediaBlob(key, media.file);
    advert.mediaKey = key;
    advert.mediaUrl = "";
    mediaUrlCache.set(key, media.objectUrl);
  }
  applyModeration(advert);
  state.adverts.push(advert);
  await keepOnlyCustomerAdvert(advert.id);
  state.selectedAdvertId = advert.id;
  state.editingAdvertId = null;
  selectedMedia = null;
  uploadDraft = { title: "", type: "video", fileName: "", duration: 15 };
  saveState();
  render();
  toast(`Advert uploaded. ${advert.duration}s will be billed as ${advert.billableSeconds}s.`);
}

function addToCart(advertId) {
  if (!customerCanBook()) {
    state.route = "profile";
    saveState();
    render();
    return toast("Complete profile and payment setup before adding bookings.");
  }
  const items = Object.entries(state.selectedSlots || {}).map(([screenId, slots]) => ({ screenId, slots })).filter((item) => item.slots.length);
  if (!advertId) return toast("Choose one advert first.");
  if (!items.length) return toast("Select at least one screen and one time slot.");
  const advert = state.adverts.find((a) => a.id === advertId);
  const mismatch = items.map((item) => state.screens.find((screen) => screen.id === item.screenId)).find((screen) => screen && !mediaMatchesScreen(advert, screen));
  if (mismatch) return toast(`${mismatch.name} requires ${mismatch.width}x${mismatch.height}. Upload exact-size media before booking.`);
  const total = items.reduce((sum, item) => {
    return sum + slotsTotal(item.screenId, item.slots, advert);
  }, 0);
  state.cart.push({ id: uid("c"), advertId, items, total });
  state.selectedScreens = [];
  state.selectedSlots = {};
  saveState();
  toast("Booking added to basket.");
}

function addScreenSelectionToCart(screenId, advertId) {
  if (!customerCanBook()) {
    state.route = "profile";
    saveState();
    render();
    return toast("Complete profile and payment setup before adding bookings.");
  }
  const slots = state.selectedSlots[screenId] || [];
  if (!advertId) return toast("Choose one advert first.");
  if (!slots.length) return toast("Select at least one slot for this screen.");
  const advert = state.adverts.find((a) => a.id === advertId);
  const screen = state.screens.find((item) => item.id === screenId);
  if (!mediaMatchesScreen(advert, screen)) return toast(`${screen.name} requires ${screen.width}x${screen.height}. Upload exact-size media before booking.`);
  const existing = state.cart.find((item) => item.advertId === advertId && item.items.length === 1 && item.items[0].screenId === screenId);
  const item = { screenId, slots: [...slots] };
  const total = slotsTotal(screenId, slots, advert);
  if (existing) {
    existing.items = [item];
    existing.total = total;
  } else {
    state.cart.push({ id: uid("c"), advertId, items: [item], total });
  }
  state.selectedSlots[screenId] = [];
  saveState();
  markBasketUpdated(screenId);
  updateCalendarCostDom(screenId);
  updateBookingSummaryDom();
  updateDecisionBarDom();
  document.querySelectorAll(`[data-slot^="${screenId}|"]`).forEach((slotButton) => {
    slotButton.classList.remove("selected");
    const [, slot] = slotButton.dataset.slot.split("|");
    if (slots.includes(slot)) {
      slotButton.classList.add("in-basket");
      const label = slotButton.querySelector("span");
      if (label) label.textContent = "In basket";
    }
  });
}

function markBasketUpdated(screenId) {
  const button = document.querySelector(`[data-update-basket="${screenId}"]`);
  if (!button) return;
  button.classList.add("updated");
  button.textContent = "Updated";
  window.clearTimeout(button.updateTimer);
  button.updateTimer = window.setTimeout(() => {
    button.classList.remove("updated");
    button.textContent = "Update basket";
  }, 2200);
}

function editAdvert(advertId) {
  state.editingAdvertId = advertId;
  state.selectedAdvertId = advertId;
  saveState();
  render();
}

function cancelAdvertEdit() {
  state.editingAdvertId = null;
  saveState();
  render();
}

function selectAdvert(advertId) {
  state.selectedAdvertId = advertId;
  saveState();
  render();
}

function handleMediaFile(file) {
  if (!file) return;
  const type = file.type.startsWith("video/") ? "video" : "image";
  const objectUrl = URL.createObjectURL(file);
  selectedMedia = { file, fileName: file.name, mimeType: file.type, type, objectUrl, duration: type === "image" ? 15 : 0, width: 0, height: 0 };
  const form = document.querySelector("#uploadForm");
  if (!form) return;
  form.fileName.value = file.name;
  form.type.value = type;
  renderMediaPreview(selectedMedia);
  if (type === "video") {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = objectUrl;
    video.onloadedmetadata = () => {
      selectedMedia.duration = Math.ceil(video.duration || 15);
      selectedMedia.width = video.videoWidth || 0;
      selectedMedia.height = video.videoHeight || 0;
      form.duration.value = selectedMedia.duration;
      renderMediaPreview(selectedMedia);
      const problem = mediaUploadProblem(selectedMedia);
      if (problem) toast(problem);
    };
  } else {
    const image = new Image();
    image.onload = () => {
      selectedMedia.width = image.naturalWidth || 0;
      selectedMedia.height = image.naturalHeight || 0;
      renderMediaPreview(selectedMedia);
      const problem = mediaUploadProblem(selectedMedia);
      if (problem) toast(problem);
    };
    image.src = objectUrl;
    form.duration.value = 15;
  }
}

function handleHouseMediaFile(file) {
  if (!file) return;
  const type = file.type.startsWith("video/") ? "video" : "image";
  const objectUrl = URL.createObjectURL(file);
  selectedHouseMedia = { file, fileName: file.name, mimeType: file.type, type, objectUrl, duration: type === "image" ? 15 : 0 };
  const form = document.querySelector("#houseAdvertForm");
  if (!form) return;
  form.fileName.value = file.name;
  renderHouseMediaPreview(selectedHouseMedia);
  if (type === "video") {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = objectUrl;
    video.onloadedmetadata = () => {
      selectedHouseMedia.duration = Math.ceil(video.duration || 15);
      form.duration.value = selectedHouseMedia.duration;
    };
  } else {
    form.duration.value = 15;
  }
}

function handleStickerImageFile(file) {
  if (!file || !file.type.startsWith("image/")) return toast("Choose one image to make stickers.");
  const objectUrl = URL.createObjectURL(file);
  const image = new Image();
  image.onload = () => {
    if (stickerUpload?.objectUrl) URL.revokeObjectURL(stickerUpload.objectUrl);
    stickerUpload = {
      objectUrl,
      fileName: file.name,
      width: image.naturalWidth || 0,
      height: image.naturalHeight || 0
    };
    stickerImage = image;
    render();
  };
  image.onerror = () => toast("That image could not be loaded. Try a JPG or PNG.");
  image.src = objectUrl;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawImageCover(ctx, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const scaledWidth = image.naturalWidth * scale;
  const scaledHeight = image.naturalHeight * scale;
  const sx = (width - scaledWidth) / 2;
  const sy = (height - scaledHeight) / 2;
  ctx.drawImage(image, x + sx, y + sy, scaledWidth, scaledHeight);
}

function drawHeart(ctx, x, y, size, fill = "#ff7fa5") {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 32, size / 32);
  ctx.beginPath();
  ctx.moveTo(16, 29);
  ctx.bezierCurveTo(3, 18, 1, 8, 8, 4);
  ctx.bezierCurveTo(12, 1, 16, 5, 16, 8);
  ctx.bezierCurveTo(16, 5, 20, 1, 24, 4);
  ctx.bezierCurveTo(31, 8, 29, 18, 16, 29);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

function drawSpark(ctx, x, y, size, color = "#f3bc2f") {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(0, size);
  ctx.moveTo(-size, 0);
  ctx.lineTo(size, 0);
  ctx.stroke();
  ctx.rotate(Math.PI / 4);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.55);
  ctx.lineTo(0, size * 0.55);
  ctx.moveTo(-size * 0.55, 0);
  ctx.lineTo(size * 0.55, 0);
  ctx.stroke();
  ctx.restore();
}

function drawFlower(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < 6; i += 1) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.ellipse(0, -size * 0.5, size * 0.32, size * 0.52, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#ff86ac";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.24, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd45b";
  ctx.fill();
  ctx.restore();
}

function drawStickerAccent(ctx, accent) {
  if (accent === "heart") {
    drawHeart(ctx, 84, 92, 42);
    drawSpark(ctx, 410, 120, 22);
  } else if (accent === "hearts") {
    drawHeart(ctx, 72, 112, 38);
    drawHeart(ctx, 118, 72, 28, "#ff9bbb");
  } else if (accent === "spark") {
    drawSpark(ctx, 74, 112, 28);
    drawSpark(ctx, 412, 98, 20);
  } else if (accent === "burst") {
    drawSpark(ctx, 86, 92, 30);
    drawSpark(ctx, 426, 150, 18, "#ffbf38");
  } else if (accent === "broken") {
    drawHeart(ctx, 82, 86, 44, "#ee5570");
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(82, 70);
    ctx.lineTo(96, 88);
    ctx.lineTo(84, 106);
    ctx.stroke();
  } else if (accent === "food") {
    ctx.font = "46px Segoe UI Emoji, sans-serif";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.strokeText("🍔", 384, 98);
    ctx.fillText("🍔", 384, 98);
  } else if (accent === "shock") {
    ["!", "!", "!"].forEach((mark, index) => {
      ctx.save();
      ctx.translate(392 + index * 28, 104 + index * 16);
      ctx.rotate((index - 1) * 0.3);
      ctx.font = "900 54px Arial";
      ctx.strokeStyle = "white";
      ctx.lineWidth = 8;
      ctx.fillStyle = ["#ffbf38", "#ef5f8d", "#7d69cf"][index];
      ctx.strokeText(mark, 0, 0);
      ctx.fillText(mark, 0, 0);
      ctx.restore();
    });
  } else if (accent === "tear") {
    ctx.font = "54px Segoe UI Emoji, sans-serif";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.strokeText("💧", 66, 122);
    ctx.strokeText("💧", 392, 132);
    ctx.fillText("💧", 66, 122);
    ctx.fillText("💧", 392, 132);
  } else if (accent === "money") {
    ctx.font = "50px Segoe UI Emoji, sans-serif";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.strokeText("💸", 384, 104);
    ctx.fillText("💸", 384, 104);
  } else if (accent === "flower") {
    drawFlower(ctx, 82, 112, 34);
    drawFlower(ctx, 420, 122, 26);
  } else if (accent === "ok") {
    ctx.font = "54px Segoe UI Emoji, sans-serif";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.strokeText("👍", 70, 126);
    ctx.fillText("👍", 70, 126);
  } else if (accent === "wave") {
    ctx.font = "54px Segoe UI Emoji, sans-serif";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.strokeText("👋", 382, 126);
    ctx.fillText("👋", 382, 126);
  }
}

function drawSticker(template) {
  if (!stickerImage) return null;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  const [x, y, width, height] = template.image;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate((template.rotate || 0) * Math.PI / 180);
  ctx.translate(-(x + width / 2), -(y + height / 2));
  ctx.shadowColor = "rgba(30, 42, 52, 0.18)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 8;
  drawRoundedRect(ctx, x - 17, y - 17, width + 34, height + 34, 82);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.shadowColor = "transparent";
  drawRoundedRect(ctx, x, y, width, height, 68);
  ctx.save();
  ctx.clip();
  drawImageCover(ctx, stickerImage, x, y, width, height);
  ctx.restore();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.94)";
  ctx.lineWidth = 12;
  drawRoundedRect(ctx, x - 5, y - 5, width + 10, height + 10, 74);
  ctx.stroke();
  ctx.restore();
  drawStickerAccent(ctx, template.accent);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let fontSize = 58;
  do {
    ctx.font = `900 ${fontSize}px Tahoma, 'Noto Sans Thai', Arial, sans-serif`;
    fontSize -= 2;
  } while (ctx.measureText(template.text).width > 430 && fontSize > 34);
  ctx.lineJoin = "round";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 16;
  ctx.strokeText(template.text, 256, template.textY);
  ctx.strokeStyle = "rgba(40, 49, 58, 0.18)";
  ctx.lineWidth = 4;
  ctx.strokeText(template.text, 256, template.textY + 4);
  ctx.fillStyle = template.color;
  ctx.fillText(template.text, 256, template.textY);
  return canvas;
}

function stickerDataUrl(template) {
  const canvas = drawSticker(template);
  return canvas ? canvas.toDataURL("image/png") : "";
}

function downloadSticker(templateId) {
  const template = stickerTemplates.find((item) => item.id === templateId);
  const canvas = template ? drawSticker(template) : null;
  if (!canvas) return toast("Upload one image first.");
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `thai-sticker-${template.id}.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function downloadAllStickers() {
  if (!stickerImage) return toast("Upload one image first.");
  stickerTemplates.forEach((template, index) => {
    window.setTimeout(() => downloadSticker(template.id), index * 120);
  });
  toast(`Downloading ${stickerTemplates.length} stickers.`);
}

function renderMediaPreview(media) {
  const preview = document.querySelector("[data-media-preview]");
  if (!preview) return;
  preview.innerHTML = media.type === "video"
    ? `<video src="${media.objectUrl || media.dataUrl}" controls muted></video><span>${media.fileName}${media.width ? ` - ${media.width}x${media.height}` : ""}</span>`
    : `<img src="${media.objectUrl || media.dataUrl}" alt="${media.fileName}" /><span>${media.fileName}${media.width ? ` - ${media.width}x${media.height}` : ""}</span>`;
}

function renderHouseMediaPreview(media) {
  const preview = document.querySelector("[data-house-media-preview]");
  if (!preview) return;
  preview.innerHTML = media.type === "video"
    ? `<video src="${media.objectUrl || mediaSourceFor(media)}" controls muted></video><span>${media.fileName}</span>`
    : `<img src="${media.objectUrl || mediaSourceFor(media)}" alt="${media.fileName}" /><span>${media.fileName}</span>`;
}

function mediaInfoFromFile(file) {
  const type = file.type.startsWith("video/") ? "video" : "image";
  const objectUrl = URL.createObjectURL(file);
  return new Promise((resolve) => {
    const done = (details = {}) => resolve({
      type,
      objectUrl,
      duration: type === "image" ? 15 : Math.ceil(details.duration || 15),
      width: details.width || 0,
      height: details.height || 0
    });
    if (type === "video") {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = objectUrl;
      video.onloadedmetadata = () => done({ duration: video.duration, width: video.videoWidth, height: video.videoHeight });
      video.onerror = () => done();
      return;
    }
    const image = new Image();
    image.onload = () => done({ width: image.naturalWidth, height: image.naturalHeight });
    image.onerror = () => done();
    image.src = objectUrl;
  });
}

async function addHouseMediaFiles(files) {
  const picked = [...(files || [])].filter((file) => file.type.startsWith("video/") || file.type.startsWith("image/"));
  if (!picked.length) return toast("Choose video or image files for the default advert pool.");
  for (const file of picked) {
    const type = file.type.startsWith("video/") ? "video" : "image";
    const id = uid("h");
    const key = `house-${id}-${Date.now()}`;
    const objectUrl = URL.createObjectURL(file);
    await putMediaBlob(key, file);
    mediaUrlCache.set(key, objectUrl);
    state.houseAdverts ||= [];
    state.houseAdverts.push({
      id,
      title: file.name.replace(/\.[^.]+$/, ""),
      type,
      fileName: file.name,
      duration: 15,
      mediaKey: key,
      mimeType: file.type,
      message: state.houseAdvert?.message || seedState.houseAdvert.message
    });
  }
  if (state.houseAdverts.length) state.houseAdvert = { ...state.houseAdverts[0], message: state.houseAdvert?.message || seedState.houseAdvert.message };
  saveState();
  render();
  toast(`${picked.length} default advert${picked.length === 1 ? "" : "s"} added to the random pool.`);
}

async function removeHouseAdvert(advertId) {
  const advert = (state.houseAdverts || []).find((item) => item.id === advertId);
  if (!advert) return;
  state.houseAdverts = state.houseAdverts.filter((item) => item.id !== advertId);
  await deleteMediaBlob(advert.mediaKey);
  state.houseAdvert = state.houseAdverts[0] || { ...seedState.houseAdvert, message: state.houseAdvert?.message || seedState.houseAdvert.message };
  saveState();
  render();
  toast("Default advert removed from the random pool.");
}

async function addScreenDefaultMediaFiles(screenId, files) {
  const screen = state.screens.find((item) => item.id === screenId);
  if (!screen) return;
  const picked = [...(files || [])].filter((file) => file.type.startsWith("video/") || file.type.startsWith("image/"));
  if (!picked.length) return toast("Choose video or image files for this screen.");
  let added = 0;
  for (const file of picked) {
    const info = await mediaInfoFromFile(file);
    if (info.width && info.height && (Number(info.width) !== Number(screen.width) || Number(info.height) !== Number(screen.height))) {
      URL.revokeObjectURL(info.objectUrl);
      toast(`${file.name} is ${info.width}x${info.height}. ${screen.name} needs ${screen.width}x${screen.height}.`);
      continue;
    }
    const id = uid("sd");
    const key = `screen-default-${screen.id}-${id}-${Date.now()}`;
    await putMediaBlob(key, file);
    mediaUrlCache.set(key, info.objectUrl);
    screen.defaultAdverts ||= [];
    screen.defaultAdverts.push({
      id,
      title: file.name.replace(/\.[^.]+$/, ""),
      type: info.type,
      fileName: file.name,
      duration: info.duration || 15,
      width: info.width,
      height: info.height,
      mediaKey: key,
      mimeType: file.type,
      message: state.houseAdvert?.message || seedState.houseAdvert.message
    });
    added += 1;
  }
  saveState();
  render();
  if (added) toast(`${added} screen default advert${added === 1 ? "" : "s"} added. This tablet will use these before the global defaults.`);
}

async function removeScreenDefaultAdvert(screenId, advertId) {
  const screen = state.screens.find((item) => item.id === screenId);
  const advert = screen?.defaultAdverts?.find((item) => item.id === advertId);
  if (!screen || !advert) return;
  screen.defaultAdverts = screen.defaultAdverts.filter((item) => item.id !== advertId);
  await deleteMediaBlob(advert.mediaKey);
  saveState();
  render();
  toast("Screen default advert removed.");
}

function mediaMatchesScreen(advert, screen) {
  if (!advert || !screen) return false;
  return mediaSizeKnown(advert) && Number(advert.width) === Number(screen.width) && Number(advert.height) === Number(screen.height);
}

function mediaSizeKnown(media) {
  return Number(media?.width) > 0 && Number(media?.height) > 0;
}

function configuredScreenSizes() {
  const unique = new Map();
  state.screens.forEach((screen) => unique.set(`${screen.width}x${screen.height}`, { width: Number(screen.width), height: Number(screen.height) }));
  return [...unique.values()];
}

function mediaMatchesAnyConfiguredScreen(media) {
  return mediaSizeKnown(media) && configuredScreenSizes().some((size) => Number(media.width) === size.width && Number(media.height) === size.height);
}

function sizeText(width, height) {
  return `${Number(width)}x${Number(height)}`;
}

function acceptedSizeText() {
  return configuredScreenSizes().map((size) => sizeText(size.width, size.height)).join(", ");
}

function activeScreenForUpload() {
  return state.screens.find((screen) => screen.id === state.activeBookingScreenId || screen.id === state.selectedScreens[0]) || null;
}

function mediaUploadProblem(media) {
  if (!mediaSizeKnown(media)) return "Media size is not detected yet. Wait for the preview to load, then upload again.";
  const screen = activeScreenForUpload();
  if (screen && !mediaMatchesScreen(media, screen)) return `${screen.name} requires ${sizeText(screen.width, screen.height)}. This file is ${sizeText(media.width, media.height)}.`;
  if (!mediaMatchesAnyConfiguredScreen(media)) return `This file is ${sizeText(media.width, media.height)}. Accepted screen sizes: ${acceptedSizeText()}.`;
  return "";
}

function screenOrientation(screen) {
  return Number(screen.height) > Number(screen.width) ? "Vertical" : "Horizontal";
}

function applyModeration(advert) {
  const rules = state.moderationRules || seedState.moderationRules;
  const text = `${advert.title} ${advert.fileName}`.toLowerCase();
  const matched = rules.find((rule) => rule && text.includes(rule.toLowerCase()));
  if (matched) {
    advert.status = "blocked";
    advert.moderationReason = `AI check flagged banned content rule: ${matched}`;
    return;
  }
  advert.status = "pending_review";
  advert.moderationReason = "AI check passed. Waiting for manual admin approval.";
}

function updateModerationRules(form) {
  state.moderationRules = form.rules.value.split("\n").map((rule) => rule.trim()).filter(Boolean);
  state.adverts.filter((advert) => advert.status !== "approved").forEach(applyModeration);
  saveState();
  render();
  toast("AI moderation rules updated.");
}

function renderAdvertMediaPreview(advert) {
  const src = mediaSourceFor(advert);
  if (!src) return `<span class="hint">Local preview will appear here after the file loads in this browser.</span>`;
  return advert.type === "video"
    ? `<video src="${src}" controls muted></video><span>${advert.fileName}</span>`
    : `<img src="${src}" alt="${advert.fileName}" /><span>${advert.fileName}</span>`;
}

function editSlots(screenId, slots = []) {
  state.selectedScreens = [screenId];
  state.activeBookingScreenId = screenId;
  state.selectedSlots = { [screenId]: [...slots] };
  state.route = "book";
  saveState();
  render();
}

function editCartItem(cartId, screenId) {
  const cartItem = state.cart.find((item) => item.id === cartId);
  const screenItem = cartItem?.items.find((item) => item.screenId === screenId);
  if (!cartItem || !screenItem) return;
  state.selectedAdvertId = cartItem.advertId;
  editSlots(screenId, screenItem.slots);
}

function editBasketSlotsForScreen(screenId) {
  const slots = cartSlotsFor(screenId);
  if (!slots.length) return toast("No saved basket slots for this screen yet.");
  editSlots(screenId, slots);
}

function checkout() {
  if (!state.cart.length) return toast("Your basket is empty.");
  state.cart.forEach((cartItem) => {
    state.orders.push({
      id: uid("o"),
      customerId: currentUser().id,
      advertId: cartItem.advertId,
      status: "paid",
      total: cartItemTotal(cartItem),
      createdAt: new Date().toISOString().slice(0, 10),
      items: cartItem.items
    });
  });
  state.cart = [];
  saveState();
  toast("Payment captured in demo mode. Orders are now live after approval.");
}

function makeBasketLive() {
  if (!customerCanBook()) {
    state.route = "profile";
    saveState();
    render();
    return toast("Complete payment setup before going LIVE.");
  }
  if (!state.cart.length) return toast("Add slots to the basket first.");
  const liveCount = state.cart.length;
  state.cart.forEach((cartItem) => {
    const advert = state.adverts.find((item) => item.id === cartItem.advertId);
    if (advert && advert.status !== "approved" && advert.status !== "blocked") advert.status = "pending_review";
    state.orders.push({
      id: uid("o"),
      customerId: currentUser().id,
      advertId: cartItem.advertId,
      status: "paid",
      total: cartItemTotal(cartItem),
      createdAt: new Date().toISOString().slice(0, 10),
      items: cartItem.items
    });
  });
  state.cart = [];
  state.selectedSlots = {};
  saveState();
  render();
  toast(`${liveCount} booking${liveCount === 1 ? "" : "s"} scheduled. Admin approval is required before playback.`);
}

function removeCartItem(id) {
  state.cart = state.cart.filter((item) => item.id !== id);
  saveState();
  render();
}

function toggleScreen(screenId) {
  state.selectedScreens = [screenId];
  clearBookingDraft();
  state.activeBookingScreenId = null;
  saveState();
  render();
}

function bookScreen(screenId) {
  if (!customerCanBook()) {
    state.route = "profile";
    saveState();
    render();
    return toast("Complete profile and payment setup before booking adverts.");
  }
  if (state.activeBookingScreenId && state.activeBookingScreenId !== screenId) clearBookingDraft();
  state.selectedScreens = [screenId];
  state.activeBookingScreenId = screenId;
  state.selectedSlots[screenId] ||= [];
  state.calendarDate = todayDate();
  state.calendarDay = dayLabel(state.calendarDate);
  saveState();
  render();
}

function openPlayer(screenId) {
  state.playerScreenId = screenId;
  state.previousRoute = state.route === "player" ? state.previousRoute || "book" : state.route;
  state.route = "player";
  saveState();
  render();
}

function playerUrl(screen) {
  return `${PUBLIC_APP_URL}/?player=${encodeURIComponent(screen.tabletId)}`;
}

async function copyPlayerUrl(screenId) {
  const screen = state.screens.find((item) => item.id === screenId);
  if (!screen) return;
  const url = playerUrl(screen);
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const input = document.createElement("textarea");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  toast(`Player URL copied for ${screen.tabletId}.`);
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen?.();
    return;
  }
  document.documentElement.requestFullscreen?.();
}

function changePhoto(screenId, direction) {
  const screen = state.screens.find((item) => item.id === screenId);
  const count = Math.max(1, screen?.photos?.length || 1);
  const current = state.photoIndex?.[screenId] || 0;
  state.photoIndex ||= {};
  state.photoIndex[screenId] = (current + direction + count) % count;
  saveState();
  render();
}

function toggleSlot(screenId, slot, shouldRender = true) {
  if (!state.selectedScreens.includes(screenId)) state.selectedScreens.push(screenId);
  const slots = state.selectedSlots[screenId] || [];
  state.selectedSlots[screenId] = slots.includes(slot) ? slots.filter((s) => s !== slot) : [...slots, slot];
  if (shouldRender) {
    saveState();
    render();
  } else {
    scheduleSave();
  }
  return state.selectedSlots[screenId].includes(slot);
}

function slotBooked(screenId, slot) {
  return state.orders.some((order) => order.items.some((item) => item.screenId === screenId && item.slots.includes(slot)));
}

function bookedSlotSet(screenId) {
  return new Set(state.orders.flatMap((order) => order.items.filter((item) => item.screenId === screenId).flatMap((item) => item.slots)));
}

function slotDate(slot) {
  const first = slot.split(" ")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(first) ? first : null;
}

function slotPrice(screen, slotOrDate) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(slotOrDate) ? slotOrDate : slotDate(slotOrDate);
  if (!date) return screen.rate;
  const day = dayLabel(date);
  return Number(screen.tierPricing?.[day] ?? screen.rate);
}

function currentBookingAdvert() {
  const adverts = state.adverts.filter((a) => a.customerId === currentUser()?.id);
  return adverts.find((a) => a.id === state.selectedAdvertId) || adverts.find((a) => a.status === "approved") || adverts[0] || null;
}

function slotsTotal(screenId, slots, advert = currentBookingAdvert()) {
  const screen = state.screens.find((item) => item.id === screenId);
  if (!screen) return 0;
  const durationMultiplier = advert ? advert.billableSeconds / 15 : 1;
  return slots.reduce((sum, slot) => sum + slotPrice(screen, slot) * durationMultiplier, 0);
}

function cartItemTotal(item) {
  const advert = state.adverts.find((a) => a.id === item.advertId);
  return item.items.reduce((sum, screenItem) => sum + slotsTotal(screenItem.screenId, screenItem.slots, advert), 0);
}

function billingMultiplier(advert = currentBookingAdvert()) {
  return advert ? advert.billableSeconds / 15 : 1;
}

function selectedSessionTotal(advert = currentBookingAdvert()) {
  return Object.entries(state.selectedSlots || {}).reduce((sum, [screenId, slots]) => sum + slotsTotal(screenId, slots, advert), 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + cartItemTotal(item), 0);
}

function cartSlotsFor(screenId, advertId = currentBookingAdvert()?.id) {
  if (!advertId) return [];
  return state.cart
    .filter((item) => item.advertId === advertId)
    .flatMap((item) => item.items.filter((screenItem) => screenItem.screenId === screenId).flatMap((screenItem) => screenItem.slots));
}

function projectedTotal(advert = currentBookingAdvert()) {
  return selectedSessionTotal(advert) + cartTotal();
}

function todayDate() {
  const now = new Date();
  const timezoneOffsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - timezoneOffsetMs).toISOString().slice(0, 10);
}

function setCalendarDate(date) {
  state.calendarDate = date;
  state.calendarDay = dayLabel(date);
  saveState();
  render();
}

function moveCalendarDate(days) {
  setCalendarDate(addDays(state.calendarDate || todayDate(), days));
}

function addDays(date, days) {
  const [year, month, day] = date.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day + days));
  return parsed.toISOString().slice(0, 10);
}

function dayLabel(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function fullDateLabel(date) {
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function shortDateLabel(date) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function weekDates(startDate) {
  return Array.from({ length: 7 }, (_, index) => addDays(startDate, index));
}

function weekRangeLabel(startDate) {
  const endDate = addDays(startDate, 6);
  return `${fullDateLabel(startDate)} to ${fullDateLabel(endDate)}`;
}

function capacityForScreen(screen, startDate = todayDate()) {
  const dates = new Set(weekDates(startDate));
  const bookedSlots = new Set();
  state.orders.forEach((order) => {
    order.items.forEach((item) => {
      if (item.screenId !== screen.id) return;
      item.slots.forEach((slot) => {
        if (dates.has(slotDate(slot))) bookedSlots.add(slot);
      });
    });
  });
  const totalSlots = 7 * 24 * 60 * 4;
  const percent = Math.min(100, (bookedSlots.size / totalSlots) * 100);
  return { booked: bookedSlots.size, total: totalSlots, percent };
}

function capacityStatus(percent) {
  if (percent >= 80) return { label: "Near full", className: "bad", guidance: "Add screens" };
  if (percent >= 45) return { label: "Healthy", className: "ok", guidance: "Keep selling" };
  return { label: "Low", className: "warn", guidance: "Sell more adverts" };
}

function provinceCoverage() {
  const priority = ["Bangkok", "Chiang Mai", "Phuket", "Khon Kaen", "Songkhla", "Chonburi", "Nakhon Ratchasima", "Udon Thani", "Surat Thani"];
  const active = new Set(state.screens.map((screen) => screen.province));
  return {
    active: [...active].sort(),
    missing: priority.filter((province) => !active.has(province))
  };
}

function advertLiveStats() {
  const nowSlot = currentSlotKey();
  const groups = new Map();
  const visibleOrders = isStaff() ? state.orders : state.orders.filter((order) => order.customerId === currentUser()?.id);

  visibleOrders.filter((order) => order.status === "paid").forEach((order) => {
    const advert = state.adverts.find((item) => item.id === order.advertId);
    if (!advert) return;
    const customer = state.users.find((user) => user.id === order.customerId);
    if (!groups.has(advert.id)) {
      groups.set(advert.id, {
        advert,
        customer,
        impressions: 0,
        bookedSlots: 0,
        liveSeconds: 0,
        screens: new Set(),
        firstLiveSlot: "",
        lastLiveSlot: "",
        revenue: 0
      });
    }
    const group = groups.get(advert.id);
    group.revenue += order.total;
    order.items.forEach((item) => {
      const screen = state.screens.find((screenItem) => screenItem.id === item.screenId);
      if (screen) group.screens.add(screen.name);
      group.bookedSlots += item.slots.length;
      item.slots.forEach((slot) => {
        if (slot > nowSlot) return;
        group.impressions += 1;
        group.liveSeconds += advert.billableSeconds || advert.duration || 15;
        if (!group.firstLiveSlot || slot < group.firstLiveSlot) group.firstLiveSlot = slot;
        if (!group.lastLiveSlot || slot > group.lastLiveSlot) group.lastLiveSlot = slot;
      });
    });
  });

  return [...groups.values()].sort((a, b) => b.impressions - a.impressions || b.bookedSlots - a.bookedSlots);
}

function screenPerformanceRows(filter = networkFilters) {
  const nowSlot = currentSlotKey();
  return state.screens
    .filter((screen) => filter.province === "All" || screen.province === filter.province)
    .filter((screen) => filter.city === "All" || screen.city === filter.city)
    .map((screen, index) => {
      const capacity = capacityForScreen(screen);
      let bookedSlots = 0;
      let impressions = 0;
      let liveSeconds = 0;
      let revenue = 0;
      const campaigns = new Set();
      state.orders.filter((order) => order.status === "paid").forEach((order) => {
        const advert = state.adverts.find((item) => item.id === order.advertId);
        order.items.filter((item) => item.screenId === screen.id).forEach((item) => {
          campaigns.add(order.advertId);
          bookedSlots += item.slots.length;
          const rateRevenue = item.slots.reduce((sum, slot) => sum + slotPrice(screen, slot), 0);
          revenue += rateRevenue || order.total;
          item.slots.forEach((slot) => {
            if (slot > nowSlot) return;
            impressions += 1;
            liveSeconds += advert?.billableSeconds || advert?.duration || 15;
          });
        });
      });
      const ctr = impressions ? (0.28 + ((index % 5) * 0.03)) : 0;
      const completion = bookedSlots ? Math.min(99, 72 + Math.round(capacity.percent / 4) + (index % 9)) : 0;
      const viewability = screen.status === "online" ? Math.min(98, 84 + (index % 10)) : screen.status === "warning" ? 68 : 0;
      return { screen, capacity, bookedSlots, impressions, liveSeconds, revenue, campaigns: campaigns.size, ctr, completion, viewability };
    })
    .sort((a, b) => b.impressions - a.impressions || b.bookedSlots - a.bookedSlots);
}

function advertHistoryRows(filter = {}) {
  const nowSlot = currentSlotKey();
  const rows = [];
  state.orders.filter((order) => order.status === "paid").forEach((order) => {
    const advert = state.adverts.find((item) => item.id === order.advertId);
    const customer = state.users.find((item) => item.id === order.customerId);
    if (!advert) return;
    order.items.forEach((item) => {
      const screen = state.screens.find((screenItem) => screenItem.id === item.screenId);
      if (!screen) return;
      if (filter.screenId && screen.id !== filter.screenId) return;
      if (filter.province && filter.province !== "All" && screen.province !== filter.province) return;
      if (filter.city && filter.city !== "All" && screen.city !== filter.city) return;
      const playedSlots = item.slots.filter((slot) => slot <= nowSlot);
      const futureSlots = item.slots.length - playedSlots.length;
      const billableSeconds = advert.billableSeconds || advert.duration || 15;
      const bookedUnits = item.slots.reduce((sum) => sum + Math.ceil(billableSeconds / 15), 0);
      const playedUnits = playedSlots.reduce((sum) => sum + Math.ceil(billableSeconds / 15), 0);
      const revenue = item.slots.reduce((sum, slot) => sum + slotPrice(screen, slot), 0);
      rows.push({
        order,
        advert,
        customer,
        screen,
        bookedSlots: item.slots.length,
        playedSlots: playedSlots.length,
        futureSlots,
        bookedUnits,
        playedUnits,
        totalBookedSeconds: item.slots.length * billableSeconds,
        totalLiveSeconds: playedSlots.length * billableSeconds,
        revenue,
        firstSlot: [...item.slots].sort()[0] || "",
        lastSlot: [...item.slots].sort().at(-1) || "",
        lastPlayedSlot: playedSlots.sort().at(-1) || ""
      });
    });
  });
  return rows.sort((a, b) => (b.lastSlot || "").localeCompare(a.lastSlot || "") || b.playedSlots - a.playedSlots);
}

function historyTotals(rows) {
  return {
    adverts: new Set(rows.map((row) => row.advert.id)).size,
    screens: new Set(rows.map((row) => row.screen.id)).size,
    impressions: rows.reduce((sum, row) => sum + row.playedSlots, 0),
    bookedSlots: rows.reduce((sum, row) => sum + row.bookedSlots, 0),
    futureSlots: rows.reduce((sum, row) => sum + row.futureSlots, 0),
    liveSeconds: rows.reduce((sum, row) => sum + row.totalLiveSeconds, 0),
    bookedSeconds: rows.reduce((sum, row) => sum + row.totalBookedSeconds, 0),
    playedUnits: rows.reduce((sum, row) => sum + row.playedUnits, 0),
    bookedUnits: rows.reduce((sum, row) => sum + row.bookedUnits, 0),
    revenue: rows.reduce((sum, row) => sum + row.revenue, 0)
  };
}

function networkStatsTotals(rows) {
  const screens = rows.length;
  const impressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const bookedSlots = rows.reduce((sum, row) => sum + row.bookedSlots, 0);
  const liveSeconds = rows.reduce((sum, row) => sum + row.liveSeconds, 0);
  const revenue = rows.reduce((sum, row) => sum + row.revenue, 0);
  const campaigns = rows.reduce((sum, row) => sum + row.campaigns, 0);
  const ctr = rows.length ? rows.reduce((sum, row) => sum + row.ctr, 0) / rows.length : 0;
  const completion = rows.length ? rows.reduce((sum, row) => sum + row.completion, 0) / rows.length : 0;
  const viewability = rows.length ? rows.reduce((sum, row) => sum + row.viewability, 0) / rows.length : 0;
  const activeLocations = new Set(rows.map((row) => row.screen.id)).size;
  return { screens, impressions, bookedSlots, liveSeconds, revenue, campaigns, ctr, completion, viewability, activeLocations };
}

function networkFilterOptions(values, selected) {
  return ["All", ...values].map((value) => `<option value="${value}" ${selected === value ? "selected" : ""}>${value}</option>`).join("");
}

function cityOptionsForProvince(province) {
  if (!province || province === "All") return [];
  const configured = state.screens.filter((screen) => screen.province === province).map((screen) => screen.city);
  const known = DISTRICTS_BY_PROVINCE[province] || [];
  return [...new Set([...known, ...configured])].sort();
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  if (minutes < 1) return `${seconds}s`;
  return `${minutes}m ${remainder}s`;
}

async function updateHouseAdvert(form) {
  const message = form.message.value.trim();
  state.houseAdvert = { ...(state.houseAdvert || seedState.houseAdvert), message };
  state.houseAdverts = (state.houseAdverts || []).map((advert) => ({ ...advert, message }));
  selectedHouseMedia = null;
  saveState();
  render();
  toast("Default advert pool settings updated.");
}

function updateTierPricing(form) {
  const screen = state.screens.find((item) => item.id === form.screenId.value);
  if (!screen) return;
  screen.tierPricing = Object.fromEntries(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => [day, Number(form[day].value || screen.rate)]));
  screen.rate = Number(form.Mon.value || screen.rate);
  saveState();
  toast(`${screen.name} tier pricing updated.`);
}

function addScreen(form) {
  const width = Number(form.width.value);
  const height = Number(form.height.value);
  if (!width || !height) return toast("Choose a valid screen size.");
  const tabletId = form.tabletId.value.trim();
  if (state.screens.some((screen) => screen.tabletId.toLowerCase() === tabletId.toLowerCase())) {
    return toast("Tablet ID already exists. Use a unique tablet ID for each screen.");
  }
  const province = normalizeProvinceName(form.province.value);
  const city = normalizeDistrictName(province, form.city.value);
  const latitudeInput = Number(form.latitude.value);
  const longitudeInput = Number(form.longitude.value);
  const fallbackCoordinates = PROVINCE_CENTER_COORDINATES[province] || THAILAND_GEO_BOUNDS.center;
  const latitude = Number.isFinite(latitudeInput) ? clampLatitude(latitudeInput) : fallbackCoordinates.lat;
  const longitude = Number.isFinite(longitudeInput) ? clampLongitude(longitudeInput) : fallbackCoordinates.lng;
  const mapPosition = latLngToMapPosition(latitude, longitude);
  const pinPosition = nextAvailablePinPosition(mapPosition.x, mapPosition.y);
  const screen = {
    id: uid("s"),
    name: form.name.value.trim(),
    province,
    city,
    venue: form.venue.value.trim(),
    status: "online",
    rate: Number(form.rate.value),
    x: pinPosition.x,
    y: pinPosition.y,
    latitude,
    longitude,
    tabletId,
    brightness: 80,
    width,
    height,
    defaultAdverts: [],
    lastSeen: "new",
    tags: form.tags.value.split(",").map((tag) => tag.trim()).filter(Boolean),
    photos: form.photos.value.split("\n").map((url) => url.trim()).filter(Boolean).slice(0, 6)
  };
  state.screens.push(screen);
  state.route = "screens";
  state.selectedScreens = [screen.id];
  state.activeBookingScreenId = null;
  filters.province = screen.province;
  filters.text = "";
  modal = null;
  saveState();
  render();
  toast("Screen added and ready for tablet pairing.");
}

function updateRole(userId, role) {
  const user = state.users.find((u) => u.id === userId);
  user.role = role;
  saveState();
  render();
}

function setAdvertStatus(advertId, status) {
  const advert = state.adverts.find((a) => a.id === advertId);
  advert.status = status;
  advert.moderationReason = status === "approved" ? "Manually approved by admin." : "Rejected by admin after manual content review.";
  saveState();
  render();
}

function pairTablet(screenId) {
  const screen = state.screens.find((s) => s.id === screenId);
  screen.status = "online";
  screen.lastSeen = "now";
  saveState();
  toast(`${screen.tabletId} paired. Open Player view to simulate playback.`);
}

function updateScreenSizePreset(select) {
  const form = select.closest("form");
  const preset = SCREEN_SIZE_PRESETS.find((item) => item.id === select.value);
  if (!form || !preset) return;
  form.width.value = preset.width;
  form.height.value = preset.height;
}

function updateNetworkStatsFilters(form) {
  networkFilters.province = form.province.value;
  networkFilters.city = form.city.value;
  if (networkFilters.province === "All") networkFilters.city = "All";
  render();
}

function navItems() {
  const user = currentUser();
  if (!user) return [];
  const customer = [
    ["customerDashboard", t("dashboard")],
    ["profile", t("profilePayment")],
    ["book", t("bookAdverts")],
    ["basket", `${t("basket")} (${state.cart.length})`],
    ["stats", t("advertStats")],
    ["orders", t("myOrders")]
  ];
  const staff = [
    ["dashboard", t("controlRoom")],
    ["networkStats", "Network stats"],
    ["capacity", t("capacity")],
    ["screens", t("screens")],
    ["adverts", t("adverts")],
    ["stats", t("liveStats")],
    ["history", "History"],
    ["orders", t("orders")],
    ["team", t("teamRoles")]
  ];
  return user.role === "customer" ? customer : staff;
}

function render() {
  const app = document.querySelector("#app");
  const user = currentUser();
  if (state.route === "player") {
    app.innerHTML = renderPlayer();
    bindCommon();
    startPlayerCountdown(currentPlayerDuration);
    return;
  }
  if (!user) {
    app.innerHTML = renderAuth();
    bindAuth();
    return;
  }
  if (user.role === "customer" && !customerCanBook(user) && !["profile", "customerDashboard"].includes(state.route)) {
    state.route = "profile";
  }
  app.innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand"><img class="brand-logo" src="assets/ad4u-logo.png" alt="AD4U" /><div>AD4U<br />Ads</div></div>
        <div class="role-pill">${roleName(user.role)} - ${user.name}</div>
        <nav class="nav">
          ${navItems().map(([route, label]) => `<button class="${state.route === route ? "active" : ""}" data-route="${route}">${label}</button>`).join("")}
        </nav>
        <div class="sidebar-foot">
          ${user.role === "super_admin" ? `<button class="btn primary sidebar-update" data-update-now>UPDATE NOW</button>` : ""}
          <button class="btn ghost" data-route="book">Customer booking view</button>
          <button class="btn ghost" data-logout>Log out</button>
        </div>
      </aside>
      <main class="main">${renderRoute()}</main>
    </div>
    ${modal ? renderModal() : ""}
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
  `;
  bindCommon();
  hydrateCalendars();
}

function renderAuth() {
  return `
    <section class="auth-page">
      <div class="auth-visual">
        <div class="brand"><img class="brand-logo" src="assets/ad4u-logo.png" alt="AD4U" /><div>AD4U Ads</div></div>
        <div>
          <h1>Book tablet screen adverts across Thailand.</h1>
          <p>Customers upload one advert, select display locations on a map, reserve 15-second slots, and pay from a single basket.</p>
        </div>
      </div>
      <div class="auth-pane">
        <div class="auth-box">
          ${renderLanguageToggle()}
          <div class="tabs">
            <button class="${state.authMode === "login" ? "active" : ""}" data-auth-mode="login">Login</button>
            <button class="${state.authMode === "register" ? "active" : ""}" data-auth-mode="register">Register</button>
          </div>
          ${state.authMode === "login" ? `
            <form class="form" id="loginForm">
              <div class="field"><label>Email</label><input name="email" value="owner@thaiscreen.test" required /></div>
              <div class="field"><label>Password</label><input name="password" type="password" value="admin123" required /></div>
              <button class="btn primary" type="submit">Login</button>
              <p class="hint">Demo accounts: customer@thaiscreen.test / customer123, operator@thaiscreen.test / operator123.</p>
            </form>
          ` : state.authMode === "verifyEmail" ? `
            <form class="form" id="emailOtpForm">
              <h2>Email verification</h2>
              <p class="hint">We sent a one-time code to ${partialEmail(state.pendingRegistration?.email || "")}. In the live system this email will come from AD4U with your verification code.</p>
              <div class="field"><label>Email OTP</label><input name="otp" inputmode="numeric" required placeholder="6 digit code" /></div>
              <button class="btn primary" type="submit">Verify email and create account</button>
              <p class="hint">Prototype code: <b>${state.pendingRegistration?.otp || ""}</b></p>
            </form>
          ` : `
            <form class="form" id="registerForm">
              <div class="field"><label>1. Company name</label><input name="companyName" required /></div>
              <div class="field"><label>2. Name</label><input name="firstName" required /></div>
              <div class="field"><label>3. Surname</label><input name="surname" required /></div>
              <div class="field"><label>4. Email</label><input name="email" type="email" required /></div>
              <p class="hint">Next step: email OTP. After success we create the account and send username, temporary password, and login URL by email.</p>
              <button class="btn primary" type="submit">Send email OTP</button>
            </form>
          `}
        </div>
      </div>
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </section>
  `;
}

function renderRoute() {
  const routes = {
    dashboard: renderDashboard,
    networkStats: renderNetworkStats,
    customerDashboard: renderCustomerDashboard,
    profile: renderProfile,
    capacity: renderCapacity,
    book: renderBooking,
    basket: renderBasket,
    stats: renderAdvertStats,
    history: renderHistory,
    orders: renderOrders,
    screens: renderScreensAdmin,
    adverts: renderAdvertsAdmin,
    team: renderTeam
  };
  return (routes[state.route] || renderBooking)();
}

function renderHeader(title, copy, buttons = "") {
  return `<div class="topbar"><div class="title"><h1>${title}</h1><p>${copy}</p></div><div class="actions">${renderLanguageToggle()}${buttons}</div></div>`;
}

function renderDashboard() {
  const paid = state.orders.reduce((sum, order) => sum + order.total, 0);
  const live = state.screens.filter((screen) => screen.status === "online").length;
  const house = state.houseAdvert || seedState.houseAdvert;
  const housePool = state.houseAdverts?.length ? state.houseAdverts : [house];
  return `
    ${renderHeader("Control room", "Manage bookings, screen tablets, approvals, and playback delivery.", `<button class="btn primary" data-modal="screen">Add screen</button>`)}
    <div class="grid three">
      <div class="stat"><b>${state.screens.length}</b><span>registered tablet screens</span></div>
      <div class="stat"><b>${live}</b><span>online right now</span></div>
      <div class="stat"><b>${money(paid)}</b><span>paid demo revenue</span></div>
    </div>
    <div class="grid two booking-map-grid" style="margin-top:16px">
      <section class="panel">
        <h2>Playback delivery model</h2>
        <div class="grid">
          <div class="screen-card"><b>1. Pair each tablet</b><span class="meta">Install the player web app, enter the tablet ID, and attach it to a screen location.</span></div>
          <div class="screen-card"><b>2. Customer books slots</b><span class="meta">The platform stores advert media, billable duration, selected screens, and 15-second calendar slots.</span></div>
          <div class="screen-card"><b>3. Tablet pulls schedule</b><span class="meta">Each tablet checks the server for approved adverts for its own screen ID, downloads/cache media, plays in order, then sends proof-of-play logs.</span></div>
        </div>
      </section>
      <section class="panel">
        <h2>Attention needed</h2>
        ${state.screens.filter((s) => s.status !== "online").map(renderScreenCard).join("") || `<p class="hint">All screens are healthy.</p>`}
      </section>
    </div>
    <section class="panel" style="margin-top:16px">
      <h2>Default adverts for available slots</h2>
      <p class="hint">When no customer has bought a 15-second slot, tablets randomly play one advert from this pool.</p>
      <form class="form" id="houseAdvertForm">
        <div class="upload-zone compact-upload">
          <input class="file-input" id="houseMediaFile" type="file" accept="video/*,image/*" multiple data-house-media-file />
          <label class="btn primary" for="houseMediaFile">Add default videos</label>
          <b>Add 15-second default adverts</b>
          <span class="hint">You can add many videos. When a slot is available, the player picks one randomly.</span>
        </div>
        <div class="default-pool">
          ${housePool.map((advert) => `
            <article class="screen-card">
              <div class="screen-head"><div><b>${advert.title}</b><div class="meta">${advert.fileName} - ${advert.duration || 15}s default advert</div></div><span class="badge ok">pool</span></div>
              ${renderAdvertMiniPreview(advert)}
              <div class="actions"><button class="btn small danger" type="button" data-remove-house-ad="${advert.id || ""}">Remove</button></div>
            </article>
          `).join("")}
        </div>
        <div class="field"><label>Screen message</label><input name="message" value="${house.message}" required /></div>
        <button class="btn primary" type="submit">Save pool settings</button>
      </form>
    </section>
  `;
}

function renderCapacity() {
  const startDate = todayDate();
  const rows = state.screens.map((screen) => ({ screen, capacity: capacityForScreen(screen, startDate) })).sort((a, b) => b.capacity.percent - a.capacity.percent);
  const networkBooked = rows.reduce((sum, row) => sum + row.capacity.booked, 0);
  const networkTotal = rows.reduce((sum, row) => sum + row.capacity.total, 0);
  const networkPercent = networkTotal ? (networkBooked / networkTotal) * 100 : 0;
  const averagePercent = rows.length ? rows.reduce((sum, row) => sum + row.capacity.percent, 0) / rows.length : 0;
  const highScreens = rows.filter((row) => row.capacity.percent >= 80).length;
  const lowScreens = rows.filter((row) => row.capacity.percent < 45).length;
  const coverage = provinceCoverage();
  return `
    ${renderHeader("Capacity", "Network utilisation, booked slot percentage, and expansion coverage.", "")}
    <div class="grid four">
      <div class="stat"><b>${networkPercent.toFixed(1)}%</b><span>network booked this week</span></div>
      <div class="stat"><b>${averagePercent.toFixed(1)}%</b><span>average screen capacity</span></div>
      <div class="stat"><b>${lowScreens}</b><span>screens need more sales</span></div>
      <div class="stat"><b>${highScreens}</b><span>screens near full</span></div>
    </div>
    <div class="grid two capacity-layout" style="margin-top:16px">
      <section class="panel">
        <div class="screen-head">
          <div><h2>Display utilisation</h2><p class="hint">${weekRangeLabel(startDate)} - ${networkBooked.toLocaleString()} booked slots from ${networkTotal.toLocaleString()} available</p></div>
          <button class="btn primary" data-show-coverage>Thailand coverage map</button>
        </div>
        <div class="capacity-list">
          ${rows.map(({ screen, capacity }) => {
            const status = capacityStatus(capacity.percent);
            return `
              <article class="capacity-row">
                <div>
                  <div class="screen-head"><b>${screen.name}</b><span class="badge ${status.className}">${status.label}</span></div>
                  <span class="meta">${screen.tabletId} - ${screen.city}, ${screen.province} - ${capacity.booked.toLocaleString()} / ${capacity.total.toLocaleString()} slots</span>
                </div>
                <div class="capacity-meter">
                  <div class="capacity-track"><div class="${status.className}" style="width:${capacity.percent}%"></div></div>
                  <b>${capacity.percent.toFixed(1)}%</b>
                  <span class="hint">${status.guidance}</span>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
      <section class="panel">
        <h2>Thailand coverage</h2>
        <p class="hint">Dots show where screens are active. Missing areas are priority provinces for expansion.</p>
        ${renderCoverageMap()}
        <div class="coverage-summary">
          <div><b>Active provinces</b><p class="hint">${coverage.active.join(", ") || "No screens yet"}</p></div>
          <div><b>Missing priority areas</b><p class="hint">${coverage.missing.join(", ") || "Priority list covered"}</p></div>
        </div>
      </section>
    </div>
  `;
}

function renderNetworkStats() {
  const provinces = [...new Set([...THAILAND_PROVINCES, ...state.screens.map((screen) => screen.province)])].sort();
  const cities = cityOptionsForProvince(networkFilters.province);
  if (networkFilters.city !== "All" && !cities.includes(networkFilters.city)) networkFilters.city = "All";
  const rows = screenPerformanceRows();
  const totals = networkStatsTotals(rows);
  const pipeline = {
    planning: Math.max(4, state.adverts.filter((advert) => advert.status === "pending_review").length + rows.length),
    scheduled: state.cart.length + rows.filter((row) => row.bookedSlots > 0 && row.impressions === 0).length,
    live: rows.filter((row) => row.impressions > 0).length,
    completed: state.orders.filter((order) => order.status === "paid").length
  };
  return `
    ${renderHeader("Network stats", "Performance overview for every screen, with total network filters by province and city.", "")}
    <section class="panel network-filter-panel">
      <form class="network-filters" id="networkStatsFilterForm">
        <div class="field"><label>Province</label><select name="province" data-network-province>${networkFilterOptions(provinces, networkFilters.province)}</select></div>
        <div class="field"><label>City / district</label><select name="city" data-network-city ${networkFilters.province === "All" ? "disabled" : ""}>${networkFilterOptions(cities, networkFilters.city)}</select></div>
      </form>
    </section>
    <section class="network-performance">
      <div class="network-title">Network performance overview ${networkFilters.province !== "All" ? `- ${networkFilters.province}` : ""}${networkFilters.city !== "All" ? ` / ${networkFilters.city}` : ""}</div>
      <div class="network-kpis">
        <div class="network-kpi"><span>◉</span><b>${totals.impressions.toLocaleString()}</b><small>Total impressions</small><em>+18% vs last month</em></div>
        <div class="network-kpi"><span>◎</span><b>${totals.bookedSlots.toLocaleString()}</b><small>Booked slots</small><em>+16% vs last month</em></div>
        <div class="network-kpi"><span>✦</span><b>${totals.ctr.toFixed(2)}%</b><small>Average CTR</small><em>+12% vs last month</em></div>
        <div class="network-kpi"><span>◷</span><b>${Math.round(totals.completion)}%</b><small>Completion rate</small><em>+9% vs last month</em></div>
        <div class="network-kpi"><span>▥</span><b>${Math.round(totals.viewability)}%</b><small>Viewability rate</small><em>+10% vs last month</em></div>
      </div>
      <div class="network-main-grid">
        <div class="network-card">
          <h3>Impressions trend</h3>
          <div class="trend-chart">
            ${[0.48, 0.58, 0.68, 0.74, 0.82].map((point, index) => `<i style="left:${12 + index * 20}%;bottom:${18 + point * 58}%"></i>`).join("")}
            <svg viewBox="0 0 100 60" preserveAspectRatio="none"><polyline points="12,34 32,27 52,21 72,17 92,11" /></svg>
            <b>${totals.impressions.toLocaleString()}<small>This month</small></b>
          </div>
        </div>
        <div class="network-card">
          <h3>Impressions by channel</h3>
          <div class="donut-row">
            <div class="donut"><b>${totals.impressions.toLocaleString()}<small>Total</small></b></div>
            <div class="legend"><span><i></i> Digital screens 68%</span><span><i></i> Transit media 18%</span><span><i></i> Retail & mall 9%</span><span><i></i> Other 5%</span></div>
          </div>
        </div>
        <div class="network-card">
          <h3>Network coverage</h3>
          ${renderCoverageMap()}
          <div class="coverage-count"><b>${totals.activeLocations}+</b><span>Active locations</span></div>
        </div>
      </div>
      <div class="pipeline">
        <div><span>Planning</span><b>${pipeline.planning}</b><small>Campaigns</small></div>
        <div><span>Scheduled</span><b>${pipeline.scheduled}</b><small>Campaigns</small></div>
        <div><span>Live</span><b>${pipeline.live}</b><small>Screens</small></div>
        <div><span>Completed</span><b>${pipeline.completed}</b><small>Orders</small></div>
      </div>
    </section>
    <section class="panel" style="margin-top:16px">
      <div class="screen-head"><div><h2>Screen performance</h2><p class="hint">Per-screen impressions, live seconds, revenue, booked capacity, and health.</p></div><b>${rows.length} screens</b></div>
      <div class="screen-performance-list">
        ${rows.map((row) => {
          const status = capacityStatus(row.capacity.percent);
          return `<article class="screen-performance-card">
            <div><b>${row.screen.name}</b><span class="meta">${row.screen.tabletId} - ${row.screen.city}, ${row.screen.province} - ${row.screen.width}x${row.screen.height}</span></div>
            <div><b>${row.impressions.toLocaleString()}</b><span>impressions</span></div>
            <div><b>${formatDuration(row.liveSeconds)}</b><span>seconds live</span></div>
            <div><b>${row.ctr.toFixed(2)}%</b><span>CTR</span></div>
            <div><b>${Math.round(row.viewability)}%</b><span>viewability</span></div>
            <div><b>${money(row.revenue)}</b><span>revenue</span></div>
            <div class="capacity-meter"><div class="capacity-track"><div class="${status.className}" style="width:${row.capacity.percent}%"></div></div><span>${row.capacity.percent.toFixed(1)}% booked</span></div>
          </article>`;
        }).join("") || `<p class="hint">No screens match this filter.</p>`}
      </div>
    </section>
  `;
}

function renderAdvertStats() {
  const rows = advertLiveStats();
  const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const totalSeconds = rows.reduce((sum, row) => sum + row.liveSeconds, 0);
  const totalBooked = rows.reduce((sum, row) => sum + row.bookedSlots, 0);
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0);
  const title = isStaff() ? "Live advert stats" : "My advert stats";
  const copy = isStaff()
    ? "All paid/live adverts, delivered impressions, and seconds played across the network."
    : "Your live advert delivery, impressions, and seconds played.";
  return `
    ${renderHeader(title, copy, "")}
    <div class="grid four">
      <div class="stat"><b>${totalImpressions.toLocaleString()}</b><span>delivered impressions</span></div>
      <div class="stat"><b>${formatDuration(totalSeconds)}</b><span>total seconds live</span></div>
      <div class="stat"><b>${totalBooked.toLocaleString()}</b><span>booked 15-sec slots</span></div>
      <div class="stat"><b>${money(totalRevenue)}</b><span>booked value</span></div>
    </div>
    <section class="panel" style="margin-top:16px">
      <div class="screen-head">
        <div><h2>Advert delivery log</h2><p class="hint">Impressions count when a booked slot time has passed. Future booked slots stay scheduled.</p></div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Advert</th>
            ${isStaff() ? "<th>Customer</th>" : ""}
            <th>Status</th>
            <th>Impressions</th>
            <th>Seconds live</th>
            <th>Booked slots</th>
            <th>Screens</th>
            <th>Last live</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td><b>${row.advert.title}</b><div class="meta">${row.advert.fileName} - ${row.advert.billableSeconds || row.advert.duration || 15}s billing</div></td>
              ${isStaff() ? `<td>${row.customer?.name || "Unknown"}</td>` : ""}
              <td><span class="badge ${row.impressions ? "ok" : "warn"}">${row.impressions ? "Live" : "Scheduled"}</span></td>
              <td><b>${row.impressions.toLocaleString()}</b></td>
              <td>${formatDuration(row.liveSeconds)}</td>
              <td>${row.bookedSlots.toLocaleString()}</td>
              <td>${[...row.screens].join(", ") || "No screens"}</td>
              <td>${row.lastLiveSlot || "Not played yet"}</td>
            </tr>
          `).join("") || `<tr><td colspan="${isStaff() ? 8 : 7}">No live advert stats yet.</td></tr>`}
        </tbody>
      </table>
    </section>
  `;
}

function renderHistory() {
  const rows = advertHistoryRows();
  const totals = historyTotals(rows);
  return `
    ${renderHeader("Advert history", "All bought adverts, proof-of-play totals, screen delivery, and reporting metrics.", "")}
    <div class="grid four">
      <div class="stat"><b>${totals.impressions.toLocaleString()}</b><span>total impressions shown</span></div>
      <div class="stat"><b>${formatDuration(totals.liveSeconds)}</b><span>total time live</span></div>
      <div class="stat"><b>${totals.playedUnits.toLocaleString()}</b><span>15-sec units shown</span></div>
      <div class="stat"><b>${money(totals.revenue)}</b><span>booked value</span></div>
    </div>
    <div class="grid four" style="margin-top:12px">
      <div class="stat"><b>${totals.adverts}</b><span>unique adverts bought</span></div>
      <div class="stat"><b>${totals.screens}</b><span>screens used</span></div>
      <div class="stat"><b>${totals.bookedSlots.toLocaleString()}</b><span>booked slots</span></div>
      <div class="stat"><b>${totals.futureSlots.toLocaleString()}</b><span>scheduled future plays</span></div>
    </div>
    <section class="panel" style="margin-top:16px">
      <div class="screen-head"><div><h2>Advert playback history</h2><p class="hint">Impressions are counted when the booked slot time has passed. 15-sec units account for adverts billed longer than 15 seconds.</p></div></div>
      <div class="history-list">
        ${rows.map(renderHistoryRow).join("") || `<p class="hint">No bought advert history yet.</p>`}
      </div>
    </section>
  `;
}

function renderHistoryRow(row) {
  return `<article class="history-row">
    <div class="history-media">${renderAdvertMiniPreview(row.advert) || `<div class="empty-thumb">${row.advert.type || "Ad"}</div>`}</div>
    <div>
      <b>${row.advert.title}</b>
      <span class="meta">${row.advert.fileName} - uploaded ${row.advert.uploadedAt || "unknown"} - ${row.advert.width && row.advert.height ? `${row.advert.width}x${row.advert.height}` : "size unknown"}</span>
      <span class="meta">${row.customer?.name || "Customer"} - ${row.screen.name} (${row.screen.city}, ${row.screen.province})</span>
      <span class="meta">First slot ${row.firstSlot || "n/a"} - Last slot ${row.lastSlot || "n/a"}${row.lastPlayedSlot ? ` - Last shown ${row.lastPlayedSlot}` : ""}</span>
    </div>
    <div><b>${row.playedSlots.toLocaleString()}</b><span>impressions</span></div>
    <div><b>${formatDuration(row.totalLiveSeconds)}</b><span>time live</span></div>
    <div><b>${row.playedUnits.toLocaleString()} / ${row.bookedUnits.toLocaleString()}</b><span>15-sec units</span></div>
    <div><b>${row.bookedSlots.toLocaleString()}</b><span>booked plays</span></div>
    <div><b>${row.futureSlots.toLocaleString()}</b><span>future</span></div>
    <div><b>${money(row.revenue)}</b><span>value</span></div>
    <span class="badge ${row.playedSlots ? "ok" : "warn"}">${row.playedSlots ? "showing" : "scheduled"}</span>
  </article>`;
}

function renderCustomerDashboard() {
  const user = currentUser();
  const customerOrders = state.orders.filter((order) => order.customerId === user.id);
  const spend = customerOrders.reduce((sum, order) => sum + order.total, 0);
  const activeAdverts = state.adverts.filter((advert) => advert.customerId === user.id).length;
  return `
    ${renderHeader("Dashboard", "Your account, adverts, bookings, and setup status.", `<button class="btn primary" data-route="book">Book adverts</button>`)}
    <div class="grid four">
      <div class="stat"><b>${profileComplete(user) ? "Done" : "Needed"}</b><span>company profile</span></div>
      <div class="stat"><b>${paymentComplete(user) ? "Done" : "Needed"}</b><span>payment setup</span></div>
      <div class="stat"><b>${activeAdverts}</b><span>uploaded adverts</span></div>
      <div class="stat"><b>${money(spend)}</b><span>scheduled spend</span></div>
    </div>
    ${!customerCanBook(user) ? `<section class="panel setup-warning"><h2>Finish setup before booking</h2><p class="hint">For security and billing, customers must verify mobile, complete profile details, and add invoice/payment details before reserving advert slots.</p><button class="btn primary" data-route="profile">Complete profile</button></section>` : ""}
    <section class="panel" style="margin-top:16px">
      <h2>Recent orders</h2>
      ${customerOrders.slice(-4).map((order) => `<article class="cart-card"><b>${order.id}</b><span class="meta">${order.createdAt} - ${order.items.reduce((sum, item) => sum + item.slots.length, 0)} slots</span><b>${money(order.total)}</b></article>`).join("") || `<p class="hint">No orders yet.</p>`}
    </section>
  `;
}

function renderProfile() {
  const user = currentUser();
  const profile = user.profile || {};
  const payment = user.payment || {};
  const invoice = user.invoice || {};
  const phonePending = state.pendingMobileOtp?.userId === user.id;
  const mobileParts = splitMobile(user.mobile || "");
  const mobileVerified = user.kycStatus !== "needs_mobile" && !phonePending;
  const locked = mobileVerified ? "" : "locked-section";
  const disabled = mobileVerified ? "" : "disabled";
  return `
    ${renderHeader(t("profileTitle"), t("profileCopy"), customerCanBook(user) ? `<button class="btn primary" data-route="book">${t("continueBooking")}</button>` : "")}
    <div class="grid three">
      <div class="stat"><b>${user.kycStatus === "complete" || user.kycStatus === "profile_required" ? t("verified") : t("needed")}</b><span>${t("mobileKyc")}</span></div>
      <div class="stat ${locked}"><b>${profileComplete(user) ? t("complete") : t("missing")}</b><span>${t("companyProfile")}</span></div>
      <div class="stat ${locked}"><b>${paymentComplete(user) ? t("complete") : t("missing")}</b><span>${t("paymentInvoice")}</span></div>
    </div>
    <div class="grid two" style="margin-top:16px">
      <section class="panel">
        <h2>${t("firstLogin")}</h2>
        ${user.kycStatus === "needs_mobile" || phonePending ? `
          <form class="form" id="${phonePending ? "phoneOtpForm" : "phoneForm"}">
            ${phonePending ? `<div class="field"><label>${t("phoneOtpSent")} ${state.pendingMobileOtp.mobile}</label><input name="otp" inputmode="numeric" required /></div><p class="hint">Prototype code: <b>${state.pendingMobileOtp.otp}</b></p><button class="btn primary" type="submit">${t("verifyPhone")}</button>` : `<div class="phone-row"><div class="field"><label>${t("countryCode")}</label><select name="countryCode">${renderCountryCodeOptions(mobileParts.code)}</select></div><div class="field"><label>${t("mobileNumber")}</label><input name="mobile" inputmode="tel" placeholder="812345678" value="${mobileParts.local}" required /></div></div><button class="btn primary" type="submit">${t("sendPhoneOtp")}</button>`}
          </form>
        ` : `<span class="badge ok">${t("mobileVerified")}</span>`}
      </section>
      <section class="panel ${locked}">
        <h2>${t("accountEmail")}</h2>
        <p class="hint">${mobileVerified ? t("welcomeEmail") : t("lockedUntilMobile")}</p>
        <div class="cart-card"><b>${t("username")}</b><span>${user.username || user.email}</span></div>
        <div class="cart-card"><b>${t("loginUrl")}</b><span>${user.welcomeEmail?.loginUrl || PUBLIC_APP_URL}</span></div>
      </section>
    </div>
    <div class="grid two" style="margin-top:16px">
      <section class="panel ${locked}">
        <h2>${t("companyProfile")}</h2>
        <form class="form" id="profileForm">
          <div class="grid two">
            <div class="field"><label>${t("companyName")}</label><input name="companyName" value="${user.companyName || ""}" required ${disabled} /></div>
            <div class="field"><label>${t("businessType")}</label><input name="businessType" value="${profile.businessType || ""}" required ${disabled} /></div>
          </div>
          <div class="grid two">
            <div class="field"><label>${t("name")}</label><input name="firstName" value="${user.firstName || ""}" required ${disabled} /></div>
            <div class="field"><label>${t("surname")}</label><input name="surname" value="${user.surname || ""}" required ${disabled} /></div>
          </div>
          <div class="field"><label>${t("companyAddress")}</label><textarea name="companyAddress" required ${disabled}>${profile.companyAddress || ""}</textarea></div>
          <div class="grid two">
            <div class="field"><label>${t("province")}</label><input name="province" value="${profile.province || ""}" required ${disabled} /></div>
            <div class="field"><label>${t("postcode")}</label><input name="postcode" value="${profile.postcode || ""}" required ${disabled} /></div>
          </div>
          <div class="field"><label>${t("authorizedPerson")}</label><input name="authorizedPerson" value="${profile.authorizedPerson || ""}" required ${disabled} /></div>
          <button class="btn primary" type="submit" ${disabled}>${t("saveProfile")}</button>
        </form>
      </section>
      <section class="panel ${locked}">
        <h2>${t("paymentBillingInvoice")}</h2>
        <form class="form" id="paymentForm">
          <div class="field"><label>${t("paymentMethod")}</label><select name="method" ${disabled}><option value="">${t("select")}</option><option value="card" ${payment.method === "card" ? "selected" : ""}>Card payment test</option><option value="bank" ${payment.method === "bank" ? "selected" : ""}>Bank transfer test</option><option value="promptpay" ${payment.method === "promptpay" ? "selected" : ""}>PromptPay test</option></select></div>
          <div class="grid two">
            <div class="field"><label>${t("billingContact")}</label><input name="billingContact" value="${payment.billingContact || ""}" required ${disabled} /></div>
            <div class="field"><label>${t("billingPhone")}</label><input name="billingPhone" value="${payment.billingPhone || user.mobile || ""}" ${disabled} /></div>
          </div>
          <div class="grid two">
            <div class="field"><label>${t("taxId")}</label><input name="taxId" value="${invoice.taxId || ""}" required ${disabled} /></div>
            <div class="field"><label>${t("invoiceEmail")}</label><input name="invoiceEmail" type="email" value="${invoice.invoiceEmail || user.email}" required ${disabled} /></div>
          </div>
          <div class="field"><label>${t("invoiceType")}</label><select name="taxType" ${disabled}><option value="">${t("select")}</option><option value="vat_tax_invoice" ${invoice.taxType === "vat_tax_invoice" ? "selected" : ""}>VAT tax invoice / receipt</option><option value="receipt_only" ${invoice.taxType === "receipt_only" ? "selected" : ""}>Receipt only</option><option value="company_wht" ${invoice.taxType === "company_wht" ? "selected" : ""}>Company invoice with withholding tax field</option></select></div>
          <div class="field"><label>${t("invoiceAddress")}</label><textarea name="invoiceAddress" ${disabled}>${invoice.invoiceAddress || profile.companyAddress || ""}</textarea></div>
          <label class="check-row"><input type="checkbox" name="withholdingTax" ${invoice.withholdingTax ? "checked" : ""} ${disabled} /> Customer may require 3% withholding tax certificate for service payments</label>
          <p class="hint">Prototype only: VAT/withholding rules must be confirmed by your Thai accountant before production invoicing.</p>
          <button class="btn primary" type="submit" ${disabled}>${t("savePayment")}</button>
        </form>
      </section>
    </div>
  `;
}

function renderStickerMaker() {
  const previewMeta = stickerUpload ? `${stickerUpload.fileName} - ${stickerUpload.width}x${stickerUpload.height}` : "JPG or PNG works best";
  return `
    ${renderHeader("Sticker maker", "Upload one image, generate a full Thai sticker pack, then download each PNG.", stickerImage ? `<button class="btn primary" data-download-all-stickers>Download all</button>` : "")}
    <div class="sticker-workspace">
      <section class="panel sticker-upload-panel">
        <div class="upload-zone sticker-drop">
          <input class="file-input" id="stickerImageFile" type="file" accept="image/*" data-sticker-image-file />
          <label class="btn primary" for="stickerImageFile">Choose one image</label>
          <b>Create a sticker pack</b>
          <span class="hint">The app uses the same uploaded image across every expression, adds a white sticker border, Thai captions, and playful doodles.</span>
          ${stickerUpload ? `<img class="sticker-source-preview" src="${stickerUpload.objectUrl}" alt="${stickerUpload.fileName}" />` : `<div class="sticker-empty-preview">1 image</div>`}
          <span class="meta">${previewMeta}</span>
        </div>
      </section>
      <section class="panel sticker-results-panel">
        <div class="screen-head">
          <div>
            <h2>Generated stickers</h2>
            <span class="hint">${stickerTemplates.length} downloadable PNG stickers</span>
          </div>
        </div>
        <div class="sticker-grid">
          ${stickerTemplates.map((template) => `
            <article class="sticker-card">
              <div class="sticker-preview">
                ${stickerImage ? `<img src="${stickerDataUrl(template)}" alt="${template.text}" />` : `<span>${template.text}</span>`}
              </div>
              <div class="screen-head sticker-card-head">
                <b>${template.text}</b>
                <button class="btn small" type="button" data-download-sticker="${template.id}" ${stickerImage ? "" : "disabled"}>Download</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderBooking() {
  const adverts = state.adverts.filter((a) => a.customerId === currentUser().id);
  const selectedAdvert = currentBookingAdvert();
  const editingAdvert = state.adverts.find((a) => a.id === state.editingAdvertId);
  const visibleScreens = screensSelectedFirst(filteredScreens());
  const selectedScreen = state.screens.find((screen) => screen.id === state.selectedScreens[0]) || visibleScreens[0];
  return `
    ${renderHeader("Book advert slots", "Upload one advert, choose display locations, then reserve 15-second calendar slots.", "")}
    ${renderBookingDecisionBar(selectedAdvert)}
    <div class="grid two">
      <section class="panel">
        <h2>Advert</h2>
        <form class="form" id="uploadForm">
          <div class="upload-zone">
            <input class="file-input" id="mediaFile" type="file" accept="video/*,image/*" data-media-file />
            <label class="btn primary" for="mediaFile">Choose real video or image</label>
            <b>Upload image or video advert</b>
            <span class="hint">Upload media that matches the screen size you want to book. Accepted sizes now: ${acceptedSizeText()}. Video duration is rounded up to 15-second billing blocks.</span>
            <div class="media-preview" data-media-preview>${editingAdvert ? renderAdvertMediaPreview(editingAdvert) : ""}</div>
          </div>
          <div class="grid two">
            <div class="field"><label>Advert title</label><input name="title" required placeholder="Weekend food promotion" value="${editingAdvert?.title || uploadDraft.title}" /></div>
            <div class="field"><label>Media type</label><select name="type"><option value="video" ${editingAdvert?.type === "video" ? "selected" : ""}>Video</option><option value="image" ${editingAdvert?.type === "image" ? "selected" : ""}>Image</option></select></div>
          </div>
          <div class="grid two">
            <div class="field"><label>File name</label><input name="fileName" placeholder="promo.mp4" value="${editingAdvert?.fileName || uploadDraft.fileName}" /></div>
            <div class="field"><label>Duration seconds</label><input name="duration" type="number" min="1" value="${editingAdvert?.duration || uploadDraft.duration}" required /></div>
          </div>
          <div class="actions"><button class="btn ${editingAdvert ? "primary" : ""}" type="submit">${editingAdvert ? "Replace advert" : "Upload advert"}</button>${editingAdvert ? `<button class="btn" type="button" data-cancel-ad-edit>Cancel edit</button>` : ""}</div>
        </form>
        <div style="height:14px"></div>
        <h3>Your adverts</h3>
        <div class="grid">
          ${adverts.map((a) => `
            <label class="screen-card">
              <div class="screen-head">
              <span><input type="radio" name="advertChoice" value="${a.id}" ${selectedAdvert?.id === a.id ? "checked" : ""} data-select-advert="${a.id}"/> <b>${a.title}</b></span>
              <span class="badge ${a.status === "approved" ? "ok" : "warn"}">${a.status}</span>
              </div>
              ${renderAdvertMiniPreview(a)}
              <span class="meta">${a.fileName} - ${a.duration}s billed as ${a.billableSeconds}s</span>
              <span class="meta">${a.width && a.height ? `${a.width}x${a.height}` : "Media size not detected"} - ${a.moderationReason || "Waiting for review."}</span>
              <div class="actions"><button class="btn small" type="button" data-edit-advert="${a.id}">Edit / replace</button></div>
            </label>
          `).join("") || `<p class="hint">Upload your first advert to start booking.</p>`}
        </div>
      </section>
      <section class="panel">
        <h2>Selected booking</h2>
        ${renderBookingSummary(selectedAdvert)}
        <div class="actions booking-actions">
          <button class="btn primary" data-add-cart="${selectedAdvert?.id || ""}">Add to basket</button>
          <button class="btn live" data-go-live>LIVE</button>
        </div>
      </section>
    </div>
    <div class="grid two" style="margin-top:16px">
      <section class="panel">
        <h2>Map</h2>
        ${renderFilters()}
        ${renderMap(visibleScreens)}
      </section>
      <section class="panel">
        <h2>Display details</h2>
        ${selectedScreen ? renderScreenDetails(selectedScreen) : `<p class="hint">Select a screen from the map or list.</p>`}
      </section>
    </div>
    ${state.activeBookingScreenId ? `<section class="panel full-booking-calendar"><h2>Book ${state.screens.find((screen) => screen.id === state.activeBookingScreenId)?.name || "display"}</h2>${renderCalendar(state.activeBookingScreenId)}</section>` : ""}
  `;
}

function renderFilters() {
  const provinces = ["All", ...new Set([...THAILAND_PROVINCES, ...state.screens.map((screen) => screen.province)])];
  return `
    <div class="grid two" style="margin-bottom:12px">
      <div class="field"><label>Province</label><select id="provinceFilter">${provinces.map((p) => `<option ${filters.province === p ? "selected" : ""}>${p}</option>`).join("")}</select></div>
      <div class="field"><label>Search</label><div class="search-row"><input id="textFilter" value="${filters.text}" placeholder="screen, city, tag" /><button class="btn small" type="button" data-apply-filter>Search</button></div></div>
    </div>
  `;
}

function applyTextFilter(value) {
  filters.text = value.trim();
  clearBookingDraft();
  saveState();
  render();
}

function renderBookingDecisionBar(advert) {
  const draft = selectedSessionTotal(advert);
  const basket = cartTotal();
  const projected = draft + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  return `
    <section class="decision-bar">
      <div><span>Draft selected</span><b data-global-draft>${money(draft)}</b></div>
      <div><span>Basket</span><b data-global-basket>${money(basket)}</b></div>
      <div><span>Projected total</span><b data-global-projected>${money(projected)}</b></div>
      <div><span>Minimum spend</span><b data-global-minimum>${remaining ? `${money(remaining)} left` : "Reached"}</b></div>
    </section>
  `;
}

function updateDecisionBarDom() {
  const advert = currentBookingAdvert();
  const draft = selectedSessionTotal(advert);
  const basket = cartTotal();
  const projected = draft + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  document.querySelector("[data-global-draft]")?.replaceChildren(document.createTextNode(money(draft)));
  document.querySelector("[data-global-basket]")?.replaceChildren(document.createTextNode(money(basket)));
  document.querySelector("[data-global-projected]")?.replaceChildren(document.createTextNode(money(projected)));
  document.querySelector("[data-global-minimum]")?.replaceChildren(document.createTextNode(remaining ? `${money(remaining)} left` : "Reached"));
}

function filteredScreens() {
  const text = filters.text.toLowerCase();
  return state.screens.filter((screen) => {
    const provinceOk = filters.province === "All" || screen.province === filters.province;
    const blob = `${screen.name} ${screen.city} ${screen.venue} ${screen.tags.join(" ")}`.toLowerCase();
    return provinceOk && blob.includes(text);
  }).sort(screenDisplaySort);
}

function screenDisplaySort(a, b) {
  const aReal = a.tabletId.includes("REAL") || a.tags.includes("Test screen");
  const bReal = b.tabletId.includes("REAL") || b.tags.includes("Test screen");
  if (aReal && !bReal) return -1;
  if (!aReal && bReal) return 1;
  return a.name.localeCompare(b.name);
}

function realAndroidScreen() {
  return state.screens.find((screen) => screen.tabletId === "TAB-BKK-REAL-001");
}

function showRealAndroidScreen() {
  filters.province = "Bangkok";
  filters.text = "TAB-BKK-REAL-001";
  clearBookingDraft();
  saveState();
  render();
}

function screensSelectedFirst(screens) {
  return [...screens].sort((a, b) => {
    const aSelected = state.selectedScreens.includes(a.id);
    const bSelected = state.selectedScreens.includes(b.id);
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    return state.screens.findIndex((screen) => screen.id === a.id) - state.screens.findIndex((screen) => screen.id === b.id);
  });
}

function renderMap(screens) {
  const hasApiKey = Boolean(getGoogleMapsApiKey());
  return `
    <div class="map-wrap google-map-shell">
      <div class="map-toolbar">
        <div class="map-label">Google Maps live screen view</div>
        <div class="map-tools">
          ${currentUser()?.role === "super_admin" ? `<button class="btn small" type="button" data-set-google-key>${hasApiKey ? "Change Google Maps API key" : "Add Google Maps API key"}</button>` : ""}
        </div>
      </div>
      <div class="google-map-canvas" id="screenMap" data-screen-map></div>
      <div class="map-fallback" data-map-fallback ${hasApiKey ? "hidden" : ""}>
        <div class="map-fallback-copy">
          <b>${hasApiKey ? "Google Maps is loading..." : "Add your Google Maps JavaScript API key to unlock live zoom and pan."}</b>
          <p class="hint">${hasApiKey ? "If the map still does not appear, check that Maps JavaScript API is enabled for your key." : "The old static pin view stays here as a fallback until the real map is turned on."}</p>
        </div>
        ${screens.map((screen) => `<button class="pin ${state.selectedScreens.includes(screen.id) ? "selected" : ""}" style="left:${screen.x}%;top:${screen.y}%" title="${screen.name}" data-screen="${screen.id}"><span>${screen.province.slice(0, 2).toUpperCase()}</span></button>`).join("")}
      </div>
    </div>
  `;
}

function renderScreenDetails(screen) {
  const photos = screen.photos?.length ? screen.photos.slice(0, 6) : ["https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80"];
  const index = Math.min(state.photoIndex?.[screen.id] || 0, photos.length - 1);
  return `
    <article class="display-detail">
      <div class="screen-head">
        <div><b>${screen.name}</b><div class="meta">${screen.city}, ${screen.province} - ${screen.venue}</div></div>
        <span class="badge ${screen.status === "online" ? "ok" : screen.status === "warning" ? "warn" : "bad"}">${screen.status}</span>
      </div>
      <div class="photo-viewer">
        <img src="${photos[index]}" alt="${screen.name} location photo ${index + 1}" />
        <button class="photo-arrow left" data-photo="${screen.id}|-1" title="Previous photo">&lt;</button>
        <button class="photo-arrow right" data-photo="${screen.id}|1" title="Next photo">&gt;</button>
        <div class="photo-count">${index + 1} / ${photos.length}</div>
      </div>
      <div class="badges">${screen.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}<span class="badge">${money(screen.rate)}/15s</span><span class="badge">${screenOrientation(screen)}</span><span class="badge">${screen.width}x${screen.height}</span><span class="badge">Brightness ${screen.brightness}%</span></div>
      <p class="hint">${screen.tabletId} - last seen ${screen.lastSeen}</p>
      <p class="hint"><a href="${screenGoogleMapsUrl(screen)}" target="_blank" rel="noreferrer">Open this location in Google Maps</a></p>
      <p class="hint player-url">${playerUrl(screen)}</p>
      <div class="actions"><button class="btn" data-player="${screen.id}">Open player</button><button class="btn" data-copy-player="${screen.id}">Copy player URL</button><button class="btn primary" data-book-screen="${screen.id}">Book</button></div>
    </article>
  `;
}

function renderScreenCard(screen, options = {}) {
  const selected = state.selectedScreens.includes(screen.id);
  return `
    <article class="screen-card ${selected ? "selected" : ""}">
      <div class="screen-head">
        <div><b>${screen.name}</b><div class="meta">${screen.city}, ${screen.province} - ${screen.venue}</div></div>
        <span class="badge ${screen.status === "online" ? "ok" : screen.status === "warning" ? "warn" : "bad"}">${screen.status}</span>
      </div>
      <div class="badges">${screen.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}<span class="badge">${money(screen.rate)}/15s</span></div>
      <div class="row"><span class="meta">${screen.tabletId} - last seen ${screen.lastSeen}</span><button class="btn small" data-screen="${screen.id}">${selected ? "Selected" : "Select"}</button></div>
      <div class="actions"><button class="btn small" data-screen="${screen.id}">View details</button><button class="btn small" data-player="${screen.id}">Open player</button><button class="btn small" data-copy-player="${screen.id}">Copy player URL</button><button class="btn small primary" data-book-screen="${screen.id}">Book</button></div>
    </article>
  `;
}

function renderTierPricingForm(screen) {
  const tiers = screen.tierPricing || defaultTierPricing(screen.rate);
  return `
    <form class="tier-form" data-tier-form>
      <input type="hidden" name="screenId" value="${screen.id}" />
      ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<label><span>${day}</span><input name="${day}" type="number" min="1" value="${tiers[day] ?? screen.rate}" /></label>`).join("")}
      <button class="btn small primary" type="submit">Save pricing</button>
    </form>
  `;
}

function renderCalendar(screenId) {
  const screen = state.screens.find((s) => s.id === screenId);
  const date = state.calendarDate || todayDate();
  const dates = weekDates(date);
  return `
    <div class="calendar full-day-calendar" data-calendar-build="${screenId}">
      <div class="calendar-toolbar">
        <div>
          <b>${screen.name} slots</b>
          <div class="meta">${weekRangeLabel(date)} - 7 days - 40,320 slots at 15 seconds each</div>
        </div>
        <div class="date-nav">
          <button class="icon-btn" data-date-nav="-7" title="Previous 7 days" aria-label="Previous 7 days">&lt;</button>
          <label class="date-picker">
            <span>Start</span>
            <input type="date" value="${date}" data-calendar-date />
          </label>
          <button class="icon-btn" data-date-nav="7" title="Next 7 days" aria-label="Next 7 days">&gt;</button>
        </div>
      </div>
      ${renderCalendarCostSummary(screenId)}
      <div class="week-slot-grid">
        <div class="week-head time-head">Time</div>
        ${dates.map((slotDate) => `<div class="week-head"><b>${dayLabel(slotDate)}</b><span>${shortDateLabel(slotDate)}</span></div>`).join("")}
        <div class="calendar-progress" data-calendar-progress>
          <div class="progress-head"><b>Loading slots</b><span data-progress-text>0% - estimating time left</span></div>
          <div class="progress-track"><div data-progress-bar style="width:0%"></div></div>
        </div>
      </div>
    </div>
  `;
}

function hydrateCalendars() {
  document.querySelectorAll("[data-calendar-build]").forEach((calendar) => buildCalendarRows(calendar));
}

function buildCalendarRows(calendar) {
  const screenId = calendar.dataset.calendarBuild;
  const grid = calendar.querySelector(".week-slot-grid");
  const progress = calendar.querySelector("[data-calendar-progress]");
  if (!grid || !progress) return;
  const screen = state.screens.find((s) => s.id === screenId);
  const dates = weekDates(state.calendarDate || todayDate());
  const bookedSet = bookedSlotSet(screenId);
  const selectedSet = new Set(state.selectedSlots[screenId] || []);
  const basketSet = new Set(cartSlotsFor(screenId));
  const token = ++calendarBuildToken;
  const totalRows = 5760;
  const instantRows = 17;
  const chunkSize = 120;
  const started = performance.now();
  let index = 0;

  function updateProgress(done) {
    const percent = Math.floor((done / totalRows) * 100);
    const elapsed = Math.max(1, performance.now() - started);
    const remainingMs = done ? Math.max(0, (elapsed / done) * (totalRows - done)) : 0;
    const secondsLeft = Math.ceil(remainingMs / 1000);
    const bar = progress.querySelector("[data-progress-bar]");
    const text = progress.querySelector("[data-progress-text]");
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.textContent = `${percent}% - about ${secondsLeft}s left`;
  }

  function step() {
    if (token !== calendarBuildToken || !calendar.isConnected) return;
    const end = Math.min(totalRows, index + chunkSize);
    let html = "";
    for (; index < end; index += 1) {
      html += renderSlotRow(screen, index, dates, bookedSet, selectedSet, basketSet);
    }
    progress.insertAdjacentHTML("beforebegin", html);
    updateProgress(index);
    if (index < totalRows) {
      window.setTimeout(step, 0);
    } else {
      progress.remove();
    }
  }

  let instantHtml = "";
  for (; index < instantRows; index += 1) {
    instantHtml += renderSlotRow(screen, index, dates, bookedSet, selectedSet, basketSet);
  }
  progress.insertAdjacentHTML("beforebegin", instantHtml);
  updateProgress(index);
  window.setTimeout(step, 0);
}

function renderCalendarCostSummary(screenId) {
  const advert = currentBookingAdvert();
  const screenSlots = state.selectedSlots[screenId] || [];
  const savedSlots = cartSlotsFor(screenId, advert?.id);
  const draftTotal = slotsTotal(screenId, screenSlots, advert);
  const basket = cartTotal();
  const projected = draftTotal + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  return `
    <div class="calendar-cost-strip" data-cost-strip="${screenId}">
      <div><span>This screen draft</span><b data-screen-total>${money(draftTotal)}</b><small data-screen-count>${screenSlots.length} unsaved slots</small></div>
      <div><span>Basket</span><b data-basket-total>${money(basket)}</b><small data-basket-count>${state.cart.length} basket items</small></div>
      <div><span>Projected total</span><b data-session-total>${money(projected)}</b><small>basket + current draft</small></div>
      <div><span>Minimum spend</span><b data-minimum-left>${remaining ? `${money(remaining)} left` : "Reached"}</b><small>${money(state.minimumSpend || seedState.minimumSpend)} minimum</small></div>
      <div class="calendar-action-cell">${savedSlots.length ? `<button class="btn small" data-edit-basket-screen="${screenId}">Edit basket slots</button>` : ""}<button class="btn primary update-basket-btn" data-update-basket="${screenId}">Update basket</button><small data-update-state>${savedSlots.length ? "Edit saved slots or update draft" : "Save this screen's selected slots"}</small></div>
    </div>
  `;
}

function renderCoverageMap() {
  return `
    <div class="map-wrap coverage-map">
      <div class="map-label">Whole Thailand display network</div>
      ${state.screens.map((screen) => {
        const capacity = capacityForScreen(screen);
        const status = capacityStatus(capacity.percent);
        return `<button class="pin coverage-pin ${status.className}" style="left:${screen.x}%;top:${screen.y}%" title="${screen.name} - ${capacity.percent.toFixed(1)}% booked"><span>${screen.province.slice(0, 2).toUpperCase()}</span></button>`;
      }).join("")}
      <div class="missing-zone north">North opportunity</div>
      <div class="missing-zone east">East opportunity</div>
      <div class="missing-zone south">South opportunity</div>
    </div>
  `;
}

async function initializeGoogleScreenMap() {
  const mapElement = document.querySelector("[data-screen-map]");
  const fallback = document.querySelector("[data-map-fallback]");
  if (!mapElement) return;
  const visibleScreens = filteredScreens();
  if (!getGoogleMapsApiKey()) {
    mapElement.innerHTML = "";
    if (fallback) fallback.hidden = false;
    return;
  }
  try {
    const maps = await loadGoogleMapsApi();
    if (!mapElement.isConnected) return;
    if (fallback) fallback.hidden = true;
    const map = new maps.Map(mapElement, {
      center: THAILAND_GEO_BOUNDS.center,
      zoom: 6,
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
      gestureHandling: "greedy"
    });
    googleScreenMap = map;
    googleScreenMarkers.forEach((marker) => marker.setMap(null));
    googleScreenMarkers = [];
    const selectedScreenId = state.selectedScreens[0];
    const infoWindow = new maps.InfoWindow();
    const bounds = new maps.LatLngBounds();
    visibleScreens.forEach((screen) => {
      const coordinates = normalizedCoordinatesForScreen(screen);
      const marker = new maps.Marker({
        map,
        position: { lat: coordinates.latitude, lng: coordinates.longitude },
        title: `${screen.name} - ${screen.city}, ${screen.province}`,
        label: {
          text: screen.province.slice(0, 2).toUpperCase(),
          color: "#ffffff",
          fontSize: "11px",
          fontWeight: "700"
        },
        icon: {
          path: maps.SymbolPath.CIRCLE,
          scale: state.selectedScreens.includes(screen.id) ? 13 : 11,
          fillColor: state.selectedScreens.includes(screen.id) ? "#7137f1" : "#cc1ea6",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 3
        }
      });
      marker.addListener("click", () => {
        infoWindow.setContent(`
          <div style="min-width:220px;font:13px Inter,Arial,sans-serif;color:#152033;">
            <div style="font-weight:700;margin-bottom:4px;">${screen.name}</div>
            <div style="margin-bottom:6px;">${screen.city}, ${screen.province}</div>
            <div style="margin-bottom:6px;">${money(screen.rate)}/15s • ${screen.width}x${screen.height}</div>
            <a href="${screenGoogleMapsUrl(screen)}" target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
        `);
        infoWindow.open({ anchor: marker, map });
        toggleScreen(screen.id);
      });
      googleScreenMarkers.push(marker);
      bounds.extend(marker.getPosition());
    });
    if (!googleScreenMarkers.length) {
      map.setCenter(THAILAND_GEO_BOUNDS.center);
      map.setZoom(6);
      return;
    }
    if (googleScreenMarkers.length === 1) {
      map.setCenter(bounds.getCenter());
      map.setZoom(13);
      return;
    }
    map.fitBounds(bounds, 48);
    if (selectedScreenId) {
      const selectedScreen = visibleScreens.find((screen) => screen.id === selectedScreenId);
      if (selectedScreen) {
        const coordinates = normalizedCoordinatesForScreen(selectedScreen);
        window.setTimeout(() => {
          map.panTo({ lat: coordinates.latitude, lng: coordinates.longitude });
          map.setZoom(Math.max(map.getZoom() || 6, 13));
        }, 160);
      }
    }
  } catch {
    mapElement.innerHTML = "";
    if (fallback) fallback.hidden = false;
    const fallbackCopy = fallback?.querySelector(".map-fallback-copy");
    if (fallbackCopy) {
      fallbackCopy.innerHTML = `<b>Google Maps could not load.</b><p class="hint">Check that your API key is valid, billing is enabled, and Maps JavaScript API is turned on.</p>`;
    }
  }
}

function renderAdvertMiniPreview(advert) {
  const src = mediaSourceFor(advert);
  if (!src) return "";
  return advert.type === "video"
    ? `<video class="advert-thumb" src="${src}" muted playsinline></video>`
    : `<img class="advert-thumb" src="${src}" alt="${advert.fileName}" />`;
}

function updateCalendarCostDom(screenId) {
  const strip = document.querySelector(`[data-cost-strip="${screenId}"]`);
  if (!strip) return;
  const advert = currentBookingAdvert();
  const screenSlots = state.selectedSlots[screenId] || [];
  const draftTotal = slotsTotal(screenId, screenSlots, advert);
  const basket = cartTotal();
  const projected = draftTotal + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  strip.querySelector("[data-screen-total]").textContent = money(draftTotal);
  strip.querySelector("[data-screen-count]").textContent = `${screenSlots.length} unsaved slots`;
  strip.querySelector("[data-basket-total]").textContent = money(basket);
  strip.querySelector("[data-basket-count]").textContent = `${state.cart.length} basket items`;
  strip.querySelector("[data-session-total]").textContent = money(projected);
  strip.querySelector("[data-minimum-left]").textContent = remaining ? `${money(remaining)} left` : "Reached";
  const stateText = strip.querySelector("[data-update-state]");
  if (stateText) stateText.textContent = screenSlots.length ? "Ready to update basket" : "Select slots to update basket";
}

function updateBookingSummaryDom() {
  const advert = currentBookingAdvert();
  const summary = document.querySelector("[data-booking-summary-total]");
  const basketNode = document.querySelector("[data-booking-summary-basket]");
  const projectedNode = document.querySelector("[data-booking-summary-projected]");
  const minimum = document.querySelector("[data-booking-summary-minimum]");
  if (!summary) return;
  const draft = selectedSessionTotal(advert);
  const basket = cartTotal();
  const projected = draft + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  summary.textContent = money(draft);
  if (basketNode) basketNode.textContent = money(basket);
  if (projectedNode) projectedNode.textContent = money(projected);
  if (minimum) minimum.textContent = remaining ? `${money(remaining)} more to reach the minimum spend` : "Minimum spend reached";
}

function renderSlotRow(screen, index, dates, bookedSet, selectedSet, basketSet) {
  const seconds = index * 15;
  const time = formatTime(seconds);
  return `
    <div class="week-time ${time.endsWith(":00:00") ? "hour-start" : ""}">${time}</div>
    ${dates.map((slotDate) => renderSlotCell(screen, slotDate, time, bookedSet, selectedSet, basketSet)).join("")}
  `;
}

function renderSlotCell(screen, slotDate, time, bookedSet, selectedSet, basketSet) {
  const slot = `${slotDate} ${time}`;
  const price = slotPrice(screen, slotDate);
  const booked = bookedSet.has(slot);
  const selected = selectedSet.has(slot);
  const inBasket = basketSet.has(slot);
  const title = booked ? `${slot} booked` : `${slot} available - ${money(price)}`;
  return `<button class="week-slot ${booked ? "booked" : ""} ${selected ? "selected" : ""} ${inBasket ? "in-basket" : ""} ${time.endsWith(":00:00") ? "hour-start" : ""}" ${booked ? "disabled" : ""} data-slot="${screen.id}|${slot}" title="${title}"><span>${booked ? "Sold" : selected ? "Selected" : inBasket ? "In basket" : "Available"}</span><small>${money(price)}</small></button>`;
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderBookingSummary(advert) {
  if (!advert) return `<p class="hint">Upload or select one advert.</p>`;
  const draftRows = Object.entries(state.selectedSlots || {}).filter(([, slots]) => slots.length).map(([screenId, slots]) => {
    const screen = state.screens.find((s) => s.id === screenId);
    const total = slotsTotal(screenId, slots, advert);
    const multiplier = billingMultiplier(advert);
    const firstPrice = slots[0] ? slotPrice(screen, slots[0]) : screen.rate;
    return `<div class="cart-card"><b>${screen.name}</b><span class="meta">${slots.length} slot${slots.length === 1 ? "" : "s"} x ${money(firstPrice)}/15s x ${multiplier} billable block${multiplier === 1 ? "" : "s"} = ${money(total)}</span><span class="hint">${advert.duration}s advert rounds to ${advert.billableSeconds}s billing. ${slots.join(", ") || "No slots selected yet"}</span><div class="actions"><button class="btn small" data-edit-slots="${screenId}">Edit slots</button></div></div>`;
  }).join("");
  const basketRows = state.cart.map((item) => {
    const itemAdvert = state.adverts.find((a) => a.id === item.advertId);
    const itemTotal = cartItemTotal(item);
    return item.items.map((screenItem) => {
      const screen = state.screens.find((s) => s.id === screenItem.screenId);
      const multiplier = billingMultiplier(itemAdvert);
      const firstPrice = screenItem.slots[0] ? slotPrice(screen, screenItem.slots[0]) : screen.rate;
      return `<div class="cart-card in-basket-card"><b>${screen.name}</b><span class="meta">${itemAdvert?.title || "Advert"} - ${screenItem.slots.length} slot${screenItem.slots.length === 1 ? "" : "s"} x ${money(firstPrice)}/15s x ${multiplier} billable block${multiplier === 1 ? "" : "s"} = ${money(itemTotal)}</span><span class="hint">${itemAdvert?.duration || 15}s advert rounds to ${itemAdvert?.billableSeconds || 15}s billing. ${screenItem.slots.join(", ")}</span><div class="actions"><button class="btn small" data-edit-cart="${item.id}|${screen.id}">Edit slots</button><button class="btn small" data-edit-advert="${itemAdvert?.id || ""}">Edit / replace advert</button></div></div>`;
    }).join("");
  }).join("");
  const draftTotal = selectedSessionTotal(advert);
  const basket = cartTotal();
  const projected = draftTotal + basket;
  const remaining = Math.max(0, (state.minimumSpend || seedState.minimumSpend) - projected);
  return `
    <div class="grid">
      <div class="cart-card"><b>${advert.title}</b><span class="meta">${advert.type} - ${advert.duration}s rounded to ${advert.billableSeconds}s</span></div>
      <h3>Basket</h3>
      ${basketRows || `<p class="hint">No saved basket items yet.</p>`}
      <h3>Current draft</h3>
      ${draftRows || `<p class="hint">Select slots, then click Update basket to save them.</p>`}
      <div class="row"><b>Basket</b><b data-booking-summary-basket>${money(basket)}</b></div>
      <div class="row"><b>Draft</b><b data-booking-summary-total>${money(draftTotal)}</b></div>
      <div class="row"><b>Projected total</b><b data-booking-summary-projected>${money(projected)}</b></div>
      <span class="hint" data-booking-summary-minimum>${remaining ? `${money(remaining)} more to reach the minimum spend` : "Minimum spend reached"}</span>
    </div>
  `;
}

function renderBasket() {
  return `
    ${renderHeader("Basket", "Review, edit, delete, then pay for your advert bookings.", `<button class="btn primary" data-checkout>Pay ${money(cartTotal())}</button>`)}
    <section class="panel">
      <div class="grid">
        ${state.cart.map((item) => {
          const advert = state.adverts.find((a) => a.id === item.advertId);
          return `<article class="cart-card">
            <div class="screen-head"><b>${advert.title}</b><span>${money(cartItemTotal(item))}</span></div>
            ${item.items.map((i) => {
              const screen = state.screens.find((s) => s.id === i.screenId);
              return `<div class="cart-card"><b>${screen.name}</b><span class="meta">${i.slots.join(", ")}</span><div class="actions"><button class="btn small" data-edit-cart="${item.id}|${screen.id}">Edit slots</button></div></div>`;
            }).join("")}
            <div class="actions"><button class="btn small" data-edit-advert="${advert.id}">Edit / replace advert</button><button class="btn small danger" data-remove-cart="${item.id}">Delete</button></div>
          </article>`;
        }).join("") || `<p class="hint">No basket items yet.</p>`}
      </div>
    </section>
  `;
}

function renderOrders() {
  const orders = isStaff() ? state.orders : state.orders.filter((order) => order.customerId === currentUser().id);
  return `
    ${renderHeader(isStaff() ? "Orders" : "My orders", "Paid bookings, selected screens, and delivery status.", "")}
    <section class="panel">
      <div class="grid">
        ${orders.map((order) => {
          const advert = state.adverts.find((a) => a.id === order.advertId);
          const customer = state.users.find((u) => u.id === order.customerId);
          return `<article class="order-card">
            <div class="screen-head"><div><b>${advert?.title || "Deleted advert"}</b><div class="meta">${customer?.name || "Customer"} - ${order.createdAt}</div></div><span class="badge ok">${order.status}</span></div>
            ${order.items.map((item) => `<span class="meta">${state.screens.find((s) => s.id === item.screenId)?.name}: ${item.slots.length} slots</span>`).join("")}
            <div class="row"><span class="hint">Tablets will receive this schedule when the advert is approved.</span><b>${money(order.total)}</b></div>
          </article>`;
        }).join("") || `<p class="hint">No orders yet.</p>`}
      </div>
    </section>
  `;
}

function renderScreensAdmin() {
  const realScreen = realAndroidScreen();
  const visibleScreens = screensSelectedFirst(filteredScreens());
  return `
    ${renderHeader("Screens", "Add, identify, monitor, and manage every tablet display location.", `<button class="btn primary" data-modal="screen">Add screen</button>`)}
    ${realScreen ? `<section class="panel real-screen-banner">
      <div>
        <span class="badge ok">Android test screen</span>
        <h2>${realScreen.name}</h2>
        <p class="hint">${realScreen.tabletId} - ${realScreen.city}, ${realScreen.province} - ${money(realScreen.rate)}/15s</p>
      </div>
      <div class="actions"><button class="btn primary" data-show-real-screen>Show this screen</button><button class="btn" data-player="${realScreen.id}">Open player</button><button class="btn" data-copy-player="${realScreen.id}">Copy player URL</button></div>
    </section>` : ""}
    <div class="grid two">
      <section class="panel">${renderFilters()}${renderMap(visibleScreens)}</section>
      <section class="panel"><div class="screen-list">${visibleScreens.map((screen) => `
        <article class="screen-card ${state.selectedScreens.includes(screen.id) ? "selected" : ""}">
          <div class="screen-head"><div><b>${screen.name}</b><div class="meta">${screen.tabletId} - ${screen.city}, ${screen.province}</div></div><span class="badge ${screen.status === "online" ? "ok" : screen.status === "warning" ? "warn" : "bad"}">${screen.status}</span></div>
          <div class="badges"><span class="badge">${money(screen.rate)}/15s</span><span class="badge">${screenOrientation(screen)}</span><span class="badge">${screen.width}x${screen.height}</span><span class="badge">Brightness ${screen.brightness}%</span><span class="badge">${screen.venue}</span></div>
          <p class="hint player-url">${playerUrl(screen)}</p>
          ${renderTierPricingForm(screen)}
          ${renderScreenDefaults(screen)}
          ${renderScreenHistory(screen)}
          <div class="actions"><button class="btn small" data-pair="${screen.id}">Pair/check in</button><button class="btn small" data-player="${screen.id}">Open player</button><button class="btn small" data-copy-player="${screen.id}">Copy player URL</button></div>
        </article>
      `).join("")}</div></section>
    </div>
  `;
}

function renderScreenHistory(screen) {
  const rows = advertHistoryRows({ screenId: screen.id });
  const totals = historyTotals(rows);
  return `
    <div class="screen-history">
      <div class="screen-head">
        <div><b>Bought advert history</b><div class="meta">${totals.impressions.toLocaleString()} impressions - ${formatDuration(totals.liveSeconds)} live - ${totals.playedUnits.toLocaleString()} shown 15-sec units</div></div>
        <span class="badge">${rows.length} adverts</span>
      </div>
      ${rows.length ? `<div class="screen-history-list">
        ${rows.slice(0, 5).map((row) => `<article class="screen-history-item">
          <div class="history-media mini">${renderAdvertMiniPreview(row.advert) || `<div class="empty-thumb">${row.advert.type || "Ad"}</div>`}</div>
          <div><b>${row.advert.title}</b><span class="meta">${row.customer?.name || "Customer"} - ${row.playedSlots}/${row.bookedSlots} plays shown - ${formatDuration(row.totalLiveSeconds)} live</span><span class="meta">${row.playedUnits} shown 15-sec units - ${money(row.revenue)}</span></div>
        </article>`).join("")}
      </div>` : `<p class="hint">No bought adverts for this screen yet.</p>`}
    </div>
  `;
}

function renderScreenDefaults(screen) {
  const defaults = screen.defaultAdverts || [];
  return `
    <div class="screen-defaults">
      <div class="row">
        <div><b>Screen default videos</b><div class="meta">Used on this tablet when a slot is available. If empty, it uses the global default pool.</div></div>
        <label class="btn small primary" for="screenDefaultFile-${screen.id}">Add default</label>
      </div>
      <input class="file-input" id="screenDefaultFile-${screen.id}" type="file" accept="video/*,image/*" multiple data-screen-default-file="${screen.id}" />
      ${defaults.length ? `<div class="screen-default-list">
        ${defaults.map((advert) => `<article class="screen-default-item">
          <div class="screen-default-preview">${renderAdvertMediaPreview(advert)}</div>
          <div class="screen-head"><div><b>${advert.title}</b><div class="meta">${advert.fileName} - ${advert.duration || 15}s${advert.width && advert.height ? ` - ${advert.width}x${advert.height}` : ""}</div></div><button class="btn small danger" data-remove-screen-default="${screen.id}|${advert.id}">Remove</button></div>
        </article>`).join("")}
      </div>` : `<p class="hint">No screen-specific default yet. This tablet will use the global default pool.</p>`}
    </div>
  `;
}

function renderAdvertsAdmin() {
  return `
    ${renderHeader("Advert approvals", "Approve media before tablets can receive it.", "")}
    <section class="panel" style="margin-bottom:16px">
      <h2>AI banned-content rules</h2>
      <p class="hint">Prototype moderation checks advert title and file name against this list. Backend AI/content scanning will use the same rules plus image/video analysis.</p>
      <form class="form" id="moderationRulesForm">
        <div class="field"><label>Banned terms, one per line</label><textarea name="rules">${(state.moderationRules || seedState.moderationRules).join("\n")}</textarea></div>
        <button class="btn primary" type="submit">Save AI rules</button>
      </form>
    </section>
    <section class="panel">
      <table class="table">
        <thead><tr><th>Advert</th><th>Customer</th><th>Size</th><th>Duration</th><th>Status / reason</th><th>Actions</th></tr></thead>
        <tbody>
          ${state.adverts.map((advert) => {
            const customer = state.users.find((u) => u.id === advert.customerId);
            return `<tr>
              <td><b>${advert.title}</b><div class="meta">${advert.fileName}</div></td>
              <td>${customer?.name || "Unknown"}</td>
              <td>${advert.width && advert.height ? `${advert.width}x${advert.height}` : "unknown"}</td>
              <td>${advert.duration}s billed ${advert.billableSeconds}s</td>
              <td><span class="badge ${advert.status === "approved" ? "ok" : ["rejected", "blocked"].includes(advert.status) ? "bad" : "warn"}">${advert.status}</span><div class="meta">${advert.moderationReason || "Waiting for admin review."}</div></td>
              <td><button class="btn small" data-ad-status="${advert.id}|approved">Approve</button> <button class="btn small danger" data-ad-status="${advert.id}|rejected">Reject</button></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderTeam() {
  if (currentUser().role !== "super_admin") return `${renderHeader("Team", "Only the super admin can assign roles.", "")}<section class="panel"><p class="hint">Ask the super admin for access.</p></section>`;
  return `
    ${renderHeader("Team & roles", "Assign admin, operator, and customer access.", "")}
    <section class="panel">
      <table class="table">
        <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
        <tbody>
          ${state.users.map((user) => `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><select data-role-user="${user.id}">
              ${["super_admin", "admin", "operator", "customer"].map((role) => `<option value="${role}" ${user.role === role ? "selected" : ""}>${roleName(role)}</option>`).join("")}
            </select></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function defaultPoolForScreen(screen) {
  if (screen?.defaultAdverts?.length) return screen.defaultAdverts;
  return state.houseAdverts?.length ? state.houseAdverts : [state.houseAdvert || seedState.houseAdvert];
}

function randomDefaultAdvert(screen) {
  const pool = defaultPoolForScreen(screen);
  return pool[Math.floor(Math.random() * pool.length)] || seedState.houseAdvert;
}

function currentSlotKey() {
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + Math.floor(now.getSeconds() / 15) * 15;
  return `${date} ${formatTime(seconds)}`;
}

function renderPlayer() {
  const screen = state.screens.find((s) => s.id === state.playerScreenId) || state.screens.find((s) => s.status === "online") || state.screens[0];
  const orientationClass = screenOrientation(screen).toLowerCase();
  const frameRatio = `${Number(screen.width) || DEFAULT_SCREEN_WIDTH} / ${Number(screen.height) || DEFAULT_SCREEN_HEIGHT}`;
  const currentSlot = currentSlotKey();
  const scheduled = state.orders.flatMap((order) => order.items.filter((item) => item.screenId === screen.id && item.slots.includes(currentSlot)).map(() => state.adverts.find((a) => a.id === order.advertId))).filter((advert) => advert?.status === "approved");
  const advert = scheduled[0] || randomDefaultAdvert(screen);
  const duration = advert.billableSeconds || advert.duration || 15;
  currentPlayerDuration = duration;
  window.clearTimeout(playerRefreshTimer);
  playerRefreshTimer = window.setTimeout(() => {
    if (state.route === "player") render();
  }, duration * 1000);
  const mediaSrc = mediaSourceFor(advert);
  const media = mediaSrc
    ? advert.type === "video"
      ? `<video class="signage-video" src="${mediaSrc}" autoplay muted loop playsinline disablepictureinpicture controlslist="nodownload nofullscreen noremoteplayback"></video>`
      : `<img src="${mediaSrc}" alt="${advert.title}" />`
    : `<div><h1>${advert ? advert.title : "No approved advert scheduled"}</h1><p>${screen.name} - ${screen.tabletId}</p></div>`;
  return `
    <section class="player ${orientationClass}">
      <div class="player-frame" style="aspect-ratio:${frameRatio}; width:min(100vw, calc(100vh * ${Number(screen.width) || DEFAULT_SCREEN_WIDTH} / ${Number(screen.height) || DEFAULT_SCREEN_HEIGHT})); height:min(100vh, calc(100vw * ${Number(screen.height) || DEFAULT_SCREEN_HEIGHT} / ${Number(screen.width) || DEFAULT_SCREEN_WIDTH}));">
        <div class="player-stage">
          <button class="player-logo-toggle" data-fullscreen title="Toggle fullscreen" aria-label="Toggle fullscreen"><img src="assets/ad4u-logo.png" alt="AD4U" /></button>
          ${media}
          <div class="player-countdown">
            <span data-countdown>${duration}s</span>
            <div class="countdown-track"><div data-countdown-bar></div></div>
          </div>
        </div>
      </div>
    </section>
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
  `;
}

function startPlayerCountdown(duration) {
  window.clearInterval(playerCountdownTimer);
  const started = Date.now();
  const totalMs = Math.max(1, duration) * 1000;
  const label = document.querySelector("[data-countdown]");
  const bar = document.querySelector("[data-countdown-bar]");

  function update() {
    const elapsed = Date.now() - started;
    const remaining = Math.max(0, Math.ceil((totalMs - elapsed) / 1000));
    const progress = Math.max(0, Math.min(100, ((totalMs - elapsed) / totalMs) * 100));
    if (label) label.textContent = `${remaining}s`;
    if (bar) bar.style.width = `${progress}%`;
  }

  update();
  playerCountdownTimer = window.setInterval(update, 250);
}

function renderModal() {
  if (modal !== "screen") return "";
  return `
    <div class="modal">
      <div class="modal-body">
        <div class="screen-head"><h2>Add screen</h2><button class="btn small" data-close-modal>Close</button></div>
        <form class="form" id="screenForm">
          <div class="grid two">
            <div class="field"><label>Screen name</label><input name="name" required /></div>
            <div class="field"><label>Tablet ID</label><input name="tabletId" placeholder="TAB-BKK-003" required /></div>
          </div>
          <div class="grid two">
            <div class="field"><label>Province</label><input name="province" required /></div>
            <div class="field"><label>City / district</label><input name="city" required /></div>
          </div>
          <div class="field"><label>Venue details</label><input name="venue" required /></div>
          <div class="grid three">
            <div class="field"><label>Rate per 15s THB</label><input name="rate" type="number" value="150" required /></div>
            <div class="field"><label>Latitude</label><input name="latitude" type="number" step="0.000001" value="13.756300" required /></div>
            <div class="field"><label>Longitude</label><input name="longitude" type="number" step="0.000001" value="100.501800" required /></div>
          </div>
          <div class="grid two">
            <div class="field"><label>Screen size</label><select name="sizePreset" data-screen-size-preset>${renderScreenSizeOptions("portrait-1080x1920")}</select></div>
            <div class="field"><label>Upload requirement</label><input value="Customers must upload this exact size" readonly /></div>
          </div>
          <div class="grid two">
            <div class="field"><label>Screen width pixels</label><input name="width" type="number" min="1" value="${DEFAULT_SCREEN_WIDTH}" required /></div>
            <div class="field"><label>Screen height pixels</label><input name="height" type="number" min="1" value="${DEFAULT_SCREEN_HEIGHT}" required /></div>
          </div>
          <p class="hint">Each screen defines its own advert size. Customers can only book this screen with video or image adverts matching this exact pixel size.</p>
          <div class="field"><label>Tags</label><input name="tags" placeholder="Mall, Tourist, Office" /></div>
          <div class="field"><label>Location photo URLs (up to 6, one per line)</label><textarea name="photos" placeholder="https://example.com/screen-front.jpg"></textarea></div>
          <button class="btn primary" type="submit">Save screen</button>
        </form>
      </div>
    </div>
  `;
}

function roleName(role) {
  return role.split("_").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function bindAuth() {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  document.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => {
    state.authMode = button.dataset.authMode;
    render();
  }));
  document.querySelector("#loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    login(event.target.email.value, event.target.password.value);
  });
  document.querySelector("#registerForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    register(event.target);
  });
  document.querySelector("#emailOtpForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    verifyRegistrationOtp(event.target);
  });
}

function bindCommon() {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  document.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => setRoute(button.dataset.route)));
  document.querySelector("[data-update-now]")?.addEventListener("click", () => requestUpdateNow());
  document.querySelector("[data-set-google-key]")?.addEventListener("click", promptForGoogleMapsApiKey);
  document.querySelector("[data-logout]")?.addEventListener("click", logout);
  document.querySelector("#phoneForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    requestMobileOtp(event.target);
  });
  document.querySelector("#phoneOtpForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    verifyMobileOtp(event.target);
  });
  document.querySelector("#profileForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCustomerProfile(event.target);
  });
  document.querySelector("#paymentForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    savePaymentProfile(event.target);
  });
  document.querySelector("#uploadForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    uploadAdvert(event.target);
  });
  document.querySelector("[data-media-file]")?.addEventListener("change", (event) => handleMediaFile(event.target.files?.[0]));
  document.querySelector("[data-sticker-image-file]")?.addEventListener("change", (event) => handleStickerImageFile(event.target.files?.[0]));
  document.querySelectorAll("[data-download-sticker]").forEach((button) => button.addEventListener("click", () => downloadSticker(button.dataset.downloadSticker)));
  document.querySelector("[data-download-all-stickers]")?.addEventListener("click", downloadAllStickers);
  document.querySelectorAll("[data-screen]").forEach((button) => button.addEventListener("click", () => toggleScreen(button.dataset.screen)));
  document.querySelectorAll("[data-book-screen]").forEach((button) => button.addEventListener("click", () => bookScreen(button.dataset.bookScreen)));
  document.querySelectorAll("[data-edit-slots]").forEach((button) => button.addEventListener("click", () => editSlots(button.dataset.editSlots, state.selectedSlots[button.dataset.editSlots] || cartSlotsFor(button.dataset.editSlots))));
  document.querySelectorAll("[data-edit-cart]").forEach((button) => button.addEventListener("click", () => {
    const [cartId, screenId] = button.dataset.editCart.split("|");
    editCartItem(cartId, screenId);
  }));
  document.querySelectorAll("[data-edit-basket-screen]").forEach((button) => button.addEventListener("click", () => editBasketSlotsForScreen(button.dataset.editBasketScreen)));
  document.querySelectorAll("[data-edit-advert]").forEach((button) => button.addEventListener("click", () => editAdvert(button.dataset.editAdvert)));
  document.querySelectorAll("[data-select-advert]").forEach((input) => input.addEventListener("change", () => selectAdvert(input.dataset.selectAdvert)));
  document.querySelector("[data-cancel-ad-edit]")?.addEventListener("click", cancelAdvertEdit);
  document.querySelectorAll("[data-player]").forEach((button) => button.addEventListener("click", () => openPlayer(button.dataset.player)));
  document.querySelectorAll("[data-copy-player]").forEach((button) => button.addEventListener("click", () => copyPlayerUrl(button.dataset.copyPlayer)));
  document.querySelector("[data-fullscreen]")?.addEventListener("click", toggleFullscreen);
  document.querySelector("[data-show-real-screen]")?.addEventListener("click", showRealAndroidScreen);
  document.querySelector("[data-screen-size-preset]")?.addEventListener("change", (event) => updateScreenSizePreset(event.target));
  document.querySelector("#networkStatsFilterForm")?.addEventListener("submit", (event) => event.preventDefault());
  document.querySelector("[data-network-province]")?.addEventListener("change", (event) => {
    networkFilters.province = event.target.value;
    networkFilters.city = "All";
    render();
  });
  document.querySelector("[data-network-city]")?.addEventListener("change", (event) => {
    networkFilters.city = event.target.value;
    render();
  });
  document.querySelector("[data-show-coverage]")?.addEventListener("click", () => {
    document.querySelector(".coverage-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  document.querySelectorAll("[data-photo]").forEach((button) => button.addEventListener("click", () => {
    const [screenId, direction] = button.dataset.photo.split("|");
    changePhoto(screenId, Number(direction));
  }));
  document.querySelectorAll(".calendar").forEach((calendar) => calendar.addEventListener("click", (event) => {
    const slotButton = event.target.closest("[data-slot]");
    if (slotButton && !slotButton.disabled) {
      const [screenId, slot] = slotButton.dataset.slot.split("|");
      const selected = toggleSlot(screenId, slot, false);
      slotButton.classList.toggle("selected", selected);
      const label = slotButton.querySelector("span");
      if (label) label.textContent = selected ? "Selected" : slotButton.classList.contains("in-basket") ? "In basket" : "Available";
      updateCalendarCostDom(screenId);
      updateBookingSummaryDom();
      updateDecisionBarDom();
      return;
    }
    const dateButton = event.target.closest("[data-date-nav]");
    if (dateButton) moveCalendarDate(Number(dateButton.dataset.dateNav));
  }));
  document.querySelectorAll("[data-calendar-date]").forEach((input) => input.addEventListener("change", (event) => setCalendarDate(event.target.value)));
  document.querySelector("#houseAdvertForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    updateHouseAdvert(event.target);
  });
  document.querySelector("[data-house-media-file]")?.addEventListener("change", (event) => addHouseMediaFiles(event.target.files));
  document.querySelectorAll("[data-remove-house-ad]").forEach((button) => button.addEventListener("click", () => removeHouseAdvert(button.dataset.removeHouseAd)));
  document.querySelectorAll("[data-screen-default-file]").forEach((input) => input.addEventListener("change", (event) => addScreenDefaultMediaFiles(input.dataset.screenDefaultFile, event.target.files)));
  document.querySelectorAll("[data-remove-screen-default]").forEach((button) => button.addEventListener("click", () => {
    const [screenId, advertId] = button.dataset.removeScreenDefault.split("|");
    removeScreenDefaultAdvert(screenId, advertId);
  }));
  document.querySelector("#moderationRulesForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    updateModerationRules(event.target);
  });
  document.querySelectorAll("[data-tier-form]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateTierPricing(event.target);
  }));
  document.querySelector("[data-add-cart]")?.addEventListener("click", (event) => addToCart(event.target.dataset.addCart));
  document.querySelector("[data-go-live]")?.addEventListener("click", makeBasketLive);
  document.querySelectorAll("[data-update-basket]").forEach((button) => button.addEventListener("click", () => addScreenSelectionToCart(button.dataset.updateBasket, currentBookingAdvert()?.id)));
  document.querySelector("[data-checkout]")?.addEventListener("click", checkout);
  document.querySelectorAll("[data-remove-cart]").forEach((button) => button.addEventListener("click", () => removeCartItem(button.dataset.removeCart)));
  document.querySelector("#provinceFilter")?.addEventListener("change", (event) => {
    filters.province = event.target.value;
    clearBookingDraft();
    saveState();
    render();
  });
  document.querySelector("#textFilter")?.addEventListener("input", (event) => {
    filters.text = event.target.value;
    scheduleSave();
  });
  document.querySelector("#textFilter")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyTextFilter(event.target.value);
  });
  document.querySelector("#textFilter")?.addEventListener("blur", (event) => {
    if (event.target.value.trim() !== filters.text) applyTextFilter(event.target.value);
  });
  document.querySelector("[data-apply-filter]")?.addEventListener("click", () => {
    applyTextFilter(document.querySelector("#textFilter")?.value || "");
  });
  document.querySelectorAll("[data-modal]").forEach((button) => button.addEventListener("click", () => {
    modal = button.dataset.modal;
    render();
  }));
  document.querySelector("[data-close-modal]")?.addEventListener("click", () => {
    modal = null;
    render();
  });
  document.querySelector("#screenForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    addScreen(event.target);
  });
  document.querySelectorAll("[data-role-user]").forEach((select) => select.addEventListener("change", () => updateRole(select.dataset.roleUser, select.value)));
  document.querySelectorAll("[data-ad-status]").forEach((button) => button.addEventListener("click", () => {
    const [advertId, status] = button.dataset.adStatus.split("|");
    setAdvertStatus(advertId, status);
  }));
  document.querySelectorAll("[data-pair]").forEach((button) => button.addEventListener("click", () => pairTablet(button.dataset.pair)));
  initializeGoogleScreenMap();
}

applyPlayerDeepLink();
render();




