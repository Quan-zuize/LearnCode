<template>
    <div class="player-container">
        <h2>Chi tiết cầu thủ</h2>
        <div class="player-detail">
            <h2>{{ player.name }}</h2>
            <p>Number: {{ player.number }}</p>
            <p>Position: {{ player.position }}</p>
            <img :src="player.image" :alt="player.name" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerDetails',
    computed: {
        player_detail() {
            const playerId = Number(this.$route.params.id);
            const playerList = this.player; // Sử dụng danh sách cầu thủ từ props
            return playerList.find(player => player.number === playerId);
        },
    },
};
</script>

<style>
.player-container {
    width: 60%;
    margin: 0 auto;
    border: 2px solid steelblue;
    border-radius: 16px;
}

.player-detail {
    padding: 24px;
    font-size: large;
}

.player-detail img {
    max-width: 240px;
    max-height: 240px;
}
</style>