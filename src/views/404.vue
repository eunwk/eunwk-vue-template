<template>
    <v-container class="body-container">
        <div class="card-box msg-box">
            <img src="@/assets/images/img_404.png" alt="not found" />
            <div class="txts">
                <h1>404 에러</h1>
                <p>페이지를 찾을 수 없습니다</p>
            </div>
            <div class="btn-area" block>
                <v-btn to="/" large color="blue-grey lighten-5" block>홈으로</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'NotPound',
    data() {
        return {
        };
    },
};

</script>

<style scoped>
.msg-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

img {
    margin-bottom: 30px;
}

.btn-area {
    width: 100%;
    margin-top: 30px;
}

</style>
