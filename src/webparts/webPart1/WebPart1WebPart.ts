import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Version} from '@microsoft/sp-core-library';
import {BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneTextField, PropertyPaneCheckbox} from '@microsoft/sp-webpart-base';

import * as strings from 'WebPart1WebPartStrings';
import WebPart1 from './components/WebPart1';
import {IWebPart1Props} from './components/IWebPart1Props';
import {IWebPart1WebPartProps} from './IWebPart1WebPartProps';

export default class WebPart1WebPart extends BaseClientSideWebPart < IWebPart1WebPartProps > {

  public render() : void {
    const element: React.ReactElement < IWebPart1Props > = React.createElement(WebPart1, {
      content: {
        mainText: this.properties.content.mainText,
        supportingText: this.properties.content.supportingText,
        img: {
          imgUrl: this.properties.content.img.imgUrl,
          imgAltText: this.properties.content.img.imgAltText
        },
        linkUrl: this.properties.content.linkUrl
      }
    });
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion() : Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges() : boolean {return true;}

  protected getPropertyPaneConfiguration() : IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.NameAndDescriptionGroupName,
              groupFields: [
                PropertyPaneTextField('name', {label: strings.NameFieldLabel}),
                PropertyPaneTextField('description', {label: strings.DescriptionFieldLabel})
              ]
            }, {
              groupName: strings.ContributorAccessGroupName,
              groupFields: [PropertyPaneCheckbox('contributorAccess', {
                  disabled: true,
                  text: strings.ContributorFieldLabel
                })]
            }
          ]
        }, {
          header: {
            description: strings.PropertyPaneContentDescription
          },
          groups: [
            {
              groupName: strings.ContentGroupName,
              groupFields: [
                PropertyPaneTextField('content.mainText', {label: strings.MainTextFieldLabel}),
                PropertyPaneTextField('content.supportingText', {
                  label: strings.SupportingTextFieldLabel,
                  rows: 3
                }),
                PropertyPaneTextField('content.img.imgUrl', {label: strings.ImageUrlSupportingFieldLabel}),
                PropertyPaneTextField('content.img.imgAltText', {label: strings.ImageAltDescriptionFieldLabel}),
                PropertyPaneTextField('content.linkUrl', {label: strings.LinkUrlFieldLabel})
              ]
            }
          ]
        }
      ]
    };
  }
}
