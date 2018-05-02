import * as React from 'react';
import styles from './WebPart1.module.scss';
import {IWebPart1Props} from './IWebPart1Props';
import {escape} from '@microsoft/sp-lodash-subset';

export default class WebPart1 extends React.Component < IWebPart1Props,
any > {
  constructor(props) {
    super(props);
    this.state = {};
  };
  public componentDidMount() : any {
    console.log('yep we mounted');
  };
  public render() : React.ReactElement < IWebPart1Props > {
    console.log(this.props);
    return (
      <div className={styles.webPart1}>
        <div className={styles.row}>
          <a className={styles.link} href={this.props.content.linkUrl} target='blank'>
            <h1>{this.props.content.mainText}</h1>
            {this.props.content.supportingText
              ? <p>{this.props.content.supportingText}</p>
              : null}
          </a>
        </div>
      </div>
    );
  }
}

{/*
  <h3>{this.props.content.mainText}</h3>
        <p>{this.props.content.supportingText}</p>
        <ul>
          {this
            .props
            .content
            .img
            .imgUrl
            .indexOf('www') > 1
            ? <li>
                <a href={this.props.content.img.imgUrl} target='blank'>{this.props.content.img.imgAltText}</a>
              </li>
            : null}
          {this
            .props
            .content
            .linkUrl
            .indexOf('www') > 1
            ? <li>
                <a href={this.props.content.linkUrl} target='blank'>your link</a>
              </li>
            : null}
        </ul>
  <div className={ styles.webPart1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div> */
}