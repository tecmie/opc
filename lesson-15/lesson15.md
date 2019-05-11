## Lesson 15 - Responsive Design

**Outline**
1. Responsive design intro.
2. Media queries pt I (The viewport)
3. Media queries pt II (CSS)
4. Media queries pt III (CSS)
5. Media queries pt IV (percentages)
6. Project.

*******************************************************

## Lesson 15.1 - Responsive design intro.

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

For the past few lessons, we have learnt how to make websites and style them with multiple CSS properties. However, the rendered websites on our desktop screens will not look the same if we viewed our websites on mobile phones. The sizes of the elements and media (videos and images) will appear larger than the mobile phones and will require users have to scroll both horizontally and vertically to view the website which is bad user experience.
Traditionally, to solve this problem, programmers would have to make two separate websites: one for mobile and another for desktop users. This would take longer to develop and the look of the websites would not always be consistent. Nowadays, this problem is solved by making just one website that is **responsive**. A responsive website is a website that adapts to different screen sizes while still keeping a consistent design pattern. We will look into making responsive websites in the coming lessons.

**Instructions:**
1. Run tests and submit.

*******************************************************

## Lesson 15.2 - Media queries pt I (The viewport)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When building a responsive website, we have to consider the **viewport**. The viewport is the area of the web page visible to the user. Larger screens will have larger viewports. In HTML, we can set the viewport using the `viewport <meta>` tag. This `<meta>` tag is placed within the `<head>` section of the HTML document. The implementation of the viewport `<meta>` tag looks like this:

```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
The `name` attribute in the `<meta>` tag defines the name of the `<meta>` tag which in our case is "viewport". Inside of the `content` attribute we specify the size of our viewport. We see that the `content` attribute has two values: `width=device-width` and `initial-scale=1.0`.

The `width=device-width` value means that the viewport width has been set to the width of device screen. If we set the viewport width to any other value, it might be larger than the screen width of some devices which results in horizontal scrolling, which is bad user experience.

The `initial-scale=1.0` value sets the initial zoom value of the viewport when the page is first loaded. If the value was `initial-scale=2.0`, the initial zoom value of the viewport would be 2x.

**Instructions:**

1. Click run to see the rendered page as it is.
2. In the `head` section of your `index.html` file, add the following `<meta>` tag:
```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
3. Click run to see the rendered page. Notice that the zoom is set to 1 therefore everything is at their original size.
4. Change the value `initial-scale=1.0` to `initial-scale=2.0`.
5. Click run to see the rendered page. The web page has now zoomed in and appears twice as large as its original size.
6. Run tests and submit.

```js
it("added_viewport_meta_tag_correctly", function() {
  // Failure message:
  // Have you added the viewport meta tag correctly? (It should be written after the comment in the index.html)
  var viewport = document.getElementsByTagName("META")[1];
  expect(viewport).toHaveAttr('content','width=device-width, initial-scale=1.0');
});
```

*******************************************************

## Lesson 15.3 - Media queries pt II (CSS)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When styling websites that are responsive, we will want to apply different styles to different screen sizes so that if the screen width is at least 480 pixels, elements will look different from when the screen width is at least 720 pixels. To set such conditions, we will need to **query**(ask) the browser if the screen size has met these conditions. We are going to make these queries using our stylesheet with the help of something called a `@media` rule. Queries made using the `@media` rule are called `media queries`. Below is an example of a media query in use:

```css
	@media only screen and (min-width: 480px){
  		div{
  			width: 200px;
  			padding: 0px;
      }
	}
```
The `@media` part is used to declare a media query. `only screen` means that the media query will only be applied to screen viewers (media queries can also be applied to other devices like screen readers which are used by blind people). `and` is used to chain together the conditions that must be met for the styling in the media query to be applied. The `(min-width: 480px)` part means the media query will only be applied to screens with a width of at least 480px. The block of styling inside of the media query:
```css
  div{
  			width: 200px;
  			padding: 0px;
  }
```
is the styling that will be applied once the conditions of the media query have been met.

**Instructions:**

1. Click run to see the rendered page as it is.
2. In the styles.css file create a media query for `only screen` and screen width of 300px and above. The code will look like this:
	```css
		@media only screen and (min-width:500px){

    }
	```
3. Inside the media query, we will style the `body` element to have a `background-color` of `black` and a `color` of `white`.
4. The final code will look like this:
```css
	@media only screen and (min-width:500px){
		body{
			background-color: black;
			color: white;
    }
}
```
5. Click run to see the rendered page. Drag the borders of the result window at the highlighted section to resize it. Notice how the background color changes when the result window is small (less than 500px) and when it is large (larger than 500px).
![](https://storage.googleapis.com/replit/images/1508744548543_0f4a45a9c13fee707858dddc50b17ef6.jpeg)
6. Run tests and submit.

```js
// Tests for responsiveness cannot be done with Jasmine
```

*******************************************************

## Lesson 15.4 - Media queries pt III (CSS)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can add multiple styles to the media query, but they must be added within the curly braces. Below is an example of such:
```css
  @media only screen and (min-width: 480px){
  		div{
  			width: 200px;
  			padding: 0px;
      }
      p{
      	font-size: 12px;
      }
  }
```
The value added in between the brackets of the media query, is a CSS property. In the example above the value was `min-width: 480px`. The values that can be used in between the brackets include: `min-width`, `max-width`, `min-height`, `max-height`, `orientation=portrait` and `orientation=landscape`. The values `orientation=portrait` and `orientation=landscape` apply styling when the screen height is larger than screen width and when the screen width is larger than screen height, respectively. This is particularly useful when designing websites mainly targeting mobile and tablet users.


**Instructions:**

1. Click run to see the rendered page as it is.
2. In the styles.css file create a media query for `only screen` and the orientation set to `portrait`. The code looks like this:
```css
	@media only screen and (orientation=portrait){
  }
```
3. Inside the media query, we will style the `body` element to have a `font-size` of `20px` and have a `color` of `red`.
4. The final code will look like this:
```css
	@media only screen and (orientation=portrait){
		body{
			font-size: 20px;
			color: red;
    }
}
```
5. Click run to see the rendered page. Drag the borders of the **result** window to resize it to portrait view (Make the window height larger than the window width). Notice the changes in the look of the website.
6. Run tests and submit.

```js
// Tests for responsiveness cannot be done with Jasmine
```

*******************************************************

## Lesson 15.5 - Media queries pt IV (percentages)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When designing responsive websites, it is recommended that when using properties such as `width`, we use percentages as a value as compared to pixels because you may set a width larger than the screen width resulting in horizontal scrolling which is bad user experience. When using percentages, there's more consistency in the design of the website across different screen sizes. It gives the elements a length relative to the screen size. Therefore, instead of:

```css
div{
	width: 400px;
}
```
we will write it like:

```css
	div{
		width: 100%;
}
```

This is particularly helpful when dealing with image sizes on responsive websites. Another thing to consider when building responsive websites is the size of the background images you use. Large background images are great for desktop websites but not very useful for mobile users. Resizing the background images can result in part of the background image being hidden from the user's view. A solution for this is to have an alternate background image for mobile users. With the help of media queries we can have the responsive website display a different background image when the viewport has a different size. Let's look at an example of such:
```css
	body {
    background-image: url('flowers.jpg');
  }

  /* For width 400px and smaller: */
  @media only screen and (max-width: 400px) {
      body {
          background-image: url('small_flower.jpg');
      }
    }
```
**Instructions:**
1. Click run to see the rendered page as it is.
2. Style the `div` element to have a `width` of `400px`.
3. Click run to see the rendered page and resize the result window to 350px in width. Notice the `width` of the `div` element causes the window to scroll horizontally.
4. Change the width of the `div` element to `70%`.
5. Give the `div` element a `margin` set to `auto`.
6. Click run to see the rendered page. Resize the window to 350px in width. Notice that now the width of the `div` element is consistent.
7. Run tests and submit.

```js
it("has_styled_correctly", function() {
  // Failure message:
  // Have you added the correct styling for the <div> element?
  expect('div').toHaveCss({'width':'70%','margin':'auto'});
});
```

*******************************************************

## Lesson 15.6 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Instructions:**
1. Click run to see the rendered page as it is.
2. In the styles.css, style the `div` to have the following styling:
  - `width` set to `70%`
  - `margin` set to `auto`
3. Create a media query for `only screen` and screen width of 400px and below.
4. Inside the media query add the following styling:
  - Give the `div` the property `color` with the value `green`
  - Give the `div` the property `font-size` with the value `12px`
  - Give the `div` the property `background-color` with the value `black`
5. Click run to see the final render.
6. Run tests and submit.

```js
it("has_styled_correctly", function() {
  // Failure message:
  // Have you added the correct styling for the <div> element?
  expect('div').toHaveCss({'width':'70%','margin':'auto'});
});
```

*******************************************************
