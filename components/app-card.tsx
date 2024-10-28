import { FC } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

interface CardProps {
  id: string;
  title: string;
  body: string;
}

export const AppCard: FC<CardProps> = ({ id, title, body }) => {
  return (
    <Card>
      <CardHeader>
        <Link
         href={`/post/${id}`}
        >
          <h4>{title}</h4>
        </Link>
      </CardHeader>
      <CardBody>
        <p>{body}</p>
      </CardBody>
      <CardFooter>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={`/post/${id}`}
        >
          Go
        </Link>
      </CardFooter>
    </Card>
  );
};
