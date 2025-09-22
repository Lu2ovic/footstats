<script setup lang="ts">
import { css } from "~/styled-system/css";
import { grid } from "~/styled-system/patterns";
import type { Player } from "~/types/team.ts";

const props = defineProps<{
  joueurs: Player[];
}>();
</script>

<template>
  <h2>Joueurs</h2>
  <div :class="css({display: 'grid',gridGap: '1', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', p:'1'})">
    <div v-for="joueur in props.joueurs" :class="css({ bg: 'blue.500', rounded: 'lg', justifyItems: 'center', p:'1'})">
      <img
        src="/public/images/sil.webp"
        alt="silhouette d'un joueur de football"
      />
      <ul>
        <li>
          Nom :
          <span :class="css({ color: 'blue.100' })">{{ joueur.name }}</span>
        </li>
        <li>
          Poste :
          <span :class="css({ color: 'blue.100' })">{{ joueur.position }}</span>
        </li>
        <li>
          Date de naissance :
          <span :class="css({ color: 'blue.100' })">{{
            joueur.dateOfBirth
          }}</span>
        </li>
        <li>
          Nationalité :
          <span :class="css({ color: 'blue.100' })">{{
            joueur.nationality
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
