const NumberList = [
  {
    id: 1,
    item: 'We make sure that the right keyword is in the page title.',
    icon: 'flaticon-html pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 2,
    item: 'We make sure that the right keyword is in the meta description.',
    icon: 'flaticon-app-development pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 3,
    item: 'We make sure that the right keyword is in the HTML heading tag.',
    icon: 'flaticon-diamond pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 4,
    item: 'The keyword must be relevant to your industry.',
    icon: 'flaticon-icon-149196 pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 5,
    item: 'It cannot be “Copied” from another website.',
    icon: 'flaticon-author pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 6,
    item: 'It must get through relevant, insightful, and informative content. Not paid content.',
    icon: 'flaticon-podcast pe-4 pt-1 font-xll text-primary',
  },
  {
    id: 7,
    item: 'We make sure to drives high-quality traffic to your website.',
    icon: 'flaticon-chart pe-4 pt-1 font-xll text-primary',
  },
];

const ListItems01 = [
  {
    id: 1,
    item: 'The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question',
    icon: 'fas fa-check',
  },
  {
    id: 2,
    item: 'If success is a process with a number of defined steps',
    icon: 'fas fa-check',
  },
  {
    id: 3,
    item: 'Without clarity, you send a very garbled message out to the Universe.',
    icon: 'fas fa-check',
  },
  {
    id: 4,
    item: 'This is perhaps the single biggest obstacle that all of us must overcome in order to be successful.',
    icon: 'fas fa-check',
  },
  {
    id: 5,
    item: 'Once you have a clear understanding of what you want,',
    icon: 'fas fa-check',
  },
];
const ListItems02 = [
  {
    id: 1,
    item: 'Commitment is something that comes from understanding that everything has its price.',
    icon: 'fas fa-check',
  },
  {
    id: 2,
    item: 'you may want to reconsider doing it at that time.',
    icon: 'fas fa-check',
  },
  {
    id: 3,
    item: 'What steps are required to get you to the goals? Make the plan as detailed as possible.',
    icon: 'fas fa-check',
  },
  {
    id: 4,
    item: 'The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan.',
    icon: 'fas fa-check',
  },
  {
    id: 5,
    item: 'Before starting any new activity,',
    icon: 'fas fa-check',
  },
];

function OutsourcedServiceList(props) {
  return (
    <>
      <ul className="list-unstyled">
        {NumberList.map((list, index) => (
          <li key={index} className="d-flex mb-3 font-xl">
            <i className={list.icon}></i>
            <p className="mb-0 text-white">{list.item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function AwardList01(props) {
  return (
    <>
      <ul className="list-unstyled mb-3 mb-md-0">
        {ListItems01.map((list, index) => (
          <li key={index}>
            <i className={list.icon}></i>
            <p className="mb-0 text-white">{list.item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function AwardList02(props) {
  return (
    <>
      <ul className="list-unstyled mb-0">
        {ListItems02.map((list, index) => (
          <li key={index}>
            <i className={list.icon}></i>
            <p className="mb-0 text-white">{list.item}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default OutsourcedServiceList;
export { AwardList01, AwardList02 };
