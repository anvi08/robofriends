import React from 'react';

const Card = ({name,email,id}) =>{
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img  alt='robots' src={`https://robohash.org/${id}?200*200`}/>
			<div>
				<h2>{email}</h2>
				<p>{name}</p>			
			</div>
		</div>
	);
}
export default Card;