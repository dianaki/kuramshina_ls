<template>
  <div class="form-component">
    <form class="form" @submit.prevent="handleSubmit">
      <card :title="formTitle">
        <div class="form-container" slot="content">
          <div class="form-cols">
            <div class="form-col">
              <label
                :style="{backgroundImage: `url(${preview})`}"
                :class="['uploader', {active: preview}, {hovered: hovered}]"
                @dragover="handleDragOver"
                @dragleave="hovered = false"
                @drop="handleChange"
              >
                <div class="uploader-title">Перетащите или загрузите картинку</div>
                <div class="uploader-btn">
                  <app-button typeAttr="file" v-model="newWork.photo"  @change="handleChange"
                  :errorMessage="validation.firstError('newWork.photo')"
                  ></app-button>
                </div>
              </label>
            </div>
            <div class="form-col">
              <div class="form-row">
                <app-input v-model="newWork.title" title="Название" 
                :errorMessage="validation.firstError('newWork.title')"
                />
              </div>
              <div class="form-row">
                <app-input v-model="newWork.link" title="Ссылка" 
                :errorMessage="validation.firstError('newWork.link')"
                />
              </div>
              <div class="form-row">
                <app-input v-model="newWork.description" field-type="textarea" title="Описание" 
                :errorMessage="validation.firstError('newWork.description')"
                />
              </div>
              <div class="form-row">
                <tags-adder v-model="newWork.techs" 
                :errorMessage="validation.firstError('newWork.techs')"
                />
              </div>
            </div>
          </div>
          <div class="form-btns">
            <div class="btn">
              <app-button title="Отмена" @click="$emit('reset-handler')"  plain></app-button>
            </div>
            <div class="btn">
              <app-button title="Сохранить" typeAttr="submit"></app-button>
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import card from "../Card";
import appButton from "../button";
import appInput from "../input";
import tagsAdder from "../tagsAdder";
import tooltip from "../../components/tooltip"
import { mapActions, mapState } from "vuex";
import {Validator, mixin as ValidatorMixin} from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "newWork.title"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.link"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.description"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.techs"(value) {
      return Validator.value(value).required("Заполните поле");
    },
    "newWork.photo"(value) {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  components: { 
    card, 
    appButton, 
    appInput, 
    tagsAdder,
    tooltip,
  },
  props: {
    formTitle: String,
    currentWork: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hovered: false,
      preview: "",
      newWork: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: {},
      },
    };
  },

  watch: {
    currentWork() {
      if(Object.keys(this.currentWork).length) {
        this.newWork = {...this.currentWork};
        this.preview = `https://webdev-api.loftschool.com/${this.currentWork.photo}`
      }
    }
  },

  created() {
    if(Object.keys(this.currentWork).length) {
      this.newWork = {...this.currentWork};
      this.preview = `https://webdev-api.loftschool.com/${this.currentWork.photo}`
    }
  },

  methods: {
    ...mapActions({
      addNewWorkAction: "works/add",
      editWorkAction: "works/edit",

      showTooltip: "tooltips/show",
    }),

    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },

    async handleSubmit() {
      if ((await this.$validate()) === false) return; // Проверка валидации
      this.$emit('reset-handler');
      
      if (this.newWork.id) {
        await this.editWorkAction(this.newWork);
        try {
          this.showTooltip({
            type: "success",
            text: "Работа изменена"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.mesage
          })
        } 
      } else {
        await this.addNewWorkAction(this.newWork);
        try {
          this.showTooltip({
            type: "success",
            text: "Работа добавлена"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error.mesage
          })
        }
      }  
    },
    
    handleChange(event) {
      event.preventDefault();
      const file = event.dataTransfer 
        ? event.dataTransfer.files[0] 
        : event.target.files[0];
      this.newWork.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    renderPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.preview = reader.result;
      };
    },
  },
};
</script>

<style src="./worksForm.pcss" lang="postcss" scoped></style>