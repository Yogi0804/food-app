import classes from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To you! </h2>
      <p>Choose your favorite Meal from our broad section of available meals</p>
      <p>All the meals are high-quality ingredients</p>
    </section>
  );
};

export default MealSummary;
