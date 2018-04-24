# sharp01

sharp01 is a simple, sharp Tumblr theme.

# features

* Good code. I’ve read your theme’s code. I don’t like it; from completely
  useless Javascript to awful, copy-pasted CSS they’re not good.
* Photosets that work. This is surprisingly difficult; by default, the
  `{Photoset` directive doesn't work at all; on phones, it’ll load a photoset
  waaaay too wide, fucking up the whole theme. I had to reassemble the photoset
  manually in Javascript, which is a shame but there was no other way. It’s
  about 100 LOC which isn’t too bad, all things considered. The alternative is
  letting Tumblr do it in Javascript and you can be guaranteed theirs sucks,
  even if it’s probably more reliable.
* High customizability; there’s about a billion options and ways to customize
  the theme’s text and look, from post borders to background gradients.
* **Mobile-accessible.** This is a big one! sharp01 looks *great* on mobile
  devices by default!

## customizability

* *Every* single color is customizable. It’s actually kind of a pain to change
  them all at once. Maybe I should fix that.
* Hide / show avatar
* Circular / square avatar
* Rules between posts
* Solid post background colors
* Page numbers (show/hide current and customizable)
* Hide / show ask, submit, and archive links
* Hide / show copyright years
* Background! Solid color, gradient, or photo

# what’s it look like

kinda like this

![theme preview](https://i.imgur.com/jBSEFWo.png)

but on a phone it’ll look more like this

![mobile theme preview](https://i.imgur.com/JhMCvPI.png)

# known issues

* There is no like button; this is because the default like button is an icon
  several years out of date and the color isn't customizable, so it looks
  horrible on anything that wasn’t designed for text in Tumblr Gray, which
  sucks.

  For a while I had a stripped-down version of the like button Javascript along
  with the Tumblr icon font loaded into the theme, which hooked into the weird
  intra-frame messaging framework Tumblr has going on. Ultimately, it was
  brittle as hell and broke when Tumblr changed some tiny server permissions or
  something in the API. I don’t know. I don’t think I’ll fix it.
* Default colors are a bit boring. Sorry!
* The CSS is a bit weighty. There’s about 550 lines of it. That’s a lot, for me
  at least. [becca.ooo] has about ⅕ of that! The reason for this is pretty
  simple: Tumblr themes have to deal kindly with a really diverse set of media.
  From audio posts to quote posts to asks to notes, there’s a lot of different
  “kinds” of stuff that all need special treatment.
* There’s Javascript. A little more than 100 lines of it. That’s fine —
  especially compared to, I don’t know, the 4MB bundles my school’s library
  started serving recently (thanks, [Ex Libris]!) — but I’m of the opinion that
  static content should not need Javascript to operate *ever*. Tumblr themes are
  static! It shouldn’t *need* Javascript. But due to a horrible templating
  system, it’s needed.
* Audio posts aren’t ideal. They’re *fine*, but not great.
* Tumblr makes developing themes *really bad*. This is partially not Tumblr’s
  fault — a lot of the difficulty comes from having to support so many different
  types of content — but the lack of a good “base” theme and the lack of
  resources such as good default photosets make creating a *good* theme *much*
  harder than it should be. This thing is a huge timesink. It eats hours
  whenever I touch it, so I try not to. Pull requests are welcome but I won’t
  really put any effort in.

[becca.ooo]: https://becca.ooo/
[Ex Libris]: http://www.exlibrisgroup.com/products/primo-library-discovery/
