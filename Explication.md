## Explication de VueJS

#### Dans un fichiers Vue Js on a 3 partie

    <ol>
        <li>Le template : Le code html</li>
        <li>Le Script : Le code javascript</li>
        <li>Le style : Le code css</li>
    </ol>

    #les directives 

    L:a directive V-for nous permet de boucler dans le template (le htmp d'une applicvation vueJs)

    Lorsque V-for boucle, il a besoin d'un identifiant qui est une clé et qu'on ecrit ":key"

    setup() : pour gerer le js

    Props : Une variable qui permet de contenir une donnée et la passé à un components enfant

    Une ref : permet de rendre une variable dinamyque, observable (à chaque fois que la variable va changer, tous ce qui est lié à cette dernière changera)

    En utilisant une ref, on ne peux plus appeler la valeur de la variable directement

    Computed : Une propriété calculée et observateurs elle nous permet d'utiliser le code JS (toute la logique renfermée dans une fonction) et de le retoiurner notre template (html)
V-model : Une directive qui permet de relier une data à un element du template