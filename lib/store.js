// Unified data layer used by the customer menu and the admin CRM.
// Uses Supabase when env vars are set, otherwise localStorage seeded
// from menuData.js so everything works offline as a live demo.

import { supabase, hasSupabase } from "./supabaseClient";
import { SEED_MENU } from "./menuData";

const LS_MENU = "threechillies_menu_v2";
const LS_RES = "threechillies_reservations_v2";

export const dataMode = hasSupabase ? "supabase" : "local";

function uid() {
  return "id_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function lsLoad() {
  if (typeof window === "undefined") return SEED_MENU.map((x) => ({ id: uid(), ...x }));
  const raw = window.localStorage.getItem(LS_MENU);
  if (!raw) {
    const seeded = SEED_MENU.map((x) => ({ id: uid(), ...x }));
    window.localStorage.setItem(LS_MENU, JSON.stringify(seeded));
    return seeded;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function lsSave(items) {
  if (typeof window !== "undefined") window.localStorage.setItem(LS_MENU, JSON.stringify(items));
}

export const Store = {
  mode: dataMode,

  async getMenu() {
    if (hasSupabase) {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .order("category", { ascending: true })
        .order("name", { ascending: true });
      if (error) throw error;
      return data || [];
    }
    return lsLoad();
  },

  async addItem(item) {
    if (hasSupabase) {
      const { data, error } = await supabase.from("menu_items").insert(item).select().single();
      if (error) throw error;
      return data;
    }
    const items = lsLoad();
    const rec = { id: uid(), ...item };
    items.push(rec);
    lsSave(items);
    return rec;
  },

  async updateItem(id, patch) {
    if (hasSupabase) {
      const { data, error } = await supabase.from("menu_items").update(patch).eq("id", id).select().single();
      if (error) throw error;
      return data;
    }
    const items = lsLoad();
    const idx = items.findIndex((i) => String(i.id) === String(id));
    if (idx < 0) throw new Error("Item not found");
    items[idx] = { ...items[idx], ...patch };
    lsSave(items);
    return items[idx];
  },

  async deleteItem(id) {
    if (hasSupabase) {
      const { error } = await supabase.from("menu_items").delete().eq("id", id);
      if (error) throw error;
      return;
    }
    lsSave(lsLoad().filter((i) => String(i.id) !== String(id)));
  },

  async resetMenu() {
    if (hasSupabase) throw new Error("Reset is only available in offline/demo mode.");
    if (typeof window !== "undefined") window.localStorage.removeItem(LS_MENU);
    return lsLoad();
  },

  async addReservation(r) {
    if (hasSupabase) {
      const { data, error } = await supabase.from("reservations").insert(r).select().single();
      if (error) throw error;
      return data;
    }
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(LS_RES) : null;
    const list = raw ? JSON.parse(raw) : [];
    const rec = { id: uid(), created_at: new Date().toISOString(), ...r };
    list.push(rec);
    if (typeof window !== "undefined") window.localStorage.setItem(LS_RES, JSON.stringify(list));
    return rec;
  },
};
