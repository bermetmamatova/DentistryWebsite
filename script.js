window.addEventListener('DOMContentLoaded', (event) => {
    // Set the initial size to 's'
    setSize('s');
  });
  
  function setSize(size) {
    var root = document.documentElement;
    root.setAttribute('data-size', size);
  
    // Update the font size of all elements based on the chosen size
    var elements = document.querySelectorAll('.size-adjustable');
    elements.forEach(function(element) {
      element.style.fontSize = getFontSize(size);
    });
  }
  
  function getFontSize(size) {
    if (size === 's') {
      return '14px';
    } else if (size === 'm') {
      return '18px';
    } else if (size === 'l') {
      return '20px';
    }
  }
  
  