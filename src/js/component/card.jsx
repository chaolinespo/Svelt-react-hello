import React from "react";

//create your first component
export const Card = () => {
  return (
    <div className="col">
      <div className="card">
        <img src="https://placehold.co/500x325" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">card title</h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          magni sapiente, tempore debitis beatae culpa natus architecto.
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};
