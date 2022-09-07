import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "./assets/images/uthappizza.png",
          category: "mains",
          label: "hot",
          price: "4.99",
          description:"A unique combination of Indian Uthappam (pancake) and Italian pizza. topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Panneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "./assets/images/zucchipakoda.png",
          category: "appetier",
          label: "",
          price: "1.99",
          description:"Deep fried zucchini coated with mildy spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "./assets/images/vadonut.png",
          category: "appetier",
          label: "New",
          price: "1.99",
          description:"A quintessential Confusion experience, is it a vada or is it a donut ?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "./assets/images/elaicheesecake.png",
          category: "appetier",
          label: "",
          price: "1.99",
          description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamos.",
        },
      ],
    };
  }

  render(){
    const menu = this.state.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li" className="d-flex flex-row align-items-center gap-3">
            <Media>
              <Media object src={dish.image} alt={dish.name}/>
            </Media>
            <Media body>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row"> 
          <Media list>
            {menu}
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;