<template>
    <div>
        <section>
            <section-title title='1Depth Title' depth="1"></section-title>
            <div class="box">Contents</div>
            <section-title title='2Depth Title' depth="2"></section-title>
            <div class="box">Contents</div>
            <section-title title='3Depth Title' depth="3"></section-title>
            <div class="box">Contents</div>
            <section-title title='4Depth Title' depth="4"></section-title>
            <div class="box">Contents</div>
        </section>
        <section>
            <section-title title='아이콘 추가' depth="1" icon="mdi-domain"></section-title>
            <div class="box">Contents</div>
            <section-title title='타이틀에 아이콘 추가' icon="mdi-email"></section-title>
            <div class="box">Contents</div>
        </section>
        <section>
            <section-title title='extra 컴포넌트 배치'><v-btn>버튼</v-btn></section-title>
            <div class="box">Contents</div>
            <section-title title='extra 컴포넌트 배치'>
                <v-combobox v-model="select" :items="comboItems" label="Combobox" multiple outlined hide-details
                    dense></v-combobox>
                <v-btn>버튼</v-btn>
            </section-title>
            <div class="box">Contents</div>
            <section-title title='extra 컴포넌트 배치'>
                <label for="src">label</label>
                <v-text-field id="src" hide-details dense></v-text-field>
            </section-title>
            <div class="box">Contents</div>
        </section>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';

export default {
    name: 'CustomSectionTitle',
    components: {
        'section-title': SectionTitle,
    },
    data() {
        return {
            comboItems: [
                'Programming',
                'Design',
                'Vue',
                'Vuetify',
            ],
        };
    },
};
</script>

<style scoped>
section {
    margin-bottom: 20px;
}

.box {
    background: #f1f1f1;
    padding: 20px 10px;
    margin-bottom: 25px;
    text-align: center;
    color: #999;
}
</style>
