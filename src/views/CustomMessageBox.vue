<template>
    <div>
        <section-title title="MessageBox" />
        <section-title depth="2" title="메시지 제목만 있는 경우" />
        <MessageBox title="Message Box"/>

        <section-title depth="2" title="description + button, type='error'" />
        <MessageBox title="Error" desc="로그인이 필요합니다." type="error">
            <v-btn to="/" color="primary">Home</v-btn>
            <v-btn to="/login" color="secondary">Login</v-btn>
        </MessageBox>

        <section-title depth="2" title="description + button (버튼 block), type='forbidden'"/>
        <MessageBox title="No Authorization" desc="권한이 없습니다. 관리자에게 문의하세요."  type="forbidden">
            <v-btn to="/" block color="secondary">Home</v-btn>
        </MessageBox>

        <section-title depth="2" title="description + button (버튼 block), type='empty'"/>
        <MessageBox title="404 Not Founded" desc="파일을 찾을 수 없습니다." type="empty">
            <v-btn to="/" block color="secondary">Home</v-btn>
        </MessageBox>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import MessageBox from '@/components/MessageBox.vue';

export default {
    name: 'CustomMessageBox',
    components: {
        SectionTitle,
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
