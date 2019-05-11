## Lesson 12 - CSS Background

**Outline**
1. Background color refresher.
2. Background-image
3. Background-size pt 1
4. Background-size pt 2
5. Background-repeat pt 1
6. Background repeat pt 2
7. Background-position
8. Project

******************************************************************

## Lesson 12.1 - Background color refresher

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When we learnt about colors in Lesson 3, we came across a CSS property called `background-color`. We use this property to give the backgrounds of our HTML elements a specified color. This lesson is intended to refresh our memories about this CSS property.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Create a div with the id "desc".
3. Inside the div with the id "desc", add a p element and inside of the p element, write about your favourite sport.
4. In the styles.css file, style the div with the id "desc" and give it a `height` of 300px, use the id selector.
5. Give the div with the id "desc" a background-color of `lime` and a border of 3px that is `solid black`.
6. Give the div with the id "desc" a padding of 10px.
7. Run tests and submit.

```js
it("div_with_id_desc_exists", function() {
  // Failure message:
  // Have you made a div with the id "desc"?
  expect("#desc").toExist();
});
it("div_with_id_desc_is_populated", function() {
  // Failure message:
  // Have you added a p element into the div with the id "desc" and written about your favourite sport?
  expect("#desc p").not.toBeNull();
});
it("div_with_the_desc_is_styled", function() {
  // Failure message:
  // Have you styled the div with the id "desc" correctly?
  expect("#desc").toHaveCss({"height":"300px","background-color":"rgb(0, 255, 0)","border":"3px solid rgb(0, 0, 0)","padding":"10px"});
});
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
```

*************************************************************

## Lesson 12.2 - Background-image

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Great! We know how to give our elements a background with color. Let's kick it up a notch! In this lesson, we will give our elements a background of an image instead. To achieve this, we use the `background-image` property. The `background-image` property takes a URL for a value, just like how the `src` attribute in the `<img>` tag takes a URL value. The CSS looks like this:
```css
	...
	background-image: url("https://goo.gl/cf86rg");
	...
```
We see that the value looks this way: `url(" ")`. You MUST put the URL link in between the double quotes.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Insert a div with the class name "image".
3. In the styles.css, style the div with the class name "image" to have the following:
      - `height` set to 300px
      - `padding` set to 15px
4. Give the div with the class name "image" a `background-image` with this URL, https://goo.gl/Yt3L8n. It should look like this:
	  ```css
    		...
    		background-image: url('https://goo.gl/Yt3L8n');
    		...
    ```
5. Click run to see the rendered page with the background image on it.
6. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
it("div_with_class_name_image_exists", function() {
  // Failure message:
  // Have you made a div with the class name "image"?
  expect(".image").toExist()
});
it("has_styled_div_with_class_name_image_correctly", function() {
  // Failure message:
  // Have you styled the div with the class name "image" correctly?
  expect(".image").toHaveCss({"height":"300px","padding":"15px","background-image":"url(\"https://goo.gl/Yt3L8n\")"});
});
```

*************************************************************

## Lesson 12.3 - Background-size pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson, we saw that the image had not fit perfectly into the background of the `<div>` we were using. This is because of difference in size of the image and the size of the element's background. We will adjust this by using the CSS property called, `background-size`.
`background-size` has 4 values: `auto`, `length`, `cover` and `contain`.
The `auto` value is the default value. When the `background-image` is set to `auto`, the background image retains its original height and width.
The `length` value is used to define the exact height and width that the background image will have which is written in pixels. Since we define both height and width, we write two values. The code will look like this:
```css
  ...
  background-size: 200px 200px;
  ...
```

**NOTE**: We do not actually write the word "length" as the value for background-size.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Insert a div with the class name "image".
3. In the styles.css, style the div with the class name "image" to have the following:
    - `height` set to 400px
    - `padding` set to 15px
4. Give the div with the class name "image" a `background-image` with this URL, https://goo.gl/eoZgAX. It should look like this:
	```css
		...
		background-image: url('https://goo.gl/eoZgAX');
		...
  ```
5. Give the div with the class name "image" a `background-size` set to `auto`.
6. Click run to see the rendered page with the div having a background image.
7. Change the value of the `background-size` to `200px 200px`
8. Click run to see the rendered page. Notice the difference in size of the background image.
9. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
it("div_with_class_name_image_exists", function() {
  // Failure message:
  // Have you made a div with the class name "image"?
  expect(".image").toExist();
});
it("has_styled_div_with_class_name_image_correctly", function() {
  // Failure message:
  // Have you correctly styled the div with the class name "image"?
  expect(".image").toHaveCss({'height':'400px','padding':'15px','background-image':'url(\"https://goo.gl/eoZgAX\")','background-size':'200px 200px'});
});
```

*****************************************************************************

## Lesson 12.4 - Background-size pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The other two values that `background-size` has are: `contain` and `cover`. The `cover` property scales the background image until it covers the entire background. However, some of the image will not be seen.
The `contain` property scales the background image to the largest possible size such that the width and height of the background image fit inside the background of the element. This is especially useful for elements that have same width and height.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Insert a div with the class name "image".
3. In the styles.css, style the div with the class name "image" to have the following:
    - `height` set to 200px
    - `width` set to 300px
    - `padding` set to 15px
    - `border` set to `3px dashed lime`
4. Give the div with the class name "image" a `background-image` with this URL, https://goo.gl/y6tE4F.
5. Give the div with the class name "image" a `background-size` set to `auto`.
6. Click run to see the rendered page with the div having a background image.
7. Change the value of the `background-size` to `cover`
8. Click run to see the rendered page. Notice the difference in size of the background image.
9. Change the value of the `background-size` to `contain`.
10. Click run to see the rendered page. Notice how the background image is scaled differently.
11. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
it("div_with_the_class_name_image_exists", function() {
  // Failure message:
  // Have you added a div with the class name "image"?
  expect(".image").toExist();
});
it("has_styled_the_div_with_class_name_image_correctly", function() {
  // Failure message:
  // Have you styled the div with the class name "image" correctly?
  expect(".image").toHaveCss({'height':'200px','width':'300px','padding':'15px','border':'3px dashed rgb(0, 255, 0)','background-image':'url(\"https://goo.gl/y6tE4F\")','background-size':'contain'});
});
```

*******************************************************************************

## Lesson 12.5 - Background-repeat pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Sometimes when we give our elements, background images, we notice that the image tends to repeat itself. This is because of the CSS property `background-repeat` which by default has the value set to `repeat`.
The `background-repeat` property takes 4 values: `repeat`, `repeat-x`, `repeat-y` and `no-repeat`. If we do not want the background image to repeat, we will use the `no-repeat` value.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Insert a div with the class name "repeat".
3. In the styles.css, style the div with the class name "repeat" to have the following:
    - `height` set to 200px
    - `width` set to 300px
4. Give the div with the class name "repeat" a `background-image` with this URL, https://goo.gl/DQT7rH.
5. Click run to see the rendered page with the div having a background image that repeats itself.
6. Give the div with the class name "repeat" a `background-repeat` set to `no-repeat`.
7. Click run to see the rendered page. Notice that the background image no longer repeats itself.
8. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
it("div_with_class_name_repeat_exists", function() {
  // Failure message:
  // Have you added the div with class name "repeat"?
  expect(".repeat").toExist();
});
it("has_styled_div_with_class_name_repeat_correctly", function() {
  // Failure message:
  // Have you styled the div with class name "repeat" correctly?
  expect(".repeat").toHaveCss({'height':'200px','width':'300px','background-image':'url(\"https://goo.gl/DQT7rH\")','background-repeat':'no-repeat'})
});
```

******************************************************

## Lesson 12.6 - Background-repeat pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

By default, the CSS property `background-repeat` has the value `repeat`. This makes the background image repeat itself both horizontally and vertically. If we only want the background image to repeat itself vertically, we use the `repeat-y` value and if we only want the background image to repeat itself horizontally, we use the `repeat-x` value.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Insert a div with the class name "repeat".
3. In the styles.css, style the div with the class name "repeat" to have the following:
    - `height` set to 400px
    - `width` set to 300px
4. Give the div with the class name "repeat" a `background-image` with this URL,  https://goo.gl/FNFKGP.
5. Click run to see the rendered page with the div having a background image that repeats itself.
6. Give the div with the class name "repeat" a `background-repeat` set to `repeat-y`.
7. Click run to see the rendered page. Notice that the background image only repeats itself vertically (up and down).
8. Change the value of the `background-repeat` of the div with the class name "repeat" to `repeat-x`.
9. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css")
});
it("div_with_class_name_repeat_to_exist", function() {
  // Failure message:
  // Have you created a div with the class name "repeat"?
  expect(".repeat").toExist();
});
it("has_styled_the_div_with_the_class_name_repeat_correctly", function() {
  // Failure message:
  // Have you styled the div with the class name "repeat" correctly?
  expect(".repeat").toHaveCss({'height':'400px','width':'300px','background-image':'url(\"https://goo.gl/FNFKGP\")','background-repeat':'repeat-x'});
});
```

*************************************************************

## Lesson 12.7 - Background-position

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

Sometimes, when we add background images onto an element we want them positioned at a certain region of the element's background for better visual effect. CSS allows us to position the background of our elements using the property, `background-position`. The values of `background-position` are: `center`,`left`,`right`,`top` and `bottom`. However, unlike other CSS properties, the values of `background-position` are written in pairs. If we want to position our background to start from the top-left side of our element, the value will be `left top`. Our CSS will look like this:
```css
	...
	background-position: left top;
	...
```
When writing the values of `background-position`, the first value can either be: `left`, `right` or `center`. The second value can either be: `top`, `bottom` or `center`. The `center` value can be both a first value and a second value meaning the background image will start from the very center of the element. The CSS would look like this:
```css
	...
	background-position: center center;
	...
```

**Instructions:**

1. Click run to see the rendered page as it is.
2. Insert a div with the class name "position".
3. In the styles.css, style the div with the class name "position" to have the following:
    - `height` set to 200px
    - `width` set to 300px
4. Give the div with the class name "position" a `background-image` with this URL, https://goo.gl/EkjKGo.
5. Click run to see the rendered page with the div having a background image.
6. Give the div with the class name "position" a `background-size` set to `50px 50px`.
7. Give the div with the class name "position" a `background-position` set to `left top`.
8. Click run to see the rendered page. Notice that the background image seems to start from the top left of the background.
9. Give the div with the class name "position" a `background-position` set to `right bottom`.
10. Click run to see the rendered page with the background image of the div originating from the bottom right.
11. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect("link").toHaveAttr("href","styles.css");
});
it("div_with_class_name_position_exists", function() {
  // Failure message:
  // Have you made a div with the class name "position"?
  expect(".position").toExist();
});
it("div_with_class_name_position_has_been_styled_correctly", function() {
  // Failure message:
  // Have you styled the div with the class name "position" correctly?
  expect(".position").toHaveCss({'height':'200px','width':'300px','background-image':'url(\"https://goo.gl/EkjKGo\")','background-size':'50px 50px','background-position':'100% 100%'});
});
```

**********************************************************

## Lesson 12.8 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

We have achieved a lot this week and now it's time to put it into practice.

**Instructions:**

1. Click run to see the rendered page as it is.
2. In the _styles.css_ file, give the `body` a `background-color` of blue.
3. Give the first div in the index.html file the id "first".
4. Using the id selector, give the div with the id "first" the following styling:
    - Set `height` to `300px`.
    - Set `width` to `300px`.
    - Set `border` to `2px solid white`.
    - Set `background-image` and give it the following URL `https://goo.gl/C2eDu1`
    - Set `background-size` to `contain`.
5. Give the second div in the index.html file the id "second".
6. Using the id selector, give the div with the id "second" the following styling:
    - Set `height` to `300px`.
    - Set `width` to `300px`.
    - Set `border` to `2px dashed red`.
    - Set `background-image` and give it the following URL `https://goo.gl/ximnAL`
    - Set `background-size` to `cover`.
7. Give the third div in the index.html file the id "third".
8. Using the id selector, give the div with the id "third" the following styling:
    - Set `height` to `300px`.
    - Set `width` to `300px`.
    - Set `background-image` and give it the following URL `https://goo.gl/QM8vR4`
    - Set `background-size` to `240px 240px`.
    - Set `background-position` to `center center`.
9. Click run to see the rendered page.
10. Run tests and submit.

```js
it("has_linked_stylesheet", function() {
    // Failure message:
    // Have you linked your styles.css file?
    expect("link").toHaveAttr("href","styles.css");
});
it("has_styled_body_tag", function() {
    // Failure message:
    // Have you styled the body element?
    expect("body").toHaveCss({'background-color':'rgb(0, 0, 255)'});
});
it("first_div_has_id_first", function() {
    // Failure message:
    // Have you given the first div the id "first"?
    var first = document.getElementsByTagName("DIV")[0];
    expect(first).toHaveAttr("id","first");
});
it("has_styled_div_with_id_first_correctly", function() {
    // Failure message:
    // Have you styled the div with id "first" correctly?
    expect("#first").toHaveCss({'height':'300px','width':'300px','border':'2px solid rgb(255, 255, 255)','background-image':'url(\"https://goo.gl/C2eDu1\")','background-size':'contain'});
});
it("second_div_has_id_second", function() {
    // Failure message:
    // Have you given the second div the id "second" ?
    var second = document.getElementsByTagName("DIV")[1];
    expect(second).toHaveAttr("id","second");
});
it("has_styled_div_with_id_second_correctly", function() {
    // Failure message:
    // Have you styled the div with id "second" correctly?
    expect("#second").toHaveCss({'height':'300px','width':'300px','border':'2px dashed rgb(255, 0, 0)','background-image':'url(\"https://goo.gl/ximnAL\")','background-size':'cover'});
});
it("third_div_has_id_third", function() {
    // Failure message:
    // Have you given the third div the id "third" ?
    var third = document.getElementsByTagName("DIV")[2];
    expect(third).toHaveAttr("id","third");
});
it("has_styled_div_with_id_third_correctly", function() {
    // Failure message:
    // Have you styled the div with id "third" correctly?
    expect("#third").toHaveCss({"height":"300px","width":"300px","background-image":"url(\"https://goo.gl/QM8vR4\")","background-size":"240px 240px","background-position":"50% 50%"});
});
```

****************************************
