var browser = require("webextension-polyfill");
var axios = require("axios");

console.log("helloworld from content script");

const header = document.createElement("h1");
header.innerHTML = "Team Tuple Squad";
var title =""
var titleAlt = "Green Alternatives";
var host = window.location.hostname

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// console.log(body);
console.log(document.title);
console.log(window.location.hostname,"is host");
/* eslint-disable prettier/prettier */
title = document.title;
console.log({ title: title });
const getProducts = (title) => {
  axios
    .post(`https://dswqyz.deta.dev/shopping`, { title: title })
    .then((response) => {
      const altPro = response.data;
      console.log(response.data);
      var el = document.createElement("div");
      el.innerHTML = `<div class="cardRoot bucket" data-count="3"
  data-components="{&quot;1&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:1,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹95.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;95&quot;},&quot;suppressed&quot;:false},&quot;2&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:1,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹143.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;143&quot;},&quot;suppressed&quot;:false},&quot;3&quot;:{&quot;checked&quot;:true,&quot;minQuantity&quot;:2,&quot;showPrice&quot;:true,&quot;price&quot;:{&quot;currencyCode&quot;:&quot;INR&quot;,&quot;currencySymbol&quot;:&quot;₹&quot;,&quot;decimalSeparator&quot;:&quot;.&quot;,&quot;displayString&quot;:&quot;₹90.00&quot;,&quot;fractionalValue&quot;:&quot;00&quot;,&quot;wholeValue&quot;:&quot;90&quot;},&quot;suppressed&quot;:false}}"
  data-add-to-cart="[&quot;&quot;,&quot;Add bothwwwww to Cart&quot;,&quot;&quot;]"
  data-price-totals="{&quot;1&quot;:&quot;₹95.00&quot;,&quot;2&quot;:&quot;₹143.00&quot;,&quot;3&quot;:&quot;₹180.00&quot;,&quot;12&quot;:&quot;₹238.00&quot;,&quot;13&quot;:&quot;₹275.00&quot;,&quot;23&quot;:&quot;₹323.00&quot;,&quot;123&quot;:&quot;₹418.00&quot;}"
  data-points-total="{}">
  <div>
  <hr aria-hidden="true" class="a-divider-normal bucketDivider">
  <h2 class="a-color-success">${titleAlt}</h2>
  <p>
  Green alternatives provided by the team Tuple Squad.
</p>
  <form method="post"
      action="/gp/item-dispatch/ref=pd_day0fbt_crt_atc_a_3/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B01INWEX9U">
      <div class="a-cardui _p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-containter__2Cffh" data-a-card-type="basic">
          <ul
              class="a-unordered-list a-nostyle a-horizontal a-spacing-base a-spacing-top-base _p13n-desktop-sims-fbt_fbt-desktop_thumbnail-box__4jnIT">
              <li class="a-align-center"><span class="a-list-item">
              <div class="a-section thumbnail-2" style="display: unset;"><a class="a-link-normal"
                      href="/Cello-Finegrip-Ball-Pen-Set/dp/B074VD1BVV/ref=pd_day0fbt_img_1/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B074VD1BVV&amp;psc=1"><img
                          alt="Cello Finegrip Ball Pen | Blue Ball Pens | Jar of 25 Units | Best Ball Pens for Smooth Writing | Ball Point Pen Set&nbsp; | Pens f"
                          src="${altPro[0]?.alt_img}"
                          class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                          data-a-dynamic-image="${altPro[1]?.alt_img}"
                          style="max-width:116px;max-height:116px"></a></div>
          </span></li>
              <li class="a-align-center"><span class="a-list-item">
                      <div class="a-section thumbnail-2" style="display: unset;"><a class="a-link-normal"
                              href="/Cello-Finegrip-Ball-Pen-Set/dp/B074VD1BVV/ref=pd_day0fbt_img_1/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B074VD1BVV&amp;psc=1"><img
                                  alt="Cello Finegrip Ball Pen | Blue Ball Pens | Jar of 25 Units | Best Ball Pens for Smooth Writing | Ball Point Pen Set&nbsp; | Pens f"
                                  src="${altPro[1]?.alt_img}"
                                  class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                                  data-a-dynamic-image="${altPro[1]?.alt_img}"
                                  style="max-width:116px;max-height:116px"></a></div>
                  </span></li>
              ${altPro[2] ? (`<li class="a-align-center"><span class="a-list-item">
                      <div class="a-section thumbnail-3" style="display: unset;"><a class="a-link-normal"
                              href="/Cello-Butterflow-Ball-Pen-Set/dp/B07D4MYZFH/ref=pd_day0fbt_img_2/262-0079629-3149937?pd_rd_w=EbRno&amp;pf_rd_p=ae7b3a49-898e-4eff-9f9e-f5ff20359c4a&amp;pf_rd_r=CXG6VEQFKR4QWXQ3BWZW&amp;pd_rd_r=956caa4d-1743-4d54-83c2-0da51dd3b3ff&amp;pd_rd_wg=pVLdq&amp;pd_rd_i=B07D4MYZFH&amp;psc=1"><img
                                  alt="Cello Butterflow Ball Pen Set - Blue | Pack of 10 | Ball Pens for Smooth Writing | Blue Pens for Good Handwriting | Ball Pens"
                                  src="${altPro[2]?.alt_img ? altPro[2]?.alt_img:""}"
                                  class="a-dynamic-image p13n-sc-dynamic-image p13n-product-image" height="116px"
                                  data-a-dynamic-image="${altPro[2]?.alt_img ? altPro[2]?.alt_img:""}"
                                  style="max-width:116px;max-height:116px"></a></div>
                  </span></li>`):""}
          </ul>
         
          
          <div class="_p13n-desktop-sims-fbt_fbt-desktop_sims-fbt-rows__2LJXs">
              <ul class="a-unordered-list a-nostyle a-vertical">
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
                                          href="${altPro[0]?.alt_url}">
                                          <div aria-hidden="true" data-rows="1"><span
                                                  class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM">
                                                  ${altPro[0]?.alt_title}</span></div>
                                      </a>
                                      <div class="a-row"><span class="a-size-base a-color-price"><span
                                                  class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">${altPro[0]?.alt_price}</span></span>
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
                                                      href="${altPro[1]?.alt_url}">
                                                      <div aria-hidden="true" data-rows="1"><span
                                                              class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM">
                                                              ${altPro[1]?.alt_title}</span></div>
                                                  </a>
                                                  <div class="a-row"><span class="a-size-base a-color-price"><span
                                                              class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">${altPro[1]?.alt_price}</span></span>
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
                 ${altPro[2]?.alt_url ? `<li><span class="a-list-item">
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
                                             href="${altPro[2]?.alt_url}">
                                             <div aria-hidden="true" data-rows="1"><span
                                                     class="_p13n-desktop-sims-fbt_fbt-desktop_title-truncate__1pPAM">
                                                     ${altPro[2]?.alt_title}</span></div>
                                         </a>
                                         <div class="a-row"><span class="a-size-base a-color-price"><span
                                                     class="_p13n-desktop-sims-fbt_price_p13n-sc-price__bCZQt">${altPro[2]?.alt_price}</span></span>
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
             </span></li>`:""}
              </ul>
          </div>
      </div>
  </form>
</div> </div>`;


      var div = document.getElementById("price");

      if (host == "www.flipkart.com ") {
        var flip = document.getElementsByClassName("_1AtVbE");
        console.log(flip,"is the dom flip");
        //   insertAfter(flip[0], el);
      }
    
     
      insertAfter(div, el);
    
    })
    .catch((error) => console.error(error));
};

getProducts(title);
browser.storage.local
  .set({
    [window.location.hostname]: document.title,
  })
  .then(() => {
    browser.runtime.sendMessage(
      `Saved document title for ${window.location.hostname}`
    );
  });
export {};
