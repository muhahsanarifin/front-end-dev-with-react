import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };

  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if(dish != null) {
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className="fw-bold">{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
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
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className=" p-2 flex-fill">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading className="border border-primary rounded-3 bg-primary bg-opacity-75 w-50 fw-bold text-white text-wrap text-center">
                {dish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="d-flex flex-row flex-wrap">{menu}</div>
        <div className="d-flex flex-row flex-wrap justify-content-center px-2">
          <div className="col-12 col-md-5 m-2">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-2">
            {this.renderComments(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;