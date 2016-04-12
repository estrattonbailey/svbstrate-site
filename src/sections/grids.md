There is no set grid defined in Svbstrate. Instead, use container classes, the clearfix utility, and column classes to define grids on the fly.

<div class="demo px-2 clear align-c col-12">
  <div class="clear">

  <div class="float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-3_l</div></div>
  <div class="float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-3_l</div></div>
  <div class="float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g3 c-w">col-6 col-3_l</div></div>
  <div class="float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g c-w">col-6 col-3_l</div></div>

  <div class="float-l mv-1 col-6 col-4_m"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-4_m</div></div>
  <div class="float-l mv-1 col-6 col-4_m"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-4_m</div></div>
  <div class="float-l mv-1 col-12 col-4_m"><div class="px-1 mx-0 bg-c-g3 c-w">col-12 col-4_m</div></div>

  <div class="float-l mv-1 col-12 col-6_m"><div class="px-1 mx-0 bg-c-g1 c-g">col-12 col-6_m</div></div>
  <div class="float-l mv-1 col-12 col-6_m"><div class="px-1 mx-0 bg-c-g2 c-w">col-12 col-6_m</div></div>

  <div class="float-l mv-1 col-6 col-8_l"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-8_l</div></div>
  <div class="float-l mv-1 col-6 col-4_l"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-4_l</div></div>

  </div>
</div>

    <div class="col-6 col-3_l float-l mv-1"></div>
    <div class="col-6 col-3_l float-l mv-1"></div>
    <div class="col-6 col-3_l float-l mv-1"></div>
    <div class="col-6 col-3_l float-l mv-1"></div>

    <div class="col-6 col-4_m float-l mv-1"></div>
    <div class="col-6 col-4_m float-l mv-1"></div>
    <div class="col-12 col-4_m float-l mv-1"></div>

    <div class="col-12 col-6_m float-l mv-1"></div>
    <div class="col-12 col-6_m float-l mv-1"></div>

    <div class="col-6 col-8_l float-l mv-1"></div>
    <div class="col-6 col-4_l float-l mv-1"></div>

<p class="mt-2">To add a gutter, use spacing utilities, combined with a offset 'row' element:</p>

<div class="demo px-2 clear align-c col-12">
  <div class="mhn-1 clear">
  <div class="ph-1 float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-3_l</div></div>
  <div class="ph-1 float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-3_l</div></div>
  <div class="ph-1 float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g3 c-w">col-6 col-3_l</div></div>
  <div class="ph-1 float-l mv-1 col-6 col-3_l"><div class="px-1 mx-0 bg-c-g c-w">col-6 col-3_l</div></div>

  <div class="ph-1 float-l mv-1 col-6 col-4_m"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-4_m</div></div>
  <div class="ph-1 float-l mv-1 col-6 col-4_m"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-4_m</div></div>
  <div class="ph-1 float-l mv-1 col-12 col-4_m"><div class="px-1 mx-0 bg-c-g3 c-w">col-12 col-4_m</div></div>

  <div class="ph-1 float-l mv-1 col-12 col-6_m"><div class="px-1 mx-0 bg-c-g1 c-g">col-12 col-6_m</div></div>
  <div class="ph-1 float-l mv-1 col-12 col-6_m"><div class="px-1 mx-0 bg-c-g2 c-w">col-12 col-6_m</div></div>

  <div class="ph-1 float-l mv-1 col-6 col-8_l"><div class="px-1 mx-0 bg-c-g1 c-g">col-6 col-8_l</div></div>
  <div class="ph-1 float-l mv-1 col-6 col-4_l"><div class="px-1 mx-0 bg-c-g2 c-w">col-6 col-4_l</div></div>
  </div>
</div>

    <div class="mhn-1 clear">
      <div class="ph-1 col-6 col-3_l float-l mv-1"></div>
      <div class="ph-1 col-6 col-3_l float-l mv-1"></div>
      <div class="ph-1 col-6 col-3_l float-l mv-1"></div>
      <div class="ph-1 col-6 col-3_l float-l mv-1"></div>

      <div class="ph-1 col-6 col-4_m float-l mv-1"></div>
      <div class="ph-1 col-6 col-4_m float-l mv-1"></div>
      <div class="ph-1 col-12 col-4_m float-l mv-1"></div>

      <div class="ph-1 col-12 col-6_m float-l mv-1"></div>
      <div class="ph-1 col-12 col-6_m float-l mv-1"></div>

      <div class="ph-1 col-6 col-8_l float-l mv-1"></div>
      <div class="ph-1 col-6 col-4_l float-l mv-1"></div>
    </div>
