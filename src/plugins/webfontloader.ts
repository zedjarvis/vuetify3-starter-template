/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')
  webFontLoader.load({
    google: {
      families: ['Inter:wght@300;400;500;600;700&display=swap'],
    },
  })

  webFontLoader.load({
    google: {
      families: ['Space+Grotesk:wght@300;400;500;600;700&display=swap'],
    }
  })
}
