import React, { memo } from "react";
import { metaInformation } from "../../LpData";

const Meta = memo(function Meta() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{metaInformation.title}</title>
      <meta name="description" content={metaInformation.description} />
      <meta name="keywords" content={metaInformation.keywords} />
      <meta property="og:title" content={metaInformation.title} />
      <meta property="og:description" content={metaInformation.description} />
      <meta property="og:url" content={metaInformation.ogpUrl} />
      <meta property="og:image" content={metaInformation.ogpImage} />
      <meta property="og:type" content="website" />
    </>
  );
});
export default Meta;