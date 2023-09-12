const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldrá bien!';
            break;
        case 2:
            resp = 'Ten fe en la familia!';
            break;
        case 3:
            resp = 'ya nos cargo la v*rga!';
            break;
        case 4:
            resp = 'Si nos va a llevar que nos lleve en limusina!';
            break;
        case 5:
            resp = 'Ira carnal la neta todos nos vamos a morir!';
            break;
        case 6:
            resp = 'El que no arriesga no gana!';
            break;
        case 7:
            resp = 'Todo sea por la anécdota!';
            break;
        default:
            resp = 'No lo sé';
    } 
    respuesta.innerHTML = resp;
}