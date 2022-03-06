import React, { useEffect, useMemo } from 'react';
import Error from 'next/error';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { useLayoutContext } from 'context/layout.context';
import { useToggle } from 'hooks';
import { routes } from 'ressources/routes';
import Title from 'components/layouts/Title';
import KitsuButton from 'components/common/KitsuButton';
import Button from 'components/common/Button';
import EditAnimesEntries from 'components/modal/EditAnimesEntries';
import Header from 'components/layouts/Header';

export interface AnimeLayoutProps {
  anime: Anime;
  error?: ErrorPage;
}

type tab = { label: string; path: string };

const TABS: Array<tab> = [
  { label: 'Résumé', path: '' },
  { label: 'Catégories', path: '/categories' },
  { label: 'Discussions', path: '/discussions' },
  { label: 'Saga', path: '/saga' },
  { label: 'Episodes', path: '/episodes' },
  { label: 'Personnages', path: '/characters' },
];

const NavLink: Component<{ href: string; children: string }> = ({ href, children }) => {
  const router = useRouter();
  const active = useMemo<boolean>(() => router.asPath === href, [router.asPath, href]);

  return (
    <Link href={href}>
      <a
        className={classnames(
          'block px-4 py-2 font-medium text-md transition duration-500 hover:bg-gray-200 hover:text-black',
          { 'bg-white text-gray-300': !active, 'bg-gray-50 text-gray-700': active }
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const AnimeLayout: Component<AnimeLayoutProps & { children: NodeR }> = ({
  children,
  anime,
  error,
}) => {
  const {
    activeTransparentState: [_, setHeaderTransparent],
  } = useLayoutContext();

  const [openModal, toggleModal] = useToggle();

  useEffect(() => {
    setHeaderTransparent(true);

    return () => setHeaderTransparent(false);
  }, [setHeaderTransparent]);

  if (error) return <Error statusCode={error.code} title={error.message} />;

  return (
    <>
      <Title>{anime.canonicalTitle}</Title>
      <Header />
      <main>
        <div className="min-h-screen pb-16">
          <div className="w-full">
            <div className="relative w-full h-[450px]">
              <div className="fixed -z-10 w-full h-[450px] bg-primary-dark">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${anime.cover?.small}')` }}
                >
                  <div className="w-full h-full bg-black bg-opacity-40" />
                </div>
              </div>
            </div>
            <nav className="relative bg-white p-0 w-full">
              <div className="flex justify-center divide-x-2 divide-gray-200">
                {TABS.map((tab, index) => (
                  <NavLink
                    key={index}
                    href={`${routes.animes.list}/${anime.slug}${tab.path}`}
                  >
                    {tab.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
          <div className="w-full bg-gray-50 z-100">
            <div className="mx-auto w-full max-w-[1150px]">
              <div className="sticky float-right w-200 top-[230px]">
                <div className="relative w-[214px] top-[-150px]">
                  <div className="w-full shadow h-[304px] bg-kitsu mb-2">
                    {anime.poster?.small && (
                      <Image
                        src={anime.poster.small as string}
                        width={214}
                        height={304}
                        alt="test"
                      />
                    )}
                  </div>
                  <div className="border w-full border-gray-200 p-2">
                    <div className="flex flex-col space-y-2">
                      <div>
                        <KitsuButton slug={anime.slug} />
                      </div>
                      <div>
                        <Button outline color="amber" onClick={toggleModal}>
                          Ajouter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-[210px]">
                <div className="w-full py-5">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <EditAnimesEntries anime={anime} isOpen={openModal} toggle={toggleModal} />
    </>
  );
};

export default AnimeLayout;
