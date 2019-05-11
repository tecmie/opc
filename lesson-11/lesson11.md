# Lesson 11 - CSS Position

**Objectives**
1. Students should learn to position elements using the CSS position property.

**Outline**
1. Relative position
2. Left property
3. Right property
4. Top property
5. Bottom property
6. Static position
7. Fixed position
8. Absolute position
9. Summary

**********************************************

## Lesson 11.1 - Relative position

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can position elements in CSS to different places on our website so as to make it look more appealing. This is made possible with the `position` property. The `position` property takes 4 values: `relative`,`static`,`fixed` and `absolute`.
In this lesson we'll learn about the `relative` position value. When elements have their `position` value set to `relative`, the elements can be placed in a position **relative** to its original position.
When an element is moved away from its original position with its `position` value set to `relative`, other elements surrounding it will not be adjusted to fill the space left by the adjusted element.

**Instructions:**

1. Click _run_ to see the rendered page as it is.
2. Give the `<div>` element the id 'relative'.
3. In the _styles.css_ file style the 'relative' id to give it a `border` of 3px and the color black.
4. Give the 'relative' id a `position` property with the value set to `relative`.
5. We shall also move the element away from its relative left side(We will cover more on this in the next lesson). The code should look like this:
	```css
		#relative{
			border : 3px solid black;
			position: relative;
			left: 20px;
}
```
6. Click _run_ to see the rendered page. The `<div>` has moved away from its left side.
7. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
// Failure message:
// Have you linked your styles.css file?
expect('link').toHaveAttr('href','styles.css');
});
it("relative_id_exists", function() {
// Failure message:
// Have you given the <div> the id "relative" ?
expect('#relative').toExist();
});
it("has_styled_relative_id_correctly", function() {
// Failure message:
// Have you styled the "relative" id correctly?
expect('#relative').toHaveCss({'border':'3px solid rgb(0, 0, 0)','position':'relative','left':'20px'});
});
```
******************************************************

## Lesson 11.2 - Left property

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We saw in the previous lesson, that when elements have their position property set to `relative`, they can be adjusted to any position relative to their original position. We were also introduced to a new CSS property called `left`. The `left` property is used to adjust the left margin edge of an element and it takes values in pixels.
To move elements away from the left, we add more pixels and vice versa.The `left` property is one of 4 CSS properties that set the margin edges of an element. The other 3 are: `top`, `bottom` and `right`.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. Give the `<div>` an id "relative".
3. In the *styles.css* file, style the div with the id "relative", using the `#id` selector and give it a `relative` position and a border of `3px` that is `solid red`.
4. Set the `left` property of the div with the id `relative` and give it the value of `'-20px`'.
5. Click run to see the rendered page and see the `<div>` having moved more to the left.
6. Set the `left` property of the div with the id "relative" and give it the value of '20px'.
7. Click *run* to see the rendered page.
8. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("relative_id_exists", function() {
	// Failure message:
	// Have you added the id "relative" to the div?
	expect('#relative').toExist();
});
it("has_styled_relative_id_correctly", function() {
	// Failure message:
	// Have you styled the "relative" id correctly?
	expect('#relative').toHaveCss({'position':'relative','border':'3px solid rgb(255, 0, 0)','left':'20px'});
});
```
****************************************

## Lesson 11.3 - Right property

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson, we learnt of the `left` property and how it works. In this lesson, we will learn about the `right` property which does the opposite of the `left` property. It sets the right margin edge of an element and also takes values in pixels. To move elements away from the right,we add more pixels and vice versa.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. Set the `right` property of the div with the id "relative" and give it the value of '-30px'.
3. Give the div with the id "relative" a `relative` position.
4. Click run to see the rendered page and see the `<div>` having moved more to the right.
5. Set the `right` property of the div with the id "relative" and give it the value of '30px'.
6. Click *run* to see the rendered page with the div in its new position.
7. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("relative_id_styled_correctly", function() {
	// Failure message:
	// Have you styled the "relative" id correctly?
	expect('#relative').toHaveCss({'position':'relative','right':'30px'});
});
```

*******************************************

## Lesson 11.4 - Top property

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The `top` property is used to set the top margin edge of an element and takes values in pixels. To move elements away from the top, we add more pixels and vice versa.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Set the `top` property of the div with the id "relative" and give it the value of '-20px'.
3. Click run to see the rendered page and see the `<div>` having moved more to the top.
4. Set the `top` property of the div with the id "relative" and give it the value of '20px'.
5. Click *run* to see the rendered page with the div in its new position.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css?
	expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_relative_id_correctly", function() {
	// Failure message:
	// Have you added the top value correctly
	// Please do not change the rest of the styling for the '#relative` selector
	expect('#relative').toHaveCss({'background-color':'rgb(0, 255, 0)','padding':'10px','position':'relative','color':'rgb(255, 255, 255)','top':'20px'});
});
```

********************************************

## Lesson 11.5 - Bottom property

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**
The `bottom` property is used to set the bottom margin edge of an element and takes values in pixels. To move elements away from the bottom, we add more pixels and vice versa.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. Set the `bottom` property of the div with the id "relative" and give it the value of '-20px'.
3. Click *run* to see the rendered page and see the `<div>` having moved more to the top.
4. Set the `top` property of the div with the id "relative" and give it the value of '20px'.
5. Click *run* to see the rendered page with the div in its new position.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked the styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_relative_id_correctly", function() {
	// Failure message:
	// Have you added the correct styling for the relative id
	// Please do not remove the styling that is already there
	expect('#relative').toHaveCss({'position':'relative','background-color':'rgb(0, 255, 0)'});
});
```

**************************************************

## Lesson 11.6 - Static position

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**
We have learnt about the `relative` position and how it uses the `left`, `right`, `top` and `bottom` properties. However, the `static` position is not affected by these properties and by default all elements have a `static` position.

**Instructions:**

1. Click run to see the rendered page as it is.
2. In the styles.css file, add the following code:
```css
	.static{
		position: relative;
		left: 30px;
		border: 3px solid green;
}
```
3. In the index.html, give the `<div>` a class name "static".
4. Change the value of the `position` property of the `.static` selector to have the value 'static'.
5. Click run to see the rendered page. Note that now the element stays in its original position.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked the styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_correctly", function() {
	// Failure message:
	// Have you changed the position to static?
	expect('.static').toHaveCss({'position':'static','left':'30px','border':'3px solid rgb(0, 128, 0)'});
});
it("static_class_exists", function() {
	// Failure message:
	// Have you given the div the class name "static"?
	expect('.static').toExist();
});
```

****************************************************

## Lesson 11.7 - Fixed position

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In this lesson, we are going to learn about the `fixed` position property. Unlike the `relative` property which positions itself relative to its original position, the `fixed` property positions elements relative to the **viewport**. A viewport is the screen size of the browser window on a device. When using the `fixed` property, the element will remain in that position on the screen even when scrolling.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. In the *styles.css* file, add the following code:
```css
	.fixed{
		position: relative;
		top: 30px;
		right: 25px;
		border: 3px solid blue;
}
```
3. In the *index.html* file, give the `<div>` a class name "fixed".
4. Change the value of the `position` property of the ".fixed" selector to have the value 'relative'.
5. Change the value of the `top` property of the ".fixed" selector to have the value '10px'.
6. Change the value of the `right` property of the ".fixed" selector to have the value 0. The final code should look like this:
```css
	.fixed{
		position: fixed;
		top: 10px;
		right: 0;
		border: 3px solid blue;
}
```
7. Click *run* to see the rendered page.
8. Scroll up and down. You will notice that the `<div>` does not move from its position.
9. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked the styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("has_styled_fixed_class", function() {
	// Failure message:
	// Have you added the styling correctly for the ".fixed" class?
	expect('.fixed').toHaveCss({'position':'fixed','top':'10px','right':'0px'});
});
```
**************************************************

## Lesson 11.8 - Absolute position

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Finally, we have the `absolute` position. If you can remember, the `fixed` position positions elements relative to the viewport. In the case of the `absolute` position, elements are aligned relative to the nearest parent element. However, should the element not have parent element, it uses the viewport as the parent element.

**Instructions:**

1. Click *run* to see the rendered page as it is.
2. In the *styles.css* file, add the following code:
```css
	.absolute{
		position: relative;
		right: 0;
		border: 3px solid #abba00;
}
```
3. Give the div inside the div a class name "absolute".
4. Click run to see the rendered page. You notice that the `<div>` with the class name "absolute" has not moved to the right.
5. Change the value of the `position` property of the ".absolute" selector to have the value 'absolute'.
6. Give the ".absolute" selector a background-color of white and color black.
7. Click *run* to see the rendered page. Now the <div> with the class name "absolute" has moved to the right.
8. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css file?
	expect('link').toHaveAttr('href','styles.css');
});
it("has_named_the_div", function() {
	// Failure message:
	// Have you given the div inside the div a class name, "absolute"?
	expect('.absolute').toExist();
	expect('.absolute').toContainText('Positions relative to the nearest parent. In the case of my parent div the parent element is the div above');
});
it("has_styled_absolute_class_correctly", function() {
	// Failure message:
	// Have you styled the ".absolute" selector correctly?
	expect('.absolute').toHaveCss({'position':'absolute','right':'0px','border':'3px solid rgb(171, 186, 0)','background-color':'rgb(255, 255, 255)','color':'rgb(0, 0, 0)'});
});
```

*********************************************************

## Lesson 11.9 - Summary

![Moringa School and Unesco](../images/moringa_unesco.png)

Having gone through all 4 positions, we have seen that all 4 position an element differently. Let us go over all 4 of them to make sure we understood them well.
The `static` property positions an element in its original position. However, we have seen that the remaining 3 positions all do almost the same thing which is move the element from its original position. So what's the big deal!.
Unlike `absolute` and `fixed`, when an element has its position set to `relative`, a gap is left where its original position is and it is **NOT** filled by other elements. When using `absolute` and `fixed` the gap is filled by other elements.

What about `absolute` and `fixed`? When an element has an `absolute` position, the element can be adjusted to a new position relative to either the parent element **or** the viewport. When an element has a `fixed` position, the element can **only** be adjusted to a new position relative to the **viewport**.
