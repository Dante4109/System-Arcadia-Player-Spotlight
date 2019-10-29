<template>
  <div id="app">
    <PlayerInfo/>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
import PlayerInfo from './components/PlayerInfo'

export default {
  name: 'App',
  components: {
    PlayerInfo
  },
  data() {
      return {
        players: [],
  }
        
        },
    
        mounted() {
            fetch("http://rest.learncode.academy/api/ddr/players")
            .then(response => response.json())
            .then((data) => {
                this.players = data; 
        })
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
