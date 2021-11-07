<template>
  <div class="cashier">
    <form>
      <div v-for="itemList of itemPrices.length" v-bind:key="itemList.id">
        <input type="number" v-model.number="itemPrices[itemList]" />
        <button type="button" v-on:click="onDeleteItems(itemList)">削除</button>
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

  get notIncludeTax() {
    let notIncludeTax = 0;
    for (let itemPrice of this.itemPrices) {
      notIncludeTax += itemPrice;
    }
    return notIncludeTax;
  }

  get IncludeTax() {
    return Math.floor(this.notIncludeTax * 1.1);
  }

  onDeleteItems(itemList: number) {
    this.itemPrices.splice(itemList, 1);
  }

  onAddItems() {
    this.itemPrices.push(0);
  }
}
</script>

<style></style>
