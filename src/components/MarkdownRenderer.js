import processor from "../processor";
export default {
  name: "MarkdownRenderer",
  props: {
    markdown: String
  },
  render() {
    try {
      const vnode = processor.processSync(this.markdown).result;
      console.log(vnode);
      return vnode;
    } catch (err) {
      console.error(err);
      return "";
    }
  }
};
