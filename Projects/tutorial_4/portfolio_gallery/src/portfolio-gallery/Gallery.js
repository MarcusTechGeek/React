import Tabs from "./Tabs"; // Importing the Tabs component
import Items from "./Items"; // Importing the Items component
import Data from "./Data"; // Importing the data array
import { useState } from "react"; // Importing the useState hook from React

function Gallery() {
    // State to manage the data
    const [data, setData] = useState(Data);

    // Extracting category data from the items
    const categoryData = Data.map((value) => {
        return value.category;
    });

    // Creating an array of unique categories for tabs
    const tabsData = ["all", ...new Set(categoryData)];

    // Function to filter items based on category
    const filterCategory = (category) => {
        if (category === "all") {
            // If "all" category selected, set data to original array
            setData(Data);
            return;
        }
        // Filter the data based on selected category
        const filteredData = Data.filter((value) => {
            return value.category === category;
        });
        // Update the data state with filtered data
        setData(filteredData);
    };

    return (
        // Gallery component markup
        <div className="container">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    {/* Render Tabs component */}
                    <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                    {/* Render Items component with filtered data */}
                    <Items data={data} />
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
    );
}

export default Gallery;
