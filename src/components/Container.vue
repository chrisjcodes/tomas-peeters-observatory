<template>
  <div :class="['container-base', appliedContainerClasses]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    containOn: {
      type: [String, Array],
      default: "xy",
    },
  },
  methods: {
    prefixClassName(value) {
      return `container-${value}`;
    },
  },
  computed: {
    appliedContainerClasses() {
      if (typeof this.$props.containOn === "string") {
        return this.prefixClassName(this.$props.containOn);
      }

      return this.$props.containOn.map(this.prefixClassName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/media.scss";
@import "@/theme/sizing.scss";

@mixin container-t {
  padding-top: rem(75px);

  @include media(">desktop") {
    padding-top: rem(45px);
  }
}

@mixin container-r {
  padding-right: rem(25px);
}

@mixin container-b {
  padding-bottom: rem(45px);
}

@mixin container-l {
  padding-left: rem(25px);
}

@mixin container-none {
  padding: 0;
}

.container-t {
  @include container-t;
}

.container-r {
  @include container-r;
}

.container-b {
  @include container-b;
}

.container-l {
  @include container-l;
}

.container-none {
  @include container-none;
}

.container-x {
  @include container-l;
  @include container-r;
}
.container-y {
  @include container-t;
  @include container-b;
}

.container-xy {
  @include container-t;
  @include container-r;
  @include container-b;
  @include container-l;
}

.container-base {
  @include media(">desktop") {
    max-width: rem(950px);
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
