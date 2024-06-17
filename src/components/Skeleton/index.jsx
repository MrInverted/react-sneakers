import React from "react"
import ContentLoader from "react-content-loader"

export default function Skeleton(props) {
  return (
    <ContentLoader
      speed={1}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#fcfcfc"
      foregroundColor="#f2f2f2"
      style={{ border: "1px solid #F3F3F3", borderRadius: "40px" }}
      {...props}
    >
      <rect x="30" y="36" rx="10" ry="10" width="150" height="90" />
      <rect x="30" y="140" rx="3" ry="3" width="150" height="15" />
      <rect x="30" y="160" rx="3" ry="3" width="93" height="15" />
      <rect x="30" y="200" rx="8" ry="8" width="80" height="24" />
      <rect x="150" y="190" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  )
}
