import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: "",
			image_url: "",
            currentId: null,
            
		};
	}
	componentWillMount(props) {
		if (this.props.match.params.id) {
            axios.get('/api/inventory/'+this.props.match.params.id)
            .then(response=> {
                this.setState({
                    name: response.data[0].name,
                    price: response.data[0].price,
                    image_url:response.data[0].image_url,
                    currentId:response.data[0].product_id
                })
            })
		}
         
	}
	render() {
		return(
			<div>
				
			</div>
		)
	}

}


export default Form;