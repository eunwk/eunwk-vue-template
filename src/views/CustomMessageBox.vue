<template>
    <div>
        <section-title title="MessageBox" />
        <section-title depth="2" title="메시지 제목만 있는 경우, 기본 type Information" />
        <MessageBox title="Message Box"/>

        <section-title depth="2" title="button (버튼 block), type='sucess'" />
        <MessageBox title="회원가입을 축하드립니다.">
            <v-btn to="/" color="primary" block>Home</v-btn>
        </MessageBox>

        <section-title depth="2" title="description + button, type='error'" />
        <MessageBox title="Error" desc="알수없는 에러가 발생했습니다. 잠시 후 다시 시도해 주세요" type="error">
            <v-btn to="/" color="primary">Home</v-btn>
            <v-btn to="/" color="secondary">Contact Us</v-btn>
        </MessageBox>

        <section-title depth="2" title="description + button, type='warning'" />
        <MessageBox title="Warning" desc="잘못된 시도입니다." type="warning">
            <v-btn to="/" color="primary">Home</v-btn>
            <v-btn to="/" color="secondary">Contact Us</v-btn>
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
import SectionTitle from '@/components/SectionTitle';
import MessageBox from '@/components/MessageBox';

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

<style scoped lang="scss">
</style>
