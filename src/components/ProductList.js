import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import EldenRingCover from '../assets/images/EldenRingCover.jpeg';
import FinalFantasy16Cover from '../assets/images/FFXVICover.jpg';
import PokemonScarletCover from '../assets/images/PokemonCover.jpg';
import DemonSoulsCover from '../assets/images/DemonSoulsCover.jpeg';
import GTAVCover from '../assets/images/GTAVCover.jpeg';
import FC24Cover from '../assets/images/FC24.jpeg';
import Madden25Cover from '../assets/images/Madden25.jpeg';
import Civilization6Cover from '../assets/images/Civ6Cover.jpg';

const games = [
  {
    id: 1,
    name: 'Elden Ring',
    image: EldenRingCover,
    price: 69.99,
    rating: 5,
    description: 'Elden Ring is an action RPG which takes place in the Lands Between, sometime after the Shattering of the titular Elden Ring. Players must explore and fight their way through the vast open-world to unite all the shards, restore the Elden Ring, and become Elden Lord.'
  },
  {
    id: 2,
    name: 'Final Fantasy 16',
    image: FinalFantasy16Cover,
    price: 69.99,
    rating: 4,
    description: 'Final Fantasy XVI follows the gruff, good-natured protagonist Clive Rosfield over 18 years as he transforms from honor-bound aristocrat into revolutionary and savior of Valisthea.'
  },
  {
    id: 3,
    name: 'Pokemon Scarlet',
    image: PokemonScarletCover,
    price: 59.99,
    rating: 4,
    description: "Pokémon Scarlet and Pokémon Violet are the first open-world RPGs in the Pokémon series. As you enjoy the hallmarks of the series—meeting, teaming up with, battling, training, and trading Pokémon—you'll be able to immerse yourself in a newly evolved adventure."
  },
  {
    id: 4,
    name: 'Demon Souls',
    image: DemonSoulsCover,
    price: 59.99,
    rating: 5,
    description: 'Demons Souls is set in Boletaria, a kingdom consumed by a dark being called the Old One, following its release through the use of forbidden Soul Arts. Players take on the role of a hero brought to Boletaria to kill its fallen king Allant and pacify the Old One.'
  },
  {
    id: 5,
    name: 'GTA V',
    image: GTAVCover,
    price: 29.99,
    rating: 4,
    description: 'Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa (Ned Luke), street gangster Franklin Clinton (Shawn Fonteno), and drug dealer and gunrunner Trevor Philips (Steven Ogg), and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals'
  },
  {
    id: 6,
    name: 'FC 24',
    image: FC24Cover,
    price: 79.99,
    rating: 3,
    description: "EA's new FC IQ feature reimagines the way in which formations work, with presets used for your initial framework, before player roles add fluidity and diversity off the ball. Much like last year's PlayStyles, these roles directly govern movement and decision making"
  },
  {
    id: 7,
    name: 'Madden 25',
    image: Madden25Cover,
    price: 79.99,
    rating: 3,
    description: "With this year's feature set, which includes Physics-Based Tackling powered by BOOM Tech, Signature styles, new mechanics with ball carriers, catching and pre-play, and a focus on football fundamentals within blocking, playbooks, and more, players will have more control than ever before in Madden NFL 25."
  },
  {
    id: 8,
    name: 'Civilization 6',
    image: Civilization6Cover,
    price: 39.99,
    rating: 4,
    description: 'Civilization VI is a turn-based strategy video game in which one or more players compete alongside computer-controlled AI opponents to grow their individual civilization from a small tribe to control the entire planet across several periods of development.'
  }
];

function ProductList({ searchTerm }) {
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredGames.map(game => (
        <ProductCard
          key={game.id}
          name={game.name}
          image={game.image}
          price={game.price}
          rating={game.rating}
          description={game.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
