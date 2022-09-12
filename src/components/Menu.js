import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from './Dishdetail';

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
        <Dishdetail selectedDish={this.state.selectedDish}/>
      </div>
    );
  }
}

export default Menu;