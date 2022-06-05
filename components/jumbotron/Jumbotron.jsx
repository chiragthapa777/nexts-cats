import { useRouter } from "next/router";
import React from "react";
useRouter

export default function Jumbotron() {
  const router=useRouter()
  return (
    <div class="jumbotron jumbotron-fluid mx-5 my-5">
      <h1 class="display-4">Cats - world</h1>
      <p class="lead">
        Find a new cats pet today, adopt a new cat today!!!!
      </p>
      <hr class="my-4" />
      <p>
        Find the cats you like, lot of option out there
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button" onClick={()=>router.push("/cat")}>
        Start looking
      </a>
    </div>
  );
}
