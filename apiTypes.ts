interface Job {
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

export default Job;
