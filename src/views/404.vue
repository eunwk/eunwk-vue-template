<template>
    <message-box title="404 Not Founded" desc="파일을 찾을 수 없습니다." type="empty">
        <v-btn to="/" block color="secondary">Home</v-btn>
    </message-box>
</template>

<script>
import MessageBox from '@/components/MessageBox.vue';

export default {
    name: 'NotPound',
    components: {
        MessageBox,
    },
    data() {
        return {
        };
    },
};

</script>

<style scoped>
</style>
