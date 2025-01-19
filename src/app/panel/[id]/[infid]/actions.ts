'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function updateInfraction(guildId: string, infractionId: string, data: any) {
  const res = await fetch(
    `${process.env.SITE}/api/infractions/${guildId}/${infractionId}/update`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookies().toString()
      },
      body: JSON.stringify(data),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to update infraction')
  }

  revalidatePath(`/panel/${guildId}/${infractionId}`)
  return res.json()
}
