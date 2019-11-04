import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorList = props.authors.map(auth => (
    <AuthorCard auth={auth} key={`${auth.first_name} ${auth.last_name}`} />
  ));
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
};
export default AuthorList;
