type Props = {
  url: string;
};

export default function DownloadButton({ url }: Props) {
  return (
    <a href={url} className="flat-btn download-button">
      <span>
        <i className="zmdi zmdi-download" /> Download
      </span>
    </a>
  );
}
