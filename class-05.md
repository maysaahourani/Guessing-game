## Opening Links in a New Window
``` <a href="http://www.imdb.com" target="_blank">Internet Movie Database</a> (opens in new window) ```
``<target>`` target tag

* Linking to a Specific Part of the Same Page
elements in this
page may given id
attributes that identify those
sections of the page.
The value of the id attribute
should start with a letter or an
underscore (not a number or
any other character) and, on a
single page, no two id attributes
should have the same value.

To link to an element that uses
an id attribute you use the`` <a>``
element again, but the value of
the href attribute starts with
the # symbol, followed by the
value of the id attribute of the
element you want to link to. In
this example, ``< a href="#top"> ``
links to the `` <h1>`` element at
the top of the page whose id
attribute has a value of top.

* Linking to a Specific Part of Another Page
``<a href="http:/www.htmlandcssbookcom/#bottom">``

* Links are created using the ``<a>`` element.
* The ``<a>`` element uses the href attribute to indicate
the page you are linking to.
* If you are linking to a page within your own site, it is
best to use relative links rather than qualified URLs.
* You can create links to open email programs with an
email address in the "to" field.
* You can use the id attribute to target elements within
a page that can be linked to.



## Choosing Images for Your Site ##


A picture can say a thousand words, and great
images help make the difference between an
average-looking site and a really engaging one


Images should...
 * Be relevant
 * Convey information
 * Convey the right mood
 * Be instantly recognisable
 *  Fit the color palette


 ***If you are building a site from scratch, it is good practice to create a folder for all of the images the site uses.***

 
``<img src="images/quokka.jpg" alt="A family of
 quokka" title="The quokka is an Australian
 marsupial that is similar in size to the
 domestic cat." />``

## Old Code: Aligning Images horizantlay
align images can be to right or left 
```<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="right" ```
## Old Code: Aligning Images Vertically
* top: This aligns the first line of the surrounding text with the top of the image.

* middle: This aligns the first line of the surrounding text with the middle of the image.

* bottom: This aligns the first line of the surrounding text with the bottom of the image.

### Three Rules for Creating Images
There are three rules to remember when you
are creating images for your website which are
summarized below. We go into greater detail
on each topic over the next nine pages.
1. Save images in the right format
Websites mainly use images in
jpeg, gif, or png format. If you
choose the wrong image
format then your image might
not look as sharp as it should
and can make the web page
slower to load.

2. Save images at
the right size
You should save the image at
the same width and height it will
appear on the website. If
the image is smaller than the
width or height that you have
specified, the image can be
distorted and stretched. If the
image is larger than the width
and height if you have specified,
the image will take longer to
display on the page.

3. Use the correct
resolution
Computer screens are made up
of dots known as pixels. Images
used on the web are also made
up of tiny dots. Resolution refers
to the number of dots per inch,
and most computer screens only
show web pages at 72 pixels
per inch. So saving images at
a higher resolution results in
images that are larger than
necessary and take longer to
download.


## Image Formats:
* JPEG
* GIF
* PNG



### Cropping Images
When cropping images it is important not to lose valuable information. It is best to source images that are the correct shape if possible.
IMG

### Image Resolution
Images created for the web should be saved at a resolution of 72 ppi. The higher the resolution of the image, the larger the size of the file.




### Why use External Style Sheets?
When building a website there are several advantages to placing your
CSS rules in a separate style sheet
1. All of your web pages can share
the same style sheet. This is
achieved by using the ``<link>``
element on each HTML page of
your site to link to the same CSS
document. This means that the
same code does not need to be
repeated in every page (which
results in less code and smaller
HTML pages). 
2. Therefore, once the user has
downloaded the CSS stylesheet,
the rest of the site will load
faster. If you want to make a
change to how your site appears,
you only need to edit the one
CSS file and all of your pages
will be updated. For example,
you can change the style of
every`` <h1>`` element by altering
3. the one CSS style sheet, rather
than changing the CSS rules on
every page. The HTML code
will be easier to read and edit
because it does not have lots of
CSS rules in the same document.
It is generally considered good
practice to have the content of
the site separated from the rules
that determine how it appears.

* Sometimes you might consider placing CSS rules in the same page as
your HTML code.


### summary 
* CSS treats each HTML element as if it appears inside
its own box and uses rules to indicate how that
element should look.
* Rules are made up of selectors (that specify the
elements the rule applies to) and declarations (that
indicate what these elements should look like).
* Different types of selectors allow you to target your
rules at different elements.
* Declarations are made up of two parts: the properties
of the element that you want to change, and the values
of those properties. For example, the font-family
property sets the choice of font, and the value arial
specifies Arial as the preferred typeface.
* CSS rules usually appear in a separate document,
although they may appear within an HTML page.


# color in CSS 
1. rgb values
These express colors in terms
of how much red, green and
blue are used to make it up. For
example: rgb(100,100,90)
# Chapter 11: Color


Every color on a computer screen is created by mixing amounts of red,
green, and blue. To find the color you want, you can use a color picker

* hex codes
These are six-digit codes that
represent the amount of red,
green and blue in a color,
preceded by a pound or hash #
sign. For example: #ee3e80
* color names
There are 147 predefined color
names that are recognized
by browsers. For example:
DarkCyan
1. color to the text color
2. background-color





Understanding Color
Every color on a computer screen is created by mixing amounts of red, green, and blue. To find the color you want, you can use a color picker.


* Contrast
When picking foreground and background colors, it is important to ensure that there is enough contrast for the text to be legible.

CSS

* Opacity
Example:

p.one {
background-color: rgb(0,0,0);
opacity: 0.5;}
p.two {
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.5);}
CSS

HSL Colors
CSS3 introduces an entirely new and intuitive way to specify colors using hue, saturation, and lightness values.

CSS colors
* Color not only brings your site to life, but also helps
convey the mood and evokes reactions.
* There are three ways to specify colors in CSS:
RGB values, hex codes, and color names.
* Color pickers can help you find the color you want.
* It is important to ensure that there is enough contrast
between any text and the background color (otherwise
people will not be able to read your content).
* CSS3 has introduced an extra value for RGB colors to
indicate opacity. It is known as RGBA.
* CSS3 also allows you to specify colors as HSL values,
with an optional opacity value. It is known as HSLA


# Chapter 12: Text
The properties that allow you to control the appearance of text can be split into two groups:

Those that directly affect the font and its appearance (including the typeface, whether it is regular, bold or italic, and the size of the text).

Those that would have the same effect on text no matter what font you were using (including the color of text and the spacing between words and letters).

The formatting of your text can have a significant effect on how readable your pages are. As we look through these properties I will also give you some design tips on how to display your type.
* Techniques That Offer
a Wider Choice of
Typefaces
There are several ways to use fonts other than those listed on the
previous page. However, typefaces are subject to copyright, so the
techniques you can choose from are limited by their respective licenses.
Specifying Typefaces

1. font-family

The font-family property allows you to specify the typeface that should be used for any text inside the element(s) to which a CSS rule applies.

The value of this property is the name of the typeface you want to use.
2. font-face 
3. Service-based Font-Face.

font sizes
8pt
9pt
10pt
11pt
12pt
14pt
18pt
24pt
36pt
48pt
60pt
72pt

* font-weight : bold/normal
* font style : italic/normal/obligue

* text-transform :UpperCase & LowerCase
The text-transform property is used to change the case of text giving it one of the following values:
uppercase:This causes the text to appear uppercase.

lowercase: This causes the text to appear lowercase.

capitalize: This causes the first letter of each word to appear capitalized.

* text-decoration:
1. none
This removes any decoration
already applied to the text.
2. underline
This adds a line underneath the
text.
3. overline
This adds a line over the top of
the text.
4. line-through
This adds a line through words.
5. blink


## letter-spacing, word-spacing 
h1, h2 {
text-transform: uppercase;
letter-spacing: 0.2em;}
.credits {
font-weight: bold;
word-spacing: 1em;}

* Alignment
1. text-align:right /left/center/justify

2. vertical-align : baseline/sub/super/top/text-top/middle/bottom/text-bottom.


text-shadow

First Letter or Line
:first-letter, :first-line

selectors attributes

![](jjj.PNG)



JPEG vs PNG vs GIF — which image format to use and when?


There are hundreds of image formats available each with a specific use case. I bet most of us wouldn’t have come across 90% of the image formats listed on Wikipedia.
In this post, we would only be looking at the three most commonly used image formats in websites and mobile applications — JPEG, PNG and GIF. Several statistics reports, including the one from HTTP Archive, indicate that these 3 formats together comprise of more than 95% of all images loaded on websites. However, these 3 image formats have significant differences amongst themselves thus making each of them suitable for specific use cases. Understanding these major differences would help us deliver the best possible images to our website and mobile app users.


Compression

Transparency

Colours

animations



