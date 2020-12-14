import React from "react";
import Product from "./components/products";
export default () => {
  return (
    <React.Fragment>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Buy a fruit</h1>
        <p class="lead">Here we got the best fruits.</p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <Product
          name={"Apple"}
          price={2}
          features={["fresh", "tasty"]}
          image={
            "https://i.pinimg.com/originals/1c/4a/04/1c4a04af246a66edebc6b05614e501e0.png"
          }
        />
        <Product
          name={"Orange"}
          price={1.7}
          features={["organic", "vitamin C"]}
          image="https://lh3.googleusercontent.com/proxy/zIxY2AaB0_JwyJgrHJdbhrjAgroFB9gnSO2f6DmOI2GIdLtxQ0ncn8DVuVp56b_F7IRVB91dZnISI1naej9fgIkzDaowm1OYGFQx2kAOlihNUD3gWyp-Vnx8cw"
        />
        <Product
          name={"Peach"}
          price={2.5}
          features={["delicius", "incredible flavor"]}
          image="https://lh3.googleusercontent.com/proxy/bXeOK60sZmKwLL5TryxL3PqnPOP8HEU32SezOhdfw7HkHyeOHqUXPal9wcrDTV5j4pSbfb1nK9WHvSPlYGmNIiHkv9_ovvUCLhD-kvL-S6AjbIqn8PCSbjDruf_Uy6ezZDNamA"
        />
      </div>
    </React.Fragment>
  );
};
