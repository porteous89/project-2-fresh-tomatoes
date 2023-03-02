const { Movie } = require('../models');

const movieData = [
    {
       "name": "Cocaine Bear",
        "poster": './public/posters/CocaineBear.jpeg',
        "genre": "Horror, Thriller, Comedy, Period",
        "year": 2023-02-24,
        "description": "An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "rating": 0,
        "comments": 1,
    },
    {
        "name": "Ant-Man and the Wasp",
         "poster": "./public/posters/AntMan.jpeg",
         "genre": "Action, Adventure, SCI-Fi",
         "year": 2023-02-17,
         "description": "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Jesus Revolution",
         "poster": "./public/posters/JesusRev.jpeg",
         "genre": "Drama, Period",
         "year": 2023-02-24,
         "description": "The true story of a national spiritual awakening in the early 1970's and its origins within a community of teenage hippies in Southern California.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Fast X",
         "poster": "./public/posters/FastX.jpeg",
         "genre": "Action, Adventure",
         "year": 2023-05-23,
         "description": "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Shazam! Fury of the Gods",
         "poster": "./public/posters/Shazam.jpeg",
         "genre": "blahAction, Adventure, SuperHero",
         "year": 2023-03-17,
         "description": "The film continues the story of teenage Billy Batson who, upon reciting the magic word 'SHAZAM!' is transformed into his adult Super Hero alter ego, Shazam.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Creed 3",
         "poster": "./public/posters/Creed3.jpeg",
         "genre": "Drama, Action, Sports",
         "year": 2023-03-03,
         "description": "Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Scream 6",
         "poster": "./public/posters/Scream.jpeg",
         "genre": "Horror, Thriller",
         "year": 2023-03-10,
         "description": "In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Knock at the Cabin",
         "poster": "./public/posters/KnockAtTheCabin.jpeg",
         "genre": "Drama, Horro, Mystery",
         "year": 2023-02-03,
         "description": "While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "Avatar: The Way of the Water",
         "poster": "./public/posters/Avatar.jpeg",
         "genre": "SCI-Fi, Action, Adventure",
         "year": 2022-12-16,
         "description": "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
         "rating": 0,
         "comments": 1,
     },
     {
        "name": "80 For Brady",
         "poster": "./public/posters/Brady.jpeg",
         "genre": "Comedy, Drama, Sport",
         "year": 2023-02-03,
         "description": "A group of friends made it their life-long mission to go to the Super Bowl and meet NFL superstar Tom Brady.",
         "rating": 0,
         "comments": 1,
     },
]

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
