import Image from "next/image";

export const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start space-x-4">
      <Image
        src="./assets/images/icon-list.svg"
        width={24}
        height={24}
        alt="list icon"
      />
      <p>{text}</p>
    </div>
  );
};
