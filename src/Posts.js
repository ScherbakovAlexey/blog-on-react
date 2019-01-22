import React from 'react'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
			num: 3
    };
			this.handleClick = this.handleClick.bind(this);
  }
	


  componentDidMount() {
		//alert('n');
    fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(results => {
			return results.json();
		}).then(data => {
			let posts = data.map((pst) => {
				//console.log(pst.title);
				//console.log(pst.userId+pst.id);
				return(
					<div key={pst.userId+pst.id} className='article'>
						<p className='news__title'>{pst.title}</p>
						<p className='news__date'> MARCH 2, 2016 | TRAVEL</p>
						<p className='news__body'>{pst.body}</p>
						<div className='news__btn'>Continue reading</div>
					</div>
				) 
			})
			this.setState({posts: posts});
			//console.log("state", this.state.posts);
		})
  }

  render() {
		return(
			<div className="container">
				<div className="container1">
					{this.state.posts.slice(0,this.state.num)}
				</div>
        <div className="more_btn_container">
				<button className="more_btn" onClick={this.handleClick}>
					More posts
				</button>
				</div>
				</div>
		)
  }
	
	handleClick(){
		console.log('clicked');
		this.setState({
			num: this.state.num + 3
		})
	}
}

export default Posts