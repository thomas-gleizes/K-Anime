import React, { useEffect } from 'react';
import { Visibility } from '@prisma/client';
import Error from 'next/error';
import Image from 'next/image';

import type { Page } from 'next/app';
import { useLayoutContext } from 'context/layout.context';
import { ssrHandler } from 'services/handler.service';
import { EntryModel, UserFollowModel, UserModel } from 'models';
import { EntriesMapper, UsersMapper } from 'mappers';
import { SsrError } from 'class/error';
import { errorMessage } from 'resources/constants';
import Title from 'components/layouts/Title';
import AnimeCard from 'components/common/anime/AnimeCard';

interface Props {
  user: User;
  entries: Entries;
  isCurrent: boolean;
  error?: ErrorPage;
}

export const getServerSideProps = ssrHandler<Props, { username: string }>(
  async ({ query, req }) => {
    const { username } = query;
    const { user: sessionUser } = req.session;

    const [user] = UsersMapper.one(await UserModel.findByUsername(username as string));
    if (!user) throw new SsrError(404, errorMessage.USER_NOT_FOUND);

    const visibility: Visibility[] = ['public'];
    if (user.id)
      if (user.id === sessionUser.id) visibility.push('limited', 'private');
      else {
        const [one, two] = await Promise.all([
          UserFollowModel.isFollow(user.id, sessionUser.id),
          UserFollowModel.isFollow(sessionUser.id, user.id),
        ]);

        if (one && two) visibility.push('limited');
      }

    const entries = EntriesMapper.many(
      await EntryModel.getByUser(user.id, visibility, {
        include: { anime: true },
      })
    );

    return {
      props: {
        user,
        isCurrent: user.id === sessionUser?.id,
        entries: entries,
      },
    };
  }
);

export const UserPage: Page<Props> = (props) => {
  const {
    activeTransparentState: [_, setHeaderTransparent],
  } = useLayoutContext();

  useEffect(() => {
    setHeaderTransparent(true);

    return () => setHeaderTransparent(false);
  }, [setHeaderTransparent]);

  if ('error' in props)
    return <Error statusCode={props.error.statusCode} title={props.error.message} />;

  const { user, isCurrent, entries } = props;

  return (
    <>
      <Title>{user.username}</Title>
      <div className="w-full">
        <div
          className="relative bg-center -mt-header h-400 bg-no-repeat bg-cover bg-clip-padding bg-primary"
          style={{ backgroundImage: `url('${user.backgroundPath}')` }}
        >
          <div className="absolute bottom-[10%] left-[10%] flex select-none">
            <Image
              className="rounded-full border-2 border-white"
              src={user.avatarPath}
              width={100}
              height={100}
              alt="big avatar"
            />
            <div className="mt-3 ml-2 select-none">
              <h2 className="text-2xl font-medium"> {user.username} </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 h-screen">
        <div className="grid grid-cols-4 max-w-1100 mx-auto">
          {entries.map((entry, index) => (
            <div key={index} className="my-3 mx-auto">
              <AnimeCard anime={entry.anime} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
