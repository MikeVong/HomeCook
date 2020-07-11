import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from "react-bootstrap";
import './index.css';

function jumbotron_header() {
  return (
    <Jumbotron fluid>
      <Container>

      </Container>
    </Jumbotron>
  )
}
// function Jumbo({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}

//     >
//       {children}
//     </div>
//   );
// }

// export default Jumbo;

export default jumbotron_header;
