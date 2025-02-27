import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
  function fbq(...args: any[]): void;
  function gtag(...args: any[]): void;
}

const useAnalytics = () => {
  useEffect(() => {
    // Check for existing Google Analytics script
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-JJ2JYJGKCP");

    // Check for existing Meta Pixel Script
    const existingMetaPixelScript = document.querySelector(
      'script[src*="connect.facebook.net/en_US/fbevents.js"]'
    );
    if (!existingMetaPixelScript) {
      // Meta Pixel Code
      (function (f: any, b: any, e: any, v: any, ...args: any[]) {
        if (f.fbq) return;
        let n: any, t: any, s: any;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      fbq("init", "1312231683111702");
      fbq("track", "PageView");
    }

    // Check if a Clarity script already exists
    const existingClarityScript = document.querySelector(
      'script[src*="clarity.ms/tag/"]'
    );
    if (!existingClarityScript) {
      // Clarity Code
      (function (c: any, l: any, a: any, r: any, i: any, ...args: any[]) {
        let t: any, y: any;
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "pgqdvptg6j");
    }
  }, []);
};

export default useAnalytics;
