<template>
  <div :class="$style.map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.493572443943!2d23.70913831522571!3d52.08894827583727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210c08eae70d75%3A0x56be0c654bab015!2z0L_RgNC-0YHQvy4g0JzQsNGI0LXRgNC-0LLQsCA2Nywg0JHRgNC10YHRgg!5e0!3m2!1sru!2sby!4v1654191354244!5m2!1sru!2sby"
      max-width="639"
      height="438"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style lang="scss" module>
.map {
  width: 40rem;
  height: 27rem;
  @include custom(1054px) {
    width: 36rem;
    height: 25rem;
  }
  @include bigTablet {
    width: 32rem;
    height: 24rem;
  }
  @include custom(855px) {
    width: 30rem;
    height: 23rem;
  }
  @include custom(823px) {
    width: 28rem;
    height: 22rem;
  }
  @include custom(791px) {
    width: 36rem;
    height: 27.3rem;
    margin: 0 auto;
  }
  @include custom(625px) {
    width: 32rem;
    height: 25rem;
  }
  @include custom(555px) {
    width: 26rem;
    height: 24rem;
  }
  @include mobile {
    width: 24rem;
    height: 24rem;
  }
  @include custom(420px) {
    width: 20rem;
    height: 20rem;
  }
  @include custom(360px) {
    width: 18rem;
    height: 18rem;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>