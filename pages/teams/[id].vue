<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TeamResponse } from "~/types/team.ts";
import { css } from "~/styled-system/css";

const route = useRoute();

const { data, pending, error } = await useFetch<TeamResponse>(
  `/api/team/${route.params.id}`
)

definePageMeta({
  pageTransition: {
    name: 'right'
  }
})
</script>

<template>
    <div>
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
            <div :class="css({ borderRadius:'lg', bg: 'blue.600', w: '90%', m: '4', p: '2', justifyItems: 'center' })">
                <ul>
                    <li>Date de création : <span :class="css({color: 'blue.100'})">{{ data.founded }}</span> </li>
                    <li>Nom du stade : <span :class="css({color: 'blue.100'})">{{ data.venue }}</span></li>
                    <li>Adresse : <span :class="css({color: 'blue.100'})">{{ data.address }}</span></li>
                    <li>Site du club : <a :href="data.website" target="_blank" rel="noopener" :class="css({color: 'blue.100'})">{{data.website }}</a></li>
                    <li>Entraineur : <span :class="css({color: 'blue.100'})">{{ data.coach.name }}</span></li>
                    <li>
                        <div>Compétitions jouées : </div>
                        <div v-for="compet in data.runningCompetitions" :class="css({color: 'blue.100'})">
                            <div :class="css({display: 'flex', alignItems:'center', gap: '4', ml: '8'})">
                                <div>{{ compet.name }}</div>
                                <img v-if="compet.emblem"
                                :src="compet.emblem"
                                :alt="`Logo de ${compet.name}`"
                                width="40"
                                height="40"
                                :class="css({ bg: 'blue.100', p: '1', borderRadius: 'lg' })"
                                />
                            </div>
                        </div>
                    </li>
                    <li :class="css({justifySelf: 'center'})"><NuxtLink to="/" :class="css({
                        display: 'inline-block',
                        bg: 'blue.800',
                        px: '4',
                        py: '2',
                        m:'4',
                        rounded: 'lg',
                        transition: 'all 0.2s',
                        _hover: { scale: '1.1' },
                        _active: { bg: 'blue.900' }
                        })">Voir le classement en Ligue 1</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <p v-if="pending">Chargement...</p>
        <p v-if="error">Erreur API</p>
    </div>
</template>
