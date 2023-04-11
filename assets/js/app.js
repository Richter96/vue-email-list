

const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Lista di mail',
        url: 'https://flynn.boolean.careers/exercises/api/random/mail'
      }
    },

    mounted() {
        
    },
  }).mount('#app')
