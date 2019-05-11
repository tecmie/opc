# Lesson 8 - Project

**Objectives**
1. Students should be able to apply content from the 7 preceding lessons to do 2 projects.

**Outline:**

1. Project.
2. Open project.

*****************************************************

## Lesson 8.1 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We have come so far and learnt a lot of HTML and CSS, which is a big achievement. We are going to make a website to put it all down.

**Instructions:**
_Click run after every instruction to see the results._
1. Click run to render the page as it is.
2. Insert your name in the &lt;h2&gt; tag.
3. Insert the words ‘Junior SPOC’ into the &lt;em&gt; tag in the `rank` class.
4. Fill in the blank &lt;li&gt; tags with the some of the activities you have done in HTML and CSS respectively.(Feel free to add more items to the lists)
5. Link the `styles.css` file in the head element.
6. Set the `font-family` of all tags to `sans-serif` using the  `*` selector.
7. Add a `body` selector with a `display` property containing the value `flex`.
8. Add the `flex-direction` property to the `body` selector with the value `column`.
9. Add an `achievements` class selector with the `display` property containing the value `inherit` and the `justify-content` property containing the value `space-around`.
10. Add a `profile` selector.
11. Insert the following the styling into the `profile` selector:
```css
  padding: 50px;
  width: 70%;
  display: inherit;
  flex-direction: inherit;
  align-items: center;
  align-self: center;
  background-color: #32CD32;
  color: white;
```
12. Run test and submit.

```js

it("contains_student_name", function() {
  // Failure message:
  // Did you put your name in the <h2> tag?
  expect('.name').not.toHaveText('');
});
it("contains_junior_spoc", function() {
  // Failure message:
  // Have you added Junior SPOC to the <em> tag?
  expect('em').toHaveText('Junior SPOC');
});
it("contains_link_to_css", function() {
  // Failure message:
  // Have you linked styles.css?
  expect('link').toHaveAttr('href','styles.css');
});
it("contains_expected_font_family", function() {
  // Failure message:
  // Have you added the 'sans-serif' font?
  expect(document.querySelector('*')).toHaveCss({'font-family':'sans-serif'});
});
it("body_contains_expected_css", function() {
  // Failure message:
  // Have you added the required styling for the body selector?
  expect('body').toHaveCss({'display':'flex','flex-direction':'column'});
});
it("profile_class_contains_expected_css", function() {
  // Failure message:
  // Have you added the required styling for the profile class selector?
  expect('.profile').toHaveCss({'padding':'50px', 'color':'rgb(255, 255, 255)'});
});
```

***************************************************************

## Lesson 8.2 - Open project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

This project is intended to allow you to apply all that you have learnt in the previous 7 lessons in creating a website. Be as creative as possible.

**Instructions:**

Drury Cafe is a restaurant that is in urgent need of a website. Provided below are a list of image links to some items on the menu. The owner of the cafe would like the website to give a brief description of the cafe, show some customer reviews and show their menu.

On completion of this project, click run to see the final result and submit.

Image links:
  1. Fried chicken - [Link](https://www.pexels.com/photo/food-restaurant-meal-chicken-106343/)
  2. Fried Tilapia - [Link](https://www.pexels.com/photo/brown-fish-fillet-on-white-ceramic-plate-46239/)
  3. Lentil Soup - [Link]( https://www.pexels.com/photo/appetizer-bowl-bread-breakfast-539451/)
  4. Spaghetti Bolognaise - [Link]( https://www.pexels.com/photo/food-dinner-pasta-spaghetti-8500/)
  5. Salad _(with a dressing of your choice)_ - [Link](https://www.pexels.com/photo/appetizer-bowl-close-up-delicious-396132/)

  Food prices (add them to the menu)
    1. Fried Chicken - Ksh. 300
    2. Fried Tilapia - Ksh. 350
    3. Lentil Soup - Ksh. 200
    4. Spaghetti Bolognaise - Ksh. 250
    5. Salad - Ksh. 200

```js
it("added_sample_images", function() {
  // Failure message:
  // Have you added images to the website?
  expect('img').toExist();
});
it("contains_link_to_css", function() {
  // Failure message:
  // Have you added a link to the styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
```
