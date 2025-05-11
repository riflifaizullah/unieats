document.querySelectorAll('.toggle-review').forEach(button => {
  button.addEventListener('click', () => {
    const reviewSection = button.closest('.mb-5').querySelector('.review-section');
    reviewSection.style.display = (reviewSection.style.display === 'none') ? 'block' : 'none';
    button.textContent = (reviewSection.style.display === 'block') ? '⮝ Hide Reviews' : '⮟ Reviews';
  });
});
