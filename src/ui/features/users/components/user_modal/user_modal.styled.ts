import styled from "styled-components";
import { ModalContent } from "@/src/ui/components/modal/modal";
import { colors } from "@/src/ui/styles/colors";

const Content = styled(ModalContent)<{ id: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (Number(props.id) % 2 ? colors.gray10 : colors.gray40)};
`;

const UserModalStyled = {
  Content
};

export default UserModalStyled;
