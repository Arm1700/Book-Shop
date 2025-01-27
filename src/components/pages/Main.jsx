import { Route, Routes } from "react-router-dom";
import Klor from "../shared/Klor";
import Home from "../header/home/Home";
import { categoryArray } from "../../entities/categoryArray";
import Navigation from "../shared/Navigation";
import Category from "../pages/category/Category";
import Book from "../pages/category/[id]/index";

export default function Main() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path={`/home/:${categoryArray.name}/:id`} element={<Book />} />
                {
                    categoryArray.map((category) => {
                        return (
                            <Route key={category.id} path={category.path} element={<Category name={category.name} />} />
                        )
                    })
                }
            </Routes>
            <Klor />
        </div>


    )
}