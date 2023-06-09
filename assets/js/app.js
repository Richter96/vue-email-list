

const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Lista di mail',
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emails:[],

      }
    },

    mounted() {
        for (let i = 0; i < 20; i++) {
            console.log(i);
            axios.get(this.url)
            .then( response => {
                console.log(response);
                console.log(response.data.response)
                this.emails.push(response.data.response)
            })
        }
    },
  }).mount('#app')
