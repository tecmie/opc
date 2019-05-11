# Lesson 5 - CSS selectors
**Class selectors, id selectors, specificity, pseudo-classes**

**Objectives:**
+ Students should be able to style HTML elements using their class and id names.
+ Students should be able to override styles following specificity rules.
+ Students should be able to style elements using pseudo-classes.

	1. CSS layouts Review
	2. CSS selectors introduction
	3. Class selectors pt1
	4. Class selectors pt2
	5. Type.class selectors
	6. Id selectors pt1
	7. Id selectors pt2 (?specificity?)
	8. Inheritance
	9. Specificity and overriding styles pt1
	10. Specificity and overriding styles pt2
	11. Pseudo classes pt1
	12. Pseudo classes pt2
	13. Lesson review/conclusion
	14. Open project

******************************************************************************
## Lesson 5.1 CSS layouts review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

In the previous lesson we learned about the CSS box model - dimensions, border, padding, margin - and the `span` and `div` HTML elements.

**Instructions:**

1. Click run to see the current appearance of the web page.
2. Select `h1` and add a border of `1px solid green`
3. Add a padding of `20px` in the `h1` selector
4. Create a `div` selector and add a margin of `10px`, `background-color` of `rgb(255,250,250)`
5. Run tests and submit

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS Layouts review</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<div class="container">
		<h1>The planets of our Solar System.</h1>
		<h2>Brief summary</h2>
		<p class="summary article" id="summary">
			The solar system is a gravitationally bound system consisting of the sun and 8 known planets revolving around it.
		</p>

		<h2>Planets</h2>
		<p class="article" id="planets">
			Heavenly bodies revolving around the sun. They all rotate on their own axis at different speeds in an anticlockwise direction, except for venus.
		</p>
	</div>
</body>
</html>
```
```css
*{
	margin: 0 auto; padding: 10px;
}

```
```js
//failure message
/* Make sure you have selected your h1, added a 1px solid green border*/
expect(document.getElementsByTagName("h1")[0].innerHTML).style().toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
expect((document.getElementsByTagName("h1")[0]).getAttribute('style')).toEqual('border:1px');
expect(document.getElementsByTagName("h1")[0].style.border).toBe("1px solid green")
```



******************************************************************************

## Lesson 5.2 CSS selectors introduction

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

So far, we have been using type selectors to select HTML elements.

We can also select elements using **Class selectors**.

`class` is an HTML attribute, and different HTML element types can have the same `class` value so that we can style them all together.

**Instructions:**

1. Click run to see the current appearance of our webpage.
2. Notice that the `p` element has a `class` attribute whose value is `article`
3. Add a `class` attribute to the second `p` element with value `article` and click run
4. The second `p` element is now styled as the first one, because they are of the same `class`.
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>CSS selectors Introduction</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>

</body>
</html>
```
```css
.article{
	color: red;
}
```
```js
//failure message
/*Make sure you add a class attribute to the second `p` element.*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()

```
******************************************************************************

## Lesson 5.3 Class selectors pt1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

The `.class` selector selects all elements with a specific class attribute.
To select elements with a specific class, write a full-stop (.) followed by the class name then braces
For example, to select element with the attribute `class=”summary”` and add a border, we write the following code in the stylesheet
```css
.summary{
	border: 1px solid green;
}
```
**Instructions:**

1. Select all elements with `class=”descriptions”`
2. In the `.descriptions` class selector, add a `color=blue` property
3. Run. Notice that all elements with `class=”descriptions”` have blue text.
4. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Class selectors pt 1</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>

</body>
</html>
```
```css
.description{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.4 Class selectors pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

HTML elements can belong to more than one class, eg.

```html
	<p class=”center description article”> The pine trees of Kijabe are one of the oldest in Kenya. </p>
```

Elements that have more than one class name will be styled according to the style rules of the individual classes combined.

**Instructions:**

1. Select elements of class name `center` and add a `color:blue;` CSS property
2. Select elements of class name `description` and add a `border:1px solid green;` CSS property
3. Run. Elements that belong to both classes will have a green border, and blue text color
4. Run tests and submit

```html
<!DOCTYPE html>
<html>
<head>
	<title>Class selectors part 2</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>

</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.5 Type.class selectors

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

It is also possible to select HTML elements of a particular type that also belong to a certain class by writing the type selector and immediately followed by the class selector.

For example, to select all paragraphs of class name `article`, we do this:
```css
p.article{
	margin:0px auto;
}
```
**Instructions:**

1. Select `p` elements with class name `descriptions` and add a `color:red` property
2. Select `div` elements with class name `questions` and add a `border:solid 1px blue` property
3. Run to see the appearance of the page.
4. Run tests and submit

```html
<!DOCTYPE html>
<html>
<head>
	<title>Type.Class selectors.</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>

</body>
</html>
```
```css
p.article{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.6 Id selectors pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Just like with classes, HTML elements can have `id` attributes.

`id` attribute values are specific to one and only one element

We can use `id`s to select specific elements, for example, to select a `p` element with id=”intro” we do this:
```css
#intro{
	border:2px; border-radius:5px;
}
```

**Instructions:**

1. Click run to see the current appearance of the page
2. Select the `h2` element with `id=”synopsis”` and add a `font-style:italic;` property.
3. Your selector should look like this:
```css
#synopsis{
	font-style:italic;
}
```
4. Run. Only the last `h2` element will have italicized text.
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>ID selectors part 1</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.7 Id selectors pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

HTML elements can have both `class` and `id` attributes simultaneously

Style rules in the `class` and `id` selectors are both applied.

Below, we will style the second paragraph differently from the rest to show that it is a quote.

**Instructions:**

1. Click run to see the current appearance of the page
2. Add an `id` attribute with value `quote` to the second paragraph
3. In the stylesheet, add an id selector for `#quote`
3. In the `id` selector, add a `padding` of `20px`, `line-height` of `0.7em` and `font-style` of `italic`.
4. Run to see the new appearance of the page.
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>ID selectors part 2</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.8 Inheritance
![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

HTML elements that are found within other HTML elements are called **Child elements**.

**Parent elements** enclose and contain Child elements. Child elements inherit styles applied to Parent elements. This idea is called **Inheritance**

We will apply styles to a parent element which will be inherited by child elements.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Inheritance</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
body{
	color:green;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.9 Overriding Styles part 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

All child elements automatically inherit styles from their parent elements.

We can, however, override inherited styles in child elements by using `type`, `.class` or `#id` selectors, and adding properties for the desired styling.

Below, all child elements of the `body` element have blue text. We will override paragraphs to have green text, and headings to be centered.

**Instructions:**

1. Click run to see the current appearance of our web page.
2. Make a `type` declaration for `p` elements in the stylesheet and add a `color` property with value `green`
3. Additionally, make a `class` declaration for `heading` classes and add a `text-align` property with value `center`
4. Click run to see the inherited styles overridden.
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Overriding Styles Part 1</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.10 Overriding Styles and Specificity

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Overriding styles is dependent on **Specificity**, such that a more specific selector will override styles from a less specific selector.

`type` selectors are the least specific, and will be overridden by `class` selectors which will be overridden by `id` selectors.

In case there are more than one `class` selector for an element (ie. the element has more than one class each with its own selector), the class that comes the last in the stylesheet will override any styles in the selectors that come before.

**Instructions:**

_Click run after every instruction to see styles applied_
1. Click run to preview the current appearance of our web page
2. Add a `body` type selector and change `color` to `red`.
3. Add a `h1` type selector and a `color` property of `blue`. This overrides the parent's red color.
4. Add a `class` selector for the `description` class, add a `color` property with value `green`
5. Add an `id` selector for the paragraph with `id="article"` and change its `color` to `cyan`.
6. Run tests and submit.
```html
<!DOCTYPE html>
<html>
<head>
	<title>Overriding styles and Specificity</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```

******************************************************************************
## Lesson 5.11 Pseudo Classes

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

**Pseudo Classes** means 'fake' classes. These classes are not explicitly written out as attributes in HTML elements.

Here are some Pseudo classes:`a:hover`, `a:link` `a:visited`. They're all associated with HTML link elements.

The selectors style links in their different states:
	`a:link` - an unvisited link (comes before all other link pseudo-classes)
	`a:hover` - State when mouse is hovering over the link
	`a:visited` - a visited link

**Instructions:**

1. Click run to preview the current appearance of the page.
2. Add a `a:link` pseudo-class selector in the stylesheet so that it looks like this:

	```css
	a:hover{
		/* css properties go here */
	}
	```

3. In the selector, add a `background-color` property with value `lightgreen` to make all links red in color.
4. Add a `padding` of `20px`
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Pseudo Classes</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.12  Pseudo-classes part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Now let us style the links in the `hover` and `visited` states.

The `text-decoration` property dictates how text is decorated eg `strikethrough`, `underline` or `none` for normal text.

**Instructions:**

1. Preview the page
2. Add an `a:hover` class selector and in it add the following properties:
	* `color:blue;`
	* `background-color: hotpink;`
	* `text-decoration:none;`
3. Add a `a:visited` class selector with the following properties:
	* `color:green;`
	* `background-color:cyan;`
4. Preview the page, and hover over links, click on them to observe their behaviour.
5. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Pseudo-classes Part 2</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```
******************************************************************************
## Lesson 5.13 Lesson Review/conclusion

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

In this lesson, we learned how to use CSS Class selectors, ID selectors and Pseudo-Class selectors.

We also learned about style inheritance and specificity.

**Instructions:**

1. Preview the current appearance of the page.
2. Change the `color` of the `body` element to red.
3. Override paragraph colors to `black`
4. Add a `1px solid green` border to paragraphs.
5. Add a `20px` `padding` to elements of the `article` class
6. Run tests and submit.

```html
<!DOCTYPE html>
<html>
<head>
	<title>Lessson Review/ conclusion</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
	<h1>The Planets of The Known universe</h1>
	<p>There are 9 planets in the universe</p>


</body>
</html>
```
```css
p{
	color:red;
}
```
```js
//failure message
/*Failure message...*/
expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
```

******************************************************************************
