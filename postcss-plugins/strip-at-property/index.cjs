/** Drop Tailwind `@property` rules. MaskWright's debug Chromium 131
 *  (`dcheck_always_on`) aborts in style_resolver when these
 *  non-inherited custom properties are present. Stock Chrome is fine. */
function stripAtProperty() {
  return {
    postcssPlugin: "strip-at-property",
    AtRule(atRule) {
      if (atRule.name === "property") {
        atRule.remove();
      }
    },
  };
}

stripAtProperty.postcss = true;

module.exports = stripAtProperty;
