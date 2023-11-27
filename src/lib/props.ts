export type MessageProps = {
  id: string;
  name: string;
  message: string;
};

export type PostProps = {
  id: string;
  title: string;
  author: string;
  slug: string | null;
  body: string;
  mainImage: string | null;
  createdAt: Date;
};

export type UserProps = {
  email: string;
  image: string;
  name: string;
};

export type SessionProps = {
  session?: { user?: UserProps };
};
