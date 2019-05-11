## Lesson 2 - HTML cont.

**Outline**
1. Review
2. Images introduction
3. Images and attributes (src)
4. Images and attributes (height & width)
5. Image attributes (alt text)
6. Image exercises - supermarket catalogue
7. Images exercises - (alt text)
8. Links introduction (href part 1)
9. Links and attributes - href part 2
10. Links target attribute
11. Links exercises
12. Images as links
13. Lesson review
14. Open project

*****************************************************

## Lesson 2.0 - Review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Today we will learn about HTML attributes, links and embed images in our HTML pages.

First, let us remind ourselves about what we learned last time.

**Instructions:**
1. Create a `<!DOCTYPE html>` element on the first line to declare that we are working with HTML.
2. Create a `<html></html>` element.
3. Between the opening and closing html tags, add a `<head></head>` element then a `<body></body`> element.
4. In the head element, put a title element with the title Review.
5. In the body element, put an h1 element containing the text AAbout me.
6. Add a paragraph element saying Here are a few things about me.
7. Use an unordered list (`ul`) element to list the following things about yourself:
  - Your name.
  - Your age.
  - Your school.
8. Click the run button to preview your "Review" page.
9. Click submit to run tests, fix any errors and go on to the next section.

You should have something like this
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Review</title>
    </head>
    <body>
        <h1>Some code we wrote in the last Lesson</h1>
        <p>Here are a few things about me.</p>
        <ul>
	    <li>I am 58 Years old</li>
            <li>My name is Bony Face Mpesa</li>
	    <li>Upper Hill School</li>
        </ul>
    </body>
</html>
```

```js
it("has_DOCYTPE", function() {
  // Failure message:
  // Make sure you have <!DOCTYPE html>
  expect(document.doctype).not.toBeNull()
});
it("has_an_h1_element", function() {
  // Failure message:
  // Make sure you have an <h1></h1> element
  expect(document.getElementsByTagName("h1")[0].innerHTML).not.toBeNull()
});
it("has_a_ul_element", function() {
  // Failure message:
  // Does your code have an unordered list (ul) element with both the opening and closing tags?
  expect(document.getElementsByTagName("ul")[0].innerHTML).not.toBeNull()
});
it("has_a_list_of_three_items", function() {
  // Failure message:
  // Check to see that you have added 3 list elements in your unordered list.
  expect(document.getElementsByTagName("li")[0].innerHTML).not.toBeNull()
});
```

*****************************************************

## Lesson 2.1 - Images introduction

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We will learn how to embed images into our HTML pages in this section.

We can embed images into HTML pages by using the <img> tag.

**Instructions:**
1. Click run to see what the starting page looks like.
2. Below the closing p tag, add this code:  `<img>`
3. Click run.
4. No image shows up yet. This is because we have not yet specified the source of the image. We will do that in the following section.
5. Run tests and make sure they all pass.
6. Click submit, then go on to the next section to complete embedding the image.

Your code should now look like this:

	```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Images</title>
      </head>
      <body>
        <h1>How to embed an image into an HTML page.</h1>
        <p>We embed images into HTML pages to make them look nice. Additionally, they can convey a lot more than just text - remember the saying that "An image is worth a thousand words?"</p>
        <img>
      </body>
    </html>
	```

```js
it("has_an_img_tag", function() {
  // Failure message:
  // Does your code have an <img> tag?
  expect(document.getElementsByTagName("img")[0].innerHTML).not.toBeNull()
});
```

**************************************************************

## Lesson 2.2 - Images and attributes (src)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In order to actually have an image display, we must specify some __attributes__ of the image.

Attributes provide additional information about an HTML element and are always specified in the start tag, before it's closing bracket.
```html
 <tag attributes>Enclosed content goes here.</tag>
```
All HTML elements can have one or more attributes.

 Each attribute is specified as a name=value pair like:
```html
<tag name="value"></tag>
```
*Notice that the value has quotes around it.*

The src attribute in an img tag specifies the location of the image on the internet.

**Instructions:**
1. In the img tag, add a src attribute with a value of `https://goo.gl/GwjXxU` . Typing URLs can be difficult, so feel free to copy and paste this.
2. You should have your img tag looking like this:
```html
<img src="https://goo.gl/GwjXxU">
 ```
 3. Click run.
 4. An image will be displayed after the paragraph in the preview window.
 5. Run tests and make sure they all pass.
 6. Click submit and go on to the next section.

```js
it("has_img_tag", function() {
  // Failure message:
  // Do you have an <img> element in your code?
  expect(document.getElementsByTagName("img")[0].innerHTML).not.toBeNull()
});
it("img_tag_has_a_src_attribute", function() {
  // Failure message:
  // Does Your Image element have a source attribute?
  expect(document.getElementsByTagName("img")[0].getAttribute("src")).not.toBeNull()
});
```

**************************************************************

## Lesson 2.3 - Images and Attributes (height & width)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Images take on more attributes to specify their height and width on the page.

We will adjust the heights and widths of images that look too big or too small on our page by using the `height` and `width` attributes.

We only need to specify either the height or the width, and the other will automatically adjust to keep the ratio of the image correct. We can specify both, but then we may distort the image.

**Instructions:**

1. Click run to see the images display on the preview window. They're both bigger than we want.
2. In the first `img` tag, add a height attribute with value "160".
3. In the second image, add a width attribute with value "160". Your code should look like this:
```html
<img src="https://goo.gl/GwjXxU" height="160">
<img src="https://goo.gl/V57bzV" width="160">
```
4. Click run to see the images display on the preview window.
5. Run tests. If a test does not pass. *Click on it to see what went wrong, then go back, fix the error, and submit again.*
6. Click submit and move on to the next section.

```js
it("first_img_has_height_attribute", function() {
  // Failure message:
  // Check to see that your first image has a height attribute.
  expect(document.getElementsByTagName("img")[0].getAttribute("height")).not.toBeNull()
});
it("second_img_has_width_attribute", function() {
  // Failure message:
  // Check to see that your second image has a width attribute.
  expect(document.getElementsByTagName("img")[1].getAttribute("width")).not.toBeNull()
});
```

*******************************************************************

## Lesson 2.4 - Image attributes (alt text)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The `alt` attribute defines an alternative text for an image. This text is displayed in place of the image the image specified in the `src` attribute cannot be displayed.

**Instructions:**
1. Our web page has 2 images. Click *run* to see them render on the preview pane.
2. Notice that the second image isn't displayed. That's because it doesn't have a valid `src`.
3. Add an `alt` attribute to the second image with a value of "Spotted Transformer.".
4. Hit *run*. The second image will show a text instead of an image.
5. Run tests, and fix any errors.
6. Click *submit* and move on to the next section.

You should have something like this for the image code:
```html
<img height="150" alt="Spotted Transformer">
```

```js
it("image_has_alt_attribute", function() {
  // Failure message:
  // Make sure your second image has an alt attribute with a value of "Spotted transformer"
  expect(document.getElementsByTagName("img")[1].getAttribute("alt")).not.toBeNull()
});
```
*********************************************************

## Lesson 2.5 - Images exercises - supermarket catalogue

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We now know a lot about embedding images.

Let us make a catalogue of some popular Supermarkets in Kenya. Below are URLs for images of supermarket logos.

1. `https://goo.gl/YLqhFm` - Nakumatt Supermarket.
2. `https://goo.gl/gpkL3a` - Tuskys Supermarket

**Instructions:**
1. We have a short paragraph for each of the super-markets in the code editor. After each paragraph, add an `img` tag.
2. For each `img` tag, add a `src` attribute with the respective url values from the list above. *You can copy and paste the urls.*
3. For each `img` tag, add a `width` attribute with value "200".
4. Click *run* to see the images render on the preview pane.
5. Run tests and fix any errors.
6. Click *submit* and move on to the next section.

For example, your code for Tuskys Supermarket should look similar to this:
```html
<h3>Tuskys Supermarket</h3>
<p>The original name of this supermarket was Tusker Mattresses Supermarket</p>
<img src="https://goo.gl/gpkL3a" width="200">
```

```js
it("img_elements_have_src_attributes", function() {
  // Failure message:
  // Make sure that your images have src attributes with the correct urls.
  expect(document.getElementsByTagName("img")[1].getAttribute("src")).not.toBeNull()
});
it("num_images", function() {
  // Failure message:
  // Did you add all images
  expect(document.querySelectorAll("img")).toHaveLength(2)
});
it("image_width_200", function() {
  // Failure message:
  // Remember to set the width of the images to 200
  expect(document.querySelector('img')).toHaveAttr('width', 200)
});
```

********************************************************

## Lesson 2.6 - Images exercises (alt text)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Let's add alt attributes to our catalogue's images.

**Instructions:**
1. For each of the images, add an `alt` attribute with a value of the super-market's name.
2. Click *run*, to see a preview of the page on the preview pane.
3. Run tests, and fix any errors.
4. *Submit* and move on to the next section. Your code should look similar to this:
```html
<img src="https://goo.gl/YLqhFm" width="200" alt="Nakumatt">
```

```js
it("img_has_alt_attributes", function() {
  // Failure message:
  // Make sure your images have alt text attributes
  expect(document.getElementsByTagName("img")[2].getAttribute("alt")).not.toBeNull()
});
```

*************************************************************

## Lesson 2.7 - Links Introduction (href part 1)

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Links are also called hyperlinks.

Using links, we can navigate from a web page to another.

Links are defined with an `a` tag that has an `href` attribute. All the text or elements that are in the <a></a> element become part of the link.

**Instructions:**
1. In the code editor is some content about Moringa school in a p element. We want to make the last two words, Read More, link to another page on the internet. Before the word Read, add an opening `<a>` tag.
2. After the last word, 'More', add a closing `</a>` tag.
3. In the opening `<a>` tag, add a `href` attribute with value 'http://www.moringaschool.com/spoc'
4. Run your code by clicking *run* and look at the preview window.
5. The last two words should have been underlined showing that they have become a link.
6. Put your mouse over the last two words on the preview window, your cursor will show a small hand, indicating that it's a link.
7. Run tests, and fix any errors.
8. Click *submit* and proceed to the next section.

Your paragraph in the code editor should look similar to this:
```html
<p> SPOC was created by Moringa School, in partnership with UNESCO. Moringa School is a world-class education institution with the vision to transform higher-education in Africa.
<a href="http://www.moringaschool.com/spoc">Read More </a></p>
```

```js
it("has_an_a_element", function() {
  // Failure message:
  // Make sure that your code has a link defined by an <a></a> element.
  expect(document.getElementsByTagName("a")[0].innerHTML).not.toBeNull()
});
it("has_an_href_attribute", function() {
  // Failure message:
  // Make sure your <a></a> element has an href attribute
  expect(document.getElementsByTagName("a")[0].getAttribute("href")).not.toBeNull()
});
```

***************************************************************

## Lesson 2.8 - Links and attributes - href part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The `href` attribute defines a url (a web address) in its value.

For example `<a href="http://www.moringaschool.com/spoc">Moringa School</a>` is a link. When one clicks on it, the page at the web address `http://www.moringaschool.com/spoc` will be loaded in place of the current page.

We will define a list of 3 links to 3 different websites from our page:

**Instructions:**
1. Create a h1 element titled: "Hyperlinks to other pages"
2. Add a p element describing the purpose of links: "Links help us navigate from a web page to another."
3. Add a h2 element with content "Here is a list of a few links"
4. Add a ul element with three li elements.
5. Each li item will be a link to a different website.
6. After the opening li tag for the first list element, add an opening a tag then the words google search and close the a element before the closing li item tag.
7. Repeat step 5 for the next two items : E-citizen and Kenya Revenue Authority.
8. Add a href attribute for each of the listed links with the following values: `http://www.google.com`, `http://www.ecitizen.go.ke` and `http://www.kra.go.ke`.
	Your code should look like this:
	```html
    <h1>Hyperlinks to other pages</h1>
    <p>Links help us navigate from a web page to another.</p>
    <h2>Here is a list of a few links</h2>
    <ul>
        <li><a href="http://www.google.com">Google Search</a></li>
        <li><a href="http://www.ecitizen.go.ke">E-citizen</a></li>
        <li><a href="http://www.kra.go.ke">Kenya Revenue Authority</a></li>
    </ul>
	```
9. Click **run**. Run tests and fix any errors.
*There are many tests, scroll through to make sure you pass all of them.*
Click *submit* and go on to the next section.

```js
it("has_h1_element", function() {
  // Failure message:
  // Check to make sure you have an h1 element in your code.
  expect(document.getElementsByTagName("h1")[0].innerHTML).not.toBeNull()
});
it("has_a_h2_element", function() {
  // Failure message:
  // Check to make sure you have an h2 element in your code.
  expect(document.getElementsByTagName("h2")[0].innerHTML).not.toBeNull()
});
it("has_ul_element", function() {
  // Failure message:
  // Check to see that you have a ul element in your code.
  expect(document.getElementsByTagName("ul")[0].innerHTML).not.toBeNull()
});
it("has_li_elements", function() {
  // Failure message:
  // Check to see that you have all the li elements in your code.
  expect(document.getElementsByTagName("li")[0].innerHTML).not.toBeNull()
});
it("has_a_elements", function() {
  // Failure message:
  // Check to see that you have <a></a> elements in your code.
  expect(document.getElementsByTagName("a")[0].innerHTML).not.toBeNull()
});
it("links_have_href_attributes", function() {
  // Failure message:
  // Check to see that your links have href attributes.
  expect(document.getElementsByTagName("a")[0].getAttribute("href")).not.toBeNull()
});
```

*****************************************************************

## Lesson 2.9 - Links target attribute

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The target attribute can be used to specify where to open the linked document.

It can have one of the following attributes:
`_blank` - opens the link in a new tab or window.
 `_self` - opens the link in the same tab as the current document.

We've carried over code from the last section.

**Instructions:**
1. Add a `target` attribute to the first link (a) element with a value of `_blank`.
2. Add a `target` attribute to the second and third link elements with value `_self`.
3. Click run.
4. The first link will open in a new tab when clicked, while the other two will open in the same tab.
5. Run tests and fix any errors.
6. Click submit and go on to the next section.

Part of your code with the links should look similar to this:
```html
<ol>
    <li><a href="http://www.google.com" target="_blank">Google Search</a></li>
    <li><a href="http://www.ecitizen.go.ke" target="_self">E-citizen</a></li>
    <li><a href="http://www.kra.go.ke" target="_self">Kenya Revenue Authority</a></li>
</ol>
```

```js
it("has_a_target_attribute", function() {
  // Failure message:
  // Check to make sure your links have the appropriate target attributes
  expect(document.getElementsByTagName("a")[0].getAttribute("target")).not.toBeNull()
});
```

******************************************************************

## Lesson 2.10 - Links exercises

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Let us create some more links.

**Instructions:**
1. Click run to see the appearance of our page in the preview window.
2. Below the paragraph about Moringa School, Create an ordered list (ol) with 2 `li` items.
3. Each of the item will be a link to a page on the Moringa School website.
4. Put an `a` element in between the opening and closing li tags of each of the item elements.
5. Each `li` element will now look like this: `<li><a></a></li>`
6. Between the first set of a tags, type "Moringa School main website", and for the second, "Moringa School website blog".
7. Add `href` attributes to both a elements with values `http://www.moringaschool.com` and `http://www.moringaschool.wordpress.com` respectively.
8. Add `target` attributes to each link, the first with a `target` of `_blank` and the second with `_self`.
9. Click run to see the page in the preview window.
10. Run tests, and fix any errors.
11. Click submit and move on to the next section.


Your code should look like this:
```html
  <ol>
      <li><a target="_blank"href="http://www.moringaschool.com">Moringa School Main Website</a></li>
      <li><a href="http://www.moringaschool.wordpress.com" target="_self">Moringa School Blog Website</a></li>
  </ol>
```

```js
it("has_an_ordered_list", function() {
  // Failure message:
  // Check to make sure that you have an ordered list <ol></ol> in your code.
  expect(document.getElementsByTagName("ol")[0].innerHTML).not.toBeNull()
});
```

************************************************************************

## Lesson 2.11 - Images as links

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We can also use images as links.

In the code editor we have some code from a previous section.

We'll make the first image point to a webpage that has more information about transformers, and make it open in a different tab/window using the target attribute.

We do this by **wrapping** the img tag of an image in an a element, like this:
```html
<a href="#"><img height="43" src="url"></a>
```
**Instructions:**
1. Wrap the first image element in a tags.
2. Then add a href attribute to the a tag with value of `https://en.wikipedia.org/wiki/Optimus_Prime`. *Copy and paste this value.*
3. Finally, add a `target` attribute with a value of `_blank`
4. This part of your code should look similar to this:
	```html
      <a href="https://en.wikipedia.org/wiki/Optimus_Prime" target="blank">
      <img src="https://goo.gl/5Mc2Lo" height="200" alt="Transformer image">
      </a>
  ```
5. Click `run`.
6. The first image is now a link. When clicked, the page at the specified link will load in a new tab.
7. Run tests and fix any errors.
8. Submit and go on to the next section.

```js
it("has_an_a_element", function() {
  // Failure message:
  // Check to make sure that you have wrapped the image element in an <a></a> element.
  expect(document.getElementsByTagName("a")[0].innerHTML).not.toBeNull()
});
it("has_an_href_attribute", function() {
  // Failure message:
  // Check to see that your `a` element has an href attribute.
  expect(document.getElementsByTagName("a")[0].getAttribute("href")).not.toBeNull()
});
it("has_a_target_attribute", function() {
  // Failure message:
  // Check to make sure that your `a` element has a target attribute with a value of `_blank`.
  expect(document.getElementsByTagName("a")[0].getAttribute("target")).not.toBeNull()
});
```

************************************************************

## Lesson 2.12 - Lesson review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Great work! This time we learned about:
1. __Attributes__: components of HTML elements that help in controlling the properties of those elements. They include:
        - src - Specify the web address location of an image.
        - alt - Provide an alternative text to show in place of an image.
        - href- Specifies the url of the linked page in an HTML link.
        - height and width - Control the size of an image.
        - target - Specify where the linked page will be opened.
2. __Images__. Embedding images in html pages using img tags and src attribute with url values that point to the image sources on the internet.
```html
<img src="https://goo.gl/V57bzV">
```
3. __Links__: HTML elements that enable us to browse on to other pages or images on the internet by clicking on them. for example:
```html
    <h1><a href="www.moringaschool.com/spoc">SPOC by Moringa</a></h1>
```

**Instructions:**
1. Review with your partner the code on the code editor and make sure you understand what each of the lines mean.
2. Run the code and see the result in the preview window.
3. Add or modify some of the attributes, images or links on it to your satisfaction, but do not take too much time.
4. Submit and move on to the next section to write some more interesting code.

***************************************************************

## Lesson 2.13 - Open Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Nice work! Now you know a lot more on HTML!

Next time we'll learn about styling HTML elements. You will modify their colors, shapes, position and other appearances.

For now, let us use the knowledge we have to create a really cool website. It could be about anything.

Below we have provided some instructions for a sample HTML page. Use it as a template to add more elements.

Periodically hit run to see your progress on the preview window. *There is a list of image url's after the instructions. Use them in your page wherever you'd like.*

**Instructions:**
1. Declare that this is a html page with `<!DOCTYPE html>`.
2. Add an `<html></html>` element, everything else will go in this element.
3. Add `<head></head>` and `<body></body>` elements.
4. In the `<head></head>` element add a `<title></title>` element
5. In the body, add `h1` elements for your headings and `p` elements for your paragraphs.
6. Embed images using the `<img>` element.
7. Add links using the `<a href="url"></a>` elements.
8. Modify elements as you wish to make it a really cool website.

Part of your code could look like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Introduction to HTML</title>
  </head>
  <body>
    <h1>This is a nice title.</h1>
    <p> SPOC was created by Moringa School, in partnership with
       UNESCO. Moringa School is a world-class education
       institution with the vision to transform
       higher-education in Africa. </p>
  </body>
</html>
```
List of images you can use:
1. https://goo.gl/97jeew
2. https://goo.gl/SR5NCK
3. https://goo.gl/CJ8TXf
4. https://goo.gl/gpkL3a
5. https://goo.gl/YLqhFm
6. https://goo.gl/5Mc2Lo

************************************************************************
