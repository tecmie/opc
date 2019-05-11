# Lesson 10 - CSS selectors

**Objectives**
1. Students should learn how to select and style multiple elements simultaneously.
2. Students should be able to style child & descendant elements.
3. Students should learn to style direct children of elements.
4. Students should understand the use of the :first-child pseudo-selector.

**Outline**
1. Selectors review
2. Combining selector
3. Descendant selector
4. Direct Descendant selector
5. :first-child selector
6. Project.

*********************************************

## Lesson 10.1 - Selectors Review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Previously, we learnt how to style HTML elements using their selectors for example a `<h1>` would be styled using a `h1` selector. An element with the class name `container` would be styled using a `.container` selector. An element with the id `name` would be styled using the `#name` selector.

**Instructions:**
1. Click _run_ to see the rendered page as it is.
2. In the styles.css file, style all the `p` elements using the `p` selector to have the color blue and the `text-align` property set to `center`.
3. Style the element with an id called 'description' to give it a padding of `15px`.
4. Run tests and submit.

```js
it("has_linked_css_file", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_p_tags", function() {
  // Failure message:
  // Have you added the styling for the <p> tags?
  var p = document.getElementsByTagName('P')[0];
  expect(p).toHaveCss({'color':'rgb(0, 0, 255)','text-align':'center'});
});
it("has_styled_div", function() {
  // Failure message:
  // Have you styled the element with the id "description"?
  expect('#description').toHaveCss({'padding':'15px'});
});
```

******************************************************

## Lesson 10.2 - Combining selector

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**
When we were styling elements in CSS, you may have noticed that some styling is similar among certain elements like when both a `p` and `h1` selector have been styled to have the color blue.
Previously we would have to repeat similar styling for elements which is quite boring and tedious. In CSS, you can combine selectors if they have the same styling applied. We can do so by using a comma (,) like so:
```css
p,h1,h2{
	color: red;
	text-decoration: underline;
}
```

Therefore, all p,h1 and h2 elements will be underlined and have the color red.

**Instructions:**
1. Click run to see the rendered page as it is.
2. In the styles.css file, insert the following code:
```css
	span,h2{
		color: white;
		background-color: red;
		padding: 5px
	}
```
3. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_span", function() {
  // Failure message:
  // Have you styled both the span and the h2?
  var span = document.getElementsByTagName('SPAN')[0];
  expect(span).toHaveCss({'color':'rgb(255, 255, 255)','padding':'5px','background-color':'rgb(255, 0, 0)'});
});
it("has_styled_h2", function() {
  // Failure message:
  // Have you styled both the span and the h2?
  var h2 = document.getElementsByTagName('H2')[0];
  expect(h2).toHaveCss({'color':'rgb(255, 255, 255)','padding':'5px','background-color':'rgb(255, 0, 0)'});
});
```

****************************************

## Lesson 10.3 - Descendant selector

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In CSS we are able to style all elements that are direct descendants of a specified element. These elements can be either direct or indirect descendants of the specified element.
In the code below:
```html
<div>
		<p>I am your father! <span> No you're not!</span></p>
</div>
```
The `<p>` element is the direct descendant of the <div> element. The `<span>` element is the direct descendant of the `<p>` element. The `<span>` is also the descendant of the `<div>` element but it is __NOT__ a direct descendant. To style descendants like this, we'll use a space like this:
```css
div p{
	border: 2px solid red;
		padding: 5px;
}
```

**Instructions:**
1. Click *run* to see the rendered page as it is.
2. Style all the <p> elements that are descendants of the <div> to have a 'font-size' of 24px and the background-color yellow.
3. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_correctly", function() {
  // Failure message:
  // Have you styled the p descendants of the div?
  var p = document.querySelector('div p');
  expect(p).toHaveCss({'font-size':'24px','background-color':'rgb(255, 255, 0)'});
});
```

***************************************************

## Lesson 10.4 - Direct Descendant selector

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can also style direct descendants (children) of other elements. In fact, we can even style direct descendants of other direct descendants and so on...
To do this, we use a right angle bracket (>) like this:
```css
div > p{
  border: 2px solid red;
  padding: 5px;
}
```

**Instructions:**
1. Click *run* to see the rendered page as it is.
2. Style the p element, that is the direct child of the div element with the id "parent", to give it the color green and the `font-family` of `comic sans`.
3. Style the span element, that is the direct child of the p element that is the direct child of div element, to give it the color red. The code should look like this:
```css
div > p > span{
color: red;
}
```
4. Run tests and submit.


```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_the_p_descendants", function() {
  // Failure message:
  // Have you styled the p descendants of the div with the id parent?
  var p = document.querySelector('div>p');
  expect(p).toHaveCss({'color':'rgb(0, 128, 0)','font-family':'comic sans'});
});
it("has_styled_the_span_descendant", function() {
  // Failure message:
  // Have you styled the span descendant?
  expect('span').toHaveCss({'color':'rgb(255, 0, 0)'});
});
```
**************************************************

## Lesson 10.5 - :first-child pseudo-selector

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

So far we have been in Lesson 10, we have covered styling of both direct descendants and all descendants. However, in this lesson, we will be doing something slightly different. We will be styling only the first child of a parent element. For us to achieve this, we will use the `:first-child` pseudo-selector.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. In the styles.css file, insert the following code:
```css
	div p{
		padding: 10px;
		border-bottom: 2px solid black;
	}
```
3. Click run to see the rendered page with all the <p> elements in the <div> with a border at the bottom.
4. Add the following code to the styles.css file:
```css
  div p:first-child{
    border: none;
    font-family: monospace;
}
```
5. Click run to see the rendered page. Note that the first child of the <div> which is a <p> element has different styling from all the other <p> element.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_p_elements", function() {
  // Failure message:
  // Have you styled the p descendants?
  var p = document.getElementsByTagName('P')[1];
  expect(p).toHaveCss({'padding':'10px','border-bottom':'2px solid rgb(0, 0, 0)'});
});
it("has_styled_first_p_child", function() {
  // Failure message:
  // Have you styled the first p child?
  var p1 = document.querySelector('div p:first-child');
  expect(p1).toHaveCss({'border':'0px none rgb(0, 0, 0)'});
});
```

*****************************************************

## Lesson 10.6 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We have learnt a lot about selectors and now we want to put it into practice. We will style the given website using the selectors we've just learnt about.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. Style the first `p` child of the <div>, with the class name "first", and give it the color red and the `font-size` 24px.
3. Style all the p elements that are descendants of the <div>, with the id "diff", and give them a `text-decoration` of `underline`.
4. Style all h1 and p elements to both have the `font-family`, `comic sans`.
5. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_the_first_child", function() {
  // Failure message:
  // Have you styled the first p child of the div with class name 'first'?
  var firstChild = document.querySelector('div p:first-child');
  expect(firstChild).toHaveCss({'color':'rgb(255, 0, 0)','font-size':'24px'});
});
it("has_styled_p_descendants", function() {
  // Failure message:
  // Have you styled the p descendants of the div with the id "diff"?
  var p = document.getElementsByTagName('P')[4];
  expect(p).toHaveCss({'text-decoration':'underline solid rgb(0, 0, 0)'});
});
```
