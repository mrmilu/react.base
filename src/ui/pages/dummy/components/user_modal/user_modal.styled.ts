import styled from "styled-components";
import { ModalContent } from "@/src/ui/components/modal/modal";
import { colors } from "@/src/ui/styles/colors";

export const UserModalContentStyled = styled(ModalContent)<{ id: string }>`
  background-color: ${(props) => (Number(props.id) % 2 ? colors.gray10 : colors.gray40)};
`;

export const UserModalStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
