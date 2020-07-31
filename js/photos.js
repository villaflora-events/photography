(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="purple-nights" style="background-image: url('/photos/tint/Purple%20Nights-65ba1d.jpg')" title="Purple Nights">
  <img class="lazyload" data-src="/photos/thumbnail/Purple%20Nights-ccf4df.jpg" src="/photos/tint/Purple%20Nights-65ba1d.jpg" height="3029" width="2163" />
  <span class="full">
    <span style="background-image: url('/photos/large/Purple%20Nights-686656.jpg')"></span>
  </span>
  <a class="open" href="/purple-nights" data-target="purple-nights">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/jones" data-target="jones" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>20/1</li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="jones" style="background-image: url('/photos/tint/JONES-65ba1d.jpg')" title="JONES">
  <img class="lazyload" data-src="/photos/thumbnail/JONES-ccf4df.jpg" src="/photos/tint/JONES-65ba1d.jpg" height="1350" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/JONES-686656.jpg')"></span>
  </span>
  <a class="open" href="/jones" data-target="jones">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/purple-nights" data-target="purple-nights" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);