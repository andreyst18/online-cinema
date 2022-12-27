<template>
  <div class="film-page">
    <div class="wrapper">
      <h1 class="film-page__title">{{ film.title }}</h1>
      <hr class="film-page__hr">
      <img 
        :src="film.cover" 
        class="film-page__img"
      >
      <h3 class="film-page__subtitle">Немного о сюжете</h3>
      <p class="film-page__text">{{ film.detailInfo.about }}</p>
      <h3 class="film-page__subtitle">Рейтинг</h3>
      <p class="film-page__text">{{ film.rating }}</p>
      <h3 class="film-page__subtitle">Актеры</h3>
      <p class="film-page__text">{{ film.detailInfo.actors }}</p>
      <h3 class="film-page__subtitle">Режиссер</h3>
      <p class="film-page__text">{{ film.detailInfo.director }}</p>
    </div>
  </div>
</template>

<script>
  import films from '../filmdata'

  export default {
    
    data() {
      return {
        film: null
      }
    },
    
    created() {
      const film = films.find(film => film.id === Number(this.$route.params.id))
      if (film) {
        this.film = film
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/reset.css';
@import '../styles/base.css';

$base-color: #0f202c;

.film-page {
  background: $base-color;
  color: #fff;
  padding-bottom: 40px;

  &__title {
    padding-top: 50px;
    font-size: 40px;
    font-weight: 700;
  }

  &__hr {
    height: 2px;
    background: linear-gradient(to right, orange, transparent);
    border: none;
    margin-bottom: 30px;
  }

  &__img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    color: orange;
  }

  &__text {
    margin-bottom: 30px;
    line-height: 140%;
  }


}

</style>