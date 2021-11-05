<template>
  <div class="calc">
    <div>
      <input v-model.trim.number="num1" type="text" />＋
      <input v-model.trim.number="num2" type="text" />= {{ answer }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex03Component extends Vue {
  private num1 = "";
  private num2 = "";
  //   private answer = "";

  //   private answer = parseInt(this.num1) + parseInt(this.num2);

  get answer() {
    if (this.num1 !== null && this.num2 !== null) {
      return this.num1 + this.num2;
    } else {
      return null;
    }
  }
}
</script>

<style></style>
