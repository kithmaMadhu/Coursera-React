import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Dishdetail extends Component{

    render(){
        const dateOptions = { month: "long", day: "numeric", year: "numeric" };

        const renderDish = (dish) => (
            <div class="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={ dish.image} />
                    <CardTitle>{ dish.name }</CardTitle>
                    <CardText>{ dish.description }</CardText>
                </Card>
            </div>
        )

        const renderComments = (dish) => {
            if(dish.comments){
                return(
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardText>
                                    <h4>Comments</h4>
                                    <ul className="list-unstyled">
                                        { this.props.selectedDish.comments.map((c) => (
                                            <li>
                                                <p>{ c.comment }</p>
                                                <p>-- { c.author }, { new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(c.date)) }</p>
                                            </li>
                                        ))}
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                )
            }
            return <div></div>
        }
        
        if(this.props.selectedDish){
            return(
                <div class="row">
                    { renderDish(this.props.selectedDish)}
                    { renderComments(this.props.selectedDish)}
                </div>
            )
        }
        return <div></div>
    }
}

export default Dishdetail;