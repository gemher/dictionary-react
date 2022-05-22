import React, { useState } from "react";

export default function Dictionary() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 70ºF in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          placeholder={"City"}
          onChange={changeCity}
        />
        <input type="submit" class="btn btn-dark" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
