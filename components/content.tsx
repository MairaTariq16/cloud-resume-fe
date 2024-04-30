import { Content as ContentType } from "@/lib/types";

const Content = (props: ContentType) => {
  return (
    <div className="flex flex-col p-16 space-y-5 bg-secondary min-h-full max-h-full ">
      <h1 className="text-3xl">{props.title}</h1>
      <div className="overflow-scroll">
        {props.items.map((item, idx) => {
          return (
            <div key={idx} className="mt-2 mb-4">
              <div className="flex justify-between">
                {item.primaryLink ? (
                  <a
                    href={item.primaryLink}
                    target="_blank"
                    className="text-lg m-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:opacity-20 before:absolute before:left-0 before:bottom-0 "
                  >
                    {item.primaryHeading}
                  </a>
                ) : (
                  <h2 className="text-lg m-2">{item.primaryHeading}</h2>
                )}
                <span className="font-extralight text-xs my-3">
                  {item.date}
                </span>
              </div>
              <div className="border-l-2 px-2">
                {item.secondaryLink ? (
                  <a
                    href={item.secondaryLink}
                    target="_blank"
                    className="italic font-extralight hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:opacity-20 before:absolute before:left-0 before:bottom-0 "
                  >
                    {item.secondaryHeading}
                  </a>
                ) : (
                  <h3 className="italic font-extralight">
                    {item.secondaryHeading}
                  </h3>
                )}
                <ul className="list-disc mx-8 my-3 text-sm space-y-2">
                  {item.description?.map((desc, idx) => {
                    return <li key={idx}>{desc}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
