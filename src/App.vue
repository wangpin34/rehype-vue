<template>
  <textarea @keyup="onChange" placeholder="markdown here" />
  <div>
    {{ markdown }}
  </div>
  <MarkdownRenderer :markdown="markdown" />
</template>

<script>
import MarkdownRenderer from "./components/MarkdownRenderer";
export default {
  name: "App",
  components: {
    MarkdownRenderer: MarkdownRenderer,
  },
  data() {
    return {
      markdown: "",
    };
  },
  methods: {
    onChange(e) {
      this.markdown = e.target.value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
