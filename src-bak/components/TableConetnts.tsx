type Props = {
  headings: HTMLElement;
};

type BaseTableContents = {
  content: string;
  side: string;
  id: string;
};

export default function TableContents({ headings }: Props) {
  const sideBlank = {
    h2: "0",
    h3: "4",
    h4: "8",
    h5: "12",
    h6: "16",
  };
  const tableContents: BaseTableContents[] = [];
  headings.forEach((heading) => {
    let level: string;
    switch (heading.tagName) {
      case "H2":
        level = "h2";
        break;
      case "H3":
        level = "h3";
        break;
      case "H4":
        level = "h4";
        break;
      case "H5":
        level = "h5";
        break;
      case "H6":
        level = "h6";
        break;
    }

    const content: string = " " + heading.textContent;
    const side: string = sideBlank[level];
    const id: string = heading.id;
    tableContents.push({ side, content, id });
  });
  return (
    <div className="details-content">
      <ol className="ml-6">
        {tableContents.map((item, index: number) => (
          <li key={index} className={"tablecontent-" + item.side}>
            <a
              href={`#${item.id}`}
              className="no-underline hover:underline tablecontent-link"
            >
              <i className="zmdi zmdi-chevron-right" /> {item.content}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
  //return <h1>test</h1>;
}
