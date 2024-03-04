const items = document.querySelectorAll('#itemList li');

items.forEach((item, index) => {
  const colors = ['#ffcc00', '#00ffcc', '#cc00ff'];
  
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = colors[index]; 
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = ''; 
  });
});
