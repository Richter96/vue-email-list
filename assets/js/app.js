

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
        for (let i = 0; i < 10; i++) {
            console.log(i);
            axios.get(this.url)
            .then( r => {
                console.log(r);
                console.log(r.data.response)
                this.emails.push(r.data.response)
            })
        }
    },
  }).mount('#app')
