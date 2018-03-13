import React from 'react';
import { observer } from 'mobx-react';
import store from '../models/CanvasStore.js';

class FontSize extends React.Component {

	render() {
		return(
			<div>
				{'Font size:'}
				<button onClick={this.props.decreaseFontSize}> {'-1'} </button>
				<button onClick={this.props.increaseFontSize}> {'+1'} </button> 
				<span>{this.props.fontSize}</span>
			</div>
		);
	}
}
export default observer(FontSize);