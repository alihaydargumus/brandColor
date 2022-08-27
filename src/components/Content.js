import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import {useContext, useState} from "react";
import Lazyload from "react-lazyload"
import Download from "./Download";
import Loader from "./Loader";

function Content() {
    const {brands, selectedBrands} = useContext(MainContext)

    return (
        <main className="content">
            <header className="header">
                <Search/>
                {selectedBrands.length? <Download/>:''}
            </header>
            <section className="brands">
                {brands.map(brand => (
                    <Lazyload key={brand.slug} overflow={true} once={true} placeholder={<Loader/>}>
                        <Brand brand={brand}/>
                    </Lazyload>
                ))}
            </section>
        </main>
    );
}

export default Content;