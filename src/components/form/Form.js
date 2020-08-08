import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			price: '',
			image_url: ''
		}

	}

	componentDidMount() {
		const {id} = this.props.match.params
		this.getProduct(id)
	}

	render() {
		return (
			<div>

			</div>
		)
	}
}
export default Form;