(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="jones-webster-hall" style="background-image: url('/photos/tint/jones-webster-hall-65ba1d.jpg')" title="jones-webster-hall">
  <img class="lazyload" data-src="/photos/thumbnail/jones-webster-hall-ccf4df.jpg" src="/photos/tint/jones-webster-hall-65ba1d.jpg" height="1350" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/jones-webster-hall-686656.jpg')"></span>
  </span>
  <a class="open" href="/jones-webster-hall" data-target="jones-webster-hall">Open</a>
  <a class="close" href="/">Close</a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);