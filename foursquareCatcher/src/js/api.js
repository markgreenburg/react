/**
 * Foursquare API Connector
 */

const toUrl = (searchString) => {
  const clientId = 
    "&client_id=BEJQGMIMYHSOL2TMFVMAP3FYFXCPQHM4GBWJXYM4NFXBDBMJ";
  const clientSecret = 
    "&client_secret=ZSFZM5UD224QVLOTBT3WJXBSNEMFEXBMVTMDZ4QX12133DOJ";
  const version = "&v=20170109"
  const baseUrl = 
    "https://api.foursquare.com/v2/venues/search?ll=29.76,-95.37&query=";
  const formattedString = encodeURI(searchString);
  return baseUrl + formattedString + clientId + clientSecret + version;
};

module.exports = toUrl;