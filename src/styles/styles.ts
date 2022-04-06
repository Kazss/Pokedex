import styled from "styled-components";

export const ContentContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  padding: 1.875rem 0;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 1.875rem 0;
  }
`