import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Transition } from '@headlessui/react';
import { FaHeart, FaStar } from 'react-icons/fa';

import { Anime } from '@types';
import { routes } from '@lib/constants';

interface Props {
  anime: Anime;
  index: number;
}

interface AnimePopupProps {
  anime: Anime;
  isOpen: boolean;
  position: 'left' | 'right';
}

const AnimePopup: React.FunctionComponent<AnimePopupProps> = ({
  anime,
  isOpen,
  position,
}) => {
  const { synopsis, canonicalTitle, season_year, rating, popularity, type } = anime;

  const styles = useMemo(() => {
    const styles = {};
    styles[position] = '105%';

    return styles;
  }, [position]);

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div
        className="absolute top-0 right-[105%] w-400 h-[103%] z-50 bg-kitsu rounded shadow-lg p-2"
        style={styles}
      >
        <div className="flex justify-between m-2">
          <h3 className="text-white text-2xl font-medium">
            {canonicalTitle}
            <span className="text-gray-400 text-sm"> ({type}) </span>
          </h3>
          <span className="text-gray-400 text-xl mx-2 my-auto">{season_year}</span>
        </div>
        <div className="flex justify-between">
          {rating.average ? (
            <div
              className={`m-2 text-lg ${
                rating.average >= 75
                  ? 'text-green-500'
                  : rating.average >= 50
                  ? 'text-yellow-500'
                  : 'text-red-400'
              }`}
            >
              Note moyenne : {rating.average}
            </div>
          ) : (
            <div />
          )}
          {popularity.count && (
            <div className="text-lg m-2 text-gray-300">
              {popularity.count} utilisateur
            </div>
          )}
        </div>
        <div className="flex justify-between m-2">
          {rating.rank ? (
            <div className="flex justify-start text-md">
              <i className="text-yellow-400">
                <FaStar size={20} />
              </i>
              <span className="text-white mx-2">#{rating.rank} le mieux noté</span>
            </div>
          ) : (
            <div />
          )}
          {popularity.rank ? (
            <div className="flex justify-end">
              <span className="text-white mx-2">
                #{popularity.rank} le plus populaire
              </span>
              <i className="text-red-500">
                <FaHeart size={20} />
              </i>
            </div>
          ) : null}
        </div>
        <div className="m-2">
          <p className="text-truncate overflow-hidden text-gray-200 text-light text-justify">
            {synopsis}
          </p>
        </div>
      </div>
    </Transition>
  );
};

const AnimeCard: React.FunctionComponent<Props> = ({ anime, index }) => {
  const { slug, poster, canonicalTitle } = anime;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full mx-auto px-2" style={{ width: 250, height: 340 }}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="my-3 bg-primary shadow hover:shadow-lg cursor-pointer border rounded-b rounded-lg"
      >
        <Link href={`${routes.animes}/${slug}`}>
          <a>
            <div className="flex justify-center">
              <Image
                src={poster.small}
                width={250}
                height={340}
                alt={canonicalTitle}
                className="mx-auto"
              />
            </div>
            <h3 className="text-center text-white font-bold py-1 truncate px-1">
              {canonicalTitle}
            </h3>
          </a>
        </Link>
      </div>
      <AnimePopup
        anime={anime}
        isOpen={open}
        position={[0, 1].includes(index % 4) ? 'left' : 'right'}
      />
    </div>
  );
};

export default AnimeCard;
