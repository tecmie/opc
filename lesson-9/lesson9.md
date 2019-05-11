# Lesson 9 - Comments and HTML tables

**Objectives:**
1. Students should understand the concept of comments.
2. Students should be able to write and use comments in HTML and CSS.
3. Students should be able to use and style HTML tables.

**Outline:**
1. Comments introduction
2. HTML comments.
3. CSS comments.
4. HTML tables pt I.
5. HTML tables pt II.
6. HTML tables pt III.
7. HTML tables styling.
8. Project.

## Lesson 9.1 - Comments Introduction

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When creating websites we will want to write down some notes on our code to remind us what exactly it does. Such kind of notes are called _comments_.
Comments are written in Plain English and are not executed in the code.

**Instructions:**
1. Add the following comment to the `index.html` file inside the `<body>` tag (take time to look at the structure of this HTML comment):
```html
		<!-- Hello Junior SPOC students! Please like and leave a comment below -->
```
2. Run tests and submit.

*********************************************************
## Lesson 9.2 - HTML Comments

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson we saw what a comment looks like. In HTML, comments are written with an opening `<!--` tag and a closing `-->` tag. As mentioned in the previous lesson, comments are not executed so we can use them to hide some of our HTML from being rendered.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Comment out the <p> tag in the index.html so that it now looks like this:
```html
		<!-- <p>Now you see me, now you don't </p> -->
```
3. Click run see the rendered page. The `<p>` tag is now not seen in the rendered page.
4. Run tests and submit.

```js
it("hides_p_tag", function() {
  // Failure message:
  // Have you commented out the <p> tag?
  expect('p').not.toExist()
});
```

***************************************************

## Lesson 9.3 - CSS Comments

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We have learned how to add comments in HTML and the same can be done in CSS. In CSS, comments are written with an opening `/* and a closing */`. When we add comments in CSS, the elements to be styled will not be styled. Therefore, comments in CSS would look like this:
```css
/*p{
padding: 50px;
color: goldenrod;
}*/
```

**Instructions:**
1. Click run to see the rendered page as it is.
2. Comment out the `h3` selector so that it looks like this:
```css
/*h3{
		color : #f0f0f0;
		background-color: #33ee33;
		padding: 30px;
	}*/
```
3. Click run to see the rendered page.
4. Run tests and submit.

```js
it("h3_styling_has_been_commented_out", function() {
  // Failure message:
  // Have you commented out the styling for the h3 selector?
  expect('h3').not.toHaveCss({'color':'rgb(240, 240, 240)','background-color':'rgb(51, 238, 51)','padding':'30px'});
});
```

********************************

## Lesson 9.4 - HTML Tables pt 1

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In this lesson, we are going to learn how to make tables in HTML. Unlike other elements in HTML, making a table requires using many elements which we will learn about in the coming lessons.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Add the following code inside the `<body>` tag (take time to look at the code and see how tables are structured):
```html
		<table>
			<tr>
				<th>Team</th>
				<th>Points</th>
			</tr>
			<tr>
				<td>M Blue</td>
				<td>52</td>
      </tr>
      <tr>
	     <td>Tots</td>
	     <td>50</td>
      </tr>
      <tr>
	     <td>Poolers</td>
	     <td>48</td>
      </tr>
      <tr>
	     <td>Shooters</td>
	     <td>47</td>
      </tr>
		</table>
```
3. Click run to see the rendered page with a table added to it.
4. Run tests and submit.

```js
it("table_element_exists", function() {
  // Failure message:
  // Have you added the <table> element?
  expect('table').toExist();
});
it("additional_table_elements_exist", function() {
  // Failure message:
  // Have you copied all of the sample code?
  expect('th').toExist();
  expect('td').toExist();
  expect('tr').toExist();
});
```

**************************************************************

## Lesson 9.5 - HTML Tables pt 2

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson, we saw the basic structure of an HTML table which requires many elements. In this lesson we will look at 2 of these elements and understand what they do. These are &lt;table&gt; and &lt;tr&gt;.
  - &lt;table&gt; is used to define the start and end of an HTML table.
  - &lt;tr&gt; (called table row) is used to define a table row.
_(columns are vertical and rows are horizontal)_

**Instructions:**
1. Click run to see the rendered page as it is.
2. Insert the following code inside the `<body>` tag:
```html
<table>
    <tr>
			<th>Name</th>
			<th>Age</th>
    </tr>
</table>
```
3. Add a new table row to the `<table>` that looks like this:
```html
<tr>
	<td class="name">Kaka Sungura</td>
	<td class="age">16 years</td>
</tr>
```
4. Click run to see the rendered page with a table added to it.
5. Add another new table row that looks like this:
```html
<tr>
	<td class="name1">MayGregor MacWeather</td>
	<td class="age1">34 years</td>
</tr>
```
6. Click run to see the rendered page. Feel free to add more rows.
7. Run tests and submit.

```js
it("table_exists", function() {
  // Failure message:
  // Have added the exercise code correctly?
  expect('table').toExist();
  expect('tr').toExist();
  expect('th').toExist();
  expect('td').toExist();
});
it("table_data_insert_accurately", function() {
  // Failure message:
  // Have you added the correct data into the table?
  expect('.name').toContainText('Kaka Sungura');
  expect('.age').toContainText('16 years');
  expect('.name1').toContainText('MayGregor MacWeather');
  expect('.age1').toContainText('34 years');
});
```
********************************************

## Lesson 9.6 - HTML Tables pt 3

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson, we saw 2 of the elements used in making HTML tables: &lt;table&gt; and &lt;th&gt;. In this lesson, we will look 2 other elements: &lt;th&gt; and &lt;td&gt;.
  - &lt;th&gt; (called table header) is used to define the header of column in a table.
  - &lt;td&gt; (called table data) is used to define the data that is input in a table cell.
_(A cell is an intersection of a column and a row)_

**Instructions:**
1. Click run to see the rendered page as it is.
2. Add a table row to the HTML table that looks like this:
```html
		<tr>
			<td>Team A</td>
			<td>21</td>
		</tr>
```
3. Change the second _table header_ from 'Points' to 'Games Played'.
4. Click run to see the rendered page.
5. Run tests and submit.

```js
it("changed_table_header", function() {
  // Failure message:
  // Have you changed the second table header to games played?
  expect(document.getElementsByTagName("TH")[1]).toContainText("Games Played");
});
it("added_table_row", function() {
  // Failure message:
  // Have you added the table row in the exercise?
  var rows = document.getElementsByTagName("TR");
  expect(rows.length).toEqual(5);
});
```

*************************************************************

## Lesson 9.7 - HTML Tables Styling

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In these previous lessons we have managed to build HTML tables. In this lesson we will style our HTML tables using CSS. We will give the table borders.

**Instructions:**
1. Click run to see the rendered page as it is.
2. In the `styles.css` file add the following CSS:
```css
table, tr, td{
	border: 1px solid black;
	padding: 5px;
	border-collapse: collapse;
}
```
3. Click run to see the rendered page with a table with collapsed borders.
4. Run tests and submit.

```js
it("linked_the_stylesheet", function() {
  // Failure message:
  // Have you linked the styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("styled_the_table_as_expected", function() {
  // Failure message:
  // Have you styled the table correctly?
  expect('table').toHaveCss({'padding':'5px','border-collapse':'collapse'});
  expect(document.getElementsByTagName("TR")[0]).toHaveCss({'padding':'5px','border-collapse':'collapse'});
});
```

***************************************************************

## Lesson 9.8 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

This project is intended to help you practice making HTML tables. Feel free to apply as much styling as you want.

**Instructions:**
1. Click run to see the rendered page as it is.
2. Create an HTML table to display the following data:
Team Name	Points
		First XI		21
		Chippa Utd	19
		Tanks FC	18
		Winning XI	18
3. Run tests and submit.

```js
it("linked_stylesheet_file", function() {
  // Failure message:
  // Have you linked your styles.css file?
  expect('link').toHaveAttr('href','styles.css');
});
it("table_is_created", function() {
  // Failure message:
  // Have you created the table correctly using table headers and added all the table data provided?
  expect('table').toExist();
  expect(document.getElementsByTagName('TH')[0]).toExist();
  expect(document.getElementsByTagName('TD')[0]).toExist();
  expect(document.getElementsByTagName('TR')[0]).toExist();
});
it("table_is_accurately_created", function() {
  // Failure message:
  // Have you input the table data correctly?
  expect(document.getElementsByTagName('TD')[0]).toContainText('First XI');
  expect(document.getElementsByTagName('TH')[0]).toContainText('Team Name');
});
```
******************************************************************
