<template>
  <div class="container">
    <div class="form">
      <div v-if="name == ''" class="nullAlert">名前が入力されていません</div>
      <div>名前：<br /><input type="text" v-model="name" /></div>
      <div v-if="age == ''" class="nullAlert">年齢が入力されていません</div>
      <div>年齢：<br /><input type="number" v-model="age" /></div>
      <div v-if="comment == ''" class="nullAlert">
        コメントが入力されていません
      </div>
      <div>
        コメント：<br /><textarea
          v-model="comment"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <hr />
      <div>入力値：</div>
      <div>名前：{{ name }}</div>
      <div>年齢：{{ age }}</div>
      <div>
        コメント：<br /><br />
        <pre>{{ comment }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ex05Component extends Vue {
  private name = "";
  private age = "";
  private comment = "";
}
</script>

<style>
.nullAlert {
  color: red;
}

.container {
  text-align: center;
}

.container {
  text-align: left;
  display: inline-block;
}
</style>
