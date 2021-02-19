import React from "react";

export default function AuthorCard() {
  return (
    <div className="card">
      <div className="avatar">
        <Image image={author.picture}></Image>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="label">Name</div>
          <div className="value">{author.name}</div>
        </div>
        <div className="stat">
          <div className="label">Email</div>
          <div className="value">{author.email}</div>
        </div>
      </div>
    </div>
  );
}
