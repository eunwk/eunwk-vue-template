<template>
  <div>
    <category-banner title="Post" description="부가적인 설명글을 작성합니다." />
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmitForm"
    >
      <section-title box>
        <v-btn color="secondary" type="reset" @click="resetValidation">초기화</v-btn>
        <v-btn color="secondary" type="button">목록</v-btn>
        <v-btn color="secondary" type="button">수정</v-btn>
        <v-btn color="secondary" type="submit">저장</v-btn>
      </section-title>
      <!-- <v-row class="tit-area">
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-end">
      </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="8">
          <v-select
            v-model="selectCategory"
            :items="category"
            :rules="[v => !!v || '카테고리는 필수 선택 사항 입니다.']"
            label="카테고리를 선택해 주세요"
            required
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
            v-model="selectSubject"
            :items="subject"
            :rules="[v => !!v || '말머리는 필수 선택 사항 입니다.']"
            label="말머리 선택"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-text-field
        v-model="title"
        label="제목을 입력해 주세요."
        :rules="[v => !!v || '카테고리는 필수 입력 사항 입니다.']"
        required
      ></v-text-field>

      <QuillEditor />

      <v-file-input
        multiple
        chips
        label="파일첨부"
      ></v-file-input>
    </v-form>
  </div>
</template>

<script>
import QuillEditor from '@/components/QuillEditor.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import CategoryBanner from '@/components/CategoryBanner.vue';

 export default {
    components: {
      QuillEditor,
      SectionTitle,
      CategoryBanner,
    },
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      valid: true,
      title: '',
      selectCategory: null,
      selectSubject: null,
      category: [
        'category 1',
        'category 2',
        'category 3',
        'category 4',
      ],
      subject: [
        'subject 1',
        'subject 2',
        'subject 3',
        'subject 4',
      ],
    }),
    methods: {
      validate() {
        this.$refs.form.validate();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      onSubmitForm() {
        if (this.$refs.form.validate()) {
          console.log('폼전송', {
            title: this.title,
            category: this.selectCategory,
            subject: this.selectSubject,
            // 에디터 값은 어떻게 넘기나요?
          });
        }
      },
    },
  };
</script>

<style lang="scss">

</style>
