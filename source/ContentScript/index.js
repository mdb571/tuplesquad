var browser = require("webextension-polyfill");

console.log('helloworld from content script');

const header = document.createElement("h1");
header.innerHTML = "Team Tuple Squad";

var title = 'Green Alternatives'

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  
  var el = document.createElement("div");
  el.innerHTML = `<div class="cardRoot bucket" data-count="3"
  data-components="{&quot;1&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:1,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹95.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;95&quot;},&quot;suppressed&quot;:false},&quot;2&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:1,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹143.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;143&quot;},&quot;suppressed&quot;:false},&quot;3&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:2,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹90.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;90&quot;},&quot;suppressed&quot;:false}}"
  data-add-to-cart="[&quot;Add to Cart&quot;,&quot;Add both to Cart&quot;,&quot;Add all three to Cart&quot;]"
  data-price-totals="{&quot;1&quot;:&quot;₹95.00&quot;,&quot;2&quot;:&quot;₹143.00&quot;,&quot;3&quot;:&quot;₹180.00&quot;,&quot;12&quot;:&quot;₹238.00&quot;,&quot;13&quot;:&quot;₹275.00&quot;,&quot;23&quot;:&quot;₹323.00&quot;,&quot;123&quot;:&quot;₹418.00&quot;}"
  data-points-total="{}">
  <hr aria-hidden="true" class="a-divider-normal bucketDivider">
  <h2 class="a-color-success">${title}</h2>
  <p>
  Green alternatives provided by the team Tuple Squad.
</p>
  <form method="post"
      action="/gp/item-dispatch/ref=pd_day0fbt_crt_atc_a_3/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B01INWEX9U">
      <div class="a-cardui _p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-containter__2Cffh" data-a-card-type="basic">
          <ul
              class="a-unordered-list a-nostyle a-horizontal a-spacing-base a-spacing-top-base _p13n-desktop-sims-fbt_fbt-desktop_thumbnail-box__4jnIT">
              <li class="a-align-center"><span class="a-list-item">
                      <div class="a-section thumbnail-1" style="display: unset;"><img
                              alt="Cello Pinpoint Ball Pen - Blue | Pack of 10 | Lightweight Ball Pens | Exam Pens with Grip | Ball Pens for Students | ball pen"
                              src="https://images-eu.ssl-images-amazon.com/images/I/81JzFZQVImL._AC_UL232_SR232,232_.jpg"
                              class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                              data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/81JzFZQVImL._AC_UL116_SR116,116_.jpg&quot;:[116,116],&quot;https://images-eu.ssl-images-amazon.com/images/I/81JzFZQVImL._AC_UL232_SR232,232_.jpg&quot;:[232,232],&quot;https://images-eu.ssl-images-amazon.com/images/I/81JzFZQVImL._AC_UL348_SR348,348_.jpg&quot;:[348,348]}"
                              style="max-width:116px;max-height:116px"></div>
                  </span></li>
              <li class="a-align-center"><span class="a-list-item"><span
                          class="a-size-large a-color-tertiary _p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus__zdWox thumbnailPlus-2"
                          style="display: unset;">+</span></span></li>
              <li class="a-align-center"><span class="a-list-item">
                      <div class="a-section thumbnail-2" style="display: unset;"><a class="a-link-normal"
                              href="/Cello-Finegrip-Ball-Pen-Set/dp/B074VD1BVV/ref=pd_day0fbt_img_1/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B074VD1BVV&amp;psc=1"><img
                                  alt="Cello Finegrip Ball Pen | Blue Ball Pens | Jar of 25 Units | Best Ball Pens for Smooth Writing | Ball Point Pen Set&nbsp; | Pens f"
                                  src="https://images-eu.ssl-images-amazon.com/images/I/61hv2WNHBfL._AC_UL232_SR232,232_.jpg"
                                  class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                                  data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/61hv2WNHBfL._AC_UL116_SR116,116_.jpg&quot;:[116,116],&quot;https://images-eu.ssl-images-amazon.com/images/I/61hv2WNHBfL._AC_UL232_SR232,232_.jpg&quot;:[232,232],&quot;https://images-eu.ssl-images-amazon.com/images/I/61hv2WNHBfL._AC_UL348_SR348,348_.jpg&quot;:[348,348]}"
                                  style="max-width:116px;max-height:116px"></a></div>
                  </span></li>
              <li class="a-align-center"><span class="a-list-item"><span
                          class="a-size-large a-color-tertiary _p13n-desktop-sims-fbt_fbt-desktop_thumbnail-plus__zdWox thumbnailPlus-3"
                          style="display: unset;">+</span></span></li>
              <li class="a-align-center"><span class="a-list-item">
                      <div class="a-section thumbnail-3" style="display: unset;"><a class="a-link-normal"
                              href="/Cello-Butterflow-Ball-Pen-Set/dp/B07D4MYZFH/ref=pd_day0fbt_img_2/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B07D4MYZFH&amp;psc=1"><img
                                  alt="Cello Butterflow Ball Pen Set - Blue | Pack of 10 | Ball Pens for Smooth Writing | Blue Pens for Good Handwriting | Ball Pens"
                                  src="https://images-eu.ssl-images-amazon.com/images/I/61TxXDiHKbL._AC_UL232_SR232,232_.jpg"
                                  class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                                  data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/61TxXDiHKbL._AC_UL116_SR116,116_.jpg&quot;:[116,116],&quot;https://images-eu.ssl-images-amazon.com/images/I/61TxXDiHKbL._AC_UL232_SR232,232_.jpg&quot;:[232,232],&quot;https://images-eu.ssl-images-amazon.com/images/I/61TxXDiHKbL._AC_UL348_SR348,348_.jpg&quot;:[348,348]}"
                                  style="max-width:116px;max-height:116px"></a></div>
                  </span></li>
          </ul>
          <div class="_p13n-desktop-sims-fbt_fbt-desktop_action-details__18ZiI" style="visibility: visible;">
              <div
                  class="a-section a-spacing-base a-spacing-top-base _p13n-desktop-sims-fbt_fbt-desktop_price-add-to-cart-box__3OUdK">
                  <div class="a-section a-spacing-mini _p13n-desktop-sims-fbt_fbt-desktop_total-label__dI983"
                      style="display: block;"><span class="a-size-base a-color-secondary">Total price:</span><span
                          class="a-color-price _p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU">₹418.00</span>
                  </div>
                  <div class="a-row a-spacing-mini _p13n-desktop-sims-fbt_fbt-desktop_add-items__16weX"
                      style="display: none;">To see our price, add these items to your cart.</div><input type="hidden"
                      name="session-id" value="262-0079629-3149937"><input type="hidden" name="CSRF"
                      value="g0J+9pfeyynVMGQoDnvyOatpi6IZJJtvTXgyPuJemRVCAAAADAAAAABhnN8KcmF3AAAAABVX8CwXqz4nuL9RKX///w=="><input
                      type="hidden" name="discoveredAsins.2" value="B074VD1BVV"><input type="hidden" name="quantity.3"
                      value="2"><input type="hidden" name="discoveredAsins.3" value="B07D4MYZFH"><span
                      class="a-button a-button-primary a-button-small _p13n-desktop-sims-fbt_fbt-desktop_add-all-button__1TRXG"
                      id="a-autoid-11"><span class="a-button-inner"><input type="submit" name="submit.addToCart"
                              class="a-button-input" aria-labelledby="a-autoid-11-announce"><span
                              class="a-button-text" aria-hidden="true" id="a-autoid-11-announce">Add all three to
                              Cart</span></span></span>
              </div>
          </div>
          <div class="a-section _p13n-desktop-sims-fbt_fbt-desktop_choose-items__15UQx" style="display: none;">
              <div class="a-box a-alert-inline a-alert-inline-info" aria-live="polite" aria-atomic="true">
                  <div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i>
                      <div class="a-alert-content"><span class="a-size-mini"> Choose items to buy together. </span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-rows__2LJXs">
              <ul class="a-unordered-list a-nostyle a-vertical">
                  <li><span class="a-list-item">
                          <div class="_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY">
                              <div id="1" class="_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy"
                                  data-mix-operations="checkHandler">
                                  <div data-a-input-name="offeringID.1" class="a-checkbox"><label
                                          for="fbtCheck-1"><input type="checkbox" id="fbtCheck-1" name="offeringID.1"
                                              value="uPHgCFpGNRRwi%2FhFR7%2Faclo487XQg5A2kBIDdmQgeg6BlT5KWPNvQ0vR40nQhx4rSkufEuuRfYzpU4hV81tYs%2F5923M7okkgUOOywG8TWlAoYh1fscyvftLVGh8sRduvM1ejpZuERWh9mwhgUMpSkNBHbvepnGM3"
                                              autocomplete="off" checked=""><i
                                              class="a-icon a-icon-checkbox"></i><span
                                              class="a-label a-checkbox-label">
                                              <div
                                                  class="a-section a-spacing-none _p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1">
                                                  <div aria-hidden="true" data-rows="1"><span
                                                          class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM"><b>This
                                                              item:</b> Cello Pinpoint Ball Pen - Blue | Pack of 10 |
                                                          Lightweight Ball Pens | Exam Pens with Grip | Ball Pens for
                                                          Students | ball pens set for School and Office | Blue Ball
                                                          Pens | Cello Stationery</span></div>
                                                  <div class="a-row"><span class="a-size-base a-color-price"><span
                                                              class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">₹95.00</span></span>
                                                  </div>
                                              </div><span
                                                  class="a-size-base _p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM">
                                                  <div>
                                                      <div>
                                                          <div class="a-row"><span class="a-color-attainable">In
                                                                  stock.</span></div>
                                                      </div><span class="a-size-base a-color-secondary a-nowrap">Sold
                                                          by Appario Retail Private Ltd and ships from Amazon
                                                          Fulfillment.</span>
                                                      <div><span class="a-color-secondary">FREE Shipping on orders
                                                              over ₹499.00.</span></div>
                                                  </div>
                                              </span>
                                          </span></label></div>
                              </div>
                          </div>
                      </span></li>
                  <li><span class="a-list-item">
                          <div class="_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY">
                              <div id="2" class="_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy"
                                  data-mix-operations="checkHandler">
                                  <div data-a-input-name="offeringID.2" class="a-checkbox"><label
                                          for="fbtCheck-2"><input type="checkbox" id="fbtCheck-2" name="offeringID.2"
                                              value="uPHgCFpGNRRwi%2FhFR7%2Facsb1K2hxQvrwYK8Jpa8Q1s0CgZ%2FPVVe22jmyBZi7cZInlEngmh%2BsuCKjfGfov25V9chMfpVQFjuEl11J7DDT3OFFMgYMBBlt5NUwiiKhJ%2BexiZUcjwJA4lNfVoESh5CuI8v3PQsqNJOT"
                                              autocomplete="off" checked=""><i
                                              class="a-icon a-icon-checkbox"></i><span
                                              class="a-label a-checkbox-label">
                                              <div
                                                  class="a-section a-spacing-none _p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1">
                                                  <a class="a-link-normal"
                                                      href="/Cello-Finegrip-Ball-Pen-Set/dp/B074VD1BVV/ref=pd_day0fbt_1/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B074VD1BVV&amp;psc=1">
                                                      <div aria-hidden="true" data-rows="1"><span
                                                              class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM">Cello
                                                              Finegrip Ball Pen | Blue Ball Pens | Jar of 25 Units |
                                                              Best Ball Pens for Smooth Writing | Ball Point Pen
                                                              Set&nbsp; | Pens for Students and Professionals | Cello
                                                              Stationery</span></div>
                                                  </a>
                                                  <div class="a-row"><span class="a-size-base a-color-price"><span
                                                              class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">₹143.00</span></span>
                                                  </div>
                                              </div><span
                                                  class="a-size-base _p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM">
                                                  <div>
                                                      <div>
                                                          <div class="a-row"><span class="a-color-attainable">In
                                                                  stock.</span></div>
                                                      </div><span class="a-size-base a-color-secondary a-nowrap">Sold
                                                          by Appario Retail Private Ltd and ships from Amazon
                                                          Fulfillment.</span>
                                                      <div><span class="a-color-secondary">FREE Shipping on orders
                                                              over ₹499.00.</span></div>
                                                  </div>
                                              </span>
                                          </span></label></div>
                              </div>
                          </div>
                      </span></li>
                  <li><span class="a-list-item">
                          <div class="_p13n-desktop-sims-fbt_fbt-desktop_product-box__3PBxY">
                              <div id="3" class="_p13n-desktop-sims-fbt_fbt-desktop_fbt-item-check__pUIoy"
                                  data-mix-operations="checkHandler">
                                  <div data-a-input-name="offeringID.3" class="a-checkbox"><label
                                          for="fbtCheck-3"><input type="checkbox" id="fbtCheck-3" name="offeringID.3"
                                              value="4chgnBeTdAZ%2BxthUM6OHd1vZ0BOhSJvIfqoE0LPjtzf2t6S1YvM%2BJRVynXvJk%2BXuS6XayXcILYmml9JrNILR24Xh1soaaY3PahiZnR%2BCJmt274Rwj6IhddPPplQ4mwDiZ5PunbelpRX50msv3FPcGlyO6q%2BM%2FZI%2F"
                                              autocomplete="off" checked=""><i
                                              class="a-icon a-icon-checkbox"></i><span
                                              class="a-label a-checkbox-label">
                                              <div
                                                  class="a-section a-spacing-none _p13n-desktop-sims-fbt_fbt-desktop_item-details-per-asin__3DtF1">
                                                  <a class="a-link-normal"
                                                      href="/Cello-Butterflow-Ball-Pen-Set/dp/B07D4MYZFH/ref=pd_day0fbt_2/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B07D4MYZFH&amp;psc=1">
                                                      <div aria-hidden="true" data-rows="1"><span
                                                              class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM">Cello
                                                              Butterflow Ball Pen Set - Blue | Pack of 10 | Ball Pens
                                                              for Smooth Writing | Blue Pens for Good Handwriting |
                                                              Ball Pens for Students | Ideal for school and office use
                                                              | Cello Stationery</span></div>
                                                  </a>
                                                  <div class="a-row"><span class="a-size-base a-color-price"><span
                                                              class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">₹90.00</span></span>
                                                  </div><span
                                                      class="a-size-small a-color-secondary _p13n-desktop-sims-fbt_fbt-desktop_detail-row-element-left-margin__UkZ8O a-text-bold a-nowrap">
                                                      Minimum quantity required: 2 </span>
                                              </div><span
                                                  class="a-size-base _p13n-desktop-sims-fbt_fbt-desktop_shipping-info-show-box__17yWM">
                                                  <div>
                                                      <div>
                                                          <div class="a-row"><span class="a-color-attainable">In
                                                                  stock.</span></div>
                                                      </div><span class="a-size-base a-color-secondary a-nowrap">Sold
                                                          by Appario Retail Private Ltd and ships from Amazon
                                                          Fulfillment.</span>
                                                      <div><span class="a-color-secondary">FREE Shipping on orders
                                                              over ₹499.00.</span></div>
                                                  </div>
                                              </span>
                                          </span></label></div>
                              </div>
                          </div>
                      </span></li>
              </ul>
          </div>
      </div>
  </form>
</div>`;
  var div = document.getElementById("price");
  insertAfter(div, el);

console.log(body);
console.log(document.title);

export {
    
};
/* eslint-disable prettier/prettier */


browser.storage.local
  .set({
    [window.location.hostname]: document.title,
  })
  .then(() => {
    browser.runtime.sendMessage(
      `Saved document title for ${window.location.hostname}`
    );
  });
export { };
