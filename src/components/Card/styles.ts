import styled from "styled-components";

interface PokemonCardProps {
  backgroundColor: string;
}
interface PokemonCardHeaderProps {
  icon: string;
}


export const PokemonCard = styled.div<PokemonCardProps>`
  display: block;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 0.188rem 0.5rem;
	border-radius: 0.625rem;
  background-color: ${(props) => props.backgroundColor !== undefined ? props.backgroundColor : '#78C850'};

  @media (max-width: 720px) {
    max-width: 18.75rem;
  }
`;

export const PokemonCardHeader = styled.div<PokemonCardHeaderProps>`
    padding: 2.5rem 2.5rem 0;
		border-radius: 0.625rem;
    background: url('${(props) => props.icon}') top center /80% no-repeat;    
		background-position-y: 0.625rem;
`;

export const PokemonCardHeaderDetails = styled.div`
    color: var(--card-background-shape);
    display: flex;
		justify-content: space-between;
		align-items: center;

    h2 {
      margin-bottom: 0.313rem;
    }

    h2:first-letter {
      text-transform: uppercase;
    }
`;

export const PokemonCardHeaderTypes = styled.div`
  span {
      font-size: 0.8rem;
		    background-color: var(--card-background-shape);
		    opacity: 0.7;
		    border-radius: 0.5rem;
        width: fit-content;
		    padding: 0.125rem 0.625rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 0.188rem 0.5rem;
      }

      span + span {
        margin-left: 0.3rem;
      }
`;

export const PokemonCardHeaderImage = styled.div`
    display: block;
    justify-content: center;

    @media (max-width: 720px) {
      max-width: 12.5rem;
    }
`;


export const PokemonCardBody = styled.div`
    background-color: var(--card-background-shape);
		display: flex;
		justify-content: space-between;
		padding: 3.125rem 1.875rem 3.125rem;
		margin-top: -4.375rem;
		border-bottom-left-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;

    @media (max-width: 720px) {
      padding: 2.5rem 1.25rem 1.25rem;
      margin-top: -3.125rem;
    }
`;


export const PokemonCardBodyInfo = styled.div`
    	padding: 0 0.625rem;
			width: 11.25rem;
      flex-direction: column;

      h2 {
        font-size: 1.375rem;
		  	margin-bottom: 0.938rem;
			  border-bottom: 0.063rem solid var(--border-bottom-100);
      }

			ul {
				li {
					border-bottom: 0.063rem solid var(--border-bottom-50);
					padding: 0 0 0.25rem;
					margin-bottom: 0.313rem;
					font-size: 0.938rem;
				}

        li:first-letter {
          text-transform: uppercase;
        }
			}

      @media (max-width: 720px) {
        display: flex;
        padding: 0 0.2rem;
    }

      
`;


