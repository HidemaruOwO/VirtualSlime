import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  compact?: boolean;
};

export default function Document({
  title,
  description,
  image,
  url,
  compact,
}: Props) {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      {!compact && (
        <Image
          src={image}
          alt="App Icon"
          height={420}
          width={600}
          className="mb-4 rounded"
        />
      )}

      <div className="mt-2">
        <a
          className="text-2xl text-gray-700 font-bold hover:underline"
          href={url}
        >
          {title}
        </a>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <a href={url}>
        <div className="material-button">
          <p className="material-btnText">Read More</p>
          <div className="material-btnTwo">
            <p className="material-btnTwoText">Go!!</p>
          </div>
        </div>
      </a>
    </div>
  );
}
