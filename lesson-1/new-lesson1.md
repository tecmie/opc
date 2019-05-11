## Lesson 1 - Introduction

**Outline**
1. Introduction
2. What is HTML?
3. Tags
4. DOCTYPE
5. html
6. head
7. title
8. body
9. headings
10. subheadings
11. subheadings part 2
12. paragraph
13. paragraph part 2
14. unordered lists
15. unordered lists part 2
16. ordered lists
17. ordered lists part 2
18. review
19. custom web page

************************************************************

## Lesson 1.1 - Introduction

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Today we'll learn how to make a simple website using HTML, like the one shown on the left.

**Instructions:**
1. Click run to see what the HTML looks like when rendered in a browser.
2. Put your name between the &lt;h2&gt; and &lt;/h2&gt; in the text editor on the left and click run again. You should see your name in the browser preview area below the text editor.
3. Click on the down arrow next to the run button, and click run tests.
4. If all tests pass, click the green submit button in the top right. That will confirm that all tests pass, then you can click submit again.
5. Click back to classroom (to the left of the run button), then go to lesson 1.2.

```js
it("has_student_name_in_h2", function() {
  // Failure message:
  // Replace "Intro to HTML" with your name
  expect(document.getElementsByTagName("h2")[0].innerHTML).not.toBe("Lions");
});
```

*********************************************************

## Lesson 1.2 - What is HTML?

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

HTML stands for HyperText Markup Language. HyperText just means we can link to other web pages. Markup means it gives extra instructions to the content (using tags) to make it more than just plain text.
Every website is created with HTML. It provides the structure of a web page.
Click run. You'll notice our page looks pretty plain. Don't worry, we'll get to styling it with CSS later.
In the meantime, let's make our text editor a little nicer.

**Instructions:**
1. Click the 3 dots in the top left (next to the back to classroom button).
2. Change the theme. Click on light and then select dark.  
3. Disable autocomplete. At the bottom, find the autocomplete section, click enabled, and select disabled.  
4. Click the green submit button in the top right. Then submit again. Then click back to classroom, and move to the next lesson.

**************************************************************

## Lesson 1.3 - Tags

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

HTML is structured by __tags__. A tag is written between angle brackets, like <title>.

You'll notice each __opening tag__ has a corresponding __closing tag__, for example <title> and </title>.

The opening tag, closing tag, and all the content between them together make up an __element__, so <title>Lesson 1</title> is called the title element.

Let's get rid of the h1 element.

**Instructions:**
1. Click run to see what the page looks like when rendered.  
2. Run the tests by clicking the down arrow next to run, and selecting run tests. Note that the test does not pass. You can see more information by clicking on the error.  
3. Remove the h1 element by deleting line 7.
4. Click run again.  Note that the big heading is gone.  
5. Run the tests again.
6. If tests pass, click the green submit button in the top right. Click submit again.  
7. Click back to classroom in the top left, and move on to the next section.

```js
it("removed_h1_element", function() {
  // Failure message:
  // The <h1> element hasn't been removed.
  expect(document.getElementsByTagName("h1").length).toEqual(0);
});
```

***************************************************************

## Lesson 1.4 - DOCTYPE

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Let's start building a website from a blank document.
DOCTYPE is a special tag that tells the web browser what language to interpret this document in. We're writing HTML, so we'll start with <!DOCTYPE html>.

**Instructions:**
1. Write `<!DOCTYPE html>` in the code editor on the left, then click submit and move on to the next lesson.
```js
it("has_a_doctype", function() {
  // Failure message:
  // Missing DOCTYPE. Write <!DOCTYPE html> in the editor.
  expect(document.doctype).not.toBeNull();
});
```

********************************************************

## Lesson 1.5 - html

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Great. Now the browser knows we're running HTML.
All of our HTML goes inside an html tag.

**Instructions:**
1. Add opening and closing html tags, like this:
```html
<!DOCTYPE html>
<html>
</html>
```

```js
it("has_html_tags", function() {
  // Failure message:
  // Missing html tags. Add an opening and closing html tag, like the example.
  expect(document.getElementsByTagName("html")[0].outerHTML).not.toBeNull();
});
```
*******************************************

## Lesson 1.6 - head

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

HTML is always split up into head and body elements.

The head contains information that doesn't appear on the webpage itself, such as the title of the tab.

**Instructions:**
1. Add a head element, like this:
```html
<!DOCTYPE html>
  <html>
    <head>
    </head>
  </html>
```

```js
it("has_a_head_element", function() {
  // Failure message:
  // Missing head element. Add one, following the example on the right.
  expect(document.getElementsByTagName("head")).not.toBeNull();
});
```

***************************************************************

## Lesson 1.7 - title

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Now let's add a title to our page.

<title> contains the title shown at the top of your browser. For example, the title of this page is repl.it - Lesson 1.7 - title.

![](https://storage.googleapis.com/replit/images/1499027868205_37c2fdff448605633ec482c582e0c846.png)

**Instructions:**
1. Make the title of the page Big Cats, like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
</html>
```

```js
it("has_a_title", function() {
  // Failure message:
  // Missing title element. Add one, following the example on the right.
  expect(document.title).not.toEqual("");
});
it("title_is_big_cats", function() {
  // Failure message:
  // Title should be "Big Cats". (Make sure it's capitalized correctly and there are no extra spaces.)
  expect(document.title).toBe("Big Cats");
});
```

**********************************************************

## Lesson 1.8 - body

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The body contains the main content of your page, which users can actually see. Most of our HTML will be written in here.

**Instructions:**
1. Add a body element, like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
  <body>
  </body>
</html>
```

```js
it("added_a_body_element", function() {
  // Failure message:
  // Missing <body> element. Add one, following the example on the right.
  expect(document.body.innerHTML).not.toEqual("");
});
```
**********************************************************

## Lesson 1.9 - headings

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Now let's get something on the page.

h1 is a big heading. It often matches the title.

**Instructions:**
1. Add a heading that says Big Cats to your page, like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
  <body>
    <h1>Big Cats</h1>
  </body>
</html>
```
2. Then hit run to see what it looks like!

```js
it("added_an_h1_element", function() {
  // Failure message:
  // Missing h1. Add one, following the example on the right.
  expect(document.getElementsByTagName("h1")[0].innerHTML).not.toBeNull()
});
it("has_correct_content", function() {
  // Failure message:
  // The h1 should say "Big Cats". Make sure it's capitalized correctly and doesn't have any extra spaces.
  expect(document.getElementsByTagName("h1")[0].innerHTML).toEqual("Big Cats");
});
```

*******************************************************

## Lesson 1.10 - subheadings

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Nice!
There are other smaller headings, called subheadings. h2, h3, h4, h5, and h6 are valid subheadings. h1 is bigger than h2, which is bigger than h3, and so on.

**Instructions:**
1. Add a subheading that says Lions to your page for our section about lions:
```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Big Cats</title>
    </head>
    <body>
      <h1>Big Cats</h1>
      <h2>Lions</h2>
    </body>
  </html>
```

```js
it("added_an_h2_element", function() {
  // Failure message:
  // Missing <h2> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("h2")[0].innerHTML).not.toBeNull();
});
it("has_correct_content", function() {
  // Failure message:
  // Your h2 should say "Lions". Make sure it's capitalized correctly and doesn't have any extra spaces.
  expect(document.getElementsByTagName("h2")[0].innerHTML).toEqual("Lions");
});
```

***************************************************************

## Lesson 1.11 - subheadings part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Instructions:**

1. Add a subheading that says Tigers to your page:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
  <body>
    <h1>Big Cats</h1>
    <h2>Lions</h2>
    <h2>Tigers</h2>
  </body>
</html>
```

```js
it("added_an_h2_element", function() {
  // Failure message:
  // Missing h2. Follow the example on the right.
  expect(document.getElementsByTagName("h2")[1].innerHTML).not.toBeNull();
});
it("has_correct_content", function() {
  // Failure message:
  // Second h2 doesn't say "Tigers". Make sure it's capitalized properly and has no extra spaces.
  expect(document.getElementsByTagName("h2")[1].innerHTML).toEqual("Tigers");
});
```

********************************************************************

## Lesson 1.12 - paragraph

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

To add more text to a page, use a p element, which stands for __paragraph__.

**Instructions:**
1. Add a paragraph about lions, like this:
```html
	<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
  <body>
    <h1>Big Cats</h1>
    <h2>Lions</h2>
    <p>Here are some fun facts about lions.</p>
    <h2>Tigers</h2>
  </body>
</html>
```
2. Don't forget to hit run to see what it looks like.

```js
it("added_a_p_element", function() {
  // Failure message:
  // Missing <p> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("p")[0].innerHTML).not.toBeNull();
});
it("has_correct_content", function() {
  // Failure message:
  // Text content is incorrect. Make sure it's capitalized correctly and doesn't have any extra spaces.
  expect(document.getElementsByTagName("p")[0].innerHTML).toEqual("Here are some fun facts about lions.");
});
```

***********************************

## Lesson 1.13 - paragraph part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Instructions:**

1. Add another p element about tigers:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Big Cats</title>
  </head>
  <body>
    <h1>Big Cats</h1>
    <h2>Lions</h2>
    <p>Here are some fun facts about lions.</p>
    <h2>Tigers</h2>
    <p>Here are some fun facts about tigers.</p>
  </body>
</html>
```

```js
it("added_a_p_element", function() {
  // Failure message:
  // Missing <p> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("p")[1].innerHTML).not.toBeNull();
});
it("has_correct_content", function() {
  // Failure message:
  // Text content is incorrect. Make sure it's capitalized correctly and doesn't have any extra spaces.
  expect(document.getElementsByTagName("p")[1].innerHTML).toEqual("Here are some fun facts about tigers.");
});
```

*******************************************************

## Lesson 1.14 - unordered lists

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Often websites have lists of things. For example, a news website might have news categories to choose from, or a recipe site might have a list of steps to follow.
Our website will have a list of fun facts about lions!

Lists can be ordered (using `<ol>`) or unordered (using `<ul>`). Either way, they contain list items (using `<li>`).

**Instructions:**
1. Try adding an unordered list (using `<ul>`) with facts about lions. Things are starting to get a bit crowded, so from now on we'll just show the <body> here:
	```html
	<body>
    <h1>Big Cats</h1>
    <h2>Lions</h2>
    <p>Here are some fun facts about lions.</p>
    <ul>
      <li>Lions weigh up to 250 kgs.</li>
      <li>A lion's roar can be heard up to 8 km away.</li>
      <li>Female lions hunt, while male lions guard their territory and their cubs.</li>
    </ul>
    <h2>Tigers</h2>
    <p>Here are some fun facts about tigers.</p>
  </body>
	```
By the way, you might have noticed a comment in the text editor that says write your code here.

A comment is a piece of code that has no effect on the resulting web page, but can be useful to write for anyone reading your code.

A comment starts with `<!-- `and ends with` -->`, so altogether a comment looks like this:
```html
<!-- this is a comment -->
```

```js
it("added_a_ul_element", function() {
  // Failure message:
  // Missing <ul> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("ul")[0].innerHTML).not.toBeNull();
});
it("added_three_li_elements", function() {
  // Failure message:
  // Missing <li> elements. Make sure you have three, following the example on the right.
  expect(document.getElementsByTagName("li")[2].innerHTML).not.toBeNull();
});
```

****************************************************
## Lesson 1.15 - unordered lists part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Instructions:**

1. Now add an unordered list with facts about tigers, like this:
	```html
  <body>
    <h1>Big Cats</h1>
    <h2>Lions</h2>
    <p>Here are some fun facts about lions.</p>
    <ul>
      <li>Lions weigh up to 250 kgs.</li>
      <li>A lion's roar can be heard up to 8 km away.</li>
      <li>Female lions hunt, while male lions guard their territory and their cubs.</li>
    </ul>
    <h2>Tigers</h2>
    <p>Here are some fun facts about tigers.</p>
    <ul>
      <li>Tigers are the largest of the big cats, weighing up to 300 kg.</li>
      <li>Each tiger's stripes are unique.</li>
      <li>Tigers are very good swimmers.</li>
    </ul>
  </body>
	```

```js
it("added_a_ul_element", function() {
  // Failure message:
  // Missing <ul> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("ul")[1].innerHTML).not.toBeNull();
});
it("added_three_li_elements", function() {
  // Failure message:
  // Missing <li> elements. Add them, following the example on the right.
  expect(document.getElementsByTagName("li")[5].innerHTML).not.toBeNull();
});
```

**********************************************************

## Lesson 1.16 - ordered list

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Unordered lists (`<ul>`) are formatted with bullet points. Ordered lists (`<ol>`) are formatted with numbers.

It's important that viewers of our website know what to do if they run into a lion.

**Instructions:**
1. Add a paragraph (`<p>`) and an ordered list (`<ol>`) about lions, like this:
	```html
	<body>
  <h1>Big Cats</h1>
  <h2>Lions</h2>
  <p>Here are some fun facts about lions.</p>
  <ul>
    <li>Lions weigh up to 250 kgs.</li>
    <li>A lion's roar can be heard up to 8 km away.</li>
    <li>Female lions hunt, while male lions guard their territory and their cubs.</li>
  </ul>
  <p>What to do if a lion sneaks up on you:</p>
  <ol>
    <li>Freeze.</li>
    <li>Don't make eye contact.</li>
    <li>Wave your arms above your head and scream as loud as you can!</li>
  </ol>
  <h2>Tigers</h2>
  <p>Here are some fun facts about tigers.</p>
  <ul>
    <li>Tigers are the largest of the big cats, weighing up to 300 kg.</li>
    <li>Each tiger's stripes are unique.</li>
    <li>Tigers are very good swimmers.</li>
  </ul>
</body>
```
Now we know the order of steps to take when we run into a lion!

```js
it("added_a_p_element", function() {
  // Failure message:
  // Missing <p> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("p")[2].innerHTML).not.toBeNull();
});
it("added_an_ol_element", function() {
  // Failure message:
  // Missing <ol> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("ol")[0].innerHTML).not.toBeNull();
});
it("added_three_li_elements", function() {
  // Failure message:
  // Missing <li> elements. Add three, following the example on the right.
  expect(document.getElementsByTagName("li")[8].innerHTML).not.toBeNull();
});
```

************************************************************

## Lesson 1.17 - ordered lists part 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Let's add an ordered list to our tiger example.

Things were getting too long again, so we cut out some of the content below and replaced it with a comment.

**Instructions:**
1. Now add another paragraph (`<p>`) and ordered list (`<ol>`) about tigers.
	```html
<body>
  <!-- Some content has been cut out for space. -->
  <h2>Tigers</h2>
  <p>Here are some fun facts about tigers.</p>
  <ul>
    <li>Tigers are the largest of the big cats, weighing up to 300 kg.</li>
    <li>Each tiger's stripes are unique.</li>
    <li>Tigers are very good swimmers.</li>
  </ul>
  <p>The most populous species left are:</p>
  <ol>
    <li>Bengal tiger (about 2,000)</li>
    <li>Indochinese tiger (about 1,000)</li>
    <li>Sumatran tiger (about 500)</li>
  </ol>
</body>
```

```js
it("added_a_p_element", function() {
  // Failure message:
  // Missing <p> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("p")[3].innerHTML).not.toBeNull();
});
it("added_an_ol_element", function() {
  // Failure message:
  // Missing <p> element. Add one, following the example on the right.
  expect(document.getElementsByTagName("ol")[1].innerHTML).not.toBeNull();
});
it("added_three_li_elements", function() {
  // Failure message:
  // Missing <li> elements. Add three, following the example on the right.
  expect(document.getElementsByTagName("li")[11].innerHTML).not.toBeNull();
});
```

***************************************************************

## Lesson 1.18 - Review

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Great work!

We just created our first web page using HTML. We learned about important tags: DOCTYPE, html, head, title, body, h1, h2, p, ul, ol, and li.

Take a minute to answer the following questions with your partner. If you’re not sure about your answer, discuss it with another pair.

- What's the difference between a tag and an element?
- What are the two parts of every html element?
- Think about some websites you've seen. What features would you like to be able to add to your own site?

**Instructions:**
1. When you're done, add an `<h1>` that says Authors and a `<p>` with your names at the end of the body.
	```html
  <body>
    <!-- content removed to save space -->
    <h1>Authors</h1>
    <p>Name One and Name Two</p>
  </body>
	```
2. Then, as always, run your code and check it out.
3. Congratulations on building your first web page!

```js
it("has_two_h1_elements", function() {
  // Failure message:
  // Missing <h1> element. Add one with your name, following the example on the right.
  expect(document.getElementsByTagName("h1")[1].innerHTML).not.toBeNull();
});
it("has_correct_content", function() {
  // Failure message:
  // h1 should say Authors. Make sure it's capitalized correctly and doesn't have any extra spaces.
  expect(document.getElementsByTagName("h1")[1].innerHTML).toEqual("Authors");
});
it("has_five_p_elements", function() {
  // Failure message:
  // Missing <p> element. Add one with your names, following the example on the right.
  expect(document.getElementsByTagName("p")[4].innerHTML).not.toBeNull();
});
```

*************************************************************

## Lesson 1.19 - Custom web page

![Moringa School and Unesco](../images/moringa_unesco.png)

It's time for you to continue to practice using the concepts you learned today by building a website! It can be about anything you want.

Here are some ideas to get you started:
  + Create a website for your business idea. Put the name of your business in an `<h1>` element, list the services you offer, and write a paragraph with a description of the company.
  + Create a fan site for your favorite band. Add a list of your favorite songs or albums. Write a short biography paragraph for each member of the band.
  + Create a personal website all about you! List your interests, your friends, places you want to visit - the options are endless.
Feel free to look back at previous lessons to refresh your memory on HTML.
