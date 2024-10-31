import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" /> 
    <rect x="0" y="296" rx="15" ry="15" width="280" height="25" /> 
    <rect x="0" y="346" rx="12" ry="12" width="280" height="77" /> 
    <rect x="0" y="435" rx="0" ry="0" width="95" height="30" /> 
    <rect x="117" y="431" rx="20" ry="20" width="152" height="35" />
  </ContentLoader>
)

export default Skeleton

