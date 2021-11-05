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
    <div class="notIncludeTax">税抜価格：{{ notIncludeTax }}円</div>
    <div class="IncludeTax">税込価格：{{ IncludeTax }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex04Component extends Vue {
  private price1 = "";
  private price2 = "";
  private price3 = "";

  get notIncludeTax() {
    // if (!this.price1 && !this.price2 && !this.price3) return 0;
    // 数字が入っていないのにparseINTで返しているのでNaNが出る。
    return parseInt(this.price1 + this.price2 + this.price3).toLocaleString();
    // まだ数値が入っていなくて数値に編kなんできないためNanを返している。
    //   .toString()
    //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  get IncludeTax() {
    if (!this.price1 && !this.price2 && !this.price3) return 0;
    return Math.floor(
      parseInt(this.price1 + this.price2 + this.price3) * 1.1
    ).toLocaleString();
    //   .toString()
    //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>

<style></style>
