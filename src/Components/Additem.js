import React from "react";

class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        };
    }

    // ✅ Fix: 'e' properly defined
    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.Additem(this.state.productName, Number(this.state.productPrice));
        this.setState({ productName: "", productPrice: 0 });
    };

    render() {
        return (
            <form className="row mb-5" onSubmit={this.handleSubmit}>
                <div className="mb-3 col-4">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="productName"
                        onChange={(e) => this.setState({ productName: e.target.value })}
                        value={this.state.productName}
                    />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="inputPrice" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="Price"
                        name="productPrice"
                        onChange={(e) => this.setState({ productPrice: Number(e.target.value) })}
                        value={this.state.productPrice}
                    />
                </div>
                <button type="submit" className="btn btn-primary col-4">
                    Add
                </button>
            </form>
        );
    }
}

export default Additem;
