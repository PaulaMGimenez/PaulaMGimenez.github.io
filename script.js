



var  imagenes = ['Imagenes/carrusel/img1.jpg', 'Imagenes/carrusel/img2.jpg', 'Imagenes/carrusel/img3.jpg', 'Imagenes/carrusel/img4.jpg', 'Imagenes/carrusel/img5.jpg', 'Imagenes/carrusel/img6.jpg'],
cont = 0;


function carrusel(carrucelContainer){

            
            carrucelContainer.addEventListener('click', e=>{
            let atras=carrucelContainer.querySelector('.atras'),
                adelante = carrucelContainer.querySelector('.adelante'),
                img=carrucelContainer.querySelector('img'),
                tgt=e.target;

        if(tgt== atras){
            if(cont>0){
                img.src =imagenes[cont - 1 ];
                cont--;
            }else{
                img.src =imagenes[imagenes.length - 1];
                cont=(imagenes.length - 1);

            }
        
        }else if(tgt ==adelante){
            if(cont<imagenes.length - 1){
                img.src=imagenes[cont + 1 ];
                cont++;
            }else{
                img.src= imagenes[0];
                cont=0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let carrucelContainer =document.querySelector('.carrucelContainer');

    carrusel (carrucelContainer);
});



