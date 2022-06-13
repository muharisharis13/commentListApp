import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { any, bool, func, string } from "prop-types";

const ModalModules = (props) => {
  const {
    show,
    onHide,
    children,
    size = "lg",
    title = "Modal Header",
    header,
  } = props;

  window.onclick = (event) => {
    if (event.target.className === "modal") {
      onHide();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener(
        "keydown",
        (e) => {
          if (e.keyCode === 27) {
            onHide();
          }
        },
        false
      );
    } else {
      document.removeEventListener(
        "keydown",
        (e) => {
          if (e.keyCode === 27) {
            onHide();
          }
        },
        false
      );
    }
  }, [show, onHide]);
  return (
    <Container show={show} size={size}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          {header && (
            <ModalHeader>
              <span
                className="close"
                onClick={onHide}
                style={{ fontSize: "20pt", cursor: "pointer" }}
              >
                &times;
              </span>
              <h3>{title}</h3>
            </ModalHeader>
          )}
          <div className="modal-body">{children}</div>
          {/* {
            footer &&
            <div class="modal-footer">
              
            </div>
          } */}
        </div>
      </div>
    </Container>
  );
};

export default ModalModules;

ModalModules.propTypes = {
  show: any.isRequired,
  onHide: func.isRequired,
  children: any,
  size: string,
};

const ModalHeader = styled.div`
  border-bottom: thin solid #ddd;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

ModalModules.propTypes = {
  show: bool.isRequired,
  onHide: func.isRequired,
  children: any,
};

const animation = keyframes`
from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
`;

const Container = styled.div`
  /* The Modal (background) */
  .modal {
    display: ${({ show }) => (show ? "block" : "none")}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Header */
  .modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }

  /* Modal Body */
  .modal-body {
    color: #000;
    min-height: 30vh;
  }

  /* Modal Footer */
  .modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    margin-top: 10%;
    padding: 0;
    border: 1px solid #888;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: ${({ size }) =>
      size === "lg"
        ? "70%"
        : size === "xl"
        ? "80"
        : size === "md"
        ? "50%"
        : size === "sm"
        ? "40%"
        : "100%"};
    animation-name: ${animation};
    animation-duration: 0.4s;

    @media (orientation: portrait) {
      width: ${({ size }) =>
        size === "lg"
          ? "90%"
          : size === "xl"
          ? "95"
          : size === "md"
          ? "80%"
          : size === "sm"
          ? "70%"
          : "100%"};

      margin-top: 50%;
    }
  }
`;
