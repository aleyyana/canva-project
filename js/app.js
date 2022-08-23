const container = document.querySelector('.container');
// permettre à notre js d'écouter les values données  dans notre input number
const sizeEl = document.querySelector('.sizeCanva');
let size = sizeEl.value;
const colorPick = document.getElementById('color');
const resetBtn = document.getElementById('reset')


// empêche de dessiner sur le canva
let draw = false

// Fonction permettant de lire notre input afin de créer la grille souhaitée. 
// Par exemple: si on ecrit 4, cela créera des divs de 4 sur 4, soit 16 divs
function Grid(size){
    // avant la boucle, set une nouvelle propriété sur une declaration css
    //  afin de donner des infos à notre fonction de comment la grille doit être complétée
    container.style.setProperty('--size',size)
    // i =0, plus petit que size donc on i++ pour avoir des grandes grilles
    //  || size * size pour compléter la grille de 4x4 = 16, comme ds l'exemple
    for(let i=0; i < size * size; i++) {
    // création de l'élement div avec la classe 'pixel' et ajout du nouveau element à container
        const div = document.createElement('div')
        div.classList.add('pixelDraw')

        // function pour dessiner
        div.addEventListener('mouseover',function(){
            // empêche de dessiner si on ne clique pas avec la souris
            if(!draw) return
            div.style.backgroundColor = colorPick.value
        })
        // permet de dessiner avec toutes les couleurs values et de recolorier sur ce qu'on a déja colorié
        div.addEventListener('mousedown',function(){
            div.style.backgroundColor = colorPick.value
        })
        container.appendChild(div)
    }
};

// draw seulement quand on clique sur la souris et quand on clique pas, on dessine pas
window.addEventListener("mousedown",function(){
    draw = true
})

window.addEventListener("mouseup",function(){
    draw = false
})

// reset function
function resetCanva(){
    container.innerHTML ='';
    Grid(size)
}

// ecoute la fonction resetCanva
resetBtn.addEventListener('click', resetCanva);

// resize the canva when typing it
sizeEl.addEventListener('keyup',function(){
    size = sizeEl.value
    resetCanva()
})

Grid(size)
