<template lang="">
    <div class="container">
        <h1>Chọn sơ đồ chiến thuật</h1>
        <select name="" id="" v-model="selectedTactic">
            <option v-for="tactic in tactics" :key="tactic.name" :value="tactic">
            {{ tactic.name }}
            </option>
        </select>
  </div>
  <div v-if="selectedPlayers.length > 0">
    <h2>Sơ đồ chiến thuật đã chọn: {{ selectedTactic.name }} .</h2>
    <div class="tactics-container">
      <FormatRow
      v-for="(positionGroup, rowIndex) in positionGroups" 
        :key="rowIndex"
        :number-of-players="positionGroup"
        :position="positionGroup[0].position"
      >
      </FormatRow>

      <!-- <div v-for="(positionGroup, rowIndex) in positionGroups" :key="rowIndex" class="position-group">
        <div v-for="(player, colIndex) in positionGroup" :key="colIndex" class="player-position">
          <div class="player-info">
            <img :src="player.image" :alt="player.name" />
            <p>{{ player.name }}</p>
          </div>  
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import FormatRow from './FormatRow.vue';

export default {
  name: 'TacticsList',
  components: {
    FormatRow
  },
  data() {
    return {
      tactics: [],
      players: [],
      selectedTactic: null,
      selectedPlayers: [],
    };
  },
  created() {
    this.tactics = [
      {
        name: "4-4-2",
        positions: ["G", "D", "D" , "D", "D", "M", "M", "M", "M", "F", "F"],
      },
      {
        name: "4-3-3",
        positions: ["G", "D", "D", "D", "D", "M", "M", "M", "F", "F", "F"],
      },
      {
        name: "4-2-4",
        positions: ["G", "D", "D", "D", "D", "M", "M", "F", "F", "F", "F"],
      },
      {
        name: "4-5-1",
        positions: ["G", "D", "D", "D", "D", "M", "M", "M", "M", "M", "F"],
      },
      {
        name: "4-2-3-1",
        positions: ["G", "D", "D", "D", "D", "M", "M", "F", "F", "F", "ST"],
      },
    ];
    this.players = [
      {
        number: 16,
        name: "Lionel Messi",
        position: "F",
        image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=",
      },
      {
        number: 17,
        name: "Cristiano Ronaldo",
        position: "ST",
        image:
          "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=",
      },
      {
        number: 18,
        name: "Lorenzo Insigne",
        position: "F",
        image: "https://www.pngmart.com/files/22/Insigne-PNG-Pic.png",
      },
      {
        number: 19,
        name: "Sadio Mané",
        position: "M",
        image:
          "https://www.pngmart.com/files/22/Sadio-Mane-PNG-Isolated-Pic.png",
      },
      { number: 1, name: "Thu mon 1", position: "G", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 2, name: "Hau ve 1", position: "D", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 3, name: "Tien ve 1", position: "M", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 4, name: "Tien dao 1", position: "F", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 5, name: "Hau ve 2", position: "D", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 6, name: "Hau ve 3", position: "D", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 7, name: "Tien ve star", position: "M", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 8, name: "Tien ve 2", position: "M", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 9, name: "Tien ve 3", position: "M", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 10, name: "Hau ve 4", position: "D", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 11, name: "TIen dao 3", position: "F", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 12, name: "Hau ve 5", position: "D", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 13, name: "Thu mon 2", position: "G", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 14, name: "Tien ve 4", position: "M", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
      { number: 15, name: "Tien dao 4", position: "F", image: "https://media.istockphoto.com/id/1046266742/vector/footballer-pixel-art-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=XlH1QjKAtlwOjZ-qz-t_YedcNcBcsLlUZdlB68YxJbU=" },
    ];
    //this.selectedTactic = this.tactics[0];
  },
  watch: {
    selectedTactic: "renderPlayers",
  },
  methods: {
    renderPlayers() {
      this.selectedPlayers = [];

      if (this.selectedTactic) {
        for (let position of this.selectedTactic.positions) {
          let player = this.getPlayer(position);
          if (player) {
            this.selectedPlayers.push(player);
          }
        }
      }
    },

    getPlayer(pos) {
      let availablePlayers = this.players.filter((p) => p.position === pos);
      let unselectedPlayers = availablePlayers.filter(
        (player) => !this.selectedPlayers.includes(player)
      );
      let player = unselectedPlayers[Math.floor(Math.random() * unselectedPlayers.length)];
      return player;
    },
  },
  computed: {
    positionGroups() {
      const groupedPlayers = {};
      for (const player of this.selectedPlayers) {
        if (!groupedPlayers[player.position]) {
          groupedPlayers[player.position] = [];
        }
        groupedPlayers[player.position].push(player);
      }

      // Chuyển danh sách thành mảng các nhóm
      return Object.values(groupedPlayers).reverse();
    },
  },
};
</script>

<style>
.tactics-container {
  width: 70%;
  margin: 0 auto;
}
</style>
