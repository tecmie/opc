## Lesson 16 - Projects

**Outline**
1. Project I (Background images & position)
2. Project II (shadows & selectors)
3. Project III (recreate a site)

## Lesson 16.1 - Project I

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**
In this project, we are going to build a website to help us practise the CSS property `position` and also adding background images. We will also be revisiting previous concepts from previous lessons. The website is going to visualize a football formation of a first eleven team. The football formation is a 4-3-3 (goalkeeper not included). The final result will look like this.

![](https://storage.googleapis.com/replit/images/1508752368265_a79a792a6ae0816b575be1d87f7384ee.png)

**Instructions:**

1. Click run to see the rendered page as it is.
2. In the styles.css give the `div` with the id "pitch" a background image with the following URL: https://goo.gl/TqNW4t and set the `background-repeat` value to `no-repeat`.
3. Give the first direct child of the `div` with the id "pitch", an id "defence",the second direct child of the `div` with the id "pitch", an id "midfield" and the third direct child of the `div` with the id "pitch, an id "attack".
4. Style the `div` with the id "pitch" to have the following styling:
  - Set the `height` to `480px`
  - Set the `width` to `20%`
  - Set the `background-size` to `cover`
  - Set the `display` to `flex`
  - Set the `flex-direction` to `column`
  - Set the `justify-content` to `space-around`
  - Set the `margin` to `auto`
  - Set the `font-family` to `sans-serif`
  - Set the `color` to `white`
5. Click run to see the rendered page. You will see an image of a football pitch with words like "RB" and "ST" on top.
6. Style the `div` with the id "defence" to have the following styling:
  - Set the `height` to `15%`
  - Set the `display` to `flex`
  - Set the `flex-direction` to `row`
  - Set the `justify-content` to `space-around`
7. Style the `div` with the id "midfield" to have the following styling:
  - Set the `height` to `15%`
  - Set the `display` to `flex`
  - Set the `flex-direction` to `row`
  - Set the `justify-content` to `space-around`
8. Style the `div` with the id "attack" to have the following styling:
  - Set the `height` to `15%`
  - Set the `display` to `flex`
  - Set the `flex-direction` to `row`
  - Set the `justify-content` to `space-around`
9. Click run to see the rendered page. You will see an image of a football pitch with words like "CM" evenly spaced and making it look like a 4-3-3 formation. Now let's add a team lineup.
10. Give the second direct child of the `body` tag an id "lineup".
11. Style the div with the id "lineup" to have the following styling:
  - Set the `font-family` to `sans-serif`
  - Set the `background-color` to `black`
  - Set the `color` to `white`
  - Set the `padding` to `20px`
  - Set the `position` to `fixed`
  - Set `top` to `0`
  - Set `right` to `0`
12. Click run to see the rendered page with a black section at the top right of the page.
13. Fill in the rest of the empty `<li>` tags with the names of your team members.
14. Click run to see the final rendered page. The page will resemble the image above.
15. Run tests and submit.

```js
it("div_with_id_lineup_has_been_styled_correctly", function() {
  // Failure message:
  // Have you styled the <div> with the id "lineup" correctly?
  expect('#lineup').toHaveCss({'font-family':'sans-serif','background-color':'rgb(0, 0, 0)','color':'rgb(255, 255, 255)','padding':'20px','position':'fixed','top':'0px','right':'0px'});
});
it("has_added_ids_for_children_divs", function() {
  // Failure message:
  // Have you added all the child ids correctly? (Please do not add more divs)
  var defence = document.getElementsByTagName('DIV')[1];
  var midfield = document.getElementsByTagName('DIV')[2];
  var attack = document.getElementsByTagName('DIV')[3];

  expect(defence).toHaveAttr('id','defence');
  expect(midfield).toHaveAttr('id','midfield');
  expect(attack).toHaveAttr('id','attack');
});
it("has_filled_the_list_of_11_players", function() {
  // Failure message:
  // Have you filled every <li> tag? (Do NOT delete any of the <li> tags)
  var player = document.getElementsByTagName('LI');
  var numberOfPlayers = document.getElementsByTagName('LI').length;
  expect(numberOfPlayers).toBe(11);
});
```

**************************************

## Lesson 16.2 - Project II

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

In this project, we are going to build a website to help us practise using shadows in CSS as well as CSS selectors. The website is going to list various classic movie franchises. The website will look like this:

![](https://storage.googleapis.com/replit/images/1508761541320_94536e88a30b2627a1ed2a00cfea7c8e.png)

**Instructions:**
1. Click run to see the rendered page as it is.
2. Style all elements to have a `font-family` of `sans-serif` using the `*` selector.
3. Style the `body` element to have a `background-color` of `#508AA8`.
4. Using the direct descendant selector (>) style all direct `h2` children of the `body` element to have the following styling:
  - Set the `text-align` to `center`.
  - Set the `color` to `#FAA916`
5. Using the combining selector (,) style the id "first" and "second" using the id selector, to have the following styling:
  - Set the `display` to `flex`.
  - Set the `justify-content` to `space-around`
6. Using the combining selector (,) style all direct `div` children of the `div` element with the id "first" and "second" to have the following styling.(The code will look like this: `#first>div, #second>div`):
  - Set the `height` to `200px`
  - Set the `width` to `20%`
  - Set the `display` to `flex`
  - Set the `justify-content` to `center`
  - Set the `align-items` to `center`
  - Set the `border-bottom` to `15px solid #FAA916`
7. Using the direct descendant selector (>) and `:hover` pseudo-selector, style the first `div` child (using the `:first-child` pseudo-selector) of the `div` element with the id "first" to have the following styling (The code will look like this `#first>div:first-child:hover`):
  - Set the `color` to `#FAA916`
  - Set the `border-bottom` to `15px solid black`
8. Using the direct descendant selector (>) and `:hover` pseudo-selector, style the first `div` child (using the `:first-child` pseudo-selector) of the `div` element with the id "second" to have the following styling:
  - Set the `color` to `#FAA916`
  - Set the `border-bottom` to `15px solid black`
  - Set the `text-shadow` to `none`
9. Using the direct descendant selector (>) and `:hover` pseudo-selector, style the direct `div` children of the `div` element with the id "second" to have the following styling:
  - Set the `text-shadow` to `5px 5px 1px #FAA916`
10. Click run to see the rendered page. The page will resemble the example above. Hover over the first div children to see them change color.
11. Run tests and submit.

```js
it("has_styled_all_selector", function() {
  // Failure message:
  // Have you styled using the '*' selector?
  expect('body').toHaveCss({'font-family':'sans-serif'})
});
it("has_styled_body_element", function() {
  // Failure message:
  // Have you styled the body element correctly?
  expect('body').toHaveCss({'background-color':'rgb(80, 138, 168)'});
});
it("direct_descendants_styled_correctly", function() {
  // Failure message:
  // Have you styled all direct h2 descendants of the body element?
  expect('body>h2').toHaveCss({'text-align':'center','color':'rgb(250, 169, 22)'});
});
it("combining_selector_used_correctly", function() {
  // Failure message:
  // Have you styled both the ids "first" and "second" using the combining selector?
  expect("#first").toHaveCss({'display':'flex','justify-content':'space-around'});
  expect("#second").toHaveCss({'display':'flex','justify-content':'space-around'});
});
```

*************************************************

## Lesson 16.3 - Project III

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction:**

In this project, we are going to recreate a website. The website is going to look like a page on YouTube while watching a video. This project is intended to help you practise embedding HTML media but will not resemble a YouTube page.
The website will look like this:

![](https://storage.googleapis.com/replit/images/1508825874958_c1fefa5874c23f72caebba7a808ce41e.png)

**Instructions:**
1. Click run to see the rendered page as it is.
2. Give the second `div` a class name "main".
3. Insert a `<video>` element into the `div` with the class name "main".
4. Give the `<video>` tag a `controls` attribute.
5. Give the `<video>` tag a `height` attribute with the value of `400`.
6. Give the `<video>` tag a `width` attribute with the value of `720`.
7. Insert a `<source>` tag inside the `<video>` element.
  - Give the `src` attribute the following value 'https://www.tutorialrepublic.com/examples/video/shuttle.mp4'.
  - Give the `type ` attribute the value `video/mp4`.
  - Add the following text as the fallback message: "Your browser does not support the video element"
8. Add a `<p>` tag after the `<video>` element and give it an id "description".
9. Inside the `<p>` tag with the id "description", insert the following words, "Space Shuttle Launch".
10. Click run to see the rendered page with the video embedded into it. Now let us style it.
11. Give the `body` element the following styling:
  - Set the `margin` to have a value of `0`
  - Set the `width` to have a value of `100%`
12. Give the `div` with the class name "header" to have the following styling:
  - Set the `width` to `100%`
  - Set the `height` to `50px`
  - Set the `box-sizing` to `border-box`
  - Set the `background-color` to `red`
  - Set the `box-shadow` to `0px 5px 5px grey`
  - Set the `position` to `fixed`
  - Set `top` to `0`
  - Set the `display` to `flex`
  - Set the `justify-content` to `space-between`
13. Using the combining selector (,); style both the `<p>` elements with the id "home" and the id "username" to have the following styling:
  - Set the `color` to `white`
  - Set the `font-family` to `sans-serif`
14. Give the `p` with the id "home" the following styling:
  - Set the `margin-left` to `30px`
15. Give the `p` with the id "username" the following styling:
  - Set the `margin-right` to `30px`
16. Give the `div` with the class name "main" to have the following styling:
  - Set the `width` to `100%`
  - Set the `height` to `500px`
  - Set the `margin-top` to `50px`
  - Set the `box-shadow` to `0px 5px 5px grey`
  - Set the `display` to `flex`
  - Set the `flex-direction` to `column`
  - Set the `align-items` to `center`
  - Set the `justify-content` to `center`
17. Give the `p` element with the id "description" the following styling:
  - Set the `font-size`to `24px`
  - Set the `font-family` to `sans-serif`
18. Click run to see the rendered page. It will look like the example in the picture above.
19. Run tests and submit.

*(Video credits: Tutorial Republic)*

```js
it("video_tag_embedded_correctly", function() {
  // Failure message:
  // Have you added the video element correctly? (Do NOT skip any of the instructions)
  expect('video').toExist();
  expect('video').toHaveAttr('controls');
  expect('video').toHaveAttr('height','400');
  expect('video').toHaveAttr('width','720');
  expect('source').toHaveAttr('src','https://www.tutorialrepublic.com/examples/video/shuttle.mp4');
  expect('source').toHaveAttr('type','video/mp4');
});
it("p_tag_with_id_description_styled_correctly", function() {
  // Failure message:
  // Have you styled the <p> element with the id "description" correctly?
  expect('#description').toExist();
  expect('#description').toContainText('Space Shuttle Launch');
  expect('#description').toHaveCss({'font-size':'24px','font-family':'sans-serif'});
});
it("combining_selector_used", function() {
  // Failure message:
  // Have you used the combining selector to style both ids "home" and "username"?
  expect('#home').toHaveCss({'color':'white','font-family':'sans-serif','margin-left':'30px'});
  expect('#username').toHaveCss({'color':'white','font-family':'sans-serif','margin-right':'30px'});
});
```
## 16.4 Custom HTML and CSS project

**Introduction**

You've learnt quite a lot with HTML and CSS.
Now it's time to build a website of your choice with the concepts that you have learnt.
All the best. :)

**Instructions:**
1. You're the one in control of this, so ensure you come up with fun and creative content to build your website!
2. Make your website look very appealing and attractive by styling it beautifully with CSS.

``` 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>My Custom Web Page</title>
</head>
<body>
<!--Write your content here.-->
</body>
</html>
```

**********************************
