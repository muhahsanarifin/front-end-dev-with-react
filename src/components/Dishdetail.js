import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

  renderDish() {

    const dish = this.props.selectedDish;
    
    if(dish != null) {
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className="fw-bold">{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }else {
      return(
        <div></div>
      )
    }
  }

  renderComments(dish) {

    if(dish != null) {

      const coms = dish.comments.map(com => {
        
        return (
          <ul key={com.id} className="list-unstyled">
            <li className="text-primary fw-bold">
              Rating: {com.rating}
            </li>
            <li>
              {com.comment}
            </li>
            <li>
              - {com.author}, {}
              {
                new Intl.DateTimeFormat('en-US', {
                  month: 'short', day: '2-digit', year: 'numeric'
                }).format(new Date(com.date))
              }
            </li>
          </ul>
        )
      });

      return(
        <div className="p-2">
          <h3>Comments</h3>
          {coms}
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  render() {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-center px-2">
        <div className="col-12 col-md-5 m-2">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-2">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;