import sveltePreprocess from "svelte-preprocess";
import preprocess from "svelte-preprocess";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  // preprocess: [
  //   sveltePreprocess({
  //     postcss: true,
  //   }),
  // ],
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};
