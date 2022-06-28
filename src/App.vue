<template>
  <div>
    <ul>
      <li>Написать директиву, по аналогии с библиотекой  v-click-outside</li>
      <ul>
        <li>директива регистрируется глобально</li>
        <li>директива вызывает функцию только тогда, когда было вызвано событие click, но вне текущего элемента</li>
      </ul>
    </ul>
    <h2 v-click-outside="test">{{ title }}</h2>
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