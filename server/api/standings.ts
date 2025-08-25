export default defineEventHandler(async (event) => {
    const res = await $fetch("https://api.football-data.org/v4/competitions/FL1/standings", {
      headers: {
        "X-Auth-Token": process.env.NUXT_API_TOKEN!,
      },
    });
  
    return res;
  });
  