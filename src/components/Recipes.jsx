import axios from "axios";
import React, { useEffect, useState } from "react";

const recipes = () => {
  const [recipes, setrecipes] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get(
        "https://dummyjson.com/recipes?limit=10"
      );

      setrecipes(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="container my-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Page Title */}

        <h1
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            fontSize: "3rem",
            letterSpacing: "1px",
          }}
        >
          🍽️ Delicious Recipes
        </h1>
        <p className="text-center text-secondary mb-5">
  Discover, cook, and enjoy delicious recipes from around the world — all in one place.
</p>

        <div className="row g-4">

          {recipes.map((rec) => (

            <div className="col-12" key={rec.id}>

              <div
                className="card shadow border-0"
                style={{
                  borderRadius: "20px",
                  transition: "0.3s ease",
                }}
              >

                <div className="row g-0">

                  {/* Image */}

                  <div className="col-md-4 d-flex align-items-center justify-content-center">

                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="img-fluid"
                      style={{
                        maxHeight: "450px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "15px",
                      }}
                    />

                  </div>

                  {/* Content */}

                  <div className="col-md-8">

                    <div className="card-body p-4">

                      {/* Recipe Name */}

                      <h2
                        className="mb-4"
                        style={{
                          fontWeight: "700",
                          fontSize: "2rem",
                          color: "#212529",
                        }}
                      >
                        🍲 {rec.name}
                      </h2>

                      {/* Recipe Details */}

                      <div className="row mb-4">

                        <div className="col-md-6 mb-2">
                          🍜 <strong>Cuisine:</strong> {rec.cuisine}
                        </div>

                        <div className="col-md-6 mb-2">
                          🍽️ <strong>Meal Type:</strong>{" "}
                          {rec.mealType?.join(", ")}
                        </div>

                        <div className="col-md-6 mb-2">
                          ⏱️ <strong>Prep Time:</strong>{" "}
                          {rec.prepTimeMinutes} mins
                        </div>

                        <div className="col-md-6 mb-2">
                          🔥 <strong>Cook Time:</strong>{" "}
                          {rec.cookTimeMinutes} mins
                        </div>

                        <div className="col-md-6 mb-2">
                          👥 <strong>Servings:</strong>{" "}
                          {rec.servings}
                        </div>

                        <div className="col-md-6 mb-2">
                          ⭐ <strong>Rating:</strong>{" "}
                          {rec.rating}
                        </div>

                      </div>

                      <hr />

                      <div className="row">

                        {/* Ingredients */}

                        <div className="col-md-6">

                          <h4
                            style={{
                              fontWeight: "600",
                            }}
                          >
                            🥗 Ingredients
                          </h4>

                          <ul>

                            {rec.ingredients.map(
                              (ing, index) => (

                                <li key={index}>
                                  {ing}
                                </li>

                              )
                            )}

                          </ul>

                        </div>

                        {/* Instructions */}

                        <div className="col-md-6">

                          <h4
                            style={{
                              fontWeight: "600",
                            }}
                          >
                            📝 Instructions
                          </h4>

                          <ol>

                            {rec.instructions.map(
                              (ins, index) => (

                                <li key={index}>
                                  {ins}
                                </li>

                              )
                            )}

                          </ol>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
};

export default recipes;