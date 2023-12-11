export interface Job {
  type: "sponsors" | "public";
  message: {
    type: "welcome" | "normal" | "canceled";
    content: {
      title: string;
      details: string;
    };
  };
  user: {
    name: string;
    id: string;
  };
  creator: {
    name: string;
    email: string;
  };
}
export interface Event {
  user: {
    name: "rieke" | "lasse" | "leon" | "ines" | "philipp";
  };
  type: "created" | "cleared" | "changedHTML" | "checked";
  date: Date;
}
