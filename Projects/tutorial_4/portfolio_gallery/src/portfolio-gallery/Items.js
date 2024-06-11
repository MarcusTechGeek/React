function Items({ data }) {
  return (
      // Render a row to contain items
      <div className="row ">
          {
              // Map through the data array to create item cards
              data.map((value) => {
                  // Destructure values from each item object
                  const { id, image, title, description } = value;
                  return (
                      // Render a column for each item
                      <div className="col-sm-3 my-3" key={id}>
                          {/* Render a card for each item */}
                          <div className="card bg-light text-center">
                              {/* Render item image */}
                              <img src={image} className="img-fluid" style={{ height: "200px" }} alt={title} />
                              {/* Render item title */}
                              <h3>{title}</h3>
                              {/* Render item description */}
                              <p>{description}</p>
                          </div>
                      </div>
                  );
              })
          }
      </div>
  );
}

export default Items;
