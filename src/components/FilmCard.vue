<template>
  <div 
    class="film-card"
    :style="{ 'background-image': `url(${cover})` }"
  >
    <p class="film-card__title">
      {{ title }}
    </p>
    
    <div
      class="film-card__rating"
    >
      {{ rating }}
    </div>
    
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      cover: {
        type: String
      },
      rating: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
.film-card {
  width: 100%;
  height: 600px;
  background-size: cover;
  border-radius: 10px;
  position: relative;

  &__title {
    position: absolute;
    bottom: 0;
    height: 100px;
    padding: 30px 0 0 30px;
    width: 100%;
    background: linear-gradient(to right, #000, transparent);
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    border-radius: 0 0 10px 10px;
  }

  &__rating {
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 40px;
    background: orange;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding: 10px 0 0 20px;
    border-radius: 0 10px 0 10px;
    opacity: 0.7;
  }

}


</style>