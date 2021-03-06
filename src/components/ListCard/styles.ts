import styled from "styled-components";

interface PokemonListProps {
  WhichPokemon: string;
  pokemonType: string;
}

export const NavigationList = styled.nav`
  max-width: 12.5rem;
	margin-top: 1.25rem;
  overflow: scroll;
	height: 110vh;
	overflow-x: hidden;
  
  ul {
		flex-wrap: wrap;
		justify-content: space-between;
	}


  &::-webkit-scrollbar {
    width: 2.2vh;
  }
  &::-webkit-scrollbar-track {
    background: var(--list-scrollbar-background);
    border-radius: 1.25rem;
    margin-bottom: .5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #6B727A;
    border: .15rem;
    border-radius: 100vw;
  }
  &::-webkit-scrollbar-thumb-hover {
    background: hsl(120 100% 20% / 0.5);
  }

  @media (max-width: 720px) {
    max-width: 12.875rem;

    ul {
        display: flex;
        gap: 0.375rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
  }

  @media (min-width: 721px) {
    max-height: 36.875rem;
  }
`;

export const PokemonList = styled.li<PokemonListProps>`
    display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.625rem;
		margin: 0.625rem;
    background-color: ${props =>
    props.WhichPokemon === props.pokemonType ? "var(--list-active-background)" : "var(--list-default-background)"};
		color: #fff;
		padding: 0 0.7rem;
		border-top-left-radius: 1.875rem;
		border-bottom-left-radius: 1.875rem;
		min-height: 4.375rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 0.188rem 0.5rem;
		transition: 0.15s ease-in-out;    
		cursor: pointer;

		&:hover {
			transform: scale(1.10);
		}   


    div {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    div + div {
      margin-left: 10px;
    }
		span {
      font-size: 0.63rem;
		
		}

    span:first-letter {
      text-transform: uppercase;
    }

    @media (max-width: 720px) {
        width: 9rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 0;
        border-radius: 0.5rem;

        span {
          padding-right: 0.5rem;
        }
    }
`;
