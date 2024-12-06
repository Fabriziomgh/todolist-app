interface Props {
   text?: string;
}

export default function ErrorMessage({ text }: Props) {
   return <p className="text-sm font-light py-1 px-3 text-app-red">{text}</p>;
}
