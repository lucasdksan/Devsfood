import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import { Container, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem } from './styled';

import api from '../../services/api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import catIcon from '../../assets/food-and-restaurant.png';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState('');

    const [categories, setCategories] = useState([]);
    const [produts, setProduts] = useState([]);

    const [modalData, setModalData] = useState({});

    const [activeCategory, setActiveCategory] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(0);

    const [modalStatus, setModalStatus] = useState(false);

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);

        console.log(prods)

        if (prods.error == '') {
            console.log(prods.result.data);
            setProduts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }

    }

    useEffect(() => {
        async function getCategories() {
            const cat = await api.getCategories();

            console.log(cat.result)

            if (cat.error == '') {
                setCategories(cat.result);
            }

            ReactTooltip.rebuild();

        }

        getCategories();
    }, []);

    useEffect(() => {
        setProduts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    function handleProductClick(data){
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {
                categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                image: `${catIcon}`,
                                name: "Todas as categorias"
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
            {
                produts.length > 0 && (
                    <ProductArea>
                        <ProductList>
                            {
                                produts.map((element, index) => {
                                    return (
                                        <ProductItem
                                            key={index}
                                            data={element}
                                            onClick={handleProductClick}
                                        />
                                    )
                                })
                            }
                        </ProductList>
                    </ProductArea>
                )
            }
            {

                (totalPages > 0) &&
                <ProductPaginationArea>
                    {
                        Array(totalPages).fill(0).map((element, index) => (
                            <ProductPaginationItem
                                key={index}
                                active={activePage}
                                current={index + 1}
                                onClick={() => setActivePage(index + 1)}
                            >
                                {index + 1}
                            </ProductPaginationItem>
                        ))
                    }
                </ProductPaginationArea>
            }
            <Modal 
                status={modalStatus} 
                setStatus={setModalStatus}
            >
                <ModalProduct 
                    data={modalData} 
                    setStatus={setModalStatus}
                />
            </Modal>
        </Container>
    );
}