import React from "react";
import styled from "styled-components";
import lost from "../assets/lost2.gif";
import { Link, useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="lost">
        <div className="lost_cnt">
          <div className="top">
            <h2>404</h2>
            <h1>
              <span>Lost</span> in Space
            </h1>

            <p>
              You have reached the edge of the universe.
              <br /> The page you requested could not be found.
              <br /> Don't worry and return to the preveious page
            </p>

            <div className="lost_cnt-btn">
              <button style={{ border: "none" }}>
                <Link to="/" className="btn">
                  Go Home
                </Link>
              </button>
              <button className="btn btn-light" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
          <div className="bottom">
            <p>&copy; 2023 -All rights reserved</p>
          </div>
        </div>
        <div className="lost_img">
          <img src={lost} alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 1100px) {
    overflow: unset;
  }

  .lost {
    width: 90%;
    background: #000;
    border-radius: 20px;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    box-shadow: 1px 2px 8px #fff;
    @media screen and (max-width: 1100px) {
      background: transparent;
      flex-direction: column-reverse;
      height: unset;
      /* display: block; */
      margin-top: 10rem;
      padding: 50px 0;
      position: relative;
      border-radius: 0;
      box-shadow: unset;
    }
    @media screen and (max-width: 500px) {
      margin: 5rem 0px 2rem 0px;
      align-items: center !important;
      justify: center;
    }
    .lost_cnt {
      width: 40%;

      /* position: absolute; */

      h2 {
        font-size: 40px;
        color: #fff;
        font-weight: 400;
        padding-bottom: 15px;
      }
      h1 {
        font-size: 50px;
        font-weight: 600;
        padding-bottom: 10px;

        span {
          position: relative;
          &::after {
            content: "";
            width: 100%;
            height: 3px;
            border-radius: 5px;
            background: #bb5858;
            position: absolute;
            bottom: -10px;
            left: 0px;
          }
        }
      }

      p {
        text-align: left;
        padding-top: 25px;
      }
      .lost_cnt-btn {
        margin: 30px 0px;
        /* width: 90%; */

        button {
          background: none;
          outline: none;
          /* border: none; */
        }
        .btn {
          border-radius: 25px;
          margin-right: 30px;
        }
        .btn-light {
          transition: 0.3s ease-in-out;
          &:hover {
            background: #bb5858;
            color: #000;
          }
        }
      }
      .bottom p {
        font-size: 16px;
        font-weight: 300;
      }
      @media screen and (max-width: 1100px) {
        width: 90%;
        .btn-light {
          color: #000;
          transition: 0.3s ease-in-out;
          &:hover {
            background: #fff;
            border: 0px !important;
          }
        }
        .bottom p {
          color: #000;
          font-weight: 800;
        }
      }
      @media screen and (max-width: 500px) {
        h2 {
          font-size: 30px;
          padding-bottom: 10px;
        }
        h1 {
          font-size: 30px;
          padding-bottom: 5px;
        }
        p {
          font-size: 15px;
        }
        .bottom p {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          text-shadow: 1px 1px 5px #000;
        }
        .lost_cnt-btn {
          margin: 10px 0px;

          button {
            background: none;
            outline: none;
            display: inline !important;
            /* border: none; */
          }
          .btn {
            padding: 12px 20px;
            font-size: 15px;
            text-transform: uppercase;
            border: 1px solid #fff;
            font-weight: 600;
            display: block;
            /* display: flex;
            align-items: center;
            justify-content: center; */
          }
          .btn-light {
            margin-top: 10px;
          }
        }
      }
    }
    .lost_img {
      width: 55%;
      height: 95%;
      border-radius: 50%;
      overflow: hidden;
      border: none;
      box-shadow: 1px 1px 10px #fff;
      transition: 0.3s ease-in-out;

      &:hover {
        box-shadow: unset;
        border-radius: 10px;
      }
      @media screen and (max-width: 1100px) {
        width: 100%;
        border-radius: 10px;
        height: 100% !important;
        object-fit: cover;
        position: absolute;
        z-index: -1;
        background: rgba(0, 0, 0);
      }
      img {
        object-fit: top;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default Empty;
