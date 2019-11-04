import React from "react";

const AuthorCard = props => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.auth.imageUrl}
            alt={props.auth.first_name + " " + props.auth.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.auth.first_name + " " + props.auth.last_name}</span>
          </h5>
          <small className="card-text">{props.auth.books.length} books</small>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
