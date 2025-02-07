import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola]

const IconesHeaderContainer = styled.ul`
    display: flex;
    align-items: center;
`;


const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`;

function IconesHeader() {
    return (
        <IconesHeaderContainer>
            {icones.map((icone) => (
                <Icone className='icone'><img src={icone}></img></Icone>
            ))}
        </IconesHeaderContainer>
    )
}

export default IconesHeader