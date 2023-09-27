<template>
    <div class="position-group">
        <div class="player-position" v-for="(player, index) in numberOfPlayers" :key="index">
            <router-link :to="'/player/' + player.number">
                <div class="player-info">
                    <img :src="player.image" :alt="'VỊ TRÍ: ' + position" />
                    <p>{{ player.name }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        numberOfPlayers: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
    },
    // methods: {

    // },
};
</script>
  
<style scoped>
.position-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #ccc;
}

.player-position {
    border: 1px solid #ccc;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.player-info {
    text-align: center;
}

.player-info img {
    max-width: 120px;
    max-height: 120px;
}
</style>
  