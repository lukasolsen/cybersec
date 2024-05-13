type TimelineItemProps = {
  slogan: string;
  title: string;
  date: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItemProps[];
};

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
          {items.map((item) => (
            <div key={item.title} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="font-medium text-teal-500 mb-1 sm:mb-0">
                {item.slogan}
              </div>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-teal-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-teal-500 bg-[#00000040] rounded-full">
                  {item.date}
                </time>
                <div className="text-xl font-bold text-white">{item.title}</div>
              </div>
              <div className="text-gray-400">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
