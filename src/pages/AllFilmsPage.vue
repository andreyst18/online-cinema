<template>
<div class="all-films">
  <div class="wrapper">
    <h1 class="all-films__title">Выбери фильм на свой вкус</h1>
    <film-card
      class="all-films__card"
      v-for="(film, index) in filmdata"
      :key="index"
      :title="film.title"
      :cover="film.cover"
      :rating="film.rating"
      :film="film"
    />
        
  </div>
</div>
</template>

<script>
import filmdata from '../filmdata'
import FilmCard from '../components/FilmCard.vue'

  export default {
    components: {
      FilmCard
    },

    data() {
      return {
        filmdata
      } 
    }
        
  }
</script>

<style lang="scss" scoped>
@import '../styles/reset.css';
@import '../styles/base.css';

$base-color: #0f202c;

.all-films {
  
  background: $base-color;

  &__title {
    padding-top: 50px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 50px;
  }

  &__card {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}


</style>