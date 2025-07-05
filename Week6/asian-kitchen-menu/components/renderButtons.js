// js/components/renderButtons.js

/**
 * Renders unique category filter buttons and attaches click events.
 * @param {Array} menu - Full menu data array
 * @param {HTMLElement} btnContainer - The DOM element to render buttons into
 * @param {Function} onCategoryClick - Callback to run when a button is clicked (receives category string)
 */
export function renderButtons(menu, btnContainer, onCategoryClick) {
    // 1. Benzersiz kategorileri çıkar + başa "All" ekle
    const categories = menu.reduce((acc, item) => {
      if (!acc.includes(item.category)) acc.push(item.category);
      return acc;
    }, ["All"]);
  
    // 2. Buton HTML'lerini oluştur
    const btnsHTML = categories.map(category => `
      <button 
        class="btn btn-outline-dark btn-item mx-1" 
        type="button" 
        data-category="${category}">
        ${category}
      </button>
    `).join('');
  
    btnContainer.innerHTML = btnsHTML;
  
    // 3. Eventleri ekle: Her buton için tıklandığında callback çağır
    btnContainer.querySelectorAll(".btn-item").forEach(btn => {
      btn.addEventListener("click", e => {
        const selectedCategory = btn.getAttribute("data-category");
        onCategoryClick(selectedCategory);
      });
    });
  }
  