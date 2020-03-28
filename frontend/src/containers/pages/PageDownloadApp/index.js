import React from "react";
import MobileStoreButton from "react-mobile-store-button";

import "./styles.css";
import Heroes from "~/assets/heroes.png";
import Logo from "~/assets/logo.svg";

export default function PageDownloadApp() {
  const iOSUrl =
    "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";

  const androidUrl = "https://play.google.com";

  return (
    <div className="content">
      <img src={Logo} className="logo" alt="Be The Hero" />

      <img src={Heroes} className="heroesImg" alt="Seja nosso herói" />

      <div className="buttons">
        <div className="ios">
          <MobileStoreButton
            store="ios"
            url={iOSUrl}
            linkProps={{ title: "iOS Store Button" }}
          />
        </div>
        <div className="android">
          <MobileStoreButton
            store="android"
            url={androidUrl}
            linkProps={{ title: "Android Store Button" }}
          />
        </div>
      </div>
    </div>
  );
}
