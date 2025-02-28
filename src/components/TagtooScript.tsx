'use client'
import Script from 'next/script'

const TagtooScript = () => {
  return (
    <Script
      id="tagtoo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var tagtoo_advertiser_id = 8888;
          var tagtoo_ga = document.createElement("script");
          tagtoo_ga.type = "text/javascript";
          tagtoo_ga.async = true;
          tagtoo_ga.src = "https://ad.tagtoo.co/media/ad/track.js";
          var tagtoo_s = document.getElementsByTagName("script")[0];
          tagtoo_s.parentNode.insertBefore(tagtoo_ga, tagtoo_s);
        `
      }}
    />
  )
}

export default TagtooScript 