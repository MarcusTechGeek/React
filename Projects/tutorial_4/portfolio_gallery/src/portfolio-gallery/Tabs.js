function Tabs({ filterCategory, tabsData }) {
  return (
      <>
          {/* Render a div with text center alignment and margin top */}
          <div className="text-center my-4">
              {/* Map through the tabsData array to create buttons */}
              {tabsData.map((category, index) => {
                  return (
                      // Render a button for each category
                      <button
                          type="button"
                          className="btn btn-outline-primary mx-2 text-capitalize"
                          // Attach onClick event to filter items based on category
                          onClick={() => filterCategory(category)}
                          key={index}
                      >
                          {/* Display category name */}
                          {category}
                      </button>
                  );
              })}
          </div>
      </>
  );
}

export default Tabs;
