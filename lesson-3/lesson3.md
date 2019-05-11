## Lesson 3

**Outline**
1. Review
2. Lesson Introduction
3. Linking a stylesheet
4. Selectors
5. Selectors part 2
6. Color
7. Rgb color
8. Color part 2
9. Background-color
10. Background-color part 2
11. Font-family
12. Font-family part 2
13. Font-size
14. Font-size part 2
15. Font-style
16. Font-weight
17. Font-weight part 2
18. Strong tag
19. Em tag
20. Conclusion
21. Open project

*********************************************************

## Lesson 3.0 - Review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- In the last lesson, we learned about how to embed images into HTML pages, link to other pages or sites and how to add attributes to elements.
- In this section, we are going to review those ideas.

**Instructions:**
1. In the `img` tag, add a `height` attribute with a value of `1200`.
2. In the `a` tags, add an `href` attribute with value `en.unesco.org`.
3. Run.  
4. Run tests and submit.

```js
it("image_has_height_attribute", function() {
  // Failure message:
  // Make sure your image has a height attribute
  expect(document.getElementsByTagName("img")[0].getAttribute("height")).not.toBeNull()
});
it("has_href_attribute", function() {
  // Failure message:
  // Make sure your `a` element has an href attribute
  expect(document.getElementsByTagName("a")[0].getAttribute("href")).not.toBeNull()
});
```

***********************************************************

## Lesson 3.1 - Introduction to CSS

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Today we'll learn how to style a website using __CSS__.
- CSS stands for Cascading Style Sheets  
- HTML controls the structure of a page. CSS controls how a page looks.  
- Notice how the text editor now has two files: index.html and index.css.

**Instructions:**
1. Click run to see what the code looks like when rendered in a browser.
2. Switch to our CSS file by clicking on index.css.
3. On line 3, change "blue" to "red".
4. Click run and notice what changed.
5. Run tests. If all tests pass, submit.

**************************************************

## Lesson 3.2 - Linking a stylesheet

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

In order to style our page with CSS, we first need to link a stylesheet.
A __stylesheet__ is a file that contains the CSS code that styles our web page.
We link the stylesheet file from our HTML file using the `<link>` tag, like this:
```html
<link rel="stylesheet" type="text/css" href="style.css">
```
`rel="stylesheet" and type="text/css"` tells the browser that this link is to a CSS stylesheet.

`href="style.css"` tells the browser it can find the CSS in a file named style.css.

**Instructions:**

![](https://storage.googleapis.com/replit/images/1499945149528_31dcdf059fe8ebfe4c14f1e8b5d64bbe.png)

1. Click on the _New File_ button.
2. Notice the new tab called _file1.html_. Click on the three dots on its right, and select _Rename_.
3. Rename the file to _style.css_.
4. Add the following CSS code to the file. Ask your partner if they can guess what it does.
```css
h1 {
 color: blue;
}
```
5. Click on index.html and link our new CSS file by adding this inside the head element:
```html
   <link rel="stylesheet" type="text/css" href="style.css"/>
```
6. Click run to see what our CSS does.
7. Make sure tests pass, and then submit your code.
```js
it("stylesheet_linked", function() {
  // Failure message:
  // Check to see that you've added the link tag as explained.
  expect('link').toHaveAttr('href','index.css');
});
it("h1_styled", function() {
  // Failure message:
  // Remember to add the given line in the css file.
  expect('h1').toHaveCss({"color": 'rgb(0, 0, 255)'});
});
```
******************************************

## Lesson 3.3 - Selectors pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In order to style our HTML, we need a way to select specific HTML elements.

This is important as it enables us to style only the elements we want.

We specify which elements to style using __selectors__. The most basic selectors are the HTML tags themselves.
CSS __properties__ go inside the curly brackets. They modify appearances of the selected element (for example color, height, size…).

For example, to select a main heading, we write:
```css
h1{
  color: red;
}
```
Note that we do not need the angle brackets in our CSS.

**Instructions:**
1. Run to see the the current appearance of the page.
2. Select the heading using its tag.
3. Add a `color` CSS property with the a value of `red`
    Your code should look like this:
    ```css
    h1 {
    color:red;
     }
    ```
4. Run tests and submit.

```js
it("h1_styled_red", function() {
  // Failure message:
  // Make sure you've used the h1 selector then made it red in colour
  expect ('h1').toHaveCss({color:'rgb(255, 0, 0)'});
});
```

********************************************************
## Lesson 3.4 - Selectors pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can select everything on the web page with the all-selector (`*`), like this:
```css
*{
  color: yellow;
}
```

**Instructions**
1. Use the all-selector to change the color of all the text to red.
2. Run tests and submit.
```js
it("has_all_text_red", function() {
  // Failure message:
  // Did you forget to set the color of all text to red?
  expect('h1').toHaveCss({color:'rgb(255, 0, 0)'});
});
it("has_all_text_red", function() {
  // Failure message:
  // Did you forget to set the color of all text to red?
  expect('p').toHaveCss({color:'rgb(255, 0, 0)'});
});
```

**********************************************************

## Lesson 3.5 - Color

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- We can change the text color of any HTML element using the `color` CSS property.
- For example, the following code changes the text color of all h1 elements to blue.
    - h1{ color: blue; }

**Instructions**
- Click Run to see the web page rendered on the preview window.
- Change the color of the `p` elements to green.
- Change the color of the `h1` elements to blue.
- Click Run. Notice the text color changed.
- Run tests and submit.

```js
it("p_is_green", function() {
  // Failure message:
  // Make sure you have selected your p element and added the color property with a value of green.
  expect(document.querySelector('p')).toHaveCss({color: 'rgb(0, 128, 0)'});
});
it("h1_is_blue", function() {
  // Failure message:
  // Make sure you have selected your h1 element in the CSS file and changed its color to blue.
  expect(document.querySelector('h1')).toHaveCss({color: 'rgb(0, 0, 255)'});
});
```
******************************************************

## Lesson 3.6 - RGB colors

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

We can also specify colors using combinations of the primary colors red, blue and green.
This format of defining colors is called the RGB format.
Using RGB format, colors are defined by three integers ranging from 0 - 255.
The first integer states the amount of red, the second the amount of green and the third integer the amount of blue.
The three integers are separated by commas and enclosed inside braces. The letters rgb precede the opening brace
Examples:
  - `rgb(255, 0, 0)` - red
  - `rgb(255, 255, 255)` - black
  - `rgb(0, 0, 0)` - white
  - `rgb(255, 255, 0)` - yellow

**Instructions:**

1. Click run to see how our web page looks likes.
2. Change the color of the following using rgb:
  - h1 element to red.
  - h2 element to green.
  - h3 element to blue.
  - h4 element to magenta. Hint, max red and blue, but no green.
3. Run tests and submit.

******************************************************

## Lesson 3.7 - Color part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- Let us make our web page more colorful by changing its texts' color.

**Instructions:**
- Click run to see the web page rendered in the preview window.
- Change the color of the `p` elements to `#123456`.
- Change the color of the `h1` element to red.
- Change the color of the  `li` elements to `#123456`.
- Click run. Notice the change in appearance.
- Run tests and submit.

```js
it("p_color_styled", function() {
  // Failure message:
  // Make sure to style paragraphs to the given color
  expect(document.querySelector('p')).toHaveCss({color:'rgb(204, 0, 187)'});
});
it("h3_color_red", function() {
  // Failure message:
  // Did you set the color of h3 elements to red?
  expect(document.querySelector('h3')).toHaveCss({color: 'rgb(255, 0, 0)'});
});
it("li_color_styled", function() {
  // Failure message:
  // Did you change the color of the li elements?
  expect(document.querySelector('li')).toHaveCss({color: 'rgb(32, 110, 188)'});
});
```

*******************************************************

## Lesson 3.8 - Background-color

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can change the background color of an element using the `background-color` property.

**Instructions:**
1. Run to see the current appearance of the page.
2. Change the background color of the `h1` element to `red`.
3. Change the background color of the `p` elements to `#cacaca`
4. Run it to see what it looks like.
5. Make sure tests pass, then submit.
```js
it("h1_has_red_backgroud", function() {
  // Failure message:
  // Make sure to select h1 and make the background red.
  expect(document.querySelector('h1')).toHaveCss({"background-color":'rgb(255, 0, 0)'});
});
it("p_has_a_colored_background", function() {
  // Failure message:
  // Make sure you've selected your p element and added a background.
  expect(document.querySelector('p')).toHaveCss({"background-color":'rgb(202, 202, 202)'});
});
```
********************************************************

## Lesson 3.9 - Background-color part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

That's pretty cool, but the design looks a bit weird on a white background.

Let's fix that by making the whole page another color.

**Instructions:**
1. Change the background color of the `body` element to `#e2caca`.
2. As usual: run the code and see what it does. Run tests. Submit.
```js
it("body_has_background_color", function() {
  // Failure message:
  // Make sure you have selected and changed the background color of your body element.
  expect('body').toHaveCss({"background-color": 'rgb(226, 204, 172)'});
});
```

********************************************************

## Lesson 3.10 - Font-family pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We use the `font-family` property to change the font of text in our HTML.
Just as you can change the font in Microsoft Word, you can do it for HTML documents.

__NOTE__: We shall enclose the font names in single quotes.

e.g:
```css
p{
  font-family: 'Lucida Sans'
}
```

**Instructions**
1. Click run to see the current font of the paragraph.
2. Change the paragraph’s font-family to “Helvetica”.
3. Click run to see the new font .
4. Run tests and submit.

```js
it("p_has_Helvetica_font_family", function() {
  // Failure message:
  // Make sure you've selected and changed the p elements' font-family to Helvetica.
  expect(document.querySelector('p')).toHaveCss({'font-family': 'Helvetica'});
});
```
******************************************************

## Lesson 3.11 - Font-family pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Not all browsers support all fonts. Therefore, it's good practice to specify more than one font just in case one isn't supported.
Also, always include at least one of the following generic font-family names: serif, sans-serif, monospace, cursive, fantasy, system-ui.

Unlike normal font names, generic font names __must not__ be in quotes.
The generic font name should come last since all browsers support generic fonts.
If the first font does not work, the browser tries applying the next one.

e.g:
```css
h1 {
  font-family: 'monaco', 'times', serif;
}
```

**Instructions:**
1. Click run to see the current font of the headings.
2. Set two fonts and one generic font to the heading. You can try one of these for the normal fonts:  "Open Sans", Papyrus, Menlo, Lucida Calligraphy.
3. Click run again to see the new font of the heading.
  Try to guess which of the three fonts was applied.
4. Run the tests and submit.

```js
it("heading_has_a_generic_font", function() {
  // Failure message:
  // Make sure you have selected the heading and applied a font-family property.
  expect('h1').not.toHaveCss({"font-family": "monospace"});
});
```

*******************************************************

## Lesson 3.12 - Font-size

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- We can change the size of text in HTML elements using the `font-size` property.
- The `font-size` property takes pixel values.
    - For example:
    - `h2{ font-size:20px; }`

**Instructions:**
- Click run to see the current appearance of our web page in the preview pane.
- Use the `p` selector, to set the  font-size  of paragraphs to   `30px`.
- Click run. The `p` elements will now be twice as big in size.
- Run tests and submit.

```js
it("p_has_30px_font_size", function() {
  // Failure message:
  // Make sure you have changed the paragraph font-size to 30px.
  expect(document.querySelector('p')).toHaveCss({"font-size":'30px'});
});
```

********************************************************

## Lesson 3.13 - Font-size pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

- Let's change the font sizes of the paragraphs, `h2`s and `h1`s in our page.

**Instructions:**
- Change the font size of `h1`s to 30px.
- Click run.  
- Run tests and submit.

```js
it("h1_has_large_font_size", function() {
  // Failure message:
  // Make sure you have applied the font-size property to your heading, with a value of large.
  expect('h1').toHaveCss({"font-size": '18px'});
});
it("li_font_size_small", function() {
  // Failure message:
  // Remember to set the font-size of li elements to small.
  expect(document.querySelector('li')).toHaveCss({"font-size": '13px'});
});
```

*********************************************************

## Lesson 3.14 - Font-style

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

We can make our text italic using the `font-style` property, like this:
```css
h1 {
  font-style: italic
}
```

**Instructions**
1. Make the paragraph italicized.
2. Run tests and submit.

```js
it("p_element_italicized", function() {
  // Failure message:
  // Make sure the font-style is italicized using the font-style CSS property.
  expect('p').toHaveCss({"font-style":"italic"});
});
```
*********************************************************

## Lesson 3.15 - Font-weight pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

We use the `font-weight` property to set the boldness of the font.
e.g:
```css
h1{
  font-weight: bold;
}
```

**Instructions:**
1. Run to see the current appearance of the page.
2. Set the weight of the heading to bold.
3. Rerun the program and check that the heading is bolded.
4. Run the tests and submit.

```js
it("p_element_bolded", function() {
  // Failure message:
  // Make sure that you have used the font-weight property to make the paragraph bold.
  expect('h1').toHaveCss({"font-weight": "bold"});
});
```

*****************************************************

## Lesson 3.16 - Font-weight pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

We can also specify the boldness (or weight) using numeric values starting with 100: 100, 200, 300, 400, ..., all the way up to 900. The higher the value, the bolder the font.

e.g:
```css
p{
  font-weight: 700;
}
```

**Instructions:**
1. Click run notice how the paragraph is rendered.
2. Set the boldness to the paragraph to 400.
3. Click run again; see any difference?
4. Run tests and submit.

```js
it("paragraph_font_weight_400", function() {
  // Failure message:
  // Check that you set the font-weight of the paragraph to 400.
  expect('p').toHaveCss({"font-weight": "normal"});
});
```

***********************************************************

## Lesson 3.17 - Strong tag

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Using the `strong` tag, we can bold a few words in an element as opposed to all words using the `font-weight` property.
- Any text between a set of `strong` tags will display as bold, even without CSS styling.
- For example,
    ```html
          <p>This text is <strong>bold</strong>.</p>
    ```

**Instructions:**
- Click run to see the current appearance of our web page.
- In the sentence `Strong tags show something that is important`, make the word `important` bold by wrapping the word `important` in a strong tag.
     ```html
    <p>Strong tags show something that is <strong>important</strong>.</p>
    ```

- Click run. The words `important` will now be in bold.
- Run tests and submit.

```js
it("has_strong_tags", function() {
  // Failure message:
  // Make sure you have wrapped the word 'important' in strong tags
  expect(document.getElementsByTagName("strong")[0].innerHTML).not.toBeNull()
});
```

*****************************************************

## Lesson 3.18 - Em tag

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- Like the `strong` tag, `em` tags are used to indicate emphasis on a few words in an element, as opposed to the `font-style` property, which emphasizes an entire element. ("em" stands for "emphasis").
- Words that go in between `em` tags show up as italicized when the web page is rendered.

**Instructions:**
- Click run to see the current appearance of our web page.
- Emphasize the first sentence of the `p` element by wrapping it in `em` tags like this:
  ```html
    <em>Emphasis tags are used to emphasize words without using CSS styling </em>
  ```
- Click run. The first sentence will now be emphasized.
- Run tests and submit.

```js
it("has_em_tag", function() {
  // Failure message:
  // Make sure you've wrapped the word 'emphasize' in em tags.
  expect(document.getElementsByTagName("em")[0].innerHTML).not.toBeNull()
});
```
*****************************************************

## Lesson 3.19 - Conclusion

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- In this lesson, we’ve learned how to style a website using CSS
- We started by linking a stylesheet.
- Then using selectors to apply CSS properties
- We also used the `strong` and `em` elements to show emphasis.

**Instructions:**
- Run the page to see its appearance. We’ve styled it using all of the CSS properties we’ve learned in this lesson.
- Take note of the content in the CSS file. You will be creating a similar collection of CSS properties in the next section.
- Click submit. And go on to the next section to make something fun!

```js
it("appreciate_your_effort", function() {
  // Failure message:
  // This does not fail
  expect("nothing").toBe("nothing")
});
```

***************************************************************

## Lesson 3.20 - Open project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

- This project is meant to give you practice with all the CSS you have learnt.
- To keep it focused, you will only be required to write CSS, with minimal HTML.
- You will write your CSS in the style.css file and should not modify the given.css file.
- We aim for you to have fun through this project, so feel free to style the given HTML to you heart's satisfaction.

**Instructions:**
1. Click run to see how the provided HTML renders as a web page; As you can see, the page is not awful, but it's not very interesting either.
2. In the index.html file, link the given.css file by adding a link tag below the title tag.
3. Click run again to see how the page is now rendered; Notice any difference? The page looks better but there's not a whole lot of difference.
4. Before you add your own CSS, link the style.css file to the index.html as you did with the given.css file.
5. Now open the style.css file and add the following CSS:
  - Set the `background-color` of:
    - `h1` to "#d4d7f7"
    - `li` to "#e8e9f7"
    - `img` to "#e2ccac"
  - Set the `color` of:
     - `h1` to "#63473e"
     - `h3` to "#6b5f5b"
  - Set the `font-family` of:
    - `h1` to `papyrus`
    - `h3` to `monospace` (this is generic, so no quotes)
    - `p` to `cursive` (this is generic, so no quotes)
  - Set the `font-style` of `h3` to `italic`
  - Set the `font-size` of `h3` to `x-large`
  - Set the `font-weight` of `p` to `600`
6. Run tests and submit.
