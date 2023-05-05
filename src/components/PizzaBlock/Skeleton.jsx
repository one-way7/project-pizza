import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={288}
        height={466}
        viewBox="0 0 288 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="155" cy="157" r="119" />
        <rect x="40" y="295" rx="0" ry="0" width="236" height="22" />
        <rect x="27" y="336" rx="0" ry="0" width="259" height="67" />
        <rect x="29" y="433" rx="0" ry="0" width="95" height="39" />
        <rect x="189" y="429" rx="0" ry="0" width="97" height="64" />
    </ContentLoader>
)

export default Skeleton