<template>
  <div :class="$style.logo">
    <img v-lazy="'/img/header/logo.webp'" alt=" " />
  </div>
</template>
 <style lang="scss" module>
.logo {
  width: 11rem;
  height: 5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
@include custom(1150px) {
  .logo {
    width: 10rem;
    height: 4rem;
  }
}
@include bigTablet {
  .logo {
    width: 8.25rem;
    height: 3.75rem;
  }
}
@include mobile {
  .logo {
    width: 6.25rem;
    height: 3.1rem;
  }
}
@include custom(360px) {
  .logo {
   width: 4.8rem;
   height: 2.3rem;
  }
}
</style>
