<template>
<div>
    <h1>player Info</h1>
    <h2>Player: {{ players }} </h2>
</div>    
</template>

<script>
import PlayerStore from "../stores/PlayerStore"
import axios from 'axios'

const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default {
        data()  {
            return {
                players: [],
            };
        },
        async created() {
            try {
                const res = await axios.get(baseURL);

                this.players = res.data;
            } catch (e) {
                console.error(e);
            }
        },

        methods:{

    }

};
    
</script>

<style scoped>
h1 {
color: green
}
</style>