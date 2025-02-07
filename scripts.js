// Example: Add interactivity such as hover effects
document.querySelectorAll('.movie-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });
  
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});
