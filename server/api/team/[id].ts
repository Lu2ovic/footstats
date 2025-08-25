import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const id = event.context.params?.id
  if (!id) return { error: 'Missing team id' }

  const res = await $fetch(`https://api.football-data.org/v4/teams/${id}`, {
    headers: {
      'X-Auth-Token': process.env.NUXT_API_TOKEN!
    }
  })

  return res
})
