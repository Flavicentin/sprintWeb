(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');

  //teclas
  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  let contador=0;
  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;
  // arrays
  const quadrados = [];
  const vetorblocks=[];

  // quadrados
  const quadrado1 = new Quadrado(50, 10, 100, 100, "#f60", 5);
  quadrados.push(quadrado1);

  const quadrado2 = new Quadrado(850, 390, 100, 100, "#06f", 5);
  quadrados.push(quadrado2);

  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });
//soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    console.log(key);
     switch (key) {
       case 'ArrowLeft':
         moveLeft = false;
         break;
       case 'ArrowUp':
         moveUp = false;
         break;
       case 'ArrowRight':
         moveRight = false;
         break;
       case 'ArrowDown':
         moveDown = false;
         break;
     }
  });
  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }

   //fiixar na tela - NÃO SAI DO CANVAS
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
  
    //colisões
    // for(let i in vetorblocks){
    //   let blk = vetorblocks[i];
    //   if(blk.visible)
    //   {
    //     blockRect(blk,quadrado1);
    //   }
    //   for(let j in vetorblocks){
    //     if(j !== i ){
    //       let blk2 = vetorblocks[j];
    //       blockRect(blk2,blk);
    //     }
    //   }
    // }


    if(quadrado1.posX == quadrado2.posX && quadrado1.posY == quadrado2.posY){
      contador++;
    }
  }

  let vida=100;
  let vidaTotal=0;

  function descontaVida()
  {
    if(contador == 5)
    {
      for(let i=0; i<=20;i++)
      {
        
      }
    }
  }  
  
  

  let esquerda = false;
  let cima = false;
  let direita = false;
  let baixo = false;
// pressionar as teclas
window.addEventListener('keydown', function (entrada) {
  const key = entrada.key;
  switch (key) {
    case 'a':
      esquerda = true;
      break;
    case 'w':
      cima = true;
      break;
    case 'd':
      direita = true;
      break;
    case 's':
      baixo = true;
      break;
  }
});

//soltar as teclas  
window.addEventListener('keyup', (entrada) => {
  const key = entrada.key;
  console.log(key);
   switch (key) {
     case 'a':
      esquerda = false;
       break;
     case 'w':
      cima = false;
       break;
     case 'd':
      direita = false;
       break;
     case 's':
      baixo = false;
       break;
   }
});

function moverQuadrados2() {
  if (esquerda && !direita) {
    quadrado2.posX -= quadrado2.velocidade;
  }
  if (direita && !esquerda) {
    quadrado2.posX += quadrado2.velocidade;
  }
  if (cima && !baixo) {
    quadrado2.posY -= quadrado2.velocidade;
  }
  if (baixo  && !cima) {
    quadrado2.posY += quadrado2.velocidade;
  }  
  
 //fiixar na tela - NÃO SAI DO CANVAS
  quadrado2.posX = Math.max(0, Math.min(cnv.width - quadrado2.width, quadrado2.posX));
  quadrado2.posY = Math.max(0, Math.min(cnv.height - quadrado2.height, quadrado2.posY));
}


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.color
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
    }
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    moverQuadrados2();
    exibirQuadrados();
  }

  atualizarTela(); 
}());