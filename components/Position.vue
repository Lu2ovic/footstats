<script setup lang="ts">
import type {TableItem} from '~/types/football.ts';
import { css } from "~/styled-system/css";

const props = defineProps<{
    stats: TableItem
}>()
</script>

<template>
    <tr>
        <td>{{ props.stats.position }}</td>
        <td>
            <NuxtLink :to="`/teams/${props.stats.team.id}`" :class="css({ display: 'flex', gap:'2', alignItems: 'center', _hover: {scale: '0.9'}, transition: 'all', transitionTimingFunction: 'ease-in-out', transitionDuration:'normal' })">
                <img :src="props.stats.team.crest" :alt="`Logo de ${props.stats.team.name}`" :class="css({w: '6', h: '6', objectFit: 'contain'})" />
                <span :class="css({ display: { base: 'none', md: 'inline' } })">{{ props.stats.team.name }}</span>
                <span :class="css({ display: { base: 'inline', md: 'none' } })">{{ props.stats.team.tla }}</span>
            </NuxtLink>
        </td>
        <td>{{ props.stats.playedGames }}</td>
        <td>{{ props.stats.won }}</td>
        <td>{{ props.stats.draw }}</td>
        <td>{{ props.stats.lost }}</td>
        <td>{{ props.stats.goalsFor }}</td>
        <td>{{ props.stats.goalsAgainst }}</td>
        <td :class="css({color: props.stats.goalDifference > 0 ? 'green.600' : props.stats.goalDifference < 0 ? 'red.600' : 'white', fontWeight: 'bold'})">{{ props.stats.goalDifference }}</td>
        <td>{{ props.stats.points }}</td>
    </tr>
</template>