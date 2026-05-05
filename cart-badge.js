// cart-badge.js — include on every page to keep cart count live
(function() {
  function updateBadge() {
    const el = document.getElementById('cart-count');
    if (!el) return;
    const cart = JSON.parse(localStorage.getItem('gourmetCart') || '[]');
    el.textContent = cart.reduce((s, i) => s + i.qty, 0);
  }
  updateBadge();
  // Update whenever storage changes (e.g. other tab)
  window.addEventListener('storage', updateBadge);
})();
