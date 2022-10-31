import React from 'react'

interface Props {
  anime: Anime
}

interface ItemProps {
  label: string
  content: string
}

const AnimeSide: Component<Props> = ({ anime }) => {
  return (
    <div className="w-1/3 h-100">
      <div className="bg-white border shadow px-4 py-8">
        <h2 className="font-semibold mb-2">Details de {"l'anime"}</h2>
        <ul className="space-y-2 text-sm table">
          <Item label="Id" content={anime.id.toString()} />
          {anime.titles?.en && <Item label="Anglais" content={anime.titles.en} />}
          {anime.titles?.en_jp && <Item label="Japonais" content={anime.titles.en_jp} />}
          {anime.titles?.ja_jp && (
            <Item label="Japonais (Romaji)" content={anime.titles.ja_jp} />
          )}
          {anime.type && <Item label="Type" content={anime.type} />}
          <Item label="Episodes" content={anime.episode.count?.toString() || 'Inconnu'} />
          {
            <Item
              label="Durée"
              content={
                anime.episode.length ? `${anime.episode.length} minutes` : 'Inconnu'
              }
            />
          }
          {anime.status && <Item label="Status" content={anime.status} />}
        </ul>
      </div>
    </div>
  )
}

const Item: Component<ItemProps> = ({ label, content }) => (
  <li className="text-sm">
    <strong>{label} : </strong>
    <span>{content}</span>
  </li>
)

export default AnimeSide
