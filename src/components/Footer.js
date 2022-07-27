// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Navbar from 'react-bootstrap/Navbar';

// export const Footer = () => {
//   return (
//     <Container>
//       <Row>
//         {/* <Col xs={4}>Security Inspector</Col>
//         <Col>Sanidhiya</Col>
//         <Col>Rashita</Col>
//         <Col>Jashan</Col> */}
//       </Row>
//     </Container>

//   );
// }

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12 about-company">
            <h2>
              <img src="/images/logo.png" alt="" width="40" /> Security
              Inspector
            </h2>
            <p className="pr-5 text-white-50">
              Scan all the repositories for the possible vulnebralities.
            </p>
            <p>
              <a href="#">
                <i className="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Jashan</h4>
            <ul className="m-0 p-0">
              <li>
                <img src="/images/li.png" alt="" width="16" />{' '}
                <a
                  href="https://www.linkedin.com/in/jashanwarraich/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <img src="/images/gh.png" alt="" width="16" />{' '}
                <a href="https://github.com/jashanwarraich" target="_blank">
                  {' '}
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Sanidhiya</h4>
            <ul className=" m-0 p-0">
              <li>
                <img src="/images/li.png" alt="" width="16" />{' '}
                <a
                  href="https://www.linkedin.com/in/sanidhiya-g-86a427192/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <img src="/images/gh.png" alt="" width="16" />{' '}
                <a href="https://github.com/dragonman164" target="_blank">
                  {' '}
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Rashita</h4>
            <ul className="m-0 p-0">
              <li>
                <img src="/images/li.png" alt="" width="16" />{' '}
                <a
                  href="https://www.linkedin.com/in/rashita-mehta-350346197/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <img src="/images/gh.png" alt="" width="16" />{' '}
                <a href="https://github.com/Rashita123" target="_blank">
                  {' '}
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © Security Instpector. All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
