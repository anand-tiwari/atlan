<template>
    <div>
        <Header/>
        <div class='application__section'>
          <Query/>
          <Candidate/>
        </div>
    </div>
</template>
<script src="./js/home-page.js"></script>
<style lang="scss">
@import "~assets/scss/_responsive.scss";
.application__section {
    padding: 0 1rem;

    @include md() {
        padding: 0 2rem;
    }
}
</style>
