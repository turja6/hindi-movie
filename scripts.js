// Adding hover effects to movie items with scaling
document.querySelectorAll('.movie-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});

// Scroll animation for movie categories
window.addEventListener('scroll', () => {
  const movies = document.querySelectorAll('.movie-item');
  const scrollPosition = window.scrollY + window.innerHeight;
  
  movies.forEach(movie => {
    if (movie.offsetTop < scrollPosition) {
      movie.style.transform = 'scale(1.05)';
      movie.style.transition = 'transform 0.5s ease-out';
    }
  });
});
