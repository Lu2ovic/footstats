<script setup lang="ts">
import type {TableItem} from '~/types/football.ts';

const props = defineProps<{
    stats: TableItem
}>()
</script>

<template>
    <tr>
        <td>{{ props.stats.position }}</td>
        <td><img :src="props.stats.team.crest" :alt="`Logo de ${props.stats.team.name}`"  /> <span>{{ props.stats.team.name }}</span></td>
        <td>{{ props.stats.playedGames }}</td>
        <td>{{ props.stats.won }}</td>
        <td>{{ props.stats.draw }}</td>
        <td>{{ props.stats.lost }}</td>
        <td>{{ props.stats.goalsFor }}</td>
        <td>{{ props.stats.goalsAgainst }}</td>
        <td>{{ props.stats.goalDifference }}</td>
        <td>{{ props.stats.points }}</td>
    </tr>
</template>