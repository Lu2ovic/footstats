<script setup lang="ts">
import Position from '~/components/Position.vue';
import type {StandingsResponse} from '~/types/football.ts';
import { computed, onMounted, onBeforeUnmount } from 'vue';
import { table } from "~/styled-system/recipes";
import { css } from "~/styled-system/css";

const data = useState<StandingsResponse | null>('standings', () => null);
const pending = useState('standingsPending', () => false);
const error = useState<Error | null>('standingsError', () => null);

async function fetchStandings() {
  pending.value = true;
  try {
    const { data: fetchData } = await useFetch<StandingsResponse>(
      "https://api.football-data.org/v4/competitions/FL1/standings",
      {
        headers: {
          "X-Auth-Token": "3e97d843951d407485d76fdfcf2e4bcc"
        }
      }
    );
    data.value = fetchData.value ?? null;
  } catch (err) {
    error.value = err as Error;
  } finally {
    pending.value = false;
  }
}

if (!data.value) {
  await fetchStandings();
}

let intervalId: NodeJS.Timeout;

onMounted(() => {
  // relance le fetch toutes les 5 min
  intervalId = setInterval(fetchStandings, 5 * 60 * 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const seasonString = computed(() => {
  if (!data.value?.season) return '';
  const startYear = new Date(data.value.season.startDate).getFullYear();
  const endYear = new Date(data.value.season.endDate).getFullYear();
  return `${startYear}/${endYear}`;
});

useSeoMeta({
  title: 'Classement de la Ligue 1 - Saison 2025/2026',
  ogTitle: 'Découvre le classement de la Ligue 1 édition 2025/2026',
  description: 'Regardez à quelle position se trouve l\'équipe que vous supportez. Vous avez accès au classement ainsi qu\'au statistique de chaque club de la Ligue 1 !',
  ogDescription: 'Accèdez au classement ainsi qu\'au statistique de chaque club de la Ligue 1 !',
  ogImage: '/images/ogimg.png',
})

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<template>
    <div v-if="data" :class="css({justifyItems: 'center', py: '4'})">
        <img :src="data.competition.emblem" :alt="`Logo de ${data.competition.name}`"  width="96" height="96"  :class="css({bg:'white', p: '1', borderRadius:'lg'})" />
        <h1>Classement de la {{ data.competition.name }} - Saison {{ seasonString }}</h1>
        <div :class="css({ w: '90%', overflowX: 'auto', m: '1', borderRadius: 'lg', justifyItems: {base: 'baseline',md: 'center' } })">
          <table :class="table({ variant: 'striped' })">
              <thead>
                  <tr>
                      <th>Position</th>
                      <th>Club</th>
                      <th>MJ</th>
                      <th>G</th>
                      <th>N</th>
                      <th>P</th>
                      <th>BP</th>
                      <th>BC</th>
                      <th>DB</th>
                      <th>Pts</th>
                  </tr>
              </thead>
              <tbody>
                <template v-for="team in data.standings[0]?.table">
                  <Position :stats="team"/>
                </template>
              </tbody>
          </table>
        </div>
    </div>
    <p v-if="pending">Chargement...</p>
    <p v-if="error">Erreur API</p>
</template>

