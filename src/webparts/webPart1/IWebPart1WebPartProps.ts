export interface IWebPart1WebPartProps {
    name : string;
    description : string;
    supportingList : string;
    contributorAccess : boolean;
    content : {
        mainText: string;
        supportingText?: string;
        img: {
            imgUrl: string;
            imgAltText: string;
        }
        linkUrl: string;
    }
}