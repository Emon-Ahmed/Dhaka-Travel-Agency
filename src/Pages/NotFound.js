import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="not-found">
        <img width="480px" src="/404.svg" alt="404" />
        <br />
        <Link to="/">
          <button className="btn nav-fancy">HOME PAGE</button>
        </Link>
      </div>
    </div>
  );
}
