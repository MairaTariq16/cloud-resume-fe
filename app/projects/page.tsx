import Content from "@/components/content";
import { PROJECTS } from "@/lib/constants";

const ProjectsPage = () => {
  return <Content title={PROJECTS.title} items={PROJECTS.items} />;
};

export default ProjectsPage;
