import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../services/api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import catIcon from '../../assets/food-and-restaurant.png';

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');
    const [ categories, setCategories ] = useState([]);
    const [ activeCategory, setActiveCategory ] = useState(0);

    useEffect(()=>{
        async function getCategories(){
            const cat = await api.getCategories();  

            console.log(cat.result)

            if(cat.error == ''){
                setCategories(cat.result);
            }

        } 

        getCategories();
    },[]);

    console.log(categories)

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
            {
                categories.length > 0 && 
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                id: 0,
                                image:`${catIcon}`,
                                title:"Todas as categorias"
                            }}
                            activeCategory={activeCategory}
                        />
                        {categories.map(( item, index )=> (
                            <CategoryItem 
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}