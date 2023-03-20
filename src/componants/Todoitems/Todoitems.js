import React from "react";
import './Todoitems.css'
const Todoitems = (props) => {
    const { items } = props;
    const { deleteitem } = props;
    let len= items.length;
    const myitems = len ? (
        items.map(item => {
        return (
            <div className="list" key={item.id}>
                <span className="name item">{item.name}</span>
                <span className="age item">{item.age}</span>
                <span className="action icon" onClick={() => deleteitem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
    <p>There is no items to show</p>
    )
    return (
        <div>
            <div className="list">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>

            </div>
            {myitems}
        </div>
    )
}
export default Todoitems;