import { ABOUT_INFO, ABOUT_SUMMARY } from "@/lib/constants";

const AboutPage = () => {
  return (
    <div className="flex flex-col p-16 space-y-5 bg-secondary min-h-full max-h-full ">
      <h1 className="text-3xl">About Me</h1>
      <div className="overflow-scroll">
        <div className="border-2 p-10 divide-y-2 space-y-5">
          <p className="text-sm text-justify">{ABOUT_SUMMARY}</p>
          <div className="grid grid-cols-2 text-sm py-5 space-y-2">
            {ABOUT_INFO.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center space-x-2 py-2">
                  {item.icon && <item.icon className="size-5 text-primary" />}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:opacity-30 before:absolute before:left-0 before:bottom-0 "
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
