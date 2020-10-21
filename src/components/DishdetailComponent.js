import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    	function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
	}
    
    function RenderComments({dish}) {
        if (dish != null && dish.comments != null) {
            
            return dish.comments.map(review => (
                <div key={review.id}>
                    <div><h4>Comments</h4></div>    
                    <div>
                        <p>{review.comment}</p>
                    </div>
                    <div>
                    <p>-- {review.author}, &nbsp; {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(review.date))}
                    </p>
                   </div>
                        
                </div>
                ));
            
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
    		return ( 
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.dish} />
                    </div>
                </div>
            </div>
		);
    }

export default DishDetail;