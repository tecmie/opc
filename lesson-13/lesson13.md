## Lesson 13 - Audio and Video

**Outline**
1. HTML Media Introduction.
2. HTML audio pt I.
3. HTML audio pt II.
4. HTML audio pt III.
5. HTML video pt I.
6. HTML video pt II.
7. Project.

******************************************

## Lesson 13.1 - HTML Media Introduction

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In HTML, we are able to add audio and video into our websites as easily as adding images. We will be using the `<audio>` and `<video>` tags to add media to our websites.
Since audio and video files require a lot of bandwidth so as to load them, you should use them sparingly so that your website loads faster.
**NOTE**: Due to internet connection speeds, it can take very long to view a video. Due to compatibility issues, we **strongly** advise that you use Google Chrome.

**Instructions:**

1. Run tests and submit.

```js
it("no_test", function() {
    // Failure message:
    expect(1).toBe(1);
});
```
**********************************************************************

## Lesson 13.2 - HTML audio pt I

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When we want to add audio into our website, we use the `<audio>` tag. Let us look at an example of how an audio file is added to HTML.
```html
	<audio controls>
		<source src="https://html5tutorial.info/media/vincent.mp3" type="audio/mp3">
Your browser does not support the audio element
	</audio>
```
*(Credits: HTML5tutorial)*

We see several additional elements and attributes here. Let's go through them and see what they do. The `<audio>` tag is used to define an audio file that is being embedded into the HTML file. The `controls` attribute we will look into in the next lesson.

The `<source>` tag, inside of the `<audio>` tag, is used to define the source of the audio file and is a **self-closing** tag. The first attribute in the `<source>` tag is the `src` attribute. The `src` attribute is used to define the URL for the audio file. We will look into the `type` attribute in the next lesson.

Sometimes the format of the audio file is not compatible with the browser meaning the audio cannot be played. To help with this problem, you can add more `<source>` tags with other sources of the audio file that can be compatible with the browser.

The final text, 'Your browser does not support the audio element' is written as a **fallback message**. This means, in case the browser in use does not support HTML audio, that text is displayed.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Add an `<audio>` tag into the body of the index.html file.
3. Give the `<audio>` tag the `controls` attribute.
4. Add a `<source>` tag inside the `<audio>` tag.
    - Give the `src` attribute the following value 'https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3'.
    - Give the `type ` attribute the value `audio/mp3`.
5. Add the following text as the fallback message: "Your browser does not support the audio element". The following code will look like this:
	```html
		<audio controls>
			<source src="https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3" type="audio/mp3">
			Your browser does not support the audio element
		</audio>
	```
6. Click run to see the rendered page with a white bar that has a play button. Click the play button to listen to the audio.
7. Run tests and submit.

*(Audio credits: Elated.com)*

```js
it("audio_tag_added_correctly", function() {
    // Failure message:
    // Have you added the audio tag correctly to your index.html?
    expect("audio").toExist();
    expect("audio").toHaveAttr("controls");
});
it("source_tag_added_correctly", function() {
    // Failure message:
    // Have you added the source tag correctly to your index.html?
    expect("source").toExist();
    expect("source").toHaveAttr("src","https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3");
    expect("source").toHaveAttr("type","audio/mp3");
});
it("has_added_fallback_message_after_source_tag", function() {
    // Failure message:
    // Have you added the fallback message after the source tag
    // Ensure the fallback message does not end with a blank space
    expect("audio").toContainText("Your browser does not support the audio element");
});
```

***************************************************************************

## Lesson 13.3 - HTML audio pt II

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

In the previous lesson, we covered some of the elements and attributes used in adding audio into HTML where we saw the `controls` attribute and `type` attribute.

The `type` attribute is used to specify what **type** of file we are sourcing. If the file is an audio mp3 file, the value of the `type` attribute will be `audio/mp3`. If the URL ends with `.mp3` then it's an mp3 file. The `type` attribute is a little complex and so we will leave it at that.

When adding (also referred to as embedding) audio to the HTML, we can give the audio controls like pausing, playing and seeking (playing certain sections of the audio/video). To add these controls manually requires a lot of code and is beyond the scope of this lesson. In place of that, you can simply add the `controls` attribute to the `<audio>` (which takes no value) and then the HTML will provide some default controls for you. Easy as that!

**Instructions:**

1. Click run to see the rendered page as it is.
2. Add an `<audio>` tag into the body of the index.html file.
3. Give the `<audio>` tag the `controls` attribute.
4. Add a `<source>` tag inside the `<audio>` tag.
    - Give the `src` attribute the following value 'https://html5tutorial.info/media/vincent.mp3'.
    - Give the `type ` attribute the value `audio/mp3`.
5. Add the following text as the fallback message: "Your browser does not support the audio element".
6. Click run to see the rendered page with a white bar that has a play button. Click the play button to listen to the audio.
7. Run tests and submit.

*(Credits: HTML5tutorial)*

```js
it("has_added_audio_tag_correctly", function() {
    // Failure message:
    // Have you added the audio element correctly?
    expect("audio").toExist();
    expect("audio").toHaveAttr("controls");
});
it("has_added_the_source_tag_correctly", function() {
    // Failure message:
    // Have you added the "source" tag correctly?
    expect("source").toExist();
    expect("source").toHaveAttr("src","https://html5tutorial.info/media/vincent.mp3");
    expect("source").toHaveAttr("type","audio/mp3");
});
it("has_added_fallback_message", function() {
    // Failure message:
    // Have you added the fallback message after the source tag
    // Do not add the quotation marks as well
    expect("audio").toContainText("Your browser does not support the audio element");
});
```

***********************************************************************

## Lesson 13.4 - HTML audio pt III

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

When adding(embedding) audio into HTML, we used the special attribute `controls` to give our audio default controls. There are two other special attributes we can use when embedding audio: `autoplay` and `loop`. When we want our audio to play automatically once our page has loaded, we use the `autoplay` attribute, which is added to the `<audio>` tag. The HTML will look like this:
```html
    <audio controls autoplay>
			<source src="https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3" type="audio/mp3">
			Your browser does not support the audio element
    </audio>

```
When we want our audio to play on repeat infinitely, we use the `loop` attribute, which is added to the `<audio>` tag. The HTML will look like this:
```html
    <audio controls loop>
			<source src="https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3" type="audio/mp3">
			Your browser does not support the audio element
	</audio>

```
**Instructions:**

1. Click run to see the rendered page as it is.
2. Add an `<audio>` tag into the body of the index.html file.
3. Give the `<audio>` tag the `controls` attribute.
4. Give the `<audio>` tag the `autoplay` attribute.
5. Add a `<source>` tag inside the `<audio>` tag.
    - Give the `src` attribute the following value 'https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3'.
    - Give the `type ` attribute the value `audio/mp3`.
6. Add the following text as the fallback message: "Your browser does not support the audio element".
7. Click run to see the rendered page with a white bar that has a play button. The audio will automatically start playing once it has finished being loaded.
8. Remove the `autoplay` attribute from the `<audio>` tag.
9. Give the `<audio>` tag the `loop` attribute.
10. Click run to see the rendered page.
11. Click the play button on the white bar. You will hear the audio play continuously.
12. Run tests and submit.

```js
it("has_added_the_audio_tag_correctly", function() {
    // Failure message:
    // Have you added the audio tag correctly?
    expect("audio").toExist();
    expect("audio").toHaveAttr("controls");
    expect("audio").toHaveAttr("loop");
});
it("has_added_the_source_tag_correctly", function() {
    // Failure message:
    // Have you added the source element correctly?
    expect("source").toExist();
    expect("source").toHaveAttr("src","https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3");
    expect("source").toHaveAttr("type","audio/mp3");
});
it("has_added_the_fallback_message", function() {
    // Failure message:
    // Have you added the fallback message?
    expect("audio").toContainText("Your browser does not support the audio element");
});
```

***********************************************************************

## Lesson 13.5 - HTML video pt I

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

Adding videos to our HTML is as easy as adding the audio to our HTML. We use the `<video>` element and its implementation is similar to that of the `<audio>` element.
The HTML implementation of a `<video>` element looks like this:
```html
	<video width="320" height="240" controls>
		<source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" type="video/webm">
		Your browser does not support the video element.
	</video>
```

Let's go over the structure of the elements and attributes involved in the example above. The `<video>` element is used to define a video file that is being added into the HTML. The `width` and `height` attributes are used to define the width and height of the video display. You can also define the width and height of a video display in CSS using the `width` and `height` properties.

The `controls` attribute in the `<video>` element is similar to the one in the `<audio>` element.  In that it provides the default controls like play, pause, seek and fullscreen.
The `<source>` is the same as the one in the `<audio>` element. It is used to define the source the video file and is also self-closing. You can also add multiple `<source>` elements. The `src` attribute is used to define the URL for the video file.

The `type` attribute is used to specify the type of file being sourced. Since in the example the video being sourced is a `.webm` file, the value for the `type` attribute is `video/webm`. If the video file was an `.mp4` file, the value would be `video/mp4`.
The `<video>` element has a fallback message which is the text: "Your browser does not support the video tag.". This message is displayed if the browser being used does not support embedding video with the `<video>` element.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Add a `<video>` tag into the body of the index.html file.
3. Give the `<video>` tag the `controls` attribute.
4. Give the `<video>` tag the `width` attribute with the value `320`.
5. Give the `<video>` tag the `height` attribute with the value `280`.
6. Add a `<source>` tag inside the `<video>` tag.
    - Give the `src` attribute the following value 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm'.
    - Give the `type ` attribute the value `video/webm`.
7. Add the following text as the fallback message: "Your browser does not support the video element". The code will finally look like this:
	```html
		<video width="320" height="280" controls>
			<source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" type="video/webm">
			Your browser does not support the video element
		</video>
```
8. Click run to see the rendered page with a video embedded in it. Click the play button to play the video.
9. Run tests and submit.

*(Video Credits: HTML5rocks)*

```js
it("video_tag_is_added_correctly", function() {
    // Failure message:
    // Have you added the video element correctly?
    expect("video").toExist();
    expect("video").toHaveAttr("controls");
    expect("video").toHaveAttr("width","320");
    expect("video").toHaveAttr("height","280");
});
it("source_tag_is_added_correctly", function() {
    // Failure message:
    // Have you added the source tag correctly?
    expect("source").toExist();
    expect("source").toHaveAttr("src","https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm");
    expect("source").toHaveAttr("type","video/webm");
});
it("has_added_fallback_message", function() {
    // Failure message:
    // Have you added the fallback message?
    expect("video").toContainText("Your browser does not support the video element");
});
```

**************************************************************

## Lesson 13.6 - HTML video pt II

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

The special attributes `loop` and `autoplay` are also available for the `<video>` element. The `loop` attribute will make the video play continuously forever. The `autoplay` attribute will make the video play automatically when it has finished loading in the browser.
Both attributes are added to the `<video>` tag.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Add a `<video>` tag into the body of the index.html file.
3. Give the `<video>` tag the `controls` attribute.
4. Give the `<video>` tag the `loop` attribute.
5. Give the `<video>` tag the `width` attribute with the value `320`.
6. Give the `<video>` tag the `height` attribute with the value `280`.
7. Add a `<source>` tag inside the `<video>` tag.
    - Give the `src` attribute the following value 'http://henriksjokvist.net/examples/html5-video/video.m4v'.
    - Give the `type ` attribute the value `video/m4v`.
8. Click run to see the rendered page with a video embedded in it. Click the play button. The video will play continuously.
9. Remove the `loop` attribute.
10. Give the `<video>` tag the `autoplay` attribute.
11. Click run to see the rendered page. The video will now start playing automatically once it has finished loading.
12. Run tests and submit.

```js
it("has_added_video_element_correctly", function() {
    // Failure message:
    // Have you added the video tag correctly?
    expect("video").toExist();
    expect("video").toHaveAttr("controls");
    expect("video").toHaveAttr("autoplay");
    expect("video").toHaveAttr("height","280");
    expect("video").toHaveAttr("width","320");
});
it("has_added_the_source_tag_correctly", function() {
    // Failure message:
    // Have you added the source tag correctly?
    expect("source").toExist();
    expect("source").toHaveAttr("src","http://henriksjokvist.net/examples/html5-video/video.m4v");
    expect("source").toHaveAttr("type","video/m4v");
});
```

*****************************************************************

## Lesson 13.7 - Project

![Moringa School and Unesco](../images/moringa_unesco.png)

**Introduction**

We have learnt how to embed both audio and video in our HTML documents and now it's time to put this into practice.

**Instructions:**

1. Click run to see the rendered page as it is.
2. Add a `<video>` tag into the index.html.
3. Give the `<video>` tag the `controls` attribute.
4. Give the `<video>` tag the `loop` attribute.
5. Give the `<video>` tag the `width` attribute with the value `300`.
6. Give the `<video>` tag the `height` attribute with the value `240`.
7. Add a `<source>` tag inside the `<video>` tag.
    - Give the `src` attribute the following value 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm'.
    - Give the `type ` attribute the value `video/webm`.
8. Add an `<audio>` tag into the body of the index.html file.
9. Give the `<audio>` tag the `controls` attribute.
10. Give the `<audio>` tag the `autoplay` attribute.
11. Add a `<source>` tag inside the `<audio>` tag.
    - Give the `src` attribute the following value 'https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3'.
    - Give the `type ` attribute the value `audio/mp3`.
12. Click run to see the rendered page with the video and the audio that plays automatically after the page has finished rendering.
13. Run tests and submit.

```js
it("has_added_video_element_correctly", function() {
    // Failure message:
    // Have you added the video element correctly?
    expect("video").toExist();
    expect("video").toHaveAttr("controls");
    expect("video").toHaveAttr("loop");
    expect("video").toHaveAttr("width","300");
    expect("video").toHaveAttr("height","240");
});
it("has_added_video_source_correctly", function() {
    // Failure message:
    // Have you added the source tag for the video element correctly?
    expect("video source").toExist();
    expect("video source").toHaveAttr("src","https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm");
    expect("video source").toHaveAttr("type","video/webm");
});
it("has_added_the_audio_tag_correctly", function() {
    // Failure message:
    // Have you added the audio tag correctly?
    expect("audio").toExist();
    expect("audio").toHaveAttr("controls");
    expect("audio").toHaveAttr("autoplay");
});
it("has_added_audio_source_correctly", function() {
    // Failure message:
    // Have you added the source tag for the audio element correctly?
    expect("audio source").toExist();
    expect("audio source").toHaveAttr("src","https://www.elated.com/res/File/articles/authoring/html/html5-audio/WhiteChristmas.mp3");
    expect("audio source").toHaveAttr("type","audio/mp3");
});
```

*******************************************************
