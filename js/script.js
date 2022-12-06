const play = document.querySelector('button');

play.addEventListener('click', (event) => {
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
    grid.append(createGridElement(i,N));
  }
}

function createGridElement(i, N){
    const e = document.createElement('div');
    e.innerHTML = i;

    if(N == 100)
          e.className = 'square easy-square';
    else if(N == 81)
          e.className = 'square medium-square';
    else
          e.className =  'square hard-square';

    e.addEventListener("click", () =>{
      e.classList.add("active");
      console.log(e.innerText);
    })
    
    return e;
}