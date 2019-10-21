Vue.component('player-component', { 
    props: ['player'],
    filters: {
        ageInOneYear(age) {
            return age + 1;
        },
        fullName(value) {
            return `${value.first} ${value.last}`;
        },    
    },
    methods: {
        decrmentAge(player) {
            player.age = player.age - 1;
        }

    },

    template: `
    <div>
        <h2>Name: {{player | fullName}}</h2>
        <h2>Age: {{player.age}}</h2>
    </div>
    `    
});




const app = new Vue({
        el: "#app",
        data: {
            players: [],
        
    },
    mounted() {
        console.log("mounted!!!");
        fetch("http://rest.learncode.academy/api/ddr/players")
        .then(response => response.json())
        .then((data) => {
            this.players = data; 
        })

    },

template: `
    <div>
        <player-component v-for="item in players" 
        <button> v-on:click"deletePlayer(player.id)">x</button>
        v-bind:player="item"/>
    </div>

    `
});