<template>
  <div class="cashier">
    <form>
      <div v-for="i of itemPrices.length" v-bind:key="i">
        <input type="number" v-model.number="itemPrices[i]" />
        <button type="button" v-on:click="onDeleteItems(i)">削除</button>
      </div>
      <button type="button" v-on:click="onAddItems">追加</button>
    </form>
    <div>税抜き価格：{{ notIncludeTax.toLocaleString() }}円</div>
    <div>税込み価格：{{ IncludeTax.toLocaleString() }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex06Component extends Vue {
  private itemPrices = new Array<number>();

  onAddItems() {
    this.itemPrices.push(0);
  }

  onDeleteItems(i: number) {
    this.itemPrices.splice(i, 1);
  }

  get notIncludeTax() {
    let includeTax = 0;
    for (let itemPrice of this.itemPrices) {
      includeTax += itemPrice;
    }
    return includeTax;
  }

  get IncludeTax() {
    return Math.floor(this.notIncludeTax * 1.1);
  }
}
</script>

<style></style>
