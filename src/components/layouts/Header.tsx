import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classnames from 'classnames';

import { useUserContext } from '@context/user';
import { useLayoutContext } from '@context/layout';
import { routes } from '@lib/constants';
import DropDownByRef from '@layouts/DropDownByRef';
import SearchBar from '@components/common/SearchBar';

const DropDownItem = ({ href, children }) => (
  <Link href={href}>
    <a className="block w-full py-1.5 px-2 hover:bg-gray-100">{children}</a>
  </Link>
);

const DropDownExplore = () => {
  const button = useRef<HTMLButtonElement>();

  return (
    <div>
      <div>
        <button ref={button} type="button" className="text-white flex group">
          Explore
          <i className="mx-1 my-auto">
            <ChevronDownIcon className="h-4 w-4 transform transition rotate-90 group-focus:rotate-0" />
          </i>
        </button>
      </div>
      <DropDownByRef innerRef={button}>
        <div className="absolute top-5 py-1 w-32 bg-white ring-1 ring-black ring-opacity-5 text-gray-700 outline-none rounded-sm shadow-lg divide-y">
          <DropDownItem href={routes.animes}>Animes</DropDownItem>
          <DropDownItem href={routes.mangas}>Mangas</DropDownItem>
          <DropDownItem href={routes.sagas}>Sagas</DropDownItem>
        </div>
      </DropDownByRef>
    </div>
  );
};

const Header: React.FunctionComponent = () => {
  const { user, isLogin, signOut } = useUserContext();
  const {
    scrollPercent,
    activeTransparentState: [activeTransparent],
  } = useLayoutContext();

  const avatarRef = useRef<HTMLImageElement>();

  const [extend, setExtend] = useState<boolean>(false);
  const [headerTransparent, setHeaderTransparent] = useState<boolean>(activeTransparent);
  const [headerHovered, setHeaderHovered] = useState<boolean>(false);

  useEffect(() => {
    if (activeTransparent && !headerHovered) setHeaderTransparent(scrollPercent < 5);
    else setHeaderTransparent(false);
  }, [activeTransparent, scrollPercent, headerHovered]);

  return (
    <header
      onMouseOver={() => setHeaderHovered(true)}
      onMouseLeave={() => setHeaderHovered(false)}
      className={`z-90 fixed top-0 w-full shadow-lg transition-opacity duration-200 ${
        headerTransparent ? 'bg-gray-900 bg-opacity-20' : 'bg-primary bg-opacity-100'
      }`}
    >
      <nav>
        <div className="relative">
          <div className="hidden md:flex justify-between w-full h-14 px-5">
            <div className="text-center m-auto">
              <Link href={routes.home}>
                <a className="cursor-pointer font-bold text-3xl text-white">
                  {process.env.NEXT_PUBLIC_APP_NAME}
                </a>
              </Link>
            </div>
            <div className="flex justify-start items-center w-2/5 m-auto">
              <div className="mx-3">
                <DropDownExplore />
              </div>
              <span className="mx-3">
                <Link href={routes.forum}>
                  <a className="text-white"> Discussion </a>
                </Link>
              </span>
              <span className="mx-3">
                <Link href={routes.feedback}>
                  <a className="text-white"> Feedback </a>
                </Link>
              </span>
              {isLogin && user.isAdmin ? (
                <span className="mx-3">
                  <Link href={routes.admin}>
                    <a className="text-white"> Admin </a>
                  </Link>
                </span>
              ) : null}
            </div>
            <div className="flex justify-between w-2/5 px-3 my-auto">
              <SearchBar />
              {!isLogin ? (
                <div className="flex justify-around text-white h-full my-auto mx-3">
                  <Link href={`${routes.authentification}/login`}>
                    <a className="mx-3 cursor-pointer">Connexion</a>
                  </Link>
                  <Link href={`${routes.authentification}/register`}>
                    <a className="mx-3 cursor-pointer">Inscription</a>
                  </Link>
                </div>
              ) : (
                <div className="my-auto">
                  <div className="cursor-pointer" ref={avatarRef}>
                    <Image
                      className="rounded-full"
                      src={user.avatarPath}
                      width={35}
                      height={35}
                      alt="avatar"
                    />
                  </div>
                  <DropDownByRef innerRef={avatarRef}>
                    <div className="absolute py-1 top-14 -right-8 text-right w-40 bg-white ring-1 ring-black ring-opacity-5 text-gray-700 z-50 outline-none rounded-sm shadow-lg divide-y">
                      <DropDownItem href={`${routes.users}/${user.login}`}>
                        Mon profile
                      </DropDownItem>
                      <DropDownItem href={`${routes.users}/${user.login}/settings`}>
                        Settings
                      </DropDownItem>
                      <div onClick={signOut}>
                        <span className="block w-full py-1.5 px-2 hover:bg-gray-100">
                          Déconnexion
                        </span>
                      </div>
                    </div>
                  </DropDownByRef>
                </div>
              )}
            </div>
          </div>

          <div className="block md:hidden h-14">
            <div className="h-14 flex justify-between">
              <div className="w-2/3  px-5 my-auto">
                <Link href={routes.home}>
                  <a className="cursor-pointer font-bold text-3xl text-white">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </a>
                </Link>
              </div>
              <div className="w-1/3 m-auto px-5 flex justify-end">
                <i onClick={() => setExtend(!extend)}>
                  <FaBars
                    className="text-white hover:text-gray-200 cursor-pointer"
                    size={32}
                  />
                </i>
              </div>
            </div>
            <div
              className={classnames(
                'bg-primary w-full transform ease-in-out duration-200',
                { 'h-36 translate-y-0': extend, 'translate-y-[-100px]': !extend }
              )}
            >
              {extend && (
                <div className="py-4 divide-y">
                  <div className="my-1 text-lg font-medium">
                    <DropDownExplore />
                  </div>
                  <div>
                    <Link href={routes.forum}>
                      <a className="text-white"> Discussion </a>
                    </Link>
                  </div>
                  <div>
                    <Link href={routes.feedback}>
                      <a className="text-white"> Feedback </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
