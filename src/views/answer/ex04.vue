<template>
  <div class="cashier">
    <div id="item1"><input type="text" name="item" v-model="price1" /></div>
    <div id="item2"><input type="text" name="item" v-model="price2" /></div>
    <div id="item3"><input type="text" name="item" v-model="price3" /></div>
    <div class="notIncludeTax">税抜価格：{{ notIncludeTax }}</div>
    <div class="IncludeTax">税込価格：{{ IncludeTax }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex03Component extends Vue {
  private price1 = "";
  private price2 = "";
  private price3 = "";

  get notIncludeTax() {
    return this.price1 + this.price2 + this.price3;
  }
}
</script>

<style></style>
