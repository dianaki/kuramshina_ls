import Vue from "vue";
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import axios from "axios";
import config from "../../env.paths.json"

axios.defaults.baseURL = config.BASE_URL;


new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      reviews: [],
      isEnd: false,
      isBegining: true,
      sliderOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          481: {
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 2,
          }
        }
      }
    }
  },
  methods: {
    checkPosition(slider) {
      this.$nextTick(() => {
        this.isEnd = slider.isEnd;
        this.isBegining = slider.isBegining;
      });
    },
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = `https://webdev-api.loftschool.com/${item.photo}`
        item.img = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs['slider'].$swiper;
      switch (direction) {
        case 'next':
          this.checkPosition(slider);
          slider.slideNext();
          break;
        case 'prev':
          this.checkPosition(slider);
          slider.slidePrev();
          break;
      }
    },
  },
  computed: {
    swiper() {
      return this.$refs.slider.$swiper
    }
  },
  async created() {
    const {data} = await axios.get('/reviews/366');
    this.reviews = this.requireImagesToArray(data);
}
})