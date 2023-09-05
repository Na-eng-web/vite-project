import { landing_page_top_Image } from "../assets/Images";
import { Projects } from "../layout/projects/project";
import { TopImage } from "../layout/topImage/topImage";

const HomePage = () => {
  return (
    <div>
      <TopImage Image={landing_page_top_Image} />
      <Projects />
    </div>
  );
};

export default HomePage;
