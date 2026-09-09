import { MyJourney, MyPhilosophy, Styles, WhoIAm } from "../components";

export const About = () => {
  return (
    <>
      <title>About Ice | Tattoo Artist in Barcelona</title>

      <meta
        name="description"
        content="Learn more about Ice, a tattoo artist and visual artist based in Barcelona, specialising in Traditional and Fine Line tattoos."
      />
      <div>
        <WhoIAm />
        <MyJourney />
        <Styles />
        <MyPhilosophy />
      </div>
    </>
  );
};
