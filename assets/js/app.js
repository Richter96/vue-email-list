

const { createApp } = Vue

  createApp({
    data() {
      return {
        titolo: 'Lista di mail',
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailList:[],

      }
    },

    mounted() {

        axios.get(this.url)
        .then( r => {
            console.log(r);
            console.log(r.data.response)
            this.emailList.push(r.data.response)
        })
    },
  }).mount('#app')
