# Lesson 4 - CSS Layouts

**Outline**
1. Lesson 3 review  
2. Box model
3. Dimensions
4. Dimensions pt 2
5. Overflow
6. Border
7. Border pt 2
8. Padding
9. Padding pt 2
10. Margin    
11. Block
12. Block pt 2
13. Div
14. Inline
15. Span
16. Summary

************************************************************

## Lesson 4.0 - Lesson 3 review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- In the previous lesson, we learnt how to use type selectors to modify the appearance of our HTML elements using CSS properties such as: color, background-color, font-family, font-size and font-weight.
- We also learnt the following:
    - Type-selectors - We used HTML tags to select HTML elements.
    - Strong tags - Used to bold specific text in HTML.
    - Em tags - Used to emphasize specific text in HTML. By default, it makes the text italic.

**Instructions:**
1. Change the `font-family` of the heading to: `'Lucida Fax', 'URW Palladio', serif`.
2. Change the `color` of the paragraphs to `#63473e`.
3. Bold the word kitten in the last paragraph.
4. Run tests and submit.

```js
it("font_family_set", function() {
  // Failure message:
  // Did you set the font-family as instructed?
  expect('h1').toHaveCss({"font-family":"\"Lucida Fax\", \"URW Palladio\", serif"})
});
it("Paragraph_color_set", function() {
  // Failure message:
  // Remember to change the color of <p> to #63473e
  expect(document.querySelector('p')).toHaveCss({'color': 'rgb(99, 71, 62)'})
});
it("kitten_bolded", function() {
  // Failure message:
  // Did you forget to bold the word kitten?
  expect('strong').toHaveText('kitten')
});
```

*******************************************************************

## Lesson 4.1 - Box model

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The box model forms the basis of web layout.  
- Each element is represented as a rectangular box with the content, padding, border and margin wrapped around one another.
- The following picture helps illustrate this:
![Box Model Diagram](https://storage.googleapis.com/replit/images/1500889149062_df1c7e5bb90e1bdd4e1a424824586078.png)
- The padding is the space between the content box and the border, while the margin is the space surrounding the border.
- It is important to note that the border is hidden by default, but is always present around each element.
- Practise visualising every element of a webpage as a box comprised of the above.

**Instructions**
1. Click run to see the box model illustrated.
2. Click submit.

***********************************************************************

## Lesson 4.2 - Dimensions

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- We can set the dimensions (width and height) of the content box of an HTML element using the `width` or `height` CSS properties.
- Both `width` and `height` take pixel values.

**Instructions:**
1. Click run to see the rendered web page.
2. Set the `width` of the list to 300 pixels.
3. Set the `height` of the list to 100 pixels.
4. Click run and see how the list appears.
5. Run tests and submit.

```js

it("width_set", function() {
  // Failure message:
  // Is the width of your list 300px?
  expect('ol').toHaveCss({'width': '300px'})
});
it("height_set", function() {
  // Failure message:
  // Is the height of your list 100px?
  expect('ol').toHaveCss({'height': '100px'})
});
```
*****************************************************************

## Lesson 4.3 - Dimensions pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Besides setting absolute values for the dimensions of our HTML elements, we can set size constraints instead.
- Size constraints means that we set maximum or minimum values for the dimensions of our elements.
- To do this, we use the CSS properties:
```css
  max-width, min-width, max-height, min-height
```

**Instructions:**
1. Click run to see how the web page renders.
2. Set the minimum width of the ordered list to 300 pixels.
3. Set the maximum height of the ordered list to 100 pixels.
4. Click run again and notice any differences.
5. Run tests and submit.

```js
it("min_width_set", function() {
  // Failure message:
  // minimum width of the list should be 300px
  expect('ol').toHaveCss({'min-width': '300px'})
});
it("max_height_set", function() {
  // Failure message:
  // maximum height of the list should be 100px
  expect('ol').toHaveCss({'max-height': '100px'})
});
```
********************************************************

## Lesson 4.4 - Overflow

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- As you noticed in the previous lesson, our list looked strange after limiting the height using either an `absolute` value or a `maximum` value.
- We use the CSS `overflow` property to handle content that lies outside its content box.
- By default, the `overflow` property has its value set to `visible`, which is why we see elements that "overflow" outside the list box.
- The `overflow` property can take two other values, `hidden` and `auto`.
- Setting the value to `hidden` would hide the "overflowing" content, and we would not see it.
- Setting the value to `auto` on the other hand would also hide "overflowing" content but would add scroll bars allowing us to scroll and see the hidden content.

**Instructions:**
1. Click run.
2. Set the `height` of the unordered list to `200px`.
3. Set the `overflow` property of the ordered list to `auto`.
4. Click run again and try scrolling on the list.
5. Run tests and submit.

```js
it("list_overflow_set", function() {
  // Failure message:
  // Set the overflow for the list to auto
  expect('ul').toHaveCss({'overflow': 'auto'})
});
```
*****************************************************************

## Lesson 4.5 - Border

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The `border` encloses the content and padding of HTML elements.
- We can set the `width` and `style` of the border using the CSS properties:
```css
border-width
border-style
```
- The `border-width` takes pixel values and determines how wide our border is.
- The `border-style` property can take any of the following 10 values, but is usually set to `none` by default:
    1. `None` (default value, no border shown, except in certain cases)
    2. `Solid`  (line border)
    3. `Hidden` (no border shown in all cases)
    4. `Dotted`
    5. `Dashed`
    6. `Double`
    7. `Grove`
    8. `Ridge`
    9. `Inset`
    10. `Outset`

**Instructions**
1. Set the `border-style` of the main heading to `solid`.
2. Set the `border-width` of the main heading to 10 pixels.
3. Run tests and submit.

```js
it("border_style_solid", function() {
  // Failure message:
  // Remember to set the border style of the heading to solid
  expect('h1').toHaveCss({'border-style': 'solid'})
});
it("border_width_10px", function() {
  // Failure message:
  // Set the heading's border to a width of 10px
  expect('h1').toHaveCss({'border-width': '10px'})
});
```

*********************************************

## Lesson 4.6 - Border pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- Note that you do not need to set the 'border-style' property to none, as it is the default value.
- We can also set the color and radius of a border using the CSS properties,
```css
  border-color
  border-radius
```
- The `border-color` property changes the color of the border.
- The `border-radius` property rounds the corners of our border.
- The `border-radius` property can take either pixel (px) or percentage values.

**Instructions:**
1. Set the `border-radius` of the subheading (h2) to 20 pixels.
2. Set the `border-radius` of the subheading (h3) to  20%.
3. Set the `border-color` of the subheading (h2) to brown.
4. Run tests and submit.

```js
it("h2_borderRadius_and_color_set", function() {
  // Failure message:
  // Did you set the border radius and color of the <h2> elements?
  expect(document.querySelector('h2')).toHaveCss({'border-radius': '20px', 'border-color': "rgb(165, 42, 42)"})
});
it("border_radius_10_percent", function() {
  // Failure message:
  // Did you set the border-radius of the last subheadings?
  expect(document.querySelector('h3')).toHaveCss({'border-radius': '20%'})
});
```
*************************************************************

## Lesson 4.7 - Padding

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- As we saw earlier, the `padding` is the space between the content box of an element and the border of the element.
- We can set its using the shorthand CSS property `padding`.
- This sets a uniform size of padding on all four sides of the element.
- For example, the following code sets the width of the padding around the heading to 10 pixels on all sides: top, bottom, right and left.
```css
h1{
  padding: 10px;
}
```
**Instructions:**
1. Set the padding of the image to 10 pixels.
2. Run tests and submit.

```js
it("image_padding_10px", function() {
  // Failure message:
  // Did you set the padding of the image to 10px?
  expect('img').toHaveCss({'padding': '10px'})
});
```
*****************************************************

## Lesson 4.8 - Padding pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- We can also set the size of individual sides of the padding using the CSS properties: `padding-top`, `padding-bottom`, `padding-right` and `padding-left`.
- For example, the following code sets the:
    - top padding of the heading to 10 pixels
    - Right and left padding to 5 pixels
    - Bottom padding to 15 pixels
```css
h1{
  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 15px;
  padding-left: 5px;
}
```

**Instructions:**
1. Set the padding of the anchor element (`<a>`) as follows:
    1. Top padding to 10 pixels.
    2. Left padding to 5 pixels.
    3. Right and bottom padding to 0 pixels.
2. Run tests and submit.

```js
it("anchor_padding_set", function() {
  // Failure message:
  // Did you set the padding of <a> element to the given values?
  expect('a').toHaveCss({'padding': '10px 0px 0px 5px'})
});
```

**********************************************************

## Lesson 4.9 - Margin

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The margin is the space that wraps around an element's outer edge of the border.
- Like the padding, we can set a uniform size for the margin on all sides using the CSS property, 'margin'.
- We could also set the size of the margin on individual sides using the CSS properties:
```css
margin-top, margin-right, margin-bottom, margin-left
```

**Instructions:**
1. Set the 'margin' of  the paragraph to 20 pixels.
2. Run tests and submit.

```js
it("paragraph_margin_20px", function() {
  // Failure message:
  // Set the padding of the paragraph to 20 pixels.
  expect(document.querySelector('p')).toHaveCss({'margin': '20px'})
});
```

*************************************

## Lesson 4.10 - Block Elements

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- There are two common types of HTML elements; `block` and `inline`.
- Block elements are described as been stacked on each other. This means that content before and after the box appears on a separate line.  
- Block elements can have their own width and height as previously described.
- By default, block elements have their 'display' property set to 'block'.
- We can change block elements to inline by changing their 'display' property to 'inline' as shown below:
```css
  h1{
    display: inline;
  }
```

**Instructions:**
1. Set the `display` property of the heading to `inline`.
2. Run tests and submit.

```js
it("h1_inline", function() {
  // Failure message:
  // Remember to change the display property of <h1> to inline.
  expect('h1').toHaveCss({'display': 'inline'})
});
```
*******************************************************

## Lesson 4.11 - Block Elements pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- As you may have noticed in part one, the subheading's position changed after setting its `display` property to `inline`.
- This means that headings are block-level elements by default.
- Besides headings, all the other HTML elements we have covered are block-level elements except anchor (`<a>`) and image (`<img>`) elements.

**Instructions:**
1. Modify only the `index.css` file.
2. Set the `display` property if the list items (`<li>`) to `inline`.
3. Set the `display` property of the `<a>` element to `block`.
4. Run tests and submit.
```js
it("list_items_inline", function() {
  // Failure message:
  // Change the display of <li> elements to inline
  expect(document.querySelector('li')).toHaveCss({'display': 'inline'})
});
it("anchor_element_block", function() {
  // Failure message:
  // Remember to change the display of the <a> element to block
  expect('a').toHaveCss({'display': 'block'})
});
```
*************************************************

## Lesson 4.12 - `<div>` element

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The div element is the generic container for block level elements and does not represent anything.
- We use the `<div>` element to group other elements for styling
- Example:
```html
<div>
  <h2>Grouped section</h2>
  <p>
    We are grouping these elements to style them in a specific way
  </p>
</div>
```

**Instructions:**
1. Surround the subheading (`<h2>`) and the paragraph after it with a `<div>` element.
2. Click run.
3. Run tests and submit.
```js
it("div_element_added", function() {
  // Failure message:
  // Did you add the <div> element?
  expect('div').toExist()
});
```

****************************************************************

## Lesson 4.13 - Inline elements

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Unlike block-level elements, inline elements follow the flow of text on a web page.
- This means they are displayed on the same line as text before and after them.
- We cannot set their width or height as these are determined by the content in the elements, except for images.
- By default, they have their `display` property set to `inline`.
- The following elements that we've covered are inline:
    - `<a>`
    - `<img>`
    - `<em>`
    - `<strong>`

- Like block-level elements, we can change inline elements to block by changing their `display` property to `block`.

**Instructions:**
1. Change the `display` property of the image to 'block'.
2. Set the `display` property of the `<a>` element to `block`.
3. Run tests and submit.
```js
it("image_block", function() {
  // Failure message:
  // Remember to make the image block
  expect(document.querySelector('img')).toHaveCss({'display': 'block'})
});
it("anchor_block", function() {
  // Failure message:
  // Remember to make the anchor element block
  expect(document.querySelector('a')).toHaveCss({'display': 'block'})
});
```
*************************************************************

## Lesson 4.14 - <span> element

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The `<span>` element is the generic inline element.
- Like the `<div>` element, we use it to group other elements together for styling purposes, or when no other semantic element is appropriate.

**Instructions:**
1. Add a `<span>` element below the paragraph with the following content, "this is a span element."
2. Run tests and submit.

```js
it("span_created", function() {
  // Failure message:
  // Did you add the span element? Do not forget the period
  expect('span').toHaveText('This is a span element.')
});
```
****************************************************

## Lesson 4.15 - Summary

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

__Summary:__
- All HTML elements have a box model which has the following properties:
    1. Content-box - Where the element's content is located.
    2. Width - The width of the content-box.
    3. Height - The height of the content-box.
    4. Padding - The space between the content and the border.
    5. Border - The separation between the padding and the margin.
    6. Margin - The space around an element.



- We can style all the above properties for block-level elements.
- However, we __cannot__ set the `width` or `height` of inline-level elements as it is dependent on the content.
- We can style each side of the padding, border and margin separately.
- `<div>` is a generic block level element used for grouping other elements for styling.
- `<span>` is a generic inline level element used also for grouping other elements for styling or for content that has no other appropriate semantic element.

**Instructions:**
1. Click run to see for a congratulatory message for your hard work this far.
2. Click submit to move on to the project.
