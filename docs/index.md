---
layout: home

hero:
  name: Coding Paradigm
  text: Understand the why. Master the how.
  tagline: Understand Java without all the jargons.
  image:
    src: /logo.png
    alt: Coding Paradigm
  actions:
    - theme: brand
      text: Dive in
      link: /guide/jvm
    - theme: alt
      text: Contribute
      link: https://github.com/Coding-Paradigm
features:
  - title: Java Virtual Machine
    icon: ⚙️
    details: The very core of Java, the machine, bare metal, exposed.
    link: /guides/jvm
  - title: Garbage Collection
    icon: ♻️
    details: Trash this, trash that, get to know the very thing that is sifting through your Java objects and recycling your heap.
    link: /guides/gc
  - title: Benchmarks
    icon: ⏱️
    details: Optimizations, with clear numbers done with OpenJDK approved methods.
    link: /guides/benchmarks/001
  - title: Tests
    icon: 📝
    details: Unit testing your Java oddities, things that may seem right but are actually wrong.
    link: /guides/tests/001
---

<style>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #5782C7, #ED536A);

    /* --vp-home-hero-image-background-image: -webkit-linear-gradient(60deg, #5782C7, #ED536A);
    --vp-home-hero-image-filter: blur(44px); */
  }
</style>