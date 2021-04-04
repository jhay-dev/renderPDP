# renderPDP
A code assessment written in Vue.js, JavaScript/jQuery, SCSS, and HTML5 served through Nuxt.js

## The Task
Goal Product Detail Page (PDP).

Description: Create two pdp pages that link to each other.

 1. Use the new data object found in data.json in the source data.
 2. Render both products and link them together under a section that says related items
 3. Render the shades color as a dropdown choice and include the label Shade. [example](https://d.pr/i/VvLPCP)
 4. Display Ingredients on PDP Page as a drop down accordion
 5. Render all images in the product json and have a thumbnail and main image. When selecting the thumbnail the main image should change. You should also have a methodology for knowing which thumbnail is selected.
 6. Render "More Info" property as a modal that is responsively displayed center on desktop and mobile. [example](https://d.pr/i/1Ag3TC)
 7. Include Vegan svg  next to [title](https://d.pr/i/d3AT1P) if keyIngredient attribute includes "vegan" [svg](https://www.dropbox.com/t/iHDPRNsbFXFuGV9R)
 8. Render "Best Makeup Guarantee" from guarantee.json if "guarantee" property has a value of 1 [example](https://d.pr/i/Mqobyl)
 9. Please include the following note with ingredients: "Please be aware that ingredient lists may change or vary from time to time. Please refer to the ingredient list on the product package you receive for the most up to date list of ingredients."
10. Render badge for "New and Improved"  on product that has the attribute "new" for the property "badge" [example](https://d.pr/i/1g1QA2)
11. Make the Quantity UI functional which allows for the adding and subtracting of items you are adding to your cart icon.
12. Create an a numerical representation that shows the number of items in your bag based off the quantity you add to the bag. You do not have to show the contents of your cart.
13. Render ratings as stars. [https://fontawesome.com/v4.7.0/icon/star](https://fontawesome.com/v4.7.0/icon/star). *Please note if it is a percentage render a* [half star](https://fontawesome.com/icons/star-half-alt?style=solid)
13. Deploy project to either heroku or netlify.

References of pdp pages: [https://www.clinique.com/product/1599/51043/makeup/foundations/even-better-glowtm-light-reflecting-makeup-broad-spectrum-spf-15?shade=CN_02_Breeze](https://www.clinique.com/product/1599/51043/makeup/foundations/even-better-glowtm-light-reflecting-makeup-broad-spectrum-spf-15?shade=CN_02_Breeze)


TommyJohn: [https://tommyjohn.com/collections/second-skin-pajama-short/?color=goodnight-stripe](https://tommyjohn.com/collections/second-skin-pajama-short/?color=goodnight-stripe)


you can use: [https://nextjs.org/](https://nextjs.org/) or [https://nuxtjs.org/](https://nuxtjs.org/) to render the page. ;

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
