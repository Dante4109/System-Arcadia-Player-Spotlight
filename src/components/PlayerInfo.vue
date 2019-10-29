<template>
<div>
    <h1>Player Info</h1>
        <div v-if="dataReady">
            <h2>First Name: {{ players[0].first }} </h2>
            <h2>Last Name: {{ players[0].last }} </h2>
            <h2>EAMUSE: {{ players[0].eamuse }} </h2>
            <h2>Age: {{ players[0].age }} </h2>
            <h2>Preffered Pronouns: {{ players[0].pronouns }} </h2>
            <h2>Home Region: {{ players[0].region }} </h2>
            <h2>Personal Best Record: {{ players[0].record }} </h2>
            <h2>Fun Facts: {{ players[0].facts }} </h2>
            <h2>{{id}}</h2>
        </div>

        <div v-if="!dataReady">
            <h2>loading...</h2>
        </div>

    </div>    
</template>

<script>
import PlayerStore from "../stores/PlayerStore"
import axios from 'axios'


//const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
var baseURL = ('http://localhost:3000/players')
export default {
       props: [
           'id',
           'eamuse',
       ], 
        
        
        data()  {
            return {
                dataReady: false,
                players: [],
            };
        },
        
    mounted() {
        console.log()
        this.getPlayer();
    },
    updated() {
        this.getPlayer();
    },

    methods: {
        async getPlayer() {
            try {
                var num = this.$props.id
                const res = await axios.get(baseURL + "?id=" + num);

                this.players = res.data;
                console.log(num)
                this.dataReady = true;
                }
                
            catch (e) {
                console.error(e);
                this.dataReady = false
            }
        }
    },
};
    
</script>

<style scoped>
h1 {
color: green
}
</style>