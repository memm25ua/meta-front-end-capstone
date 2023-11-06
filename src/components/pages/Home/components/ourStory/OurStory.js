import "./OurStory.css";

const chefsImage =
  "https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const cookingImage =
  "https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-chefs">
        <img src={chefsImage} alt="Chefs Bejo and Patricio" />
      </div>
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </div>

      <div className="our-story-kitchen">
        <img src={cookingImage} alt="Cooking in the kitchen" />
      </div>
    </section>
  );
};

export default OurStory;
