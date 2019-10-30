<template>
<div>
    <h1>Player Info</h1>
        <div v-if="player[0]">
            <h2>First Name: {{ player[0].first }} </h2>
            <h2>Last Name: {{ player[0].last }} </h2>
            <h2>EAMUSE: {{ player[0].eamuse }} </h2>
            <h2>Age: {{ player[0].age }} </h2>
            <h2>Preffered Pronouns: {{ player[0].pronouns }} </h2>
            <h2>Home Region: {{ player[0].region }} </h2>
            <h2>Personal Best Record: {{ player[0].record }} </h2>
            <h2>Fun Facts: {{ player[0].facts }} </h2>
            <h2>{{player[0]}}</h2>
        </div>

        <div v-if="!player[0]">
            <h2>Player not found</h2>
        </div>

    </div>    
</template>

<script>
import PlayerStore from "../stores/PlayerStore";
import axios from 'axios';
import api from '@/services/api';
import userService from '@/services/userService';

//const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default {
       props: [
           'playerKey'
       ], 
        
        
        data()  {
            return {
                player: [],
            };
        },
    
    mounted() {
        this.players = this.getPlayer(this.$props.playerKey);
    },

    methods: {
        async getPlayer(playerKey) {
            const Player = await userService.fetchUser(playerKey)
            this.player = Player 
        }
        
    },

    watch: {
        $route(to, from) {
            this.players = this.getPlayer(this.$props.playerKey);
        }
    },
};
    
</script>

<style scoped>
h1 {
color: green
}
</style>