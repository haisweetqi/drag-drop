import React from "react";
import { Modal } from "antd";
import styled from "styled-components";

const ModalStyled = styled(Modal)``;

const ModalComp: React.FC = ({
  handleOk,
  isModalOpen,
  handleCancel,
  title,
  isCancel = true,
}) => {
  return (
    <ModalStyled
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{title}</p>
    </ModalStyled>
  );
};

export default ModalComp;
