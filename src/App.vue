<template>
  <div>
    <ul>
      <li>Написать директиву, по аналогии с библиотекой  v-click-outside</li>
      <ul>
        <li>директива регистрируется глобально</li>
        <li>директива вызывает функцию только тогда, когда было вызвано событие click, но вне текущего элемента</li>
      </ul>
    </ul>
    <div v-click-outside="test" class="container">
      <button>{{ title }}</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const title = ref('Hello')
    const test = () => {
      title.value += '!'
    }

    return {
      title,
      test
    }
  }
 
}
</script>

<style>
  .container {
    width: 200px;
    height: 200px;
    background: lightblue;
  }
</style>