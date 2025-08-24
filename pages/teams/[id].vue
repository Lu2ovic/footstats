<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TeamResponse } from "~/types/team.ts";
import { css } from "~/styled-system/css";

const route = useRoute();

const { data, pending, error } = await useFetch<TeamResponse>(
  `https://api.football-data.org/v4/teams/${route.params.id}`,
  { headers: { "X-Auth-Token": "3e97d843951d407485d76fdfcf2e4bcc" } }
);
</script>

<template>
  <div v-if="data" :class="css({ justifyItems: 'center', py: '4' })">
    <img
      :src="data.crest"
      :alt="`Logo de ${data.name}`"
      width="96"
      height="96"
      :class="css({ bg: 'white', p: '1', borderRadius: 'lg' })"
    />
    <h1>
      {{ data.name }}
    </h1>
    <div :class="css({ borderRadius:'lg', bg: 'blue.600', w: '90%', m: '1', justifyItems: 'center' })">
        <ul>
            <li><span :class="css({color: 'blue.100'})">Date de création :</span> {{ data.founded }}</li>
            <li><span :class="css({color: 'blue.100'})">Nom du stade : </span>{{ data.venue }}</li>
            <li><span :class="css({color: 'blue.100'})">Adresse : </span>{{ data.address }}</li>
            <li><span :class="css({color: 'blue.100'})">Site du club : </span>{{ data.website }}</li>
            <li><span :class="css({color: 'blue.100'})">Entraineur : </span>{{ data.coach.name }}</li>
        </ul>
    </div>

    <pre>{{ data }}</pre>
    <NuxtLink to="/">Classement</NuxtLink>
  </div>
  <p v-if="pending">Chargement...</p>
  <p v-if="error">Erreur API</p>
</template>
