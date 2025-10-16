import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const MyFavourites = () => {
  const favourites = useSelector((state) => state.main.favourites);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Prefer</h1>
          {favourites.length === 0 ? (
            <p>Do you want to find a job or not? Add something here.</p>
          ) : (
            <ListGroup>
              {favourites.map((company) => (
                <ListGroup.Item
                  key={company}
                  className="d-flex justify-content-between align-items-center"
                >
                  {company}
                  <Button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: company,
                      })
                    }
                  >
                    remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyFavourites;
