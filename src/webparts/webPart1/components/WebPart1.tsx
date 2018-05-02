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