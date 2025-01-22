// =================== ROOTS ===================
const ROOTS = {
  // ===== AUTH =====
  LOGIN: "login",
  REGISTER: "register",

  // ===== MAIN =====
  HOME: "",
  ABOUT: "about",
  OUR_TEAM: "our-team",
  CONTACT: "contact",
  CART: "cart",
  PRODUCTS: "products",

  // ===== PROFILE =====
  PROFILE: "profile",
};

// =================== PATHS ===================
export const paths = {
  // ===== AUTH =====
  login: ROOTS.LOGIN,
  register: ROOTS.REGISTER,

  // ===== HOME =====
  home: { root: ROOTS.HOME },

  // ===== ABOUT =====
  about: { root: ROOTS.ABOUT },

  // ===== OUR_TEAM =====
  ourTeam: { root: ROOTS.OUR_TEAM },

  // ===== CONTACT =====
  contact: { root: ROOTS.CONTACT },

  // ===== CART =====
  cart: { root: ROOTS.CART },

  // ===== PRODUCTS =====
  products: { root: ROOTS.PRODUCTS },

  // ===== PROFILE =====
  profile: {
    root: ROOTS.PROFILE,
  },

  // ===== SHOP HASD =====
  shop: "#shop",
};
