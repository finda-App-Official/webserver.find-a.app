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
    email: string;
  };
  creator: {
    name: string;
    email: string;
  };
  createdAt: Date;
  finishedAt: Date | undefined;
}
export interface LogEvent {
  user: {
    name: "Rieke" | "Lasse" | "Leon" | "Ines" | "Philipp" | string;
  };
  type: "created" | "cleared" | "changedHTML" | "checked";
  date: Date;
}
