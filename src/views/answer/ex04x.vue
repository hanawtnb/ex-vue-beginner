<template>
  <div class="cashier">
    <div id="item1">
      <input type="number" name="item" v-model.trim.number="price1" />
    </div>
    <div id="item2">
      <input type="number" name="item" v-model.trim.number="price2" />
    </div>
    <div id="item3">
      <input type="number" name="item" v-model.trim.number="price3" />
    </div>
    <div class="notIncludeTax">
      税抜価格：{{ notIncludeTax.toLocaleString() }}円
    </div>
    <div class="IncludeTax">税込価格：{{ IncludeTax.toLocaleString() }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex04Component extends Vue {
  private price1 = 0;
  private price2 = 0;
  private price3 = 0;

  get notIncludeTax() {
    // if (!this.price1 && !this.price2 && !this.price3) return 0;
    return (this.price1 + this.price2 + this.price3).toLocaleString();
    // .toString()
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  get IncludeTax() {
    // if (!this.price1 && !this.price2 && !this.price3) return 0;
    // return Math.floor(
    return Math.floor((this.price1 + this.price2 + this.price3) * 1.1);

    // .toString()
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>

<style></style>
