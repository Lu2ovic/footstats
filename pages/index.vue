<script setup lang="ts">
import Demo from '~/components/Demo.vue';
import Position from '~/components/Position.vue';
import type {StandingsResponse} from '~/types/football.ts';
import { computed } from 'vue';


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
    <div v-if="data">
        <img :src="data.competition.emblem" :alt="`Logo de ${data.competition.name}`"  />
        <h1>Classement de la {{ data.competition.name }}</h1><!--data.standings[0].table-->
        <table>
            <caption>Saison {{ seasonString }}</caption>
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
            <tbody v-for="team in data.standings[0]?.table">
                <Position :stats="team"/>
            </tbody>
        </table>
        <pre>{{ data }}</pre>
    </div>
    <p v-if="pending">Chargement...</p>
    <p v-if="error">Erreur API</p>
    <Demo/>
    <table>
        <caption>
            Front-end web developer course 2021
        </caption>
        <thead>
            <tr>
            <th >Person</th>
            <th >Most interest in</th>
            <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">Chris</th>
            <td>HTML tables</td>
            <td>22</td>
            </tr>
            <tr>
            <th scope="row">Dennis</th>
            <td>Web accessibility</td>
            <td>45</td>
            </tr>
            <tr>
            <th scope="row">Sarah</th>
            <td>JavaScript frameworks</td>
            <td>29</td>
            </tr>
            <tr>
            <th scope="row">Karen</th>
            <td>Web performance</td>
            <td>36</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <th scope="row" colspan="2">Average age</th>
            <td>33</td>
            </tr>
        </tfoot>
    </table>
</template>

