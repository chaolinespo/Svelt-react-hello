import React from "react";

//create your first component
const Card = () => {
  return (
    <div className="my-3" id="card">
      <div className="row row-cols-1 row-cols-lg-4 g-4 text-center me-0">
        <div className="col">
          <div className="card h-100">
            <img src="https://placehold.co/500x325" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">card title</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo magni sapiente, tempore debitis beatae culpa natus
              architecto.
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
