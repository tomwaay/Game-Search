import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
import { popup } from "../animations";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ name, released, image, id }) => {
  //load detail handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      layoutId={id}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
