<template>
  <div>
    <span v-for="hobby of hobbies" :key="hobby">{{ hobby }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex00Component extends Vue {
  private hobbies = ["スイム", "スイム2", "スイム3"];
}
</script>

<style></style>
