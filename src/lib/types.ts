import { z } from "zod";

export const MessageSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
    })
    .trim()
    .min(3, {
      message: "Name must be at least 1 character long.",
    }),
  message: z
    .string({
      required_error: "Message is required.",
    })
    .trim()
    .min(5)
    .max(500, {
      message: "Message must be at most 500 characters long.",
    }),
  isPrivate: z.boolean().default(false),
});

export type Message = z.infer<typeof MessageSchema>;

export type SearchResult = {
  public_id: string;
  secure_url: string;
};

export type NavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  key: "home" | "story" | "wedding" | "guestbook" | "gallery";
};

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
