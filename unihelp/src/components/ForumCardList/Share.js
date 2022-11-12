import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function Share({ title, id }) {
  return (
    <>
      <FacebookShareButton
        url={window.location.href + "/" + id}
        quote={"Hey, I would like to share this thread with you!"}
        hashtag="#UniHelp"
      >
        <FacebookIcon
          logoFillColor="white"
          size={30}
          round={true}
        ></FacebookIcon>
      </FacebookShareButton>
      &nbsp;
      <TelegramShareButton url={window.location.href + "/" + id} title={title}>
        <TelegramIcon
          logoFillColor="white"
          size={30}
          round={true}
        ></TelegramIcon>
      </TelegramShareButton>
      &nbsp;
      <EmailShareButton url={window.location.href + "/" + id} subject={title}>
        <EmailIcon logoFillColor="white" size={30} round={true}>
        </EmailIcon>
      </EmailShareButton>
    </>
  );
}

export default Share;
