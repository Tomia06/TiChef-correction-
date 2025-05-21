fetch("data.json")
    .then(response => response.json())
    .then(data => {
        afficher(data);
    });

// role : Afficher la recette 
// parametre : une recette (tableau) 
// return : rien 
function afficher(tableau) {
   // let recherche = tableau.filter()
    tableau.forEach(recette => {
        let noms = recette.nom
        let imgs = recette.img
        let tempsPrepa = recette.tempPreparation
        let tempsCuisson = recette.tempCuisson
        let portionsPerso = recette.portions
        let ingredientRecette =""
        let etapeRecette = ""

        recette.ingredients.forEach(ingredient => {
            ingredientRecette += 
            `<li>${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`;

        });
        recette.etapes.forEach(etape => {
            etapeRecette +=
            `<li>${etape.descEtape}</li>`
        });

                document.getElementById("recetteContainer").innerHTML += `
                   <section class="container">
        <div class="card">
            <div class="flex gap16 align-center">
                <h1>${noms}</h1>

                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                        share
                    </span></a>

            </div>
            <!-- 3 colonnes -->
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3 small-12 medium-6">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src=${imgs[0]} alt="" class="responsive">
                            <div class="legende">${noms}</div>
                        </div>
                        <div class="large-4">
                            <img src=${imgs[1]} alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src=${imgs[2]} alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src=${imgs[3]} alt="" class="responsive">
                        </div>
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3 small-12 medium-6">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                                restaurant
                            </span>${portionsPerso}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                                alarm
                            </span>${tempsPrepa}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                                local_fire_department
                            </span>${tempsCuisson}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                            Cette recette peut être adaptée en fonction de vos préférences en matière d'épices.
                            N'hésitez pas à ajouter plus de légumes ou à ajuster le niveau de piquant en ajoutant des
                            flocons de piment ou des piments frais.
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                        ${ingredientRecette}
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6 small-12 medium-6">
                    <h2>Etapes</h2>
                    <ol>
                       ${etapeRecette}
                    </ol>
                </div>
            </div>
        </div>
    </section>
            
   `

    });
}

/*
function prendreValeur(){
let donnee = document.getElementById("searchBar");

donnee.addEventListener("change", () => {
    const input = donnee.value.toLowerCase();

    data.forEach(mot => {
        let chercher = mot.nom.toLowerCase().split(" ");

        chercher.forEach(cher => {
            if (cher === input) {
                console.log("Trouvé :", mot.nom);
            }
        });
    });
});}*/

fetch("articles-data.json")
    .then(response => response.json())
    .then(articlesData => {
         afficher2(articlesData)
    })

function afficher2(tableau){
    tableau.forEach(article => {
        let nom = article.titre
        let date = article.date
        let image = article.img
        let auteur = article.auteur
        let resume = article.resume
       document.getElementById("article").innerHTML += `
            <div class="card flex justify-between large-6" data-aos="fade-up">
            <div class="large-6">
            <img src=${image} alt="image de l'article" class="large-12">
            </div>
            <div class=large-6>
                <h2>${nom}</h2>
                <div class="flex justify-between gap16">
                    <p>${date}</p>
                    <p>${auteur}</p>
                </div>
                <p>${resume}</p>
                <a href="">Lire l'article</a>
            </div>
        </div>
       `
    });
}