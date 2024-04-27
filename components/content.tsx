import { Content as ContentType } from "@/lib/types";

const Content = (props: ContentType) => {
  return (
    <div className="flex flex-col p-10 space-y-5 bg-secondary min-h-full">
      <h1 className="text-3xl font-semibold">{props.title}</h1>
      {props.items.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="flex justify-between ">
              <h2 className="text-xl m-2">{item.primaryHeading}</h2>
              <span className="font-extralight text-xs my-3">{item.date}</span>
            </div>
            <div className="border-l-2 px-2">
              <h3 className="italic font-extralight">
                {item.secondaryHeading}
              </h3>
              <ul className="list-disc mx-8">
                {item.description?.map((desc, idx) => {
                  return <li key={idx}>{desc}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
