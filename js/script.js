const play = document.querySelector('button');

play.addEventListener('click', () => {
  const mode = document.querySelector('select').value;
  switch(mode){
    case 'easy':
        createGrid(100);
        break; 
    case 'medium':
        createGrid(81);
        break; 
    case 'hard':
        createGrid(49);
        break; 
  }
})

function createGrid(N){
  const grid = document.querySelector('.grid');

  if(grid)
      grid.innerHTML = null;

  for(let i = 1; i <= N; ++i)
    grid.append(createGridElement(i,N));
  
}

function createGridElement(i, N){
    const e = document.createElement('div');
    e.innerText = i;

    e.className = 'square';
    e.style.height = e.style.width = `calc(100%/${Math.sqrt(N)})`;

    e.addEventListener('click', function(){
      this.classList.add("active");
      console.log(this.innerText);
    })
    
    return e;
}
