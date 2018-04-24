# sharp01

sharp01 is a simple, sharp Tumblr theme. [install], [live demo]

# features

* Good code. I’ve read your theme’s code. I don’t like it; from completely
  useless Javascript to awful, copy-pasted CSS they’re not good.
* Photosets that work. This is surprisingly difficult; by default, the
  `{Photoset}` directive doesn't work at all; on phones, it’ll load a photoset
  waaaay too wide, fucking up the whole theme. I had to reassemble the photoset
  manually in Javascript, which is a shame but there was no other way. It’s
  about 100 LOC which isn’t too bad, all things considered. The alternative is
  letting Tumblr do it in Javascript and you can be guaranteed theirs sucks,
  even if it’s probably more reliable.
* High customizability; there’s about a billion options and ways to customize
  the theme’s text and look, from post borders to background gradients.
* A good like icon! Appreciate it, I payed for it in blood.
* **Mobile-accessible.** This is a big one! sharp01 looks *great* on mobile
  devices by default!
* New-style reblogs! I’m pretty sure this is one of very very few themes to do
  this. No I won’t add an option to disable it, old-style reblogs sucked and
  were prone to breakage.

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
* Ditto with quote posts. Particularly reblogs / sources, the default formatting
  makes authorship unclear. In my defense, I’m pretty sure this is Tumblr’s
  fault for rendering your blog URL and avatar above a quote post source, even
  if you’ve reblogged it from someone else.
* Link posts don’t have thumbnails. Nobody uses link posts,
  though, so this isn’t much of an issue.

# why is making a good tumblr theme so hard?

Tumblr makes developing themes *really bad*. This is *partially* not Tumblr’s
fault — a lot of the difficulty comes from having to support so many different
types of content — but the lack of a good “base” theme and the lack of resources
such as good default photosets make creating a *good* theme *much* harder than
it should be. This thing is a huge timesink. It eats hours whenever I touch it,
so I try not to. Evidence: I just wasted about 3 hours working on a like icon.
Pull requests are welcome but I won’t really put any effort in.

There’s also a huge amount of esoteric edge-cases. Like posts with 30 different
reblogged comments (which leads to the infamous discourse lines), or photoset
lightboxes, or asks with reblogs, or posts with a deactivated OP.

Additionally, the set of “sample posts” Tumblr offers to preview your blog with
are hopelessly incomplete; they lack reblogs at all, they don’t show any sort of
ask posts, they haven’t been updated in almost a decade, and they don’t run
scripts, making previewing a theme with them completely unrealistic. If you want
to test a Tumblr theme, your only choice is to paste it in, click save, and hit
refresh on the blog until the cache updates. There’s no way to develop a tumblr
theme locally, particularly because there’s so much undocumented behavior,like
how the `</head>` inserts all the OpenGraph and Twitter card `<meta>` tags —
which I only discovered because the `</head>` (and many other tags) are
optional, and I’d omitted them for brevity. There’s also [this huge list of
completely undocumented theme variables][undocs].

## things to account for when developing a tumblr theme

* There’s three different sizes of quote post, which are tagged `.short`,
  `.medium`, and `.long` based on their length.
* Post notes.
* Post sources, which may be in or out of Tumblr entirely.
* Pages! Custom content pages (don’t show the date on these!), permalink post
  pages, search pages, tag pages, chronological tag pages, date pages, and so
  on. That’s only the ones I can remember off the top of my head.
* Reblog and like buttons, which ideally fit the rest of the theme
  stylistically. Good luck with *that* if you don’t have a strong background in
  CSS and web fonts. (You essentially need to include a base64-encoded WOFF).
* Photosets! These can have up to 9 photos with up to 3 in each row. By default,
  `{Photoset}` inserts an `<iframe>` with the photoset in it, which
  1. Doesn’t resize dynamically and
  2. You can’t style OR touch with Javascript, because `<iframe>`s are sandboxed
     to hell and back.
  The only way to make a good photoset is by inserting each photo and rolling
  Javascript to assemble it back into what it should look like in the first
  place.
* What happens when you click on a photo in a photoset? By default, if you’re
  using the broken `{Photoset}` variable, some Javascript runs to insert a
  lightbox dynamically. If you’ve disabled Javascript, clicking on the photoset
  resizes some stuff and ruins the photoset instantly and irrevocably.
  Fantastic.

[install]: https://www.tumblr.com/theme/40895
[becca.ooo]: https://becca.ooo/
[Ex Libris]: http://www.exlibrisgroup.com/products/primo-library-discovery/
[undocs]: http://bychloethemes.tumblr.com/undocs
[live demo]: https://sharp01-theme.tumblr.com/
