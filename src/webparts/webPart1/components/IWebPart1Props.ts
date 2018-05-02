export interface IWebPart1Props {
  content : {
    mainText: string;
    supportingText?: string;
    img: {
      imgUrl: string;
      imgAltText: string;
    }
    linkUrl: string;
  }
};
