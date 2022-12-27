<template>
  <div class="main-page">
    <div class="wrapper">
      <div class="main-page__main">
        <h1 class="main-page__title">Онлайн-кинотеатр</h1>
        <button 
          class="main-page__btn"
          @click="$router.push({name: 'films'})"
        >
          Показать фильмы
        </button>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../styles/reset.css';
@import '../styles/base.css';

$base-color: #0f202c;

.main-page {
  background: $base-color;
  color: rgb(212, 221, 233);
    
  &__main {
    height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-bottom: 20px;
  }

  &__btn {
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 600;
    border: solid 1px #fff;
    border-radius: 10px;
    background: $base-color;
    color: #fff;

    &:hover {
      cursor: pointer;
      background: #fff;
      color: $base-color;
    }
  }

}





</style>