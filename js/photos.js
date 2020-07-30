(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="stubborn" style="background-image: url('/photos/tint/Stubborn-65ba1d.jpg')" title="Stubborn">
  <img class="lazyload" data-src="/photos/thumbnail/Stubborn-ccf4df.jpg" src="/photos/tint/Stubborn-65ba1d.jpg" height="5277" width="3520" />
  <span class="full">
    <span style="background-image: url('/photos/large/Stubborn-686656.jpg')"></span>
  </span>
  <a class="open" href="/stubborn" data-target="stubborn">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/peak" data-target="peak" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="peak" style="background-image: url('/photos/tint/Peak-65ba1d.jpg')" title="Peak">
  <img class="lazyload" data-src="/photos/thumbnail/Peak-ccf4df.jpg" src="/photos/tint/Peak-65ba1d.jpg" height="6700" width="4469" />
  <span class="full">
    <span style="background-image: url('/photos/large/Peak-686656.jpg')"></span>
  </span>
  <a class="open" href="/peak" data-target="peak">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/stubborn" data-target="stubborn" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/escalators-behind-glass" data-target="escalators-behind-glass" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="escalators-behind-glass" style="background-image: url('/photos/tint/Escalators%20Behind%20Glass-65ba1d.jpg')" title="Escalators Behind Glass">
  <img class="lazyload" data-src="/photos/thumbnail/Escalators%20Behind%20Glass-ccf4df.jpg" src="/photos/tint/Escalators%20Behind%20Glass-65ba1d.jpg" height="7454" width="4972" />
  <span class="full">
    <span style="background-image: url('/photos/large/Escalators%20Behind%20Glass-686656.jpg')"></span>
  </span>
  <a class="open" href="/escalators-behind-glass" data-target="escalators-behind-glass">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/peak" data-target="peak" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/found-colors" data-target="found-colors" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="found-colors" style="background-image: url('/photos/tint/Found%20Colors-65ba1d.jpg')" title="Found Colors">
  <img class="lazyload" data-src="/photos/thumbnail/Found%20Colors-ccf4df.jpg" src="/photos/tint/Found%20Colors-65ba1d.jpg" height="5878" width="3921" />
  <span class="full">
    <span style="background-image: url('/photos/large/Found%20Colors-686656.jpg')"></span>
  </span>
  <a class="open" href="/found-colors" data-target="found-colors">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/escalators-behind-glass" data-target="escalators-behind-glass" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tiled" data-target="tiled" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="tiled" style="background-image: url('/photos/tint/Tiled-65ba1d.jpg')" title="Tiled">
  <img class="lazyload" data-src="/photos/thumbnail/Tiled-ccf4df.jpg" src="/photos/tint/Tiled-65ba1d.jpg" height="3930" width="5892" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tiled-686656.jpg')"></span>
  </span>
  <a class="open" href="/tiled" data-target="tiled">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/found-colors" data-target="found-colors" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/up-to-where-the-trains-are" data-target="up-to-where-the-trains-are" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="up-to-where-the-trains-are" style="background-image: url('/photos/tint/Up%20To%20Where%20The%20Trains%20Are-65ba1d.jpg')" title="Up To Where The Trains Are">
  <img class="lazyload" data-src="/photos/thumbnail/Up%20To%20Where%20The%20Trains%20Are-ccf4df.jpg" src="/photos/tint/Up%20To%20Where%20The%20Trains%20Are-65ba1d.jpg" height="7555" width="5039" />
  <span class="full">
    <span style="background-image: url('/photos/large/Up%20To%20Where%20The%20Trains%20Are-686656.jpg')"></span>
  </span>
  <a class="open" href="/up-to-where-the-trains-are" data-target="up-to-where-the-trains-are">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tiled" data-target="tiled" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/selfie" data-target="selfie" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="selfie" style="background-image: url('/photos/tint/Selfie-65ba1d.jpg')" title="Selfie">
  <img class="lazyload" data-src="/photos/thumbnail/Selfie-ccf4df.jpg" src="/photos/tint/Selfie-65ba1d.jpg" height="3463" width="2310" />
  <span class="full">
    <span style="background-image: url('/photos/large/Selfie-686656.jpg')"></span>
  </span>
  <a class="open" href="/selfie" data-target="selfie">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/up-to-where-the-trains-are" data-target="up-to-where-the-trains-are" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/last-christmas-location" data-target="last-christmas-location" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/40</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="last-christmas-location" style="background-image: url('/photos/tint/Last%20Christmas%20Location-65ba1d.jpg')" title="Last Christmas Location">
  <img class="lazyload" data-src="/photos/thumbnail/Last%20Christmas%20Location-ccf4df.jpg" src="/photos/tint/Last%20Christmas%20Location-65ba1d.jpg" height="7057" width="4707" />
  <span class="full">
    <span style="background-image: url('/photos/large/Last%20Christmas%20Location-686656.jpg')"></span>
  </span>
  <a class="open" href="/last-christmas-location" data-target="last-christmas-location">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/selfie" data-target="selfie" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/overlap-connections" data-target="overlap-connections" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="overlap-connections" style="background-image: url('/photos/tint/Overlap%20&%20Connections-65ba1d.jpg')" title="Overlap & Connections">
  <img class="lazyload" data-src="/photos/thumbnail/Overlap%20&%20Connections-ccf4df.jpg" src="/photos/tint/Overlap%20&%20Connections-65ba1d.jpg" height="7717" width="5147" />
  <span class="full">
    <span style="background-image: url('/photos/large/Overlap%20&%20Connections-686656.jpg')"></span>
  </span>
  <a class="open" href="/overlap-connections" data-target="overlap-connections">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/last-christmas-location" data-target="last-christmas-location" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/london-calling" data-target="london-calling" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="london-calling" style="background-image: url('/photos/tint/London%20Calling-65ba1d.jpg')" title="London Calling">
  <img class="lazyload" data-src="/photos/thumbnail/London%20Calling-ccf4df.jpg" src="/photos/tint/London%20Calling-65ba1d.jpg" height="7256" width="4840" />
  <span class="full">
    <span style="background-image: url('/photos/large/London%20Calling-686656.jpg')"></span>
  </span>
  <a class="open" href="/london-calling" data-target="london-calling">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/overlap-connections" data-target="overlap-connections" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/moody-skies" data-target="moody-skies" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="moody-skies" style="background-image: url('/photos/tint/Moody%20Skies-65ba1d.jpeg')" title="Moody Skies">
  <img class="lazyload" data-src="/photos/thumbnail/Moody%20Skies-ccf4df.jpeg" src="/photos/tint/Moody%20Skies-65ba1d.jpeg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photos/large/Moody%20Skies-686656.jpeg')"></span>
  </span>
  <a class="open" href="/moody-skies" data-target="moody-skies">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/london-calling" data-target="london-calling" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/angled-landscape" data-target="angled-landscape" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 11 Pro</li>
    <li>1/254</li>
    <li><span class="aperture"><em>f</em>/</span>2.4</li>
	</ul> -->
</li>
<li class="item " id="angled-landscape" style="background-image: url('/photos/tint/Angled%20Landscape-65ba1d.jpg')" title="Angled Landscape">
  <img class="lazyload" data-src="/photos/thumbnail/Angled%20Landscape-ccf4df.jpg" src="/photos/tint/Angled%20Landscape-65ba1d.jpg" height="5175" width="7758" />
  <span class="full">
    <span style="background-image: url('/photos/large/Angled%20Landscape-686656.jpg')"></span>
  </span>
  <a class="open" href="/angled-landscape" data-target="angled-landscape">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/moody-skies" data-target="moody-skies" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/new-windmill" data-target="new-windmill" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/3200</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="new-windmill" style="background-image: url('/photos/tint/New%20Windmill-65ba1d.jpg')" title="New Windmill">
  <img class="lazyload" data-src="/photos/thumbnail/New%20Windmill-ccf4df.jpg" src="/photos/tint/New%20Windmill-65ba1d.jpg" height="4798" width="3201" />
  <span class="full">
    <span style="background-image: url('/photos/large/New%20Windmill-686656.jpg')"></span>
  </span>
  <a class="open" href="/new-windmill" data-target="new-windmill">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/angled-landscape" data-target="angled-landscape" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/old-windmill" data-target="old-windmill" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="old-windmill" style="background-image: url('/photos/tint/Old%20Windmill-65ba1d.jpg')" title="Old Windmill">
  <img class="lazyload" data-src="/photos/thumbnail/Old%20Windmill-ccf4df.jpg" src="/photos/tint/Old%20Windmill-65ba1d.jpg" height="5030" width="7541" />
  <span class="full">
    <span style="background-image: url('/photos/large/Old%20Windmill-686656.jpg')"></span>
  </span>
  <a class="open" href="/old-windmill" data-target="old-windmill">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/new-windmill" data-target="new-windmill" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sheep" data-target="sheep" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="sheep" style="background-image: url('/photos/tint/Sheep-65ba1d.jpg')" title="Sheep">
  <img class="lazyload" data-src="/photos/thumbnail/Sheep-ccf4df.jpg" src="/photos/tint/Sheep-65ba1d.jpg" height="4830" width="7241" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sheep-686656.jpg')"></span>
  </span>
  <a class="open" href="/sheep" data-target="sheep">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/old-windmill" data-target="old-windmill" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hidden-lighthouse" data-target="hidden-lighthouse" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="hidden-lighthouse" style="background-image: url('/photos/tint/Hidden%20Lighthouse-65ba1d.jpg')" title="Hidden Lighthouse">
  <img class="lazyload" data-src="/photos/thumbnail/Hidden%20Lighthouse-ccf4df.jpg" src="/photos/tint/Hidden%20Lighthouse-65ba1d.jpg" height="7584" width="5059" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hidden%20Lighthouse-686656.jpg')"></span>
  </span>
  <a class="open" href="/hidden-lighthouse" data-target="hidden-lighthouse">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sheep" data-target="sheep" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/development" data-target="development" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="development" style="background-image: url('/photos/tint/Development-65ba1d.jpg')" title="Development">
  <img class="lazyload" data-src="/photos/thumbnail/Development-ccf4df.jpg" src="/photos/tint/Development-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/Development-686656.jpg')"></span>
  </span>
  <a class="open" href="/development" data-target="development">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hidden-lighthouse" data-target="hidden-lighthouse" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/way-out" data-target="way-out" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/10</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="way-out" style="background-image: url('/photos/tint/Way%20Out-65ba1d.jpg')" title="Way Out">
  <img class="lazyload" data-src="/photos/thumbnail/Way%20Out-ccf4df.jpg" src="/photos/tint/Way%20Out-65ba1d.jpg" height="7449" width="4969" />
  <span class="full">
    <span style="background-image: url('/photos/large/Way%20Out-686656.jpg')"></span>
  </span>
  <a class="open" href="/way-out" data-target="way-out">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/development" data-target="development" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/descending-into-austin" data-target="descending-into-austin" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="descending-into-austin" style="background-image: url('/photos/tint/Descending%20Into%20Austin-65ba1d.jpg')" title="Descending Into Austin">
  <img class="lazyload" data-src="/photos/thumbnail/Descending%20Into%20Austin-ccf4df.jpg" src="/photos/tint/Descending%20Into%20Austin-65ba1d.jpg" height="4281" width="6418" />
  <span class="full">
    <span style="background-image: url('/photos/large/Descending%20Into%20Austin-686656.jpg')"></span>
  </span>
  <a class="open" href="/descending-into-austin" data-target="descending-into-austin">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/way-out" data-target="way-out" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/fly-delta-jets" data-target="fly-delta-jets" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.4</li>
	</ul> -->
</li>
<li class="item " id="fly-delta-jets" style="background-image: url('/photos/tint/Fly%20Delta%20Jets-65ba1d.jpg')" title="Fly Delta Jets">
  <img class="lazyload" data-src="/photos/thumbnail/Fly%20Delta%20Jets-ccf4df.jpg" src="/photos/tint/Fly%20Delta%20Jets-65ba1d.jpg" height="4944" width="7412" />
  <span class="full">
    <span style="background-image: url('/photos/large/Fly%20Delta%20Jets-686656.jpg')"></span>
  </span>
  <a class="open" href="/fly-delta-jets" data-target="fly-delta-jets">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/descending-into-austin" data-target="descending-into-austin" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/off-the-path" data-target="off-the-path" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="off-the-path" style="background-image: url('/photos/tint/Off%20The%20Path-65ba1d.jpg')" title="Off The Path">
  <img class="lazyload" data-src="/photos/thumbnail/Off%20The%20Path-ccf4df.jpg" src="/photos/tint/Off%20The%20Path-65ba1d.jpg" height="4691" width="7033" />
  <span class="full">
    <span style="background-image: url('/photos/large/Off%20The%20Path-686656.jpg')"></span>
  </span>
  <a class="open" href="/off-the-path" data-target="off-the-path">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/fly-delta-jets" data-target="fly-delta-jets" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/running-in-the-woods" data-target="running-in-the-woods" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="running-in-the-woods" style="background-image: url('/photos/tint/Running%20In%20The%20Woods-65ba1d.jpg')" title="Running In The Woods">
  <img class="lazyload" data-src="/photos/thumbnail/Running%20In%20The%20Woods-ccf4df.jpg" src="/photos/tint/Running%20In%20The%20Woods-65ba1d.jpg" height="6479" width="4322" />
  <span class="full">
    <span style="background-image: url('/photos/large/Running%20In%20The%20Woods-686656.jpg')"></span>
  </span>
  <a class="open" href="/running-in-the-woods" data-target="running-in-the-woods">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/off-the-path" data-target="off-the-path" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/poof" data-target="poof" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="poof" style="background-image: url('/photos/tint/Poof-65ba1d.jpg')" title="Poof">
  <img class="lazyload" data-src="/photos/thumbnail/Poof-ccf4df.jpg" src="/photos/tint/Poof-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Poof-686656.jpg')"></span>
  </span>
  <a class="open" href="/poof" data-target="poof">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/running-in-the-woods" data-target="running-in-the-woods" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/dip" data-target="dip" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="dip" style="background-image: url('/photos/tint/Dip-65ba1d.jpg')" title="Dip">
  <img class="lazyload" data-src="/photos/thumbnail/Dip-ccf4df.jpg" src="/photos/tint/Dip-65ba1d.jpg" height="7557" width="5041" />
  <span class="full">
    <span style="background-image: url('/photos/large/Dip-686656.jpg')"></span>
  </span>
  <a class="open" href="/dip" data-target="dip">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/poof" data-target="poof" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/growth" data-target="growth" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="growth" style="background-image: url('/photos/tint/Growth-65ba1d.jpg')" title="Growth">
  <img class="lazyload" data-src="/photos/thumbnail/Growth-ccf4df.jpg" src="/photos/tint/Growth-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/Growth-686656.jpg')"></span>
  </span>
  <a class="open" href="/growth" data-target="growth">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/dip" data-target="dip" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/muted-colors" data-target="muted-colors" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/3200</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="muted-colors" style="background-image: url('/photos/tint/Muted%20Colors-65ba1d.jpg')" title="Muted Colors">
  <img class="lazyload" data-src="/photos/thumbnail/Muted%20Colors-ccf4df.jpg" src="/photos/tint/Muted%20Colors-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Muted%20Colors-686656.jpg')"></span>
  </span>
  <a class="open" href="/muted-colors" data-target="muted-colors">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/growth" data-target="growth" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rainy-walk" data-target="rainy-walk" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="rainy-walk" style="background-image: url('/photos/tint/Rainy%20Walk-65ba1d.jpg')" title="Rainy Walk">
  <img class="lazyload" data-src="/photos/thumbnail/Rainy%20Walk-ccf4df.jpg" src="/photos/tint/Rainy%20Walk-65ba1d.jpg" height="7183" width="4791" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rainy%20Walk-686656.jpg')"></span>
  </span>
  <a class="open" href="/rainy-walk" data-target="rainy-walk">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/muted-colors" data-target="muted-colors" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/mushroom-close-up" data-target="mushroom-close-up" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="mushroom-close-up" style="background-image: url('/photos/tint/Mushroom%20Close-up-65ba1d.jpg')" title="Mushroom Close-up">
  <img class="lazyload" data-src="/photos/thumbnail/Mushroom%20Close-up-ccf4df.jpg" src="/photos/tint/Mushroom%20Close-up-65ba1d.jpg" height="7046" width="4700" />
  <span class="full">
    <span style="background-image: url('/photos/large/Mushroom%20Close-up-686656.jpg')"></span>
  </span>
  <a class="open" href="/mushroom-close-up" data-target="mushroom-close-up">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rainy-walk" data-target="rainy-walk" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/overhead-plane" data-target="overhead-plane" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="overhead-plane" style="background-image: url('/photos/tint/Overhead%20Plane-65ba1d.jpg')" title="Overhead Plane">
  <img class="lazyload" data-src="/photos/thumbnail/Overhead%20Plane-ccf4df.jpg" src="/photos/tint/Overhead%20Plane-65ba1d.jpg" height="3755" width="5630" />
  <span class="full">
    <span style="background-image: url('/photos/large/Overhead%20Plane-686656.jpg')"></span>
  </span>
  <a class="open" href="/overhead-plane" data-target="overhead-plane">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/mushroom-close-up" data-target="mushroom-close-up" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/wet-ferns" data-target="wet-ferns" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="wet-ferns" style="background-image: url('/photos/tint/Wet%20Ferns-65ba1d.jpg')" title="Wet Ferns">
  <img class="lazyload" data-src="/photos/thumbnail/Wet%20Ferns-ccf4df.jpg" src="/photos/tint/Wet%20Ferns-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Wet%20Ferns-686656.jpg')"></span>
  </span>
  <a class="open" href="/wet-ferns" data-target="wet-ferns">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/overhead-plane" data-target="overhead-plane" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/pink-flower" data-target="pink-flower" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="pink-flower" style="background-image: url('/photos/tint/Pink%20Flower-65ba1d.jpg')" title="Pink Flower">
  <img class="lazyload" data-src="/photos/thumbnail/Pink%20Flower-ccf4df.jpg" src="/photos/tint/Pink%20Flower-65ba1d.jpg" height="5936" width="3959" />
  <span class="full">
    <span style="background-image: url('/photos/large/Pink%20Flower-686656.jpg')"></span>
  </span>
  <a class="open" href="/pink-flower" data-target="pink-flower">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/wet-ferns" data-target="wet-ferns" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/almost-due" data-target="almost-due" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="almost-due" style="background-image: url('/photos/tint/Almost%20Due-65ba1d.jpg')" title="Almost Due">
  <img class="lazyload" data-src="/photos/thumbnail/Almost%20Due-ccf4df.jpg" src="/photos/tint/Almost%20Due-65ba1d.jpg" height="6778" width="4521" />
  <span class="full">
    <span style="background-image: url('/photos/large/Almost%20Due-686656.jpg')"></span>
  </span>
  <a class="open" href="/almost-due" data-target="almost-due">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/pink-flower" data-target="pink-flower" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sebastiaan" data-target="sebastiaan" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="sebastiaan" style="background-image: url('/photos/tint/Sebastiaan-65ba1d.jpg')" title="Sebastiaan">
  <img class="lazyload" data-src="/photos/thumbnail/Sebastiaan-ccf4df.jpg" src="/photos/tint/Sebastiaan-65ba1d.jpg" height="5040" width="7385" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sebastiaan-686656.jpg')"></span>
  </span>
  <a class="open" href="/sebastiaan" data-target="sebastiaan">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/almost-due" data-target="almost-due" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/harbor-windmill" data-target="harbor-windmill" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="harbor-windmill" style="background-image: url('/photos/tint/Harbor%20Windmill-65ba1d.jpg')" title="Harbor Windmill">
  <img class="lazyload" data-src="/photos/thumbnail/Harbor%20Windmill-ccf4df.jpg" src="/photos/tint/Harbor%20Windmill-65ba1d.jpg" height="7631" width="5090" />
  <span class="full">
    <span style="background-image: url('/photos/large/Harbor%20Windmill-686656.jpg')"></span>
  </span>
  <a class="open" href="/harbor-windmill" data-target="harbor-windmill">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sebastiaan" data-target="sebastiaan" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/oh-so-bright" data-target="oh-so-bright" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="oh-so-bright" style="background-image: url('/photos/tint/Oh%20So%20Bright-65ba1d.jpg')" title="Oh So Bright">
  <img class="lazyload" data-src="/photos/thumbnail/Oh%20So%20Bright-ccf4df.jpg" src="/photos/tint/Oh%20So%20Bright-65ba1d.jpg" height="4523" width="3017" />
  <span class="full">
    <span style="background-image: url('/photos/large/Oh%20So%20Bright-686656.jpg')"></span>
  </span>
  <a class="open" href="/oh-so-bright" data-target="oh-so-bright">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/harbor-windmill" data-target="harbor-windmill" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/boat-dog" data-target="boat-dog" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>22.0</li>
	</ul> -->
</li>
<li class="item " id="boat-dog" style="background-image: url('/photos/tint/Boat%20Dog-65ba1d.jpg')" title="Boat Dog">
  <img class="lazyload" data-src="/photos/thumbnail/Boat%20Dog-ccf4df.jpg" src="/photos/tint/Boat%20Dog-65ba1d.jpg" height="6560" width="4376" />
  <span class="full">
    <span style="background-image: url('/photos/large/Boat%20Dog-686656.jpg')"></span>
  </span>
  <a class="open" href="/boat-dog" data-target="boat-dog">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/oh-so-bright" data-target="oh-so-bright" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/mighty-clouds" data-target="mighty-clouds" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="mighty-clouds" style="background-image: url('/photos/tint/Mighty%20Clouds-65ba1d.jpg')" title="Mighty Clouds">
  <img class="lazyload" data-src="/photos/thumbnail/Mighty%20Clouds-ccf4df.jpg" src="/photos/tint/Mighty%20Clouds-65ba1d.jpg" height="5583" width="3724" />
  <span class="full">
    <span style="background-image: url('/photos/large/Mighty%20Clouds-686656.jpg')"></span>
  </span>
  <a class="open" href="/mighty-clouds" data-target="mighty-clouds">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/boat-dog" data-target="boat-dog" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/corn" data-target="corn" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="corn" style="background-image: url('/photos/tint/Corn-65ba1d.jpg')" title="Corn">
  <img class="lazyload" data-src="/photos/thumbnail/Corn-ccf4df.jpg" src="/photos/tint/Corn-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/Corn-686656.jpg')"></span>
  </span>
  <a class="open" href="/corn" data-target="corn">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/mighty-clouds" data-target="mighty-clouds" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/apples-in-the-sun" data-target="apples-in-the-sun" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="apples-in-the-sun" style="background-image: url('/photos/tint/Apples%20In%20The%20Sun-65ba1d.jpg')" title="Apples In The Sun">
  <img class="lazyload" data-src="/photos/thumbnail/Apples%20In%20The%20Sun-ccf4df.jpg" src="/photos/tint/Apples%20In%20The%20Sun-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Apples%20In%20The%20Sun-686656.jpg')"></span>
  </span>
  <a class="open" href="/apples-in-the-sun" data-target="apples-in-the-sun">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/corn" data-target="corn" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/apple-child" data-target="apple-child" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="apple-child" style="background-image: url('/photos/tint/Apple%20&%20Child-65ba1d.jpg')" title="Apple & Child">
  <img class="lazyload" data-src="/photos/thumbnail/Apple%20&%20Child-ccf4df.jpg" src="/photos/tint/Apple%20&%20Child-65ba1d.jpg" height="5974" width="3985" />
  <span class="full">
    <span style="background-image: url('/photos/large/Apple%20&%20Child-686656.jpg')"></span>
  </span>
  <a class="open" href="/apple-child" data-target="apple-child">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/apples-in-the-sun" data-target="apples-in-the-sun" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/the-other-train" data-target="the-other-train" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="the-other-train" style="background-image: url('/photos/tint/The%20Other%20Train-65ba1d.jpg')" title="The Other Train">
  <img class="lazyload" data-src="/photos/thumbnail/The%20Other%20Train-ccf4df.jpg" src="/photos/tint/The%20Other%20Train-65ba1d.jpg" height="4322" width="6480" />
  <span class="full">
    <span style="background-image: url('/photos/large/The%20Other%20Train-686656.jpg')"></span>
  </span>
  <a class="open" href="/the-other-train" data-target="the-other-train">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/apple-child" data-target="apple-child" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/underground-selfie" data-target="underground-selfie" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="underground-selfie" style="background-image: url('/photos/tint/Underground%20Selfie-65ba1d.jpg')" title="Underground Selfie">
  <img class="lazyload" data-src="/photos/thumbnail/Underground%20Selfie-ccf4df.jpg" src="/photos/tint/Underground%20Selfie-65ba1d.jpg" height="7430" width="4956" />
  <span class="full">
    <span style="background-image: url('/photos/large/Underground%20Selfie-686656.jpg')"></span>
  </span>
  <a class="open" href="/underground-selfie" data-target="underground-selfie">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/the-other-train" data-target="the-other-train" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tube-tube" data-target="tube-tube" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="tube-tube" style="background-image: url('/photos/tint/Tube%20Tube-65ba1d.jpg')" title="Tube Tube">
  <img class="lazyload" data-src="/photos/thumbnail/Tube%20Tube-ccf4df.jpg" src="/photos/tint/Tube%20Tube-65ba1d.jpg" height="7300" width="4869" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tube%20Tube-686656.jpg')"></span>
  </span>
  <a class="open" href="/tube-tube" data-target="tube-tube">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/underground-selfie" data-target="underground-selfie" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/train-entering-the-station" data-target="train-entering-the-station" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/20</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="train-entering-the-station" style="background-image: url('/photos/tint/Train%20Entering%20the%20Station-65ba1d.jpg')" title="Train Entering the Station">
  <img class="lazyload" data-src="/photos/thumbnail/Train%20Entering%20the%20Station-ccf4df.jpg" src="/photos/tint/Train%20Entering%20the%20Station-65ba1d.jpg" height="7304" width="4872" />
  <span class="full">
    <span style="background-image: url('/photos/large/Train%20Entering%20the%20Station-686656.jpg')"></span>
  </span>
  <a class="open" href="/train-entering-the-station" data-target="train-entering-the-station">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tube-tube" data-target="tube-tube" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/gwen-in-a-cabin" data-target="gwen-in-a-cabin" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="gwen-in-a-cabin" style="background-image: url('/photos/tint/Gwen%20In%20A%20Cabin-65ba1d.jpg')" title="Gwen In A Cabin">
  <img class="lazyload" data-src="/photos/thumbnail/Gwen%20In%20A%20Cabin-ccf4df.jpg" src="/photos/tint/Gwen%20In%20A%20Cabin-65ba1d.jpg" height="7905" width="5273" />
  <span class="full">
    <span style="background-image: url('/photos/large/Gwen%20In%20A%20Cabin-686656.jpg')"></span>
  </span>
  <a class="open" href="/gwen-in-a-cabin" data-target="gwen-in-a-cabin">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/train-entering-the-station" data-target="train-entering-the-station" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/dc-shoe" data-target="dc-shoe" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="dc-shoe" style="background-image: url('/photos/tint/DC%20Shoe-65ba1d.jpg')" title="DC Shoe">
  <img class="lazyload" data-src="/photos/thumbnail/DC%20Shoe-ccf4df.jpg" src="/photos/tint/DC%20Shoe-65ba1d.jpg" height="7112" width="4744" />
  <span class="full">
    <span style="background-image: url('/photos/large/DC%20Shoe-686656.jpg')"></span>
  </span>
  <a class="open" href="/dc-shoe" data-target="dc-shoe">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/gwen-in-a-cabin" data-target="gwen-in-a-cabin" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/josh-rick" data-target="josh-rick" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="josh-rick" style="background-image: url('/photos/tint/Josh%20&%20Rick-65ba1d.jpg')" title="Josh & Rick">
  <img class="lazyload" data-src="/photos/thumbnail/Josh%20&%20Rick-ccf4df.jpg" src="/photos/tint/Josh%20&%20Rick-65ba1d.jpg" height="6881" width="4590" />
  <span class="full">
    <span style="background-image: url('/photos/large/Josh%20&%20Rick-686656.jpg')"></span>
  </span>
  <a class="open" href="/josh-rick" data-target="josh-rick">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/dc-shoe" data-target="dc-shoe" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/belinda-nan" data-target="belinda-nan" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="belinda-nan" style="background-image: url('/photos/tint/Belinda%20&%20Nan-65ba1d.jpg')" title="Belinda & Nan">
  <img class="lazyload" data-src="/photos/thumbnail/Belinda%20&%20Nan-ccf4df.jpg" src="/photos/tint/Belinda%20&%20Nan-65ba1d.jpg" height="4812" width="7214" />
  <span class="full">
    <span style="background-image: url('/photos/large/Belinda%20&%20Nan-686656.jpg')"></span>
  </span>
  <a class="open" href="/belinda-nan" data-target="belinda-nan">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/josh-rick" data-target="josh-rick" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/nan" data-target="nan" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="nan" style="background-image: url('/photos/tint/Nan-65ba1d.jpg')" title="Nan">
  <img class="lazyload" data-src="/photos/thumbnail/Nan-ccf4df.jpg" src="/photos/tint/Nan-65ba1d.jpg" height="7292" width="4864" />
  <span class="full">
    <span style="background-image: url('/photos/large/Nan-686656.jpg')"></span>
  </span>
  <a class="open" href="/nan" data-target="nan">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/belinda-nan" data-target="belinda-nan" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/jorrri" data-target="jorrri" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="jorrri" style="background-image: url('/photos/tint/Jorrri-65ba1d.jpg')" title="Jorrri">
  <img class="lazyload" data-src="/photos/thumbnail/Jorrri-ccf4df.jpg" src="/photos/tint/Jorrri-65ba1d.jpg" height="5148" width="3434" />
  <span class="full">
    <span style="background-image: url('/photos/large/Jorrri-686656.jpg')"></span>
  </span>
  <a class="open" href="/jorrri" data-target="jorrri">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/nan" data-target="nan" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/belinda-tom" data-target="belinda-tom" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="belinda-tom" style="background-image: url('/photos/tint/Belinda%20&%20Tom-65ba1d.jpg')" title="Belinda & Tom">
  <img class="lazyload" data-src="/photos/thumbnail/Belinda%20&%20Tom-ccf4df.jpg" src="/photos/tint/Belinda%20&%20Tom-65ba1d.jpg" height="6985" width="4659" />
  <span class="full">
    <span style="background-image: url('/photos/large/Belinda%20&%20Tom-686656.jpg')"></span>
  </span>
  <a class="open" href="/belinda-tom" data-target="belinda-tom">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/jorrri" data-target="jorrri" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/payam-s-back-was-hurting" data-target="payam-s-back-was-hurting" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/2500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="payam-s-back-was-hurting" style="background-image: url('/photos/tint/Payam's%20Back%20Was%20Hurting-65ba1d.jpg')" title="Payam's Back Was Hurting">
  <img class="lazyload" data-src="/photos/thumbnail/Payam's%20Back%20Was%20Hurting-ccf4df.jpg" src="/photos/tint/Payam's%20Back%20Was%20Hurting-65ba1d.jpg" height="6171" width="4116" />
  <span class="full">
    <span style="background-image: url('/photos/large/Payam's%20Back%20Was%20Hurting-686656.jpg')"></span>
  </span>
  <a class="open" href="/payam-s-back-was-hurting" data-target="payam-s-back-was-hurting">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/belinda-tom" data-target="belinda-tom" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/deer-2" data-target="deer-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/5</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="deer-2" style="background-image: url('/photos/tint/Deer%20(2)-65ba1d.jpg')" title="Deer (2)">
  <img class="lazyload" data-src="/photos/thumbnail/Deer%20(2)-ccf4df.jpg" src="/photos/tint/Deer%20(2)-65ba1d.jpg" height="4856" width="7280" />
  <span class="full">
    <span style="background-image: url('/photos/large/Deer%20(2)-686656.jpg')"></span>
  </span>
  <a class="open" href="/deer-2" data-target="deer-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/payam-s-back-was-hurting" data-target="payam-s-back-was-hurting" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/neon-oysters" data-target="neon-oysters" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="neon-oysters" style="background-image: url('/photos/tint/Neon%20Oysters-65ba1d.jpg')" title="Neon Oysters">
  <img class="lazyload" data-src="/photos/thumbnail/Neon%20Oysters-ccf4df.jpg" src="/photos/tint/Neon%20Oysters-65ba1d.jpg" height="7106" width="4740" />
  <span class="full">
    <span style="background-image: url('/photos/large/Neon%20Oysters-686656.jpg')"></span>
  </span>
  <a class="open" href="/neon-oysters" data-target="neon-oysters">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/deer-2" data-target="deer-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/deer-1" data-target="deer-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="deer-1" style="background-image: url('/photos/tint/Deer%20(1)-65ba1d.jpg')" title="Deer (1)">
  <img class="lazyload" data-src="/photos/thumbnail/Deer%20(1)-ccf4df.jpg" src="/photos/tint/Deer%20(1)-65ba1d.jpg" height="4929" width="7390" />
  <span class="full">
    <span style="background-image: url('/photos/large/Deer%20(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/deer-1" data-target="deer-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/neon-oysters" data-target="neon-oysters" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/curved-cows" data-target="curved-cows" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="curved-cows" style="background-image: url('/photos/tint/Curved%20Cows-65ba1d.jpg')" title="Curved Cows">
  <img class="lazyload" data-src="/photos/thumbnail/Curved%20Cows-ccf4df.jpg" src="/photos/tint/Curved%20Cows-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/Curved%20Cows-686656.jpg')"></span>
  </span>
  <a class="open" href="/curved-cows" data-target="curved-cows">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/deer-1" data-target="deer-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/that-point-reyes-road" data-target="that-point-reyes-road" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="that-point-reyes-road" style="background-image: url('/photos/tint/That%20Point%20Reyes%20Road-65ba1d.jpg')" title="That Point Reyes Road">
  <img class="lazyload" data-src="/photos/thumbnail/That%20Point%20Reyes%20Road-ccf4df.jpg" src="/photos/tint/That%20Point%20Reyes%20Road-65ba1d.jpg" height="7139" width="4762" />
  <span class="full">
    <span style="background-image: url('/photos/large/That%20Point%20Reyes%20Road-686656.jpg')"></span>
  </span>
  <a class="open" href="/that-point-reyes-road" data-target="that-point-reyes-road">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/curved-cows" data-target="curved-cows" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-cube" data-target="abandoned-cube" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
	</ul> -->
</li>
<li class="item " id="abandoned-cube" style="background-image: url('/photos/tint/Abandoned%20Cube-65ba1d.jpg')" title="Abandoned Cube">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned%20Cube-ccf4df.jpg" src="/photos/tint/Abandoned%20Cube-65ba1d.jpg" height="7690" width="5129" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned%20Cube-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-cube" data-target="abandoned-cube">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/that-point-reyes-road" data-target="that-point-reyes-road" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/fragil" data-target="fragil" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="fragil" style="background-image: url('/photos/tint/Fragil-65ba1d.jpg')" title="Fragil">
  <img class="lazyload" data-src="/photos/thumbnail/Fragil-ccf4df.jpg" src="/photos/tint/Fragil-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Fragil-686656.jpg')"></span>
  </span>
  <a class="open" href="/fragil" data-target="fragil">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-cube" data-target="abandoned-cube" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/creek" data-target="creek" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/50</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="creek" style="background-image: url('/photos/tint/Creek-65ba1d.jpg')" title="Creek">
  <img class="lazyload" data-src="/photos/thumbnail/Creek-ccf4df.jpg" src="/photos/tint/Creek-65ba1d.jpg" height="6337" width="4227" />
  <span class="full">
    <span style="background-image: url('/photos/large/Creek-686656.jpg')"></span>
  </span>
  <a class="open" href="/creek" data-target="creek">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/fragil" data-target="fragil" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/amy-szatkowski" data-target="amy-szatkowski" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="amy-szatkowski" style="background-image: url('/photos/tint/Amy%20Szatkowski-65ba1d.jpg')" title="Amy Szatkowski">
  <img class="lazyload" data-src="/photos/thumbnail/Amy%20Szatkowski-ccf4df.jpg" src="/photos/tint/Amy%20Szatkowski-65ba1d.jpg" height="5185" width="7774" />
  <span class="full">
    <span style="background-image: url('/photos/large/Amy%20Szatkowski-686656.jpg')"></span>
  </span>
  <a class="open" href="/amy-szatkowski" data-target="amy-szatkowski">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/creek" data-target="creek" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/provider-of-ice" data-target="provider-of-ice" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="provider-of-ice" style="background-image: url('/photos/tint/Provider%20Of%20Ice-65ba1d.jpg')" title="Provider Of Ice">
  <img class="lazyload" data-src="/photos/thumbnail/Provider%20Of%20Ice-ccf4df.jpg" src="/photos/tint/Provider%20Of%20Ice-65ba1d.jpg" height="7742" width="5164" />
  <span class="full">
    <span style="background-image: url('/photos/large/Provider%20Of%20Ice-686656.jpg')"></span>
  </span>
  <a class="open" href="/provider-of-ice" data-target="provider-of-ice">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/amy-szatkowski" data-target="amy-szatkowski" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/point-reyes-wreck-bow" data-target="point-reyes-wreck-bow" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="point-reyes-wreck-bow" style="background-image: url('/photos/tint/Point%20Reyes%20Wreck%20Bow-65ba1d.jpg')" title="Point Reyes Wreck Bow">
  <img class="lazyload" data-src="/photos/thumbnail/Point%20Reyes%20Wreck%20Bow-ccf4df.jpg" src="/photos/tint/Point%20Reyes%20Wreck%20Bow-65ba1d.jpg" height="5304" width="7952" />
  <span class="full">
    <span style="background-image: url('/photos/large/Point%20Reyes%20Wreck%20Bow-686656.jpg')"></span>
  </span>
  <a class="open" href="/point-reyes-wreck-bow" data-target="point-reyes-wreck-bow">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/provider-of-ice" data-target="provider-of-ice" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/inside-the-shipwreck" data-target="inside-the-shipwreck" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="inside-the-shipwreck" style="background-image: url('/photos/tint/Inside%20The%20Shipwreck-65ba1d.jpg')" title="Inside The Shipwreck">
  <img class="lazyload" data-src="/photos/thumbnail/Inside%20The%20Shipwreck-ccf4df.jpg" src="/photos/tint/Inside%20The%20Shipwreck-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Inside%20The%20Shipwreck-686656.jpg')"></span>
  </span>
  <a class="open" href="/inside-the-shipwreck" data-target="inside-the-shipwreck">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/point-reyes-wreck-bow" data-target="point-reyes-wreck-bow" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/flag-on-a-porch" data-target="flag-on-a-porch" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="flag-on-a-porch" style="background-image: url('/photos/tint/Flag%20On%20A%20Porch-65ba1d.jpg')" title="Flag On A Porch">
  <img class="lazyload" data-src="/photos/thumbnail/Flag%20On%20A%20Porch-ccf4df.jpg" src="/photos/tint/Flag%20On%20A%20Porch-65ba1d.jpg" height="7456" width="4973" />
  <span class="full">
    <span style="background-image: url('/photos/large/Flag%20On%20A%20Porch-686656.jpg')"></span>
  </span>
  <a class="open" href="/flag-on-a-porch" data-target="flag-on-a-porch">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/inside-the-shipwreck" data-target="inside-the-shipwreck" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/webbed-window" data-target="webbed-window" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="webbed-window" style="background-image: url('/photos/tint/Webbed%20Window-65ba1d.jpg')" title="Webbed Window">
  <img class="lazyload" data-src="/photos/thumbnail/Webbed%20Window-ccf4df.jpg" src="/photos/tint/Webbed%20Window-65ba1d.jpg" height="5289" width="7930" />
  <span class="full">
    <span style="background-image: url('/photos/large/Webbed%20Window-686656.jpg')"></span>
  </span>
  <a class="open" href="/webbed-window" data-target="webbed-window">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/flag-on-a-porch" data-target="flag-on-a-porch" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sunlight-creeping-in" data-target="sunlight-creeping-in" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="sunlight-creeping-in" style="background-image: url('/photos/tint/Sunlight%20Creeping%20In-65ba1d.jpg')" title="Sunlight Creeping In">
  <img class="lazyload" data-src="/photos/thumbnail/Sunlight%20Creeping%20In-ccf4df.jpg" src="/photos/tint/Sunlight%20Creeping%20In-65ba1d.jpg" height="7291" width="4863" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sunlight%20Creeping%20In-686656.jpg')"></span>
  </span>
  <a class="open" href="/sunlight-creeping-in" data-target="sunlight-creeping-in">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/webbed-window" data-target="webbed-window" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/vince-jordan" data-target="vince-jordan" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="vince-jordan" style="background-image: url('/photos/tint/Vince%20&%20Jordan-65ba1d.jpg')" title="Vince & Jordan">
  <img class="lazyload" data-src="/photos/thumbnail/Vince%20&%20Jordan-ccf4df.jpg" src="/photos/tint/Vince%20&%20Jordan-65ba1d.jpg" height="4281" width="6418" />
  <span class="full">
    <span style="background-image: url('/photos/large/Vince%20&%20Jordan-686656.jpg')"></span>
  </span>
  <a class="open" href="/vince-jordan" data-target="vince-jordan">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sunlight-creeping-in" data-target="sunlight-creeping-in" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/skewed-seven-eleven" data-target="skewed-seven-eleven" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="skewed-seven-eleven" style="background-image: url('/photos/tint/Skewed%20Seven%20Eleven-65ba1d.jpg')" title="Skewed Seven Eleven">
  <img class="lazyload" data-src="/photos/thumbnail/Skewed%20Seven%20Eleven-ccf4df.jpg" src="/photos/tint/Skewed%20Seven%20Eleven-65ba1d.jpg" height="5396" width="3599" />
  <span class="full">
    <span style="background-image: url('/photos/large/Skewed%20Seven%20Eleven-686656.jpg')"></span>
  </span>
  <a class="open" href="/skewed-seven-eleven" data-target="skewed-seven-eleven">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/vince-jordan" data-target="vince-jordan" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rain-in-portland" data-target="rain-in-portland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="rain-in-portland" style="background-image: url('/photos/tint/Rain%20in%20Portland-65ba1d.jpg')" title="Rain in Portland">
  <img class="lazyload" data-src="/photos/thumbnail/Rain%20in%20Portland-ccf4df.jpg" src="/photos/tint/Rain%20in%20Portland-65ba1d.jpg" height="7025" width="4686" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rain%20in%20Portland-686656.jpg')"></span>
  </span>
  <a class="open" href="/rain-in-portland" data-target="rain-in-portland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/skewed-seven-eleven" data-target="skewed-seven-eleven" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/water-window" data-target="water-window" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="water-window" style="background-image: url('/photos/tint/Water%20Window-65ba1d.jpg')" title="Water Window">
  <img class="lazyload" data-src="/photos/thumbnail/Water%20Window-ccf4df.jpg" src="/photos/tint/Water%20Window-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Water%20Window-686656.jpg')"></span>
  </span>
  <a class="open" href="/water-window" data-target="water-window">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rain-in-portland" data-target="rain-in-portland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/jeremy-tanner" data-target="jeremy-tanner" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="jeremy-tanner" style="background-image: url('/photos/tint/Jeremy%20Tanner-65ba1d.jpg')" title="Jeremy Tanner">
  <img class="lazyload" data-src="/photos/thumbnail/Jeremy%20Tanner-ccf4df.jpg" src="/photos/tint/Jeremy%20Tanner-65ba1d.jpg" height="7280" width="4856" />
  <span class="full">
    <span style="background-image: url('/photos/large/Jeremy%20Tanner-686656.jpg')"></span>
  </span>
  <a class="open" href="/jeremy-tanner" data-target="jeremy-tanner">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/water-window" data-target="water-window" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/justin-pervorse" data-target="justin-pervorse" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="justin-pervorse" style="background-image: url('/photos/tint/Justin%20Pervorse-65ba1d.jpg')" title="Justin Pervorse">
  <img class="lazyload" data-src="/photos/thumbnail/Justin%20Pervorse-ccf4df.jpg" src="/photos/tint/Justin%20Pervorse-65ba1d.jpg" height="4493" width="6736" />
  <span class="full">
    <span style="background-image: url('/photos/large/Justin%20Pervorse-686656.jpg')"></span>
  </span>
  <a class="open" href="/justin-pervorse" data-target="justin-pervorse">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/jeremy-tanner" data-target="jeremy-tanner" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/coffee-should-be-dope" data-target="coffee-should-be-dope" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="coffee-should-be-dope" style="background-image: url('/photos/tint/Coffee%20Should%20Be%20Dope-65ba1d.jpg')" title="Coffee Should Be Dope">
  <img class="lazyload" data-src="/photos/thumbnail/Coffee%20Should%20Be%20Dope-ccf4df.jpg" src="/photos/tint/Coffee%20Should%20Be%20Dope-65ba1d.jpg" height="5080" width="7616" />
  <span class="full">
    <span style="background-image: url('/photos/large/Coffee%20Should%20Be%20Dope-686656.jpg')"></span>
  </span>
  <a class="open" href="/coffee-should-be-dope" data-target="coffee-should-be-dope">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/justin-pervorse" data-target="justin-pervorse" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lit-trees-reflected" data-target="lit-trees-reflected" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="lit-trees-reflected" style="background-image: url('/photos/tint/Lit%20Trees%20Reflected-65ba1d.jpg')" title="Lit Trees Reflected">
  <img class="lazyload" data-src="/photos/thumbnail/Lit%20Trees%20Reflected-ccf4df.jpg" src="/photos/tint/Lit%20Trees%20Reflected-65ba1d.jpg" height="7339" width="4895" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lit%20Trees%20Reflected-686656.jpg')"></span>
  </span>
  <a class="open" href="/lit-trees-reflected" data-target="lit-trees-reflected">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/coffee-should-be-dope" data-target="coffee-should-be-dope" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/neon-banana" data-target="neon-banana" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>2/5</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="neon-banana" style="background-image: url('/photos/tint/Neon%20Banana-65ba1d.jpg')" title="Neon Banana">
  <img class="lazyload" data-src="/photos/thumbnail/Neon%20Banana-ccf4df.jpg" src="/photos/tint/Neon%20Banana-65ba1d.jpg" height="5589" width="3728" />
  <span class="full">
    <span style="background-image: url('/photos/large/Neon%20Banana-686656.jpg')"></span>
  </span>
  <a class="open" href="/neon-banana" data-target="neon-banana">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lit-trees-reflected" data-target="lit-trees-reflected" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/attention-to-lighting" data-target="attention-to-lighting" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="attention-to-lighting" style="background-image: url('/photos/tint/Attention%20To%20Lighting-65ba1d.jpg')" title="Attention To Lighting">
  <img class="lazyload" data-src="/photos/thumbnail/Attention%20To%20Lighting-ccf4df.jpg" src="/photos/tint/Attention%20To%20Lighting-65ba1d.jpg" height="6276" width="4186" />
  <span class="full">
    <span style="background-image: url('/photos/large/Attention%20To%20Lighting-686656.jpg')"></span>
  </span>
  <a class="open" href="/attention-to-lighting" data-target="attention-to-lighting">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/neon-banana" data-target="neon-banana" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/xoxo-crowd" data-target="xoxo-crowd" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="xoxo-crowd" style="background-image: url('/photos/tint/XOXO%20Crowd-65ba1d.jpg')" title="XOXO Crowd">
  <img class="lazyload" data-src="/photos/thumbnail/XOXO%20Crowd-ccf4df.jpg" src="/photos/tint/XOXO%20Crowd-65ba1d.jpg" height="6235" width="4159" />
  <span class="full">
    <span style="background-image: url('/photos/large/XOXO%20Crowd-686656.jpg')"></span>
  </span>
  <a class="open" href="/xoxo-crowd" data-target="xoxo-crowd">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/attention-to-lighting" data-target="attention-to-lighting" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/logs-mirrors" data-target="logs-mirrors" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="logs-mirrors" style="background-image: url('/photos/tint/Logs%20&%20Mirrors-65ba1d.jpg')" title="Logs & Mirrors">
  <img class="lazyload" data-src="/photos/thumbnail/Logs%20&%20Mirrors-ccf4df.jpg" src="/photos/tint/Logs%20&%20Mirrors-65ba1d.jpg" height="5460" width="3642" />
  <span class="full">
    <span style="background-image: url('/photos/large/Logs%20&%20Mirrors-686656.jpg')"></span>
  </span>
  <a class="open" href="/logs-mirrors" data-target="logs-mirrors">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/xoxo-crowd" data-target="xoxo-crowd" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/free-payam" data-target="free-payam" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="free-payam" style="background-image: url('/photos/tint/Free%20Payam-65ba1d.jpg')" title="Free Payam">
  <img class="lazyload" data-src="/photos/thumbnail/Free%20Payam-ccf4df.jpg" src="/photos/tint/Free%20Payam-65ba1d.jpg" height="5777" width="3853" />
  <span class="full">
    <span style="background-image: url('/photos/large/Free%20Payam-686656.jpg')"></span>
  </span>
  <a class="open" href="/free-payam" data-target="free-payam">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/logs-mirrors" data-target="logs-mirrors" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sara-zhang" data-target="sara-zhang" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="sara-zhang" style="background-image: url('/photos/tint/Sara%20Zhang-65ba1d.jpg')" title="Sara Zhang">
  <img class="lazyload" data-src="/photos/thumbnail/Sara%20Zhang-ccf4df.jpg" src="/photos/tint/Sara%20Zhang-65ba1d.jpg" height="7921" width="5283" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sara%20Zhang-686656.jpg')"></span>
  </span>
  <a class="open" href="/sara-zhang" data-target="sara-zhang">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/free-payam" data-target="free-payam" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/bike-crew-in-portland" data-target="bike-crew-in-portland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="bike-crew-in-portland" style="background-image: url('/photos/tint/Bike%20Crew%20In%20Portland-65ba1d.jpg')" title="Bike Crew In Portland">
  <img class="lazyload" data-src="/photos/thumbnail/Bike%20Crew%20In%20Portland-ccf4df.jpg" src="/photos/tint/Bike%20Crew%20In%20Portland-65ba1d.jpg" height="4962" width="7439" />
  <span class="full">
    <span style="background-image: url('/photos/large/Bike%20Crew%20In%20Portland-686656.jpg')"></span>
  </span>
  <a class="open" href="/bike-crew-in-portland" data-target="bike-crew-in-portland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sara-zhang" data-target="sara-zhang" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/colorful-storefront" data-target="colorful-storefront" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/2500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="colorful-storefront" style="background-image: url('/photos/tint/Colorful%20Storefront-65ba1d.jpg')" title="Colorful Storefront">
  <img class="lazyload" data-src="/photos/thumbnail/Colorful%20Storefront-ccf4df.jpg" src="/photos/tint/Colorful%20Storefront-65ba1d.jpg" height="5173" width="7756" />
  <span class="full">
    <span style="background-image: url('/photos/large/Colorful%20Storefront-686656.jpg')"></span>
  </span>
  <a class="open" href="/colorful-storefront" data-target="colorful-storefront">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/bike-crew-in-portland" data-target="bike-crew-in-portland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/jordan-cooling-down" data-target="jordan-cooling-down" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="jordan-cooling-down" style="background-image: url('/photos/tint/Jordan%20Cooling%20Down-65ba1d.jpg')" title="Jordan Cooling Down">
  <img class="lazyload" data-src="/photos/thumbnail/Jordan%20Cooling%20Down-ccf4df.jpg" src="/photos/tint/Jordan%20Cooling%20Down-65ba1d.jpg" height="6633" width="4424" />
  <span class="full">
    <span style="background-image: url('/photos/large/Jordan%20Cooling%20Down-686656.jpg')"></span>
  </span>
  <a class="open" href="/jordan-cooling-down" data-target="jordan-cooling-down">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/colorful-storefront" data-target="colorful-storefront" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/matt-sacks" data-target="matt-sacks" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="matt-sacks" style="background-image: url('/photos/tint/Matt%20Sacks-65ba1d.jpg')" title="Matt Sacks">
  <img class="lazyload" data-src="/photos/thumbnail/Matt%20Sacks-ccf4df.jpg" src="/photos/tint/Matt%20Sacks-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Matt%20Sacks-686656.jpg')"></span>
  </span>
  <a class="open" href="/matt-sacks" data-target="matt-sacks">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/jordan-cooling-down" data-target="jordan-cooling-down" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/view-from-a-hotel-room" data-target="view-from-a-hotel-room" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="view-from-a-hotel-room" style="background-image: url('/photos/tint/View%20From%20A%20Hotel%20Room-65ba1d.jpg')" title="View From A Hotel Room">
  <img class="lazyload" data-src="/photos/thumbnail/View%20From%20A%20Hotel%20Room-ccf4df.jpg" src="/photos/tint/View%20From%20A%20Hotel%20Room-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/View%20From%20A%20Hotel%20Room-686656.jpg')"></span>
  </span>
  <a class="open" href="/view-from-a-hotel-room" data-target="view-from-a-hotel-room">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/matt-sacks" data-target="matt-sacks" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/bike-rack" data-target="bike-rack" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="bike-rack" style="background-image: url('/photos/tint/Bike%20Rack-65ba1d.jpg')" title="Bike Rack">
  <img class="lazyload" data-src="/photos/thumbnail/Bike%20Rack-ccf4df.jpg" src="/photos/tint/Bike%20Rack-65ba1d.jpg" height="5193" width="7785" />
  <span class="full">
    <span style="background-image: url('/photos/large/Bike%20Rack-686656.jpg')"></span>
  </span>
  <a class="open" href="/bike-rack" data-target="bike-rack">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/view-from-a-hotel-room" data-target="view-from-a-hotel-room" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/wcgc-art" data-target="wcgc-art" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="wcgc-art" style="background-image: url('/photos/tint/WCGC%20Art-65ba1d.jpg')" title="WCGC Art">
  <img class="lazyload" data-src="/photos/thumbnail/WCGC%20Art-ccf4df.jpg" src="/photos/tint/WCGC%20Art-65ba1d.jpg" height="5182" width="7769" />
  <span class="full">
    <span style="background-image: url('/photos/large/WCGC%20Art-686656.jpg')"></span>
  </span>
  <a class="open" href="/wcgc-art" data-target="wcgc-art">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/bike-rack" data-target="bike-rack" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lit-trees" data-target="lit-trees" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="lit-trees" style="background-image: url('/photos/tint/Lit%20Trees-65ba1d.jpg')" title="Lit Trees">
  <img class="lazyload" data-src="/photos/thumbnail/Lit%20Trees-ccf4df.jpg" src="/photos/tint/Lit%20Trees-65ba1d.jpg" height="6025" width="4019" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lit%20Trees-686656.jpg')"></span>
  </span>
  <a class="open" href="/lit-trees" data-target="lit-trees">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/wcgc-art" data-target="wcgc-art" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/nong-s-khao-man-gai-portland" data-target="nong-s-khao-man-gai-portland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/50</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="nong-s-khao-man-gai-portland" style="background-image: url('/photos/tint/Nong's%20Khao%20Man%20Gai%20Portland-65ba1d.jpg')" title="Nong's Khao Man Gai Portland">
  <img class="lazyload" data-src="/photos/thumbnail/Nong's%20Khao%20Man%20Gai%20Portland-ccf4df.jpg" src="/photos/tint/Nong's%20Khao%20Man%20Gai%20Portland-65ba1d.jpg" height="7912" width="5277" />
  <span class="full">
    <span style="background-image: url('/photos/large/Nong's%20Khao%20Man%20Gai%20Portland-686656.jpg')"></span>
  </span>
  <a class="open" href="/nong-s-khao-man-gai-portland" data-target="nong-s-khao-man-gai-portland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lit-trees" data-target="lit-trees" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/payam-nong-s" data-target="payam-nong-s" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="payam-nong-s" style="background-image: url('/photos/tint/Payam%20@%20Nong's-65ba1d.jpg')" title="Payam @ Nong's">
  <img class="lazyload" data-src="/photos/thumbnail/Payam%20@%20Nong's-ccf4df.jpg" src="/photos/tint/Payam%20@%20Nong's-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Payam%20@%20Nong's-686656.jpg')"></span>
  </span>
  <a class="open" href="/payam-nong-s" data-target="payam-nong-s">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/nong-s-khao-man-gai-portland" data-target="nong-s-khao-man-gai-portland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/windowstill" data-target="windowstill" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1600</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="windowstill" style="background-image: url('/photos/tint/Windowstill-65ba1d.jpg')" title="Windowstill">
  <img class="lazyload" data-src="/photos/thumbnail/Windowstill-ccf4df.jpg" src="/photos/tint/Windowstill-65ba1d.jpg" height="3770" width="5643" />
  <span class="full">
    <span style="background-image: url('/photos/large/Windowstill-686656.jpg')"></span>
  </span>
  <a class="open" href="/windowstill" data-target="windowstill">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/payam-nong-s" data-target="payam-nong-s" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>LEICA M (Typ 240)</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>2.4</li>
	</ul> -->
</li>
`);