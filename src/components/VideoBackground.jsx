import React from "react"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../data/data"
import clip from "../media/clip.mp4"
import Button from "./Button"

const VideoBackground = () => {
  const lang = useRecoilValue(languageState)
  const { videoBg } = lang
  return (
    <div className="video-bg-wrapper">
      <video autoPlay muted loop playsInline className="video-bg-wrapper_video-bg">
        <source src={clip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-bg-wrapper_text-wrapper">
        {videoBg.list.map((p, i) => (
          <p
            className="video-bg-wrapper_text-wrapper_link fs-50 txt-green"
            key={p}
          >
            {p}
            <span></span>
          </p>
        ))}
        <Link to={ROUTE_NAMES.SERVISES} className="mg-t-40">
          <Button text={videoBg.btnText} />
        </Link>
    </div>
    </div>
  )
}

export default VideoBackground
