// js/app.js

import { menu } from './data/menuData.js';
import { renderMenu } from './components/renderMenu.js';
import { renderButtons } from './components/renderButtons.js';
import { handleFilter } from './components/handleFilter.js';

// DOM elementleri
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
  // Tüm menüyü başta ekrana bas
  renderMenu(menu, sectionCenter);

  // Kategori butonlarını oluştur ve click eventini tanımla
  renderButtons(menu, btnContainer, (selectedCategory) => {
    handleFilter(selectedCategory, menu, sectionCenter, renderMenu);
  });
});
