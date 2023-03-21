import React from 'react'
import { notFound } from 'next/navigation'

import { animeModel } from 'models'

interface Props {
  params: {
    slug: string
  }
}

export default async function AnimeCategoriesPage({ params }: Props) {
  const anime = await animeModel.findBySlug(params.slug)
  if (!anime) notFound()

  return (
    <div>
      <h1 className="text-xl font-black text-center">Categories</h1>
    </div>
  )
}
