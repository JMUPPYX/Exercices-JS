// Écrivez une instruction switch qui attribue à la variable couleur la valeur "rouge", "vert" ou "bleu" en fonction de la valeur de la variable code. 
// Si code vaut 1, couleur doit valoir "rouge". Si code vaut 2, couleur doit valoir "vert". Si code vaut 3, couleur doit valoir "bleu". 
//Si code vaut une autre valeur, couleur doit valoir "inconnu".

let code = 1
let couleur

switch (code) {
    case 1:
        couleur = "rouge"
        break
        // break = on passe à la suite
    case 2:
        couleur = "vert"
        break
    case 3:
        couleur = "bleu"
        break
 // si la couleur n'est pas dans une case
    default:
        console.log("inconnu")
}
console.log(couleur) 
