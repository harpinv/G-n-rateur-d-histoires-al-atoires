let Noms = ["Arthur", "Alexis", "Cathy", "Loic", "Fanny", "Lorraine", "Marine", "Gérémie"];
let Objets = ["une voiture", "une caisse", "un ordinateur", " une assiette", " une table", "un radiateur", "une cafetière", "un carton"];
let Temperatures = ["10 degrés", "7 degrés", "2 degrés", "23 degrés", "16 degrés", "12 degrés", "19 degrés", "28 degrés"];
let Lieux = ["à Paris", "à Lille", "à Valencienne", "à Douai", "à Lens", "à Arras", "à Cambrai", "à Maubeuge"];
let Verbes = ["chantent", "mangent", "courent", "boivent", "marchent", "dorment", "habitent", "paradent"];

//fonction pour choisir un noms aléatoire
function name() {
    let myAleatoire1 = Math.floor(Math.random() * 8);
    let myBloc1 = Noms[myAleatoire1];
    return myBloc1;
}

//fonction pour choisir un objets aléatoire
function object() {
    let myAleatoire2 = Math.floor(Math.random() * 8);
    let myBloc2 = Objets[myAleatoire2];
    return myBloc2;
}

//fonction pour choisir une température aléatoire
function temp() {
    let myAleatoire3 = Math.floor(Math.random() * 8);
    let myBloc3 = Temperatures[myAleatoire3];
    return myBloc3;
}

//fonction pour choisir un lieux aléatoire
function myLieux() {
    let myAleatoire4 = Math.floor(Math.random() * 8);
    let myBloc4 = Lieux[myAleatoire4];
    return myBloc4;
}

//fonction pour choisir un verbe aléatoire
function myVerbe() {
    let myAleatoire5 = Math.floor(Math.random() * 8);
    let myBloc5 = Verbes[myAleatoire5];
    return myBloc5;
}

let contenue = document.getElementById('contenue');
let valeur = document.getElementById('prenom');
let genere = document.getElementById('genere');

//fonction pour généré une histoire aléatoire
genere.addEventListener('click', function () {
    let para = document.createElement('p');
    para.innerText = valeur.value + " et " + name() + " " + myVerbe() + " " + myLieux() + " avec " + object() + " sous une température de " + temp() + ".";
    contenue.append(para);
})