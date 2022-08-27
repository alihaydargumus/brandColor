import React, {useContext, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Search from "./Search";
import Download from "./Download";
import Lazyload from "react-lazyload";
import Brand from "./Brand";
import MainContext from "../MainContext";
import {GrLinkPrevious} from "react-icons/gr";
import Loader from "./Loader";

function Collection(props) {
    const {slugs} = useParams()
    const navigate = useNavigate()
    const {setSelectedBrands, selectedBrands, brands} = useContext(MainContext)
    const clearSelectedBrands = () => {
        setSelectedBrands([])
        navigate('success');
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])

    return (
        <main className="content">
            <header className="header">
                <Link to='/' onClick={clearSelectedBrands}>
                    <a className="back-btn">
                        <GrLinkPrevious/>
                        All Brands
                    </a>
                </Link>
                {selectedBrands.length ? <Download/> : ''}
            </header>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <Lazyload key={brand.slug} overflow={true} once={true} placeholder={<Loader/>}>
                            <Brand brand={brand}/>
                        </Lazyload>
                    )
                })}
            </section>
        </main>
    );
}

export default Collection;