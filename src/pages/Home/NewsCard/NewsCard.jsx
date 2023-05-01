import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ width: "45PX", height: "45PX" }}
          src={author?.img}
          roundedCircle
        />
        <div className="d-flex flex-column ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("yyyy-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}. . .{" "}
              <Link to={`/news/:_id`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
        <div>
          <Rating>
            placeholderRating={rating.number}
            readyonly
            readyonly emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          </Rating>
          <small>{rating?.number}</small>
        </div>
        <div>
          <FaEye />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
