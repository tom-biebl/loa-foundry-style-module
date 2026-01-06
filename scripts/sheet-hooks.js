/* =========================================================
   Legends of Arxanum – Sheet Hooks
   Purpose: UI-Enhancements only (no rules)
   ========================================================= */

Hooks.on("renderActorSheet", (app, html) => {
  // Only Simple Worldbuilding Characters
  if (app.actor.system?.schemaVersion === undefined) return;
  if (!app.actor.sheet?.options?.classes?.includes("simple-worldbuilding")) return;

  // Add theme marker
  html.addClass("dark-fantasy");

  // Example: Action feedback (safe, optional)
  html.find(".items-list .item").on("dblclick", () => {
    ui.notifications.info("Aktion vorbereitet…");
  });
});
