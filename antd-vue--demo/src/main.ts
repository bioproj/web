import { createApp, ref } from 'vue'
// import './style.css'
import App from './App.vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
import { Button, message } from 'ant-design-vue';

// createApp(App).mount('#app')


// const app = createApp(App);
// app.use(Antd).mount('#app');

const app = createApp({
    setup() {
      message.success("1111111111")
      const text = ref('Hello Vue!')
      return {
        text
      }
    }
})
app.use(Button)
app.component('app', App)
app.mount('#app')
