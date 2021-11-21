console.log('js ok');

const app = new Vue({
    el: '#app',
    data: {
        email: '',

    },

    

    created(){
        this.getEmail()
    },


    methods: {

        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
    
            console.log(response.data);

            this.email = response.data.response;

             })

            .catch(error => {
            
             console.log(error);
            
    });


        }
        
    }


});

