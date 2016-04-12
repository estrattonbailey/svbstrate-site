Svbstrate includes whitespace classes out of the box, but these should be configured or removed on a per project basis. They use a syntax first developed by [Tachyons](http://tachyons.io/) and [BASSCSS](http://www.basscss.com/):

<table class="mt-2 no-padding">
  <tr>
    <th class="bold">Prefix</th>
    <th class="bold">Description</th>
  </tr>
  <tr>
    <td>m</td>
    <td>margin</td>
  </tr>
  <tr>
    <td>p</td>
    <td>padding</td>
  </tr>
  <tr>
    <td>t</td>
    <td>top</td>
  </tr>
  <tr>
    <td>b</td>
    <td>bottom</td>
  </tr>
  <tr>
    <td>h</td>
    <td>horizontal</td>
  </tr>
  <tr>
    <td>v</td>
    <td>vertical</td>
  </tr>
  <tr>
    <td>x</td>
    <td>top, bottom, left, right</td>
  </tr>
  <tr>
    <td>n</td>
    <td>negative</td>
  </tr>

  <tr>
    <th class="bold">Suffix</th>
    <th class="bold">Scale</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0 (reset)</td>
  </tr>
  <tr>
    <td>025</td>
    <td>0.25em</td>
  </tr>
  <tr>
    <td>05</td>
    <td>0.5em</td>
  </tr>
  <tr>
    <td>075</td>
    <td>0.75em</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1em</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2em</td>
  </tr>
  <tr>
    <td>4</td>
    <td>4em</td>
  </tr>
  <tr>
    <td>6</td>
    <td>6em</td>
  </tr>
  <tr>
    <td>8</td>
    <td>8em</td>
  </tr>
</table>

<p class="mt-4 mb-1">The prefixes and suffixes above combine to define classes like these:</p>

```css
.mx-0 {
  margin: 0; 
}
.mhn-2 {
  margin-left: -2em; 
  margin-right: -2em; 
}

pv-4 {
  padding-top: 4em;
  padding-bottom: 4em;
}
.pt-075 {
  margin-top: 0.75em;  
}
```
