<template>
  <div class="container">
    <div class="profile">
      <div>名前:{{ myName }}</div>
      <div>年齢:{{ myAge }}歳</div>
      <div>10年後の年齢:{{ ageIn10Years }}歳</div>
      <div>
        趣味:
        <span v-for="hobby of hobbies" v-bind:key="hobby"
          >{{ hobby }}&nbsp;
        </span>
      </div>
      <br />
      <div><a v-bind:href="url">自社ホームページ</a></div>
      <br />
      <div><img v-bind:src="img" /></div>
      <br />
      <button type="button" v-on:click="onclick" v-bind:disabled="cannotClick">
        ボタン
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex02Component extends Vue {
  private myName = "";
  private myAge = 0;
  private ageIn10Years = 0;
  private hobbies = new Array<string>();
  private url = "#";
  private img = "";
  private cannotClick = false;

  onclick(): void {
    this.myName = "渡邊華";
    this.myAge = 25;
    this.ageIn10Years = this.myAge + 10;
    this.hobbies = ["スイム", "バイク", "ラン"];
    this.url = "https://www.rakus-partners.co.jp/";
    this.img = "img/images.png";
    this.cannotClick = true;
  }
}
</script>

<style>
.container {
  text-align: center;
}
.profile {
  padding: 20px;
  display: inline-block;
  text-align: left;
  border: solid 1px black;
}
</style>
