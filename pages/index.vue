<script setup lang="ts">
import Demo from '~/components/Demo.vue';
import Position from '~/components/Position.vue';
import type {StandingsResponse} from '~/types/football.ts';
import { computed } from 'vue';
import { table } from "~/styled-system/recipes";
import { css } from "~/styled-system/css";

const config = useRuntimeConfig()
config.public.apiToken

const { data, pending, error } = await useFetch<StandingsResponse>("https://api.football-data.org/v4/competitions/FL1/standings", {
  headers: {
    "X-Auth-Token": "3e97d843951d407485d76fdfcf2e4bcc"
  }
})

const seasonString = computed(() => {
  if (!data.value?.season) return '';
  const startYear = new Date(data.value.season.startDate).getFullYear();
  const endYear = new Date(data.value.season.endDate).getFullYear();
  return `${startYear}/${endYear}`;
});
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

