import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('ORDER SUmmary will update')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {

            if (this.props.ingredients[igKey] > 0) {
                return (
                    <li key={igKey}>
                        <span
                            style={{textTransform: 'capitalize'}}
                        >{igKey}: {this.props.ingredients[igKey]}</span>
                    </li>
                )
            }
        });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
                <Button btnType='Success'clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;