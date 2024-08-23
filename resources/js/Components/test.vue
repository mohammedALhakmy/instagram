<template>
    <div>
        <button @click="showOverlay = true">Show Overlay</button>
        <ShowPostOptionsOverlay v-if="showOverlay" @close="handleClose" @deleteSelected="handleDelete" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ShowPostOptionsOverlay from '@/Components/ShowPostOptionOverlay.vue';

let showOverlay = ref(false);

const handleClose = () => {
    showOverlay.value = false;
};

const handleDelete = () => {
    showOverlay.value = false;
};
</script>
