import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('click-outside', {
    mounted(el, binding) {
        document.addEventListener('click', (e) => {
            if (e.target !== el && !el.contains(e.target)) {
                binding.value() 
            }
        })
    }
})

app.mount('#app')
