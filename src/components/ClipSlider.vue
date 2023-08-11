<template>
  <div class="max-w-4xl aspect-video mx-auto">
    <div ref="clipContainer" class="keen-slider h-full w-full">
      <a @click="slider.prev()"
        class="cursor-pointer text-xl absolute top-1/2 left-5 -translate-y-1/2 z-20 w-10 aspect-square rounded-full bg-black/20 grid place-items-center transition-colors text-text hover:text-primary backdrop-blur-lg">
        <Icon icon="fa6-solid:chevron-left" />
      </a>
      <a @click="slider.next()"
        class="cursor-pointer text-xl absolute top-1/2 right-5 -translate-y-1/2 z-20 w-10 aspect-square rounded-full bg-black/20 grid place-items-center transition-colors text-text hover:text-primary backdrop-blur-lg">
        <Icon icon="fa6-solid:chevron-right" />
      </a>
      <div class="keen-slider__slide" v-for="video in videos">
        <VimeoPlayer :src="video.src" :title="video.title" />
        <p>{{ video.description }}</p>
      </div>
      <div class="keen-slider__slide number-slide2">2</div>
      <div class="keen-slider__slide number-slide3">3</div>
      <div class="keen-slider__slide number-slide4">4</div>
      <div class="keen-slider__slide number-slide5">5</div>
      <div class="keen-slider__slide number-slide6">6</div>
    </div>
    <!-- <div ref="thumbContainer" class="keen-slider thumbnail">
      <div class="keen-slider__slide th-number-slide1">1</div>
      <div class="keen-slider__slide th-number-slide2">2</div>
      <div class="keen-slider__slide th-number-slide3">3</div>
      <div class="keen-slider__slide th-number-slide4">4</div>
      <div class="keen-slider__slide th-number-slide5">5</div>
      <div class="keen-slider__slide th-number-slide6">6</div>
    </div> -->
    <div ref="dots" v-if="slides" class="flex flex-row justify-center items-center my-4">
      <a v-for="(_, i) in slides" @click="slider.moveToIdx(i)" :class="{
        'dot': true,
        'dot--active': rel === i
      }"></a>
    </div>
  </div>
</template>

<script setup>
import "keen-slider/keen-slider.min.css";
import "../slider.css";

import VimeoPlayer from "./VimeoPlayer.vue";
import { Icon } from "@iconify/vue"

import { useKeenSlider } from "keen-slider/vue.es";
import { computed, onMounted, ref, watch } from "vue";

// function ThumbnailPlugin(main) {
//   return (slider) => {
//     function removeActive() {
//       slider.slides.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//     }
//     function addActive(idx) {
//       slider.slides[idx].classList.add("active");
//     }

//     function addClickEvents() {
//       slider.slides.forEach((slide, idx) => {
//         slide.addEventListener("click", () => {
//           main.moveToIdx(idx);
//         });
//       });
//     }

//     console.log(slider)

//     slider.on("created", () => {
//       addActive(slider.track.details.rel);
//       addClickEvents();
//       console.log(main)
//       main.value.on("animationStarted", (main) => {
//         removeActive();
//         const next = main.animator.targetIdx || 0;
//         addActive(main.track.absToRel(next));
//         slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
//       });
//     });
//   };
// }

function NavigationPlugin(slider) {
  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled");
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
  }
}

const videos = [
  {
    title: "Hermes Charity Run 2022",
    src: "https://player.vimeo.com/video/852333646?badge=0&autopause=0&player_id=0&app_id=58479",
    description: "Hermes Charity Run 2022 Video für SocialMedia",
  },
];

const [clipContainer, slider] = useKeenSlider({}, [NavigationPlugin])
const slides = computed(() => slider.value?.track.details.slides)
const rel = ref(0)

onMounted(() => {
  slider.value.on('slideChanged', () => {
    rel.value = slider.value?.track.details.rel ?? 0
  })
})

// const [thumbContainer, thumbnails] = useKeenSlider({
//   initial: 0,
//   slides: {
//     perView: 4,
//     spacing: 10,
//   },
// }, [ThumbnailPlugin(slider)])

// const slider = new KeenSlider("#clip-container", {}, [NavigationPlugin]);
// const thumbnails = new KeenSlider(
//   "#thumbnails",
//   {
//     initial: 0,
//     slides: {
//       perView: 4,
//       spacing: 10,
//     },
//   },
//   [ThumbnailPlugin(slider)]
// );
</script>

