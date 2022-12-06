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

  for(let i = 1; i <= N; ++i){
    let e = createGridElement(i);

    if(N == 100)
          e.className = 'square easy-square';
    else if(N == 81)
          e.className = 'square medium-square';
    else
          e.className =  'square hard-square';

    grid.append(e);
  }
}

function createGridElement(i){
    const e = document.createElement('div');
    e.innerHTML = i;
    return e;
}