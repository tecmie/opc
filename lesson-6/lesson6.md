# Lesson 6 - CSS Float
**Float right, Float left and Clear**

**Objectives**
+ Students should learn to place elements to the left or right of their container and have inline elements wrap around them.
+ Students should also be able to clear elements that should not wrap around floated elements.

**Outline**
1. Review
2. Float
    1. intro
    2. none
3. Float
    1. Left
    2. Right
4. Float pt 2
5. Clear
    1. Intro
    2. None
6. Clear
    1. Left
    2. Right
7. Clear
    1. Both
8. Closed project

***************************************************************

## Lesson 6.0 - Review of selectors

## Lesson 6.1 - Float intro

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**
+ The float CSS property specifies that an element should be placed on the right or left side of its container where other inline elements such as text wrap around it.
+ The following image illustrates floated elements:

![Float diagram](https://storage.googleapis.com/replit/images/1503324161961_3fcceb2a26791e8b5d529abef8f097d0.png)

+ The default value of the float property is none, which specifies that elements must not float.
+ In order to float an element, we change the value of its float property from none to the position we want it floated.
+ We can float an element: left, right, start or end.
+ Note: Float values other than none modify the layout of the elements on which they are applied to block. This means that inline elements with a float value other than none will be displayed as block elements.

**Instructions:**
1. Click run to see the how our floated page renders.
2. Click on index.css and take a look at the CSS code; can you tell what line is responsible for floating the image?
3. Click submit to move on.

**********************************************************

## Lesson 6.2 - Float pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

+ To  float an element to the left or right, we set its float value to left or right.
+ For example, to float an image to the right, we write:
```css
    img{
      float: right;
    }
```
+ This would move the image to the left until it is in contact with the edge of its containing border.

**Instructions:**
1. Add your CSS to the style.css file and remember to link it to the _index.html_ file.
2. Float the `<div>` with the class `top` to the left.
3. Float the `<div>` with the class `bottom` to the right.   
4. Drag the border between these instructions and the rendered page right and left to expand and contract the width of the rendered page; What do you notice about the the floated elements?
5. Click run to see the effect.
6. Run tests and submit.

```js

it("floated_left", function() {
  // Failure message:
  // Did you float the elements and link the css file?
  expect(document.querySelector('.left')).toHaveCss({float: 'left'})
});

it("floated_right", function() {
  // Failure message:
  // Did you float a div right?
  expect(document.querySelector('.right')).toHaveCss({float: 'right'})
});

```

************************************************************

## Lesson 6.3 - Float pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

+ If we float two aligned elements in the same direction, the second element is moved until it's in contact with the first floating element.
+ Floating additional elements in the same direction would stack them next to each until they filled the containing box, after which they would wrap to the next line.

**Instructions:**
1. Click run to see what our page looks like.
2. In the _style.css_ file, float `<div>` elements to the right.
3. Remember to link the _style.css_ file to the _index.html_ file.
4. Click run again and note the difference on the page.
5. Run tests and submit.

```js
it("divs_floated", function() {
  // Failure message:
  // Use the div tag to float all divs right.
  expect(document.querySelector('div')).toHaveCss({float: 'right'})
});

```

********************************************************

## Lesson 6.4 - Clear Intro

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The clear CSS property specifies whether an element can be next to floating elements that precede it, or must be moved down (cleared) below them.
- The clear property applies to both floating and non-floating elements.
- When applied to floating elements, it moves the margin edge of the elements below the margin edge of relevant floats.
- When applied to non-floating elements, it moves the border edge of the element below the margin edge of all relevant floats.
- The default value of the clear property is none, which means elements are not cleared.

**Instructions:**

1. Add all your CSS to the style.css file and remember to link it to the `index.html` file.
2. Float elements with class `f_right` to the right.
3. Clear elements with class `c_right` on the right.
4. Run tests and submit.

```js

it("float_elements", function() {
  // Failure message:
  // Remember to float elements right and link the stylesheet.
  expect(document.querySelector('.f-right')).toHaveCss({float: 'right'})
});
it("Elements_cleared", function() {
  // Failure message:
  // Remember to clear elements with class 'c-right'
  expect(document.querySelector('.c-right')).toHaveCss({clear: 'none'})
});
```

************************************************************

## Lesson 6.5 - Clear pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- As you may have noticed, setting the clear property to none has no effect, since it is the default value.
- To actually clear an element, we set the clear property to either left, right.
- When set to right, the elements cleared elements floated to the right.
- Likewise, when cleared left, the element clears elements floated left.

**Instructions:**

1. Add your CSS to the style.css file and remember to link it to the `index.html`.
2. Set the value of the clear property for the element with the class `c_right` to right.
3. Set the value of the clear property for the element with the class `c_left` to left.
4. Run tests and submit.

```js

it("clear_right", function() {
  // Failure message:
  // Clear elements with class '.c-right' right
  expect(document.querySelector('.c-right')).toHaveCss({clear: 'right'})
});

it("clear_left", function() {
  // Failure message:
  // Did you clear elements left?
  expect(document.querySelector('.c-left')).toHaveCss({clear: 'left'})
});
```

************************************************************

## Lesson 6.6 - Clear pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- We can also clear elements on both right and left by simply setting their clear property to both.

**Instruction:**

1. Clear the element with the class both right and left.
2. Run tests and submit.

```js
it("Background_color_set", function() {
  // Failure message:
  // Did you set the background color of your page?
  expect('html').toHaveCss({'background-color': 'rgb(1, 173, 78)'})
});
it("news_floated_left", function() {
  // Failure message:
  // Remember to float the news left
  expect('.news').toHaveCss({float: 'left', width: '65%'})
});
it("main_page_color_and_width_set", function() {
  // Failure message:
  // Did you set the background-color and width of <main>
  expect('main').toHaveCss({width: '65%', overflow: 'scroll', 'background-color': 'rgb(237, 237, 237)'})
});
it("column_floated", function() {
  // Failure message:
  // The column should be floated right
  expect('.column').toHaveCss({float: 'right', width: '30px', padding: '10px'})
});
```

****************************************************************

## Lesson 6.7 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Now that we have learnt how to use floats, we'll use that knowledge along with what we've learnt in previous lessons to make a newspaper page that we shall call SPOC DAILY.
- Below is a screenshot of how the complete page should look like:
![Project screenshot](https://storage.googleapis.com/replit/images/1503408089426_64976b37e8a2a47995cf51f9288588e1.png)

- We've provided you with all the html that you need. Feel free to run the code and see how our unstyled page looks like.
- Below is a review of the page's structure:

1. The entire page is wrapped inside a &lt;main&gt; element.
2. The left side of the document containing the header, date and news content is wrapped inside a &lt;div&gt; element with the class `news`.
3. The right column of the page is wrapped inside a &lt;div&gt; element with a class `column`.

- Below is a review of the page's style:

1. The background color of the entire page (&lt;html&gt;) is `rgb(1, 173, 78)`
2. The main container (&lt;main&gt;) is styled as follows:

              a) `background-color` is `rgb(237, 237, 237)`

              b) `overflow property` is `scroll`

c) `width` is `65%`

  3. The section containing the news items has the class news. It is floated left and its width is 65%.

  4. The column to the right has class column and is styled as follows:

             a) `float: right`

             b) `width: 30%`

             c) `padding: 10px`

  5) All the images have individual id's. The first image (the one on Trump) has id one and is styled as follows:

             a) `float: left`

             b) `height: 200 px, width: 300px`

             c) `margin: 0 10px 0 0`

- The second (with plastic bags) has id two and is styles as follows:

             a) `float: right`

             b) `margin: 10px 0 0 10px`

- The third image has id `three` and has a width of 100%

 6) All paragraphs have the following CSS applied:

             a) `margin-top: 5px`

             b) `margin-bottom: 10px`

             b) `font-size: 0.9em`

             c) `text-align: justify` (this property aligns the text so that paragraphs are aligned along a straight line to the right and left.

 7) The rest of the CSS is provided for you in the _index.css_ file. Feel free to have a look at it. The following elements have been styled for you:

              a) header

              b) time (this is the day and date below the title

              c) All headings (h1 and h3)

              d) Anchor elements (&lt;a&gt;)

Instructions:

1. Take time to look at the _index.html_ file and make sure you understand the structure of the page.
2. Add all your CSS to the style.css file and remember to link it to the _index.html_ file.
3. Refer to the above information the CSS used to style the page when adding your CSS.
4. Take a look at the _index.css_ file and try to understand what the provided CSS does.
5. Drag the border separating this border to expand and contract the rendered page and see how it adjusts.
