// js/components/renderMenu.js

/**
 * Renders menu items as HTML inside a target DOM element.
 * @param {Array} menuItems - Array of menu item objects.
 * @param {HTMLElement} sectionCenter - The DOM element to render items into.
 */
export function renderMenu(menuItems, sectionCenter) {
    // If no items, show a simple message
    if (!menuItems.length) {
      sectionCenter.innerHTML = `<div class="text-center my-4 text-muted">No menu items found.</div>`;
      return;
    }
  
    // Generate HTML for each menu item
    const menuHTML = menuItems.map(item => `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price.toFixed(2)}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div>
    `).join('');
  
    // Write HTML to the DOM
    sectionCenter.innerHTML = menuHTML;
  }
  