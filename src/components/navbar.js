import {Search} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div
    `height: 60px;
`;

//wrapper containing the left, right and center divs
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;

`;

//the left side components
const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`;

const Language = styled.span`
    font-size : 14px;
    cursor : pointer
`

const SearchContainer = styled.div`
    border : 1px solid lightgray;
    display : flex;
    align-items : center;
    margin-left : 25px;
    padding : 5px;
`
const Input = styled.input`
    border : none;
`

//the center components
const Center = styled.div`
    flex: 1;
    text-align : center;  
`;

const Logo = styled.h1`

`

//the right components
const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

const MenuItem = styled.div`
    font-size : 14px;
    cursor : pointer;
    margin-left : 25px;
    
`

const Navbar = () => {
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/> 
                        <Search style = {{color :"grey", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>KYLE INDUSTRIES</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem><Badge badgeContent={4} color="primary"><ShoppingCartOutlinedIcon/></Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
