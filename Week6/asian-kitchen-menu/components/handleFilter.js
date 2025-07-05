// js/components/handleFilter.js

/**
 * Handles filtering of menu items by category and re-renders the menu.
 * @param {String} category - Selected category ("All", "Korea", etc.)
 * @param {Array} menu - Full menu data array
 * @param {HTMLElement} sectionCenter - DOM element to render menu items into
 * @param {Function} renderMenu - Menu rendering function
 */
export function handleFilter(category, menu, sectionCenter, renderMenu) {
    if (category === "All") {
      renderMenu(menu, sectionCenter);
    } else {
      const filtered = menu.filter(item => item.category === category);
      renderMenu(filtered, sectionCenter);
    }
  }
  