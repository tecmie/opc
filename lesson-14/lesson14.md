## Lesson 14 - CSS shadows, box-sizing and opacity

**Outline:**
1. CSS shadows.
2. CSS text shadow.
3. CSS box shadow.
4. Background opacity.
5. CSS box sizing.
6. Project.

****************************

## Lesson 14.1 - CSS shadows

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In CSS, we can add shadows to our elements. This is possible using two CSS properties:
- `text-shadow`
- `box-shadow`

We can only add shadows to elements (except the `body` element) and the text inside of them.

**Instructions:**
1. Click _run_ to see the rendered page as it is.
2. Link the _styles.css_ file to the index.html.
3. Add the following styling into your styles.css file:
	```css
		.shadow{
			padding: 10px;
			font-size: 24px;
			text-shadow: 2px 2px 5px blue;
        }
	```
4. Give the p element a class name "shadow".
5. Click run to see the rendered page with the content inside the `p` element having a shadow.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
    // Failure message:
    // Have you linked your styles.css file?
    expect('link').toHaveAttr('href','styles.css');
});
it("has_given_p_element_a_class_name_shadow", function() {
    // Failure message:
    // Have you given the p element a class name ".shadow"?
    expect('.shadow').toExist()
});
it("has_added_correct_styling_for_the_p_element", function() {
    // Failure message:
    // Have you added the correct styling for the .shadow selector?
    expect(".shadow").toHaveCss({'padding':'10px','font-size':'24px','text-shadow':'rgb(0, 0, 255) 2px 2px 5px'});
});
```

******************************

## Lesson 14.2 - CSS text shadow

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

To add shadows to only the text in an element, we use the `text-shadow` CSS property. The `text-shadow` property takes multiple values. We will go over them using the example below:
```css
	#shadow{
		text-shadow: 2px 2px 5px #c0c0c0;
		padding: 10px;
    }
```
The first two values of the `text-shadow` are the horizontal and vertical values of the shadow respectively.

The first value defines the horizontal value. The greater the horizontal value, the farther away the shadow moves, in the right (opposite of left) direction.

The second value defines the vertical value. The greater the vertical value, the farther away the shadow moves, downwards.

These two values **MUST** be included when using the `text-shadow` property.
The third value is used to specify the amount of blur of the shadow. When we increase the number of pixels of the third value, the higher the amount of blur of the shadow.

**NOTE:** Using too much of the third value (the blur value) makes the shadows look bad, hence 5px is recommended as the value.
The fourth value is used to define the color of the shadow. You can use hexadecimal codes or even rgb values to define the color.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Give the p element an id of "shadow".
3. Style the p element using the shadow id selector to have the following:
    - Set the `padding` to have a value of 5px
    - Set the `font-size` to have a value of 24px.
    - Set the `text-shadow` to have the value of `2px 2px 0px yellow`.
4. Click run to see the rendered page with the p element having a yellow shadow behind it.
5. Change the first two values of the `text-shadow` property to be `3px 3px`.
6. Change the third value of the `text-shadow` property to be `5px`.
7. Click run to see the rendered page. Notice the change in the positioning of the shadow and also the increased blur of the shadow.
8. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
    // Failure message:
    // Have you linked the styles.css file?
    expect('link').toHaveAttr('href','styles.css')
});
it("has_given_p_element_the_id_shadow", function() {
    // Failure message:
    // Have you given the p element the id "shadow"?
    expect('#shadow').toExist();
});
it("has_styled_the_shadow_id_correctly", function() {
    // Failure message:
    // Have you added the styling for the "#shadow" selector correctly?
    expect('#shadow').toHaveCss({'padding':'5px','font-size':'24px','text-shadow':'rgb(255, 255, 0) 3px 3px 5px'})
});
```

**************************************

## Lesson 14.3 - CSS box shadow

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We have been able to add shadows to the text of an element so far. Using the `box-shadow` CSS property, we can add shadows to the outside of an element. The values of the `box-shadow` property is similar to those of the `text-shadow` property.  Let's look at an example of such:
```css
	div{
		padding: 5px;
		box-shadow: 5px 5px 5px grey;
    }
```
The first two values of the `box-shadow` property, define the horizontal and vertical values respectively.

The first value defines the horizontal value. The greater the horizontal value, the farther away the shadow moves, in the right (opposite of left) direction.

The second value defines the vertical value. The greater the vertical value, the farther away the shadow moves, downwards.

These two values **MUST** be included when using the `box-shadow` property.

The third value is used to specify the amount of blur of the shadow. When we increase the number of pixels of the third value, the higher the amount of blur of the shadow.

**NOTE:** Using too much of the third value (the blur value) makes the shadows look bad, hence 5px is recommended as the value.

The fourth value is used to define the color of the shadow. You can use hexadecimal codes or even rgb values to define the color.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Give the div element an id of "shadow".
3. Style the div element using the shadow id selector to have the following:
4. Set the `padding` to have a value of 5px
5. Set the `background-color` to have a value of `white`.
6. Set the `box-shadow` to have the value of `2px 2px 0px grey`.
7. Click run to see the rendered page with the div element having a grey shadow behind it.
8. Change the first two values of the `box-shadow` property to be `3px 3px`.
9. Change the third value of the `box-shadow` property to be `5px`.
10. Click run to see the rendered page. Notice the change in the positioning of the shadow and also the increased blur of the shadow.
11. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
    // Failure message:
    // Have you linked your styles.css file?
    expect('link').toHaveAttr('href','styles.css');
});
it("has_given_div_id_shadow", function() {
    // Failure message:
    // Have you given the div the id "shadow"?
    expect('#shadow').toExist();
});
it("has_styled_shadow_correctly", function() {
    // Failure message:
    // Have you styled the '#shadow' selector?
    expect('#shadow').toHaveCss({'padding':'5px','background-color':'white','box-shadow':'rgb(128, 128, 128) 3px 3px 5px'})
});
```

************************************

## Lesson 14.4 - Background opacity

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Another interesting CSS property is the `opacity` property. This property describes the opacity of an element. In other words, the lower the opacity the higher the transparency of an element.

**NOTE:** When using the opacity property, this also makes the content inside the element transparent making it less readable, so use it sparingly. The CSS implementation of this looks like this:
```css
	div{
		background-color: red;
		opacity: 0.5;
	}
```
The `opacity` property takes a value between 0 and 1. 1 means the element is not transparent at all. Values closer to 0 make the element more transparent.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Give the div an id "opaque".
3. In the styles.css file, give the div with the id "opaque", the following styling:
	- Set the `padding` to have the value `5px`.
	- Set the `background-color` to have the value `red`
	- Set the `opacity` to have the value `0.6`
4. Click run to see the rendered page with the div with the id "opaque" looking transparent.
5. Run tests and submit.

```js
it("has_added_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css file?
	expect('link').toHaveAttr('href','styles.css')
});
it("has_added_id_opaque", function() {
	// Failure message:
	// Have you given the div an id "opaque"?
	expect('#opaque').toExist()
});
it("has_styled_opaque_id_correctly", function() {
	// Failure message:
	// Have you styled the '#opaque' correctly?
	expect('#opaque').toHaveCss({'padding':'5px','background-color':'rgb(255, 0, 0)','opacity':'0.6'})
});
```

*****************************

## Lesson 14.5 - CSS Box Sizing

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When using CSS to style our elements we frequently use the `margin` and `border` properties. However, whenever we use these properties, we are actually increasing the size of the element. The total width and height of an element would have to include the additional margin size and border size. To solve this problem, we use the CSS property called `box-sizing`.

This property determines how the total width and height will be calculated. This property has two values: `content-box` and `border-box`.

By default, `box-sizing` is set to the value `content-box`, which means the total width and height of an element have the margin and padding added to them. When we set the `box-sizing` to `border-box`, the margin and padding will not be added to the total width and height of an element.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Give the first div the class name "first" and the second div the class name "second".
3. Give the div with the class name "first", using the class selector, the following styling:
	- Give the `padding` a value of 20px.
	- Give the `height` a value of 200px.
	- Give the `width` a value of 200px.
	- Give the `border` a value of `2px solid blue`
	- Give the `box-sizing` a value of `content-box`.
4. Give the div with the class name "second", using the class selector, the following styling:
	- Give the `padding` a value of 20px.
	- Give the `height` a value of 200px.
	- Give the `width` a value of 200px.
	- Give the `border` a value of `2px solid blue`
	- Give the `box-sizing` a value of `border-box`.
5. Click run to see the rendered page. Notice the difference in size of the two divs.
6. Run tests and submit

```js
it("has_linked_stylesheet", function() {
// Failure message:
// Have you linked your styles.css file?
expect('link').toHaveAttr('href','styles.css');
});
it("class_names_exist", function() {
// Failure message:
// Have you given the first div the class name "first" and the second div the class name "second"?
expect('.first').toExist();
expect('.second').toExist();
});
it("class_name_first_styled_correctly", function() {
// Failure message:
// Have you styled the class "first" correctly?
expect('.first').toHaveCss({'padding':'20px','height':'200px','width':'200px','border':'2px solid rgb(0, 0, 255)','box-sizing':'content-box'})
});
it("class_name_second_styled_correctly", function() {
// Failure message:
// Have you styled the class "first" correctly?
expect('.second').toHaveCss({'padding':'20px','height':'200px','width':'200px','border':'2px solid rgb(0, 0, 255)','box-sizing':'border-box'})
});
```

***********************

## Lesson 14.6 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**
We have learnt how to add shadows to our elements in HTML. In this project, however, we will be using the shadows together with the `:hover` pseudo-selector. Here's a reminder of how to use the `:hover` pseudo-selector:
	```css
		p:hover{
			color: red;
		}
	```

**Instructions:**
1. Click run to see the rendered page as it is.
2. Give the first div the class name "first"
3. Give the second div the class name "second"
4. Give the third div the class name "third"
5. Give the div with the class name "first", using the class selector, the following styling:
	- Give the `padding` a value of 20px.
	- Give the `height` a value of 200px.
	- Give the `width` a value of 200px.
	- Give the `text-shadow` a value of `2px 2px 5px grey`
	- Give the `border` a value of `2px solid red`
6. Give the div with the class name "second", using the class selector, the following styling:
	- Give the `padding` a value of 20px.
	- Give the `height` a value of 200px.
	- Give the `width` a value of 200px.
	- Give the `background-color` a value of `red`.
	- Give the `opacity` a value of `0.5`
	- Give the `border` a value of `2px solid green`
	- Give the `box-sizing` a value of `border-box`.
7. Give the div with the class name "third", using the class selector, the following styling:
	- Give the `padding` a value of 20px.
	- Give the `height` a value of 200px.
	- Give the `width` a value of 200px.
	- Give the `border` a value of `2px solid blue`
8. In the styles.css file, add a `:hover` pseudo-selector for the `.third` selector, it should look like this "`.third:hover `". In this pseudo-selector add the following styling:
	- Give the `box-shadow` a value of `2px 2px 5px grey`
9. Click run to see the rendered page with 3 divs. Hover over the 3rd div to see the shadow.
10. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
	// Failure message:
	// Have you linked your styles.css file?
	expect('link').toHaveAttr('href','styles.css')
});
it("has_assigned_class_names", function() {
	// Failure message:
	// Have you given the first div the class name "first", the second div the class name "second" and the third div the class name "third"?
	expect('.first').toExist();
	expect('.second').toExist();
	expect('.third').toExist();
});
it("has_styled_the_class_name_first_correctly", function() {
	// Failure message:
	// Have you styled the ".first" selector correctly?
	expect('.first').toHaveCss({'padding':'20px','height':'200px','width':'200px','text-shadow':'rgb(128, 128, 128) 2px 2px 5px','border':'2px solid rgb(255, 0, 0)'})
});
it("has_styled_the_class_name_second_correctly", function() {
	// Failure message:
	// Have you styled the ".second" selector correctly?
	expect('.second').toHaveCss({'padding':'20px','height':'200px','width':'200px','background-color':'rgb(255, 0, 0)','opacity':'0.5','border':'2px solid rgb(0, 128, 0)','box-sizing':'border-box'})
});
it("has_styled_the_class_name_third_correctly", function() {
	// Failure message:
	// Have you styled the ".third" selector correctly?
	expect('.third').toHaveCss({'padding':'20px','height':'200px','width':'200px','border':'2px solid rgb(0, 0, 255)'})
});
```

***************************
