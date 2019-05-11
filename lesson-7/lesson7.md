# Lesson 7 - CSS Flex

**Objectives:**

1. Students should understand the basics of the CSS flexbox property, i.e:
    1. Justify-content
    2. Align-items
    3. Flex grow
    4. Flex basis

2. They should also be able to layout pages in columns using flexbox.
3. Students should be able to create grid layout using flexbox
4. Students should be able to style headers and footers using flexbox.

**Outline:**

1. Float review.
2. Flex model basics.
3. Flex-direction
4. Justify-content
5. Align-items
6. Flex-grow
7. Flex-wrap
8. Simple 3-column page using flexbox

******************************************************************

## Lesson 7.1 - Flex model basics

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- The CSS flexbox model allows for rapid development of complex flexible layouts which would be more tasking to achieve using float and other CSS properties.
- To make elements flexible, we set the display property of their parent element to flex.
- When we layout elements as flexible boxes, they are laid out along two axes.
![Flexbox diagram](https://storage.googleapis.com/replit/images/1503572674421_315d8e1056a9dd2cfcdddeccb79e162b.png)

- The __main axis__ runs along the direction along which the items are laid out. Above, they're laid out as rows.
- The beginning and end of the main axis are call __main start__ and __main end__.
- The __cross axis__ runs perpendicular to the direction in which the items are laid out.
- The beginning and end of the cross axis are called __cross start__ and __cross end__.
- The element that has `display:flex` set on it is called the __flex container__, while the elements inside the the flex container are called __flex items__.

**Instructions:**

1. Click run and see the rendered page.
2. Click on the _index.css_ and set the display property of &lt;main&gt; to `flex`.
3. The &lt;main&gt; element is now the __flex container__ while the &lt;article&gt;s are the __flex items__.
4. Run tests and submit.

```js
it("display_flex", function() {
  // Failure message:
  // Did you set the display of <main> to flex?
  expect('main').toHaveCss({display: 'flex'})
});
```

***********************************************************

## Lesson 7.2 - Flex-direction
![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The _flex-direction_ property is used to set the direction in which flex items flow within the flex container. It is set on the flex container.
- _Flex-direction_ can take either of two values, row or column.
- By default, _flex-direction_ has the value row set on it. When set to row, the flex items flow horizontally and vertically when we set the value to column.

**Instructions:**

1. Click run to render our web page as it is.
2. Set the display property of &lt;main&gt; to flex again.
3. Set the `flex-direction` of the flex container to `column`.
4. Click run and see the difference.
5. Run tests and submit.

```js

it("display_flex", function() {
  // Failure message:
  // Did you set the display of <main> to flex
  expect('main').toHaveCss({display: 'flex'})
});
it("Set_the_flex_direction_to_column", function() {
  // Failure message:
  // Remember to set the flex-direction to column
  expect('main').toHaveCss({'flex-direction': 'column'})
});
```

****************************************************************

## Lesson 7.3 - Justify-content
![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- `Justify-content` property determines how space is distributed between and around the flex items along the _main axis_.
- It can take many values, such as:
  - `Center`…………….Pack items around the center
  - `Start`……………… Pack items from the start.
  - `End`………………..Pack items from the end.
  - `Flex-start`………….Pack flex items from the start.
  - `Flex-end`…………..Pack flex items from the end.
  - `Right`…………........Pack items from  the right.
  - `Left`………………...Pack items from the left.
  - `Space-between`…..Distributes items evenly with the first item flush with the start and the last item flush with the end.
  - `Space-around`…….Distributes items evenly with a half-sized space on each end.
  - `Space-evenly`……..Distributes items evenly with equal space around them.
  - `Stretch`……………..Auto-sized items are stretched to fit the container.

  **Instructions:**
  1. Click run to see the initial rendering of the page.
  2. Set the `justify-content` property of the container to `space-between`.
  3. Click run again to see how the page is now rendered.
  4. Run tests and submit.


```javascript

it("justify_content", function() {
  // Failure message:
  // Did you set the justify-content property to space-around?
  expect('main').toHaveCss({'justify-content': 'space-around'})
});

```

  *****************************************************************

## Lesson 7.4 - Align-items

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- `Align-items` determines how space is distributed between and around items along the __cross axis__ of the container.
- This means that its effect on the layout of items is perpendicular to that of `justify-content`.
- The property takes many values such as:
  - `Center`……………Packs items around the center.
  - `Start`………………Packs items from the start.
  - `End`……………….Packs items from the end.
  - `Flex-start`…………Packs flex items from the start.
  - `Flex-end`………….Packs flex items from the end.
  - `Left`………………..Packs items from the left.
  - `Right`……………...Pack items from the right.
  - `Stretch`……………Items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.

**Instructions:**

1. Click run and see the initial layout of the page.
2. Set align-items property of &lt;main&gt; to center.
3. Click run and note the difference in the page's layout.
4. Run tests and submit.

```js

it("Items_aligned", function() {
  // Failure message:
  // Did you align the flex items to the center?
  expect('main').toHaveCss({'align-items': 'center'})
});

```

************************************************************************

## Lesson 7.5 - Flex-grow

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The flex-grow property specifies the amount of space that a flex item should take up in the flex container along the main axis.
- It takes non-negative numerical values that have no units and has a default value of 0.
- Flex items with higher values take up more space than those with lower values. For example, a flex item with a flex-grow value of 2 takes up twice as much space as an item with a flex-grow value of 1.

**Instructions:**
1. Click run and see how our flex boxes are rendered with the default `flex-grow` value.
2. Set the `flex-grow` value of the first and second flex items to 1.
3. Set the `flex-grow` value of the third flexbox to 2.
4. Click run again; Do you notice any difference?
5. Run tests and submit.

```js
it("flex_grow_set", function() {
// Failure message:
// Set the flex-grow value for each box as directed
expect('#two').toHaveCss({'flex-grow': '1'});
expect('#three').toHaveCss({'flex-grow': '2'});
expect('#four').toHaveCss({'flex-grow': '3'})
});
```
***********************************************************************

## Lesson 7.6 - Flex-wrap

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- The `flex-wrap` property specifies whether items are forced onto a single line or can be wrapped onto multiple lines.
- If wrapping is allowed, it also lets us control how the wrapping is done.
- Flex-wrap takes three different value:
    - `nowrap` - This is the default value and forces items to be stacked onto one line.
    - `wrap` - This value allows items to be wrapped onto multiple lines in a clockwise direction.
    - `wrap-reverse` - This value allows items to be wrapped onto multiple lines in an anti-clockwise direction.

**Instructions:**
1. Click run and notice how all our flex items are stacked on one line.
2. Set the `flex-wrap` property of the first flex container to `wrap`.
3. Set the `flex-wrap` property of the second flex-container to `wrap-reverse`.
4. Click run again and notice how the items wrap onto the next line. Notice also the different ways in which the items wrap.

```js

it("flex_wrap_set", function() {
  // Failure message:
  // Did you set the flex wrap property of the first and second value?
  expect('#first').toHaveCss({'flex-wrap': 'wrap'});
  expect('#second').toHaveCss({'flex-wrap': 'wrap-reverse'})
});
```
*****************************************************************

## Lesson 7.7 - 3-column page using flexbox

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Now that we have learnt the basic of CSS flexbox, let us use it to create a simple 3-column webpage.
- We'll set &lt;body&gt; to be our flex-container.
- Since we want our page rendered in columns and not rows, we'll also need to change the flex-direction to column.
- To make our page more aesthetically pleasing, we also have a header and footer section.
- In the interest of keeping content manageable, some CSS will be provided for you. You do not have to modify any of the provided CSS.

**Instructions:**
1. Click run and notice how our page renders; not so pleasing, right?
2. Let's first style our flex container, i.e. the &lt;body&gt;:
```css
  margin: 50px auto 50px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
```
3. Now let's style the three main flex items, which are also flex containers. We'll start with the &lt;header&gt;:
```css
  display: flex;
  height: 200px;
  background-color: rgb(212, 214, 216);
```
4. Our header now looks a lot better. However, the rest of our web page is not looking any better.
5. Now lets format the &lt;main&gt; section of our web page to have the column layout.
6. Finally, let's style our &lt;footer&gt;:
```css
  background-color: rgb(148, 252, 242);
  display: flex;
  justify-content: space-around;
  padding: 10px;
```
7. Our page now looks generally organized, but still needs some polishing. In the next section, we'll style the individual flex items.
8. Click run to see the effect of our CSS.

```js

it("body_styled", function() {
  // Failure message:
  // Did you remember to link the style.css file to index.html?
  expect('body').toHaveCss({display: 'flex', 'flex-direction': 'column', 'justify-content': 'space-between', margin: "50px 0px"})
});
it("Header_styled", function() {
  // Failure message:
  // Style the header using the provided CSS
  expect('header').toHaveCss({display: 'flex', height: '200px', 'background-color': 'rgb(212, 214, 216)', overflow: 'scroll'})
});
it("main_styled", function() {
  // Failure message:
  // Did you style <main>?
  expect('main').toHaveCss({'background-color': 'rgba(232, 235, 239, 0.3)', display: 'flex', 'justify-content': 'space-between'})
});
it("footer_styled", function() {
  // Failure message:
  // Style the <footer> using the provided CSS
  expect('footer').toHaveCss({'background-color': 'rgb(148, 252, 242)', display: 'flex', 'justify-content': 'space-around', padding: '10px'})
});
```

******************************************************

## Lesson 7.8 - 3-column page continued

![Moringa School and Unesco](../images/moringa_unesco.png)

- Now that we have the basic page layout sorted, let polish it up by styling the three columns on our page.
- We'll start by applying the styling that we applied uniformly to all columns.

**Instructions:**
1. Using the class-selector, `column`, apply the following CSS:
```css
  padding: 20px;
  margin: 10px 10px 10px 0;
```
2. Now let's style the first column of our page, id= `content-1`.
```css
  background-color: rgb(81, 130, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
```
3. Click run to see the effect of our CSS.

```js

it("columns_styled", function() {
  // Failure message:
  // Did you use the class selector '.column' to style all columns
  // Also remember to link the style.css file to the index.html file
  expect(document.querySelector('.column')).toHaveCss({padding: '20px',
margin: '10px 10px 10px 0px'})
});
it("left_column_styled", function() {
  // Failure message:
  // Use the id selector '#content-1' to style the left column
  expect('#content-1').toHaveCss({'background-color': 'rgb(81, 130, 255)', display: 'flex', 'flex-direction': 'column', 'justify-content': 'space-around', height: '200px'})
});
```

*****************************
## Lesson 7.9 - 3-column page continued

![Moringa School and Unesco](../images/moringa_unesco.png)

- We'll now style the remaining two columns and the footer.

**Instructions:**

1. Apply the following CSS to the second column, id= `content-2`:
```css
  background-color: rgb(213, 183, 255);
  flex: 2;
```
2. Apply the following CSS to the third column, id= `content-3`:
```css
background-color: rgb(169, 241, 249);
flex: 1;
margin-right: 0;
```
3. Now let's style our &lt;footer&gt;:
```css
background-color: rgb(148, 252, 242);
display: flex;
justify-content: space-around;
padding: 10px;
```
4. Click run and see how our page now renders.

```js
it("middle_column_styled", function() {
  // Failure message:
  // Remember to use the correct selector in your CS
  // Make sure to link the style.css file to the html file
  expect('#content-2').toHaveCss({'background-color': 'rgb(213, 183, 255)', flex: '2 1 0%'})
});
it("Right_column_styled", function() {
  // Failure message:
  // Did you add the CSS for column 3?
  expect('#content-3').toHaveCss({'background-color': 'rgb(169, 241, 249)', flex: '1 1 0%', 'margin-right': '0px'})
});
it("footer_styled", function() {
  // Failure message:
  // Make sure you style the footer
  expect('footer').toHaveCss({'background-color': 'rgb(148, 252, 242)', display: 'flex', 'justify-content': 'space-around', padding: '10px'})
});

```

************************************************************************

## Lesson 7.10 - 3-column page conclusion

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Our page now looks pretty good except for some few areas such as the links in our left column which are not very visible on a blue background.
- In addition, it is common for link to change their style when you hover the mouse over them. Let's add a few modifications to our links to make them prettier.
- We'll start by modifying the links in our left column by making use of CSS specificity rules.

**Instructions:**
1. Use the following selectors to select only the links in the left column of our page,
```css
  #content-1 a:hover {......}
```
2. Note that the space between the id and the a selector is required. Now add the following CSS declaration to the above rule:
```css
color: rgb(250, 255, 0);
font-weight: 900;
```
3. Now lets style the rest of the links in the right column and the <footer>. We'll use the CSS pseudo-class,
```css
a:hover{.....}
```
4. Add the following CSS declaration to the above rule:
```css
font-weight: 900;
font-style: italic;
color: rgb(255, 0, 250);
```
5. Click run to see our fully styled web page. Remember that we provided you with some of the CSS that was used to style the page, such as the CSS for the background image of the page. However, the CSS you wrote is still the key to making the web page appear as it is.

***************************************

## Lesson 7.11 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

- Below is a screenshot of a simple website that we made. Your task in this project is to style the HTML provided for you in the editor to look like our website.
- Note that all the CSS required to style the website has been covered in previous lessons. As such, you are not required to use CSS that you have not learnt.
