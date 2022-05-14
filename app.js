const app = Vue.createApp({
    template:
    /*html*/
    `<h1>Hello Vue3 {{ myName }}</h1>`,
    data() {
        return {
            myName: 'Ken'
        }
    }
})
app.mount('#app')