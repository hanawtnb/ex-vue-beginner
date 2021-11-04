<template>
  <div class="container">
    <div class="profile">
      <div>名前:{{ myName }}</div>
      <div>年齢:{{ myAge }}歳</div>
      <div>10年後の年齢:{{ ageIn10Years }}歳</div>
      <div>
        趣味:
        <span v-for="hobby of hobbies" v-bind:key="hobby">{{ hobby }}</span>
      </div>
      <div><a v-bind:href="url">自社ホームページ</a></div>
      <div><img v-bind:src="img" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex01Component extends Vue {
  private myName = "渡邊華";
  private myAge = 25;
  private ageIn10Years = this.myAge + 10;
  private hobbies = ["スイム", "バイク", "ラン"];
  private url = "https://www.rakus-partners.co.jp/";
  private img = "img/images.png";
}
</script>

<style>
.container {
  text-align: center;
  border: solid 1px black;
}
.profile {
  display: inline-block;
  text-align: left;
}
</style>
