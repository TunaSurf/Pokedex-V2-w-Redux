import React from "react";
import { withRouter } from "react-router";

function PokemonDetail({ match }) {
  return (
    <div>
      <h1>{match.params.pokemon}</h1>
      Pokemon Detail
    </div>
  );
}

export default withRouter(PokemonDetail);
